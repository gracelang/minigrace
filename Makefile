include Makefile.conf

ARCH:=$(shell uname -s)-$(shell uname -m)
STABLE=d5f6522d5c5e3f5b1f40d77502a66954955d0e5a
all: minigrace $(OTHER_MODULES)

REALSOURCEFILES = compiler.grace util.grace ast.grace lexer.grace parser.grace typechecker.grace genjs.grace subtype.grace genc.grace mgcollections.grace
SOURCEFILES = $(REALSOURCEFILES) buildinfo.grace

ifeq ($(MINIGRACE_BUILD_SUBPROCESSES),)
MINIGRACE_BUILD_SUBPROCESSES = 2
endif

echo:
	echo $(MINIGRACE_BUILD_SUBPROCESSES)

buildinfo.grace: $(REALSOURCEFILES) StandardPrelude.grace gracelib.c
	echo "#pragma DefaultVisibility=public" > buildinfo.grace
	echo "method gitrevision { \"$(shell [ -e .git ] && git rev-parse HEAD || echo unknown )\" }" >> buildinfo.grace
	echo "method gitgeneration { \"$(shell [ -e .git ] && tools/git-calculate-generation || echo unknown )\" }" >> buildinfo.grace

%.o: %.c
	gcc -g -std=c99 -c -o $@ $<

gracelib-basic.o: gracelib.c gracelib.h
	gcc -g -std=c99 -o gracelib-basic.o -c gracelib.c

gracelib.o: gracelib-basic.o debugger.o l1/minigrace StandardPrelude.grace
	l1/minigrace --make --noexec -XNoMain -XNativePrelude StandardPrelude.grace
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn debugger.o

curl.gso: curl.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -lcurl -o curl.gso -shared -fPIC curl.c

mirrors.gso: mirrors.c gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -o mirrors.gso -shared -fPIC mirrors.c

unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc -g -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o unicode.gso unicode.c

unicode.gcn: unicode.c unicodedata.h gracelib.h
	gcc -g -std=c99 -fPIC -c -o unicode.gcn unicode.c

l1/minigrace: known-good/$(ARCH)/$(STABLE)/minigrace $(SOURCEFILES) $(UNICODE_MODULE) gracelib.c gracelib.h
	( mkdir -p l1 ; cd l1 ; for f in $(SOURCEFILES) gracelib.o gracelib.h ; do ln -sf ../$$f . ; done ; ln -sf ../known-good/$(ARCH)/$(STABLE)/$(UNICODE_MODULE) . ; for x in $(OTHER_MODULES) ; do ln -sf ../known-good/$(ARCH)/$(STABLE)/$$x . ; done ; ../known-good/$(ARCH)/$(STABLE)/minigrace --verbose --make --native --module minigrace --gracelib ../known-good/$(ARCH)/$(STABLE) --vtag kg -j $(MINIGRACE_BUILD_SUBPROCESSES) compiler.grace )

l2/minigrace: l1/minigrace $(SOURCEFILES) $(UNICODE_MODULE) gracelib.o gracelib.h $(OTHER_MODULES)
	( mkdir -p l2 ; cd l2 ; for f in $(SOURCEFILES) gracelib.o gracelib.h $(UNICODE_MODULE) $(OTHER_MODULES) ; do ln -sf ../$$f . ; done ; ../l1/minigrace --verbose --make --native --module minigrace --vtag l1 -j $(MINIGRACE_BUILD_SUBPROCESSES) compiler.grace )

js: js/index.html

js/StandardPrelude.js: StandardPrelude.grace minigrace
	./minigrace --verbose --target js -XNativePrelude -o js/StandardPrelude.js StandardPrelude.grace
	echo "Grace_prelude = do_import('StandardPrelude', gracecode_StandardPrelude);" >> js/StandardPrelude.js

js/%.js: %.grace minigrace
	./minigrace --verbose --target js -o $@ $<

js/index.html: js/index.in.html js/ace.in.html $(patsubst %.grace,js/%.js,$(SOURCEFILES)) js/StandardPrelude.js
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@ 

