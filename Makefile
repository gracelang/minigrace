include Makefile.conf

MAKEFLAGS += -r

ARCH := $(shell uname -s)-$(shell uname -m)
STUBS := $(filter-out %Prelude.grace,$(STUBS))
ALL_LIBRARY_MODULES = $(sort $(filter-out $(COMPILER_MODULES), $(LIBRARY_MODULES) $(OBJECTDRAW)))
C_MODULES_GSO := $(UNICODE_MODULE) $(OTHER_MODULES)
INTERNAL_STUBS := io.grace sys.grace  # for which there are no c files
JS_STUBS := dom.grace timer.grace
DYNAMIC_STUBS := $(filter-out $(INTERNAL_STUBS) $(JS_STUBS), $(STUBS))
STATIC_STUBS := $(filter-out $(DYNAMIC_STUBS) $(INTERNAL_STUBS) $(JS_STUBS), $(STUBS))  # currently empty
EXTERNAL_STUBS := $(filter-out $(INTERNAL_STUBS) $(JS_STUBS), $(STUBS))
CFILES = ast.c buildinfo.c genc.c genjs.c lexer.c parser.c util.c stringMap.c xmodule.c identifierresolution.c  errormessages.c
HEADERFILES = gracelib.c gracelib.h definitions.h debugger.c

# COMPILER_MODULES are the parts of the compiler that should go into the modules
# directory on an install (in addition to ALL_LIBRARY_MODULES)
COMPILER_MODULES = errormessages.grace standardGrace.grace collectionsPrelude.grace ast.grace util.grace identifierKinds.grace stringMap.grace unixFilePath.grace

DIALECT_DEPENDENCIES = mirrors.gct mirrors.gso errormessages.gct errormessages.gso ast.gct ast.gso util.gct util.gso modules/gUnit.gct modules/gUnit.gso
DIALECTS_NEED = modules/dialect util ast modules/gUnit
WEB_DIRECTORY = public_html/ide/
DEV_WEB_DIRECTORY = public_html/dev/ide/
GRAPHIX = createJsGraphicsWrapper.grace graphix.grace

MODULES_WO_JSONLY = $(sort $(filter-out $(JSONLY), $(LIBRARY_MODULES)))
# MODULES_WO_JSONLY is necessary because LIBRARY_MODULES is built by ./configure,
# and depends on the contents of the modules directory.  So LIBRARY_MODULES may or
# may not contain OBJECTDRAW, depending on whether this is the first or subsequent make.

JSONLY = $(OBJECTDRAW) turtle.grace logo.grace
MGFLAGS = -XnoChecks
MGSOURCEFILES = buildinfo.grace $(REALSOURCEFILES)
JSSOURCEFILES = $(SOURCEFILES:%.grace=js/%.js)
KG=known-good/$(ARCH)/$(STABLE)
OBJECTDRAW = objectdraw.grace rtobjectdraw.grace stobjectdraw.grace animation.grace
OBJECTDRAW_REAL = $(filter-out %tobjectdraw.grace, $(OBJECTDRAW))

PRELUDESOURCEFILES = collectionsPrelude.grace standardGrace.grace
REALSOURCEFILES = $(sort compiler.grace errormessages.grace util.grace ast.grace identifierKinds.grace lexer.grace parser.grace genjs.grace genc.grace stringMap.grace unixFilePath.grace xmodule.grace identifierresolution.grace standardGraceClass.grace)
ALLSOURCEFILES = $(REALSOURCEFILES) $(PRELUDESOURCEFILES) $(HEADERFILES)
SOURCEFILES = $(MGSOURCEFILES) $(PRELUDESOURCEFILES)
STABLE=21802a386d7e3614445df7ee7c1a5afde8ad45d3
STUB_GCTS = $(STUBS:%.grace=stubs/%.gct)
TYPE_DIALECTS = staticTypes requireTypes
TEST_DEPENDENCIES = ast lexer stringMap collectionsPrelude parser xmodule errormessages standardGrace identifierKinds standardGrace standardGraceClass
#   these are modules used in running the full test suite

