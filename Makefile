ARCH=$(shell uname -s)-$(shell uname -m)
STABLE=ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb
all: current

gracelib.o: gracelib.c
	clang -emit-llvm -c gracelib.c

current: known-good/$(ARCH)/minigrace-$(STABLE) compiler.gc unicode.gco
	./known-good/$(ARCH)/minigrace-$(STABLE) --verbose --make --native --module current --gracelib known-good/$(ARCH)/gracelib-$(STABLE).o compiler.gc

selfhost: current compiler.gc gracelib.o unicode.gco
	./current --verbose --make --native --module selfhost compiler.gc

selfhost-stats: selfhost
	GRACE_STATS=1 ./selfhost selfhost < compiler.gc >/dev/null

selfhost-rec: selfhost
	./selfhost -o selfhost-rec.ll --module selfhost compiler.gc
	@diff -q selfhost.ll selfhost-rec.ll
	@echo PASS

unicode.gco: unicode.c unicodedata.h
	clang -emit-llvm -c -o unicode.gco unicode.c

clean:
	rm -f compiler.ll gracelib.o current.bc current.s current
	rm -f selfhost selfhost.s selfhost.bc selfhost.ll

known-good/%:
	cd known-good && $(MAKE) $*

.PHONY: all clean selfhost-stats selfhost-rec
