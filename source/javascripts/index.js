$(document).ready(function () {
    var feature = $('#feature').html();
    var feature_template = Handlebars.compile(feature);

    var mobile_sectors = $('#mobile-sectors').html();
    var mobile_sectors_template = Handlebars.compile(mobile_sectors);
    
    var sectors = $('#sectors').html();
    var sectors_template = Handlebars.compile(sectors);

    function use_backup() {
        var backup = {
            feature: {
                "title": "The Union Station", 
                "text": "Beloved Denver Station’s transformation into the Crawford Hotel and iconic hot spot has changed the face of LoDo. Winner of the 2014 American Council of Engineering Companies (ACEC) Excellence Award.",
                "image": "images/union.web.jpg"
            },
            mobile_sectors: {
            },
            sectors: {
            }
        };
        console.log("Using Backup");
        $('#feature-placeholder').html(feature_template(backup));
        $('#mobile-sectors-placeholder').html(mobile_sectors_template(backup));
        $('#sectors-placeholder').html(sectors_template(backup));
    }
    $.get('index.yaml')
        .done(function(data) {
            try { // to convert Yaml and use it
                var yaml = jsyaml.load(data);
                
                //Split the sectors for columns
                var mid = Math.ceil(yaml.sectors.length/2);
                yaml.halves = [yaml.sectors.slice(0, mid), 
                               yaml.sectors.slice(mid)];

                $('#feature-placeholder').html(feature_template(yaml));
                $('#mobile-sectors-placeholder').html(mobile_sectors_template(yaml));
                $('#sectors-placeholder').append(sectors_template(yaml));
            }
            catch (e) { //Yaml throws exception
                console.log("Yaml is ill-formed", e);
                use_backup();
            } 
        }).fail(use_backup); //get is rejected
});
