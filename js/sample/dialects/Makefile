.PHONY: compile js run.js
DIALECTS = dbc fsm objectAssociations dialect grapl loopInvariant
DIALECT_DIALECTS = whileLiteral staticTypes requireTypes
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) $(addsuffix .js,$(DIALECT_DIALECTS))
VERBOSITY = --verbose
MG := ../../../minigrace
UPPATH := ../../../modules/:../../:../../../:
# ../../ to get the js files for running, and ../../../ for the .gso for compiling

DIALECT_DEPENDENCIES = mgcollections errormessages buildinfo util ast gUnit

compile: $(DIALECTS_JS)
js: $(DIALECTS_JS) run.js

# These need the .gso to load at compile time, and the .js to load at runtime.

staticTypes.js: staticTypes.grace dialect.gso dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ staticTypes.grace

requireTypes.js: requireTypes.grace dialect.gso dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ requireTypes.grace

whileLiteral.js: whileLiteral.grace dialect.gso dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ whileLiteral.grace

dialect.gso: $(DIALECT_DEPENDENCIES:%=../../../modules/%.gso)

%Example.js: %Example.grace %.js %.gso
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ $<

$(addsuffix .js,$(DIALECTS)): %.js: %.grace
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ $<

%.gso %.gct %.gcn: %.grace
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --dir . $<

clean:
	rm -fR *.gct *.gso *.c *.gcn $(DIALECTS) *.gso.dSYM *.js $(SAMPLES) $(DIALECTS_JS)

run.js: $(SAMPLES:%=%.js)
	for f in $(SAMPLES:%=%.js) ; do GRACE_MODULE_PATH=$(UPPATH) ../../tests/grace-node $$f ; done

$(DIALECT_DEPENDENCIES:%=../../../modules/%.gso): ../../../modules/%.gso:
	$(MAKE) -C ../../.. modules/$*.gso
