import "io" as io
import "sys" as sys
import "util" as util
import "ast" as ast
import "mirrors" as mirrors
import "errormessages" as errormessages

def gctCache = dictionary.empty
def keyCompare = { a, b -> a.key.compare(b.key) }

method builtInModules {
    if (util.target == "c") then {
        list.with("sys",
                "io",
                "imports")
    } else {
        list.with("imports",
                "io", 
                "math", 
                "mirrors", 
                "sys", 
                "unicode", 
                "util")
    }
}

def dynamicCModules = set.with("mirrors", "curl", "math", "unicode")
def imports = util.requiredModules
def emptySequence = sequence.empty

method dirName (filePath) is confidential {
    // the directory part of filePath, including the trailing /
    var slashPosn := 0
    var ix := filePath.size
    while { (slashPosn == 0) && (ix > 0) } do {
        if (filePath.at(ix) == "/") then {
            slashPosn := ix
        } else { 
            ix := ix - 1 
        }
    }
    if (slashPosn == 0) then {
        "./"
    } else {
        filePath.substringFrom 1 to (slashPosn)
    }
}

method checkExternalModule(node) {
    checkimport(node.moduleName, node.path, node.line, node.linePos + 8, node.isDialect)
}

method checkimport(nm, pathname, line, linePos, isDialect) is confidential {
    if (builtInModules.contains(nm)) then {
        imports.other.add(nm)
        return
    }
    if (imports.isAlready(nm)) then { return }
    var noSource := false
    // noSource implies that the module is written in native code, like "unicode.c"

    def gmp = sys.environ.at "GRACE_MODULE_PATH"

    def moduleFileGrace = util.file "{pathname}.grace" onPath (gmp) otherwise { _ ->
        def moduleFileBinary = util.file "{pathname}.gct" onPath (gmp) otherwise { l ->
                errormessages.syntaxError("Failed to find imported module '{pathname}'.\n" ++
                    "Looked in {l}.") atRange(line, linePos, linePos + nm.size - 1)
            }
        noSource := true
        moduleFileBinary.substringFrom 1 to (moduleFileBinary.size - 4) ++ ".grace"
    }
    def moduleFileRoot = moduleFileGrace.substringFrom 1 to (moduleFileGrace.size - 6)
    def moduleFileGso = moduleFileRoot ++ ".gso"
    def moduleFileGct = moduleFileRoot ++ ".gct"
    def moduleFileGcn = moduleFileRoot ++ ".gcn"
    def moduleFileJs = moduleFileRoot ++ ".js"
    def location = dirName(moduleFileRoot)

    if (util.target == "c") then {
        def needsDynamic = (isDialect || util.importDynamic || util.dynamicModule)
            .orElse { dynamicCModules.contains(nm) }
        var binaryFile
        var importsSet
        if (needsDynamic) then {
            binaryFile := moduleFileGso
            importsSet := imports.other
        } else {
            binaryFile := moduleFileGcn
            importsSet := imports.static
            imports.linkfiles.add(moduleFileGcn)
        }
        if (io.exists(binaryFile).andAlso {
            io.exists(moduleFileGct) }.andAlso {
                noSource.orElse {
                    io.newer(binaryFile, moduleFileGrace)
                }
            }
        ) then {
        } else {
            if (! io.exists(binaryFile)) then {
                util.log_verbose "{binaryFile} does not exist"
            } elseif { ! io.newer(binaryFile, moduleFileGrace) } then {
                util.log_verbose "{binaryFile} older than {moduleFileGrace}"
            }
            compileModule (nm) inFile (moduleFileGrace) forDialect (isDialect) atRange (line, linePos)
        }
        importsSet.add(nm)
    } elseif { util.target == "js" } then {
        if (io.exists(moduleFileJs).andAlso {
            io.exists(moduleFileGct) }.andAlso {
                noSource.orElse {
                    io.newer(moduleFileJs, moduleFileGrace)
                }
            }
        ) then {
        } else {
            if (! io.newer(moduleFileJs, moduleFileGrace)) then {
                util.log_verbose "{moduleFileJs} older than {moduleFileGrace}"
            }
            compileModule (nm) inFile (moduleFileGrace) forDialect (isDialect) atRange (line, linePos)
        }
        imports.other.add(nm)
    }
    addTransitiveImports(location, isDialect, nm, line, linePos)
}

