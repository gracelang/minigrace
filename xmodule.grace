dialect "standard"
import "io" as io
import "sys" as sys
import "util" as util
import "ast" as ast
import "mirror" as mirror
import "errormessages" as errormessages
import "unixFilePath" as filePath
import "shasum" as shasum
import "regularExpression" as regex
import "buildinfo" as buildinfo
import "fastDict" as fd
import "intrinsic" as intrinsic

def CheckerFailure = Exception.refine "CheckerFailure"
def DialectError is public = Exception.refine "DialectError"
    //must correspond to what is defined in "dialect"

def gctCache = dictionary.empty
def keyCompare = { a, b -> a.key.compare(b.key) }

def currentDialect is public = object {
    var name is public := "standard"
    var moduleObject is public  // will be assigned if the dialect is loaded
    var hasParseChecker is public := false
    var hasAstChecker is public := false
    var hasAtStart is public := false
    var hasAtEnd is public := false
}
// TODO: this partially duplicates information in the moduleNode; integrate


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

def externalModules is public = fd.dictionary.empty  // dialect & direct imports
def transitiveModules = fd.dictionary.empty          // transitive imports

type ModuleRecord = interface {  // a record describing an external module
    path -> filePath.FilePath    // the path to the source file
    sha -> String                // the SHA256 checksum of the source
    jsFile -> filePath.FilePath  // the corresponding .js object file
    importsChecked -> Boolean    // have transitive imports been checked?
    checked                      // sets importsChecked
}

class filePath (fp) sha (sum) jsFile (jsf) checked (c) -> ModuleRecord {
    def path is public = fp     // the path to the source file
    def sha is public = sum     // the SHA256 checksum of the source
    def jsFile is public = jsf  // the corresponding .js object file
    var importsChecked is readable := c
                                // have transitive imports been checked?
    method checked { importsChecked := true }
}

method checkDialect(moduleObject) {
    def dialectNode = moduleObject.theDialect
    def dmn = dialectNode.moduleName
    currentDialect.name := dmn
    if (dmn == "none") then { return }
    util.log 50 verbose "checking dialect {dmn} used by module {moduleObject.name}"
    checkExternalModule(dialectNode)
    def dialectGct = gctDictionaryFor(dialectNode.moduleName)
    if (dialectGct.at "methods" ifAbsent { [] }.includes { each ->
          each.startsWith "thisDialect"
    }) then {
        util.log 50 verbose "loading dialect \"{dmn}\" for checkers."
        try {
            def dobj = mirror.loadModule(dialectNode.path)
            currentDialect.moduleObject := dobj
            if (mirror.reflect(dobj).methodNames.contains "thisDialect") then {
                def mths = mirror.reflect(dobj.thisDialect).methods
                for (mths) do { m ->
                    if (m.name == "parseChecker(_)") then {
                        currentDialect.hasParseChecker := true
                    }
                    if (m.name == "astChecker(_)") then {
                        currentDialect.hasAstChecker := true
                    }
                    if (m.name == "atEnd(_)") then {
                        currentDialect.hasAtEnd := true
                    }
                    if (m.name == "atStart(_)") then {
                        currentDialect.hasAtStart := true
                    }
                }
            }
        } catch { e:Exception ->
            util.setPosition(dialectNode.line, 1)
            e.printBacktrace
            errormessages.error "Dialect error: dialect \"{dmn}\" failed to load.\n{e}."
                atLine(dialectNode.line)
        }
    } else {
        util.log 50 verbose "no need to load dialect \"{dmn}\": it does not define `thisDialect`"
    }
}

method doParseCheck(moduleNode) {
    if (currentDialect.hasParseChecker.not) then { return }
    try {
        currentDialect.moduleObject.thisDialect.parseChecker(moduleNode)
    } catch { e:CheckerFailure | DialectError | errormessages.SyntaxError ->
        reportDialectError(e)
    } catch { e:Exception ->      // some unknown Grace exception
        printBacktrace (e) asFarAs "thisDialect.parseChecker"
        errormessages.error("Unexpected exception raised by parse checker for " ++
            "dialect '{currentDialect.name}'.\n{e.exception}: {e.message}")
    }
}

