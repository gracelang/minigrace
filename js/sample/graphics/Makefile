DIALECTS = simplegraphics logo turtle sniff
SAMPLES =  simpleGraphicsExample logoExample sniffpong
VERBOSITY = --verbose

all: $(DIALECTS:%=%.js) $(SAMPLES:%=%.js)

%.js: %.grace
	../../minigrace --target js $(VERBOSITY) -o $@ $<

%.gso: %.grace
	../../minigrace --dynamic-module $(VERBOSITY) -o $@ $<

logoExample: logo.gso logo.js

simpleGraphicsExample: simpleGraphics.gso simpleGraphics.js

sniffpong: sniff.gso sniff.js

clean:
	rm -fR *.gct *.gso *.c *.gcn $(DIALECTS) *.gso.dSYM *.js $(SAMPLES) $(DIALECTS_JS)
