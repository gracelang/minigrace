DIALECTS = StaticGrace fsm ObjectAssociations dialect grapl loopinvariant literalblock structural dbc
SAMPLES = fsm_example ObjectAssociations_example dialect_example.gso grapl_example loopinvariant_example

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) dialect_example.js

all: $(DIALECT_MODULES) $(SAMPLES) $(DIALECTS_JS)

%.gso: %.grace
	../../minigrace --dynamic-module $<

%.js: %.grace
	../../minigrace --target js -o $@ $<

dialect_example.gso: dialect_example.grace dialect.grace
	../../minigrace --dynamic-module $<

fsm_example: fsm fsm_example.grace
	../../minigrace fsm_example.grace

ObjectAssociations_example: ObjectAssociations ObjectAssociations_example.grace
	../../minigrace ObjectAssociations_example.grace

grapl_example: grapl grapl_example.grace
	../../minigrace grapl_example.grace

loopinvariant_example: loopinvariant loopinvariant_example.grace
	../../minigrace loopinvariant_example.grace

literalblock.gso: dialect.grace dialect.c literalblock.grace
	../../minigrace --dynamic-module literalblock.grace

structural.gso: dialect.grace dialect.c structural.grace
	../../minigrace --dynamic-module structural.grace

literal_test: literalblock.grace literal_test.grace
	../../minigrace literal_test.grace

%: %.grace $(DIALECT_MODULES)
	../../minigrace --make $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.js *.gso.dSYM $(SAMPLES) $(DIALECTS)