method addTransitiveImports(directory, isDialect, moduleName, line, linePos) is confidential {
    def gctData = gctCache.at(moduleName) ifAbsent { 
        parseGCT(moduleName) sourceDir(directory)
    }
    if (gctData.containsKey "dialect") then {
        def dName = gctData.at "dialect" .first
        checkimport(dName, dName, line, linePos, true)
    }
    def importedModules = gctData.at "modules" ifAbsent { emptySequence }
    def m = util.modname
    if (importedModules.contains(m)) then {
        errormessages.syntaxError("Cyclic import detected: '{m}' is imported "
            ++ "by '{moduleName}', which is imported by '{m}' (and so on).")atRange(line, linePos, linePos + moduleName.size)
    }
    importedModules.do { each ->
        checkimport(each, each, line, linePos, isDialect)
    }
}

method compileModule (nm) inFile (sourceFile)
        forDialect (isDialect) atRange (line, linePos) is confidential {
    if ( prelude.inBrowser.orElse { util.recurse.not } ) then {
        errormessages.error "Please compile module {nm} before importing it."
            atRange(line, linePos, linePos + nm.size - 1)
    }
    var slashed := false
    for (sys.argv.first) do {letter ->
        if(letter == "/") then {
            slashed := true
        }
    }
    var cmd
    if (slashed) then {
        cmd := io.realpath(sys.argv.first)
    } else {
        cmd := io.realpath "{sys.execPath}/{sys.argv.first}"
    }
    cmd := "\"{cmd}\""
    if (util.verbosity > 30) then {
        cmd := cmd ++ " --verbose"
    }
    if (util.outDir != "") then {
        cmd := cmd ++ " --dir " ++ util.outDir
    }
    if (false != util.vtag) then {
        cmd := cmd ++ " --vtag " ++ util.vtag
    }
    if (util.target == "c") then {
        if (util.dynamicModule || isDialect) then {
            cmd := cmd ++ " --dynamic-module"
        }
        if (util.importDynamic) then {
            cmd := cmd ++ " --import-dynamic --dynamic-module"
        }
    }
    cmd := "{cmd} --target {util.target} --noexec -XNoMain \"{sourceFile}\""
    util.log_verbose "executing {cmd}"
    def exitCode = io.spawn("bash", "-c", cmd).status
    if (exitCode != 0) then {
        errormessages.error("Failed to compile imported module {nm} ({exitCode}).") atRange(line, linePos, linePos + nm.size - 1)
    }
}

method parseGCT(moduleName) {
    gctCache.at(moduleName) ifAbsent {
        parseGCT(moduleName) sourceDir(util.outDir)
    }
}

method parseGCT(moduleName) sourceDir(dir) is confidential {
    def gctData = dictionary.empty
    def sz = moduleName.size
    def sought = 
        if ((sz >= 4).andAlso{moduleName.substringFrom(sz - 3) to(sz) == ".gct"}) then {
        moduleName
    } else {
        moduleName ++ ".gct"
    }
    def filename = util.file(sought) on(dir)
      orPath(sys.environ.at "GRACE_MODULE_PATH") otherwise { l ->
        util.log_verbose "Can't find file {sought} for module {moduleName}; looked in {l}."
        gctCache.at(moduleName) put(gctData)
        return gctData
    }
    def tfp = io.open(filename, "r")
    var key := ""
    while {!tfp.eof} do {
        def line = tfp.getline
        if (line.size > 0) then {
            if (line.at(1) != " ") then {
                key := line.substringFrom 1 to(line.size-1)
                gctData.at(key) put(list.empty)
            } else {
                gctData.at(key).addLast(line.substringFrom 2 to(line.size))
            }
        }
    }
    tfp.close
    gctCache.at(moduleName) put(gctData)
    return gctData
}

method writeGCT(modname, dict) is confidential {
    def fp = io.open("{util.outDir}{modname}.gct", "w")
    dict.bindings.asList.sortBy(keyCompare).do { b ->
        fp.write "{b.key}:\n"
        try {
            if (Binding.match(b.value.first)) then {
                util.log_verbose "key = {b.key}, value = {b.value}"
            }
        } catch { _ -> }
        b.value.asList.sort.do { v ->
            fp.write " {v}\n"
        }
    }
    fp.close
    gctCache.at(modname) put(dict)
}

