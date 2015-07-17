include Makefile.conf

.PHONY: all c clean dialects echo fullclean install js just-minigrace minigrace-environment minigrace-c-env minigrace-js-env pull-web-editor pull-objectdraw selfhost-stats selftest samples sample-% test test.js test.js.compile uninstall

ARCH := $(shell uname -s)-$(shell uname -m)
STUBS := $(filter-out %Prelude.grace,$(STUBS))
C_MODULES_GSO := $(UNICODE_MODULE:%.gso=dynamic-modules/%.gso) $(OTHER_MODULES:%.gso=dynamic-modules/%.gso)
C_MODULES_GCN := $(OTHER_MODULES:%.gso=%.gcn)
INTERNAL_STUBS := io.grace sys.grace imports.grace   # for which there are no c files
JS_STUBS := dom.grace timer.grace
DYNAMIC_STUBS := $(filter-out $(INTERNAL_STUBS) $(JS_STUBS), $(STUBS))
STATIC_STUBS := $(filter-out $(DYNAMIC_STUBS) $(INTERNAL_STUBS) $(JS_STUBS), $(STUBS))  # currently empty
EXTERNAL_STUBS := $(filter-out $(INTERNAL_STUBS) $(JS_STUBS), $(STUBS))

C_MODULES_BIN = $(C_MODULES_GCN) $(C_MODULES_GSO)
CFILES = ast.c buildinfo.c genc.c genjs.c lexer.c parser.c util.c mgcollections.c xmodule.c identifierresolution.c genjson.c errormessages.c
# The next 2 rules are here for their side effects: updating
#    buildinfo.grace if necessary, and creating the l1 directory
CHECK_BUILDINFO := $(shell tools/check-buildinfo $(PREFIX) $(INCLUDE_PATH) $(MODULE_PATH) $(OBJECT_PATH))
CREATE_L1 := $(shell if [ ! -e l1 ] ; then mkdir -p l1 ; fi)
CREATE_DM := $(shell if [ ! -e dynamic-modules ] ; then mkdir -p dynamic-modules ; fi)