VER = $(shell ./tools/calculate-version $(STABLE))
VERBOSITY =
WEBFILES = $(filter-out js/sample,$(sort js/index.html js/global.css js/tests js/minigrace.js js/tabs.js js/gracelib.js js/dom.js js/gtk.js js/debugger.js js/timer.js js/ace  js/debugger.html js/unicodedata.js js/importStandardGrace.js $(ICONS:%=js/%) $(ALL_LIBRARY_MODULES:%.grace=js/%.js) $(filter-out js/util.js,$(JSSOURCEFILES))))
WEBFILES_SIMPLE = $(filter-out js-simple/sample,$(sort js-simple/index.html js-simple/global.css js-simple/tests js-simple/minigrace.js js-simple/tabs-simple.js js-simple/gracelib.js js-simple/dom.js js-simple/gtk.js js-simple/debugger.js js-simple/timer.js js-simple/ace  js-simple/debugger.html  js-simple/unicodedata.js js-simple/importStandardGrace.js $(ICONS:%=js-simple/%) $(ALL_LIBRARY_MODULES:%.grace=js/%.js) $(filter-out js/util.js,$(JSSOURCEFILES))))
WEB_GRAPHICS_MODULES = modules/turtle.grace modules/logo.grace
# The next 2 rules are here for their side effects: updating
# buildinfo.grace if necessary, and creating the l1 directory
CHECK_BUILDINFO := $(shell tools/check-buildinfo $(PREFIX) $(INCLUDE_PATH) $(MODULE_PATH) $(OBJECT_PATH))
CREATE_L1 := $(shell if [ ! -e l1 ] ; then mkdir -p l1 ; fi ; (cd l1 ; ln -sf $(ALLSOURCEFILES:%=../%) .))

all: minigrace-environment $(C_MODULES_GSO) $(WEBFILES)

.PHONY: ace-code all alltests blackWeb bruceWeb c checkjs checkgenjs clean dialects dev-ide dev-ideDeploy echo ideBuild ideDeploy fullclean install js just-minigrace minigrace-environment minigrace-c-env minigrace-js-env old-js-one old-js-two pull-web-editor pull-objectdraw selfhost-stats selftest selftest-js samples sample-% test test.js test.js.compile uninstall

# clear out the default rules: produces far less --debug output
.SUFFIXES:

# These dependencies are necessary for l1 until the $(KG) compiler learns about dependencies
# The dependencises for l2 and . should allow parallel compilation of the mg sub-modules
include Makefile.mgDependencies

# The rules that follow are in alphabetical order.  Keep them that way!

ace-code: js/ace/ace.js

alltests: test test.js module-test-js js/sample-dialects

