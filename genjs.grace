#pragma ExtendedLineups
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "unixFilePath" as unixFilePath
import "xmodule" as xmodule
import "mirrors" as mirrors
import "errormessages" as errormessages

var indent := ""
var verbosity := 30
var pad1 := 1
var auto_count := 0
var constants := []
var output := []
var usedvars := []
var declaredvars := []
var bblock := "entry"

var values := []
var outfile
var modname := "main"
var runmode := "build"
var buildtype := "bc"
var inBlock := false
var compilationDepth := 0
def importedModules = emptySet
def topLevelTypes = emptySet
def imports = util.requiredModules
var debugMode := false
var priorLineSeen := 0
var priorLineComment := ""
var priorLineEmitted := 0
var emitTypeChecks := true
var emitUndefinedChecks := true
var emitArgChecks := true
var emitPositions := true
var requestCall := "callmethodChecked"
var bracketConstructor := "Lineup"
var emod        // the name of the module being compiled, escaped
                // so that it is a legal identifier

/////////////////////////////////////////////////////////////
//
//  Utility methods
//
/////////////////////////////////////////////////////////////

method increaseindent {
    indent := indent ++ "  "
}

method decreaseindent {
    if(indent.size <= 2) then {
        indent := ""
    } else {
        indent := indent.substringFrom(1)to(indent.size - 2)
    }
}

method formatModname(name) {
    "gracecode_" ++ escapeident (basename(name))
}

method basename(filepath) {
    var bnm := ""
    for (filepath) do {c->
        if (c == "/") then {
            bnm := ""
        } else {
            bnm := bnm ++ c
        }
    }
    bnm
}

method outerProp(node) { "outer_" ++ emod ++ "_" ++ node.line }

method noteLineNumber(n)comment(c) {
    // remember the current line number, so that it can be generated if needed
    priorLineSeen := n
    priorLineComment := c
}

method forceLineNumber(n)comment(c) {
    // force the generation of code that sets the line number.
    // Used at the start of a method
    noteLineNumber(n)comment(c)
    if (emitPositions) then {
        output.push "{indent}setLineNumber({priorLineSeen});    // {priorLineComment}"
    }
    priorLineEmitted := priorLineSeen
}

method out(s) {
    // output code, but first output code to set the line number
    if (emitPositions && (priorLineSeen != priorLineEmitted)) then {
        output.push "{indent}setLineNumber({priorLineSeen});    // {priorLineComment}"
        priorLineEmitted := priorLineSeen
    }
    output.push(indent ++ s)
    return done
}

method outUnnumbered(s) {
    // output code that does not correspond to any source line
    output.push(indent ++ s)
}

method escapeident(vn) {
    var nm := ""
    for (vn) do {c->
        var o := c.ord
        if (((o >= 97 ) && (o <= 122)) || ((o >= 65) && (o <= 90))
            || ((o >= 48) && (o <= 57))) then {
            nm := nm ++ c
        } else {
            nm := nm ++ "__" ++ o ++ "__"
        }
    }
    nm
}
method escapestring(s) {
    var os := ""
    for (s) do {c->
        if (c == "\"") then {
            os := os ++ "\\\""
        } elseif { c == "\\" } then {
            os := os ++ "\\\\"
        } elseif { c == "\n" } then {
            os := os ++ "\\n"
        } elseif { (c.ord < 32) || (c.ord > 126) } then {
            var uh := util.hex(c.ord)
            while {uh.size < 4} do {
                uh := "0" ++ uh
            }
            os := os ++ "\\u" ++ uh
        } else {
            os := os ++ c
        }
    }
    os
}
method varf(vn) {
    "var_" ++ escapeident(vn)
}
method uidWithPrefix(str) {
    def myc = auto_count
    auto_count := auto_count + 1
    str ++ myc
}

/////////////////////////////////////////////////////////////
//
//  Compilation methods for AST nodes
//
/////////////////////////////////////////////////////////////

method compilearray(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    var r
    var vals := []
    for (o.value) do {a ->
        r := compilenode(a)
        vals.push(r)
    }
    out "var array{myc} = new {bracketConstructor}({vals});"
    o.register := "array" ++ myc
}
method compilemember(o) {
    // Member in value position is actually a nullary method call.
    o.generics := false     // because they are compiled wrongly
    compilecall(o)
}
method compileobjouter(o, outerRef) is confidential {
    def outerPropName = outerProp(o)
    out "this.closureKeys = this.closureKeys || [];"
    out "this.closureKeys.push(\"{outerPropName}\");"
    out "this.{outerPropName} = {outerRef};"
}
method compileobjtypedec(o, selfr) {
    def tName = escapeident(o.nameString)
    if (o.value.kind == "typeliteral") then {o.value.name := tName }
    def val = compilenode(o.value)
    out "{selfr}.data.{tName} = {val};"
}
method compileobjdefdec(o, selfr) {
    def val = compilenode(o.value)
    def oName = o.name.value
    def nm = escapeident(oName)
    out "{selfr}.data.{nm} = {val};"
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                noteLineNumber(o.line)comment("typecheck in compileobjdefdec")
                def nm_t = compilenode(o.dtype)
                def typeDesc = o.dtype.toGrace 0.quoted
                out "if (!Grace_isTrue(callmethod({nm_t}, \"match(1)\", [1], {val})))"
                out "    raiseTypeError("
                out "      \"value of def {escapestring(oName)} is not of type {typeDesc}\","
                out "      {nm_t}, {val});"
            }
        }
    }
}
method compileobjvardec(o, selfr) {
    if (false == o.value) then { return }
    def val = compilenode(o.value)
    def oName = o.name.value
    def nm = escapeident(oName)
    out "{selfr}.data.{nm} = {val};"
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                if (val == "undefined") then {
                    return true
                }
                noteLineNumber(o.line)comment("typecheck in compileobjvardec")
                def nm_t = compilenode(o.dtype)
                def typeDesc = o.dtype.toGrace 0.quoted
                out "if (!Grace_isTrue(callmethod({nm_t}, \"match(1)\", [1], {val})))"
                out "    raiseTypeError("
                out "      \"value of def {escapestring(oName)} is not of type {typeDesc}\","
                out "      {nm_t}, {val});"
            }
        }
    }
}

method create (kind) field (o) in (objr) {
    // compile code that creates a field in `this`, the object under construction
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring(o.name.value)
    var nmi := escapeident(o.name.value)
    out "{objr}.data.{nmi} = undefined;"
    out "var reader_{nmi}{myc} = function() \{  // reader method {nm}"
    out "    return this.data.{nmi};"
    out "};"
    out "reader_{nmi}{myc}.is{kind.capitalized} = true;"
    if (o.isReadable.not) then {
        out "reader_{nmi}{myc}.confidential = true;"
    }
    out "{objr}.methods[\"{nm}\"] = reader_{nmi}{myc};"
    if (kind == "var") then {
        out "var writer_{nmi}{myc} = function(argcv, n) \{   // writer method {nm}:=(_)"
        out "    this.data.{nmi} = n;"
        out "    return GraceDone;"
        out "\};"
        if (o.isWritable.not) then {
            out "writer_{nmi}{myc}.confidential = true;"
        }
        out "{objr}.methods[\"{nm}:=(1)\"] = writer_{nmi}{myc};"
    }
}

