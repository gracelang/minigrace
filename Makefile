include Makefile.conf

.PHONY: all c clean dialects echo fullclean install js minigrace-environment minigrace-c-env minigrace-js-env selfhost-stats selftest samples sample-% test test.js test.js.compile uninstall

ARCH := $(shell uname -s)-$(shell uname -m)
STUBS := $(filter-out %Prelude.grace,$(STUBS))
C_MODULES_GSO := $(UNICODE_MODULE) $(OTHER_MODULES)
C_MODULES_GCN := $(OTHER_MODULES:%.gso=%.gcn)
C_MODULES_BIN = $(C_MODULES_GCN) $(C_MODULES_GSO)
CFILES = ast.c buildinfo.c genc.c genjs.c lexer.c parser.c util.c mgcollections.c interactive.c xmodule.c identifierresolution.c genjson.c errormessages.c
# The next rule is here for its side effect: updating buildinfo.grace if necessary
CHECK_BUILDINFO := $(shell tools/check-buildinfo $(PREFIX) $(INCLUDE_PATH) $(MODULE_PATH) $(OBJECT_PATH))
JS_STUBS = dom.grace
INTERNAL_STUBS := io.grace sys.grace imports.grace   # for which there are no c files
DYNAMIC_STUBS := $(shell tools/set-difference "$(STUBS)" "$(INTERNAL_STUBS) $(JS_STUBS)")
STATIC_STUBS := $(shell tools/set-difference "$(STUBS)" "$(DYNAMIC_STUBS) $(INTERNAL_STUBS) $(JS_STUBS)")
EXTERNAL_STUBS := $(shell tools/set-difference "$(STUBS)" "$(INTERNAL_STUBS) $(JS_STUBS)")
GRACE_DIALECTS = sample/dialects/requireTypes.grace sample/dialects/staticTypes.grace sample/dialects/dialect.grace sample/dialects/minitest.grace rtobjectdraw.grace objectdraw.grace animation.grace ast.grace util.grace buildinfo.grace
GRACE_MODULES = gUnit.grace collections.grace StandardPrelude.grace collectionsPrelude.grace ast.grace mgcollections.grace
MGSOURCEFILES = buildinfo.grace $(REALSOURCEFILES)
JSSOURCEFILES = $(filter-out js/repl.js,$(filter-out js/interactive.js,$(SOURCEFILES:%.grace=js/%.js)))
KG=known-good/$(ARCH)/$(STABLE)
STUB_GCTS = $(STUBS:%.grace=stubs/%.gct)
DIALECT_DEPENDENCIES=minigrace errormessages.gso ast.gso util.gso mgcollections.gso buildinfo.gso gUnit.gso

VERBOSITY = --verbose

MINIGRACE_BUILD_SUBPROCESSES ?= 9

# override MAKEFLAGS := $(MAKEFLAGS) --debug=b

PRELUDESOURCEFILES = collectionsPrelude.grace StandardPrelude.grace
REALSOURCEFILES = compiler.grace errormessages.grace util.grace ast.grace lexer.grace parser.grace genjs.grace genc.grace mgcollections.grace collections.grace interactive.grace xmodule.grace identifierresolution.grace genjson.grace
SOURCEFILES = $(MGSOURCEFILES) $(PRELUDESOURCEFILES)

