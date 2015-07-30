DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
VERBOSITY = --verbose

GM = ../../modules/

DIALECT_DEPENDENCIES = mgcollections errormessages buildinfo util ast gUnit math mirrors

c: $(DIALECT_MODULES) $(SAMPLES)

dialect.gso: $(DIALECT_DEPENDENCIES:%=$(GM)%.gso)

whileLiteral.gso: whileLiteral.grace dialect.gso
	GRACE_MODULE_PATH="$(GM)" ../../minigrace $(VERBOSITY) --dir . $<

staticTypes.gso: staticTypes.grace dialect.gso
	GRACE_MODULE_PATH="$(GM)" ../../minigrace $(VERBOSITY) --dir . $<

requireTypes.gso: requireTypes.grace dialect.gso
	GRACE_MODULE_PATH="$(GM)" ../../minigrace $(VERBOSITY) --dir . $<

$(GM)%.gct $(GM)%.gso $(GM)%.gcn: ../../minigrace
	$(MAKE) -C ../../ VERBOSITY=$(VERBOSITY) modules/$(@F)

%.gct %.gso %.gcn: %.grace ../../minigrace
	GRACE_MODULE_PATH="$(GM)" ../../minigrace $(VERBOSITY) --dir . $<

%Example: %Example.grace %.gso ../../gracelib.o ../../minigrace
	GRACE_MODULE_PATH="$(GM)" ../../minigrace $(VERBOSITY) --dir . $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.gso.dSYM $(SAMPLES) $(DIALECTS)
