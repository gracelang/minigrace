THIS_DIR := $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
-include ./Makefile.conf

MAKEFLAGS += -r

ARCH := $(shell uname -s)-$(shell uname -m)
ALPHA-BETA = ""
ALL_LIBRARY_MODULES = $(sort $(filter-out $(COMPILER_MODULES), $(LIBRARY_MODULES) $(OBJECTDRAW)))

# COMPILER_MODULES are the parts of the compiler that should go into the modules
# directory on an install (in addition to ALL_LIBRARY_MODULES)
COMPILER_MODULES = $(REALSOURCEFILES)
DIALECT_DEPENDENCIES = mirror.js errormessages.js ast.js util.js modules/gUnit.js
DIALECTS_NEED = modules/dialect util ast modules/gUnit
WEB_DIRECTORY ?= public_html/ide/
DEV_WEB_DIRECTORY = public_html/dev/ide/
JSONLY = $(OBJECTDRAW) turtle.grace logo.grace
J1-MINIGRACE = $(sort $(JS-KG) npm-sha $(JSRUNNERS:%=j1/%) $(JSJSFILES:%.js=j1/%.js) $(MGSOURCEFILES:%.grace=j1/%.js))
J2-MINIGRACE = $(sort $(J1-MINIGRACE) $(JSRUNNERS:%=j2/%) $(JSJSFILES:%.js=j2/%.js) $(MGSOURCEFILES:%.grace=j2/%.js) genjs.grace)
JSJSFILES = gracelib.js unicodedata.js
JSRUNNERS_BASE = grace minigrace-js
JSINSPECTORS = grace-inspect minigrace-inspect
JSRUNNERS = $(JSRUNNERS_BASE) $(JSINSPECTORS) compiler-js
JS-KG = js-kg/$(NPM_STABLE_VERSION)
OBJECTDRAW = objectdraw.grace rtobjectdraw.grace stobjectdraw.grace animation.grace objectdrawBundle.grace
PRELUDESOURCEFILES = collections.grace standard.grace standardBundle.grace intrinsic.grace basicTypesBundle.grace pattern+typeBundle.grace equalityBundle.grace pointBundle.grace
REALSOURCEFILES = ast.grace basic.grace compiler.grace constantScope.grace errormessages.grace genjs.grace identifierresolution.grace io.grace lexer.grace mirror.grace parser.grace regularExpression.grace scope.grace shasum.grace  sys.grace unicode.grace unixFilePath.grace util.grace xmodule.grace

SOURCEFILES = $(REALSOURCEFILES) $(PRELUDESOURCEFILES)
MGSOURCEFILES = buildinfo.grace $(SOURCEFILES)
TYPE_DIALECTS = staticTypes requireTypes
TEST_DEPENDENCIES = ast lexer collections parser xmodule errormessages standard
#   these are modules used in running the full test suite
NPM_VERSION_PREFIX=1.0
VERSION := $(NPM_VERSION_PREFIX).$(shell ./tools/git-calculate-generation)$(ALPHA-BETA)
NPM_STABLE_VERSION=1.0.5123
OFFLINE ?= false

VERBOSITY =
WEBFILES_STATIC = $(filter-out sample,$(sort index.html global.css minigrace.js tabs.js  gtk.js debugger.js ace  debugger.html $(ICONS)))
WEBFILES_DYNAMIC = $(sort $(ALL_LIBRARY_MODULES:%.grace=%.js) $(filter-out util.js,$(MGSOURCEFILES:%.grace=%.js) gracelib.js unicodedata.js))
WEBFILES = $(filter-out js/sample,$(sort js/index.html js/global.css js/tests js/minigrace.js js/tabs.js js/gracelib.js js/gtk.js js/debugger.js js/ace  js/debugger.html js/unicodedata.js $(ICONS:%=js/%) $(ALL_LIBRARY_MODULES:%.grace=j2/%.js) $(filter-out j2/util.js, $(MGSOURCEFILES:%.grace=j2/%.js))))
WEBFILES_SIMPLE = $(filter-out js-simple/sample,$(sort js-simple/index.html js-simple/global.css js-simple/tests js-simple/minigrace.js js-simple/tabs-simple.js js-simple/gracelib.js js-simple/gtk.js js-simple/debugger.js js-simple/ace  js-simple/debugger.html  js-simple/unicodedata.js $(ICONS:%=js-simple/%) $(ALL_LIBRARY_MODULES:%.grace=js/%.js) $(filter-out js/util.js, $(MGSOURCEFILES:%.grace=%.js))))
WEB_GRAPHICS_MODULES = modules/turtle.grace modules/logo.grace
WEB_REPO?=gracelang

