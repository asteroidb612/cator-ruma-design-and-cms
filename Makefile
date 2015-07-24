all: index.html about.html

index.html: s/header.s.html s/footer.s.html s/index.s.html
	cat s/header.s.html s/index.s.html s/footer.s.html > index.html

about.html: s/about.s.html s/header.s.html s/footer.s.html
	cat s/header.s.html s/about.s.html s/footer.s.html > about.html

clean: about.html index.html
	rm about.html index.html
