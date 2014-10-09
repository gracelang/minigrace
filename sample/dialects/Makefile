DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample.gso graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) dialectExample.js

all: $(DIALECT_MODULES) $(SAMPLES) $(DIALECTS_JS)

%.gso: %.grace
	../../minigrace --dynamic-module $<

staticTypes.js: dialect.grace staticTypes.grace
	../../minigrace --target js -o $@ $<

whileLiteral.js: dialect.grace whileLiteral.grace
	../../minigrace --target js -o $@ $<

%.js: %.grace
	../../minigrace --target js -o $@ $<

dialectExample.gso: dialectExample.grace dialect.grace
	../../minigrace --dynamic-module $<

fsmExample: fsm fsmExample.grace
	../../minigrace fsmExample.grace

objectAssociationsExample: objectAssociations objectAssociationsExample.grace
	../../minigrace objectAssociationsExample.grace

graplExample: grapl graplExample.grace
	../../minigrace graplExample.grace

loopInvariantExample: loopInvariant loopInvariantExample.grace
	../../minigrace loopInvariantExample.grace

whileLiteral.gso: dialect.grace dialect.c whileLiteral.grace
	../../minigrace --dynamic-module whileLiteral.grace

staticTypes.gso: dialect.grace dialect.c staticTypes.grace
	../../minigrace --dynamic-module staticTypes.grace

whileLiteralExample: whileLiteral.grace whileLiteralExample.grace
	../../minigrace whileLiteralTest.grace

%: %.grace $(DIALECT_MODULES)
	../../minigrace --make $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.js *.gso.dSYM $(SAMPLES) $(DIALECTS)
