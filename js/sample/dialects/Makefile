.PHONY: compile js run.js
DIALECTS = dbc fsm objectAssociations dialect grapl loopInvariant minitest
DIALECT_DIALECTS = whileLiteral staticTypes requireTypes
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample

DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) $(addsuffix .js,$(DIALECT_DIALECTS))
VERBOSITY = --verbose
MG := ../../../minigrace
UPPATH := ../../../dynamic-modules/:../../:../../../:$(GRACE_MODULE_PATH)
# ../../ to get the js files for running, and ../../../ for the .gso for compiling

DIALECT_DEPENDENCIES = mgcollections errormessages buildinfo util ast gUnit

compile: $(DIALECTS_JS)
js: $(DIALECTS_JS) run.js

# These need the .gso to load at compile time, and the .js to load at runtime.

staticTypes.js: staticTypes.grace dialect.gso dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js -o $@ staticTypes.grace

requireTypes.js: requireTypes.grace dialect.gso dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js -o $@ requireTypes.grace

whileLiteral.js: whileLiteral.grace dialect.gso dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js -o $@ whileLiteral.grace

dialect.gso: $(DIALECT_DEPENDENCIES:%=../../../dynamic-modules/%.gso)

%Example.js: %Example.grace %.js %.gso
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js -o $@ $<

$(addsuffix .js,$(DIALECTS)): %.js: %.grace
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js -o $@ $<

%.gso %.gct: %.grace
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --dynamic-module $<

clean:
	rm -fR *.gct *.gso *.c *.gcn $(DIALECTS) *.gso.dSYM *.js $(SAMPLES) $(DIALECTS_JS)

run.js: $(SAMPLES:%=%.js)
	for f in $(SAMPLES:%=%.js) ; do GRACE_MODULE_PATH=$(UPPATH) ../../tests/grace-node $$f ; done
