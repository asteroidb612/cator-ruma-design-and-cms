$(document).ready(function () {
    resize();
});

document.addEventListener("touchmove", resize, false);
document.addEventListener("scroll", resize, false);
function resize() {
    var h = $('.header-container').height();
    var total_width = $('.header-container').width();
    var max = 3*h;
    var min = h;

    //Logo should start twice the height of the top bar, and shrink to that height
    var width = Math.min(max, Math.max(min, max - $(document).scrollTop()/2));

    $("#logo").width(width);

    var t = $(document).scrollTop()/6;  //half of percentage scrolled in pixels
    $("header").css({
        'margin-left': width,
        'width': total_width - width,
    });
}