STABLE=66625d4f94cdf2ecc7b7689ea147277ffe16f1c1
WEBFILES = js/index.html js/global.css js/tests js/minigrace.js js/samples.js  js/tabs.js js/gracelib.js js/dom.js js/gtk.js js/debugger.js js/timer.js js/ace  js/sample js/debugger.html  js/*.png js/unicodedata.js js/objectdraw.js js/animation.js $(GRACE_MODULES:%.grace=js/%.js) $(filter-out js/util.js,$(JSSOURCEFILES))

all: minigrace-environment $(C_MODULES_BIN) $(GRACE_MODULES:.grace=.gct) $(GRACE_MODULES:.grace=.gcn) sample-dialects $(GRACE_DIALECTS)

# These are necessary for l1 until the $(KG) compiler learns about dependencies
# The dependencises for l2 and . allow parallel compilation of the mg sub-modules

include Makefile.mgDependencies

# The rules that follow are in alphabetical order.  Keep them that way!

ace-code: js/ace/ace.js

alltests: test test.js

animation.grace:
	curl https://raw.githubusercontent.com/gracelang/objectdraw/master/animation.grace > animation.grace

blackWeb: js samples ace-code
	rsync -a -l -z --delete $(WEBFILES) black@cs.pdx.edu:public_html/minigrace/js
	rsync -a -l -z --delete sample black@cs.pdx.edu:public_html/minigrace

bruceWeb: js samples ace-code
	rsync -a -l -z --delete $(WEBFILES) kim@project.cs.pomona.edu:www/minigrace/js
	rsync -a -l -z --delete sample kim@project.cs.pomona.edu:www/minigrace

c: minigrace gracelib.c gracelib.h unicode.c unicodedata.h unicode.gct Makefile c/Makefile mirrors.c mirrors.gct definitions.h curl.c repl.c repl.gct math.c math.gct
	for f in gracelib.c gracelib.h unicode.{c,gct,gso} unicodedata.h $(SOURCEFILES) collectionsPrelude.grace StandardPrelude.grace mirrors.{c,gct,gso} repl.{c,gct,gso} math.{c,gct,gcn} definitions.h debugger.c curl.c ;\
    do cp -f $$f c ; done &&\
    cd c &&\
    ../minigrace --make $(VERBOSITY) --noexec -XNoMain -XNativePrelude collectionsPrelude.grace &&\
    ../minigrace --make $(VERBOSITY) --noexec -XNoMain -XNativePrelude StandardPrelude.grace &&\
    ../minigrace --target c --make $(VERBOSITY) --module minigrace --noexec compiler.grace &&\
    rm -f *.gcn *.gso

$(C_MODULES_GCN): %.gcn: %.c gracelib.h
	gcc -g -std=c99 -c -o $@ -fPIC $<

clean:
	rm -f gracelib.bc gracelib.o gracelib-basic.o
	rm -fr unicode.gco unicode.gso unicode.gcn unicode.gso.dSYM
	rm -f mirrors.gso math.gso
	rm -f debugger.o
	rm -fr *.gso *.gso.dSYM
	rm -f StandardPrelude.{c,gcn,gct} js/StandardPrelude.js collectionsPrelude.{c,gcn,gct} js/collectionsPrelude.js
	rm -rf l1 l2 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f $(SOURCEFILES:.grace=.gco)
	rm -f $(SOURCEFILES:.grace=.gcn) minigrace.gcn
	rm -f $(SOURCEFILES:.grace=.gso) minigrace.gso
	rm -f $(SOURCEFILES:.grace=.gct) minigrace.gct
	rm -f $(STUB_GCTS)
	rm -rf *.gso.dSYM */*.gso.dSYM */*/*.gso.dSYM
	rm -f stdin_minigrace.c
	rm -f minigrace-dynamic
	rm -f $(SOURCEFILES:.grace=)
	rm -f objectdraw.* rtobjectdraw.*
	( cd known-good && $(MAKE) clean )
	( cd js && for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js && for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	rm -f js/minigrace.js
	cd c && rm -f *.gcn *.gct *.c *.h *.grace minigrace unicode.gso gracelib.o
	rm -f minigrace.gco minigrace *.js
	rm -fr grace-web-editor
	cd stubs && rm -f *.gct *gcn *.gso *js *.c
	cd sample/dialects && $(MAKE)  clean
	cd js/sample/graphics && $(MAKE) clean
	cd js/sample/dialects && $(MAKE) clean

collectionsPrelude.gcn:
	@echo "gcn file created with gct: $@"

collectionsPrelude.gct: collectionsPrelude.grace l2/minigrace
	l2/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag l2 $<

curl.gso: curl.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o curl.gso -shared -fPIC curl.c -lcurl

dialects: js js/sample/dialects/requireTypes.js mgcollections.gso buildinfo.gso js/sample/dialects/requireTypes.gso js/sample/dialects/staticTypes.js js/sample/dialects/staticTypes.gct js/sample/dialects/staticTypes.gso js/sample/dialects/minitest.js gUnit.js gUnit.gso

$(DYNAMIC_STUBS:%.grace=l1/%.gso): l1/%.gso: %.gso l1/exists
	@cd l1 && cp -f ../$< .

$(DYNAMIC_STUBS:%.grace=l2/%.gso): l2/%.gso: %.gso l2/exists
	@cd l2 && cp -f ../$< .

echo:
	@echo MINIGRACE_BUILD_SUBPROCESSES = $(MINIGRACE_BUILD_SUBPROCESSES)
	@echo MAKEFLAGS = $(MAKEFLAGS)
	@echo SOURCEFILES = $(SOURCEFILES)
	@echo WEBFILES = $(WEBFILES)
	@echo KG = $(KG):
	@echo STUBS = $(STUBS)
	@echo DYNAMIC_STUBS = $(DYNAMIC_STUBS)
	@echo STATIC_STUBS = $(STATIC_STUBS)
	@echo INTERNAL_STUBS = $(INTERNAL_STUBS)
	@echo EXTERNAL_STUBS = $(EXTERNAL_STUBS)
	@echo C_MODULES_GCN = $(C_MODULES_GCN)
	@echo C_MODULES_GSO = $(C_MODULES_GSO)
	@echo C_MODULES_BIN = $(C_MODULES_BIN)

expWeb: js grace-web-editor/scripts/setup.js $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES)))
	@[ -n "$(EXP_WEB_SERVER)" ] || { echo "Please set the EXP_WEB_SERVER variable to something like user@machine" && false; }
	rsync -a -l -z --delete grace-web-editor/ $(EXP_WEB_SERVER):public_html/minigrace/exp/
	rsync -a -l -z --delete $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES))) $(EXP_WEB_SERVER):public_html/minigrace/exp/js/

fullclean: clean
	rm -f Makefile.conf
	rm -rf $$(ls -d known-good/*/* | grep -v $(STABLE))

