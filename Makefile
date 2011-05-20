ARCH=$(shell uname -s)-$(shell uname -m)
STABLE=8fc2c4db63edb9751c1b138cedd15c9771196589
all: current

gracelib.o: gracelib.c
	clang -emit-llvm -c gracelib.c

current.bc: current.ll known-good/$(ARCH)/gracelib-$(STABLE).o
	llvm-link -o current.bc known-good/$(ARCH)/gracelib-$(STABLE).o current.ll

current.ll: compiler.gc known-good/$(ARCH)/minigrace-$(STABLE)
	./known-good/$(ARCH)/minigrace-$(STABLE) < compiler.gc >current.ll

current.s: current.bc
	llc -o current.s current.bc

current: current.s gracelib.o
	gcc -o current current.s
selfhost: current compiler.gc gracelib.o
	./current <compiler.gc>selfhost.ll
	llvm-link -o selfhost.bc gracelib.o selfhost.ll
	llc -o selfhost.s selfhost.bc
	gcc -o selfhost selfhost.s

selfhost-stats: selfhost
	./selfhost < compiler.gc >/dev/null

selfhost-rec: selfhost
	./selfhost < compiler.gc > selfhost-rec.ll
	@diff -q selfhost.ll selfhost-rec.ll
	@echo PASS

clean:
	rm -f compiler.ll gracelib.o current.bc current.s current
	rm -f selfhost selfhost.s selfhost.bc selfhost.ll

known-good/%:
	make -C known-good $*

.PHONY: all clean selfhost-stats selfhost-rec
