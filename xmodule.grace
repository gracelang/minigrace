import "io" as io
import "sys" as sys
import "util" as util
import "ast" as ast
import "mirrors" as mirrors
import "errormessages" as errormessages
import "unixFilePath" as filePath

def gctCache = dictionary.empty
def keyCompare = { a, b -> a.key.compare(b.key) }

method builtInModules {
    if (util.target == "c") then {
        list.with("sys",
                "io",
                "imports",
                "StandardPrelude",
                "standardGrace",
                "collectionsPrelude")
    } else {
        list.with("imports",
                "io",
                "mirrors",
                "sys",
                "unicode",
                "util")
    }
}

def currentDialect = object {
    var name is public := "standardGrace"
    var moduleObject is public := _prelude
    // TODO: this isn't quite right: should be the prelude
    // on the GRACE_MODULE_PATH of this compilation
    var hasParseChecker is public := false
    var hasAstChecker is public := false
    var hasAtStart is public := false
    var hasAtEnd is public := false
}

type LinePos = {
    line -> Number
    linePos -> Number
}

type RangeSuggestions = {
    line -> Number
    posStart -> Number
    posEnd -> Number
    suggestions
}

def dynamicCModules is public = set.with("mirrors", "curl", "unicode")
def imports = util.requiredModules
def emptySequence = sequence.empty

method checkDialect(moduleObject) {
    moduleObject.value.do { node ->
        if (node.isDialect) then {
            def nm = node.moduleName
            currentDialect.name := nm
            checkExternalModule(node)
            util.log 50 verbose "loading dialect for checkers."
            try {
                def dobj = mirrors.loadDynamicModule(node.path)
                currentDialect.moduleObject := dobj
                def mths = mirrors.reflect(dobj).methods
                for (mths) do { m ->
                    if (m.name == "checker") then {
                        currentDialect.hasParseChecker := true
                    }
                    if (m.name == "astChecker") then {
                        currentDialect.hasAstChecker := true
                    }
                    if (m.name == "atModuleEnd") then {
                        currentDialect.hasAtEnd := true
                    }
                    if (m.name == "atModuleStart") then {
                        currentDialect.hasAtStart := true
                    }
                }
            } catch { e : RuntimeError ->
                util.setPosition(node.line, 1)
                e.printBacktrace
                errormessages.error "Dialect error: dialect '{nm}' failed to load.\n{e}."
                    atLine(node.line)
            }
            return  // there is at most one dialect
        }
    }
}

method doParseCheck(moduleObj) {
    if (currentDialect.hasParseChecker.not) then { return }
    def CheckerFailure = Exception.refine "CheckerFailure"
    try {
        currentDialect.moduleObject.checker(moduleObj.value)
    } catch { e : CheckerFailure ->
        match (e.data)
            case { lp : LinePos ->
                errormessages.error "{e.exception}: {e.message}."
                    atPosition(e.data.line, e.data.linePos)
            }
            case { rs : RangeSuggestions ->
                errormessages.error("{e.exception}: {e.message}.")
                    atRange(rs.line, rs.posStart, rs.posEnd)
                    withSuggestions(rs.suggestions)
            }
            case { _ ->
                errormessages.error "{e.exception}: {e.message}." 
                    atLine(util.linenum)
            }
    } catch { e : Exception ->      // some unknwown Grace exception
        e.printBacktrace
        errormessages.error("Unexpected exception raised by parse checker for " ++
            "dialect '{currentDialect.name}'.\n{e.exception}: {e.message}")
    }
}

method doAstCheck(moduleObj) {
    if (currentDialect.hasAstChecker.not) then { return }
    def CheckerFailure = Exception.refine "CheckerFailure"
    try {
        currentDialect.moduleObject.astChecker(moduleObj)
    } catch { e : CheckerFailure ->
        match (e.data)
            case { lp : LinePos ->
                errormessages.error "{e.exception}: {e.message}."
                    atPosition(e.data.line, e.data.linePos)
            }
            case { rs : RangeSuggestions ->
                errormessages.error("{e.exception}: {e.message}.")
                    atRange(rs.line, rs.posStart, rs.posEnd)
                    withSuggestions(rs.suggestions)
            }
            case { _ -> }
        errormessages.error("{e.exception}: {e.message}.")atPosition(util.linenum, 0)
    } catch { e : Exception ->      // some unknwown Grace exception
        e.printBacktrace
        errormessages.error("Unexpected exception raised by AST checker for " ++
            "dialect '{currentDialect.name}'.\n{e.exception}: {e.message}")
    }
}