# The next few rules are here for their side effects: updating
# buildinfo.grace if necessary, and creating directories.

CREATE_J1 := $(shell if [ ! -e j1 ] ; then mkdir -p j1 ; fi)
CREATE_J2 := $(shell if [ ! -e j2 ] ; then mkdir -p j2 ; fi)
CHECK_BUILDINFO := $(shell ./tools/check-buildinfo $(PREFIX) $(INCLUDE_PATH) $(MODULE_PATH) $(OBJECT_PATH))

all: minigrace.env ideBuild

alltest: test module.test self.test

.PHONY: ace-code all alltests blackWeb bruceWeb c checkjs checkgenjs clean dialects dev-ide dev-ideDeploy echo ide ideBuild ideDeploy fullclean install j1-minigrace j2-minigrace libraries minigrace.env pull-web-editor pull-objectdraw self.test samples sample-% test test.compile uninstall

# clear out the default rules: produces far less --debug output
.SUFFIXES:

include Makefile.mgDependencies
-include objectdraw/Makefile.odDepedencies

# The rules that follow are in alphabetical order.  Keep them that way!

$(ALL_LIBRARY_MODULES:%.grace=j2/%.js): j2/%.js: modules/%.grace $(J1-MINIGRACE) genjs.grace
#	if ( ! cmp --quiet j2/dom.js js/dom.js ) ; then echo "j2/dom.js and js/dom.js are different !" ; fi
	GRACE_MODULE_PATH=modules:j1:. j1/minigrace-js $(VERBOSITY) --make --dir j2 $<
#	if ( ! cmp --quiet j2/dom.js js/dom.js ) ; then echo "j2/dom.js and js/dom.js are different after compiling $<!" ; cp js/dom.js j2/dom.js ; fi

ace-code: js/ace/ace.js

buildinfo.grace:
	./tools/check-buildinfo $(PREFIX) $(INCLUDE_PATH) $(MODULE_PATH) $(OBJECT_PATH)