method installLocalAttributesOf(o) into (objr) {
    var mutable := false

    for (o.body) do { e ->
        if (e.kind == "method") then {
            compilemethod(e, objr)
        } elseif { e.kind == "vardec" } then {
            create "var" field (e) in (objr)
            mutable := true
        } elseif { e.kind == "defdec" } then {
            create "def" field (e) in (objr)
        } elseif { e.kind == "typedec" } then {
            create "type" field (e) in (objr)
        }
    }
    if (mutable) then {
        out "{objr}.mutable = true;"
    }
}

method compileInitialization(o, selfr) {
    o.body.do { e ->
        if (e.kind == "method") then {
        } elseif { e.kind == "vardec" } then {
            compileobjvardec(e, selfr)
        } elseif { e.kind == "defdec" } then {
            compileobjdefdec(e, selfr)
        } elseif { e.kind == "typedec" } then {
            compileobjtypedec(e, selfr)
        } elseif { e.kind == "object" } then {
            compileobject(e, selfr)
        } else {
            compilenode(e)
        }
    }
}

method compileBuildAndInitFunctions(o) inMethod (methNode) {
    // o is an objectNode.  In the compiled code, `this` references the current
    // object, which will become the outer object of `selfr`, the object here
    // being constructed

    var origInBlock := inBlock
    inBlock := false

    if (o.register.isEmpty) then {
        ProgrammingError.raise "unset selfr in compileBuildAndInitFunctions"
    }
    def selfr = o.register
    def inheritsStmt = o.superclass
    var params := ""
    var typeParams := ""
    if (false != methNode) then {
        params := paramlist(methNode)
        typeParams := typeParamlist(methNode)
    }
    out "var {selfr}_build = function(ignore{params}, outerObj, aliases, exclusions{typeParams}) \{"
        // At execution time, `this` will be the object under construction.
        // `outerObj` will be the current object, which
        // will become the `outer` of the object under construction.
        // `aliases` and `exclusions` are JS arrays of aliases and method names,
        // ultimately from an `inherit` statement.
    increaseindent
    compileobjouter(o, "outerObj")
    if (false != inheritsStmt) then {
        compileInherit(inheritsStmt) forClass (o.nameString)
    }
    o.usedTraits.do { t ->
        compileUse(t) in (o)
    }
    installLocalAttributesOf(o) into "this"
    out "for (var aix = 0, aLen = aliases.length; aix < aLen; aix++) \{"
    out "    var oneAlias = aliases[aix];"
    out "    this.methods[oneAlias.newName] = this.methods[oneAlias.oldName];"
    out "};"
    out "for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) \{"
    out "    var exMeth = exclusions[eix];"
    out "    delete this.methods[exMeth];"
    out "};"
    decreaseindent
    out "\};"
    out "var {selfr}_init = function(ignore{params}{typeParams}) \{"
        // At execution time, `this` will be the object being initialized.
    increaseindent
    if (false != inheritsStmt) then {
        compileSuperInitialization(inheritsStmt)
    }
    compileInitialization(o, "this")
    decreaseindent
    out "\};"
    inBlock := origInBlock
    selfr
}
method compileobject(o, outerRef) {
    // compiles an object constructor.  Generates two JavaScript functions,
    // {o.register}_build, which creates the object and its methods and fields,
    // and {o.register}_init, which initializes the fields.
    // The object constructor itself is implemented by calling these functions
    // in sequence, _except_ inside a fresh method, where it may need
    // to add its contents to an existing object
    def myc = auto_count
    auto_count := auto_count + 1
    def selfr = "obj{myc}"
    o.register := selfr
    def objcon = compileBuildAndInitFunctions(o) inMethod (false)
    def objName = "\"" ++ o.name.quoted ++ "\""
    out "var {selfr} = emptyGraceObject({objName}, \"{modname}\", {o.line});"
    out "{objcon}_build.call({selfr}, null, {outerRef}, [], []);"
    out "{objcon}_init.call({selfr}, null);"
    selfr
}
method compileblock(o) {
    var origInBlock := inBlock
    inBlock := true
    def myc = auto_count
    def nParams = o.params.size
    auto_count := auto_count + 1
    out "var block{myc} = new GraceBlock(this, {o.line}, {nParams});"
    if (false != o.matchingPattern) then {
        def pat = compilenode(o.matchingPattern)
        out "block{myc}.pattern = {pat};"
    }
    var paramList := ""
    var paramTypes :=  [ ]
    var paramsAreTyped := false
    var first := true
    for (o.params) do { each ->
        def dType = each.decType
        paramTypes.push(compilenode(dType))
        if (dType != ast.unknownType) then {
            paramsAreTyped := true
        }
        if (first) then {
            paramList := varf(each.value)
            first := false
        } else {
            paramList := paramList ++ ", " ++ varf(each.value)
        }
    }
    if (paramsAreTyped && emitTypeChecks) then {
        out "block{myc}.paramTypes = {paramTypes};"
    }
    out "block{myc}.real = function({paramList}) \{"
    increaseindent
    var ret := "GraceDone"
    for (o.body) do {l->
        ret := compilenode(l)
    }
    out("return " ++ ret ++ ";")
    decreaseindent
    out("\};")
    o.register := "block" ++ myc
    inBlock := origInBlock
}
method compiletypedec(o) {
    def myc = auto_count
    def enclosing = o.scope.parent
    auto_count := auto_count + 1
    def tName = o.name.value
    out "// Type decl {tName}"
    declaredvars.push(escapeident(tName))
    if (o.value.kind == "typeliteral") then {o.value.name := tName }
    def val = compilenode(o.value)
    out "var {varf(tName)} = {val};"
    o.register := "type{myc}"
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(enclosing)],
            [o.name], ast.typeType) scope(enclosing))
    }
}
method compiletypeliteral(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def escName = escapestring(o.name)
    out("//   Type literal ")
    out("var type{myc} = new GraceType(\"{escName}\");")
    for (o.methods) do {meth->
        def mnm = escapestring(meth.nameString)
        out("type{myc}.typeMethods.push(\"{mnm}\");")
    }
    // TODO: types in the type literal
    o.register := "type{myc}"
}
method paramCounts(o) {
    def result = [ ]
    o.signature.do { part ->
        result.push(part.params.size)
    }
    result
}
method paramNames(o) {
    def result = [ ]
    o.signature.do { part ->
        part.params.do { param ->
            result.push(param.nameString)
        }
    }
    result
}
method typeParamNames(o) {
    if (false == o.typeParams) then { return [ ] }
    def result = [ ]
    o.typeParams.do { each ->
        result.push(each.nameString)
    }
    result
}
method hasTypedParams(o) {
    for (o.signature) do { part ->
        for (part.params) do { p->
            if (p.dtype != false) then {
                if ((p.dtype.value != "Unknown")
                    && ((p.dtype.kind == "identifier")
                        || (p.dtype.kind == "typeliteral"))) then {
                    return true
                }
            }
        }
    }
    return false
}