method checkExternalModule(node) {
    checkimport(node.moduleName, node.path,
        node.line, node.linePos, node.isDialect)
}

method checkimport(nm, pathname, line, linePos, isDialect) is confidential {
    if (builtInModules.contains(nm)) then {
        imports.other.add(nm)
        return
    }
    if (imports.isAlready(nm)) then {
        return
    }
    var noSource := false
    // noSource implies that the module is written in native code, like "unicode.c"

    if (prelude.inBrowser) then {
        util.file(nm ++ ".js") onPath "" otherwise { _ ->
            errormessages.error "Please compile module {nm} before importing it."
                atRange(line, linePos, linePos + nm.size - 1)
        }
        return
    }
    def gmp = sys.environ.at "GRACE_MODULE_PATH"
    def pn = filePath.fromString(pathname).setExtension "grace"
    def moduleFileGrace = util.file(pn) on(util.sourceDir)
                                orPath (gmp) otherwise { l ->
        noSource := true
        pn
    }
    var moduleFileGct := moduleFileGrace.copy.setExtension ".gct"
    if (util.sourceDir != util.outDir) then {
        moduleFileGct.setDirectory(util.outDir)
    }
    if (util.target == "c") then {
        def moduleFileGso = moduleFileGct.copy.setExtension ".gso"
        def moduleFileGcn = moduleFileGct.copy.setExtension ".gcn"
        def needsDynamic = (isDialect || util.importDynamic || util.dynamicModule)
            .orElse { dynamicCModules.contains(nm) }
        util.log 100 verbose "needsDynamic for {nm} is {needsDynamic}."
        var binaryFile
        var importsSet
        if (needsDynamic) then {
            dynamicCModules.add(nm)
            binaryFile := moduleFileGso
            importsSet := imports.other
        } else {
            binaryFile := moduleFileGcn
            importsSet := imports.static
        }
        if (noSource && binaryFile.exists.not) then {
            binaryFile := util.file(binaryFile) onPath (gmp) otherwise { l ->
                errormessages.error(
                    "I can't find {pn.shortName} or {binaryFile.shortName}; looked in {l}.")
                    atLine(line)
            }
            moduleFileGct.setDirectory(binaryFile.directory)
            if (moduleFileGct.exists.not) then {
                errormessages.error("I found {binaryFile}, but neither " ++
                    "{moduleFileGct} nor source.")
                    atLine(line)
            }
        }
        if (needsDynamic.not) then {
            imports.linkfiles.add(binaryFile.asString)
        }
        util.log 100 verbose "linkfiles is {imports.linkfiles}."
        if (binaryFile.exists.andAlso {
            moduleFileGct.exists }.andAlso {
                noSource.orElse { binaryFile.newer(moduleFileGrace) }
            }
        ) then {
        } else {
            if ( binaryFile.exists.not ) then {
                util.log 60 verbose "{binaryFile} does not exist"
            } elseif { binaryFile.newer(moduleFileGrace).not } then {
                util.log 60 verbose "{binaryFile} not newer than {moduleFileGrace}"
            }
            compileModule (nm) inFile (moduleFileGrace.asString) 
                forDialect (isDialect) atRange (line, linePos)
        }
        importsSet.add(nm)
    } elseif { util.target == "js" } then {
        def moduleFileJs = moduleFileGct.copy.setExtension ".js"
        if (moduleFileJs.exists.andAlso {
            moduleFileGct.exists }.andAlso {
                noSource.orElse {
                    moduleFileJs.newer(moduleFileGrace)
                }
            }
        ) then {
        } else {
            if (moduleFileJs.newer(moduleFileGrace).not) then {
                util.log 60 verbose "{moduleFileJs} not newer than {moduleFileGrace}"
            }
            if (moduleFileGrace.exists) then {
                compileModule (nm) inFile (moduleFileGrace.asString) 
                    forDialect (isDialect) atRange (line, linePos)
            } else {
                errormessages.error "Can't find dialect {nm}"
                    atLine(line)
            }
        }
        imports.other.add(nm)
    }
    addTransitiveImports(moduleFileGct.directory, isDialect, nm, line, linePos)
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
        errormessages.error("Cyclic import detected: '{m}' is imported "
            ++ "by '{moduleName}', which is imported by '{m}' (and so on).")
            atLine(line)
    }
    importedModules.do { each ->
        checkimport(each, each, line, linePos, isDialect)
    }
}