method doAstCheck(moduleNode) {
    if (currentDialect.hasAstChecker.not) then { return }
    try {
        currentDialect.moduleObject.thisDialect.astChecker(moduleNode)
    } catch { e:CheckerFailure | DialectError | errormessages.SyntaxError ->
        reportDialectError(e)
    } catch { e:Exception ->      // some unknown Grace exception
        printBacktrace (e) asFarAs "thisDialect.astChecker"
        errormessages.error("Unexpected exception raised by AST checker for " ++
            "dialect '{currentDialect.name}'.\n{e.exception}: {e.message}")
    }
}

method reportDialectError(ex) {
    match (ex.data)
      case { rs:RangeSuggestions ->
        errormessages.error "Dialect {currentDialect.name}: {ex.message}."
            atRange(rs)
            withSuggestions(rs.suggestions)
    } case { r:ast.Range ->  //  inlcudes ast.AstNode
        errormessages.error "Dialect {currentDialect.name}: {ex.message}."
            atRange(r)
    } case { p:ast.Position ->
        errormessages.error "Dialect {currentDialect.name}: {ex.message}."
            atPosition(p.line, p.column)
    } else {
        errormessages.error "Dialect {currentDialect.name}: {ex.message}."
            atLine(util.linenum)
    }
}

method printBacktrace(exceptionPacket) asFarAs (methodName) {
    def ex = exceptionPacket.exception
    def msg = exceptionPacket.message
    def lineNr = exceptionPacket.lineNumber
    def mod = exceptionPacket.moduleName
    if (lineNr == 0) then {
        io.error.write "{ex} in {mod}: {msg}\n"
    } else {
        io.error.write "{ex} on line {lineNr} of {mod}: {msg}\n"
    }
    def bt = exceptionPacket.backtrace
    while {bt.size > 0} do {
        def frameDescription = bt.pop
        io.error.write "  requested from {frameDescription}\n"
        if (frameDescription.contains(methodName)) then { return }
    }
}

method checkExternalModule(node) {
    // Used by identifierresolution to check that node, representing a
    // dialect or import statement, refers to a module that exisits.

    // Checks that node.moduleName can be found on node.path, and that a
    // compiled version exists; creates the compiled version if necessary.
    // If an existing, up-to-date, compiled version was found, then check
    // its imports; if we had to compile it, then the recursive compile has
    // already checked its imports.

    def moduleName = node.moduleName
    if (externalModules.containsKey(moduleName)) then {
        errormessages.syntaxError "multiple imports of {moduleName}"
              atRange (node.range)
    }
    if (intrinsic.inBrowser) then {
        if (compiledModuleExistsInBrowser(moduleName)) then {
            return
        } else {
            errormessages.error "Please \"Run\" module {moduleName} before importing it."
                atRange(node.range)
        }
    }
    util.log 50 verbose "checking module \"{moduleName}\" used by {util.modname}"
    def moduleInfo = findOrBuildCompiledModule(moduleName, node.path, node.range)
    externalModules.at (moduleName) put (moduleInfo)
    checkTransitiveImports(moduleInfo, node)
}

method compiledModuleExistsInBrowser(name) {
    native "js" code ‹
        if (typeof window[graceModuleName(var_name._value)] === "function") {
            return GraceTrue;
        } else {
            return GraceFalse;
        }›
}

