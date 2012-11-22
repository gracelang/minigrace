include Makefile.conf
CFILES = ast.c buildinfo.c genc.c genjs.c typechecker.c lexer.c parser.c subtype.c util.c mgcollections.c interactive.c xmodule.c

minigrace: $(CFILES:.c=.gcn) minigrace.gcn $(STATIC_MODULES) $(UNICODE_MODULE) gracelib.o $(OTHER_MODULES)
	gcc -o minigrace -fPIC gracelib.o minigrace.gcn $(CFILES:.c=.gcn) $(STATIC_MODULES) $(LDFLAGS)

selfhost: minigrace $(CFILES:.c=.grace)
	rm -f $(CFILES:.c=.gcn)
	./minigrace --make --verbose --target c --module minigrace compiler.grace

%.o: %.c
	gcc -g -I. -std=c99 -c -o $@ $<

%.gcn: %.c
	gcc -I. -std=c99 -c -o $@ $<

unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o unicode.gso unicode.c

unicode.gcn: unicode.c unicodedata.h gracelib.h
	gcc -std=c99 -g -c -o unicode.gcn unicode.c

mirrors.gso: mirrors.c gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o mirrors.gso mirrors.c

mirrors.gcn: mirrors.c gracelib.h
	gcc -std=c99 -g -c -o mirrors.gcn mirrors.c

curl.gso: curl.c gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o curl.gso curl.c -lcurl

repl.gso: repl.c gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o repl.gso repl.c

repl.gcn: repl.c gracelib.h
	gcc -std=c99 -g -c -o repl.gcn repl.c

gracelib.o: gracelib.c StandardPrelude.c debugger.o
	gcc -std=c99 -c -o gracelib-basic.o gracelib.c
	gcc -I. -std=c99 -c -o StandardPrelude.gcn StandardPrelude.c
	ld -o gracelib.o -r gracelib-basic.o StandardPrelude.gcn debugger.o

install: minigrace
	install -d $(PREFIX)/bin $(PREFIX)/lib/minigrace $(PREFIX)/include
	install -m 755 minigrace $(PREFIX)/bin/minigrace
	install -m 755 unicode.gso $(OTHER_MODULES) gracelib.o $(PREFIX)/lib/minigrace
	install gracelib.h $(PREFIX)/include/gracelib.h


test: minigrace
	./tests/harness "../minigrace" tests ""

buildclean:
	rm -rf *.gcn minigrace unicode.gso gracelib.o bin Makefile.conf

fullclean: buildclean
	rm -f *.grace *.c *.h configure

Makefile.conf:
	./configure

.PHONY: selfhost test buildclean fullclean install
