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
var $body = $('body');
if(!Modernizr.testProp('pointerEvents')) {
    $body.addClass('no-pointer-events');
}
if(!Modernizr.testAllProps('transformStyle', 'preserve-3d')) {
    $body.addClass('no-perspective');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwb2x5ZmlsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NlY2lsaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcucG9wdXAtbGluaycpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgdHlwZTogJ2FqYXgnLFxyXG4gICAgY2xvc2VCdG5JbnNpZGU6IHRydWUsXHJcbiAgICBtYWluQ2xhc3M6ICdwb3B1cC1jb250J1xyXG59KTtcclxuXHJcbiQoXCIubGF6eVwiKS5sYXp5bG9hZCh7XHJcbiAgICBlZmZlY3QgOiBcImZhZGVJblwiLFxyXG4gICAgdGhyZXNob2xkIDogMjAwLFxyXG4gICAgY29udGFpbmVyOiAkKFwiYm9keVwiKSxcclxuICAgIHNraXBfaW52aXNpYmxlIDogdHJ1ZVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XHJcbiAgICAkKFwiYm9keVwiKS50cmlnZ2VyKCdzY3JvbGwnKTtcclxufSk7IiwidmFyICRib2R5ID0gJCgnYm9keScpO1xyXG5pZighTW9kZXJuaXpyLnRlc3RQcm9wKCdwb2ludGVyRXZlbnRzJykpIHtcclxuICAgICRib2R5LmFkZENsYXNzKCduby1wb2ludGVyLWV2ZW50cycpO1xyXG59XHJcbmlmKCFNb2Rlcm5penIudGVzdEFsbFByb3BzKCd0cmFuc2Zvcm1TdHlsZScsICdwcmVzZXJ2ZS0zZCcpKSB7XHJcbiAgICAkYm9keS5hZGRDbGFzcygnbm8tcGVyc3BlY3RpdmUnKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=