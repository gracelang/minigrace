import "io" as io
import "sys" as sys
import "mgcollections" as collections
import "util" as util
import "ast" as ast
import "mirrors" as mirrors
import "errormessages" as errormessages

def gctCache = collections.map.new

method builtInModules {
    if (util.target == "c") then {
        list.with("sys",
                "io",
                "imports")
    } else {
        list.with("imports",
                "interactive",
                "io", 
                "math", 
                "mirrors", 
                "sys", 
                "unicode", 
                "util")
    }
}
    
def imports = util.requiredModules

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
    checkimport(node.moduleName, node.path, node.line, node.linePos, node.isDialect)
}

method checkimport(nm, pathname, line, linePos, isDialect) is confidential {
    if (builtInModules.contains(nm)) then {
        return true
    }
    if (imports.isAlready(nm)) then {
        return true
    }
    var noSource := false
    // noSource implies that the module is written in native code, like "unicode.c"

    def gmp = sys.environ.at "GRACE_MODULE_PATH"

    def moduleFileGrace = util.file "{pathname}.grace" onPath (gmp) otherwise { _ ->
        def moduleFileBinary = util.file "{pathname}.gct" onPath (gmp) otherwise { l ->
                errormessages.syntaxError("Failed to find imported module '{pathname}'.\n" ++
                    "Looked in {l}.") atRange(line, linePos, linePos + nm.size)
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
        def needsDynamic = (isDialect || util.importDynamic ||
            util.dynamicModule)
        var binaryFile
        var importsSet
        if (needsDynamic.orElse {io.exists(moduleFileGso)} ) then {
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
            if (! io.newer(binaryFile, moduleFileGrace)) then {
                util.log_verbose "{binaryFile} older than {moduleFileGrace}"
            }
            compileGraceFile (nm) in (moduleFileGrace) forDialect (isDialect) atRange (line, linePos)
        }
        importsSet.add(nm)
    } else {  // target == "js"
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
            compileGraceFile (nm) in (moduleFileGrace) forDialect (isDialect) atRange (line, linePos)
        }
        imports.other.add(nm)
    }
    addTransitiveImports(location, nm, line, linePos)
}

method addTransitiveImports(directory, moduleName, line, linePos) is confidential {
    def data = parseGCT(moduleName) sourceDir(directory)
    if (data.contains "dialect") then {
        def dData = data.get("dialect").first
        checkimport(dData, dData, line, linePos, true)
    }
    if (data.contains("modules")) then {
        for (data.get("modules")) do {m->
            if (m == util.modname) then {
                errormessages.syntaxError("Cyclic import detected: '{m}' is imported "
                    ++ "by '{moduleName}', which is imported by '{m}' (and so on).")atRange(line, linePos, linePos + moduleName.size)
            }
            checkimport(m, m, line, linePos, false)
        }
    }
}

method compileGraceFile (nm) in (sourceFile)
        forDialect (isDialect) atRange (line, linePos) is confidential {
    if (prelude.inBrowser) then {
        errormessages.error "Please compile module {nm} before importing it."
            atRange(line, linePos, linePos + nm.size)
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
    cmd := "{cmd} --target {util.target} --noexec -XNoMain \"{sourceFile}\""
    if (util.verbosity > 30) then {
        cmd := cmd ++ " --verbose"
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
    if (util.recurse || isDialect) then {
        util.log_verbose "executing {cmd}"
        def exitCode = io.spawn("bash", "-c", cmd).status
        if (exitCode != 0) then {
            errormessages.error("Failed to compile imported module {nm} ({exitCode}).") atRange(line, linePos, linePos + nm.size)
        }
    }
}

method parseGCT(moduleName) {
    parseGCT(moduleName) sourceDir(util.sourceDir)
}

method parseGCT(moduleName) sourceDir(dir) is confidential {
    if (gctCache.contains(moduleName)) then {
        return gctCache.get(moduleName)
    }
    def data = collections.map.new
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
        gctCache.put(moduleName, data)
        return data
    }
    def tfp = io.open(filename, "r")
    var key := ""
    while {!tfp.eof} do {
        def line = tfp.getline
        if (line.size > 0) then {
            if (line.at(1) != " ") then {
                key := line.substringFrom(1)to(line.size-1)
                data.put(key, collections.list.new)
            } else {
                data.get(key).push(line.substringFrom(2)to(line.size))
            }
        }
    }
    tfp.close
    gctCache.put(moduleName, data)
    return data
}

method writeGCT(modname, data) is confidential {
    def fp = io.open("{util.sourceDir}{modname}.gct", "w")
    for (data) do {key->
        fp.write "{key}:\n"
        for (data.get(key)) do {v->
            fp.write " {v}\n"
        }
    }
    fp.close
    gctCache.put(modname, data)
}

method writeGCT(modname)fromValues(values)modules(modules) {
    writeGCT(modname,
        generateGCT(modname)fromValues(values)modules(modules))
}
method gctAsString(data) {
    var ret := ""
    for (data) do {key->
        ret := ret ++ "{key}:\n"
        for (data.get(key)) do {v->
            ret := ret ++ " {v}\n"
        }
    }
    return ret
}
method generateGCT(path)fromValues(values)modules(modules) {
    def meths = collections.list.new
    def confidentials = collections.list.new
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
    def gct = collections.map.new
    gct.put("modules", modules)
    gct.put("path", collections.list.new(path))
    gct.put("public", meths)
    gct.put("confidential", confidentials)
    if (false != theDialect) then {
        gct.put("dialect", collections.list.new(theDialect))
    }
    def classes = collections.list.new
    for (values) do {val->
        if (val.kind == "class") then {
            gct.put("constructors-of:{val.name.value}",
                collections.list.new(val.constructor.value))
            gct.put("methods-of:{val.name.value}.{val.constructor.value}",
                val.data.elements)
            classes.push(val.name.value)
        }
        if (val.kind == "defdec") then {
            if (val.value.kind == "object") then {
                def ob = val.value
                var isClass := false
                def obConstructors = collections.list.new
                for (ob.value) do {nd->
                    if (nd.kind == "method") then {
                        if (nd.isFresh) then {
                            isClass := true
                            obConstructors.push(nd.value.value)
                            gct.put("methods-of:{val.name.value}.{nd.value.value}",
                                ob.data.getScope(nd.value.value).elements)
                        }
                    }
                }
                if (obConstructors.size > 0) then {
                    gct.put("constructors-of:{val.name.value}",
                        obConstructors)
                    classes.push(val.name.value)
                }
            }
        }
    }
    gct.put("classes", classes)

    def freshmeths = collections.list.new
    gct.put("fresh-methods", freshmeths)
    for (values) do {val->
        if (val.kind == "method") then {
            if (val.isFresh) then {
                freshmeths.push(val.nameString)
                def freshMethResult = val.body.last
                if (freshMethResult.isObject) then {
                    gct.put("fresh:{val.nameString}",
                        freshMethResult.scope.keysAsList)
                } elseif {freshMethResult.isCall} then {
                    // we know that freshMethResult.value.isMember and 
                    // freshMethResult.value.nameString == "clone"
                    def receiver = freshMethResult.value.in
                    if ((receiver.nameString == "prelude").andAlso{
                      freshMethResult.with.first.args.first.nameString == "self"}) then {
                        gct.put("fresh:{val.nameString}", meths)
                        def key = "fresh:{val.nameString}"
                    } elseif {(receiver.nameString == "self")} then {
                        gct.put("fresh:{val.nameString}", meths)
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

