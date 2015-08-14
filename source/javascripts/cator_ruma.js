$(document).ready(function () {
    resize();

    // var feature = {
    //     "title": "The Union Station", 
    //     "text": "Hated Denver Station’s transformation into the Crawford Hotel and iconic hot spot has changed the face of LoDo. Winner of the 2014 American Council of Engineering Companies (ACEC) Excellence Award.", 
    //     "image": "images/union.web.jpg"
    //   }

    $.get('index.yaml', function(data) {
        var index = jsyaml.safeLoad(data);
        
        $('#feature-title').text(index.feature.title);
        $('#feature-text').text(index.feature.text);
        $('#feature-image').attr('src', index.feature.image);
        $('#mobile-feature-title').text(index.feature.title);
        $('#mobile-feature-text').text(index.feature.text);

        $('#mobile-

    });

});

document.addEventListener("touchmove", resize, false);
document.addEventListener("scroll", resize, false);
window.addEventListener("resize", resize, false);

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
