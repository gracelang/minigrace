.PHONY: compile js run.js
DIALECTS = dbc fsm objectAssociations grapl loopInvariant
DIALECT_DIALECTS = whileLiteral ../../../modules/staticTypes ../../../modules/requireTypes
SAMPLES = fsmExample objectAssociationsExample dialectExample graplExample loopInvariantExample staticTypesExample

DIALECTS_JS = $(addsuffix .js,$(DIALECTS)) $(addsuffix .js,$(DIALECT_DIALECTS))
VERBOSITY =

GM = ../../

MG := ../../../minigrace-js
UPPATH := ../../../modules/:../../:../../../:
# ../../ to get the js files for running, and ../../../ for the .gso for compiling

DIALECT_DEPENDENCIES = $(GM)errormessages $(GM)buildinfo $(GM)util $(GM)ast $(GM)gUnit

compile: $(DIALECTS_JS)
js: $(DIALECTS_JS) run.js

# These need the .gso to load at compile time, and the .js to load at runtime.

../../staticTypes.js: ../../../modules/staticTypes.grace ../../../modules/dialect.gso ../../dialect.js
	$(MAKE) -C ../../.. js/staticTypes.js

../../requireTypes.js: ../../../modules/requireTypes.grace ../../../modules/dialect.gso ../../dialect.js
	$(MAKE) -C ../../.. js/requireTypes.js

../../dialect.js: ../../../modules/dialect.grace
	$(MAKE) -C ../../.. js/dialect.js

whileLiteral.js: whileLiteral.grace  ../../../modules/dialect.gso ../../dialect.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js whileLiteral.grace

../../../modules/dialect.gso:
	$(MAKE) -C ../../.. modules/dialect.gso

staticTypes.js: ../../staticTypes.js
	ln -sf $< $(<:%.js=%.gct) .

$(GM)%.js:
	$(MAKE) -C ../$(GM) VERBOSITY=$(VERBOSITY) js/$(@F)

%Example.js: %Example.grace %.js
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ $<

$(addsuffix .js, $(filter-out ../..%, $(DIALECTS))): %.js: %.grace
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --target js --dir . -o $@ $<

%.gso %.gct %.gcn: %.grace
	GRACE_MODULE_PATH=$(UPPATH) $(MG) $(VERBOSITY) --dir . $<

clean:
	rm -fR *.gct *.gso *.c *.gcn $(DIALECTS) *.gso.dSYM *.js $(SAMPLES) $(DIALECTS_JS)

run.js: $(SAMPLES:%=%.js)
	for f in $(SAMPLES:%=%.js) ; do GRACE_MODULE_PATH=$(UPPATH) ../../grace $$f ; done

$(DIALECT_DEPENDENCIES:%=../../../modules/%.gso): ../../../modules/%.gso:
	$(MAKE) -C ../../.. modules/$*.gso

$(DIALECTS_JS): %.js: %.grace ../../../minigrace
