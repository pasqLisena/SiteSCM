var $body = $('body');
if(!Modernizr.testProp('pointerEvents')) {
    $body.addClass('no-pointer-events');
}
if(!Modernizr.testAllProps('transformStyle', 'preserve-3d')) {
    $body.addClass('no-perspective');
}