method writeGCT(modname) fromValues(values) modules(modules) {
    writeGCT(modname,
        generateGCT(modname) fromValues(values) modules(modules))
}
method gctAsString(gctDict) {
    var ret := ""
    gctDict.bindings.asList.sortBy(keyCompare).do { b ->
        ret := ret ++ "{b.key}:\n"
        b.value.asList.sort.do { v ->
            ret := ret ++ " {v}\n"
        }
    }
    return ret
}
method generateGCT(path) fromValues(values) modules(modules) is confidential {
    def meths = list.empty
    def confidentials = list.empty
    var theDialect := false
    for (values) do { v->
        if (v.kind == "vardec") then {
            if (v.isReadable) then {
                meths.push(v.name.value)
            }
            if (v.isWritable) then {
                meths.push(v.name.value ++ ":=")
            }
        } elseif {(v.kind == "method").orElse {v.kind == "typedec"}} then {
            if (v.isPublic) then {
                meths.push(v.nameString)
            } else {
                confidentials.push(v.nameString)
            }
        } elseif (v.kind == "defdec") then {
            if (v.isPublic) then {
                meths.push(v.name.value)
            }
            if (ast.findAnnotation(v, "parent")) then {
                if (false != v.data) then {
                    for (v.data.elements) do {m->
                        meths.push(m)
                    }
                }
            }
        } elseif (v.kind == "class") then {
            meths.push(v.name.value)
        } elseif (v.kind == "dialect") then {
            theDialect := v.value
        } elseif (v.kind == "inherits") then {
            v.providedNames.do { each -> meths.push(each) }
        }
    }
    def gct = dictionary.empty
    gct.at "modules" put(modules.asList.sort)
    gct.at "path" put(list.with(path))
    gct.at "public" put(meths.sort)
    gct.at "confidential" put(confidentials.sort)
    if (false != theDialect) then {
        gct.at "dialect" put(list.with(theDialect))
    }
    def classes = list.empty
    for (values) do {val->
        if (val.kind == "class") then {
            gct.at "constructors-of:{val.name.value}"
                put(list.with(val.constructor.value))
            gct.at "methods-of:{val.name.value}.{val.constructor.value}"
                put(val.scope.keysAsList.sort)
            classes.push(val.name.value)
        } elseif { (val.kind == "defdec").andAlso {
                val.value.kind == "object" } } then {
            // TODO: try "val.returnsObject" in above condition?
            def ob = val.value
            var isClass := false
            def obConstructors = list.empty
            for (ob.value) do {nd->
                if (nd.kind == "method") then {
                    if (nd.isFresh) then {
                        isClass := true
                        def factMethNm = nd.nameString
                        obConstructors.push(factMethNm)
                        gct.at "methods-of:{val.name.value}.{factMethNm}"
                            put(ob.scope.getScope(factMethNm).keysAsList.sort)
                    }
                }
            }
            if (obConstructors.size > 0) then {
                gct.at "constructors-of:{val.name.value}"
                    put(obConstructors)
                classes.push(val.name.value)
            }
        }
    }
    gct.at "classes" put(classes)

    def freshmeths = list.empty
    gct.at "fresh-methods" put(freshmeths)
    for (values) do {val->
        if (val.kind == "method") then {
            if (val.isFresh) then {
                freshmeths.push(val.nameString)
                def freshMethResult = val.body.last
                if (freshMethResult.isObject) then {
                    gct.at "fresh:{val.nameString}"
                        put(freshMethResult.scope.keysAsList)
                } elseif {freshMethResult.isCall} then {
                    // we know that freshMethResult.value.isMember and 
                    // freshMethResult.value.nameString == "clone"
                    def receiver = freshMethResult.value.in
                    if ((receiver.nameString == "prelude").andAlso{
                      freshMethResult.with.first.args.first.nameString == "self"}) then {
                        gct.at "fresh:{val.nameString}" put(meths)
                        def key = "fresh:{val.nameString}"
                    } elseif {(receiver.nameString == "self")} then {
                        gct.at "fresh:{val.nameString}" put(meths)
                    } else {
                        ProgrammingError.raise 
                            "unrecognized fresh method tail-call: {freshMethResult.pretty(0)}"
                    }
                } else {
                    ProgrammingError.raise
                        "fresh method result of an unexpected kind: {freshMethResult.pretty(0)}"
                }
            }
        }
    }
    return gct
}