fulltest: gencheck clean selftest test

gencheck:
	X=$$(tools/git-calculate-generation) ; mv .git-generation-cache .git-generation-cache.$$$$ ; Y=$$(tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf .git-generation-cache ; mv .git-generation-cache.$$$$ .git-generation-cache

grace-web-editor/index.html:
	git clone https://github.com/ryan52/grace-web-editor/

grace-web-editor/scripts/setup.js: grace-web-editor/index.html $(filter-out %/setup.js,$(wildcard grace-web-editor/scripts/*.js)) $(wildcard grace-web-editor/scripts/*/*.js)
	cd grace-web-editor; npm install

graceWeb: js samples ace-code
	rsync -a -l -z --delete $(WEBFILES) grace@cs.pdx.edu:public_html/minigrace/js
	rsync -a -l -z --delete sample grace@cs.pdx.edu:public_html/minigrace

gracelib-basic.o: gracelib.c gracelib.h
	gcc -g -std=c99 -o gracelib-basic.o -c gracelib.c

gracelib.o: gracelib-basic.o debugger.o StandardPrelude.gcn collectionsPrelude.gcn
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn collectionsPrelude.gcn debugger.o

gUnit.gcn: gUnit.gct
	@echo "gcn file created with gct: $@"

gUnit.gct: gUnit.grace StandardPrelude.gct minigrace
	./minigrace $(VERBOSITY) --make --noexec -XNoMain $<

install: minigrace $(GRACE_MODULES:%.grace=js/%.js) $(GRACE_DIALECTS:%.grace=%.gso) $(GRACE_DIALECTS:%.grace=js/%.js) $(STUB_GCTS)
	install -d $(PREFIX)/bin $(MODULE_PATH) $(OBJECT_PATH) $(INCLUDE_PATH)
	install -m 755 minigrace js/grace $(PREFIX)/bin/minigrace
	install -m 755 $(C_MODULES_BIN) $(STUB_GCTS) $(MODULE_PATH)
	install -m 755 gracelib.o $(OBJECT_PATH)
	install -m 644 gracelib.h $(INCLUDE_PATH)
	install -m 644 mgcollections.grace $(MODULE_PATH)
	install -m 644 $(GRACE_MODULES) $(GRACE_MODULES:%.grace=js/%.js) $(GRACE_MODULES:%.grace=%.gct) $(MODULE_PATH)
	install -m 644 $(GRACE_DIALECTS) $(GRACE_DIALECTS:%.grace=js/%.js) $(GRACE_DIALECTS:%.grace=%.gct) $(GRACE_DIALECTS:%.grace=%.gso) $(GRACE_DIALECTS:%.grace=%.gcn) $(MODULE_PATH)

js/ace/ace.js:
	curl https://raw.githubusercontent.com/ajaxorg/ace-builds/master/src-min/ace.js > js/ace/ace.js

js/animation.js: animation.grace minigrace
	cd js && cp -f ../$< . && ../minigrace --target js --make $(VERBOSITY) $<

js/collectionsPrelude.js: js/collectionsPrelude.gct
	@echo "$@ was built with the gct"

js/collectionsPrelude.gct: collectionsPrelude.grace minigrace
	cd js && cp -f ../$(<F) . && ../minigrace $(VERBOSITY) --target js --make $(<F)

js/dom.gct: stubs/dom.gct
	cd js; ln -fs ../stubs/dom.gct .

js/index.html: js/index.in.html js/ace js/minigrace.js js/tests
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@

js/gUnit.js: js/gUnit.gct
	echo "$@ made with the gct"

js/gUnit.gct: gUnit.grace minigrace
	cd js; cp -f ../$< .; ../minigrace --target js --make $(VERBOSITY) $<

js/minigrace.js: js/minigrace.in.js
	@echo Generating minigrace.js from minigrace.in.js...
	@cat js/minigrace.in.js > js/minigrace.js
	@echo "MiniGrace.version = '$$(tools/calculate-version HEAD)';" >> js/minigrace.js
	@echo "MiniGrace.revision = '$$(git rev-parse HEAD|cut -b1-7)';" >> js/minigrace.js

js/objectdraw.js: objectdraw.grace minigrace
	cd js && cp -f ../$< . && ../minigrace --target js --make $(VERBOSITY) $<

js/rtobjectdraw.js js/rtobjectdraw.gct: rtobjectdraw.grace minigrace
	cd js && cp -f ../$< . && ../minigrace --target js --make $(VERBOSITY) $<

js/sample-dialects js/sample-graphics: js/sample-%: js
	$(MAKE) -C js/sample/$* VERBOSITY=$(VERBOSITY)

js/sample/dialects/requireTypes.js js/sample/dialects/requireTypes.gct js/sample/dialects/requireTypes.gso: js/sample/dialects/requireTypes.grace minigrace
	@echo "MAKE C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)"
	$(MAKE) -C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)

js/sample/dialects/staticTypes.js js/sample/dialects/staticTypes.gct js/sample/dialects/staticTypes.gso: js/sample/dialects/staticTypes.grace minigrace
	@echo "MAKE C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)"
	$(MAKE) -C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)

