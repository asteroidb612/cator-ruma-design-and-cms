$(window).on("scroll", function() {
    var s = Math.min(100, Math.max(30, 100-$(document).scrollTop()/2));
    $("img").width(s).height(s);
});