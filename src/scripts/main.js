$('.popup-link').magnificPopup({
    type: 'ajax',
    closeBtnInside: true,
    mainClass: 'popup-cont'
});

$(".lazy").lazyload({
    effect : "fadeIn",
    threshold : 200,
    container: $("body")
});

$(document).ready(function(){
    $(window).trigger('resize');
    $("body").trigger('scroll');
});