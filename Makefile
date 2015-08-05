all: templates/index.html templates/about.html templates/careers.html

templates/index.html: s/header.s.html s/footer.s.html s/index.s.html
	cat s/header.s.html s/index.s.html s/footer.s.html > templates/index.html

templates/about.html: s/about.s.html s/header.s.html s/footer.s.html
	cat s/header.s.html s/about.s.html s/footer.s.html > templates/about.html

templates/careers.html: s/careers.s.html s/header.s.html s/footer.s.html
	cat s/header.s.html s/careers.s.html s/footer.s.html > templates/careers.html

clean: templates/about.html templates/index.html templates/careers.html
	rm templates/about.html templates/index.html templates/careers.html

