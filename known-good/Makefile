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
	git show ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb:unicode.c > unicode.c
	git show ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb:unicodedata.h > unicodedata.h
	clang -emit-llvm -c -o unicode.gco unicode.c
	clang -emit-llvm -c -o $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o gracelib.c
	cp $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o $(ARCH)/gracelib.o
	./$(ARCH)/minigrace-60d2ccdee420878edf7c0374b5a09517befce821 < compiler.gc > independent/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.ll
	llvm-link -o out.bc independent/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.ll $(ARCH)/gracelib-60d2ccdee420878edf7c0374b5a09517befce821.o unicode.gco
	llc -o out.s out.bc
	gcc -o out out.s
	./out --module minigrace compiler.gc
	llvm-link -o out.bc $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o independent/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.ll unicode.gco
	llc -o out.s out.bc
	gcc -o out out.s
	mv out $(ARCH)/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb
	rm -f out.*
	rm -f compiler.gc gracelib.c unicode.c unicodedata.h unicode.gco

$(ARCH)/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f: $(ARCH)/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb
	mkdir -p $(ARCH)
	git show 0094a44c8b6617114d0dacdbf2084444eeaab26f:compiler.gc > compiler.gc
	git show 0094a44c8b6617114d0dacdbf2084444eeaab26f:gracelib.c > gracelib.c
	git show ae34de082b79dc8ad2359ac9713b32655337b5a3:unicode.c > unicode.c
	git show ae34de082b79dc8ad2359ac9713b32655337b5a3:unicodedata.h > unicodedata.h
	clang -emit-llvm -c -o unicode.gco unicode.c
	clang -emit-llvm -c -o $(ARCH)/gracelib-0094a44c8b6617114d0dacdbf2084444eeaab26f.o gracelib.c
	cp $(ARCH)/gracelib-0094a44c8b6617114d0dacdbf2084444eeaab26f.o $(ARCH)/gracelib.o
	./$(ARCH)/minigrace-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb < compiler.gc > independent/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f.ll
	llvm-link -o out.bc independent/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f.ll $(ARCH)/gracelib-ced7ea4cf6fcc96a16ba5ddc69a398178a0caecb.o unicode.gco
	llc -o out.s out.bc
	gcc -o out out.s
	git show 0094a44c8b6617114d0dacdbf2084444eeaab26f:unicode.c > unicode.c
	git show 0094a44c8b6617114d0dacdbf2084444eeaab26f:unicodedata.h > unicodedata.h
	if ld -ldl 2>/dev/null ; then \
	    gcc -fPIC -shared -o unicode.gso unicode.c ; \
	    ./out --module minigrace --gracelib $(ARCH)/gracelib-0094a44c8b6617114d0dacdbf2084444eeaab26f.o --make --native --verbose compiler.gc ; \
	else\
	    rm -f unicode.gso ; \
	    clang -emit-llvm -c -o unicode.gco unicode.c ; \
	    ./out --module minigrace --gracelib $(ARCH)/gracelib-0094a44c8b6617114d0dacdbf2084444eeaab26f.o --make --verbose compiler.gc ; \
	    llc -o out.s minigrace.bc ; \
	    gcc -o minigrace out.s ; \
	fi
	mv minigrace $(ARCH)/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f
	rm -f minigrace.*
	rm -f out.*
	rm -f compiler.gc gracelib.c
	rm -f unicode.gso unicode.c unicodedata.h unicode.gco

$(ARCH)/minigrace-f26b7f1f999067bfa44608cb282e26c28b49eaf8: $(ARCH)/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f
	mkdir -p $(ARCH)
	git show f26b7f1f999067bfa44608cb282e26c28b49eaf8:compiler.gc > compiler.gc
	git show f26b7f1f999067bfa44608cb282e26c28b49eaf8:gracelib.c > gracelib.c
	git show 0094a44c8b6617114d0dacdbf2084444eeaab26f:unicode.c > unicode.c
	git show 0094a44c8b6617114d0dacdbf2084444eeaab26f:unicodedata.h > unicodedata.h
	clang -emit-llvm -c -o unicode.gco unicode.c
	gcc -fPIC -shared -o unicode.gso unicode.c
	clang -emit-llvm -c -o $(ARCH)/gracelib-f26b7f1f999067bfa44608cb282e26c28b49eaf8.o gracelib.c
	cp $(ARCH)/gracelib-f26b7f1f999067bfa44608cb282e26c28b49eaf8.o $(ARCH)/gracelib.o
	if ld -ldl 2>/dev/null ; then \
	    ./$(ARCH)/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f --make --native --verbose --module minigrace --gracelib ./$(ARCH)/gracelib-0094a44c8b6617114d0dacdbf2084444eeaab26f.o compiler.gc ; \
	    cp minigrace.ll independent/minigrace-f26b7f1f999067bfa44608cb282e26c28b49eaf8.ll ; \
	    cp minigrace out ; \
	else  \
	    ./$(ARCH)/minigrace-0094a44c8b6617114d0dacdbf2084444eeaab26f --make --verbose --module minigrace --gracelib ./$(ARCH)/gracelib-0094a44c8b6617114d0dacdbf2084444eeaab26f.o compiler.gc ; \
	    llc -o out.s minigrace.bc ; \
	    gcc -o out out.s ; \
	fi
	git show f26b7f1f999067bfa44608cb282e26c28b49eaf8:unicode.c > unicode.c
	git show f26b7f1f999067bfa44608cb282e26c28b49eaf8:unicodedata.h > unicodedata.h
	if ld -ldl 2>/dev/null ; then \
	    gcc -fPIC -shared -o unicode.gso unicode.c ; \
	    ./out --module minigrace --gracelib $(ARCH)/gracelib-f26b7f1f999067bfa44608cb282e26c28b49eaf8.o --make --native --verbose compiler.gc ; \
	else\
	    rm -f unicode.gso ; \
	    clang -emit-llvm -c -o unicode.gco unicode.c ; \
	    ./out --module minigrace --gracelib $(ARCH)/gracelib-f26b7f1f999067bfa44608cb282e26c28b49eaf8.o --make --verbose compiler.gc ; \
	    llc -o out.s minigrace.bc ; \
	    gcc -o minigrace out.s ; \
	fi
	mv minigrace $(ARCH)/minigrace-f26b7f1f999067bfa44608cb282e26c28b49eaf8
	rm -f minigrace.*
	rm -f out.*
	rm -f compiler.gc gracelib.c
	rm -f unicode.gso unicode.c unicodedata.h unicode.gco