method findOrBuildCompiledModule(moduleName, modulePath, sourceRange) -> ModuleRecord
      is confidential {
    // Returns a record desribing the compiled module for moduleName.
    // Creates the .js file if necessary.
    // modulePath is the whole string from the dialect or import, potentially
    // containing "/" characters; moduleName is the name after the final "/"

    transitiveModules.at(moduleName) ifAbsent {
        def graceFile = findGraceFile(modulePath) otherwise { m ->
            def rm = errormessages.readableStringFrom(m)
            errormessages.error "I can't find {modulePath}; tried {rm}."
                  atRange (sourceRange)
        }
        def sourceSHA = shasum.sha256OfFile(graceFile)
        def thisCompiler = buildinfo.gitgeneration
        def jsFileName = filePath.withBase(graceFile.base).setExtension ".js"
        def jsFile = findJsFile(jsFileName) suchThat { f ->
            file(f) createdBy(thisCompiler) withSHA(sourceSHA)
        } otherwise { m ->
            def rm = errormessages.readableStringFrom(m)
            util.log 50 verbose("I can't find {jsFileName} with SHA {sourceSHA} " ++
                  "compiled by {thisCompiler}; tried {rm}")
            def objectFile = compileModule (moduleName) inFile (graceFile)
                   atRange (sourceRange)
            if (objectFile.exists.not) then {
                errormessages.error("I just compiled {graceFile}, " ++
                      "but {objectFile} does not exist") atRange (sourceRange)
            }
            def newModuleRecord = filePath (graceFile) sha (sourceSHA) jsFile (objectFile) checked (true)
            transitiveModules.at(moduleName) put (newModuleRecord)
            return newModuleRecord
        }
        util.log 50 verbose "found compiled module \"{moduleName}\" in {jsFile}"
        def newModuleRecord = filePath (graceFile) sha (sourceSHA) jsFile (jsFile) checked (false)
        transitiveModules.at(moduleName) put (newModuleRecord)
        newModuleRecord
    }
}

method findGraceFile (modulePath) otherwise (action) -> filePath.FilePath
      is confidential {
    var candidate := filePath.fromString(modulePath).setExtension ".grace"
    def directoryPrefix = candidate.directory
    if (directoryPrefix.startsWith "/") then {
        if (candidate.exists) then { return candidate }
        action.apply([candidate])
    }
    candidate.setDirectory(util.sourceDir ++ directoryPrefix)
    if (candidate.exists) then { return candidate }
    def rejects = list [ candidate ]
    def locations = filePath.split(sys.environ.at "GRACE_MODULE_PATH")
    locations.do { each ->
        candidate := candidate.copy.setDirectory(each ++ directoryPrefix)
        if (candidate.exists) then { return candidate }
        rejects.add(candidate)
    }
    action.apply(rejects)
}

method findJsFile (jsFileName:filePath.FilePath) suchThat (p:Predicate1) otherwise (action) {
    // returns a file with the same base as jsFileName, on a directory in
    // util.sourceDir, util.outDir, or GRACE_MODULE_PATH

    if ((jsFileName.exists) && {p.apply(jsFileName)}) then { return jsFileName }
    var candidate := jsFileName.copy
    def directoryPrefix = candidate.directory

    candidate.setDirectory(util.outDir)
    if ((candidate.exists) && {p.apply(candidate)}) then { return candidate }
    def rejects = list [ candidate ]

    candidate := candidate.copy.setDirectory(util.outDir ++ directoryPrefix)
    if ((candidate.exists) && {p.apply(candidate)}) then { return candidate }
    rejects.add(candidate)

    if (util.sourceDir ≠ util.outDir) then {
        candidate := candidate.copy.setDirectory(util.sourceDir ++ directoryPrefix)
        if ((candidate.exists) && {p.apply(candidate)}) then { return candidate }
        rejects.add(candidate)
    }
    def locations = filePath.split(sys.environ.at "GRACE_MODULE_PATH")
    locations.do { each ->
        if (directoryPrefix ≠ "./") then {
            candidate := candidate.copy.setDirectory(each ++ directoryPrefix)
            if ((candidate.exists) && {p.apply(candidate)}) then { return candidate }
            rejects.add(candidate)
        }
        candidate := candidate.copy.setDirectory(each)
        if ((candidate.exists) && {p.apply(candidate)}) then { return candidate }
        rejects.add(candidate)
    }
    action.apply(rejects)
}

