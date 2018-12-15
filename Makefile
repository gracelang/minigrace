include Makefile.conf

MAKEFLAGS += -r

ARCH := $(shell uname -s)-$(shell uname -m)
STUBS := $(filter-out $(PRELUDESOURCEFILES), $(STUBS))
ALL_LIBRARY_MODULES = $(sort $(filter-out $(COMPILER_MODULES), $(LIBRARY_MODULES) $(OBJECTDRAW)))
INTERNAL_STUBS := io.grace mirrors.grace sys.grace unicode.grace
EXTERNAL_STUBS := $(filter-out $(INTERNAL_STUBS), $(STUBS))

# COMPILER_MODULES are the parts of the compiler that should go into the modules
# directory on an install (in addition to ALL_LIBRARY_MODULES)
COMPILER_MODULES = $(REALSOURCEFILES)
DIALECT_DEPENDENCIES = mirrors.gct mirrors.js errormessages.js ast.js util.js modules/gUnit.js
DIALECTS_NEED = modules/dialect util ast modules/gUnit
WEB_DIRECTORY ?= public_html/ide/
DEV_WEB_DIRECTORY = public_html/dev/ide/
GRAPHIX = createJsGraphicsWrapper.grace graphix.grace

JSONLY = $(OBJECTDRAW) turtle.grace logo.grace
MGFLAGS = -XnoChecks
J1-MINIGRACE = $(JS-KG) j1/compiler.js $(JSRUNNERS:%=j1/%) $(JSJSFILES:%.js=j1/%.js) $(MGSOURCEFILES:%.grace=j1/%.js) j1/gracelib.js
J2-MINIGRACE = $(J1-MINIGRACE) j2/compiler.js $(JSRUNNERS:%=j2/%) $(JSJSFILES:%.js=j2/%.js) $(MGSOURCEFILES:%.grace=j2/%.js) j2/gracelib.js genjs.grace
JSJSFILES = gracelib.js unicodedata.js
JSRUNNERS_WITHOUT_COMPILER = grace grace-debug minigrace-js
JSRUNNERS = $(JSRUNNERS_WITHOUT_COMPILER) compiler-js compiler-inspect
JS-KG = js-kg/$(NPM_STABLE_VERSION)
OBJECTDRAW = objectdraw.grace rtobjectdraw.grace stobjectdraw.grace animation.grace
OBJECTDRAW_REAL = $(filter-out %tobjectdraw.grace, $(OBJECTDRAW))
PRELUDESOURCEFILES = collectionsPrelude.grace standardGrace.grace
REALSOURCEFILES = $(sort compiler.grace errormessages.grace util.grace ast.grace identifierKinds.grace lexer.grace parser.grace genjs.grace unixFilePath.grace xmodule.grace identifierresolution.grace fastDict.grace)

SOURCEFILES = $(REALSOURCEFILES) $(PRELUDESOURCEFILES)
MGSOURCEFILES = buildinfo.grace $(SOURCEFILES)
TYPE_DIALECTS = staticTypes requireTypes
TEST_DEPENDENCIES = ast lexer fastDict collectionsPrelude parser xmodule errormessages standardGrace identifierKinds standardGrace
#   these are modules used in running the full test suite
NPM_VERSION_PREFIX=1.0
VERSION := $(NPM_VERSION_PREFIX).$(shell ./tools/git-calculate-generation)
NPM_STABLE_VERSION=1.0.4414

