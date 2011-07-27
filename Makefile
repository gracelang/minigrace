ARCH:=$(shell uname -s)-$(shell uname -m)
STABLE=933033535c260ab02a5260be08b6e1b104788596
all: minigrace

REALSOURCEFILES = compiler.grace util.grace ast.grace genllvm.grace lexer.grace parser.grace genjs.grace
SOURCEFILES = $(REALSOURCEFILES) buildinfo.grace

buildinfo.grace: $(REALSOURCEFILES) gracelib.c
	echo "method gitrevision() { \"$(shell [ -e .git ] && git rev-parse HEAD || echo unknown )\" }" > buildinfo.grace
	echo "method gitgeneration() { \"$(shell [ -e .git ] && tools/git-calculate-generation || echo unknown )\" }" >> buildinfo.grace

gracelib.o: gracelib.c
	clang -emit-llvm -c gracelib.c

unicode.gso: unicode.c unicodedata.h
	gcc -fPIC -shared -o unicode.gso unicode.c

l1/minigrace: known-good/$(ARCH)/minigrace-$(STABLE) $(SOURCEFILES) unicode.gso gracelib.o
	( mkdir -p l1 ; cd l1 ; for f in $(SOURCEFILES) unicode.gso gracelib.o ; do ln -sf ../$$f . ; done ; ../known-good/$(ARCH)/minigrace-$(STABLE) --verbose --make --native --module minigrace --gracelib ../known-good/$(ARCH)/gracelib-$(STABLE).o compiler.grace )

l2/minigrace: l1/minigrace $(SOURCEFILES) unicode.gso gracelib.o
	( mkdir -p l2 ; cd l2 ; for f in $(SOURCEFILES) unicode.gso gracelib.o ; do ln -sf ../$$f . ; done ; ../l1/minigrace --verbose --make --native --module minigrace --vtag l1 compiler.grace )

js: js/index.html

js/%.js: %.grace minigrace
	./minigrace --verbose --target js -o $@ $<

js/index.html: js/index.in.html $(patsubst %.grace,js/%.js,$(SOURCEFILES))
	@echo Generating index.html from index.in.html...
	@awk '!/<!--\[!SH\[/ { print } /<!--\[!SH\[/ { gsub(/<!--\[!SH\[/, "") ; gsub(/\]!\]-->/, "") ; system($$0) }' < $< > $@ 

selfhost-stats: minigrace
	cat compiler.grace util.grace ast.grace parser.grace genllvm.grace > tmp.grace
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
	for f in $(SOURCEFILES) unicode.gso gracelib.o ; do ln -sf ../$$f selftest ; done
	( cd selftest ; ../minigrace --verbose --make --native --module minigrace --vtag selftest compiler.grace )
	rm -rf selftest

minigrace: l2/minigrace $(SOURCEFILES) unicode.gso gracelib.o
	./l2/minigrace --vtag l2 --make --native --module minigrace --verbose compiler.grace

unicode.gco: unicode.c unicodedata.h
	clang -emit-llvm -c -o unicode.gco -DNO_FLAGS= unicode.c

test: minigrace
	./tests/harness "$(shell pwd)/minigrace --gracelib $(shell pwd)/gracelib.o" tests
clean:
	rm -f gracelib.o
	rm -f unicode.gco unicode.gso
	rm -rf l1 l2 buildinfo.grace
	rm -f $(SOURCEFILES:.grace=.ll)
	rm -f $(SOURCEFILES:.grace=.s)
	rm -f $(SOURCEFILES:.grace=.gco)
	rm -f $(SOURCEFILES:.grace=.bc)
	rm -f $(SOURCEFILES:.grace=)
	( cd js ; for sf in $(SOURCEFILES:.grace=.js) ; do rm -f $$sf ; done )
	( cd js ; for sf in $(SOURCEFILES) ; do rm -f $$sf ; done )
	rm -f minigrace.gco minigrace.ll minigrace.s minigrace

semiclean:
	rm -f lexer.gco parser.gco util.gco ast.gco genllvm.gco

known-good/%:
	cd known-good && $(MAKE) $*
	rm -f known-good/*out

.PHONY: all clean selfhost-stats selfhost-rec test js