method compileMethodPreamble(o, funcName, name) withParams (p) {
    out "// method {name}     (line {o.line})"
    out "var {funcName} = function(argcv{p}) \{"
    increaseindent
    out "var returnTarget = invocationCount;"
    out "invocationCount++;"
}

method compileMethodPostamble(o, funcName, name) {
    decreaseindent
    out "\};    // end of method {name}"
    if (hasTypedParams(o)) then {
        compilemethodtypes(funcName, o)
    }
    if (o.isConfidential) then {
        out "{funcName}.confidential = true;"
    }
}

method compileParameterDebugFrame(o) {
    for (o.signature) do { part ->
        for (part.params) do { p ->
            def pName = p.nameString
            def varName = varf(pName)
            out "myframe.addVar(\"{escapestring(pName)}\","
            out "  function() \{return {varName};});"
        }
    }
}

method compileDefaultsForTypeParameters(o) {
    if (false == o.typeParams) then { return }
    out "// Start type parameters"
    o.typeParams.do { g->
        def gName = varf(g.value)
        out "if ({gName} === undefined) {gName} = var_Unknown;"
    }
    if (emitArgChecks) then {
        out "var numArgs = arguments.length;"
        def np = o.numParams
        def ntp = o.typeParams.size
        def s = if (ntp == 1) then { "" } else { "s" }
        out "if ((numArgs > {np}) && (numArgs < {np + ntp})) \{"
        out "    throw new GraceExceptionPacket(RequestErrorObject, "
        out "        new GraceString(\"method {o.canonicalName} expects {ntp} type parameter{s}, but was given \" + (numArgs - {np})));"
        out "\}"
    }
    out "// End type parameters"
}

method compileArgumentTypeChecks(o) {
    out "setModuleName(\"{modname}\");"     // do this before noteLineNumber
    if (emitTypeChecks && o.needsArgChecks) then {
        out "// Start argument type-checks"
        def isMultpart = (o.signature.size > 1)
        for (o.signature.indices) do { partnr ->
            var part := o.signature.at(partnr)
            def partBit = if (isMultpart) then {"to `{part.name}` "} else {""}
            var paramnr := 0
            for (part.params) do { p ->
                paramnr := paramnr + 1
                def pName = p.value
                def pVar = varf(pName)
                if (emitTypeChecks && (p.dtype != false)) then {
                    noteLineNumber(o.line)comment("argument check in compilemethod")
                    def dtype = compilenode(p.dtype)
                    def typeDesc = p.dtype.toGrace 0.quoted
                    out("if (!Grace_isTrue(callmethod({dtype}, \"match(1)\"," ++
                        "  [1], {pVar})))")
                    out "    raiseTypeError(\"in request of `{o.canonicalName}`, \" +"
                    out "      \"argument {paramnr}{partBit} is not of type \" +"
                    out "      \"{typeDesc}\", {dtype}, {pVar});"
                }
            }
        }
        out "// End argument type-checks"
    }
}
method debugModePrefix {
    if (debugMode) then {
        out "stackFrames.push(myframe);"
        out("try \{")
        increaseindent
    }
}

method debugModeSuffix {
    if (debugMode) then {
        decreaseindent
        out "\} finally \{"
        out "    stackFrames.pop();"
        out "\}"
    }
}
method compileMethodBodyWithTypecheck(o) {
    def ret = compileMethodBody(o)
    def ln = if (o.body.isEmpty) then { o.line } else { o.resultExpression.line }
    compileResultTypeCheck(o, ret) onLine (ln)
    ret
}

method compileFreshMethod(o, selfObj) {
    // compiles the methodNode o in a way that can be used with an `inherit`
    // statement. _Two_ methods are generated: one to build the new object,
    // and one to initialize it.
    // The final (result) expression of method o may be of three kinds:
    //   (1) an object constructor,
    //   (2) a request on a class (which may have its own initialization),
    //   (3) a request of a clone or a copy (which has no initialization).

    def selfr = uidWithPrefix "freshFun"
    var ret := "GraceDone"
    def resultExpr = o.resultExpression
    if (resultExpr.isObject) then {     // case (1)
        o.body.removeLast    // remove tail object
        compileMethodBody(o)
        o.body.addLast(resultExpr)     // put resultExpr back
        // we have to compileBuildAndInitFunctions(resultExpr) again, even though
        // this was already done as part of compiling the stale version of this
        // method.  That's because the previous version is not in scope.
        compileBuildAndInitFunctions(resultExpr) inMethod (o)
        compileBuildMethodFromObjectConstructor(o, resultExpr, selfObj)
        compileInitMethodFromObjectConstructor(o, resultExpr)
    } elseif { resultExpr.isFresh } then {  // case (2)
        o.body.removeLast    // remove tail object
        compileMethodBody(o)
        o.body.addLast(resultExpr)     // put resultExpr back
        util.setPosition(resultExpr.line, resultExpr.linePos)
        def obj = ast.identifierNode.new("inheritingObject", false)
        def als = ast.identifierNode.new("aliases", false)
        def exs = ast.identifierNode.new("exclusions", false)
        resultExpr.with.addLast(ast.requestPart.request "$object"
                        withArgs [ obj, als, exs ] )
        def objcon = compilenode(resultExpr)
        ret := "inheritingObject"
        compileResultTypeCheck(o, ret) onLine (resultExpr.line)
    } else {    // case (3)
        compileBuildMethodFromClone(o)
        compileNullInitMethod(o)
    }
    return ret
}

method compileMethodBody(methNode) {
    // compiles the body of method represented by methNode.
    // answers the register containing the result.

    var ret := "GraceDone"
    methNode.body.do { nd -> ret := compilenode(nd) }
    ret
}

method compileResultTypeCheck(o, ret) onLine (lineNr) {
    if (emitTypeChecks && (false ≠ o.dtype)) then {
        def dtype = compilenode(o.dtype)
        def typeDesc = o.dtype.toGrace 0.quoted
        noteLineNumber (lineNr) comment "return value"
        out "if (!Grace_isTrue(callmethod({dtype}, \"match(1)\", [1], {ret})))"
        out "    raiseTypeError("
        out "        \"result of method {o.canonicalName} does not have type\" + "
        out "        \"{typeDesc}.\", {dtype}, {ret});"
    }
}

method stringList(l) {
    // answers the contents of the collection l quoted and between brackets.
    var res := "["
    l.do { nm ->  res := res ++ "\"" ++ nm.quoted ++ "\""}
        separatedBy { res := res ++ ", " }
    res ++ "]"
}

