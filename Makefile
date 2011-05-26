ARCH=$(shell uname -s)-$(shell uname -m)
STABLE=60d2ccdee420878edf7c0374b5a09517befce821
all: current

gracelib.o: gracelib.c
	clang -emit-llvm -c gracelib.c

current.bc: current.ll known-good/$(ARCH)/gracelib-$(STABLE).o
	llvm-link -o current.bc known-good/$(ARCH)/gracelib-$(STABLE).o current.ll unicode.gco

current.ll: compiler.gc known-good/$(ARCH)/minigrace-$(STABLE)
	./known-good/$(ARCH)/minigrace-$(STABLE) < compiler.gc >current.ll

current.s: current.bc
	llc -o current.s current.bc

current: current.s gracelib.o
	gcc -o current current.s
selfhost: current compiler.gc gracelib.o
	./current -o selfhost.ll compiler.gc
	llvm-link -o selfhost.bc gracelib.o selfhost.ll unicode.gco
	llc -o selfhost.s selfhost.bc
	gcc -o selfhost selfhost.s

selfhost-stats: selfhost
	GRACE_STATS=1 ./selfhost < compiler.gc >/dev/null

selfhost-rec: selfhost
	./selfhost -o selfhost-rec.ll compiler.gc
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
