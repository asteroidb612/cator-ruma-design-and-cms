bundle exec middleman build --verbose
sed 's/!ruby.*//' build/index.yaml > index.yaml.tmp && mv index.yaml.tmp build/index.yaml
sed 's/###/{{#if @first}}active{{\/if}}/; /Proc/d' build/index.html > html.tmp && mv html.tmp build/index.html
sed '/Proc/d' build/about.html > about.html.tmp && mv about.html.tmp build/about.html
