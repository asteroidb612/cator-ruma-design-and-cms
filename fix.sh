bundle exec middleman build
sed 's/!ruby.*//' build/index.yaml > yaml.tmp && mv yaml.tmp build/index.yaml
sed 's/###/{{#if @first}}active{{\/if}}/' build/index.html > html.tmp && mv html.tmp build/index.html
