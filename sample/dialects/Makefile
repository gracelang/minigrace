DIALECTS = StaticGrace fsm ObjectAssociations dialect grapl loopinvariant literalblock structural dbc
SAMPLES = fsm_example ObjectAssociations_example dialect_example.gso grapl_example loopinvariant_example

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) dialect_example.js

all: $(DIALECT_MODULES) $(SAMPLES) $(DIALECTS_JS)

%.gso: %.grace
	../../minigrace --dynamic-module $<

%.js: %.grace
	../../minigrace --target js -o $@ $<

dialect_example.gso: dialect_example.grace dialect.gso
	../../minigrace --dynamic-module $<

%: %.grace $(DIALECT_MODULES)
	../../minigrace --make $<

clean:
	rm -f *.gso *.gct *.gcn *.c *.js fsm_example ObjectAssociations_example dialect_example.gso