method compileMetadata(o, funcName, name) {
    out "{funcName}.paramCounts = {paramCounts(o)};"
    out "{funcName}.paramNames = {stringList(paramNames(o))};"
    out "{funcName}.typeParamNames = {stringList(typeParamNames(o))};"
    out "{funcName}.definitionLine = {o.line};"
    out "{funcName}.definitionModule = \"{modname.quoted}\";"
}

method compilemethod(o, selfobj) {
    def oldusedvars = usedvars
    def olddeclaredvars = declaredvars
    def canonicalMethName = o.canonicalName
    def funcName = uidWithPrefix "func"
    o.register := funcName
    def isSimpleAccessor = (o.body.size == 1) && {o.body.first.isIdentifier}
    usedvars := []
    declaredvars := []
    def name = escapestring(o.nameString)
    compileMethodPreamble (o, funcName, canonicalMethName)
        withParams (paramlist(o) ++ typeParamlist(o))
    if (debugMode && isSimpleAccessor.not) then {
        out "var myframe = new StackFrame(\"{name}\");"
    }
    if (debugMode && isSimpleAccessor.not) then {
        compileParameterDebugFrame(o)
    }
    compileDefaultsForTypeParameters(o)
    compileArgumentTypeChecks(o)
    if (isSimpleAccessor) then {
        out "return {compilenode(o.body.first)};  // simple accessor"
    } else {
        debugModePrefix
        out "return {compileMethodBodyWithTypecheck(o)};"
        debugModeSuffix
    }
    compileMethodPostamble(o, funcName, canonicalMethName)
    usedvars := oldusedvars
    declaredvars := olddeclaredvars
    compileMetadata(o, funcName, name)
    out "{selfobj}.methods[\"{name}\"] = {funcName};"
    if (o.isFresh) then {
        compileFreshMethod(o, selfobj)
    }
}
method compileBuildMethodFromObjectConstructor(methNode, objNode, outerRef) {
    def funcName = uidWithPrefix "func"
    def name = escapestring(methNode.nameString ++ "$build(3)")
    def cName = methNode.canonicalName ++ "$build(_,_,_)"
    def params = paramlist(methNode)
    def typeParams = typeParamlist(methNode)
    compileMethodPreamble (methNode, funcName, cName)
        withParams (params ++ ", inheritingObject, aliases, exclusions" ++ typeParams)
    out "{objNode.register}_build.call(inheritingObject, null{params}, {outerRef}, aliases, exclusions{typeParams});"
    compileMethodPostamble(methNode, funcName, cName)
    out "this.methods['{name}'] = {funcName};"
    compileMetadata(methNode, funcName, name)
}
method compileInitMethodFromObjectConstructor(methNode, objNode) {
    def funcName = uidWithPrefix "func"
    def name = escapestring(methNode.nameString ++ "$init(1)")
    def cName = methNode.canonicalName ++ "$init(_)"
    compileMethodPreamble(methNode, funcName, cName)
        withParams "{paramlist(methNode)}, ouc{typeParamlist(methNode)}"
    if (debugMode) then {
        compileParameterDebugFrame(methNode)
    }
    compileDefaultsForTypeParameters(methNode)
    compileArgumentTypeChecks(methNode)
    debugModePrefix
    out "{objNode.register}_init.call(ouc, null{paramlist(methNode)}{typeParamlist(methNode)});"
    debugModeSuffix
    compileMethodPostamble(methNode, funcName, cName)
    out "this.methods['{name}'] = {funcName};"
    compileMetadata(methNode, funcName, name)
}
method compileBuildMethodFromClone(methNode) {
    // The build method will have three additional parameters:
    // `inheritingObject`, `aliases`, and `exclusions`.  These
    // will be passed to it by the `inherit` statement.

    def funcName = uidWithPrefix "func"
    def name = escapestring(methNode.nameString ++ "$build(3)")
    compileMethodPreamble(methNode, funcName, methNode.canonicalName ++ "$build(_,_,_)")
        withParams( paramlist(methNode) ++ ", var_ouc, var_aliases, var_exclusions")
    def tempObj = compileMethodBody(methNode)  // TODO: optimize this by  re-using the
    compileAliasesFrom (tempObj)               // components of tempObj, rather than copying
    copyDownMethodsFrom (tempObj) to "var_ouc" excludingDynamically "var_exclusions"
    copyDownDataFrom (tempObj) to "var_ouc"
    compileMethodPostamble(methNode, funcName, methNode.nameString ++ "$build(_,_,_)")
    out "this.methods['{name}'] = {funcName};"
    compileMetadata(methNode, funcName, name)
}
method compileNullInitMethod(methNode) {
    // An init method must exist for each fresh method; this one does nothing

    def name = escapestring(methNode.nameString ++ "$init(1)")
    out "this.methods['{name}'] = function() \{ \};"
}

