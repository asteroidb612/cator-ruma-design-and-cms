$(window).on("scroll", function() {
    var s = Math.min(60, Math.max(25, 60-$(document).scrollTop()/2));
    $("#logo").width(s).height(s);


    var t = $(document).scrollTop()/6;  //half of percentage scrolled in pixels
    $("header").css({
        'margin-left': 21 - Math.min(12, t) + '%',
        'width': Math.min(79 + t, 91) + '%'
    });
});
