ARCH:=$(shell uname -s)-$(shell uname -m)
STABLE=c8f22842e73c1a409d06a632acd038e86792994e
all: minigrace

REALSOURCEFILES = compiler.grace util.grace ast.grace genllvm29.grace lexer.grace parser.grace genjs.grace subtype.grace genc.grace
SOURCEFILES = $(REALSOURCEFILES) buildinfo.grace

buildinfo.grace: $(REALSOURCEFILES) gracelib.c
	echo "method gitrevision { \"$(shell [ -e .git ] && git rev-parse HEAD || echo unknown )\" }" > buildinfo.grace
	echo "method gitgeneration { \"$(shell [ -e .git ] && tools/git-calculate-generation || echo unknown )\" }" >> buildinfo.grace

gracelib.bc: gracelib.c gracelib.h
	clang -emit-llvm -c -o gracelib.bc gracelib.c

gracelib.o: gracelib.c gracelib.h
	gcc -o gracelib.o -c gracelib.c

unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc -fPIC -shared -o unicode.gso unicode.c

l1/minigrace: known-good/$(ARCH)/minigrace-$(STABLE) $(SOURCEFILES) unicode.gso gracelib.c gracelib.h
	( mkdir -p l1 ; cd l1 ; for f in $(SOURCEFILES) unicode.gso gracelib.o gracelib.h ; do ln -sf ../$$f . ; done ; ../known-good/$(ARCH)/minigrace-$(STABLE) --verbose --make --native --module minigrace --gracelib ../known-good/$(ARCH)/gracelib-$(STABLE).o compiler.grace )

l2/minigrace: l1/minigrace $(SOURCEFILES) unicode.gso gracelib.o gracelib.h
	( mkdir -p l2 ; cd l2 ; for f in $(SOURCEFILES) unicode.gso gracelib.o gracelib.h ; do ln -sf ../$$f . ; done ; ../l1/minigrace --verbose --make --native --module minigrace --vtag l1 compiler.grace )

js: js/index.html

js/%.js: %.grace minigrace
	./minigrace --verbose --target js -o $@ $<

js/index.html: js/index.in.html $(patsubst %.grace,js/%.js,$(SOURCEFILES))
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@ 

c: minigrace gracelib.c gracelib.h unicode.c unicodedata.h Makefile c/Makefile
	for f in gracelib.c gracelib.h unicode.c unicodedata.h $(SOURCEFILES) unicode.gso ; do cp $$f c ; done && cd c && ../minigrace --target c --gracelib gracelib.o --make --verbose --module minigrace --noexec compiler.grace && rm -f *.gcn unicode.gso

tarball: minigrace
	make -C c fullclean
	make c
	VER=$$(./minigrace --version|head -n 1|cut -d' ' -f2) ; mkdir minigrace-$$VER ; cp c/* minigrace-$$VER ; tar cjvf ../minigrace-$$VER.tar.bz2 minigrace-$$VER ; rm -rf minigrace-$$VER

selfhost-stats: minigrace
	cat compiler.grace util.grace ast.grace parser.grace genllvm29.grace > tmp.grace
	GRACE_STATS=1 ./minigrace -XIgnoreShadowing < tmp.grace >/dev/null
	rm -f tmp.grace

selfhost-rec: minigrace
	@( cd l2 ; llvm-dis -o l2.ll minigrace.bc )
	@llvm-dis -o l3.ll minigrace.bc
	@diff -q l2/l2.ll l3.ll
	@rm -f l2/l2.ll l3.ll

selftest: minigrace
	rm -rf selftest
	mkdir -p selftest
	for f in $(SOURCEFILES) unicode.gso gracelib.o gracelib.h ; do ln -sf ../$$f selftest ; done
	( cd selftest ; ../minigrace --verbose --make --native --module minigrace --vtag selftest compiler.grace )
	rm -rf selftest

minigrace: l2/minigrace $(SOURCEFILES) unicode.gso gracelib.bc gracelib.o
	./l2/minigrace --vtag l2 --make --native --module minigrace --verbose compiler.grace

unicode.gco: unicode.c unicodedata.h
	clang -emit-llvm -c -o unicode.gco -DNO_FLAGS= unicode.c

gencheck:
	( X=$$(tools/git-calculate-generation) ; mv .git-generation-cache .git-generation-cache.$$$$ ; Y=$$(tools/git-calculate-generation) ; [ "$$X" = "$$Y" ] || exit 1 ; rm -rf .git-generation-cache ; mv .git-generation-cache.$$$$ .git-generation-cache )
test: minigrace
	./tests/harness "$(shell pwd)/minigrace" tests
fulltest: gencheck clean selfhost-rec selftest test
clean:
	rm -f gracelib.bc gracelib.o
	rm -f unicode.gco unicode.gso
	rm -rf l1 l2 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.ll)
	rm -f $(SOURCEFILES:.grace=.s)
	rm -f $(SOURCEFILES:.grace=.c) minigrace.c
	rm -f $(SOURCEFILES:.grace=.gco)
	rm -f $(SOURCEFILES:.grace=.gcn) minigrace.gcn
	rm -f $(SOURCEFILES:.grace=.bc) minigrace.bc
	rm -f $(SOURCEFILES:.grace=)
	( cd js ; for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js ; for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	( cd c ; rm -f *.gcn *.c *.h *.grace minigrace unicode.gso gracelib.o )
	rm -f minigrace.gco minigrace.ll minigrace.s minigrace

semiclean:
	rm -f lexer.gco parser.gco util.gco ast.gco genllvm29.gco

known-good/%:
	cd known-good && $(MAKE) $*
	rm -f known-good/*out

.PHONY: all clean selfhost-stats selfhost-rec test js c
