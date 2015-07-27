all: templates/index.html templates/about.html

templates/index.html: s/header.s.html s/footer.s.html s/index.s.html
	cat s/header.s.html s/index.s.html s/footer.s.html > templates/index.html

templates/about.html: s/about.s.html s/header.s.html s/footer.s.html
	cat s/header.s.html s/about.s.html s/footer.s.html > templates/about.html

clean: templates/about.html templates/index.html
	rm templates/about.html templates/index.html
