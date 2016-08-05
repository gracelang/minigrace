# This makefile is intended for the miningrace tarball.
# It is intended to build the minigrace compiler from precompiled object
# files, and then test the compiler. The command 'make selfhost' will compile
# the compiler again, from source, using itself.

include Makefile.conf

.PHONY: selfhost test buildclean fullclean install

STUBS := $(filter-out standardGrace.grace collectionsPrelude.grace,$(STUBS))

CFILES = ast.c buildinfo.c genc.c genjs.c lexer.c parser.c util.c stringMap.c xmodule.c identifierresolution.c errormessages.c identifierKinds.c

minigrace: $(CFILES:.c=.gcn) minigrace.gcn $(STATIC_MODULES) $(UNICODE_MODULE) gracelib.o $(OTHER_MODULES)
	gcc -o minigrace -fPIC gracelib.o minigrace.gcn $(CFILES:.c=.gcn) $(STATIC_MODULES) $(LDFLAGS)

buildinfo.grace: Makefile.conf
	awk '/prefix/ { $$4 = "\"$(PREFIX)\"" } ; /includepath/ { $$4 = "\"$(INCLUDE_PATH)\"" } ; /modulepath/ { $$4 = "\"$(MODULE_PATH)\"" } ; /objectpath/ { $$4 = "\"$(OBJECT_PATH)\"" } ; { print }' buildinfo.grace > buildinfo.grace.new
	rm -f buildinfo.grace
	mv buildinfo.grace.new buildinfo.grace

buildclean:
	rm -rf *.gcn *.gct *.gso minigrace unicode.gso gracelib.o bin Makefile.conf

curl.gso: curl.c gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o curl.gso curl.c -lcurl

fullclean: buildclean
	rm -f *.grace *.c *.h

gracelib.o: gracelib.c standardGrace.c collectionsPrelude.c debugger.o
	gcc -std=c99 -c -o gracelib-basic.o gracelib.c
	gcc -std=c99 -I. -c -o standardGrace.gcn standardGrace.c
	gcc -std=c99 -I. -c -o collectionsPrelude.gcn collectionsPrelude.c
	ld -o gracelib.o -r gracelib-basic.o standardGrace.gcn collectionsPrelude.gcn debugger.o

gUnit.gct gUnit.gcn: gUnit.grace standardGrace.gct minigrace
	./minigrace $(VERBOSITY) --make --noexec -XNoMain $<

install: minigrace $(GRACE_DIALECTS:%.grace=%.gso)
	install -d $(PREFIX)/bin $(MODULE_PATH) $(OBJECT_PATH) $(INCLUDE_PATH)
	install -m 755 minigrace $(PREFIX)/bin/minigrace
	install -m 755 $(C_MODULES) $(MODULE_PATH)
	install -m 755 gracelib.o $(OBJECT_PATH)
	install -m 644 gracelib.h $(INCLUDE_PATH)
	install -m 644 $(GRACE_MODULES) $(GRACE_MODULES:%.grace=%.gct) $(MODULE_PATH)
	install -m 644 $(GRACE_DIALECTS) $(GRACE_DIALECTS:%.grace=%.gct) $(GRACE_DIALECTS:%.grace=%.gso) $(GRACE_DIALECTS:%.grace=%.gcn) $(MODULE_PATH)

Makefile.conf:
	./configure

$(STATIC_MODULES:modules/%.gcn): modules/%.gcn: modules/%.c gracelib.h
	gcc -std=c99 -I. -c -o $@ $<

minigrace-environment: minigrace standardGrace.gct gracelib.o gUnit.gct

mirrors.gcn: mirrors.c gracelib.h
	gcc -std=c99 -g -c -o mirrors.gcn mirrors.c

selfhost: minigrace $(CFILES:.c=.grace) $(STUBS:%.grace=%.gct)
	rm -f $(CFILES:.c=.gcn)
	./minigrace --make $(VERBOSITY) --target c --module minigrace compiler.grace

# The next two rules are Static Pattern Rules.  Each is like an implicit rule
# for making %.gct from stubs/%.grace, but applies only to the targets in $(STUBS:*)

$(STUBS:%.grace=stubs/%.gct): stubs/%.gct: stubs/%.grace l1/standardGrace.gct l1/minigrace
	rm -rf $(@:%.gct=stubs/%{.c,.gcn,.gso})
	GRACE_MODULE_PATH=l1 l1/minigrace $(VERBOSITY) --make --noexec --dir stubs $<
	rm -rf $(@:%.gct=stubs/%{.c,.gcn,.gso})

$(STUBS:%.grace=%.gct): %.gct: stubs/%.gct
	ln -f $< ./

test: minigrace-environment
	./tests/harness "../minigrace" tests ""

unicode.gso: unicode.c unicodedata.h gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o unicode.gso unicode.c

unicode.gcn: unicode.c unicodedata.h gracelib.h
	gcc -std=c99 -g -c -o unicode.gcn unicode.c

uninstall:
	rm -f $(PREFIX)/bin/minigrace
	rm -f $(MODULE_PATH)/*.gso
	rm -f $(OBJECT_PATH)/gracelib.o
	rm -f $(INCLUDE_PATH)/gracelib.h
	rm -f $(MODULE_PATH)/*.{gct,js,grace,gcn,gso}

%.o: %.c gracelib.h
	gcc -std=c99 -g -I. -c -o $@ $<
    
%.gcn: %.c gracelib.h
	gcc -std=c99 -I. -c -o $@ $<

%.gso: %.c gracelib.h
	gcc -std=c99 $(UNICODE_LDFLAGS) -fPIC -shared -o $@ $<
