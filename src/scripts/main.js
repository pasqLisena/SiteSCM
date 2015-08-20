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