VERBOSITY =
WEBFILES_STATIC = $(filter-out sample,$(sort index.html global.css minigrace.js tabs.js  gtk.js debugger.js ace  debugger.html  importStandardGrace.js $(ICONS)))
WEBFILES_DYNAMIC = $(sort $(ALL_LIBRARY_MODULES:%.grace=%.js) $(filter-out util.js,$(MGSOURCEFILES:%.grace=%.js) gracelib.js dom.js timer.js unicodedata.js))
WEBFILES = $(filter-out js/sample,$(sort js/index.html js/global.css js/tests js/minigrace.js js/tabs.js js/gracelib.js js/dom.js js/gtk.js js/debugger.js js/timer.js js/ace  js/debugger.html js/unicodedata.js js/importStandardGrace.js $(ICONS:%=js/%) $(ALL_LIBRARY_MODULES:%.grace=j2/%.js) $(filter-out j2/util.js, $(SOURCEFILES:%.grace=j2/%.js))))
WEBFILES_SIMPLE = $(filter-out js-simple/sample,$(sort js-simple/index.html js-simple/global.css js-simple/tests js-simple/minigrace.js js-simple/tabs-simple.js js-simple/gracelib.js js-simple/dom.js js-simple/gtk.js js-simple/debugger.js js-simple/timer.js js-simple/ace  js-simple/debugger.html  js-simple/unicodedata.js js-simple/importStandardGrace.js $(ICONS:%=js-simple/%) $(ALL_LIBRARY_MODULES:%.grace=js/%.js) $(filter-out js/util.js, $(SOURCEFILES:%.grace=%.js))))
WEB_GRAPHICS_MODULES = modules/turtle.grace modules/logo.grace

# The next few rules are here for their side effects: updating
# buildinfo.grace if necessary, and creating directories.

CREATE_J1 := $(shell if [ ! -e j1 ] ; then mkdir -p j1 ; fi)
CREATE_J2 := $(shell if [ ! -e j2 ] ; then mkdir -p j2 ; fi)
CHECK_BUILDINFO := $(shell tools/check-buildinfo $(PREFIX) $(INCLUDE_PATH) $(MODULE_PATH) $(OBJECT_PATH))

all: minigrace.env ideBuild

alltest: test module.test self.test

.PHONY: ace-code all alltests blackWeb bruceWeb c checkjs checkgenjs clean dialects dev-ide dev-ideDeploy echo ide ideBuild ideDeploy fullclean install j1-minigrace j2-minigrace just-minigrace minigrace.env pull-web-editor pull-objectdraw self.test samples sample-% test test.compile uninstall

# clear out the default rules: produces far less --debug output
.SUFFIXES:

include Makefile.mgDependencies

# The rules that follow are in alphabetical order.  Keep them that way!

$(ALL_LIBRARY_MODULES:%.grace=j2/%.js): j2/%.js: modules/%.grace $(J1-MINIGRACE) genjs.grace
	@if ( ! cmp --quiet j2/dom.js js/dom.js ) ; then echo "j2/dom.js and js/dom.js are different !" ; fi
	GRACE_MODULE_PATH=modules:. j1/minigrace-js $(VERBOSITY) --make --dir j2 $<
	@if ( ! cmp --quiet j2/dom.js js/dom.js ) ; then echo "j2/dom.js and js/dom.js are different after compiling $<!" ; cp js/dom.js j2/dom.js ; fi

$(ALL_LIBRARY_MODULES:%.grace=j1/%.js): j1/%.js: modules/%.grace
	GRACE_MODULE_PATH=modules:. $(JS-KG)/minigrace-js $(VERBOSITY) --make --dir j1 $<

ace-code: js/ace/ace.js

