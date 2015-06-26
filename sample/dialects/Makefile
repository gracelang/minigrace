DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc minitest
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample minitestExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
VERBOSITY = --verbose

DIALECT_DEPENDENCIES = mgcollections errormessages buildinfo util ast gUnit math mirrors

c: $(DIALECT_MODULES) $(SAMPLES)

%.gso %.gct: %.grace ../../minigrace
	../../minigrace $(VERBOSITY) --dynamic-module $<

$(DIALECT_DEPENDENCIES:%=../../%.gso): ../../%.gso:
	cd ../../; $(MAKE) $(shell basename $@)

$(DIALECT_DEPENDENCIES:%=../../%.gct): ../../%.gct:
	cd ../../; $(MAKE) $(shell basename $@)

dialect.gso: $(DIALECT_DEPENDENCIES:%=../../%.gso)

whileLiteral.gso: whileLiteral.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<

staticTypes.gso: staticTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<
    
requireTypes.gso: requireTypes.grace dialect.gso
	../../minigrace $(VERBOSITY) --dynamic-module $<

minitest.gso: minitest.grace gUnit.gso mirrors.gso ../../minigrace
	../../minigrace $(VERBOSITY) --dynamic-module $<

gUnit.gso: ../../gUnit.gso
	ln -sf ../../gUnit.gso .
	ln -sf ../../gUnit.gct .

mirrors.gso: ../../mirrors.gso
	ln -sf ../../mirrors.gso .
	ln -sf ../../mirrors.gct .

%Example: %Example.grace %.gso ../../gracelib.o ../../minigrace
	../../minigrace $(VERBOSITY) $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.gso.dSYM $(SAMPLES) $(DIALECTS)
