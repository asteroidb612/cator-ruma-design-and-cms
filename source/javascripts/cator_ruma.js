function class_safe(string) {
//Remove everything but alphanumeric for use in classes
    return string.replace(/\W/g, ''); 
}
function resize() {
    var h = $('.header-container').height();
    var total_width = $('.header-container').width();
    var factor = $('body').width() > 800 ? 2 : 1.5;
    var max = factor*h;
    var min = h;

    //Logo should start twice the height of the top bar, and shrink to that height
    var width = Math.min(max, Math.max(min, max - $(document).scrollTop()/3));

    $("#logo").width(width);

    $("header").css({
        'margin-left': width +2,
        'width': total_width - width,
    });
}

document.addEventListener("touchmove", resize, false);
document.addEventListener("scroll", resize, false);

$(document).ready(function () {
    resize();
    
    var contact = $('#contact').html();
    var contact_template = Handlebars.compile(contact);
    
    function use_backup() {
    }

    $.get('contact.yaml')
        .done(function(data) {
            try{ 
                var yaml = jsyaml.load(data);
                
                for(var i=0; i<yaml.locations.length; i++) {
                    var daddr = yaml.locations[i].line1 +' '+ yaml.locations[i].line2
                    daddr = daddr.replace(/\W+/g,'+');
                    yaml.locations[i].daddr = daddr;
                    
                    var phone_link = '+1' + yaml.locations[i].phone.replace(/\W+/g, '');
                    yaml.locations[i].phone_link = phone_link;
                } 
                $('#contact-placeholder').html(contact_template(yaml));
            }
            catch (e) {
                console.log("Yaml is ill-formed", e);
                use_backup();
            }
        }).fail(use_backup);
});
