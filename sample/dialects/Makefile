DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) dialectExample.js

all: $(DIALECT_MODULES) $(DIALECTS_JS) $(SAMPLES)

%.gso %.gct: %.grace
	../../minigrace --dynamic-module $<

staticTypes.js: staticTypes.grace dialect.gso
	../../minigrace --target js -o $@ staticTypes.grace

requireTypes.js: requireTypes.grace dialect.js
	../../minigrace --target js -o $@ requireTypes.grace

whileLiteral.js: whileLiteral.grace dialect.js
	../../minigrace --target js -o $@ whileLiteral.grace

%.js: %.grace
	../../minigrace --target js -o $@ $<

whileLiteral.gso: whileLiteral.grace dialect.gso dialect.c
	../../minigrace --dynamic-module $<

staticTypes.gso: staticTypes.grace dialect.gso
	../../minigrace --dynamic-module $<
    
requireTypes.gso: requireTypes.grace dialect.gso
	../../minigrace --dynamic-module $<

%Example: %Example.grace %.gso
	../../minigrace $<

%Example.js: %Example.grace %.js
	../../minigrace -target js $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.js *.gso.dSYM $(SAMPLES) $(DIALECTS)