clean:
	rm -f gracelib.o gracelib-basic.o standardInput{.grace,.gct,.gcn,.gso,.o,}
	rm -fr unicode.gco unicode.gcn unicode.gso unicode.gso.dSYM
	cd modules && rm -fr *.gct *.gcn *.gso *.gso.dSYM *.js
	cd modules/tests && rm -fr *.gct *.ast *.parse *.symbols *.js standardInput.*
	cd js && rm -f $(SOURCEFILES:%.grace=%.js)
	rm -f debugger.o
	rm -f standardGrace.{c,gcn,gct} js/standardGrace.js collectionsPrelude.{c,gcn,gct} js/collectionsPrelude.js
	rm -rf l1 l2 j1 j2 stubs/l1 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f *.gcn *.gct *.js
	rm -rf *.gso *.gso.dSYM */*.gso.dSYM */*/*.gso.dSYM
	rm -f stdin_minigrace.c
	rm -f js/minigrace-inspect js/grace-debug js/grace-inspect
	rm -f $(SOURCEFILES:%.grace=%)
	rm -f $(OBJECTDRAW:%.grace=%.*)
	rm -f $(OBJECTDRAW:%.grace=modules/%.*)
	rm -rf known-good
	( cd js && for sf in $(MGSOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js && for sf in $(MGSOURCEFILES) ; do rm -f $$sf ; done )
	cd js && rm -rf $(ALL_LIBRARY_MODULES:%.grace=%.js) standardInput.* *.gct util.*
	cd js/tests && rm -rf *.gct *.ast *.parse *.symbols *.js standardInput.* util.* subtest/*.js
	rm -f js/minigrace.js
	rm -fr c
	rm -f minigrace *.js
	if [ -e grace-web-editor ] ; then if ( cd grace-web-editor && git diff-index --quiet HEAD ) ; then rm -fr grace-web-editor ; fi ; fi
#       remove the grace-web-editor directory only if it exists and is clean
	rm -fr selftest
	rm -fr tests/test*.log tests/*{.c,.gct,.gso,.gcn,.js}
	(cd js/tests & rm -fr test*.log test*.err test*.out *.c *.gct *.gso *.gcn *.js subtest/*.gct subtest/*.js)
	rm -f tests/retired/*{.c,.gct,.gso,.gcn,.js} js/tests/retired/*{.c,.gct,.gso,.gcn,.js}
	rm -rf stubs
	rm -f Makefile.conf
	cd sample/dialects && $(MAKE)  clean
	cd js/sample/graphics && $(MAKE) clean
	cd js/sample/dialects && $(MAKE) clean

checkjs: j2/ast.js
	@jsl -nologo -conf ./tools/jsl.gracelib.conf -process js/gracelib.js | perl -p -e 's/gracelib.js\n/gracelib.js –– /'
	@jsl -nologo -conf ./tools/jsl.gracemod.conf -process j2/ast.js | perl -p -e 's/ast.js\n/ast.js -- /'

checkgenjs: j1/minigrace
	if [ ! -e js/ast.js ] ;\
        then j1/minigrace --dir js --verbose ast.grace ; fi
	jsl -nologo -conf ./tools/jsl.genjs.conf -process js/ast.js

dev-ide:
	$(MAKE) dev-ideDeploy

dev-ideDeploy: ideBuild
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	rsync -rltz --delete --exclude .git --omit-dir-times --chmod=Fa+rX grace-web-editor/ $(WEB_SERVER):$(DEV_WEB_DIRECTORY)

dialects: gracelib.o js js/minitest.js js/gUnit.js $(DIALECT_DEPENDENCIES)

echo:
	@echo THIS_DIR = $(THIS_DIR)
	@echo VERSION = $(VERSION)
	@echo OFFLINE = $(OFFLINE)
	@echo MAKEFLAGS = $(MAKEFLAGS)
	@echo JS-KG = $(JS-KG)
	@echo JSRUNNERS = $(JSRUNNERS)
	@echo J1-MINIGRACE = $(J1-MINIGRACE)
	@echo J2-MINIGRACE = $(J2-MINIGRACE)
	@echo MGSOURCEFILES = $(MGSOURCEFILES) "\n"
	@echo SOURCEFILES = $(SOURCEFILES) "\n"
	@echo WEBFILES = $(WEBFILES) "\n"
	@echo WEBFILES_STATIC = $(sort $(WEBFILES_STATIC)) "\n"
	@echo WEBFILES_DYNAMIC = $(sort $(WEBFILES_DYNAMIC)) "\n"
	@echo JSONLY = $(JSONLY)
	@echo OBJECTDRAW = $(OBJECTDRAW)
	@echo ALL_LIBRARY_MODULES = $(ALL_LIBRARY_MODULES)
	@echo OTHER_MODULES = $(OTHER_MODULES)
	@echo WEBFILES_SIMPLE = $(WEBFILES_SIMPLE)
	@echo WEB_DIRECTORY = $(WEB_DIRECTORY)
	@echo WEB_GRAPHICS_MODULES = $(WEB_GRAPHICS_MODULES)
	@echo MODULE_PATH = $(MODULE_PATH)
	@echo INCLUDE_PATH = $(INCLUDE_PATH)
	@echo NPM_STABLE_VERSION = $(NPM_STABLE_VERSION)
	@echo REALSOURCEFILES = $(REALSOURCEFILES)

embedded:
	./tools/includeJSLibraries index.in.html $(ALL_LIBRARY_MODULES:%.grace=js/%.js)

fullclean: clean
	rm -rf $$(ls -d js-kg/* | grep -v $(NPM_STABLE_VERSION))
	rm -rf npm-build-dir

fulltest: gencheck clean minigrace.env self.test test module.test

gencheck:
	X=$$(./tools/git-calculate-generation) ; mv ./.git-generation-cache ./.git-generation-cache.$$$$ ; Y=$$(./tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf ./.git-generation-cache ; mv ./.git-generation-cache.$$$$ ./.git-generation-cache

gracedoc: ./tools/gracedoc

grace-web-editor/index.html: pull-web-editor grace-web-editor/index.in.html
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/calc-IDE-version

grace-web-editor/scripts/background.in.js: pull-web-editor

grace-web-editor/scripts/background.js:  grace-web-editor/scripts/background.in.js
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)

grace-web-editor/scripts/setup.js: pull-web-editor
	cd grace-web-editor; npm install

ide: ideDeploy

ideBuild: j2-minigrace minigrace.env pull-brace grace-web-editor/scripts/setup.js grace-web-editor/scripts/background.js $(WEBFILES_STATIC:%=js/%) $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES_DYNAMIC:%=j2/%))) $(ALL_LIBRARY_MODULES:%.grace=j2/%.js)
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/calc-IDE-version
	[ -d grace-web-editor/js ] || mkdir -m 755 grace-web-editor/js
	#if ( ! cmp --quiet j2/dom.js js/dom.js ) ; then echo "j2/dom.js and js/dom.js are different in ideBuild" ; cp js/dom.js j2/dom.js ; fi
	ln -f $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES_STATIC:%=js/%))) grace-web-editor/js
	ln -f $(WEBFILES_DYNAMIC:%=j2/%) grace-web-editor/js

ideDeploy: ideBuild
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	rsync -az --delete --exclude .git grace-web-editor/ $(WEB_SERVER):$(WEB_DIRECTORY)

install: minigrace $(COMPILER_MODULES:%.grace=j2/%.js) js/grace js/grace-inspect $(LIBRARY_MODULES:%.grace=j2/%.js) js/mgc
	@if touch $(PREFIX)/bin/touched ; then rm -f $(PREFIX)/bin/touched ; else echo "Can't write to $(PREFIX)/bin/; set PREFIX to install somewhere else." ; exit 1 ; fi
	test -d $(PREFIX)/bin || install -d $(PREFIX)/bin
	cd $(PREFIX)/bin && (npm ls sha > /dev/null || npm install sha)
	test -d $(MODULE_PATH) || install -d $(MODULE_PATH)
	test -d $(OBJECT_PATH)  || install -d $(OBJECT_PATH)
	test -d $(INCLUDE_PATH) || install -d $(INCLUDE_PATH)
	install -p -m 755 js/mgc js/grace js/grace-inspect js/unicodedata.js $(PREFIX)/bin/
	install -p -m 755 js/gracelib.js js/unicodedata.js $(MODULE_PATH)
	install -p -m 644 $(MGSOURCEFILES) $(MGSOURCEFILES:%.grace=j2/%.js) $(MODULE_PATH)
	install -p -m 644 $(PRELUDESOURCEFILES) $(PRELUDESOURCEFILES:%.grace=j2/%.js) $(LIBRARY_MODULES:%.grace=modules/%.grace) $(LIBRARY_MODULES:%.grace=j2/%.js) $(MODULE_PATH)
	@./tools/warnAbout PATH $(PREFIX)/bin
	@./tools/warnAbout GRACE_MODULE_PATH $(MODULE_PATH)

j1-minigrace: $(J1-MINIGRACE) $(JSINSPECTORS:%=j1/%)

j2-minigrace: j1-minigrace $(J2-MINIGRACE) $(JSINSPECTORS:%=j2/%)

$(JSJSFILES:%.js=j1/%.js): j1/%.js: js/%.js
	cp -pf $< $@

$(JSJSFILES:%.js=j2/%.js): j2/%.js: js/%.js
	cp -pf $< $@

$(JSONLY:%.grace=js/%.js): js/%.js: modules/%.grace minigrace
	GRACE_MODULE_PATH=js:modules ./minigrace --dir js --make $(VERBOSITY) $<

$(JSRUNNERS:%=j1/%): j1/%: js/%
	cp -pf $< $@

$(JSRUNNERS:%=j2/%): j2/%: js/%
	cp -pf $< $@

js/ace/ace.js:
	curl https://raw.githubusercontent.com/ajaxorg/ace-builds/master/src-min/ace.js > js/ace/ace.js

js/index.html: js/index.in.html js/ace js/minigrace.js js/tests
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' $< > $@

js/grace: js/grace.in ./tools/make-grace
	./tools/make-grace $(MODULE_PATH) $< $@

js/grace-inspect: js/grace.in ./tools/make-grace-inspect
	tools/make-grace-inspect $(MODULE_PATH) $< $@

js/mgc: minigrace.env
	rm -rf mgcTemp js/mgc
	mkdir mgcTemp
	echo '#!'"`which node` --max-old-space-size=2048" > mgcTemp/minigrace-js-head
	awk 'NR>1;/^\/\/ end of preamble/{exit}' js/compiler-js >> mgcTemp/minigrace-js-head
	awk 'f;/^\/\/ end of preamble/{f=1}' js/compiler-js  > mgcTemp/minigrace-js-tail
	cat mgcTemp/minigrace-js-head j2/gracelib.js $(MGSOURCEFILES:%.grace=j2/%.js) mgcTemp/minigrace-js-tail > mgcTemp/mgc
	chmod a+x mgcTemp/mgc
	ln -i mgcTemp/mgc js
	rm -rf mgcTemp

js/minigrace.js: js/minigrace.in.js buildinfo.grace
	@echo Generating minigrace.js from minigrace.in.js...
	@cat js/minigrace.in.js > js/minigrace.js
	@echo "MiniGrace.version = '$$(tools/calculate-version HEAD)';" >> js/minigrace.js
	@echo "MiniGrace.revision = '$$(git rev-parse HEAD|cut -b1-7)';" >> js/minigrace.js

js/minigrace-inspect: js/minigrace-js ./tools/make-minigrace-inspect
	tools/make-minigrace-inspect $< $@

js/tests/gracelib.js: js/gracelib.js
	cp -p $< $@

$(LIBRARY_MODULES:%.grace=modules/%.js): modules/%.js: j2/%.js
	cp -p $< $@

$(LIBRARY_MODULES:%.grace=j1/%.js): j1/%.js: modules/%.grace $(JS-KG)/minigrace-js
	GRACE_MODULE_PATH=modules:. $(JS-KG)/minigrace-js $(VERBOSITY) --make --dir j1 $<

libraries: $(OBJECTDRAW:%.grace=modules/%.grace) $(ALL_LIBRARY_MODULES:%.grace=j2/%.js)

Makefile.conf: configure modules
	./configure

$(MGSOURCEFILES:%.grace=j1/%.js): j1/%.js: %.grace $(JS-KG)/minigrace-js
	GRACE_MODULE_PATH=j1:modules:. $(JS-KG)/minigrace-js $(VERBOSITY) --make --dir j1 $<

$(MGSOURCEFILES:%.grace=j2/%.js): j2/%.js: %.grace $(J1-MINIGRACE)
	GRACE_MODULE_PATH=j1:modules:. j1/minigrace-js $(VERBOSITY) --make --dir j2 $<

$(MGSOURCEFILES:%.grace=$(JS-KG)/%.js): $(JS-KG)

minigrace: $(J2-MINIGRACE)

minigrace.env: minigrace libraries
#$(JSRUNNERS:%=j2/%)

module.test: minigrace.env $(TYPE_DIALECTS:%=j2/%.js)
	rm -f modules/tests/*.js
	modules/tests/harness-js j2/minigrace-js modules/tests "" $(TESTS)

npm-get-kg: $(JS-KG)

$(JS-KG):
	@echo "Installing known-good compiler minigrace@$(NPM_STABLE_VERSION) from NPM..."
	cp js/npm-install-js-kg.json package.json
	npm install minigrace@$(NPM_STABLE_VERSION)
	rm package.json
	mkdir -p $(JS-KG)
	cp -R node_modules/minigrace/* $(JS-KG)

$(JS-KG)/compiler-js: $(JS-KG)
$(JS-KG)/grace: $(JS-KG)
$(JS-KG)/grace-inspect: $(JS-KG)
$(JS-KG)/gracelib.js: $(JS-KG)
$(JS-KG)/unicodedata.js: $(JS-KG)
$(JS-KG)/minigrace-js: $(JS-KG)

$(JS-KG)/minigrace-inspect: $(JS-KG)/minigrace-js ./tools/make-minigrace-inspect
	tools/make-minigrace-inspect $< $@

js/ace/mode-grace.js: pull-web-editor grace-web-editor/scripts/ace/mode-grace.js
	cp grace-web-editor/scripts/ace/mode-grace.js $@

npm-build: minigrace.env Makefile
	mkdir -p npm-build-dir
	rm -rf npm-build-dir/*
	cp js/npm-package.json npm-build-dir/package.json
	cp j2/*.js $(MGSOURCEFILES) $(ALL_LIBRARY_MODULES:%=modules/%) npm-build-dir/
	cp js/minigrace-js js/compiler-js js/minigrace-inspect js/grace js/grace-inspect npm-build-dir/
	cp js/tests/t001*_test.grace npm-build-dir/quick_test.grace
	cd npm-build-dir && npm version $(VERSION)

npm-build-beta: minigrace.env
	$(MAKE) ALPHA-BETA=-beta.1 npm-build

npm-publish: npm-build
	cd npm-build-dir && npm publish $(shell ./tools/npm-tag npm-build-dir/package.json)
	@echo Published minigrace version $(VERSION) to npmjs.com

npm-sha:
	npm ls sha > /dev/null || npm install sha
	touch npm-sha

$(OBJECTDRAW:%.grace=modules/%.grace): modules/%.grace: objectdraw/%.grace
	cd modules && ln -sf $(@:modules/%.grace=../objectdraw/%.grace) .

$(OBJECTDRAW:%.grace=objectdraw/%.grace): objectdraw/%.grace: pull-objectdraw

oldWeb : WEB_DIRECTORY = public_html/minigrace/js
oldWeb: $(WEBFILES) js/ace/ace.js js/ace/mode-grace.js
	rsync -a -l -z --delete $(WEBFILES) $(WEB_SERVER):$(WEB_DIRECTORY)

pull-web-editor:
	@$(OFFLINE) || if [ -e grace-web-editor ] ; \
       then printf "grace-web-editor: " ; cd grace-web-editor; git pull ; \
       else git clone --branch pdx https://github.com/$(WEB_REPO)/grace-web-editor/ ; fi

pull-objectdraw:
	@$(OFFLINE) || if [ -e objectdraw ] ; \
       then printf "objectdraw: " ; cd objectdraw; git pull ; git checkout bundled ; \
       else git clone --branch bundled https://github.com/$(WEB_REPO)/objectdraw/ ; fi

pull-brace: pull-web-editor
	@$(OFFLINE) || if [ -e grace-web-editor/brace ] ; \
       then printf "grace-web-editor/brace: " ; cd grace-web-editor/brace; git pull ; \
       else git clone https://github.com/$(WEB_REPO)/brace/ grace-web-editor/brace ; fi

sample-dialects: $(DIALECT_DEPENDENCIES)
	$(MAKE) -C sample/dialects VERBOSITY=$(VERBOSITY)

samples: js/sample-dialects
# omitted for the time-being: js/sample-graphics

self.test : PREAMBLE = $(if $(TRAVIS),,time )
self.test : VERB = $(if $(VERBOSITY),$(VERBOSITY),--verbose)
self.test: minigrace.env $(JSINSPECTORS:%=js/%)
	rm -rf selftest
	mkdir -p selftest
	cd selftest && ln -sf ../js/unicodedata.js .
	tools/make-mgc js $(MGSOURCEFILES:%.grace=j2/%.js) > selftest/mgc
	chmod a+x selftest/mgc
	rm -f $(MGSOURCEFILES:%.grace=./%.js)
	GRACE_MODULE_PATH=.:modules:js $(PREAMBLE)selftest/mgc $(VERB) --make --dir selftest compiler.grace && \
	cp js/compiler-js js/minigrace-js js/minigrace-inspect js/gracelib.js js/tests/harness-js  $(PRELUDESOURCEFILES:%.grace=j2/%.js) selftest
	$(PREAMBLE)selftest/harness-js selftest/minigrace-js js/tests ""

tarWeb: js
	tar -cvf webfiles.tar $(WEBFILES) tests sample
	@echo "Untar in your public_html directory with `tar -xpf ~/webfiles.tar`. Make the
	@echo "subdirectory that tar creates readable and executable by your web daemon."

test.compile: minigrace
	rm -f js/tests/*.js
	@echo "compiling tests to JavaScript"
	@cd js/tests; ls *_test.grace | grep -v "fail" | sed 's/^t\([0-9]*\)_.*/& \1/'\
    | while read -r fileName num; \
    do echo "$$num \c"; ../../minigrace $${fileName}; \
    done && echo "tests compiled."

