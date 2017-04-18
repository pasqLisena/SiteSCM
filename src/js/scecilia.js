$('.popup-link').magnificPopup({
  type: 'ajax',
  closeBtnInside: true,
  mainClass: 'popup-cont'
});

$(".lazy").lazyload({
  effect: "fadeIn",
  threshold: 200,
  container: $("body")
});

$(document).ready(function() {
  $(window).trigger('resize');
  $("body").trigger('scroll');
});

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwb2x5ZmlsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY2VjaWxpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJy5wb3B1cC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gIHR5cGU6ICdhamF4JyxcbiAgY2xvc2VCdG5JbnNpZGU6IHRydWUsXG4gIG1haW5DbGFzczogJ3BvcHVwLWNvbnQnXG59KTtcblxuJChcIi5sYXp5XCIpLmxhenlsb2FkKHtcbiAgZWZmZWN0OiBcImZhZGVJblwiLFxuICB0aHJlc2hvbGQ6IDIwMCxcbiAgY29udGFpbmVyOiAkKFwiYm9keVwiKVxufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICQoXCJib2R5XCIpLnRyaWdnZXIoJ3Njcm9sbCcpO1xufSk7XG4iLCJ2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG5pZiAoIU1vZGVybml6ci50ZXN0UHJvcCgncG9pbnRlckV2ZW50cycpKSB7XG4gICRib2R5LmFkZENsYXNzKCduby1wb2ludGVyLWV2ZW50cycpO1xufVxuXG4oZnVuY3Rpb24oTW9kZXJuaXpyLCB3aW4pIHtcbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ2Nzc3RyYW5zZm9ybXNwcmVzZXJ2ZTNkJywgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcHJvcCA9IE1vZGVybml6ci5wcmVmaXhlZCgndHJhbnNmb3JtU3R5bGUnKTtcbiAgICB2YXIgdmFsID0gJ3ByZXNlcnZlLTNkJztcbiAgICB2YXIgY29tcHV0ZWRTdHlsZTtcbiAgICBpZiAoIXByb3ApIHJldHVybiBmYWxzZTtcblxuICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oc3RyLCBtMSkge1xuICAgICAgcmV0dXJuICctJyArIG0xLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkucmVwbGFjZSgvXm1zLS8sICctbXMtJyk7XG5cbiAgICBNb2Rlcm5penIudGVzdFN0eWxlcygnI21vZGVybml6cnsnICsgcHJvcCArICc6JyArIHZhbCArICc7fScsIGZ1bmN0aW9uKGVsLCBydWxlKSB7XG4gICAgICBjb21wdXRlZFN0eWxlID0gd2luLmdldENvbXB1dGVkU3R5bGUgPyBnZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApIDogJyc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKGNvbXB1dGVkU3R5bGUgPT09IHZhbCk7XG4gIH0pO1xufShNb2Rlcm5penIsIHdpbmRvdykpO1xuXG5pZiAoIU1vZGVybml6ci5jc3N0cmFuc2Zvcm1zIHx8ICFNb2Rlcm5penIuY3Nzdmh1bml0IHx8ICFNb2Rlcm5penIuY3Nzdnd1bml0IHx8XG4gICFNb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkIHx8ICFNb2Rlcm5penIuY3NzdHJhbnNmb3Jtc3ByZXNlcnZlM2QpIHtcbiAgJGJvZHkuYWRkQ2xhc3MoJ25vLXBhcmFsbGF4Jyk7XG59XG4iXX0=
