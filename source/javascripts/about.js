$(document).ready(function() {
    var media = $('#media').html();
    var media_template = Handlebars.compile(media);

    var about = $('#about').html();
    var about_template = Handlebars.compile(about);
    
    var principals = $('#principals').html();
    var principals_template = Handlebars.compile(principals);
    
    var associates = $('#associates').html();
    var associates_template = Handlebars.compile(associates);
     
    //If yaml doesn't load, etc
    function use_backup() {
    };
    
    $.get('about.yaml')
        .done(function(data){
            try{
                var yaml = jsyaml.load(data);
                
                //Add a class-safe string for modal data targets
                for (var i=0; i<yaml.principals.length; i++) {
                    yaml.principals[i].target =  yaml.principals[i].name.replace(/[^A-Za-z]/g,'');
                }
                for (var i=0; i<yaml.associates.length; i++) {
                    yaml.associates[i].target =  yaml.associates[i].name.replace(/[^A-Za-z]/g,'');
                }

                $('#media-placeholder').html(media_template(yaml));
                $('#about-placeholder').html(about_template(yaml));
                $('#principals-placeholder').html(principals_template(yaml));
                $('#associates-placeholder').html(associates_template(yaml));
            }
            catch (e) { //Yaml throws exception
                console.log("Yaml is ill-formed", e);
                use_backup();
            }
        }).fail(use_backup); //get is rejected
});