DIALECT_DEPENDENCIES = minigrace dynamic-modules/mirrors.gct dynamic-modules/mirrors.gso dynamic-modules/errormessages.gct dynamic-modules/errormessages.gso dynamic-modules/ast.gct dynamic-modules/ast.gso dynamic-modules/util.gct dynamic-modules/util.gso dynamic-modules/mgcollections.gct dynamic-modules/mgcollections.gso dynamic-modules/gUnit.gct dynamic-modules/gUnit.gso dynamic-modules/math.gso
EXP_WEB_DIRECTORY = public_html/minigrace/exp/
SAMPLE_DIALECTS = sample/dialects/requireTypes.grace sample/dialects/staticTypes.grace sample/dialects/dialect.grace sample/dialects/minitest.grace
NON_SAMPLE_DIALECTS = rtobjectdraw.grace objectdraw.grace animation.grace ast.grace util.grace
GRACE_DIALECTS = $(SAMPLE_DIALECTS) $(NON_SAMPLE_DIALECTS)
GRACE_DIALECTS_GSO = $(patsubst %.grace, dynamic-modules/%.gso, $(filter-out $(OBJECTDRAW_BITS), $(NON_SAMPLE_DIALECTS)))
GRACE_MODULES = StandardPrelude.grace collectionsPrelude.grace ast.grace mgcollections.grace
GRAPHIX = createJsGraphicsWrapper.grace graphix.grace
MGSOURCEFILES = buildinfo.grace $(REALSOURCEFILES)
JSSOURCEFILES = $(SOURCEFILES:%.grace=js/%.js)
KG=known-good/$(ARCH)/$(STABLE)
OBJECTDRAW_BITS = objectdraw.grace rtobjectdraw.grace animation.grace
PRELUDESOURCEFILES = collectionsPrelude.grace StandardPrelude.grace
REALSOURCEFILES = compiler.grace errormessages.grace util.grace ast.grace lexer.grace parser.grace genjs.grace genc.grace mgcollections.grace xmodule.grace identifierresolution.grace genjson.grace
SOURCEFILES = $(MGSOURCEFILES) $(PRELUDESOURCEFILES)
STABLE=6a7a5c84fb667753eeceb7f0a515ad8f8f730657
STUB_GCTS = $(STUBS:%.grace=stubs/%.gct)
VERBOSITY = --verbose
WEB_DIRECTORY = public_html/minigrace/js/
WEBFILES = js/index.html js/global.css js/tests js/minigrace.js js/samples.js  js/tabs.js js/gracelib.js js/dom.js js/gtk.js js/debugger.js js/timer.js js/ace  js/sample js/debugger.html  js/*.png js/unicodedata.js js/objectdraw.js js/animation.js js/importStandardPrelude.js js/sample/dialects/requireTypes.js js/sample/dialects/staticTypes.js js/sample/dialects/dialect.js js/rtobjectdraw.js js/sample/dialects/minitest.js $(GRACE_MODULES:%.grace=js/%.js) $(LIBRARY_MODULES:%.grace=js/%.js) $(filter-out js/util.js,$(JSSOURCEFILES))

all: minigrace-environment $(C_MODULES_BIN) $(GRACE_MODULES:.grace=.gct) $(GRACE_MODULES:.grace=.gcn) sample-dialects $(GRACE_DIALECTS)

# These are necessary for l1 until the $(KG) compiler learns about dependencies
# The dependencises for l2 and . allow parallel compilation of the mg sub-modules

include Makefile.mgDependencies

# The rules that follow are in alphabetical order.  Keep them that way!

ace-code: js/ace/ace.js

alltests: test test.js

blackWeb:
	$(MAKE) WEB_SERVER=black@cs.pdx.edu oldWeb

bruceWeb:
	$(MAKE) WEB_SERVER=kim@project2.cs.pomona.edu EXP_WEB_DIRECTORY=www/minigrace/ expWeb

c: minigrace gracelib.c gracelib.h unicode.c unicodedata.h unicode.gct c/Makefile mirrors.c mirrors.gct definitions.h curl.c dynamic-modules/math.gso dynamic-modules/unicode.gso dynamic-modules/mirrors.gso modules/math.gct modules/math.gcn
	for f in gracelib.c gracelib.h unicode.{c,gct} unicodedata.h $(SOURCEFILES) collectionsPrelude.grace StandardPrelude.grace mirrors.{c,gct} math.{gct,gcn} definitions.h debugger.c curl.c dynamic-modules/*.gso modules/*.gct modules/*.gcn ;\
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
	rm -fr unicode.gco unicode.gcn unicode.gso.dSYM
	rm -fr dynamic-modules/*.gso dynamic-modules/*.gso.dSYM
	rm -f debugger.o
	rm -f StandardPrelude.{c,gcn,gct} js/StandardPrelude.js collectionsPrelude.{c,gcn,gct} js/collectionsPrelude.js
	rm -rf l1 l2 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f $(SOURCEFILES:.grace=.gco)
	rm -f $(SOURCEFILES:.grace=.gcn) minigrace.gcn
	rm -f $(SOURCEFILES:.grace=.gct) minigrace.gct
	rm -f $(STUB_GCTS)
	rm -rf *.gso *.gso.dSYM */*.gso.dSYM */*/*.gso.dSYM
	rm -f stdin_minigrace.c
	rm -f minigrace-dynamic
	rm -f $(SOURCEFILES:.grace=)
	rm -f objectdraw.* rtobjectdraw.*
	( cd known-good && $(MAKE) clean )
	( cd js && for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js && for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	rm -f js/minigrace.js
	cd c && rm -f *.gcn *.gct *.c *.h *.grace minigrace unicode.gso gracelib.o
	rm -f minigrace *.js
	rm -fr grace-web-editor
	rm -f tests/test-*.log js/tests/test-*.log
	cd stubs && rm -f *.gct *gcn *.gso *js *.c
	cd sample/dialects && $(MAKE)  clean
	cd js/sample/graphics && $(MAKE) clean
	cd js/sample/dialects && $(MAKE) clean

collectionsPrelude.gcn:
	@echo "gcn file created with gct: $@"

collectionsPrelude.gct: collectionsPrelude.grace l1/minigrace
	l1/minigrace $(VERBOSITY) --make --noexec -XNoMain $<

dynamic-modules/curl.gso: curl.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC curl.c -lcurl

dialects: js js/sample/dialects/requireTypes.js dynamic-modules/mgcollections.gso js/sample/dialects/requireTypes.gso js/sample/dialects/staticTypes.js js/sample/dialects/staticTypes.gct js/sample/dialects/staticTypes.gso js/sample/dialects/minitest.js js/gUnit.js dynamic-modules/gUnit.gso

echo:
	@echo MAKEFLAGS = $(MAKEFLAGS)
	@echo SOURCEFILES = $(SOURCEFILES) "\n"
	@echo WEBFILES = $(WEBFILES) "\n"
	@echo KG = $(KG):
	@echo STUBS = $(STUBS)
	@echo GRACE_MODULES = $(GRACE_MODULES)
	@echo LIBRARY_MODULES = $(LIBRARY_MODULES)
	@echo DYNAMIC_STUBS = $(DYNAMIC_STUBS)
	@echo STATIC_STUBS = $(STATIC_STUBS)
	@echo INTERNAL_STUBS = $(INTERNAL_STUBS)
	@echo EXTERNAL_STUBS = $(EXTERNAL_STUBS)
	@echo C_MODULES_GCN = $(C_MODULES_GCN)
	@echo C_MODULES_GSO = $(C_MODULES_GSO)
	@echo C_MODULES_BIN = $(C_MODULES_BIN)
	@echo GRACE_DIALECTS_GSO = $(GRACE_DIALECTS_GSO)

expWeb: js grace-web-editor/scripts/setup.js $(filter-out js/tabs.js,$(filter %.js,$(WEBFILES))) $(SAMPLE_DIALECTS:%.grace=js/%.js) $(OBJECTDRAW_BITS:%.grace=js/%.js) $(GRAPHIX:%.grace=js/%.js)
	@[ -n "$(WEB_SERVER)" ] || { echo "Please set the WEB_SERVER variable to something like user@hostname" && false; }
	[ -d grace-web-editor/js ] || mkdir -m 755 grace-web-editor/js
	ln -f $(filter-out js/samples.js js/tabs.js,$(filter %.js,$(WEBFILES))) grace-web-editor/js
	ln -f $(SAMPLE_DIALECTS:%.grace=js/%.js) $(GRAPHIX:%.grace=js/%.js) grace-web-editor/js
	rsync -az --delete grace-web-editor/ $(WEB_SERVER):$(EXP_WEB_DIRECTORY)

fullclean: clean
	rm -f Makefile.conf
	rm -rf $$(ls -d known-good/*/* | grep -v $(STABLE))