c: minigrace gracelib.c gracelib.h unicode.c unicodedata.h unicode.gct c/Makefile mirrors.c mirrors.gct definitions.h curl.c modules/unicode.gso modules/mirrors.gso unixFilePath.gct unixFilePath.gcn
	for f in gracelib.c gracelib.h unicode.{c,gct} unicodedata.h $(SOURCEFILES) mirrors.{c,gct} definitions.h debugger.c curl.c modules/*.gso modules/*.gct modules/*.gcn ;\
    do cp -f $$f c ; done &&\
    cd c &&\
    GRACE_MODULE_PATH=. ../minigrace --make $(VERBOSITY) --noexec -XNoMain -XNativePrelude collectionsPrelude.grace &&\
    GRACE_MODULE_PATH=. ../minigrace --make $(VERBOSITY) --noexec -XNoMain -XNativePrelude standardGrace.grace &&\
    GRACE_MODULE_PATH=. ../minigrace --target c --make $(VERBOSITY) --module minigrace --noexec compiler.grace &&\
    rm -f *.gcn *.gso

clean:
	rm -f gracelib.o gracelib-basic.o standardInput{.grace,.gct,.gcn,.gso,.o,}
	rm -fr unicode.gco unicode.gcn unicode.gso unicode.gso.dSYM
	cd modules && rm -fr *.gct *.gcn *.gso *.gso.dSYM *.js
	cd modules/tests && rm -fr *.gct *.gcn *.gso *.gso.dSYM *.js
	cd js && rm -f $(SOURCEFILES:%.grace=%.js)
	rm -f debugger.o
	rm -f standardGrace.{c,gcn,gct} js/standardGrace.js collectionsPrelude.{c,gcn,gct} js/collectionsPrelude.js
	rm -rf l1 l2 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f *.gcn *.gct
	rm -f $(STUB_GCTS)
	rm -rf *.gso *.gso.dSYM */*.gso.dSYM */*/*.gso.dSYM
	rm -f stdin_minigrace.c
	rm -f minigrace-dynamic
	rm -f $(SOURCEFILES:%.grace=%)
	rm -f $(OBJECTDRAW:%.grace=%.*)
	rm -f $(OBJECTDRAW:%.grace=modules/%.*)
	( cd known-good && $(MAKE) clean )
	( cd js && for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js && for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	cd js && rm -rf $(ALL_LIBRARY_MODULES:%.grace=%.js) standardInput.* *.gct util.*
	rm -f js/minigrace.js
	cd c && rm -f *.gcn *.gct *.c *.h *.grace minigrace unicode.gso gracelib.o
	rm -f minigrace *.js
	rm -fr grace-web-editor
	rm -fr selftest selftest-js
	rm -f tests/test-*.log js/tests/test-*.log js/tests/*{.js,.gct}
	rm -f tests/retired/*.{gct,gso,c,gcn} js/tests/retired/*.{js,gct}
	cd stubs && rm -f *.gct *gcn *.gso *js *.c
	rm Makefile.conf
	cd sample/dialects && $(MAKE)  clean
	cd js/sample/graphics && $(MAKE) clean
	cd js/sample/dialects && $(MAKE) clean

checkjs:
	@jsl -nologo -conf tools/jsl.gracelib.conf -process js/gracelib.js | perl -p -e 's/gracelib.js\n/gracelib.js –– /'
	@jsl -nologo -conf tools/jsl.gracemod.conf -process js/dom.js | perl -p -e 's/dom.js\n/dom.js -- /'

checkgenjs: l1/minigrace
	if [ ! -e js/ast.js ] ;\
        then l1/minigrace --dir js --target js --verbose ast.grace ; fi
	jsl -nologo -conf tools/jsl.genjs.conf -process js/ast.js

collectionsPrelude.gct: collectionsPrelude.grace l1/minigrace l1/unicode.gso
	cd l1 && GRACE_MODULE_PATH=. ./minigrace $(VERBOSITY) --make --noexec -XNoMain --dir .. --gracelib .. ../$<

collectionsPrelude.gcn: collectionsPrelude.gct

dev-ide:
	$(MAKE) dev-ideDeploy

dev-ideDeploy: ideBuild
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	rsync -rltz --delete --exclude .git --omit-dir-times --chmod=Fa+rX grace-web-editor/ $(WEB_SERVER):$(DEV_WEB_DIRECTORY)

dialects: gracelib.o js js/minitest.js js/gUnit.js $(DIALECT_DEPENDENCIES)

echo:
	@echo MAKEFLAGS = $(MAKEFLAGS)
	@echo CFLAGS = $(CFLAGS)
	@echo MGSOURCEFILES = $(MGSOURCEFILES) "\n"
	@echo SOURCEFILES = $(SOURCEFILES) "\n"
	@echo JSSOURCEFILES = $(JSSOURCEFILES) "\n"
	@echo ALLSOURCEFILES = $(ALLSOURCEFILES) "\n"
	@echo WEBFILES = $(WEBFILES) "\n"
	@echo JSONLY = $(JSONLY)
	@echo KG = $(KG):
	@echo STUBS = $(STUBS)
	@echo OBJECTDRAW_REAL = $(OBJECTDRAW_REAL)
	@echo ALL_LIBRARY_MODULES = $(ALL_LIBRARY_MODULES)
	@echo MODULES_WO_JSONLY = $(MODULES_WO_JSONLY)
	@echo DYNAMIC_STUBS = $(DYNAMIC_STUBS)
	@echo STATIC_STUBS = $(STATIC_STUBS)
	@echo INTERNAL_STUBS = $(INTERNAL_STUBS)
	@echo EXTERNAL_STUBS = $(EXTERNAL_STUBS)
	@echo C_MODULES_GSO = $(C_MODULES_GSO)
	@echo OTHER_MODULES = $(OTHER_MODULES)
	@echo GRAPHIX:%.grace=js/%.js = $(GRAPHIX:%.grace=js/%.js)
	@echo WEBFILES_SIMPLE = $(WEBFILES_SIMPLE)
	@echo WEB_DIRECTORY = $(WEB_DIRECTORY)
	@echo WEB_GRAPHICS_MODULES = $(WEB_GRAPHICS_MODULES)

fullclean: clean
	rm -rf .git-generation-cache
	rm -rf $$(ls -d known-good/*/* | grep -v $(STABLE))

fulltest: gencheck clean selftest selftest-js module-test-js

gencheck:
	X=$$(tools/git-calculate-generation) ; mv .git-generation-cache .git-generation-cache.$$$$ ; Y=$$(tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf .git-generation-cache ; mv .git-generation-cache.$$$$ .git-generation-cache

gracedoc: tools/gracedoc

grace-web-editor/index.html: pull-web-editor grace-web-editor/index.in.html
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/calc-IDE-version

grace-web-editor/scripts/setup.js: pull-web-editor $(filter-out %/setup.js,$(wildcard grace-web-editor/scripts/*.js)) $(wildcard grace-web-editor/scripts/*/*.js)
	cd grace-web-editor; npm install

graceWebIde:
#   make sure that the user who does this can log in as user grace
	$(MAKE) WEB_SERVER=grace@cs.pdx.edu ide

gracelib-basic.o: gracelib.c gracelib.h
	gcc -g -std=c99 -o gracelib-basic.o -c gracelib.c

gracelib.o: gracelib-basic.o debugger.o standardGrace.gcn collectionsPrelude.gcn
	ld -o gracelib.o -r gracelib-basic.o standardGrace.gcn collectionsPrelude.gcn debugger.o

ide: ideDeploy

ideBuild: js pull-brace grace-web-editor/scripts/setup.js $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES))) $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/includeJSLibraries $(ALL_LIBRARY_MODULES:%.grace=js/%.js)
	./tools/calc-IDE-version
	[ -d grace-web-editor/js ] || mkdir -m 755 grace-web-editor/js
	ln -f $(filter-out js/samples.js js/tabs.js,$(filter %.js,$(WEBFILES))) grace-web-editor/js
	ln -f $(GRAPHIX:%.grace=js/%.js) grace-web-editor/js

