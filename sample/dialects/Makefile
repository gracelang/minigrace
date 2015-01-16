DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
VERBOSITY = --verbose

c: $(DIALECT_MODULES) $(SAMPLES)

%.gso %.gct: %.grace
	../../minigrace $(VERBOSITY) --dynamic-module $<

whileLiteral.gso: whileLiteral.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<

staticTypes.gso: staticTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<
    
requireTypes.gso: requireTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<

%Example: %Example.grace %.gso
	../../minigrace $(VERBOSITY) $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.gso.dSYM $(SAMPLES) $(DIALECTS)