fulltest: gencheck clean selftest test

gencheck:
	X=$$(tools/git-calculate-generation) ; mv .git-generation-cache .git-generation-cache.$$$$ ; Y=$$(tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf .git-generation-cache ; mv .git-generation-cache.$$$$ .git-generation-cache

grace-web-editor/index.html: pull-web-editor

grace-web-editor/scripts/setup.js: pull-web-editor $(filter-out %/setup.js,$(wildcard grace-web-editor/scripts/*.js)) $(wildcard grace-web-editor/scripts/*/*.js)
	cd grace-web-editor; npm install

graceWeb: pull-objectdraw js samples ace-code
	rsync -a -l -z --delete $(WEBFILES) grace@cs.pdx.edu:public_html/minigrace/js
	rsync -a -l -z --delete sample grace@cs.pdx.edu:public_html/minigrace

gracelib-basic.o: gracelib.c gracelib.h
	gcc -g -std=c99 -o gracelib-basic.o -c gracelib.c

gracelib.o: gracelib-basic.o debugger.o StandardPrelude.gcn collectionsPrelude.gcn
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn collectionsPrelude.gcn debugger.o

dynamic-modules/gUnit.gso: dynamic-modules/mirrors.gso dynamic-modules/mirrors.gct modules/math.gct

install: minigrace $(GRACE_MODULES:%.grace=js/%.js) $(GRACE_DIALECTS_GSO) $(GRACE_DIALECTS:%.grace=js/%.js) $(STUB_GCTS) js/grace
	install -d $(PREFIX)/bin $(MODULE_PATH) $(OBJECT_PATH) $(INCLUDE_PATH)
	install -m 755 minigrace $(PREFIX)/bin/minigrace
	install -m 755 js/grace $(PREFIX)/bin/grace
	install -m 755 $(C_MODULES_BIN) $(STUB_GCTS) js/gracelib.js js/unicodedata.js $(MODULE_PATH)
	install -m 755 gracelib.o $(OBJECT_PATH)
	install -m 644 gracelib.h $(INCLUDE_PATH)
	install -m 644 mgcollections.grace $(MODULE_PATH)
	install -m 644 $(GRACE_MODULES) $(GRACE_MODULES:%.grace=js/%.js) $(GRACE_MODULES:%.grace=%.gct) $(MODULE_PATH)
	install -m 644 $(LIBRARY_MODULES:%.grace=modules/%.grace) $(LIBRARY_MODULES:%.grace=modules/%.gct) $(LIBRARY_MODULES:%.grace=modules/%.gcn) $(LIBRARY_MODULES:%.grace=js/%.js) $(MODULE_PATH)
	install -m 644 $(GRACE_DIALECTS) $(GRACE_DIALECTS_GSO:dynamic-modules/%.gso=js/%.js) $(GRACE_DIALECTS_GSO:dynamic-modules/%.gso=%.gct) $(GRACE_DIALECTS_GSO) $(GRACE_DIALECTS_GSO:dynamic-modules/%.gso=%.gcn) $(MODULE_PATH)
	install -m 644 dynamic-modules/*.gso $(MODULE_PATH)

js/ace/ace.js:
	curl https://raw.githubusercontent.com/ajaxorg/ace-builds/master/src-min/ace.js > js/ace/ace.js

js/collectionsPrelude.js: js/collectionsPrelude.gct
	@echo "$@ was built with the gct"

js/collectionsPrelude.gct: collectionsPrelude.grace minigrace
	./minigrace $(VERBOSITY) --make --target js --dir js $(<F)

js/dom.gct: stubs/dom.gct
	cd js; ln -fs ../stubs/dom.gct .

js/index.html: js/index.in.html js/ace js/minigrace.js js/tests
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@

js/grace: js/grace.in
	sed -e "s|@MODULE_PATH@|$(MODULE_PATH)|" $< > js/grace

js/minigrace.js: js/minigrace.in.js buildinfo.grace
	@echo Generating minigrace.js from minigrace.in.js...
	@cat js/minigrace.in.js > js/minigrace.js
	@echo "MiniGrace.version = '$$(tools/calculate-version HEAD)';" >> js/minigrace.js
	@echo "MiniGrace.revision = '$$(git rev-parse HEAD|cut -b1-7)';" >> js/minigrace.js

$(OBJECTDRAW_BITS:%.grace=js/%.js): js/%.js: %.grace minigrace
	GRACE_MODULE_PATH="dynamic-modules/:modules/:js/" ./minigrace --target js --dir js --make $(VERBOSITY) $<

js/sample-dialects js/sample-graphics: js/sample-%: js
	$(MAKE) -C js/sample/$* VERBOSITY=$(VERBOSITY)

js/sample/dialects/%.js js/sample/dialects/%.gct js/sample/dialects/%.gso: js/sample/dialects/%.grace minigrace
	@echo "MAKE C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)"
	$(MAKE) -C js/sample/dialects VERBOSITY=$(VERBOSITY) $(@F)

js/StandardPrelude.js: js/StandardPrelude.gct
	@echo "$@ was built with the gct"

js/StandardPrelude.gct: StandardPrelude.grace js/collectionsPrelude.gct minigrace
	./minigrace --target js --dir js --make $(VERBOSITY) $<

js/timer.gct: stubs/timer.gct
	cd js; ln -fs ../stubs/timer.gct .

js: minigrace js/index.html js/dom.gct $(GRACE_MODULES:%.grace=js/%.js) $(LIBRARY_MODULES:%.grace=js/%.js) $(WEBFILES) $(JSSOURCEFILES)
	ln -f minigrace js/minigrace

just-minigrace:
	l1/minigrace --make --native --module minigrace $(VERBOSITY) compiler.grace

known-good/%:
	@echo "making $@"
	cd known-good && $(MAKE) $*
	rm -f known-good/*out
    
l1/%.grace: %.grace
	cd l1 && ln -sf ../$(@F) .

l1/%.gct: l1/%.grace l1/StandardPrelude.gct $(KG)/minigrace
	cd l1;  GRACE_MODULE_PATH=../modules/:../dynamic-modules/: ../$(KG)/minigrace  $(VERBOSITY) --make --noexec -XNoMain --vtag l1 $(<F)

l1/collectionsPrelude.gct: stubs/collectionsPrelude.gct
	cd l1 && ln ../$< .
    
l1/collectionsPrelude.gcn: stubs/collectionsPrelude.gct
	cd l1 && ln -sf ../stubs/$(@F)

l1/gracelib.h:
	cd l1 && ln -sf ../gracelib.h .

l1/gracelib.o: gracelib-basic.o debugger.o l1/StandardPrelude.gcn l1/collectionsPrelude.gcn
	ld -o l1/gracelib.o -r gracelib-basic.o l1/StandardPrelude.gcn l1/collectionsPrelude.gcn debugger.o

l1/minigrace: $(KG)/minigrace $(STUBS:%.grace=l1/%.gct) $(DYNAMIC_STUBS:%.grace=l1/%.gso) $(PRELUDESOURCEFILES:%.grace=l1/%.gct) $(MGSOURCEFILES) gracelib.c gracelib.h l1/gracelib.o l1/gracelib.h
	cd l1 && ln -sf ../compiler.grace . && \
    GRACE_MODULE_PATH=../modules/:../dynamic-modules/: ../$(KG)/minigrace  $(VERBOSITY) --make --native --module minigrace --gracelib l1/ --vtag l1 compiler.grace

l1/StandardPrelude.gct: stubs/StandardPrelude.gct
	cd l1 && ln -sf ../$<
    
l1/StandardPrelude.gcn: stubs/StandardPrelude.gct
	cd l1 && ln -sf ../stubs/$(@F)
    
l1/mirrors.gso: mirrors.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

#l1/unicode.gcn: unicode.c unicodedata.h gracelib.h
#	gcc -g -std=c99 -c -o $@ -fPIC $<

l1/unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

l1/unixFilePath.gct: modules/unixFilePath.grace $(KG)/minigrace
	cd l1 && ln -sf ../modules/unixFilePath.grace . && \
    ../$(KG)/minigrace $(VERBOSITY) --make --noexec -XNoMain --vtag l1 unixFilePath.grace

$(C_MODULES_GCN:%=l1/%): l1/%.gcn: %.gcn
	cd l1 && ln -sf ../$< .
    
$(C_MODULES_GSO:%.gso=%.gct): dynamic-modules/%.gct: stubs/%.gct
	cd dynamic-modules && ln -sf ../$< .

$(LIBRARY_MODULES:%.grace=modules/%.gct): modules/%.gct: modules/%.grace l1/minigrace
	GRACE_MODULE_PATH="dynamic-modules/:modules/" l1/minigrace $(VERBOSITY) --make --noexec -XNoMain $<

$(LIBRARY_MODULES:%.grace=modules/%.gcn): modules/%.gcn: modules/%.gct l1/minigrace
	@echo $@ should have been made with $(@:%.gcn=%.gct)

$(LIBRARY_MODULES:%.grace=dynamic-modules/%.gct): dynamic-modules/%.gct: modules/%.grace l1/minigrace
	GRACE_MODULE_PATH="dynamic-modules/:modules/" l1/minigrace $(VERBOSITY) --make --dynamic-module --dir dynamic-modules $<

$(LIBRARY_MODULES:%.grace=dynamic-modules/%.gso): dynamic-modules/%.gso: dynamic-modules/%.gct l1/minigrace
	@echo $@ should have been made with $(@:%.gso=%.gct)

$(LIBRARY_MODULES:%.grace=js/%.gct): js/%.gct: modules/%.grace l1/minigrace
	GRACE_MODULE_PATH="dynamic-modules/:modules/" l1/minigrace $(VERBOSITY) --make --target js --dir js $<

$(LIBRARY_MODULES:%.grace=js/%.js): js/%.js: js/%.gct l1/minigrace
	@echo $@ should have been made with $(@:%.js=%.gct)

Makefile.conf: configure stubs modules
	./configure
    
$(MGSOURCEFILES:%.grace=l1/%.gct): l1/%.gct: l1/%.grace l1/StandardPrelude.gct $(KG)/minigrace
	cd l1 &&  GRACE_MODULE_PATH=../modules/:../dynamic-modules/: ../$(KG)/minigrace  $(VERBOSITY) --make --noexec --vtag l1 $(<F)

$(MGSOURCEFILES:%.grace=%.gcn): %.gcn: %.gct
	@echo "gcn file created with gct: $@"

$(MGSOURCEFILES:%.grace=%.gct): %.gct: %.grace StandardPrelude.gct l1/minigrace
	l1/minigrace $(VERBOSITY) --make --noexec $<

$(MGSOURCEFILES:%.grace=dynamic-modules/%.gct): dynamic-modules/%.gct: %.grace StandardPrelude.gct l1/minigrace
	@echo $@ should have been made with $*.gct

$(MGSOURCEFILES:%.grace=dynamic-modules/%.gso): dynamic-modules/%.gso: %.grace StandardPrelude.gct l1/minigrace
	l1/minigrace $(VERBOSITY) --make --dynamic-module --dir dynamic-modules $<

$(MGSOURCEFILES:%.grace=js/%.js): js/%.js: %.grace minigrace js/StandardPrelude.gct
	GRACE_MODULE_PATH="modules/:dynamic-modules:" ./minigrace $(VERBOSITY) --make --target js --dir js $<

# Giant hack! Not suitable for use.
minigrace-dynamic: l1/minigrace $(SOURCEFILES)
	l1/minigrace $(VERBOSITY) --make --noexec --import-dynamic -XNoMain -XNativePrelude StandardPrelude.grace
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn debugger.o
	l1/minigrace $(VERBOSITY) --make --import-dynamic $(VERBOSITY) --module minigrace-dynamic compiler.grace

minigrace: l1/minigrace $(STUBS:%.grace=%.gct) $(SOURCEFILES) $(C_MODULES_BIN) l1/gracelib.o
	l1/minigrace --make --native --module minigrace $(VERBOSITY) compiler.grace

minigrace-environment: minigrace-c-env minigrace-js-env

minigrace-c-env: minigrace StandardPrelude.gct gracelib.o modules/gUnit.gct modules/gUnit.gcn dynamic-modules/mirrors.gso dynamic-modules/mirrors.gct dynamic-modules/unicode.gso dynamic-modules/gUnit.gct dynamic-modules/gUnit.gso dynamic-modules/unicode.gct .git/hooks/commit-msg

minigrace-js-env: minigrace js/grace StandardPrelude.gct js/gracelib.js .git/hooks/commit-msg $(PRELUDESOURCEFILES:%.grace=js/%.js) js/gUnit.gct js/gUnit.js js/ast.js js/errormessages.js dom.gct $(JSSOURCEFILES)

$(OBJECTDRAW_BITS:%.grace=objectdraw/%.grace): objectdraw/%.grace: pull-objectdraw

$(filter-out rtobjectdraw.grace, $(OBJECTDRAW_BITS)): %.grace: objectdraw/%.grace
	ln -f $< .

objectdraw.gcn dynamic-modules/objectdraw.gso:
	@echo "Can't build $@; no C version of dom module"

oldWeb:
	rsync -a -l -z --delete $(WEBFILES) $(WEB_SERVER):$(WEB_DIRECTORY)
	rsync -a -l -z --delete sample $(WEB_SERVER):$(WEB_DIRECTORY)

pull-web-editor:
	if [ -e grace-web-editor ] ; \
    then cd grace-web-editor; git pull ; \
    else git clone --branch pdx https://github.com/gracelang/grace-web-editor/ ; fi

pull-objectdraw:
	if [ -e objectdraw ] ; \
    then cd objectdraw; git pull ; \
    else git clone https://github.com/gracelang/objectdraw/ ; fi

rtobjectdraw.grace: objectdraw.grace pull-objectdraw tools/make-rt-version
	if [ objectdraw.grace -nt rtobjectdraw.grace ] ; \
    then ./tools/make-rt-version objectdraw.grace > rtobjectdraw.grace ; fi

rtobjectdraw.gcn dynamic-modules/rtobjectdraw.gso:
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
	for f in $(SOURCEFILES) dynamic-modules/unicode.gso gracelib.o gracelib.h ; do cp -fp ../$$f selftest ; done
	( cd selftest && ../minigrace $(VERBOSITY) --make --native --module minigrace --dir selftest compiler.grace )
	rm -rf selftest

StandardPrelude.gcn: StandardPrelude.gct
	@echo "gcn file created with gct: $@"

StandardPrelude.gct: StandardPrelude.grace collectionsPrelude.gct l1/minigrace
	l1/minigrace $(VERBOSITY) --make --noexec -XNoMain $<

stubs/collectionsPrelude.gct: collectionsPrelude.grace
	cd stubs && ln -sf ../collectionsPrelude.grace . && \
    ../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F)

stubs/StandardPrelude.gct: StandardPrelude.grace stubs/collectionsPrelude.gct
	cd stubs && ln -sf ../StandardPrelude.grace . && \
    ../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F)

# The next few rules are Static Pattern Rules.  Each is like an implicit rule
# for making %.gct from stubs/%.grace, but applies only to the targets in $(STUBS:*)

$(DYNAMIC_STUBS:%.grace=dynamic-modules/%.gso): dynamic-modules/%.gso: %.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

$(STUBS:%.grace=stubs/%.gct): stubs/%.gct: stubs/%.grace stubs/StandardPrelude.gct $(KG)/minigrace
	cd stubs && rm -f $(@F:%.gct=%{.c,.gcn,}) && \
	../$(KG)/minigrace $(VERBOSITY) --make --noexec --vtag kg $(<F) && \
	rm -f $(@F:%.gct=%{.c,.gcn});

$(STUBS:%.grace=%.gct): %.gct: stubs/%.gct
	ln -sf $< .

$(STUBS:%.grace=l1/%.gct): l1/%.gct: stubs/%.gct
	cd l1 && ln -sf ../$< .

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
	@cd js/tests; ls *_test.grace | grep -v "fail" | sed 's/^t\([0-9]*\)_.*/& \1/'\
    | while read -r fileName num; \
    do echo "$$num \c"; ../../minigrace --target js $${fileName}; \
    done && echo "tests compiled."

test.js: minigrace-js-env sample/dialects/requireTypes.gso sample/dialects/minitest.gso dynamic-modules/util.gso dynamic-modules/ast.gso dynamic-modules/gUnit.gso dynamic-modules/math.gso dynamic-modules/gUnit.gso
	if [ ! -e node_modules/performance-now ] ; then npm install performance-now ; fi
	js/tests/harness ../../minigrace js/tests "" $(TESTS)

test: minigrace-c-env sample/dialects/minitest.gso
	./tests/harness "../minigrace" tests "" $(TESTS)

togracetest: minigrace
	./tests/harness "../minigrace" tests tograce

# The dependency on unicodedata.h isn't captured by the pattern rule
unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<

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

l1/ast.gso: l1/util.gso
l1/errormessages.gso: l1/util.gso
l1/util.gso: l1/mgcollections.gso

dynamic-modules/%.gso: %.c gracelib.h
	gcc -g -I. -std=c99 $(UNICODE_LDFLAGS) -o $@ -shared -fPIC $<
