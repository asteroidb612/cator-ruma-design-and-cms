$(document).ready(function () {
    resize();
});

document.addEventListener("touchmove", resize, false);
document.addEventListener("scroll", resize, false);
function resize() {
    var h = $('.header-container').height();
    var total_width = $('.header-container').width();
    var max = 2.5*h;
    var min = h;

    //Logo should start twice the height of the top bar, and shrink to that height
    var width = Math.min(max, Math.max(min, max - $(document).scrollTop()/3));

    $("#logo").width(width);

    $("header").css({
        'margin-left': width + 5,
        'width': total_width - width,
    });
}