clean:
	rm -f gracelib.o gracelib-basic.o standardInput{.grace,.gct,.gcn,.gso,.o,}
	rm -fr unicode.gco unicode.gcn unicode.gso unicode.gso.dSYM
	cd modules && rm -fr *.gct *.gcn *.gso *.gso.dSYM *.js
	cd modules/tests && rm -fr *.gct *.gcn *.gso *.gso.dSYM *.js
	cd js && rm -f $(SOURCEFILES:%.grace=%.js)
	rm -f debugger.o
	rm -f standardGrace.{c,gcn,gct} js/standardGrace.js collectionsPrelude.{c,gcn,gct} js/collectionsPrelude.js
	rm -rf l1 l2 j1 j2 stubs/l1 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f *.gcn *.gct
	rm -rf *.gso *.gso.dSYM */*.gso.dSYM */*/*.gso.dSYM
	rm -f stdin_minigrace.c
	rm -f minigrace-dynamic
	rm -f $(SOURCEFILES:%.grace=%)
	rm -f $(OBJECTDRAW:%.grace=%.*)
	rm -f $(OBJECTDRAW:%.grace=modules/%.*)
	rm -rf known-good
	( cd js && for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js && for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	cd js && rm -rf $(ALL_LIBRARY_MODULES:%.grace=%.js) standardInput.* *.gct util.*
	rm -f js/minigrace.js
	rm -fr c
	rm -f minigrace *.js
	if ( cd grace-web-editor; git diff-index --quiet HEAD ) ; then rm -fr grace-web-editor ; fi
#       remove the grace-web-editor directory only if it is clean
	rm -fr selftest
	rm -fr tests/test-*.log tests/*{.c,.gct,.gso,.gcn,.js}
	rm -fr js/tests/test-*.log js/tests/*{.c,.gct,.gso,.gcn,.js}
	rm -f tests/retired/*{.c,.gct,.gso,.gcn,.js} js/tests/retired/*{.c,.gct,.gso,.gcn,.js}
	cd stubs && rm -f *.gct *.gcn *.gso *.js *.c *Prelude.grace standardGrace.grace
	rm Makefile.conf
	cd sample/dialects && $(MAKE)  clean
	cd js/sample/graphics && $(MAKE) clean
	cd js/sample/dialects && $(MAKE) clean

checkjs:
	@jsl -nologo -conf tools/jsl.gracelib.conf -process js/gracelib.js | perl -p -e 's/gracelib.js\n/gracelib.js –– /'
	@jsl -nologo -conf tools/jsl.gracemod.conf -process js/dom.js | perl -p -e 's/dom.js\n/dom.js -- /'

checkgenjs: j1/minigrace
	if [ ! -e js/ast.js ] ;\
        then j1/minigrace --dir js --verbose ast.grace ; fi
	jsl -nologo -conf tools/jsl.genjs.conf -process js/ast.js

dev-ide:
	$(MAKE) dev-ideDeploy

dev-ideDeploy: ideBuild
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	rsync -rltz --delete --exclude .git --omit-dir-times --chmod=Fa+rX grace-web-editor/ $(WEB_SERVER):$(DEV_WEB_DIRECTORY)

dialects: gracelib.o js js/minitest.js js/gUnit.js $(DIALECT_DEPENDENCIES)

echo:
	@echo VERSION = $(VERSION)
	@echo MAKEFLAGS = $(MAKEFLAGS)
	@echo JS-KG = $(JS-KG)
	@echo MGSOURCEFILES = $(MGSOURCEFILES) "\n"
	@echo SOURCEFILES = $(SOURCEFILES) "\n"
	@echo WEBFILES = $(WEBFILES) "\n"
	@echo WEBFILES_STATIC = $(sort $(WEBFILES_STATIC)) "\n"
	@echo WEBFILES_DYNAMIC = $(sort $(WEBFILES_DYNAMIC)) "\n"
	@echo JSONLY = $(JSONLY)
	@echo OBJECTDRAW_REAL = $(OBJECTDRAW_REAL)
	@echo ALL_LIBRARY_MODULES = $(ALL_LIBRARY_MODULES)
	@echo STUBS = $(STUBS)
	@echo INTERNAL_STUBS = $(INTERNAL_STUBS)
	@echo EXTERNAL_STUBS = $(EXTERNAL_STUBS)
	@echo OTHER_MODULES = $(OTHER_MODULES)
	@echo GRAPHIX:%.grace=js/%.js = $(GRAPHIX:%.grace=js/%.js)
	@echo WEBFILES_SIMPLE = $(WEBFILES_SIMPLE)
	@echo WEB_DIRECTORY = $(WEB_DIRECTORY)
	@echo WEB_GRAPHICS_MODULES = $(WEB_GRAPHICS_MODULES)
	@echo MODULE_PATH = $(MODULE_PATH)
	@echo INCLUDE_PATH = $(INCLUDE_PATH)
	@echo NPM_STABLE_VERSION = $(NPM_STABLE_VERSION)

$(EXTERNAL_STUBS:%.grace=j2/%.js): j2/%.js: js/%.js
	cp -p $< $@

fullclean: clean
	rm -rf $$(ls -d js-kg/*/* | grep -v $(NPM_STABLE_VERSION))

fulltest: gencheck clean self.test test module-test

