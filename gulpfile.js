var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

var isProduction = (gutil.env.type === 'production');
var defaultTask = isProduction ? ['build'] : ['build-light', 'watch'];

gulp.task('default', defaultTask, function () {
    gutil.log('Gulp is running!');
    var enviroment_type = gutil.env.type || 'default';
    gutil.log('Enviroment: ' + enviroment_type);
});

gulp.task('build',
    ['build-bower-js', 'build-js', 'build-css', 'copy-html', 'copy-assets'],
    function () {
    });
gulp.task('build-light', ['build-bower-js', 'build-js', 'build-css'], function () {
    });

gulp.task('watch', function () {
    gulp.watch('src/scripts/*', ['build-js']);
    gulp.watch('src/sass/*.scss', ['build-css']);
});

gulp.task('copy-html', function () {
    var staticMapping = [{
        src: 'src/*.html',
        dist: 'dist'
    }, {
        src: 'src/view/*',
        dist: 'dist/view'
    }];
    for (var i = 0; i < staticMapping.length; i++) {
        var res = staticMapping[i];
        gulp.src(res.src).pipe(gulp.dest(res.dist));
    }
});

gulp.task('copy-assets', function () {
    var assetsFolder = ['fonts', 'img'];
    var assetsFiles = ['manifest.json', 'browserconfig.xml'];
    var src, dist;
    for (var i = 0; i < assetsFolder.length; i++) {
        src = 'src/' + assetsFolder[i] + '/**/*';
        dist = 'dist/' + assetsFolder[i];
        gulp.src(src).pipe(gulp.dest(dist));
    }
    for (var j = 0; j < assetsFiles.length; j++) {
        gulp.src(assetsFiles[j]).pipe(gulp.dest('dist'));
    }
});

gulp.task('build-css', function () {
    var sass_config = {
        css: isProduction ? "dist/css" : "src/css",
        sass: "src/sass",
        style: isProduction ? "compressed" : "expanded",
        comments: !isProduction,
        sourcemap: true
    };
    return gulp.src('src/sass/*.scss')
        .pipe(sass(sass_config));
});

gulp.task('build-bower-js', function () {
    return gulpBuildJs([
        'bower_components/modernizr/modernizr.js',
        'bower_components/**/dist/*.js',
        'bower_components/jquery.lazyload/jquery.lazyload.js'
    ], 'vendor.js');
});

gulp.task('build-js', function () {
    return gulpBuildJs('src/scripts/*.js', 'scecilia.js');
});

function gulpBuildJs(src, name) {
    var dist_folder = isProduction ? 'dist/js' : 'src/js';
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(concat(name))
        //only uglify if gulp is ran with '--type production'
        .pipe(isProduction ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist_folder));
}

//TODO browserconfig.xml
//TODO manifest.json