js/StandardPrelude.js: js/StandardPrelude.gct
	@echo "$@ was built with the gct"

js/StandardPrelude.gct: StandardPrelude.grace js/collectionsPrelude.gct minigrace
	cd js && cp -f ../$(<F) . && ../minigrace $(VERBOSITY) --target js --make $(<F)

js/timer.gct: stubs/timer.gct
	cd js; ln -fs ../stubs/timer.gct .

js: minigrace js/index.html js/dom.gct $(GRACE_MODULES:%.grace=js/%.js) $(WEBFILES) $(JSSOURCEFILES)
	ln -f minigrace js/minigrace

just-minigrace:
	./l2/minigrace --vtag l2 -j $(MINIGRACE_BUILD_SUBPROCESSES) --make --native --module minigrace $(VERBOSITY) compiler.grace

known-good/%:
	@echo "making $@"
	cd known-good && $(MAKE) $*
	rm -f known-good/*out

l1/%.gct: l1/%.grace l1/StandardPrelude.gct $(KG)/minigrace
	cd l1; ../$(KG)/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag kg $(<F)

l1/collectionsPrelude.gcn: l1/collectionsPrelude.gct
	@echo "gcn file created with gct: $@"

l1/collectionsPrelude.gct: l1/exists l1/collectionsPrelude.grace $(KG)/minigrace
	cd l1 && ../$(KG)/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag kg collectionsPrelude.grace

l1/collectionsPrelude.grace: l1/exists collectionsPrelude.grace
	@cd l1 && cp -f ../collectionsPrelude.grace .

l2/collectionsPrelude.grace: l2/exists collectionsPrelude.grace
	@cd l2 && cp -f ../collectionsPrelude.grace .

l2/%.grace: l2/exists
	@echo "$@ was created with l2/exists"

l1/%.grace: l1/exists
	@echo "$@ was created with l1/exists"

l1/exists: $(SOURCEFILES) $(C_MODULES_BIN) $(STUB_GCTS) gracelib.h gracelib-basic.o
	@if [ ! -e l1/exists ] ; then mkdir -p l1 ; fi
	touch l1/exists
	@cd l1 && for f in $(SOURCEFILES) $(C_MODULES_BIN) $(STUB_GCTS) gracelib.h gracelib-basic.o ; do cp -f ../$$f . ; done ;

l1/gracelib.o: gracelib-basic.o debugger.o l1/StandardPrelude.gcn l1/collectionsPrelude.gcn
	ld -o l1/gracelib.o -r gracelib-basic.o l1/StandardPrelude.gcn l1/collectionsPrelude.gcn debugger.o

l1/minigrace: l1/exists $(KG)/minigrace $(STUBS:%.grace=l1/%.gct) $(DYNAMIC_STUBS:%.grace=l1/%.gso) $(PRELUDESOURCEFILES:%.grace=l1/%.gct) $(MGSOURCEFILES) gracelib.c gracelib.h l1/gracelib.o
	cd l1; ../$(KG)/minigrace $(VERBOSITY) --make --native --module minigrace --gracelib ./ --vtag kg -j $(MINIGRACE_BUILD_SUBPROCESSES) compiler.grace

l1/StandardPrelude.gcn: l1/StandardPrelude.gct
	@echo "gcn file created with gct: $@"

l1/StandardPrelude.gct: l1/StandardPrelude.grace l1/collectionsPrelude.gct $(KG)/minigrace
	cd l1 && ../$(KG)/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag kg StandardPrelude.grace

l1/StandardPrelude.grace: l1/exists StandardPrelude.grace
	@cd l1 && cp -f ../StandardPrelude.grace .

l2/StandardPrelude.grace: l2/exists StandardPrelude.grace
	@cd l2 && cp -f ../StandardPrelude.grace .

l1/unicode.gcn: unicode.c unicodedata.h gracelib.h l1/exists
	gcc -g -std=c99 -c -o $@ -fPIC $<

l2/%.gso: %.c unicodedata.h gracelib.h l2/exists
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

l2/unicode.gcn: unicode.c unicodedata.h gracelib.h l2/exists
	gcc -g -std=c99 -c -o $@ -fPIC $<
    
$(C_MODULES_GCN:%=l1/%): l1/%.gcn: %.gcn l1/exists
	cd l1 && cp -f ../$< .

l2/%.gct: l2/%.grace l1/minigrace
	(cd l2 && ../l1/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag l1 $(<F))

l2/collectionsPrelude.gcn: l2/collectionsPrelude.gct
	@echo "gcn file created with gct: $@"

l2/collectionsPrelude.gct: l2/exists l2/collectionsPrelude.grace l1/minigrace
	cd l2 && ../l1/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag l1 collectionsPrelude.grace

l2/exists: $(SOURCEFILES) $(C_MODULES_BIN) $(STUB_GCTS) gracelib.h gracelib-basic.o
	if [ ! -e l2/exists ] ; then mkdir -p l2 ; fi
	touch l2/exists
	cd l2 && for f in $(SOURCEFILES) $(C_MODULES_BIN) $(STUB_GCTS) gracelib.h gracelib-basic.o ; do cp -f ../$$f . ; done ;

l2/gracelib.o: gracelib-basic.o debugger.o l2/StandardPrelude.gcn l2/collectionsPrelude.gcn
	ld -o l2/gracelib.o -r gracelib-basic.o l2/StandardPrelude.gcn l2/collectionsPrelude.gcn debugger.o

l2/minigrace: l2/exists l1/minigrace $(STUBS:%.grace=l2/%.gct) $(PRELUDESOURCEFILES:%.grace=l2/%.gct) $(MGSOURCEFILES) $(C_MODULES_BIN:%=l2/%) l2/gracelib.o
	cd l2; ../l1/minigrace $(VERBOSITY) --make --native --module minigrace --vtag l1 -j $(MINIGRACE_BUILD_SUBPROCESSES) compiler.grace

l2/StandardPrelude.gcn: l2/StandardPrelude.gct
	@echo "gcn file created with gct: $@"

l2/StandardPrelude.gct: l2/exists l2/StandardPrelude.grace l2/collectionsPrelude.gct l1/minigrace
	cd l2 && ../l1/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag l1 StandardPrelude.grace

Makefile.conf: configure
	./configure

$(C_MODULES_GCN:%=l2/%): l2/%.gcn: %.gcn l2/exists
	@cd l2 && cp -f ../$< .

$(MGSOURCEFILES:%.grace=l1/%.gct): l1/%.gct: l1/%.grace l1/exists l1/StandardPrelude.gct $(KG)/minigrace
	cd l1 && ../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F)

$(MGSOURCEFILES:%.grace=l2/%.gct): l2/%.gct: l2/%.grace l2/exists l2/StandardPrelude.gct l1/minigrace
	cd l2 && ../l1/minigrace $(VERBOSITY) --make --noexec --vtag l1 $(<F)

$(MGSOURCEFILES:%.grace=%.gcn): %.gcn: %.gct
	@echo "gcn file created with gct: $@"

$(MGSOURCEFILES:%.grace=%.gct): %.gct: %.grace StandardPrelude.gct l2/minigrace
	l2/minigrace $(VERBOSITY) --make --noexec --vtag l2 $<

gUnit.gso $(MGSOURCEFILES:%.grace=%.gso): %.gso: %.grace %.gcn StandardPrelude.gct l2/minigrace
	if ! [ $*.gct -ot $*.grace ] ; then cp $*.gct $*.gct.save ; fi
	if ! [ $*.gcn -ot $*.grace ] ; then cp $*.gcn $*.gcn.save ; fi
	l2/minigrace $(VERBOSITY) --make --dynamic-module --vtag l2 $<
	if [ -e $*.gct.save ] ; then mv $*.gct.save $*.gct ; fi
	if [ -e $*.gcn.save ] ; then mv $*.gcn.save $*.gcn ; fi

$(MGSOURCEFILES:%.grace=js/%.js): js/%.js: %.grace minigrace js/StandardPrelude.gct
	cd js && cp -f ../$(<F) . && ../minigrace $(VERBOSITY) --target js -o $(@F) $(<F)

# Giant hack! Not suitable for use.
minigrace-dynamic: l2/minigrace $(SOURCEFILES)
	l1/minigrace $(VERBOSITY) --make --noexec --import-dynamic -XNoMain -XNativePrelude --vtag l1 StandardPrelude.grace
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn debugger.o
	l2/minigrace $(VERBOSITY) --make --import-dynamic $(VERBOSITY) --module minigrace-dynamic --vtag l2 compiler.grace

minigrace: l2/minigrace $(STUBS:%.grace=%.gct) $(SOURCEFILES) $(C_MODULES_BIN) l2/gracelib.o
	./l2/minigrace --vtag l2 -j $(MINIGRACE_BUILD_SUBPROCESSES) --make --native --module minigrace $(VERBOSITY) compiler.grace

minigrace-environment: minigrace-c-env minigrace-js-env

minigrace-c-env: minigrace StandardPrelude.gct gracelib.o gUnit.gct .git/hooks/commit-msg

minigrace-js-env: minigrace StandardPrelude.gct js/gracelib.js gUnit.gct .git/hooks/commit-msg $(PRELUDESOURCEFILES:%.grace=js/%.js) js/gUnit.js js/ast.js js/errormessages.js dom.gct $(JSSOURCEFILES)

objectdraw.grace:
	curl https://raw.githubusercontent.com/gracelang/objectdraw/master/objectdraw.grace > objectdraw.grace

objectdraw.gcn objectdraw.gso:
	@echo "Can't build $@; no C version of dom module"

repltest: minigrace
	./tests/harness "../minigrace" tests repl

rtobjectdraw.grace: objectdraw.grace tools/make-rt-version
	./tools/make-rt-version objectdraw.grace > rtobjectdraw.grace

rtobjectdraw.gcn rtobjectdraw.gso:
	@echo "Can't build $@; no C version of dom module"

sample-dialects: $(DIALECT_DEPENDENCIES)
	$(MAKE) -C sample/dialects VERBOSITY=$(VERBOSITY)

sample/dialects/%.gso: $(DIALECT_DEPENDENCIES) sample/dialects/%.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

sample/dialects/requireTypes.gct sample/dialects/requireTypes.gso: $(DIALECT_DEPENDENCIES) sample/dialects/requireTypes.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

sample/dialects/minitest.gct sample/dialects/minitest.gso: $(DIALECT_DEPENDENCIES) sample/dialects/minitest.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

sample/dialects/staticTypes.gct sample/dialects/staticTypes.gso: $(DIALECT_DEPENDENCIES) sample/dialects/staticTypes.grace
	$(MAKE) -C sample/dialects  VERBOSITY=$(VERBOSITY) $(@F)

samples: sample-dialects js/sample-dialects 
# omitted for the time-being: js/sample-graphics

selfhost-stats: minigrace
	cat compiler.grace util.grace ast.grace parser.grace genc.grace > tmp.grace
	GRACE_STATS=1 ./minigrace -XIgnoreShadowing < tmp.grace >/dev/null
	rm -f tmp.grace

selftest: minigrace
	rm -rf selftest
	mkdir -p selftest
	for f in $(SOURCEFILES) unicode.gso gracelib.o gracelib.h ; do cp -f ../$$f selftest ; done
	( cd selftest && ../minigrace $(VERBOSITY) --make --native --module minigrace --vtag selftest -j $(MINIGRACE_BUILD_SUBPROCESSES) compiler.grace )
	rm -rf selftest

StandardPrelude.gcn: StandardPrelude.gct
	@echo "gcn file created with gct: $@"

StandardPrelude.gct: StandardPrelude.grace collectionsPrelude.gct l2/minigrace
	l2/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag l2 $<

stubs/collectionsPrelude.gct: collectionsPrelude.grace
	cd stubs && cp -f ../collectionsPrelude.grace . && \
    ../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F)

stubs/StandardPrelude.gct: StandardPrelude.grace stubs/collectionsPrelude.gct
	cd stubs && cp -f ../StandardPrelude.grace . && \
    ../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F)

# The next few rules are Static Pattern Rules.  Each is like an implicit rule
# for making %.gct from stubs/%.grace, but applies only to the targets in $(STUBS:*)

$(DYNAMIC_STUBS:%.grace=%.gso): %.gso: %.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

$(STUBS:%.grace=stubs/%.gct): stubs/%.gct: stubs/%.grace stubs/StandardPrelude.gct $(KG)/minigrace
	cd stubs && rm -f $(@F:%.gct=%{.c,.gcn,}) && \
	../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F) && \
	rm -f $(@F:%.gct=%{.c,.gcn});

# The next 3 rules copy rather than link, so that the target has a new timestamp.

$(STUBS:%.grace=%.gct): %.gct: stubs/%.gct
	rm -f $@ && cp -f $< .

$(STUBS:%.grace=l1/%.gct): l1/%.gct: stubs/%.gct l1/exists
	rm -f $@ && cp -f $< l1

$(STUBS:%.grace=l2/%.gct): l2/%.gct: stubs/%.gct l2/exists
	rm -f $@ && cp -f $< l2

tarWeb: js samples
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
      mkdir -p minigrace-$$VER/sample/dialects ; cp sample/dialects/*.grace sample/dialects/README sample/dialects/Makefile minigrace-$$VER/sample/dialects ;\
      cp -R README doc minigrace-$$VER ;\
      tar cjvf ../minigrace-$$VER.tar.bz2 minigrace-$$VER ;\
      chmod a+r ../minigrace-$$VER.tar.bz2 ;\
      rm -rf minigrace-$$VER

test.js.compile: minigrace
	@echo "compiling tests to JavaScript"
	@cd js/tests; ls *_test.grace | grep -v "fail" | sed 's/^t\([0-9]*\)_.*/& \1/' | while read -r fileName num; do echo "$$num \c"; ../../minigrace --target js $${fileName}; done && echo "tests compiled."