gencheck:
	X=$$(tools/git-calculate-generation) ; mv .git-generation-cache .git-generation-cache.$$$$ ; Y=$$(tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf .git-generation-cache ; mv .git-generation-cache.$$$$ .git-generation-cache

gracedoc: tools/gracedoc

grace-web-editor/index.html: pull-web-editor grace-web-editor/index.in.html
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/calc-IDE-version

grace-web-editor/scripts/background.js: pull-web-editor grace-web-editor/scripts/background.in.js
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)

grace-web-editor/scripts/setup.js: pull-web-editor $(filter-out %/setup.js,$(wildcard grace-web-editor/scripts/*.js)) $(wildcard grace-web-editor/scripts/*/*.js)
	cd grace-web-editor; npm install

ide: ideDeploy

ideBuild: j2-minigrace minigrace.env pull-brace grace-web-editor/scripts/setup.js grace-web-editor/scripts/background.js $(WEBFILES_STATIC:%=js/%) $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES_DYNAMIC:%=j2/%))) $(ALL_LIBRARY_MODULES:%.grace=j2/%.js)
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/calc-IDE-version
	[ -d grace-web-editor/js ] || mkdir -m 755 grace-web-editor/js
	@if ( ! cmp --quiet j2/dom.js js/dom.js ) ; then echo "j2/dom.js and js/dom.js are different in ideBuild" ; cp js/dom.js j2/dom.js ; fi
	ln -f $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES_STATIC:%=js/%))) grace-web-editor/js
	ln -f $(WEBFILES_DYNAMIC:%=j2/%) grace-web-editor/js
	ln -f $(GRAPHIX:%.grace=j2/%.js) grace-web-editor/js

ideDeploy: ideBuild
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	rsync -az --delete --exclude .git grace-web-editor/ $(WEB_SERVER):$(WEB_DIRECTORY)

install: minigrace $(COMPILER_MODULES:%.grace=j2/%.js) $(STUBS:%.grace=j2/%.gct) js/grace js/grace-debug $(LIBRARY_MODULES:%.grace=j2/%.js) js/mgc
	@if touch $(PREFIX)/bin/touched ; then rm -f $(PREFIX)/bin/touched ; else echo "Can't write to $(PREFIX)/bin/; set PREFIX to install somewhere else." ; exit 1 ; fi
	test -d $(PREFIX)/bin || install -d $(PREFIX)/bin
	test -d $(MODULE_PATH) || install -d $(MODULE_PATH)
	test -d $(OBJECT_PATH)  || install -d $(OBJECT_PATH)
	test -d $(INCLUDE_PATH) || install -d $(INCLUDE_PATH)
	install -p -m 755 js/mgc js/grace js/grace-debug js/unicodedata.js $(PREFIX)/bin/
	install -p -m 755 js/gracelib.js js/unicodedata.js $(MODULE_PATH)
	install -p -m 644 j2/mirrors.gct $(MODULE_PATH)
	install -p -m 644 $(COMPILER_MODULES:%.grace=j2/%.js) $(STUBS:%.grace=j2/%.gct) $(MODULE_PATH)
	install -p -m 644 $(PRELUDESOURCEFILES:%.grace=j2/%.js) $(LIBRARY_MODULES:%.grace=j2/%.js) js/dom.js $(MODULE_PATH)
	@./tools/warnAbout PATH $(PREFIX)/bin
	@./tools/warnAbout GRACE_MODULE_PATH $(MODULE_PATH)

$(JSJSFILES:%.js=j1/%.js): j1/%.js: $(JS-KG)/%.js
# The j1/*.js files are used to run the j1 compiler, and so need to be
# consistent with the code generated from the known-good compiler.
	cp -p $< $@

j1-minigrace: $(J1-MINIGRACE)

j2/animation.js: j2/timer.gct j2/timer.js

j2/compiler-inspect: js/compiler-js.in
	sed -e "s|#!NODE|#!`which node` --inspect|" $< > $@
	chmod a+x $@

j2/compiler-js: js/compiler-js.in
	sed -e "s|#!NODE|#!`which node`|" $< > $@
	chmod a+x $@

j2/rtobjectdraw.js: j2/requireTypes.js

j2/stobjectdraw.js: j2/staticTypes.js

