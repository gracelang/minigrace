DIALECTS = requireTypes fsm objectAssociations dialect grapl loopInvariant whileLiteral staticTypes dbc minitest
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample minitestExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
VERBOSITY = --verbose

GM = ../../modules/
GDM = ../../dynamic-modules/

DIALECT_DEPENDENCIES = mgcollections errormessages buildinfo util ast gUnit math mirrors

c: $(DIALECT_MODULES) $(SAMPLES)

dialect.gso: $(DIALECT_DEPENDENCIES:%=$(GDM)%.gso)

whileLiteral.gso: whileLiteral.grace dialect.gso
	GRACE_MODULE_PATH="$(GDM):$(GRACE_MODULE_PATH)" ../../minigrace $(VERBOSITY) --dynamic-module $<

staticTypes.gso: staticTypes.grace dialect.gso
	GRACE_MODULE_PATH="$(GDM):$(GRACE_MODULE_PATH)" ../../minigrace $(VERBOSITY) --dynamic-module $<
    
requireTypes.gso: requireTypes.grace dialect.gso
	GRACE_MODULE_PATH="$(GDM):$(GRACE_MODULE_PATH)" ../../minigrace $(VERBOSITY) --dynamic-module $<

minitest.gso: minitest.grace $(GDM)gUnit.gso $(GDM)mirrors.gso $(GDM)math.gso ../../minigrace
	GRACE_MODULE_PATH="$(GDM):$(GRACE_MODULE_PATH)" ../../minigrace $(VERBOSITY) --dynamic-module $<

$(GDM)%.gso $(GDM)%.gct: ../../minigrace
	make -C ../../ dynamic-modules/$*.gso

%.gso %.gct: %.grace ../../minigrace
	GRACE_MODULE_PATH="$(GDM):$(GRACE_MODULE_PATH)" ../../minigrace $(VERBOSITY) --dynamic-module $<

%Example: %Example.grace %.gso ../../gracelib.o ../../minigrace
	GRACE_MODULE_PATH="$(GDM):$(GRACE_MODULE_PATH)" ../../minigrace $(VERBOSITY) $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.gso.dSYM $(SAMPLES) $(DIALECTS)
