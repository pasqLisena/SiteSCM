const {
  watch, series, src, dest,
} = require('gulp');
const gutil = require('gulp-util');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const fileinclude = require('gulp-file-include');

const nib = require('nib');
const mdiStylus = require('mdi-stylus');
const rupture = require('rupture');

const isProduction = (gutil.env.type === 'production');

const DIST_FOLDER = 'dist';

function buildHtml() {
  const out = isProduction ? DIST_FOLDER : 'src';

  return src('src/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(dest(out));
}

function buildImg() {
  const files = ['jpg', 'png', 'ico'].map((ext) => `src/img/**/*.${ext}`);
  return src(files)
    .pipe(imagemin({ progressive: true }))
    .pipe(dest(`${DIST_FOLDER}/img`));
}

function copyAssets() {
  return src(['src/manifest.json', 'src/browserconfig.xml'])
    .pipe(dest(DIST_FOLDER));
}

function copyFonts() {
  return src('src/fonts/**/*')
    .pipe(dest(`${DIST_FOLDER}/fonts`));
}

function buildCss() {
  const out = isProduction ? `${DIST_FOLDER}/css` : 'src/css';
  return src('src/stylus/screen.styl')
    .pipe(stylus({
      compress: isProduction,
      use: [nib(), mdiStylus(), rupture()],
    }))
    .pipe(dest(out));
}

function buildJs() {
  const out = isProduction ? `${DIST_FOLDER}/js` : 'src/js';
  return src('src/scripts/*.js')
    .pipe(isProduction ? gutil.noop() : sourcemaps.init())
    .pipe(concat('main.js'))
    // only uglify if gulp is ran with '--type production'
    .pipe(isProduction ? uglify() : sourcemaps.write())
    .pipe(dest(out));
}

function watching() {
  watch('src/scripts/*', buildJs);
  watch('src/stylus/*.styl', buildCss);
  watch('src/html/**/*.html', buildHtml);
}


exports.build = series(buildJs, buildCss, buildImg, buildHtml, copyFonts, copyAssets);
exports.serve = series(buildJs, buildCss, buildHtml, watching);
