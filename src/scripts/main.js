$('.popup-link').magnificPopup({
    type: 'ajax',
    closeBtnInside: true,
    mainClass: 'popup-cont'
});

$(".lazy").lazyload({
    effect : "fadeIn",
    threshold : 200,
    container: $("body"),
    skip_invisible : true
});

$(document).ready(function(){
    $(window).trigger('resize');
    $("body").trigger('scroll');
});