method file(f) createdBy(thisCompiler) withSHA(sourceSHA) {
    def jsStream = io.open(f, "r")
    try {
        def originalSHA = extract "sha256" from (jsStream)
        if (originalSHA ≠ sourceSHA) then { return false }
        def usedCompiler = extract "minigraceGeneration" from (jsStream)
        if (usedCompiler ≠ thisCompiler) then { return false }
        return true
    } finally {
        jsStream.close
    }
}

method extract (item) from (stream) {
    var maxLines := 10  // look in first 10 lines of js file
    def sought = regex.fromString "gracecode_.*_{item} = \"(\\w+)\""
    while { stream.eof.not && (maxLines > 0) } do {
        def line = stream.getline
        def matches = sought.allMatches(line)
        if (matches.isEmpty.not) then {
            return matches.first.group 1
        }
        maxLines := maxLines - 1
    }
    EnvironmentException.raise "Can't find {item} in JS file {stream.pathname}"
}

method checkTransitiveImports(moduleRecord, node) {
    if (moduleRecord.importsChecked) then { return }
    moduleRecord.checked
    def modulePath = moduleRecord.path
    def moduleName = modulePath.base
    def gctDict = gctDictionaryFor(moduleName)
    util.log 50 verbose "checking module \"{moduleName}\""
    def importedModules = gctDict.at "modules" // includes the dialect
    def m = util.modname
    importedModules.do { eachImport ->
        if (m == eachImport) then {
            errormessages.error("cyclic import detected — '{m}' is imported "
                ++ "by '{eachImport}', which is imported by '{m}'")
                atRange(node.range)
        }
        if (intrinsic.inBrowser) then {
            if (compiledModuleExistsInBrowser(eachImport)) then {
                return
            } else {
                errormessages.error "Please \"Run\" module {eachImport} before importing it."
                    atRange(node.range)
            }
        }
        def moduleInfo = findOrBuildCompiledModule(eachImport, eachImport, node.range)
        checkTransitiveImports(moduleInfo, node)
    }
}

method compileModule (nm) inFile (sourceFile) atRange (sourceRange) is confidential {
    // Compiles module with name nm located in sourceFile.
    // Returns the filePath containing the compiled code.

    if (util.recurse.not) then {
        errormessages.error "Please compile module {nm} before using it."
            atRange (sourceRange)
    }
    if (intrinsic.inBrowser) then {
        errormessages.error "Please \"Run\" module {nm} before using it."
            atRange (sourceRange)
    }
    var cmd
    if (sys.argv.first.contains "/") then {
        cmd := io.realpath(sys.argv.first)
    } else {
        cmd := io.realpath "{sys.execPath}/{sys.argv.first}"
    }
    cmd := "\"{cmd}\""
    cmd := cmd.replace "compiler-js" with "minigrace-js"
    if (util.verbosity != util.defaultVerbosity) then {
        cmd := cmd ++ " --verbose {util.verbosity}"
    }
    var outputDirectory
    if (util.dirFlag) then {
        cmd := cmd ++ " --dir " ++ util.outDir
        outputDirectory := util.outDir
    } else {
        outputDirectory := sourceFile.directory
    }
    if (false != util.vtag) then {
        cmd := cmd ++ " --vtag " ++ util.vtag
    }
    if (false != util.gracelibPath) then {
        cmd := cmd ++ " --gracelib " ++ util.gracelibPath
    }
    cmd := cmd ++ util.commandLineExtensions
    if (util.defaultTarget ≠ util.target) then {
        cmd := cmd ++ " --target {util.target}"
    }
    cmd := cmd ++ " --make \"{sourceFile}\""
    util.log (util.defaultVerbosity - 1) verbose "executing sub-compile of {sourceFile}"
    def exitCode = io.spawn("bash", ["-c", cmd]).status
    if (exitCode != 0) then {
        errormessages.error "Failed to compile imported module {nm} ({exitCode})."
            atRange (sourceRange)
    }
    filePath.withDirectory(outputDirectory) base(sourceFile.base) extension ".js"
}

