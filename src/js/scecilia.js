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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwb2x5ZmlsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY2VjaWxpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJy5wb3B1cC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgdHlwZTogJ2FqYXgnLFxuICAgIGNsb3NlQnRuSW5zaWRlOiB0cnVlLFxuICAgIG1haW5DbGFzczogJ3BvcHVwLWNvbnQnXG59KTtcblxuJChcIi5sYXp5XCIpLmxhenlsb2FkKHtcbiAgICBlZmZlY3Q6IFwiZmFkZUluXCIsXG4gICAgdGhyZXNob2xkOiAyMDAsXG4gICAgY29udGFpbmVyOiAkKFwiYm9keVwiKVxufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgJChcImJvZHlcIikudHJpZ2dlcignc2Nyb2xsJyk7XG5cbiAgICAvL2ZpeCBhbHRlcnZpc3RhXG4gICAgJCgnYScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAodGhpcyksIGhyZWY7XG4gICAgICAgIGlmICgkKHRoaXMpWzBdLm9yaWdpbiA9PSBcImh0dHA6Ly9zYW50YWNlY2lsaWFtb2xmZXR0YS5hbHRlcnZpc3RhLm9yZ1wiKSB7XG4gICAgICAgICAgICBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2hyZWYnLCBcImh0dHA6Ly93d3cuc2FudGFjZWNpbGlhbW9sZmV0dGEuaXQvXCIraHJlZik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsInZhciAkYm9keSA9ICQoJ2JvZHknKTtcbmlmKCFNb2Rlcm5penIudGVzdFByb3AoJ3BvaW50ZXJFdmVudHMnKSkge1xuICAgICRib2R5LmFkZENsYXNzKCduby1wb2ludGVyLWV2ZW50cycpO1xufVxuXG4oZnVuY3Rpb24oTW9kZXJuaXpyLCB3aW4pe1xuICAgIE1vZGVybml6ci5hZGRUZXN0KCdjc3N0cmFuc2Zvcm1zcHJlc2VydmUzZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcHJvcCA9IE1vZGVybml6ci5wcmVmaXhlZCgndHJhbnNmb3JtU3R5bGUnKTtcbiAgICAgICAgdmFyIHZhbCA9ICdwcmVzZXJ2ZS0zZCc7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlO1xuICAgICAgICBpZighcHJvcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oc3RyLG0xKXsgcmV0dXJuICctJyArIG0xLnRvTG93ZXJDYXNlKCk7IH0pLnJlcGxhY2UoL15tcy0vLCctbXMtJyk7XG5cbiAgICAgICAgTW9kZXJuaXpyLnRlc3RTdHlsZXMoJyNtb2Rlcm5penJ7JyArIHByb3AgKyAnOicgKyB2YWwgKyAnO30nLCBmdW5jdGlvbiAoZWwsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZSA/IGdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCkgOiAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChjb21wdXRlZFN0eWxlID09PSB2YWwpO1xuICAgIH0pO1xufShNb2Rlcm5penIsIHdpbmRvdykpO1xuXG5pZighTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMgfHwgIU1vZGVybml6ci5jc3N2aHVuaXQgfHwgIU1vZGVybml6ci5jc3N2d3VuaXQgfHxcbiAgICFNb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkIHx8ICFNb2Rlcm5penIuY3NzdHJhbnNmb3Jtc3ByZXNlcnZlM2QpIHtcbiAgICAkYm9keS5hZGRDbGFzcygnbm8tcGFyYWxsYXgnKTtcbn1cbiJdfQ==
