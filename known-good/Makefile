ARCH:=$(shell uname -s)-$(shell uname -m)

# We have a tarball of this version stored in the repository. All later
# versions know how to build themselves.
$(ARCH)/minigrace-4df500fa93a8e8f5886b3590424a7aa67e21bf0e:
	tar xzvf ./independent/c-4df500fa93a8e8f5886b3590424a7aa67e21bf0e.tar.gz
	cd c-4df500fa93a8e8f5886b3590424a7aa67e21bf0e && \
	if [ "$$GNU_MAKE" ] ; \
	then \
	    $$GNU_MAKE ; \
	elif make -v 2>&1 | grep -q GNU ; \
	then \
	    make ; \
	elif gmake -v 2>&1 | grep -q GNU ; \
	then \
	    gmake ; \
	else \
	    echo "Could not find GNU make." ; \
	    echo "Set GNU_MAKE to the correct path and try again." ; \
	    exit 1 ; \
	fi
	mkdir -p "$(ARCH)"
	mv c-4df500fa93a8e8f5886b3590424a7aa67e21bf0e/minigrace $(ARCH)/minigrace-4df500fa93a8e8f5886b3590424a7aa67e21bf0e
	cp c-4df500fa93a8e8f5886b3590424a7aa67e21bf0e/gracelib.o $(ARCH)/gracelib-4df500fa93a8e8f5886b3590424a7aa67e21bf0e.o
	cp c-4df500fa93a8e8f5886b3590424a7aa67e21bf0e/gracelib.h $(ARCH)/gracelib-4df500fa93a8e8f5886b3590424a7aa67e21bf0e.h
	rm -rf c-4df500fa93a8e8f5886b3590424a7aa67e21bf0e

$(ARCH)/minigrace-%:
	./make-known-good $* $(ARCH) "hyphenated"

$(ARCH)/%/minigrace:
	./make-known-good $* $(ARCH)

clean:
	rm -fr tmp-* EXCLUDE