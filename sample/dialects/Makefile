DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) dialectExample.js
VERBOSITY = --verbose

all: $(DIALECT_MODULES) $(DIALECTS_JS) $(SAMPLES)

%.gso %.gct: %.grace
	../../minigrace $(VERBOSITY) --dynamic-module $<

staticTypes.js: staticTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --target js -o $@ staticTypes.grace

requireTypes.js: requireTypes.grace dialect.js
	../../minigrace $(VERBOSITY) --target js -o $@ requireTypes.grace

whileLiteral.js: whileLiteral.grace dialect.js
	../../minigrace $(VERBOSITY) --target js -o $@ whileLiteral.grace

%.js: %.grace
	../../minigrace $(VERBOSITY) --target js -o $@ $<

whileLiteral.gso: whileLiteral.grace dialect.gso dialect.c
	../../minigrace $(VERBOSITY) --dynamic-module $<

staticTypes.gso: staticTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<
    
requireTypes.gso: requireTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<

%Example: %Example.grace %.gso
	../../minigrace $(VERBOSITY) $<

%Example.js: %Example.grace %.js
	../../minigrace $(VERBOSITY) -target js $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.js *.gso.dSYM $(SAMPLES) $(DIALECTS)