method gctDictionaryFor(moduleName) {
    // used by identifierresolution to discover the names defined by moduleName,
    // as well as here (in xmodule) to find transitive imports of moduleName

    gctCache.at(moduleName) ifAbsent {
        gctDictionaryFrom(extractGctFor(moduleName)) for(moduleName)
    }
}

method gctDictionaryFrom(gctList) for(moduleName) is confidential {
    def gctDict = dictionary.empty
    var key := ""
    for (gctList) do { line ->
        if (line.size > 0) then {
            if (line.first ≠ " ") then {
                key := line.substringFrom 1 to (line.size-1)  // dropping the ":"
                gctDict.at(key) put(list [ ])
            } else {
                gctDict.at(key).addLast(line.substringFrom 2)
            }
        }
    }
    gctCache.at(moduleName) put(gctDict)
    gctDict
}

method extractGctFor(moduleName) is confidential {
    // Extracts the gct information for moduleName from an external resource
    // Returns the gct information as a collection of Strings.

    if (intrinsic.inBrowser) then { return extractGctFromCache(moduleName) }
    def jsFile = transitiveModules.at(moduleName).jsFile
    try {
        extractGctFor(moduleName) fromJsFile(jsFile)
    } catch {ex:EnvironmentException ->
        EnvironmentException.raise ("failed to find gct for {moduleName} " ++
                "in {jsFile}")
    }
}

method extractGctFor(moduleName) fromJsFile(filepath) is confidential {
    // Looks in filepath, containing the compiled code for moduleName.
    // Returns the gct information as a collection of Strings.

    def jsStream = io.open(filepath, "r")
    var maxLines := 10  // look in first 10 lines of js file
    while { jsStream.eof.not && (maxLines > 0) } do {
        def line = jsStream.getline
        if (line.startsWith "  gctCache[") then {
            jsStream.close
            return splitJsString(line)
        }
        maxLines := maxLines - 1
    }
    jsStream.close
    EnvironmentException.raise "Can't find gct string in JS file {filepath}"
}

method splitJsString(jsLine:String) is confidential {
    // jsLine is a line of javascript like
    //   gctCache["xmodule"] = "objects:\nconfidential:\n CheckerFailure\n ..."
    // Evaluates the string on the rhs of the = sign, splits into lines,
    // and returns a (Grace) list containing those lines as (Grace) strings.
    native "js" code ‹
        var arg = var_jsLine._value;
        var keyStr = "\"] = ";
        var keyStart = arg.indexOf(keyStr);
        var stringLit = arg.substr(keyStart + keyStr.length);
        var gctString = eval(stringLit);
        var jsStringArray = gctString.split("\n");
        result = GraceList([]);
        for (var ix = 0, len = jsStringArray.length ; ix < len; ix++) {
            callmethod(result, "add(1)", [1],
                new GraceString (jsStringArray[ix]));
        }›
}

method extractGctFromCache(module) {
    // When running in the browser, returns a Grace list containing
    // the contents of the cached gct information for module

    native "js" code ‹var gctString = gctCache[var_module._value];
        var jsStringArray = gctString.split("\n");
        result = GraceList([]);
        for (var ix = 0, len = jsStringArray.length ; ix < len; ix++) {
            callmethod(result, "add(1)", [1],
                new GraceString (jsStringArray[ix]));
        }›
}

method writeGCT(modname, dict) {
    if (util.extensions.containsKey "gctfile") then {
        def fp = io.open("{util.outDir}{modname}.gct", "w")
        list (dict.bindings).sortBy(keyCompare).do { b ->
            fp.write "{b.key}:\n"
            b.value.do { v -> fp.write " {v}\n" }
        }
        fp.close
    }
    gctCache.at(modname) put(dict)
}

method gctAsString(gctDict) {
    var str := ""
    list (gctDict.bindings).sortBy(keyCompare).do { b ->
        str := str ++ "{b.key}:\n"
        b.value.do { v -> str := str ++ " {v}\n" }
    }
    str
}