j2/buildinfo.grace: buildinfo.grace
	cp -p $< $@

j2-minigrace: $(J2-MINIGRACE)

$(JSJSFILES:%.js=j2/%.js): j2/%.js: js/%.js
	cp -p $< $@

$(JS-KG)/compiler-js: js/compiler-js.in
	if [ ! -e $(JS-KG) ] ; then mkdir -p $(JS-KG) ; fi
	sed -e "s|#!NODE|#!`which node`|" $< > $@
	chmod a+x $@

$(JS-KG)/minigrace-js: js/minigrace-js
	cp -p $< $@

$(JSONLY:%.grace=js/%.js): js/%.js: modules/%.grace js/dom.gct minigrace js/timer.gct
	GRACE_MODULE_PATH=js:modules ./minigrace --dir js --make $(VERBOSITY) $<

$(JSONLY:%.grace=js/%.gct): js/%.gct: modules/%.grace js/dom.gct minigrace js/timer.gct
	GRACE_MODULE_PATH=js:modules ./minigrace --dir js --make $(VERBOSITY) $<

$(JSRUNNERS:%=j1/%): j1/%: $(JS-KG)/%
# The j1/*.js files are created by the kg compiler, and so need
# to be run with the kg runners and libraries.
	cp -p $< $@

$(JSRUNNERS_WITHOUT_COMPILER:%=j2/%): j2/%: js/%
	cp -p $< $@

$(JSRUNNERS): %: js/%
	cp -p $< $@

js/ace/ace.js:
	curl https://raw.githubusercontent.com/ajaxorg/ace-builds/master/src-min/ace.js > js/ace/ace.js

js/index.html: js/index.in.html js/ace js/minigrace.js js/tests
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@

js/grace: js/grace.in
	sed -e "s|@MODULE_PATH@|$(MODULE_PATH)/|" $< > js/grace
	chmod a+x js/grace

js/grace-debug: js/grace
	sed -e "s|#!/usr/bin/env node|#!/usr/bin/env node --inspect-brk|" $< > js/grace-debug
	chmod a+x js/grace-debug

js/mgc: minigrace.env $(STUBS:%.grace=j2/%.gct)
	rm -rf mgcTemp js/mgc
	mkdir mgcTemp
	cd mgcTemp && ln -sf $(STUBS:%.grace=../j2/%.gct) .
	echo '#!'"`which node` --max-old-space-size=2048" > mgcTemp/compiler-js-head
	awk 'NR>1;/^\/\/ end of preamble/{exit}' js/compiler-js >> mgcTemp/compiler-js-head
	awk 'f;/^\/\/ end of preamble/{f=1}' js/compiler-js  > mgcTemp/compiler-js-tail
	cat mgcTemp/compiler-js-head j2/gracelib.js $(MGSOURCEFILES:%.grace=j2/%.js) mgcTemp/compiler-js-tail > mgcTemp/mgc
	chmod a+x mgcTemp/mgc
	ln -i mgcTemp/mgc js
	rm -rf mgcTemp

js/minigrace.js: js/minigrace.in.js buildinfo.grace
	@echo Generating minigrace.js from minigrace.in.js...
	@cat js/minigrace.in.js > js/minigrace.js
	@echo "MiniGrace.version = '$$(tools/calculate-version HEAD)';" >> js/minigrace.js
	@echo "MiniGrace.revision = '$$(git rev-parse HEAD|cut -b1-7)';" >> js/minigrace.js

js/animation%js: js/timer.gct objectdraw/animation.grace

js/compiler-inspect: js/compiler-js
	sed -e "s|#!/usr/bin/env node|#!/usr/bin/env node --inspect|" $< > $@
	chmod a+x $@

js/compiler-js: js/compiler-js.in
	sed -e "s|#!NODE|#!`which node`|" $< > $@
	chmod a+x $@

js/tests/gracelib.js: js/gracelib.js
	cp -p $< $@

Makefile.conf: configure stubs modules
	./configure

$(MGSOURCEFILES:%.grace=j1/%.js): j1/%.js: %.grace $(JS-KG)/minigrace-js
	GRACE_MODULE_PATH=j1 $(JS-KG)/minigrace-js $(VERBOSITY) --make --dir j1 $<

