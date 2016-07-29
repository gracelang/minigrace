DIALECTS = ../../modules/requireTypes fsm objectAssociations ../../modules/dialect grapl loopInvariant whileLiteral ../../modules/staticTypes dbc
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECT_MODULES = $(addsuffix .gso,$(DIALECTS))
VERBOSITY = --verbose

GM = ../../modules/
CM = ../../

DIALECT_DEPENDENCIES = $(CM)errormessages $(CM)buildinfo $(CM)util $(CM)ast \
    $(GM)gUnit $(GM)math $(GM)mirrors

c: $(DIALECT_MODULES) $(SAMPLES)

dialect.gso: $(DIALECT_DEPENDENCIES:%=$(GM)%.gso)

whileLiteral.gso: whileLiteral.grace dialect.gso
	GRACE_MODULE_PATH="$(GM)" ../../minigrace $(VERBOSITY) --noexec --dir . $<

../../modules/staticTypes.gso: ../../modules/staticTypes.grace ../../modules/dialect.gso
	GRACE_MODULE_PATH="$(GM):." ../../minigrace $(VERBOSITY) --noexec --dir . $<

../../modules/requireTypes.gso: ../../modules/requireTypes.grace ../../modules/dialect.gso
	GRACE_MODULE_PATH="$(GM):." ../../minigrace $(VERBOSITY) --noexec --dir . $<

$(GM)%.gct $(GM)%.gso $(GM)%.gcn:
	$(MAKE) -C ../../ VERBOSITY=$(VERBOSITY) modules/$(@F)
    
$(CM)%.gct $(CM)%.gso $(CM)%.gcn:
	$(MAKE) -C ../../ VERBOSITY=$(VERBOSITY) $(@F)

%.gct %.gso %.gcn: %.grace ../../minigrace
	GRACE_MODULE_PATH="$(GM):." ../../minigrace $(VERBOSITY) --noexec --dir . $<

%Example: %Example.grace %.gso ../../gracelib.o ../../minigrace
	GRACE_MODULE_PATH="$(GM):." ../../minigrace $(VERBOSITY) --dir . $<

clean:
	rm -fR *.gso *.c *.gct *.gcn *.c *.gso.dSYM $(SAMPLES) $(DIALECTS)
