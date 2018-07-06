# Makefile targets


## The JS Builds


This file describes the purpose of some of the top-level makefile targets.  Type `make <targetName>` to use one.
All of these targets use the version of minigrace that compiles to JavaScipt.
The C, Java and LLVM backends are no longer supported. 

### minigrace-js-env

Builds everything necessary to use the minigrace compiler with the JS-backend.

### install

Installs a complete set of files into the directory tree rooted at PREFIX.  PREFIX is typically set to something like
`/usr/local` in the environment or on the make command line.  Files are written to $(PREFIX)/bin, $(PREFIX)/include, $(PREFIX)/lib/grace/modules, and $(PREFIX)/lib/grace.

### self.test

Builds the compiler, and then tests it by using it to compile itself and then 
using the compiler so-produced to run the test suite.

### alltests

Builds the JS environment, and runs three sets of tests:
on the JS backend, on `modules`, and self.test.

### npm-publish

Generates and publishes a new node package containing all of the js files necessary to build the js-backend-version of the compiler.


These targets bootstrap minigrace starting with the JS version of the compiler.

### npm-get-kg

Uses _npm_ to install the "known good" version of the JS compiler.
Copies it into the js-kg/$(NPM_STABLE_VERSION) directory,
so that several versions can co-exist.

### npm-build-kg

Builds a new known-good environment, as will be needed to do an npm-publish

### ide

Builds and delpoys the generated JavaScript to a web server, whose location
must be specified in the Makefile variable WEB_SERVER.  The default location
is public_html/ide/; a different location can be specifed by setting the variable
WEB_DIRECTORY.