ideDeploy: ideBuild
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	rsync -az --delete --exclude .git grace-web-editor/ $(WEB_SERVER):$(WEB_DIRECTORY)

install: minigrace $(COMPILER_MODULES:%.grace=js/%.js) $(COMPILER_MODULES:%.grace=%.gct) $(STUB_GCTS) $(STUBS:%.grace=js/%.gct) js/grace $(LIBRARY_MODULES:%.grace=modules/%.gct)  $(LIBRARY_MODULES:%.grace=js/%.js) $(MODULES_WO_JSONLY:%.grace=modules/%.gcn) $(MODULES_WO_JSONLY:%.grace=modules/%.gso) gracelib.o
	install -d -p $(PREFIX)/bin $(MODULE_PATH) $(OBJECT_PATH) $(INCLUDE_PATH)
	install -p -m 755 minigrace $(PREFIX)/bin/minigrace
	install -p -m 755 js/grace $(PREFIX)/bin/grace
	install -p -m 755 $(C_MODULES_GSO) $(STUB_GCTS) js/gracelib.js js/unicodedata.js $(MODULE_PATH)
	install -p -m 755 gracelib.o $(OBJECT_PATH)
	install -p -m 755 gracelib.o $(MODULE_PATH)
	install -p -m 644 gracelib.h $(INCLUDE_PATH)
	install -p -m 644 mirrors.gso mirrors.gct $(MODULE_PATH)
	install -p -m 644 $(COMPILER_MODULES) $(COMPILER_MODULES:%.grace=js/%.js) $(COMPILER_MODULES:%.grace=%.gct) $(MODULE_PATH)
	install -p -m 644 $(LIBRARY_MODULES:%.grace=modules/%.grace) $(LIBRARY_MODULES:%.grace=js/%.gct) $(LIBRARY_MODULES:%.grace=js/%.js) $(MODULES_WO_JSONLY:%.grace=modules/%.gcn) $(MODULES_WO_JSONLY:%.grace=modules/%.gso) js/dom.js js/dom.gct $(MODULE_PATH)
	install -p -m 644 standardGrace.gcn collectionsPrelude.gcn $(MODULE_PATH)
	@./tools/warnAbout PATH $(PREFIX)/bin
	@./tools/warnAbout GRACE_MODULE_PATH $(MODULE_PATH)

$(JSONLY:%.grace=modules/%.gso): modules/%.gso:
	@echo "Can't build $@; no C version of dependencies"

$(JSONLY:%.grace=modules/%.gcn): modules/%.gcn:
	@echo "Can't build $@; no C version of dependencies"

$(JSONLY:%.grace=modules/%.gct): modules/%.gct:
	@echo "Can't build $@; no C version of dependencies"

$(JSONLY:%.grace=js/%.js): js/%.js: modules/%.grace js/dom.gct minigrace js/timer.gct
	GRACE_MODULE_PATH=js:modules ./minigrace --target js --dir js --make $(VERBOSITY) $<

$(JSONLY:%.grace=js/%.gct): js/%.gct: modules/%.grace js/dom.gct minigrace js/timer.gct
	GRACE_MODULE_PATH=js:modules ./minigrace --target js --dir js --make $(VERBOSITY) $<

js/ace/ace.js:
	curl https://raw.githubusercontent.com/ajaxorg/ace-builds/master/src-min/ace.js > js/ace/ace.js

js/collectionsPrelude%js js/collectionsPrelude%gct: collectionsPrelude.grace minigrace
	GRACE_MODULE_PATH=modules:js ./minigrace $(VERBOSITY) --make --target js --dir js $(<F)

js/index.html: js/index.in.html js/ace js/minigrace.js js/tests
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@

js/grace: js/grace.in
	sed -e "s|@MODULE_PATH@|$(MODULE_PATH)/|" $< > js/grace
	chmod a+x js/grace

js/grace-debug: js/grace
	sed -e "s|#!/usr/bin/env node|#!/usr/bin/env node --debug-brk|" $< > js/grace-debug
	chmod a+x js/grace-debug

js/minigrace.js: js/minigrace.in.js buildinfo.grace
	@echo Generating minigrace.js from minigrace.in.js...
	@cat js/minigrace.in.js > js/minigrace.js
	@echo "MiniGrace.version = '$$(tools/calculate-version HEAD)';" >> js/minigrace.js
	@echo "MiniGrace.revision = '$$(git rev-parse HEAD|cut -b1-7)';" >> js/minigrace.js

