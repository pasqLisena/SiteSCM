var $body = $('body');
if (!Modernizr.testProp('pointerEvents')) {
  $body.addClass('no-pointer-events');
}

(function(Modernizr, win) {
  Modernizr.addTest('csstransformspreserve3d', function() {

    var prop = Modernizr.prefixed('transformStyle');
    var val = 'preserve-3d';
    var computedStyle;
    if (!prop) return false;

    prop = prop.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');

    Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function(el, rule) {
      computedStyle = win.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
    });

    return (computedStyle === val);
  });
}(Modernizr, window));

if (!Modernizr.csstransforms || !Modernizr.cssvhunit || !Modernizr.cssvwunit ||
  !Modernizr.csstransforms3d || !Modernizr.csstransformspreserve3d) {
  $body.addClass('no-parallax');
}