test.js: minigrace-js-env sample/dialects/requireTypes.gso sample/dialects/minitest.gso util.gso ast.gso gUnit.gso
	npm install performance-now
	cd js/tests; cp -f ../../sample/dialects/minitest.gct .
	cd js/tests; cp -f ../../sample/dialects/minitest.grace .
	cd js/tests; cp -f ../../sample/dialects/minitest.gso .
	cd js/tests; cp -f ../../sample/dialects/requireTypes.gct .
	cd js/tests; cp -f ../../sample/dialects/requireTypes.grace .
	cd js/tests; cp -f ../../sample/dialects/requireTypes.gso .
	cd js/tests; cp -f ../../ast.gct .
	cd js/tests; cp -f ../../ast.grace .
	cd js/tests; cp -f ../../ast.gso .
	cd js/tests; cp -f ../../gUnit.gct .
	cd js/tests; cp -f ../../gUnit.grace .
	cd js/tests; cp -f ../../gUnit.gso .
	cd js/tests; cp -f ../../util.gct .
	cd js/tests; cp -f ../../util.grace .
	cd js/tests; cp -f ../../util.gso .
	js/tests/harness ../../minigrace js/tests ""

test: minigrace-c-env sample/dialects/minitest.gso
	./tests/harness "../minigrace" tests ""