js/sample-dialects js/sample-graphics: js/sample-%: js
	$(MAKE) -C js/sample/$* VERBOSITY=$(VERBOSITY)

js/sample/graphics: $(WEB_GRAPHICS_MODULES:modules/%.grace=js/%.js)

js/sample/graphics/%.js: js/sample/graphics/%.grace minigrace
	cd js && GRACE_MODULE_PATH=. ../minigrace --make --target js ../$<

js/sample/dialects/%.js js/sample/dialects/%.gct js/sample/dialects/%.gso: js/sample/dialects/%.grace js/grace minigrace
	@echo "MAKE C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)"
#	$(MAKE) -C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)

js/s%andardGrace.js js/s%andardGrace.gct: standardGrace.grace js/collectionsPrelude.gct minigrace
	./minigrace --target js --dir js --make $(VERBOSITY) $<

js/s%andardGraceClass.gct js/s%andardGraceClass.gct: standardGraceClass.grace minigrace
	./minigrace $(VERBOSITY) --dir js --target js --make $<

js/animation%gct js/animation%js: js/timer.gct objectdraw/animation.grace

js: js/index.html js/dom.gct $(COMPILER_MODULES:%.grace=js/%.js) $(LIBRARY_MODULES:%.grace=js/%.js) $(WEBFILES) $(JSSOURCEFILES) minigrace
	ln -f minigrace js/minigrace

$(KG)/minigrace:
	if [ -e minigrace-$(VER).tar.bz2 ] ;\
	then ./tools/tarball-bootstrap minigrace-$(VER).tar.bz2 ;\
	else ./tools/tarball-bootstrap -a ;\
	fi

l1/buildinfo.gct: l1/buildinfo.grace
	GRACE_MODULE_PATH=. $(KG)/minigrace $(VERBOSITY) --make --noexec $<

l1/gracelib.h:
	cd l1 && ln -sf ../gracelib.h .

l1/gracelib-basic.o: l1/gracelib.c l1/gracelib.h
	cd l1 && gcc -g -std=c99 -o gracelib-basic.o -c gracelib.c

l1/gracelib.o: l1/gracelib-basic.o l1/debugger.o l1/standardGrace.gcn l1/collectionsPrelude.gcn
	cd l1 && ld -o gracelib.o -r gracelib-basic.o standardGrace.gcn collectionsPrelude.gcn debugger.o

l1/minigrace: $(KG)/minigrace $(STUBS:%.grace=l1/%.gct) $(DYNAMIC_STUBS:%.grace=l1/%.gso) $(PRELUDESOURCEFILES:%.grace=l1/%.gct) $(REALSOURCEFILES) l1/buildinfo.grace l1/gracelib.o l1/gracelib.h
	cd l1 && GRACE_MODULE_PATH=. ../$(KG)/minigrace  $(VERBOSITY) --make --native --gracelib . --module minigrace compiler.grace

# The following are pattern rules, to get the "sumiltaneous build" behaviour

l1/%.gct: l1/%.gso

l1/%tandardGrace.gct l1/%tandardGrace.gcn: standardGrace.grace l1/collectionsPrelude.gct $(KG)/minigrace
	GRACE_MODULE_PATH=. $(KG)/minigrace $(VERBOSITY) --make --noexec --dir l1 $<

l1/collectionsPrelude%gct l1/collectionsPrelude%gcn: collectionsPrelude.grace $(KG)/minigrace
	GRACE_MODULE_PATH=. $(KG)/minigrace $(VERBOSITY) --make --noexec --dir l1 $<

l1/curl.gso: curl.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -I/usr/local/include -L/usr/local/lib -o $@ -shared -fPIC curl.c -lcurl

l1/mirrors.gso: $(KG)/mirrors.gso
	cd l1 && ln -f ../$(KG)/mirrors.gso .

l1/unicode.gso: unicode.c
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -I/usr/local/include -L/usr/local/lib -o $@ -shared -fPIC $<

$(LIBRARY_MODULES:%.grace=modules/%.gcn): modules/%.gcn: modules/%.gso

$(LIBRARY_MODULES:%.grace=modules/%.gso): modules/%.gso: modules/%.gct

$(MODULES_WO_JSONLY:%.grace=modules/%.gct): modules/%.gct: modules/%.grace minigrace
	GRACE_MODULE_PATH=modules ./minigrace $(VERBOSITY) --make --noexec -XNoMain $<

$(MODULES_WO_JSONLY:%.grace=modules/%.gso): modules/%.gso: modules/%.gct

$(MODULES_WO_JSONLY:%.grace=js/%.js): js/%.js: modules/%.grace minigrace
	GRACE_MODULE_PATH=modules ./minigrace $(VERBOSITY) --make --target js --dir js $<

$(MODULES_WO_JSONLY:%.grace=js/%.gct): js/%.gct: js/%.js