method compileModule (nm) inFile (sourceFile)
        forDialect (isDialect) atRange (line, linePos) is confidential {
    if ( prelude.inBrowser.orElse { util.recurse.not } ) then {
        errormessages.error "Please compile module {nm} before importing it."
            atLine(line)
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
    def cmdSz = cmd.size
    if (cmd.substringFrom(cmdSz-2) to (cmdSz) == ".js") then {
        cmd := "grace \"{cmd}\""
    } else {
        cmd := "\"{cmd}\""
    }
    if (util.verbosity != util.defaultVerbosity) then {
        cmd := cmd ++ " --verbose {util.verbosity}"
    }
    if (util.dirFlag) then {
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
            cmd := cmd ++ " --import-dynamic"
        }
        cmd := cmd ++ " -XNoMain"
    }
    cmd := cmd ++ " --gracelib " ++ util.gracelibPath
    cmd := cmd ++ util.commandLineExtensions
    cmd := "{cmd} --target {util.target} --noexec \"{sourceFile}\""
    util.log 50 verbose "executing sub-compile {cmd}"
    def exitCode = io.spawn("bash", ["-c", cmd]).status
    if (exitCode != 0) then {
        errormessages.error "Failed to compile imported module {nm} ({exitCode})."
            atLine(line)
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
    def sought = filePath.fromString(moduleName).setExtension ".gct"
    def filename = util.file(sought) on(dir)
      orPath(sys.environ.at "GRACE_MODULE_PATH") otherwise { l ->
        util.log 80 verbose "Can't find file {sought} for module {moduleName}; looked in {l}."
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
        b.value.asList.sort.do { v ->
            fp.write " {v}\n"
        }
    }
    fp.close
    gctCache.at(modname) put(dict)
}

method writeGctForModule(moduleObject) {
    writeGCT(moduleObject.name, generateGctForModule(moduleObject))
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

var methodtypes := list.empty
def typeVisitor = object {
    inherits ast.baseVisitor
    var literalCount := 1
    method visitTypeLiteral(lit) {
        for (lit.methods) do { meth ->
            var mtstr := "{literalCount} "
            for (meth.signature) do { part ->
                mtstr := mtstr ++ part.name
                if ((part.params.size > 0) || (part.vararg != false)) then {
                    mtstr := mtstr ++ "("
                    for (part.params.indices) do { pnr ->
                        var p := part.params[pnr]
                        if (p.dtype != false) then {
                            mtstr := mtstr ++ p.toGrace(1)
                        } else {
                            // if parameter type not listed, give it type Unknown
                            if(p.wildcard) then {
                                mtstr := mtstr ++ "_"
                            } else {
                                mtstr := mtstr ++ p.value
                            }
                            mtstr := mtstr ++ " : " ++ ast.unknownType.value
                            if (false != p.generics) then {
                                mtstr := mtstr ++ "<"
                                for (1..(p.generics.size - 1)) do {ix ->
                                    mtstr := mtstr ++ p.generics.at(ix).toGrace(1)
                                }
                                mtstr := mtstr ++ p.generics.last.toGrace(1) ++ ">"
                            }
                        }
                        if ((pnr < part.params.size) || (part.vararg != false)) then {
                            mtstr := mtstr ++ ", "
                        }
                    }
                    if (part.vararg != false) then {
                        mtstr := mtstr ++ "*" ++ part.vararg.toGrace(1)
                    }
                    mtstr := mtstr ++ ")"
                }
            }
            if (meth.rtype != false) then {
                mtstr := mtstr ++ " -> " ++ meth.rtype.toGrace(1)
            }
            methodtypes.push(mtstr)
        }
        return false
    }
    method visitOp(op) {
        if ((op.value=="&") || (op.value=="|")) then {
            def leftkind = op.left.kind
            def rightkind = op.right.kind
            if ((leftkind=="identifier") || (leftkind=="member")) then {
                var typeIdent := op.left.toGrace(0)
                methodtypes.push("{op.value} {typeIdent}")
            } elseif { leftkind=="typeliteral" } then {
                literalCount := literalCount + 1
                methodtypes.push("{op.value} {literalCount}")
                visitTypeLiteral(op.left)
            } elseif { leftkind=="op" } then {
                visitOp(op.left)
            }
            if ((rightkind=="identifier") || (rightkind=="member")) then {
                var typeIdent := op.right.toGrace(0)
                methodtypes.push("{op.value} {typeIdent}")
            } elseif { rightkind=="typeliteral" } then {
                literalCount := literalCount + 1
                methodtypes.push("{op.value} {literalCount}")
                visitTypeLiteral(op.right)
            } elseif { rightkind=="op" } then {
                visitOp(op.right)
            }
        }
        return false
    }
}
method generateGctForModule(moduleObject) is confidential {
    def gct = buildGctFor(moduleObject)
    addFreshMethodsOf (moduleObject) to (gct)
    return gct
}

method buildGctFor(module) {
    def gct = dictionary.empty
    def classes = list.empty
    def confidentials = list.empty
    def meths = list.empty
    def types = list.empty
    var theDialect := false
    module.parentsDo { p ->
        meths.addAll(p.providedNames)
    }
    for (module.value) do { v->
        if (v.kind == "vardec") then {
            if (v.isReadable) then {
                meths.push(v.name.value)
            }
            if (v.isWritable) then {
                meths.push(v.name.value ++ ":=")
            }
        } elseif {v.kind == "method"} then {
            if (v.isPublic) then {
                meths.push(v.nameString)
            } else {
                confidentials.push(v.nameString)
            }
        } elseif {v.kind == "typedec"} then {
            if (v.isPublic) then {
                meths.push(v.nameString)
                types.push(v.name.value)
                methodtypes := list.empty
                v.accept(typeVisitor)
                var typename := v.name.toGrace(0)
                if (v.typeParams != false) then {
                    typename := typename ++ v.typeParams
                }
                gct.at "methodtypes-of:{typename}" put(methodtypes)
            } else {
                confidentials.push(v.nameString)
            }
        } elseif {v.kind == "defdec"} then {
            if (v.isPublic) then {
                meths.push(v.nameString)
            }
            if (ast.findAnnotation(v, "parent")) then {
                v.scope.elements.keysDo { m -> meths.push(m) }
            }
            if (v.returnsObject) then {
                def ob = v.value
                def obConstructors = list.empty
                for (ob.value) do {nd->
                    if (nd.isClass) then {
                        def factMethNm = nd.nameString
                        obConstructors.push(factMethNm)
                        gct.at "methods-of:{v.name.value}.{factMethNm}"
                            put(ob.scope.getScope(factMethNm).keysAsList.sort)
                    }
                }
                if (obConstructors.size > 0) then {
                    gct.at "constructors-of:{v.name.value}"
                        put(obConstructors)
                    classes.push(v.name.value)
                }
            }
        } elseif { v.kind == "dialect" } then {
            theDialect := v.value
        }
    }
    gct.at "classes" put(classes.sort)
    gct.at "confidential" put(confidentials.sort)
    gct.at "modules" put(module.imports.asList.sorted)
    gct.at "path" put(list.with(module.name))
    gct.at "public" put(meths.sort)
    gct.at "types" put(types.sort)
    if (false != theDialect) then {
        gct.at "dialect" put(list.with(theDialect))
    }
    gct
}

method addFreshMethodsOf (moduleObject) to (gct) is confidential {
    // adds information about the methods made available via fresh methods.
    // This is done in a separate pass after public information is in the gct,
    // because of the special treatment of prelude.clone
    // TODO: doesn't this just duplicate what's in 'classes' ?
    def freshmeths = list.empty
    for (moduleObject.value) do { val->
        if (val.isClass) then {
            addFreshMethod (val) to (freshmeths) for (gct)
        }
    }
    gct.at "fresh-methods" put(freshmeths)
}

method addFreshMethod (val) to (freshlist) for (gct) is confidential {
    freshlist.push(val.nameString)
    def freshMethResult = val.body.last
    if (freshMethResult.isObject) then {
        def subScope = freshMethResult.scope
        gct.at "fresh:{val.nameString}" put (subScope.keysAsList)
    } elseif {freshMethResult.isCall} then {
        // we know that freshMethResult.value.isMember and
        // freshMethResult.value.nameString == "clone"
        def receiver = freshMethResult.value.in
        if ((receiver.nameString == "prelude").andAlso{
          freshMethResult.with.first.args.first.nameString == "self"}) then {
            gct.at "fresh:{val.nameString}" put(gct.at "public")
        } elseif {(receiver.nameString == "self")} then {
            gct.at "fresh:{val.nameString}" put(gct.at "public")
        } else {
            ProgrammingError.raise
                "unrecognized fresh method tail-call: {freshMethResult.pretty(0)}"
        }
    } else {
        ProgrammingError.raise
            "fresh method result of an unexpected kind: {freshMethResult.pretty(0)}"
    }
}

