DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
VERBOSITY = --verbose

GM = ../../modules/
GDM = ../../dynamic-modules/

DIALECT_DEPENDENCIES = mgcollections errormessages buildinfo util ast gUnit math mirrors

c: $(DIALECT_MODULES) $(SAMPLES)

dialect.gso: $(DIALECT_DEPENDENCIES:%=$(GDM)%.gso)

whileLiteral.gso: whileLiteral.grace dialect.gso
	GRACE_MODULE_PATH="$(GDM):$(GM)" ../../minigrace $(VERBOSITY) --dynamic-module --dir . $<

staticTypes.gso: staticTypes.grace dialect.gso
	GRACE_MODULE_PATH="$(GDM):$(GM)" ../../minigrace $(VERBOSITY) --dynamic-module --dir . $<

requireTypes.gso: requireTypes.grace dialect.gso
	GRACE_MODULE_PATH="$(GDM):$(GM)" ../../minigrace $(VERBOSITY) --dynamic-module --dir . $<

$(GDM)%.gso $(GDM)%.gct: ../../minigrace
	make -C ../../ dynamic-modules/$*.gso

%.gso %.gct: %.grace ../../minigrace
	GRACE_MODULE_PATH="$(GDM):$(GM)" ../../minigrace $(VERBOSITY) --dynamic-module --dir . $<

%Example: %Example.grace %.gso ../../gracelib.o ../../minigrace
	GRACE_MODULE_PATH="$(GDM):$(GM)" ../../minigrace $(VERBOSITY) --dir . $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.gso.dSYM $(SAMPLES) $(DIALECTS)
