ARCH=$(shell uname -s)-$(shell uname -m)
STABLE=f26b7f1f999067bfa44608cb282e26c28b49eaf8
all: current

gracelib.o: gracelib.c
	clang -emit-llvm -c gracelib.c

unicode.gso: unicode.c unicodedata.h
	gcc -fPIC -shared -o unicode.gso unicode.c

current: known-good/$(ARCH)/minigrace-$(STABLE) compiler.gc unicode.gso
	./known-good/$(ARCH)/minigrace-$(STABLE) --verbose --make --native --module current --gracelib known-good/$(ARCH)/gracelib-$(STABLE).o compiler.gc

selfhost: current compiler.gc gracelib.o unicode.gso
	./current --verbose --make --native --module selfhost compiler.gc

selfhost-stats: selfhost
	GRACE_STATS=1 ./selfhost < compiler.gc >/dev/null

selfhost-rec: selfhost
	./selfhost -o selfhost-rec.ll --module selfhost compiler.gc
	@diff -q selfhost.ll selfhost-rec.ll
	@echo PASS

unicode.gco: unicode.c unicodedata.h
	clang -emit-llvm -c -o unicode.gco -DNO_FLAGS= unicode.c

clean:
	rm -f compiler.ll gracelib.o current.bc current.s current
	rm -f selfhost selfhost.s selfhost.bc selfhost.ll
	rm -f unicode.gco unicode.gso

known-good/%:
	cd known-good && $(MAKE) $*

.PHONY: all clean selfhost-stats selfhost-rec
