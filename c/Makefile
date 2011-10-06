include Makefile.conf
CFILES = ast.c buildinfo.c genc.c genjs.c genllvm.c lexer.c parser.c subtype.c util.c

minigrace: $(CFILES:.c=.gcn) minigrace.gcn unicode.gso gracelib.o
	gcc -o minigrace $(LDFLAGS) -fPIC gracelib.o minigrace.gcn $(CFILES:.c=.gcn)

selfhost: minigrace $(CFILES:.c=.grace)
	rm -f *.gcn
	./minigrace --make --verbose --target c --module minigrace compiler.grace

%.gcn: %.c
	gcc -c -o $@ $<

unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc $(UNICODE_LDFLAGS) -fPIC -shared -o unicode.gso unicode.c

gracelib.o: gracelib.c
	gcc -c -o gracelib.o gracelib.c

install: minigrace
	mkdir -p $(PREFIX)/bin
	cp minigrace gracelib.h gracelib.o unicode.gso $(PREFIX)/bin

buildclean:
	rm -rf *.gcn minigrace unicode.gso gracelib.o bin Makefile.conf

fullclean: buildclean
	rm -f *.grace *.c *.h

Makefile.conf:
	./configure
