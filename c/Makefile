include Makefile.conf
CFILES = ast.c buildinfo.c genc.c genjs.c genllvm30.c typechecker.c lexer.c parser.c subtype.c util.c genjava.c

minigrace: $(CFILES:.c=.gcn) minigrace.gcn unicode.gso gracelib.o
	gcc -o minigrace $(LDFLAGS) -fPIC gracelib.o minigrace.gcn $(CFILES:.c=.gcn)

selfhost: minigrace $(CFILES:.c=.grace)
	rm -f *.gcn
	./minigrace --make --verbose --target c --module minigrace compiler.grace

%.gcn: %.c
	gcc -c -o $@ $<

unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc $(UNICODE_LDFLAGS) -fPIC -shared -o unicode.gso unicode.c

gracelib.o: gracelib.c StandardPrelude.c
	gcc -c -o gracelib-basic.o gracelib.c
	gcc -c -o StandardPrelude.gcn StandardPrelude.c
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn

install: minigrace
	mkdir -p $(PREFIX)/bin
	cp minigrace gracelib.h gracelib.o unicode.gso $(PREFIX)/bin

test: minigrace
	./tests/harness "../minigrace" tests ""

buildclean:
	rm -rf *.gcn minigrace unicode.gso gracelib.o bin Makefile.conf

fullclean: buildclean
	rm -f *.grace *.c *.h configure

Makefile.conf:
	./configure
