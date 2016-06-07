DIALECTS = simplegraphics logo turtle sniff
SAMPLES =  simpleGraphicsExample logoExample sniffpong
VERBOSITY = --verbose

all: dialects samples

dialects: $(DIALECTS:%=%.js)

samples:  $(SAMPLES:%=%.js)

%.gct %.js: %.grace
	../../minigrace --target js --dir . $(VERBOSITY) $<

%.gso %.gcn: %.grace
	../../minigrace --dir . $(VERBOSITY) $<

logoExample: logo.gso logo.js

simpleGraphicsExample: simpleGraphics.gso simpleGraphics.js

sniffpong: sniff.gso sniff.js

clean:
	rm -fR *.gct *.gso *.c *.gcn $(DIALECTS) *.gso.dSYM *.js $(SAMPLES) $(DIALECTS_JS)