$(TYPE_DIALECTS:%=js/%.js): js/%.js: $(DIALECTS_NEED:%=%.js) $(patsubst modules/%, js/%.js, $(filter modules/%,$(DIALECTS_NEED)))

test: minigrace.env
# if TESTS is underfined, runs all tests.  Otherwise, TESTS should be set to a
# space-separated sequence of test-name prefixes, e.g., "TESTS=t001 t027 t041"
	rm -f js/tests/*.js
	cp -p js/gracelib.js js/tests
	cp -p js/unicodedata.js js/tests
	js/tests/harness-js j2/minigrace-js js/tests "" $(TESTS)

togracetest: minigrace
	tests/harness minigrace tests tograce $(TESTS)

uninstall:
	rm -f $(PREFIX)/bin/minigrace
	rm -f $(PREFIX)/bin/minigrace-js
	rm -f $(PREFIX)/bin/grace
	rm -f $(PREFIX)/bin/grace-inspect
	rm -rf $(MODULE_PATH)/*.grace
	rm -rf $(MODULE_PATH)/gracelib.js
	rm -rf $(MODULE_PATH)/unicodedata.js

.git/hooks/commit-msg: ./tools/validate-commit-message
	@ln -s ../../tools/validate-commit-message .git/hooks/commit-msg