method paramlist(o) {
    // a comma-prefixed and separated list of the parameters of
    // described by methodnode o.
    var result := ""
    o.signature.do { part ->
        part.params.do { param ->
            result := result ++ ", {varf(param.nameString)}"
        }
    }
    result
}
method typeParamlist(o) {
    // a comma-prefixed and separated list of the type parameters of
    // described by methodnode o.

    var result := ""
    if (false ≠ o.typeParams) then {
        o.typeParams.do { each ->
            result := result ++ ", {varf(each.nameString)}"
        }
    }
    result
}
method compilemethodtypes(func, o) {
    out("{func}.paramTypes = [];")
    var pi := 0
    for (o.signature) do { part ->
        for (part.params) do {p->
            // We store information for static top-level types only:
            // absent information is treated as Unknown (and unchecked).
            if (false != p.dtype) then {
                if (((p.dtype.kind == "identifier") && {p.dtype.value != "Unknown"})
                    || (p.dtype.kind == "typeliteral")) then {
                    def typeid = escapeident(p.dtype.value)
                    if (topLevelTypes.contains(typeid)) then {
                        out("{func}.paramTypes.push(["
                            ++ "type_{typeid}, \"{escapestring(p.nameString)}\"]);")
                    } else {
                        out("{func}.paramTypes.push([]);")
                    }
                } else {
                    out("{func}.paramTypes.push([]);")
                }
            } else {
                out("{func}.paramTypes.push([]);")
            }
            pi := pi + 1
        }
    }
}
method compileif(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    outUnnumbered "var if{myc} = GraceDone;"
    out("if (Grace_isTrue(" ++ compilenode(o.value) ++ ")) \{")
    var tret := "undefined"
    var fret := "undefined"
    increaseindent
    def thenList = o.thenblock.body
    for (thenList) do { l->
        tret := compilenode(l)
    }
    if (tret != "undefined") then {
        out("if" ++ myc ++ " = " ++ tret ++ ";")
    }
    decreaseindent
    def elseList = o.elseblock.body
    if (elseList.size > 0) then {
        out("\} else \{")
        increaseindent
        for (elseList) do { l->
            fret := compilenode(l)
        }
        if (fret != "undefined") then {
            out("if" ++ myc ++ " = " ++ fret ++ ";")
        }
        decreaseindent
    }
    out("\}")
    o.register := "if" ++ myc
}
method compileidentifier(o) {
    var name := o.value
    if (name == "super") then {
        def sugg = errormessages.suggestion.new
        sugg.replaceRange(o.linePos, o.linePos + 4)with "self" onLine(o.line)
        errormessages.syntaxError("'super' can be used only to the "
                ++ "left of the . in a method request.")
            atRange(
                o.line, o.linePos, o.linePos + 4)withSuggestion(sugg)
    }
    if (name == "self") then {
        o.register := "this"
    } elseif { name == "..." } then {
        o.register := "ellipsis"
    } elseif { name == "module()object" } then {
        o.register := "importedModules[\"{modname}\"]"
    } elseif { name == "true" } then {
        o.register := "GraceTrue"
    } elseif { name == "false" } then {
        o.register := "GraceFalse"
    } else {
        usedvars.push(name)
        o.register := varf(name)
    }
}
method compilebind(o) {
    def lhs = o.dest
    if (lhs.isIdentifier) then {
        def val = compilenode(o.value)
        def nm = lhs.value
        usedvars.push(nm)
        out "{varf(nm)} = {val};"
        o.register := "GraceDone"
    } else {
        ProgrammingError.raise "bindNode {o} does not bind an indentifer"
    }
}
method compiledefdec(o) {
    def currentScope = o.scope
    def nm = if (o.name.kind == "generic") then {
        o.name.value.value
    } else {
        o.name.value
    }
    def var_nm = varf(nm)
    declaredvars.push(nm)
    if (debugMode) then {
        out "myframe.addVar(\"{escapestring(nm)}\", function() \{return {varf(nm)}});"
    }
    def val = compilenode(o.value)
    out "var {var_nm} = {val};"
    if (compilationDepth == 1) then {
        // this def is at top level, and not inside a block or method
        if (o.isReadable) then {
            util.setPosition(o.line, o.linePos)
            compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],
                [o.name], false) scope(currentScope))
            out("this.methods[\"{nm}\"].debug = \"def\";")
        }
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                noteLineNumber(o.line)comment("type check for defdec")
                def nm_t = compilenode(o.dtype)
                def typeDesc = o.dtype.toGrace 0.quoted
                out "if (!Grace_isTrue(callmethod({nm_t}, \"match(1)\", [1], {var_nm})))"
                out "    raiseTypeError("
                out "      \"value of def {nm} is not of type {typeDesc}\","
                out "      {nm_t}, {var_nm});"
            }
        }
    }
    o.register := "GraceDone"
}
method compilevardec(o) {
    def currentScope = o.scope
    def nm = if (o.name.kind == "generic") then {
        o.name.value.value
    } else {
        o.name.value
    }
    def var_nm = varf(nm)
    declaredvars.push(nm)
    var val := o.value
    if (false != val) then {
        val := compilenode(val)
        out "var {var_nm} = {val};"
    } else {
        val := "false"
        out "var {var_nm};"
    }
    if (debugMode) then {
        out "myframe.addVar(\"{escapestring(nm)}\", function() \{return {var_nm}});"
    }
    if (compilationDepth == 1) then {
        // this def is at top level, and not inside a block or method
        util.setPosition(o.line, o.linePos)
        if (o.isReadable) then {
            compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],
                [o.name], false) scope(currentScope))
            out("this.methods[\"{nm}\"].debug = \"var\";")
        }
        if (o.isWritable) then {
            def paramID = ast.identifierNode.new("rhs", false)
            compilenode(ast.methodNode.new(
                [ast.signaturePart.partName(o.nameString ++ ":=") params( [paramID] ) scope(currentScope)],
                [ast.bindNode.new(o.name, paramID)], false)  scope(currentScope))
        }
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                if (val != "false") then {
                    noteLineNumber(o.line)comment("type check for vardec")
                    def nm_t = compilenode(o.dtype)
                    def typeDesc = o.dtype.toGrace 0.quoted
                    out "if (!Grace_isTrue(callmethod({nm_t}, \"match(1)\", [1], {var_nm})))"
                    out "    raiseTypeError("
                    out "      \"initial value of var '{nm}' is not of type {typeDesc}\","
                    out "      {nm_t}, {var_nm});"
                }
            }
        }
    }
    o.register := "GraceDone"
}
method compiletrycatch(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def cases = o.cases
    def mainblock = compilenode(o.value)
    out("var cases{myc} = [];")
    for (cases) do {c->
        def e = compilenode(c)
        out("cases{myc}.push({e});")
    }
    var finally := "false"
    if (false != o.finally) then {
        finally := compilenode(o.finally)
    }
    noteLineNumber(o.line)comment("compiletrycatch")
    out("var catchres{myc} = tryCatch({mainblock},cases{myc},{finally});")
    out("setModuleName(\"{modname}\");")
    o.register := "catchres" ++ myc
}
method compilematchcase(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def cases = o.cases
    def matchee = compilenode(o.value)
    out("var cases{myc} = [];")
    for (cases) do {c->
        def e = compilenode(c)
        out("cases{myc}.push({e});")
    }
    var elsecase := "false"
    if (false != o.elsecase) then {
        elsecase := compilenode(o.elsecase)
    }
    noteLineNumber(o.line)comment("compilematchcase")
    out("var matchres{myc} = matchCase({matchee},cases{myc},{elsecase});")
    out("setModuleName(\"{modname}\");")
    o.register := "matchres" ++ myc
}
method compileop(o) {
    var right := compilenode(o.right)
    auto_count := auto_count + 1
    var rnm := "opresult"
    if (o.value == "*") then {
        rnm := "prod"
    }
    if (o.value == "/") then {
        rnm := "quotient"
    }
    if (o.value == "-") then {
        rnm := "diff"
    }
    if (o.value == "%") then {
        rnm := "modulus"
    }
    if ((o.left.kind == "identifier") && {o.left.value == "super"}) then {
        out("var " ++ rnm ++ auto_count ++ " = callmethodsuper(this"
            ++ ", \"" ++ escapestring(o.nameString) ++ "\", [1], " ++ right ++ ");")
    } else {
        var left := compilenode(o.left)
        auto_count := auto_count + 1
        if (emitArgChecks) then {
            out("var " ++ rnm ++ auto_count ++ " = callmethodChecked(" ++ left
                ++ ", \"" ++ escapestring(o.nameString) ++ "\", [1], " ++ right ++ ");")
        } else {
            out("var " ++ rnm ++ auto_count ++ " = callmethod(" ++ left
                ++ ", \"" ++ escapestring(o.nameString) ++ "\", [1], " ++ right ++ ");")
        }
    }
    o.register := rnm ++ auto_count
    auto_count := auto_count + 1
}
method compileArguments(o, args) {
    for (o.with) do { part ->
        for (part.args) do { p ->
            args.push(compilenode(p))
        }
    }
    if (false != o.generics) then {
        o.generics.do {g->
            args.push(compilenode(g))
        }
    }
}
method assembleArguments(args) {
    var result := ""
    for (args) do { arg ->
        result := result ++ ", " ++ arg
    }
    result
}
method partl(o) {
    var result := ""
    for (o.with.indices) do { partnr ->
        result := result ++ o.with.at(partnr).args.size
        if (partnr < o.with.size) then {
            result := result ++ ", "
        }
    }
    if (false != o.generics) then {
        result := result ++ ", {o.generics.size}"
    }
    result
}
method compileSuperRequest(o, args) {
    out "// call case 1: super request"
    def escapedName = escapestring(o.nameString)
    out("var {o.register} = callmethodsuper(this" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileOuterRequest(o, args) {
    out "// call case 2: outer request"
    compilenode(o.receiver)
    out "onSelf = true;";
    out("var {o.register} = {requestCall}({o.receiver.register}" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileSelfRequest(o, args) {
    out "// call case 4: self request"
    out "onSelf = true;"
    out("var {o.register} = {requestCall}(this" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compilePreludeRequest(o, args) {
    out "// call case 5: prelude request"
    out("var {o.register} = {requestCall}(var_prelude" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileOtherRequest(o, args) {
    out "// call case 6: other requests"
    def target = compilenode(o.receiver)
    if (o.isSelfRequest) then {
        out "onSelf = true;"
    }
    out("var {o.register} = {requestCall}({target}" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compilecall(o) {
    def calltemp = uidWithPrefix "call"
    o.register := calltemp
    var args := []
    compileArguments(o, args)
    def receiver = o.receiver
    if (receiver.isSuper) then {
        compileSuperRequest(o, args)
    } elseif { receiver.isOuter } then {
        compileOuterRequest(o, args)
    } elseif { receiver.isSelf } then {
        compileSelfRequest(o, args)
    } elseif { receiver.isPrelude } then {
        compilePreludeRequest(o, args)
    } else {
        compileOtherRequest(o, args)
    }
    o.register
}
method compileOuter(o) {
    o.register := o.theObjects.fold { a, obj -> "{a}.{outerProp(obj)}" }
                                    startingWith "this"
}
method compiledialect(o) {
    out("// Dialect import of {o.value}")
    var fn := escapestring(o.value)
    out "var_prelude = do_import(\"{fn}\", {formatModname(o.value)});"
    out "this.outer = var_prelude;"
    if (xmodule.currentDialect.hasAtStart) then {
        out "var var_thisDialect = callmethod(var_prelude, \"thisDialect\", [0]);"
        out "callmethod(var_thisDialect, \"atStart(1)\", [1], "
        out "  new GraceString(\"{escapestring(modname)}\"));"
    }
    o.register := "undefined"
}
method compileimport(o) {
    out("// Import of {o.path} as {o.nameString}")
    def currentScope = o.scope
    def nm = escapeident(o.nameString)
    def var_nm = varf(nm)
    def fn = escapestring(o.path)
    declaredvars.push(escapeident(o.nameString))
    out("if (typeof {formatModname(o.path)} == \"undefined\")")
    out "  throw new GraceExceptionPacket(EnvironmentExceptionObject, "
    out "    new GraceString(\"could not find module {o.path}\"));"
    out("var " ++ varf(nm) ++ " = do_import(\"{fn}\", {formatModname(o.path)});")
    def methodIdent = o.value
    def accessor = (ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],
        [methodIdent], o.dtype) scope(currentScope))
    accessor.line := o.line
    accessor.linePos := o.linePos
    accessor.annotations.addAll(o.annotations)
    compilenode(accessor)
    out("{accessor.register}.debug = \"import\";")
    if (o.isReadable.not) then {
        out "{accessor.register}.confidential = true;"
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                def nm_t = compilenode(o.dtype)
                def typeDesc = o.dtype.toGrace 0.quoted
                out "if (!Grace_isTrue(callmethod({nm_t}, \"match(1)\", [1], {var_nm})))"
                out "    raiseTypeError("
                out "          \"module '{o.nameString.quoted}' is not of type {typeDesc}\","
                out "          {nm_t}, {var_nm});"
            }
        }
    }
    out "setModuleName(\"{modname}\");"
    o.register := "undefined"
}
method compilereturn(o) {
    var reg := compilenode(o.value)
    if (inBlock) then {
        out("throw new ReturnException(" ++ reg ++ ", returnTarget);")
    } else {
        out("return " ++ reg ++ ";")
    }
    o.register := "undefined"
}
method compilePrint(o) {
    var args := []
    for (o.with) do { part ->
        for (part.args) do { prm ->
            var r := compilenode(prm)
            args.push(r)
        }
    }
    if (args.size != 1) then {
        errormessages.syntaxError "method print takes a single argument"
            atRange(o.line, o.linePos, o.linePos + 4)
    } else {
        out("var call" ++ auto_count ++ " = Grace_print(" ++ args.first ++ ");")
    }
    o.register := "call" ++ auto_count
    auto_count := auto_count + 1
}
method compileNativeCode(o) {
    if(o.with.size != 2) then {
        errormessages.syntaxError "method native()code takes two arguments"
            atRange(o.line, o.linePos, o.linePos + 5)
    }
    def param1 = o.with.first.args.first
    if (param1.kind != "string") then {
        errormessages.syntaxError "the first argument to native()code must be a string literal"
            atRange(param1.line, param1.linePos, param1.linePos)
    }
    if (param1.value != "js") then {
        o.register := "GraceDone"
        return
    }
    def param2 = o.with.second.args.first
    if (param2.kind != "string") then {
        errormessages.syntaxError "the second argument to native()code must be a string literal"
            atLine(param2.line)
    }
    def codeString = param2.value
    out "   // start native code from line {o.line}"
    out "var result = GraceDone;"
    out(codeString)
    def reg = "nat" ++ auto_count
    auto_count := auto_count + 1
    out "var {reg} = result;"
    o.register := reg
    out "   // end native code insertion"
}

method compilenode(o) {
    compilationDepth := compilationDepth + 1
    noteLineNumber(o.line)comment "compilenode {o.kind}"
    def oKind = o.kind
    if (oKind == "num") then {
        o.register := "new GraceNum(" ++ o.value ++ ")"
    } elseif {oKind == "string"} then {
        // Escape characters that may not be legal in string literals
        def os = escapestring(o.value)
        out("var string" ++ auto_count ++ " = new GraceString(\""
            ++ os ++ "\");")
        o.register := "string" ++ auto_count
        auto_count := auto_count + 1
    } elseif { oKind == "dialect" } then {
        compiledialect(o)
    } elseif { oKind == "import" } then {
        compileimport(o)
    } elseif { oKind == "return" } then {
        compilereturn(o)
    } elseif { oKind == "generic" } then {
        o.register := compilenode(o.value)
    } elseif { oKind == "identifier" } then {
        compileidentifier(o)
    } elseif { oKind == "defdec" } then {
        compiledefdec(o)
    } elseif { oKind == "vardec" } then {
        compilevardec(o)
    } elseif { oKind == "block" } then {
        compileblock(o)
    } elseif { oKind == "method" } then {
        compilemethod(o, "this")
    } elseif { oKind == "array" } then {
        compilearray(o)
    } elseif { oKind == "bind" } then {
        compilebind(o)
    } elseif { oKind == "if" } then {
        compileif(o)
    } elseif { oKind == "trycatch" } then {
        compiletrycatch(o)
    } elseif { oKind == "matchcase" } then {
        compilematchcase(o)
    } elseif { oKind == "object" } then {
        compileobject(o, "this")
    } elseif { oKind == "typedec" } then {
        compiletypedec(o)
    } elseif { oKind == "typeliteral" } then {
        compiletypeliteral(o)
    } elseif { oKind == "inherit" } then {
        compileInherit(o) forClass "irrelevant"
    } elseif { oKind == "member" } then {
        compilemember(o)
    } elseif { oKind == "call" } then {
        if (o.receiver.isPrelude) then {
            if (o.nameString == "print(1)") then {
                compilePrint(o)
            } elseif {o.nameString == "native(1)code(1)"} then {
                compileNativeCode(o)
            } else {
                compilecall(o)
            }
        } else {
            compilecall(o)
        }
    } elseif { oKind == "op" } then {
        compileop(o)
    } elseif { oKind == "outer" } then {
        compileOuter(o)
    } elseif { oKind == "blank" } then {
        // do nothing
    } else {
        ProgrammingError.raise "unrecognized ast node \"{oKind}\"."
    }
    compilationDepth := compilationDepth - 1
    o.register
}

method compile(moduleObject, of, rm, bt, glPath) {
    def isPrelude = util.extensions.contains("NativePrelude") ||
          (moduleObject.theDialect == "none")
    if (util.extensions.contains "ExtendedLineups") then {
        bracketConstructor := "PrimitiveGraceList"
    }
    if (util.extensions.contains "noChecks") then {
        emitTypeChecks := false
        emitUndefinedChecks := false
        emitArgChecks := false
        emitPositions := false
        requestCall := "callmethod"
    }
    if (util.extensions.contains "noTypeChecks") then {
        emitTypeChecks := false
    }
    if (util.extensions.contains "noArgChecks") then {
        emitArgChecks := false
    }
    if (util.extensions.contains "noUndefChecks") then {
        emitUndefinedChecks := false
    }
    if (util.extensions.contains "noLineNumbers") then {
        emitPositions := false
        requestCall := "callmethod"
    }
    values := moduleObject.value
    outfile := of
    modname := moduleObject.name
    emod := escapeident(modname)
    def selfr = "module$" ++ emod
    moduleObject.register := selfr
    runmode := rm
    buildtype := bt
    if (util.extensions.contains("Debug")) then {
        debugMode := true
    }
    util.log_verbose("generating JavaScript code.")
    topLevelTypes.add "String"
    topLevelTypes.add "Number"
    topLevelTypes.add "Boolean"
    topLevelTypes.add "Block"
    topLevelTypes.add "Done"
    topLevelTypes.add "Type"
    topLevelTypes.add "Unknown"
    topLevelTypes.add "Object"
    if (! util.extensions.contains "noStrict") then {
        out "\"use strict\";"
    }
    if (isPrelude.not) then {
        out "var___95__prelude = do_import(\"standardGrace\", gracecode_standardGrace);"
    }
    util.setline(1)
    out("function {formatModname(modname)}() \{")
    increaseindent
    out("setModuleName(\"{modname}\");")
    out "importedModules[\"{modname}\"] = this;"
    out "var {selfr} = this;"
    out "this.definitionModule = \"{modname}\";"
    out "this.definitionLine = 0;"
    out "var var_prelude = var___95__prelude;"
        // var_prelude must be local to this function, because its value
        // varies from module to module.

    if (debugMode) then {
        out "var myframe = new StackFrame(\"{modname} module\");"
        out "stackFrames.push(myframe);"
    }
    compileobjouter(moduleObject, "var_prelude")
    def imported = []
    if (isPrelude) then {  // compile components in non-standard order
        moduleObject.value.do { o ->
            if (o.isMethod) then {
                compilenode(o)
            }
            if (o.isExternal) then {
                imported.push(o.path)
            }
        }
        moduleObject.value.do { o ->
            if (o.isMethod.not) then {
                compilenode(o)
            }
        }
    } else {
        moduleObject.externalsDo { o ->
            compilenode(o)
            imported.push(o.path)
        }
        if (false != moduleObject.superclass) then {
            compilenode(moduleObject.superclass)
        }
        moduleObject.usedTraits.do { t ->
            compileUse(t) in (moduleObject)
        }
        moduleObject.methodsDo { o ->
            compilenode(o)
        }
    }
    moduleObject.executableComponentsDo { o ->
        compilenode(o)
    }
    if (xmodule.currentDialect.hasAtEnd) then {
        out "var var_thisDialect = callmethod(var_prelude, \"thisDialect\", [0]);"
        out("callmethod(var_thisDialect, \"atEnd(1)\", [1], this);")
    }
    if (debugMode) then {
        out "stackFrames.pop();"
    }
    out("return this;")
    decreaseindent
    out("\}")

    def generatedModuleName = formatModname(modname)
    def importList = imported.map{ each -> "\"{each}\"" }.asList.sort
    out "{generatedModuleName}.imports = {importList};"

    moduleObject.imports := imports.other
    xmodule.writeGctForModule(moduleObject)

    def gct = xmodule.parseGCT(modname)
    def gctText = xmodule.gctAsString(gct)
    out "if (typeof gctCache !== \"undefined\")"
    out "  gctCache[\"{escapestring(basename(modname))}\"] = \"{escapestring(gctText)}\";"
    out "if (typeof originalSourceLines !== \"undefined\") \{"
    out "  originalSourceLines[\"{modname}\"] = ["
    def sourceLines = util.cLines
    def numberOfLines = util.cLines.size
    var ln := 1
    while {ln < numberOfLines} do {
        out "    \"{sourceLines.at(ln)}\","
        ln := ln + 1
    }
    if (numberOfLines <= 0) then {
        out " ];"
    } else {
        out "    \"{sourceLines.at(numberOfLines)}\" ];"
    }
    out "\}"
    out "if (typeof global !== \"undefined\")"
    out "  global.{generatedModuleName} = {generatedModuleName};"
    out "if (typeof window !== \"undefined\")"
    out "  window.{generatedModuleName} = {generatedModuleName};"

    for (output) do { o ->
        util.outprint(o)
    }
    outfile.close
    util.log_verbose "done."
    if (buildtype == "run") then { runJsCode(of, glPath) }
}

method compileInherit(inhNode) forClass(className) {
    // The object under construction is `this`.
    // Compile code to implement inheritance from inhNode

    def superExpr = inhNode.value
    if (superExpr.isCall) then {
        compileInheritCall(superExpr)
            forClass (className)
            aliases (aliasList(inhNode))
            exclusions (exclusionList(inhNode))
    } else {
        util.log 0 verbose "Inheriting from {superExpr.toGrace 0} on line {inhNode.line}"
        // we create a temporary intermediate object
        def tempObj = compileInheritanceWithAliases(inhNode)
        copyDownMethodsFrom (tempObj) to "this" excludingStatically (inhNode.exclusions)
        copyDownDataFrom (tempObj) to "this"
    }
}
method compileSuperInitialization(inheritsStmt) {
    def superExpr = inheritsStmt.value
    if (superExpr.isCall) then {
        def callParts = superExpr.with
        def lastPart = callParts.last
        def currentScope = lastPart.scope
        lastPart.name := "$init"
        lastPart.args.clear
        lastPart.args.push(ast.identifierNode.new("self", false) scope(currentScope))
        compilecall(superExpr)
    } else {
        util.log 0 verbose "superExpr is {superExpr.toGrace 0} on line {inheritsStmt.line} in compileSuperInitialization"
    }
}
method compileInheritCall(callNode) forClass (className) aliases (aStr) exclusions (eStr) {
    def buildMethodName = addSuffix "$build(3)" to (callNode.nameString)
    def target = compilenode(callNode.receiver)
    var arglist := ""
    callNode.with.do { part ->
        if (! part.name.startsWith "$") then {
            part.args.do { p -> arglist := arglist ++ ", " ++ compilenode(p) }
        }
    }
    var typeArgs := ""
    if (false != callNode.generics) then {
        callNode.generics.do { g ->
            typeArgs := typeArgs ++ ", " ++ compilenode(g)
        }
    }
    if (callNode.isSelfRequest) then {
        out "onSelf = true;"
    }
    out("{requestCall}({target}, \"{escapestring(buildMethodName)}\", [null]" ++
        "{arglist}, this, {aStr}, {eStr}{typeArgs});  // compileInheritCall arglist = ‹{arglist}›")
}

method addSuffix (tail) to (root) {
    def dollarIx = root.indexOf "$"
    if (dollarIx == 0) then {
        root ++ tail
    } else {
        root.substringFrom 1 to (dollarIx - 1) ++ tail
    }
}

method aliasList(inhNode) {
    var res := "["
    inhNode.aliases.do { a ->
        res := res ++ "new Alias(\"{a.newName.quoted}\", \"{a.newName.quoted}\")"
    } separatedBy {
        res := res ++ ", "
    }
    res ++ "]"
}

method exclusionList(inhNode) {
    var res := "["
    inhNode.exclusions.do { e ->
        res := res ++ "\"{e.quoted}\""
    } separatedBy {
        res := res ++ ", "
    }
    res ++ "]"
}

method compileInheritanceWithAliases(inhNode) {
    def parentExpr = inhNode.value.shallowCopy
    if (parentExpr.isCall && (parentExpr.with.size > 1)) then {
        def newPartsList = parentExpr.with.copy
        newPartsList.removeLast     // remove the final $object(…) part
        parentExpr.with := newPartsList
    } else {
        ProgrammingError.raise "inheriting from non-call {parentExpr.pretty 0}"
    }
    def superObj = compilenode(parentExpr)
    inhNode.aliases.do { each ->
        out "this.methods['{each.newName.nameString}'] = findMethod({superObj}, '{each.oldName.nameString}');"
    }
    superObj
}

method compileAliasesFrom (temp) {
    out "for (var ix = 0, aLen = var_aliases.length; ix < aLen; ix++) \{"
    out "  var oneAlias = var_aliases[ix];"
    out "  var_ouc.methods[oneAlias.newName] = findMethod({temp}, oneAlias.oldName);"
    out "}"
}

method copyDownMethodsFrom (sup) to (selfr) excludingStatically (ex) {
    if (ex.isEmpty) then {
        out "for (var key in {sup}.methods) \{"
        out "    if ({sup}.methods.hasOwnProperty(key) && (! {selfr}.methods[key]))"
        out "        {selfr}.methods[key] = {sup}.methods[key];"
        out "}"
    } else {
        def exclusionString = list (ex.map { m -> "\"{m.quoted}\"" })
            // converting to a list get list brackets rather then sequence brackets
        out "var exclusions = {exclusionString};"
        copyDownMethodsFrom (sup) to (selfr) excludingDynamically (exclusionString)
    }
}

method copyDownMethodsFrom (sup) to (selfr) excludingDynamically (exclusionString) {
    out "var meths = {sup}.methods, exclusions = {exclusionString};"
    out "for (var key in meths) \{"
    out "    if (meths.hasOwnProperty(key) && (! {selfr}.methods[key])) \{"
    out "        if (! exclusions.includes(key))"
    out "            {selfr}.methods[key] = meths[key];"
    out "    }"
    out "}"
}

method copyDownDataFrom (sup) to (dest) {
    out "if ({sup}.data) \{"
    out "    for (var dKey in {sup}.data) \{"
    out "        if ({sup}.data.hasOwnProperty(dKey))"
    out "            {dest}.data[dKey] = {sup}.data[dKey];"
    out "    }"
    out "}"
    out "if ({sup}.hasOwnProperty('_value'))"
    out "    {dest}._value = {sup}._value;"
    out "var cks = {sup}.closureKeys";
    out "for (var ckix = 0, ckLen = cks.length; ckix < ckLen; ckix++) \{"
    out "    var ck = cks[ckix];"
    out "    {dest}[ck] = {sup}[ck];"
    out "    {dest}.closureKeys.push(ck);"
    out "}"
}

method compileUse(useNode) in (objNode) {
    // The object under construction is `this`.
    // Compile code to implement use of useNode.
    // This differs from compileInherit because of the
    // omission of methods from graceObject
    def tObj = compilenode(useNode.value)
    def tMethNames = useNode.providedNames -- objNode.localNames
//    util.log 70 verbose "tMethNames = {tMethNames.asList.sort}"
    useNode.aliases.do { each ->
        def nn = each.newName.nameString
        out("this.methods[\"{nn}\"] = " ++
            "{tObj}.methods[\"{each.oldName.nameString}\"];  // alias")
        tMethNames.remove(nn)
    }
    tMethNames.do { methName ->
        out "this.methods[\"{methName}\"] = {tObj}.methods[\"{methName}\"];"
    }
}

method runJsCode(of, glPath) {
    def gmp = sys.environ.at "GRACE_MODULE_PATH"
    def pathList = unixFilePath.split(gmp)
    def libPath = if (glPath.at(glPath.size) == "/") then { glPath }
                        else { glPath ++ "/" }
    if (io.exists(libPath ++ "gracelib.js")) then {
        if (pathList.contains(libPath).not) then {
            sys.environ.at "GRACE_MODULE_PATH" put "{libPath}:{gmp}"
        }
    }
    def runExitCode = io.spawn("grace", [of.pathname]).wait
    if (runExitCode < 0) then {
        io.error.write "minigrace: program {modname} exited with error {-runExitCode}.\n"
        sys.exit(4)
    }
}