Makefile.conf: configure stubs modules
	./configure

$(REALSOURCEFILES:%.grace=l1/%.gct): l1/%.gct: l1/%.grace l1/standardGrace.gct $(KG)/minigrace
	cd l1 && GRACE_MODULE_PATH=. ../$(KG)/minigrace  $(VERBOSITY) --make --noexec  $(<F)

$(MGSOURCEFILES:%.grace=%.gcn): $(MGSOURCEFILES:%.grace=%.gct)

$(MGSOURCEFILES:%.grace=%.gso): $(MGSOURCEFILES:%.grace=%.gct)

$(MGSOURCEFILES:%.grace=%.gct): %.gct: %.grace standardGrace.gct l1/minigrace
	GRACE_MODULE_PATH=.:.. l1/minigrace $(VERBOSITY) --make --noexec $<

$(MGSOURCEFILES:%.grace=js/%.js): js/%.js: %.grace js/standardGrace.gct minigrace
	GRACE_MODULE_PATH=js ./minigrace $(VERBOSITY) --make --target js --dir js $<

#$(C_MODULES_GSO:modules/%.gso=%.gso): %.gso: modules/%.gso
#	ln -sf $< .

# Giant hack! Not suitable for use.
minigrace-dynamic: l1/minigrace $(SOURCEFILES)
	l1/minigrace $(VERBOSITY) --make --noexec --import-dynamic -XNoMain -XNativePrelude standardGrace.grace
	ld -o gracelib.o -r gracelib-basic.o standardGrace.gcn debugger.o
	l1/minigrace $(VERBOSITY) --make --import-dynamic $(VERBOSITY) --module minigrace-dynamic compiler.grace

minigrace: l1/minigrace $(STUBS:%.grace=%.gct) $(SOURCEFILES) $(C_MODULES_GSO) $(C_MODULES_GSO:%.gso=%.gct) gracelib.o unixFilePath.gct
	GRACE_MODULE_PATH=. l1/minigrace --make --native --module minigrace $(VERBOSITY) --gracelib . compiler.grace

minigrace-environment: minigrace-c-env minigrace-js-env

minigrace-c-env: minigrace standardGrace.gct gracelib.o unicode.gso $(MODULES_WO_JSONLY:%.grace=modules/%.gct) .git/hooks/commit-msg

minigrace-js-env: minigrace js/grace js/grace-debug standardGrace.gct js/standardGraceClass.gct js/gracelib.js .git/hooks/commit-msg $(PRELUDESOURCEFILES:%.grace=js/%.js) $(LIBRARY_MODULES:%.grace=modules/%.gso) $(LIBRARY_MODULES:%.grace=js/%.js) js/ast.js js/errormessages.js dom.gct $(JSSOURCEFILES) $(JSSOURCEFILES:%.js=%.gct) $(TYPE_DIALECTS:%=modules/%.gso) $(TYPE_DIALECTS:%=js/%.js) $(TEST_DEPENDENCIES:%=js/tests/%.js) $(TEST_DEPENDENCIES:%=js/tests/%.gct)

mirrors.gso: mirrors.c
	gcc -g -I. -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

module-test-js: minigrace-js-env $(TYPE_DIALECTS:%=js/%.js) $(TYPE_DIALECTS:%=modules/%.gso)
	modules/tests/harness_js minigrace

modules/curl.gso: curl.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC curl.c -lcurl

modules/gUnit.gct modules/gUnit.gso modules/gUnit.gcn: mirrors.gso

modules/minitest.gct modules/minitest.gso modules/minitest.gcn: modules/gUnit.gso standardGraceClass.gcn

modules/rtobjectdraw.grace: modules/objectdraw.grace tools/make-rt-version
	./tools/make-rt-version $< > $@

modules/stobjectdraw.grace: modules/objectdraw.grace tools/make-st-version
	./tools/make-st-version $< > $@

$(OBJECTDRAW_REAL:%.grace=modules/%.grace): modules/%.grace: pull-objectdraw
	cd modules && ln -sf $(@:modules/%.grace=../objectdraw/%.grace) .

# Not for normal use!   A check test of a change to
# only the js code generator
old-js-one: l1/minigrace
	l1/minigrace --target js --dir js/tests --make collectionsPrelude.grace
	node -c js/tests/collectionsPrelude.js
	l1/minigrace --target js --dir js/tests --make standardGrace.grace
	l1/minigrace --target js --dir js/tests --make modules/gUnit.grace
	l1/minigrace --target js --dir js/tests --make modules/minitest.grace
	GRACE_MODULE_PATH=js/tests:js l1/minigrace js/tests/t001_languageTests0_49_test.grace --verbose --target js

old-js-two: old-js-one
	GRACE_MODULE_PATH=js/tests:js l1/minigrace js/tests/t003_languageTests100_145_test.grace --verbose --target js