c: minigrace gracelib.c gracelib.h unicode.c unicodedata.h Makefile c/Makefile mirrors.c definitions.h curl.c
	for f in gracelib.c gracelib.h unicode.c unicodedata.h $(SOURCEFILES) StandardPrelude.grace $(UNICODE_MODULE) mirrors.c definitions.h debugger.c curl.c ; do cp $$f c ; done && cd c && ../minigrace --make --noexec -XNoMain -XNativePrelude StandardPrelude.grace && ../minigrace --target c --make --verbose --module minigrace --noexec compiler.grace && sed -i 's!#include "../gracelib.h"!#include "gracelib.h"!' *.c && rm -f *.gcn $(UNICODE_MODULE)

tarball: minigrace
	touch c/Makefile.conf
	make -C c fullclean
	make c
	sed -e 's/DISTRIB=tree/DISTRIB=tarball/' < configure > c/configure
	chmod 755 c/configure
	VER=$$(./minigrace --version|head -n 1|cut -d' ' -f2) ; mkdir minigrace-$$VER ; cp -R c/* minigrace-$$VER ; mkdir minigrace-$$VER/tests ; cp tests/*.grace tests/*.out tests/harness minigrace-$$VER/tests ; cp -R README doc minigrace-$$VER ; tar cjvf ../minigrace-$$VER.tar.bz2 minigrace-$$VER ; rm -rf minigrace-$$VER

selfhost-stats: minigrace
	cat compiler.grace util.grace ast.grace parser.grace genc.grace > tmp.grace
	GRACE_STATS=1 ./minigrace -XIgnoreShadowing < tmp.grace >/dev/null
	rm -f tmp.grace

selftest: minigrace
	rm -rf selftest
	mkdir -p selftest
	for f in $(SOURCEFILES) unicode.gso gracelib.o gracelib.h ; do ln -sf ../$$f selftest ; done
	( cd selftest ; ../minigrace --verbose --make --native --module minigrace --vtag selftest -j $(MINIGRACE_BUILD_SUBPROCESSES) compiler.grace )
	rm -rf selftest

minigrace: l2/minigrace $(SOURCEFILES) $(UNICODE_MODULE) gracelib.o
	./l2/minigrace --vtag l2 -j $(MINIGRACE_BUILD_SUBPROCESSES) --make --native --module minigrace --verbose compiler.grace

# Giant hack! Not suitable for use.
minigrace-dynamic: l2/minigrace $(SOURCEFILES)
	l1/minigrace --make --noexec --import-dynamic -XNoMain -XNativePrelude StandardPrelude.grace
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn
	l2/minigrace --make --import-dynamic --verbose --module minigrace-dynamic compiler.grace

gencheck:
	( X=$$(tools/git-calculate-generation) ; mv .git-generation-cache .git-generation-cache.$$$$ ; Y=$$(tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf .git-generation-cache ; mv .git-generation-cache.$$$$ .git-generation-cache )
test: minigrace
	./tests/harness "../minigrace" tests ""
fulltest: gencheck clean selftest test
togracetest: minigrace
	./tests/harness "../minigrace" tests tograce
backendtests: test

clean:
	rm -f gracelib.bc gracelib.o
	rm -f unicode.gco unicode.gso unicode.gcn
	rm -f mirrors.gso
	rm -f debugger.o
	rm -rf l1 l2 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f $(SOURCEFILES:.grace=.gco)
	rm -f $(SOURCEFILES:.grace=.gcn) minigrace.gcn
	rm -f $(SOURCEFILES:.grace=.gso) minigrace.gso
	rm -f $(SOURCEFILES:.grace=.gct) minigrace.gct
	rm -f minigrace-dynamic
	rm -f $(SOURCEFILES:.grace=)
	( cd js ; for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js ; for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	( cd c ; rm -f *.gcn *.gct *.c *.h *.grace minigrace unicode.gso gracelib.o )
	rm -f minigrace.gco minigrace

known-good/%:
	rm -rf l1 l2 # We must regenerate files so #include updated
	cd known-good && $(MAKE) $*
	rm -f known-good/*out

install: minigrace
	install -d $(PREFIX)/bin $(PREFIX)/lib/minigrace $(PREFIX)/include
	install -m 755 minigrace $(PREFIX)/bin/minigrace
	install -m 755 unicode.gso $(OTHER_MODULES) gracelib.o $(PREFIX)/lib/minigrace/
	install gracelib.h $(PREFIX)/include/gracelib.h

Makefile.conf: configure
	./configure

.PHONY: all clean selfhost-stats test js c selftest install
