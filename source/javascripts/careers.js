$(document).ready(function() {
    var feature = $('#feature').html();
    var feature_template = Handlebars.compile(feature);
    
    var jobs = $('#jobs').html();
    var jobs_template = Handlebars.compile(jobs);

    function use_backup() {
    };

    $.get('careers.yaml')
        .done(function(data) {
            try{
                var yaml = jsyaml.load(data);
                
                for (var i=0; i < yaml.jobs.length; i++) {
                    yaml.jobs[i].safetitle = class_safe(yaml.jobs[i].title);
                    yaml.jobs[i].blurb = preserve_white(yaml.jobs[i].blurb);
                }
                $('#feature-placeholder').html(feature_template(yaml));
                $('#jobs-placeholder').html(jobs_template(yaml));
            }
            catch (e) {
                console.log("Yaml is ill-formed", e);
                use_backup();
            }
        }).fail(use_backup);
});