oldWeb: $(WEBFILES) js/sample
	rsync -a -l -z --delete $(WEBFILES) $(WEB_SERVER):$(WEB_DIRECTORY)
	rsync -a -l -z js/samples.js $(WEB_SERVER):$(WEB_DIRECTORY)
	rsync -a -l -z js/sample $(WEB_SERVER):$(WEB_DIRECTORY)
	rsync -a -l -z sample $(WEB_SERVER):$(WEB_DIRECTORY)
	rsync -a -l -z js/sample/graphics/ $(WEB_SERVER):$(WEB_DIRECTORY)

pull-web-editor:
	@if [ -e grace-web-editor ] ; \
       then printf "grace-web-editor: " ; cd grace-web-editor; git pull ; \
       else git clone --branch pdx https://github.com/gracelang/grace-web-editor/ ; fi

pull-objectdraw:
	@if [ -e objectdraw ] ; \
       then printf "objectdraw: " ; cd objectdraw; git pull ; \
       else git clone https://github.com/gracelang/objectdraw/ ; fi

pull-brace: pull-web-editor
	@if [ -e grace-web-editor/brace ] ; \
       then printf "grace-web-editor/brace: " ; cd grace-web-editor/brace; git pull ; \
       else git clone https://github.com/gracelang/brace/ grace-web-editor/brace ; fi

sample-dialects: $(DIALECT_DEPENDENCIES)
	$(MAKE) -C sample/dialects VERBOSITY=$(VERBOSITY)

sample/dialects/%.gso: $(DIALECT_DEPENDENCIES) sample/dialects/%.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

sample/dialects/requireTypes.gct sample/dialects/requireTypes.gso: $(DIALECT_DEPENDENCIES) sample/dialects/requireTypes.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

sample/dialects/staticTypes.gct sample/dialects/staticTypes.gso: $(DIALECT_DEPENDENCIES) sample/dialects/staticTypes.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

samples: sample-dialects js/sample-dialects
# omitted for the time-being: js/sample-graphics

selfhost-stats: minigrace-js-env
	rm -rf selftest-js
	mkdir -p selftest-js
	cd selftest-js; ln -sf $(STUBS:%.grace=../js/%.gct) $(STUBS:%.grace=../js/%.js) .
	cp -f $(SOURCEFILES) selftest-js    # copy makes the source file newer than the .gct
	cd selftest-js; ln -sf ../js/gracelib.js ../js/unicodedata.js .
	cd selftest-js; STATS=TRUE GRACE_MODULE_PATH=..:../js:../modules time ../minigrace-js $(VERBOSITY) --make --target js --module minigrace --dir generated --module minigrace compiler.grace
# generated files go in a subdirectory, to avoid over-writing the files that
# are being executed!

selftest: minigrace-environment
	rm -rf selftest
	mkdir -p selftest
	( cd selftest; ln -sf $(C_MODULES_GSO:%=../%) $(C_MODULES_GSO:%.gso=../%.gct) . )
	GRACE_MODULE_PATH=modules:js ./minigrace $(VERBOSITY) --make --native --module minigrace --dir selftest --module minigrace compiler.grace
	tests/harness selftest/minigrace tests

selftest-js: minigrace-js-env $(ALL_LIBRARY_MODULES:%.grace=../js/%.js)
	rm -rf selftest-js
	mkdir -p selftest-js
	( cd selftest-js; ln -sf $(ALL_LIBRARY_MODULES:%.grace=../js/%.js) . )
	( cd selftest-js; ln -sf ../js/gracelib.js . )
	GRACE_MODULE_PATH=modules:js ./minigrace-js $(VERBOSITY) --make --native --module minigrace --dir selftest-js --module minigrace compiler.grace && \
	tests/harness selftest-js/minigrace tests

# must be a pattern rule to get the "simultaneous build" semantics.
s%andardGrace.gct s%andardGrace.gcn: standardGrace.grace collectionsPrelude.gct l1/minigrace l1/unicode.gso
	cd l1 && GRACE_MODULE_PATH=. ./minigrace $(VERBOSITY) --make --noexec -XNoMain --dir .. ../$<

# The next few rules are Static Pattern Rules.  Each is like an implicit rule
# for making %.gct from stubs/%.grace, but applies only to the targets in $(STUBS:*)

$(filter-out modules/curl.gso,$(DYNAMIC_STUBS:%.grace=modules/%.gso)): modules/%.gso: %.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

s%andardGraceClass.gct s%andardGraceClass.gcn: standardGraceClass.grace minigrace
	./minigrace $(VERBOSITY) --make $<

$(SOURCEFILES:%.grace=js/tests/%.js): js/tests/%.js: js/%.js
	cd js/tests; ln -sf ../$(<F) .
	cd js/tests; ln -sf ../$(<F:%.js=%.gct) .

$(STUBS:%.grace=%.gct): %.gct: stubs/%.gct
	ln -sf $< .