togracetest: minigrace
	./tests/harness "../minigrace" tests tograce

# The dependency on unicodedata.h isn't captured by the static pattern rule
# unicode.gcn: unicode.c unicodedata.h gracelib.h
#	gcc -g -std=c99 -fPIC -c -o unicode.gcn unicode.c

uninstall:
	rm -f $(PREFIX)/bin/minigrace
	rm -f $(OBJECT_PATH)/gracelib.o
	rm -f $(INCLUDE_PATH)/gracelib.h
	rm -f $(MODULE_PATH)/*.{gct,js,grace,gcn,gso}

.git/hooks/commit-msg: tools/validate-commit-message
	@ln -s ../../tools/validate-commit-message .git/hooks/commit-msg

%.o: %.c
	gcc -g -std=c99 -c -o $@ $<

## GENERATED WITH: for i in mgcollections errormessages buildinfo util ast; do ./tools/make-depend $i; done | sort -u | grep -v :$ | sed 's/gct/gso/g'
# manually removed io.gso and sys.gso, which are built in!
ast.gso: util.gso
errormessages.gso: util.gso
util.gso: buildinfo.gso mgcollections.gso

l2/ast.gso: l2/util.gso
l2/errormessages.gso: l2/util.gso
l2/util.gso: l2/buildinfo.gso l2/mgcollections.gso

l1/ast.gso: l1/util.gso
l1/errormessages.gso: l1/util.gso
l1/util.gso: l1/buildinfo.gso l1/mgcollections.gso

%.gso: %.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