$(MGSOURCEFILES:%.grace=j2/%.js): j2/%.js: %.grace $(J1-MINIGRACE)
	GRACE_MODULE_PATH=modules j1/minigrace-js $(VERBOSITY) --make --dir j2 $<

minigrace: $(J2-MINIGRACE)

minigrace.env: minigrace $(EXTERNAL_STUBS:%.grace=j2/%.js) $(STUBS:%.grace=j2/%.gct) $(JSRUNNERS)

module.test: minigrace.env $(TYPE_DIALECTS:%=j2/%.js)
	modules/tests/harness-js-js j2/minigrace-js

modules/rtobjectdraw.grace: modules/objectdraw.grace tools/make-rt-version
	./tools/make-rt-version $< > $@

modules/stobjectdraw.grace: modules/objectdraw.grace tools/make-st-version
	./tools/make-st-version $< > $@

# needed to produce run-time error messages from the compiler
modules/typeComparison.js: modules/typeComparison.grace
	$(JS-KG)/minigrace-js $(VERBOSITY) --make $<

npm-get-kg: $(JS-KG)

$(JS-KG):
	@echo "Downloading known-good js compiler from NPM... VERSION=$(NPM_STABLE_VERSION)"
	sed -e 's/VERSION/$(NPM_STABLE_VERSION)/g' package.in.json > package.json
	npm install
	mkdir -p $(JS-KG)
	cp -R node_modules/minigrace/* $(JS-KG)

$(JS-KG)/compiler-inspect: $(JS-KG)/compiler-js
	sed -e "s|#!/usr/bin/env node|#!/usr/bin/env node --inspect|" $< > $@
	chmod a+x $@

npm-build-kg: minigrace.env
	mkdir -p npm-build
	rm -rf npm-build/*
	cp npm-js-kg.json npm-build/package.json
	-@cp j2/*.js j2/*.gct js/grace js/grace-debug npm-build/
	-@cp js/minigrace-js js/compiler-js npm-build/
# "-" prefix means ignore exit status!

npm-publish: npm-build-kg
	cd npm-build && npm version $(VERSION) && npm publish
	@echo Published minigrace version $(VERSION) to npmjs.com

$(OBJECTDRAW_REAL:%.grace=modules/%.grace): modules/%.grace: pull-objectdraw
	cd modules && ln -sf $(@:modules/%.grace=../objectdraw/%.grace) .

oldWeb : WEB_DIRECTORY = public_html/minigrace/js
oldWeb: $(WEBFILES) js/ace/ace.js
	rsync -a -l -z --delete $(WEBFILES) $(WEB_SERVER):$(WEB_DIRECTORY)

pull-web-editor:
	@if [ -e grace-web-editor ] ; \
       then printf "grace-web-editor: " ; cd grace-web-editor; git pull ; \
       else git clone --branch pdx https://github.com/gracelang/grace-web-editor/ ; fi

pull-objectdraw:
	#@if [ -e objectdraw ] ; \
       then printf "objectdraw: " ; cd objectdraw; git pull ; \
       else git clone https://github.com/gracelang/objectdraw/ ; fi

pull-brace: pull-web-editor
	@if [ -e grace-web-editor/brace ] ; \
       then printf "grace-web-editor/brace: " ; cd grace-web-editor/brace; git pull ; \
       else git clone https://github.com/gracelang/brace/ grace-web-editor/brace ; fi

sample-dialects: $(DIALECT_DEPENDENCIES)
	$(MAKE) -C sample/dialects VERBOSITY=$(VERBOSITY)

samples: js/sample-dialects
# omitted for the time-being: js/sample-graphics

self.test : PREAMBLE = $(if $(TRAVIS),,time )
self.test : VERB = $(if $(VERBOSITY),$(VERBOSITY),--verbose)
self.test: minigrace.env $(STUBS:%.grace=j2/%.gct)
	rm -rf selftest
	mkdir -p selftest
	cd selftest && ln -sf $(STUBS:%.grace=../j2/%.gct) .
	cd selftest && ln -sf ../js/unicodedata.js .
	echo '#!'"`which node` --max-old-space-size=2048" > selftest/compiler-js-head
	awk 'NR>1;/^\/\/ end of preamble/{exit}' js/compiler-js >> selftest/compiler-js-head
	awk 'f;/^\/\/ end of preamble/{f=1}' js/compiler-js  > selftest/compiler-js-tail
	cat selftest/compiler-js-head j2/gracelib.js $(MGSOURCEFILES:%.grace=j2/%.js) selftest/compiler-js-tail > selftest/mgc
	chmod a+x selftest/mgc
	rm -f $(MGSOURCEFILES:%.grace=./%.js)
	@GRACE_MODULE_PATH=.:modules:js $(PREAMBLE)selftest/mgc $(VERB) --make --dir selftest compiler.grace && \
	cp js/compiler-js js/minigrace-js js/gracelib.js js/tests/harness-js j2/standardGrace.js j2/collectionsPrelude.js selftest
	$(PREAMBLE)selftest/harness-js selftest/minigrace-js js/tests ""

$(SOURCEFILES:%.grace=js/tests/%.js): js/tests/%.js: js/%.js
	cd js/tests; ln -sf ../$(<F) .
	cd js/tests; ln -sf ../$(<F:%.js=%.gct) .

# The next few rules are Static Pattern Rules.  Each is like an implicit rule
# for making %.gct from stubs/%.grace, but applies only to the targets in $(STUBS:*)

$(STUBS:%.grace=j1/%.gct): j1/%.gct: stubs/%.grace $(JS-KG)/standardGrace.js $(JS-KG)/minigrace-js
	GRACE_MODULE_PATH=j1 $(JS-KG)/minigrace-js $(VERBOSITY) --make --gctfile --dir j1 -o /dev/null $<

$(STUBS:%.grace=j2/%.gct): j2/%.gct: stubs/%.grace j1/standardGrace.js $(J1-MINIGRACE)
	GRACE_MODULE_PATH=j1 j1/minigrace-js $(VERBOSITY) --make --gctfile --dir j2 -o /dev/null $<

$(STUBS:%.grace=js/%.gct): js/%.gct: stubs/%.gct
	cd js && ln -sf ../$< .

$(STUBS:%.grace=selftest/%.gct): selftest/%.gct: j2/%.gct
	cd selftest && ln -sf ../$< .

tarWeb: js
	tar -cvf webfiles.tar $(WEBFILES) tests sample
	@echo "Untar in your public_html directory with `tar -xpf ~/webfiles.tar`. Make the
	@echo "subdirectory that tar creates readable and executable by your web daemon."

test.compile: minigrace
	@echo "compiling tests to JavaScript"
	@cd js/tests; ls *_test.grace | grep -v "fail" | sed 's/^t\([0-9]*\)_.*/& \1/'\
    | while read -r fileName num; \
    do echo "$$num \c"; ../../minigrace $${fileName}; \
    done && echo "tests compiled."

$(TYPE_DIALECTS:%=js/%.js): js/%.js: $(DIALECTS_NEED:%=%.js) $(patsubst modules/%, js/%.js, $(filter modules/%,$(DIALECTS_NEED)))

test: minigrace.env js/tests/gracelib.js
# is TESTS is underfined, runs all tests.  Otherwise, TESTS should be set to a
# space-separated sequence of test-name prefixes, e.g., "TESTS=t001 t027 t041"
	js/tests/harness-js j2/minigrace-js js/tests "" $(TESTS)

togracetest: minigrace
	tests/harness minigrace tests tograce $(TESTS)

uninstall:
	rm -f $(PREFIX)/bin/minigrace
	rm -f $(PREFIX)/bin/minigrace-js
	rm -f $(PREFIX)/bin/grace
	rm -f $(OBJECT_PATH)/gracelib.o
	rm -f $(INCLUDE_PATH)/gracelib.h
	rm -rf $(MODULE_PATH)/*.{gct,js,grace,gcn,gso,gso.dSYM,c}
	rm -rf $(MODULE_PATH)/gracelib.o

.git/hooks/commit-msg: tools/validate-commit-message
	@ln -s ../../tools/validate-commit-message .git/hooks/commit-msg
