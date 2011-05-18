all: current

gracelib.o: gracelib.c
	clang -emit-llvm -c gracelib.c

current.bc: compiler.ll gracelib-kg.o
	llvm-link -o current.bc gracelib-kg.o compiler.ll

compiler.ll: compiler.gc
	./minigrace_known-good < compiler.gc | sed -n '/^;---/,$$p'>compiler.ll

current.s: current.bc
	llc -o current.s current.bc

current: current.s gracelib.o
	gcc -o current current.s
selfhost: current compiler.gc gracelib.o
	./current <compiler.gc|sed -n '/^;---/,$$p'>selfhost.ll
	llvm-link -o selfhost.bc gracelib.o selfhost.ll
	llc -o selfhost.s selfhost.bc
	gcc -o selfhost selfhost.s

selfhost-stats: selfhost
	./selfhost < compiler.gc >/dev/null

clean:
	rm -f compiler.ll gracelib.o current.bc current.s current

.PHONY: all clean selfhost-stats
