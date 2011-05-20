ARCH=$(shell uname -s)-$(shell uname -m)

$(ARCH)/known-good-initial:
	$(error "No initial compiler found for $(ARCH). Create $(ARCH)/known-good-initial by retrieving http://homepages.ecs.vuw.ac.nz/~mwh/minigrace/known-good/$(ARCH)/known-good-initial, build a compiler using the Parrot-based compiler and LLVM, or create that file as a script invoking the minigrace-bi compiler on Parrot.")

$(ARCH)/known-good-9010c58215b8951fc897d85b32efd3eccbdeff45: $(ARCH)/known-good-initial
	./build-known-good $@ $< "sed"

$(ARCH)/known-good-53cc8ecbdf1ebf7d8f08a1f25f0468410e0f7a50: $(ARCH)/known-good-9010c58215b8951fc897d85b32efd3eccbdeff45
	./build-known-good $@ $< "sed"

$(ARCH)/known-good-56314ba296c054c6f6db4158e1150143f1a27aeb: $(ARCH)/known-good-53cc8ecbdf1ebf7d8f08a1f25f0468410e0f7a50
	./build-known-good $@ $<

$(ARCH)/known-good-8fc2c4db63edb9751c1b138cedd15c9771196589: $(ARCH)/known-good-56314ba296c054c6f6db4158e1150143f1a27aeb
	./build-known-good $@ $<

