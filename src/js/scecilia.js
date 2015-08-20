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

$(document).ready(function () {
    $(window).trigger('resize');
    $("body").trigger('scroll');

    //fix altervista
    $('a').each(function () {
        var $this = (this), href;
        if ($(this)[0].origin == "http://santaceciliamolfetta.altervista.org") {
            href = $(this).attr('href');
            $(this).attr('href', "http://www.santaceciliamolfetta.it/"+href);
        }
    });
});
var $body = $('body');
if(!Modernizr.testProp('pointerEvents')) {
    $body.addClass('no-pointer-events');
}

(function(Modernizr, win){
    Modernizr.addTest('csstransformspreserve3d', function () {

        var prop = Modernizr.prefixed('transformStyle');
        var val = 'preserve-3d';
        var computedStyle;
        if(!prop) return false;

        prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

        Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
            computedStyle = win.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
        });

        return (computedStyle === val);
    });
}(Modernizr, window));

if(!Modernizr.csstransforms || !Modernizr.cssvhunit || !Modernizr.cssvwunit ||
   !Modernizr.csstransforms3d || !Modernizr.csstransformspreserve3d) {
    $body.addClass('no-parallax');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwb2x5ZmlsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY2VjaWxpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJy5wb3B1cC1saW5rJykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICB0eXBlOiAnYWpheCcsXHJcbiAgICBjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcclxuICAgIG1haW5DbGFzczogJ3BvcHVwLWNvbnQnXHJcbn0pO1xyXG5cclxuJChcIi5sYXp5XCIpLmxhenlsb2FkKHtcclxuICAgIGVmZmVjdDogXCJmYWRlSW5cIixcclxuICAgIHRocmVzaG9sZDogMjAwLFxyXG4gICAgY29udGFpbmVyOiAkKFwiYm9keVwiKVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcclxuICAgICQoXCJib2R5XCIpLnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG5cclxuICAgIC8vZml4IGFsdGVydmlzdGFcclxuICAgICQoJ2EnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAodGhpcyksIGhyZWY7XHJcbiAgICAgICAgaWYgKCQodGhpcylbMF0ub3JpZ2luID09IFwiaHR0cDovL3NhbnRhY2VjaWxpYW1vbGZldHRhLmFsdGVydmlzdGEub3JnXCIpIHtcclxuICAgICAgICAgICAgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2hyZWYnLCBcImh0dHA6Ly93d3cuc2FudGFjZWNpbGlhbW9sZmV0dGEuaXQvXCIraHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuaWYoIU1vZGVybml6ci50ZXN0UHJvcCgncG9pbnRlckV2ZW50cycpKSB7XHJcbiAgICAkYm9keS5hZGRDbGFzcygnbm8tcG9pbnRlci1ldmVudHMnKTtcclxufVxyXG5cclxuKGZ1bmN0aW9uKE1vZGVybml6ciwgd2luKXtcclxuICAgIE1vZGVybml6ci5hZGRUZXN0KCdjc3N0cmFuc2Zvcm1zcHJlc2VydmUzZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHByb3AgPSBNb2Rlcm5penIucHJlZml4ZWQoJ3RyYW5zZm9ybVN0eWxlJyk7XHJcbiAgICAgICAgdmFyIHZhbCA9ICdwcmVzZXJ2ZS0zZCc7XHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGU7XHJcbiAgICAgICAgaWYoIXByb3ApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbihzdHIsbTEpeyByZXR1cm4gJy0nICsgbTEudG9Mb3dlckNhc2UoKTsgfSkucmVwbGFjZSgvXm1zLS8sJy1tcy0nKTtcclxuXHJcbiAgICAgICAgTW9kZXJuaXpyLnRlc3RTdHlsZXMoJyNtb2Rlcm5penJ7JyArIHByb3AgKyAnOicgKyB2YWwgKyAnO30nLCBmdW5jdGlvbiAoZWwsIHJ1bGUpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbi5nZXRDb21wdXRlZFN0eWxlID8gZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSA6ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKGNvbXB1dGVkU3R5bGUgPT09IHZhbCk7XHJcbiAgICB9KTtcclxufShNb2Rlcm5penIsIHdpbmRvdykpO1xyXG5cclxuaWYoIU1vZGVybml6ci5jc3N0cmFuc2Zvcm1zIHx8ICFNb2Rlcm5penIuY3Nzdmh1bml0IHx8ICFNb2Rlcm5penIuY3Nzdnd1bml0IHx8XHJcbiAgICFNb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkIHx8ICFNb2Rlcm5penIuY3NzdHJhbnNmb3Jtc3ByZXNlcnZlM2QpIHtcclxuICAgICRib2R5LmFkZENsYXNzKCduby1wYXJhbGxheCcpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==