$(STUBS:%.grace=stubs/%.gct): stubs/%.gct: stubs/%.grace standardGrace.gct l1/minigrace l1/unicode.gso
	@rm -f $(@:%.gct=%{.c,.gcn,})
	cd l1 && GRACE_MODULE_PATH=. ./minigrace $(VERBOSITY) --make --noexec --dir ../stubs ../$<
	@rm -f $(@:%.gct=%{.c,.gcn});

$(STUBS:%.grace=stubs/l1/%.gct): stubs/l1/%.gct: stubs/%.grace l1/standardGrace.gct $(KG)/minigrace
	@rm -f $(@:%.gct=%{.c,.gcn,})
	GRACE_MODULE_PATH=l1 $(KG)/minigrace $(VERBOSITY) --make --noexec --dir stubs/l1 $<
	@rm -f $(@:%.gct=%{.c,.gcn});

$(STUBS:%.grace=js/%.gct): js/%.gct: stubs/%.gct
	cd js && ln -sf ../$< .

$(STUBS:%.grace=l1/%.gct): l1/%.gct: stubs/l1/%.gct
	cd l1 && ln -sf ../$< .

tarWeb: js
	tar -cvf webfiles.tar $(WEBFILES) tests sample
#	Untar in your public_html directory with "tar -xpf ~/webfiles.tar". Make the
#	subdirectory that tar creates readable and executable by your web daemon.

tarball: minigrace
	touch c/Makefile.conf
	$(MAKE) -C c fullclean
	$(MAKE) c
	sed -e 's/DISTRIB=tree/DISTRIB=tarball/' < configure > c/configure
	chmod 755 c/configure
	VER=$$(tools/calculate-version) ;\
      mkdir minigrace-$$VER ; cp -R c/* gUnit.grace minigrace-$$VER ;\
      mkdir minigrace-$$VER/tests ; cp tests/*.grace tests/*.out tests/harness minigrace-$$VER/tests ;\
      mkdir minigrace-$$VER/stubs ; cp stubs/*.grace minigrace-$$VER/stubs ;\
      mkdir minigrace-$$VER/modules ; cp modules/*.grace minigrace-$$VER/modules ;\
      cp {unicode.c,unicode.gct,mirrors.c,mirrors.gct,unixFilePath.c,unixFilePath.gct} minigrace-$$VER ;\
      cp -R README doc minigrace-$$VER ;\
      tar cjvf ../minigrace-$$VER.tar.bz2 minigrace-$$VER ;\
      chmod a+r ../minigrace-$$VER.tar.bz2 ;\
      rm -rf minigrace-$$VER

test.js.compile: minigrace
	@echo "compiling tests to JavaScript"
	@cd js/tests; ls *_test.grace | grep -v "fail" | sed 's/^t\([0-9]*\)_.*/& \1/'\
    | while read -r fileName num; \
    do echo "$$num \c"; ../../minigrace --target js $${fileName}; \
    done && echo "tests compiled."

$(TYPE_DIALECTS:%=%.gso): %.gso: $(DIALECTS_NEED:%=%.gso) $(DIALECTS_NEED:%=%.gct)

$(TYPE_DIALECTS:%=js/%.js): js/%.js: $(DIALECTS_NEED:%=%.gso) $(DIALECTS_NEED:%=%.gct) $(patsubst modules/%, js/%.js, $(filter modules/%,$(DIALECTS_NEED)))

$(TYPE_DIALECTS:%=%.gso): %.gso: %.gct

$(TYPE_DIALECTS:%=%.gcn): %.gcn: %.gct

test.js: minigrace-js-env
	js/tests/harness minigrace js/tests "" $(TESTS)

test: minigrace-c-env modules/minitest.gso
	tests/harness minigrace tests "" $(TESTS)

togracetest: minigrace
	tests/harness minigrace tests tograce $(TESTS)

tools/gracedoc: ./minigrace modules/gracedoc.grace ast.grace io.gct lexer.grace parser.grace sys.gct
	@echo "gracedoc is in its own git repository"

unicode.gso: unicode.c
	gcc -g -I. -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

uninstall:
	rm -f $(PREFIX)/bin/minigrace
	rm -f $(OBJECT_PATH)/gracelib.o
	rm -f $(INCLUDE_PATH)/gracelib.h
	rm -rf $(MODULE_PATH)/*.{gct,js,grace,gcn,gso,gso.dSYM,c}
	rm -rf $(MODULE_PATH)/gracelib.o

webIde:
	$(MAKE) ide

.git/hooks/commit-msg: tools/validate-commit-message
	@ln -s ../../tools/validate-commit-message .git/hooks/commit-msg

%.o: %.c
	gcc -g -std=c99 -c -o $@ $<

#modules/%.gso: %.c gracelib.h
#	gcc -g -I. -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<
