# Makefile targets

This file describes the purpose of some of the top-level makefile targets.  Type `make <targetName>` to use one.

## The C Build

These targets use the C-backend to generate a working compiler,
and then compile with it.  So the code _doing_ the compilation is
compiled C.

### minigrace-c-env

Builds everything necessary to use the minigrace compiler with the C-backend, _using_ the C-language backend.

### minigrace-js-env

Builds everything necessary to use the minigrace compiler with the JS-backend, _using_ the C-language backend.

### install

Installs a complete set of files into the directory tree rooted at PREFIX.  PREFIX is typically set to something like
`usr/local` in the environment or on the make command line.  Files are written to $(PREFIX)/bin, $(PREFIX)/include, $(PREFIX)/lib/grace/modules, and $(PREFIX)/lib/grace.

### alltests

Builds the C and JS environments, and runs three sets of tests:
on the C backend, on the JS backend, and on `modules` using the JS backend.

### tarball

Generates a new "tarball" containing all of the C files necessary to build the C-backend-version of the compiler, 
along with a makefile.  
The user of the tarball will need a working C-compilation environment to build the minigrace compiler.

## The JS Builds

These targets bootstrap minigrace starting with the JS version of the compiler.

### npm-get-kg

Uses _npm_ to install the "known good" version of the JS compiler.
Copies it into the js-kg/$(NPM_STABLE_VERSION) directory,
so that several versions can co-exist.

### npm-build-kg

### npm-update-kg

