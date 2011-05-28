ARCH=$(shell uname -s)-$(shell uname -m)

$(ARCH)/minigrace-initial:
	mkdir -p $(ARCH)
	clang -emit-llvm -c -o $(ARCH)/gracelib-initial.o independent/gracelib-initial.c
	llvm-link -o $(ARCH)/minigrace-initial.bc $(ARCH)/gracelib-initial.o independent/minigrace-initial.ll
	llc -o $(ARCH)/minigrace-initial.s $(ARCH)/minigrace-initial.bc
	gcc -o $(ARCH)/minigrace-initial $(ARCH)/minigrace-initial.s

$(ARCH)/minigrace-9010c58215b8951fc897d85b32efd3eccbdeff45: $(ARCH)/minigrace-initial
	./build-known-good $@ $< "sed"

$(ARCH)/minigrace-53cc8ecbdf1ebf7d8f08a1f25f0468410e0f7a50: $(ARCH)/minigrace-9010c58215b8951fc897d85b32efd3eccbdeff45
	./build-known-good $@ $< "sed"

$(ARCH)/minigrace-56314ba296c054c6f6db4158e1150143f1a27aeb: $(ARCH)/minigrace-53cc8ecbdf1ebf7d8f08a1f25f0468410e0f7a50
	./build-known-good $@ $<

$(ARCH)/minigrace-8fc2c4db63edb9751c1b138cedd15c9771196589: $(ARCH)/minigrace-56314ba296c054c6f6db4158e1150143f1a27aeb
	./build-known-good $@ $<

$(ARCH)/minigrace-60d2ccdee420878edf7c0374b5a09517befce821: $(ARCH)/minigrace-8fc2c4db63edb9751c1b138cedd15c9771196589
	./build-known-good $@ $<

$(ARCH)/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb: $(ARCH)/minigrace-60d2ccdee420878edf7c0374b5a09517befce821
	mkdir -p $(ARCH)
	git show ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb:compiler.gc > compiler.gc
	git show ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb:gracelib.c > gracelib.c
	clang -emit-llvm -c -o $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o gracelib.c
	cp $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o $(ARCH)/gracelib.o
	./$(ARCH)/minigrace-60d2ccdee420878edf7c0374b5a09517befce821 < compiler.gc > independent/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.ll
	llvm-link -o out.bc independent/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.ll $(ARCH)/gracelib-60d2ccdee420878edf7c0374b5a09517befce821.o ../unicode.gco
	llc -o out.s out.bc
	gcc -o out out.s
	./out --module minigrace compiler.gc
	llvm-link -o out.bc $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o independent/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.ll ../unicode.gco
	llc -o out.s out.bc
	gcc -o out out.s
	mv out $(ARCH)/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb
	rm -f out.*
	rm -f compiler.gc gracelib.c
