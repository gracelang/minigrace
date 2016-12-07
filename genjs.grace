#pragma ExtendedLineups
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "unixFilePath" as unixFilePath
import "xmodule" as xmodule
import "mirrors" as mirrors
import "errormessages" as errormessages
import "identifierKinds" as k

var indent := ""
var verbosity := 30
var pad1 := 1
var auto_count := 0
var constants := []
var output := []
var usedvars := []
var declaredvars := []
var bblock := "entry"

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
var requestCall := "callmethod"
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
    // compile code that creates a field, and appropriate
    // accessor method(s), in objr, the object under construction
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

method compileOwnInitialization(o, selfr) {
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

    // The build function adds the attributes defined by o to `this`,
    // and returns as its result the init function, which, when called, will
    // initialize `this`

    var origInBlock := inBlock
    inBlock := false

    def selfr = uidWithPrefix "obj"
    o.register := selfr
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
    out "var inheritedExclusions = \{ };"
        // this object is used to save methods already in the ouc that
        // would be overridden by local or reused methods, were those local
        // or reused method not excluded from the combinaiton.
    out "for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) \{"
    out "    var exMeth = exclusions[eix];"
    out "    inheritedExclusions[exMeth] = this.methods[exMeth];"
            // some of these methods will be undefined; that's OK
    out "}"
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
    out "}"
    out "for (var exName in inheritedExclusions) \{"
    out "    if (inheritedExclusions.hasOwnProperty(exName)) \{"
    out "        if (inheritedExclusions[exName]) \{"
    out "            this.methods[exName] = inheritedExclusions[exName];"
    out "        } else \{"
    out "            delete this.methods[exName];"
    out "        }"
    out "    }"
    out "}"
    out "var {selfr}_init = function() \{    // init of object on line {o.line}"
        // At execution time, `this` will be the object being initialized.
    increaseindent
    if (false != inheritsStmt) then {
        compileSuperInitialization(inheritsStmt)
    }
    compileOwnInitialization(o, "this")
    decreaseindent
    out "\};"   // end of _init function for object on line {o.line}
    out "return {selfr}_init;   // from compileBuildAndInitFunctions(_)inMethod(_)"
    decreaseindent
    out "\};"   // end of build function
    inBlock := origInBlock
}
method compileobject(o, outerRef) {
    // compiles an object constructor, in all contexts except a fresh method.
    // Generates two JavaScript functions,
    // {o.register}_build, which creates the object and its methods and fields,
    // and {o.register}_init, which initializes the fields.  The _init function
    // is returned from the build funciton, so that it can close over the context.
    // The object constructor itself is implemented by calling these functions
    // in sequence, _except_ inside a fresh method, where the object may instead
    // need to add its contents to an existing object
    compileBuildAndInitFunctions(o) inMethod (false)
    def objRef = o.register
    def objName = "\"" ++ o.name.quoted ++ "\""
    out "var {objRef} = emptyGraceObject({objName}, \"{modname}\", {o.line});"
    out "var {objRef}_init = {objRef}_build.call({objRef}, null, {outerRef}, [], []);"
    out "{objRef}_init.call({objRef});  // end of compileobject"
    objRef
}
method compileGuard(o, paramList) {
    def matchFun = uidWithPrefix "matches"
    out "var {matchFun} = function({paramList}) \{"
    increaseindent
    out "setModuleName(\"{modname}\");" 
    noteLineNumber(o.line) comment "block matches function"
    o.params.do { p ->
        def pName = varf(p.value)
        if (p.dtype != false) then {
            def dtype = compilenode(p.dtype)
            out "if (!Grace_isTrue(callmethod({dtype}, \"match(1)\", [1], {pName})))"
            out "    return false;"
        }
    }
    out "return true;"
    decreaseindent
    out "};"
    matchFun
}

method compileblock(o) {
    var origInBlock := inBlock
    inBlock := true
    def myc = auto_count
    def nParams = o.params.size
    auto_count := auto_count + 1
    out "var block{myc} = new GraceBlock(this, {o.line}, {nParams});"
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
    if (paramsAreTyped) then {
        out "block{myc}.paramTypes = {paramTypes};"
    }

    out "block{myc}.guard = {compileGuard(o, paramList)};"
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
    out "var {funcName} = function(argcv{p}) \{    // method {name}"
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

method compileParameterDebugFrame(o, name) {
    if (debugMode) then {
        out "var myframe = new StackFrame(\"{name}\");"
        for (o.signature) do { part ->
            for (part.params) do { p ->
                def pName = p.nameString
                def varName = varf(pName)
                out "myframe.addVar(\"{escapestring(pName)}\","
                out "  function() \{return {varName};});"
            }
        }
    }
}

method compileDefaultsForTypeParameters(o) extraParams (extra) {
    if (false == o.typeParams) then { return }
    out "// Start type parameters"
    o.typeParams.do { g->
        def gName = varf(g.value)
        out "if ({gName} === undefined) {gName} = var_Unknown;"
    }
    if (emitArgChecks) then {
        out "var numArgs = arguments.length - 1 - {extra};"  // subtract 1 for argcv
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
            def partBit = if (isMultpart) then {" to `{part.name}` "} else {""}
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

method compileFreshMethod(o, outerRef) {
    // compiles the methodNode o in a way that can be used with an `inherit`
    // statement. _Two_ methods are generated: one to build the new object,
    // and one to initialize it.  The build method will also implement
    // the statements in the body of this method that preceed the final
    // (result) expression.
    // The final (result) expression of method o may be of three kinds:
    //   (1) an object constructor,
    //   (2) a request on another fresh method (which will return its init function),
    //   (3) a request of a clone or a copy (which returns a null init function).

    def resultExpr = o.resultExpression
    if (resultExpr.isObject) then {     // case (1)
        compileBuildMethodFor(o) withObjCon (resultExpr) inside (outerRef)
    } else {                            // cases (2) and (3)
        compileBuildMethodFor(o) withFreshCall (resultExpr) inside (outerRef)
    }
    return "GraceDone"
}

method compileMethodBody(methNode) {
    // compiles the body of method represented by methNode.
    // answers the register containing the result.

    var ret := "GraceDone"
    methNode.body.do { nd -> ret := compilenode(nd) }
    ret
}

method compileMethodBodyWithoutLast(methNode) {
    def body = methNode.body
    if (body.size > 1) then {
        def resultExpr = body.removeLast   // remove result object
        compileMethodBody(methNode)
        body.addLast(resultExpr)           // put result object back
    }
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
    o.register := uidWithPrefix "func"
    if ((o.body.size == 1) && {o.body.first.isIdentifier}) then {
        compileSimpleAccessor(o)
    } else {
        compileNormalMethod(o, selfobj)
    }
    usedvars := oldusedvars
    declaredvars := olddeclaredvars
}

method compileSimpleAccessor(o) {
    def oldEmitPositions = emitPositions
    emitPositions := false
    def canonicalMethName = o.canonicalName
    def funcName = o.register
    def name = escapestring(o.nameString)
    def ident = o.body.first
    def p = paramlist(o) ++ typeParamlist(o)
    out "var {funcName} = function(argcv{p}) \{     // accessor method {name}"
    increaseindent
    if ( emitUndefinedChecks ) then {
        compileCheckForUndefinedIdentifier(ident)
    }
    out "return {compilenode(ident)};"
    compileMethodPostamble(o, funcName, canonicalMethName)
    out "this.methods[\"{name}\"] = {funcName};"
    compileMetadata(o, funcName, name)
    emitPositions := oldEmitPositions
}

method compileNormalMethod(o, selfobj) {
    def canonicalMethName = o.canonicalName
    def funcName = o.register
    usedvars := []
    declaredvars := []
    def name = escapestring(o.nameString)
    compileMethodPreamble (o, funcName, canonicalMethName)
        withParams (paramlist(o) ++ typeParamlist(o))
    compileParameterDebugFrame(o, name)
    compileDefaultsForTypeParameters(o) extraParams 0
    compileArgumentTypeChecks(o)
    debugModePrefix
    if (o.isFresh) then {
        def argList = paramlist(o)
        out "var ouc = emptyGraceObject(\"{o.ilkName}\", \"{modname}\", {o.line});"
        out "var ouc_init = {selfobj}.methods[\"{name}$build(3)\"].call(this, null{argList}, ouc, [], []);"
        out "ouc_init.call(ouc);"
        out "return ouc;"
    } else {
        out "return {compileMethodBodyWithTypecheck(o)};"
    }
    debugModeSuffix
    compileMethodPostamble(o, funcName, canonicalMethName)
    out "this.methods[\"{name}\"] = {funcName};"
    compileMetadata(o, funcName, name)
    if (o.isFresh) then {
        compileFreshMethod(o, selfobj)
    }
}
method compileBuildMethodFor(methNode) withObjCon (objNode) inside (outerRef) {
    // the $build method for a fresh method executes the statements in the
    // body of the fresh method, and then calls the build function of the
    // object constructor.  That build function will return the _init function
    // for the object expression that it tail-returns.

    def funcName = uidWithPrefix "func"
    def name = escapestring(methNode.nameString ++ "$build(3)")
    def cName = methNode.canonicalName ++ "$build(_,_,_)"
    def params = paramlist(methNode)
    def typeParams = typeParamlist(methNode)
    compileMethodPreamble (methNode, funcName, cName)
        withParams (params ++ ", inheritingObject, aliases, exclusions" ++ typeParams)
    compileDefaultsForTypeParameters(methNode) extraParams 3
    compileArgumentTypeChecks(methNode)
    compileMethodBodyWithoutLast(methNode)
    compileBuildAndInitFunctions(objNode) inMethod (methNode)
    def objRef = objNode.register
    out "var {objRef}_init = {objRef}_build.call(inheritingObject, null{params}, {outerRef}, aliases, exclusions{typeParams});"
    out "return {objRef}_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)"
    compileMethodPostamble(methNode, funcName, cName)
    out "this.methods[\"{name}\"] = {funcName};"
    compileMetadata(methNode, funcName, name)
}
method compileBuildMethodFor(methNode) withFreshCall (callExpr) inside (outerRef) {
    // The build method will have three additional parameters:
    // `inheritingObject`, `aliases`, and `exclusions`.  These
    // will be passed to it by the `inherit` statement.

    def funcName = uidWithPrefix "func"
    def name = escapestring(methNode.nameString ++ "$build(3)")
    def cName = escapestring(methNode.canonicalName ++ "$build(_,_,_)")
    compileMethodPreamble(methNode, funcName, cName)
        withParams( paramlist(methNode) ++ ", ouc, aliases, exclusions")
    compileMethodBodyWithoutLast(methNode)

    // Now compile the call, with the three aditional arguments.
    // TODO: refactor compilecall so that it can handle this case, as well as
    // normal calls.
    def calltemp = uidWithPrefix "call"
    callExpr.register := calltemp
    var args := []
    compileNormalArguments(callExpr, args)
    args.addAll ["ouc", "aliases", "exclusions"]
    compileTypeArguments(callExpr, args)
    compileCallToBuildMethod(callExpr) withArgs (args)
    compileResultTypeCheck(methNode, "ouc") onLine (callExpr.line)
    out "return {calltemp};      // from compileBuildMethodFor(_)withFreshCall(_)inside(_)"
    compileMethodPostamble(methNode, funcName, cName)
    out "this.methods[\"{name}\"] = {funcName};"
    compileMetadata(methNode, funcName, name)
}
method compileCallToBuildMethod(callExpr) withArgs (args) {
    util.setPosition(callExpr.line, callExpr.linePos)
    callExpr.with.addLast(
        ast.requestPart.request "$build"
            withArgs [ast.nullNode, ast.nullNode, ast.nullNode]
    )
    def receiver = callExpr.receiver
    if { receiver.isOuter } then {
        compileOuterRequest(callExpr, args)
    } elseif { receiver.isSelf } then {
        compileSelfRequest(callExpr, args)
    } elseif { receiver.isPrelude } then {
        compilePreludeRequest(callExpr, args)
    } else {
        compileOtherRequest(callExpr, args)
    }
    callExpr.with.removeLast
}
method paramlist(o) {
    // a comma-prefixed and separated list of the parameters
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
    def left = compilenode(o.left)
    def opRight = o.right
    if ( opRight.isIdentifier && emitUndefinedChecks ) then {
        compileCheckForUndefinedIdentifier(opRight)
    }
    def right = compilenode(opRight)
    def opSym = o.value
    def rnm =   if (opSym == "+") then { "sum"
                } elseif {opSym == "*"} then { "prod"
                } elseif {opSym == "-"} then { "diff"
                } elseif {(opSym == "/") || (opSym == "÷")} then { "quotient"
                } elseif {o.value == "%"} then { "modulus"
                } else { "opresult"
                }
    def register = uidWithPrefix(rnm)
    out("var {register} = callmethod({left}, \"" ++
          "{escapestring(o.nameString)}\", [1], {right});")
    o.register := register
}
method compileNormalArguments(o, args) {
    for (o.with) do { part ->
        for (part.args) do { p ->
            if ( p.isIdentifier && emitUndefinedChecks ) then {
                compileCheckForUndefinedIdentifier(p)
            }
            args.push(compilenode(p))
        }
    }
}
method compileTypeArguments(o, args) {
    if (false != o.generics) then {
        o.generics.do {g->
            args.push(compilenode(g))
        }
    }
}
method compileArguments(o, args) {
    compileNormalArguments(o, args)
    compileTypeArguments(o, args)
}
method assembleArguments(args) {
    var result := ""
    for (args) do { arg ->
        result := result ++ ", " ++ arg
    }
    result
}
method compileCheckForUndefinedIdentifier(id) {
    // id is an identiferNode.   If it is possible that this identifier is
    // undefined, emit a check.
    def name = id.nameString
    def definingScope = id.scope.thatDefines(name)
    if (definingScope.variety == "built-in") then { return }
    def idKind = definingScope.kind(name)
    if (((idKind == k.defdec) && definingScope.isObjectScope) ||
            (idKind == k.vardec)) then {
        out "if ({varf(name)} === undefined) raiseUninitializedVariable(\"{name}\");"
    }
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
method compileOuterRequest(o, args) {
    out "// call case 2: outer request"
    compilenode(o.receiver)
    out("var {o.register} = selfRequest({o.receiver.register}" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileSelfRequest(o, args) {
    out "// call case 4: self request"
    out("var {o.register} = selfRequest(this" ++
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
    def cm = if (o.isSelfRequest) then { "selfRequest" } else { requestCall }
    out("var {o.register} = {cm}({target}" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compilecall(o) {
    def calltemp = uidWithPrefix "call"
    o.register := calltemp
    var args := []
    compileArguments(o, args)
    def receiver = o.receiver
    if ( receiver.isOuter ) then {
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
    def dialectName = o.value
    if (dialectName ≠ "none") then {
        out "// Dialect \"{dialectName}\""
        var fn := escapestring(dialectName)
        out "var_prelude = do_import(\"{fn}\", {formatModname(dialectName)});"
        out "this.outer = var_prelude;"
        if (xmodule.currentDialect.hasAtStart) then {
            out "var var_thisDialect = callmethod(var_prelude, \"thisDialect\", [0]);"
            out "callmethod(var_thisDialect, \"atStart(1)\", [1], "
            out "  new GraceString(\"{escapestring(modname)}\"));"
        }
    }
    o.register := "undefined"
}
method compileimport(o) {
    out "// Import of \"{o.path}\" as {o.nameString}"
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
        errormessages.syntaxError "the first argument to native(_)code(_) must be a string literal"
            atRange(param1.line, param1.linePos, param1.linePos)
    }
    if (param1.value != "js") then {
        o.register := "GraceDone"
        return
    }
    def param2 = o.with.second.args.first
    if (param2.kind != "string") then {
        errormessages.syntaxError "the second argument to native(_)code(_) must be a string literal"
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

method stripLeadingZeros(str) {
    // returns str without ang leading zeros
    if (str.first ≠ "0") then { return str }
    var leading := true
    var result := ""
    str.do { ch ->
        if ((leading && (ch ≠ "0"))) then {
            leading := false
            result := result ++ ch
        } elseif {leading.not} then {
            result := result ++ ch
        }
    }
    if (result.isEmpty) then { return "0" }
    return result
}

method compilenode(o) {
    compilationDepth := compilationDepth + 1
    noteLineNumber(o.line)comment "compilenode {o.kind}"
    def oKind = o.kind
    if (oKind == "num") then {
        o.register := "new GraceNum(" ++ stripLeadingZeros(o.value) ++ ")"
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
    } else {
        ProgrammingError.raise "unrecognized ast node \"{oKind}\"."
    }
    compilationDepth := compilationDepth - 1
    o.register
}

method compile(moduleObject, of, rm, bt, glPath) {
    def isPrelude = moduleObject.theDialect.value == "none"
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
    def generatedModuleName = formatModname(modname)
    out "function {generatedModuleName}() \{"
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
        moduleObject.methodsDo { o -> compilenode(o) }
        moduleObject.externalsDo { o -> imported.push(o.path) }
        moduleObject.value.do { o ->    // this treats importNodes as executable
            if (o.isMethod.not) then {
                compilenode(o)
            }
        }
    } else {
        moduleObject.externalsDo { o ->
            compilenode(o)
            imported.push(o.path)
        }
        def inheritsStmt = moduleObject.superclass
        if (false != inheritsStmt) then {
            compileInherit(inheritsStmt) forClass (modname)
        }
        moduleObject.usedTraits.do { t ->
            compileUse(t) in (moduleObject)
        }
        moduleObject.methodsDo { o ->
            compilenode(o)
        }
        if (false != inheritsStmt) then {
            compileSuperInitialization(inheritsStmt)
        }
        moduleObject.executableComponentsDo { o ->
            compilenode(o)
        }
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

    def importList = list(imported.map{ each -> "\"{each}\"" }).sort
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
        inhNode.register := compileReuseCall(superExpr)
            forClass (className)
            aliases (aliasList(inhNode))
            exclusions (exclusionList(inhNode))
    } else {
        errormessages.syntaxError "inheritance must be from a request that yields a fresh object"
            atLine (inhNode.line)
    }
}
method compileSuperInitialization(inheritsNode) {
    out "{inheritsNode.register}.call(this);"
}
method compileReuseCall(callNode) forClass (className) aliases (aStr) exclusions (eStr) {
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
    def cm = if (callNode.isSelfRequest) then { "selfRequest" } else { requestCall }
    def initFun = uidWithPrefix "initFun"
    out("var {initFun} = {cm}({target}, \"{escapestring(buildMethodName)}\", [null]" ++
        "{arglist}, this, {aStr}, {eStr}{typeArgs});  // compileReuseCall")
    initFun     // return the register that holds the initialization function
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
        res := res ++ "new Alias(\"{a.newName.quoted}\", \"{a.oldName.quoted}\")"
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

method compileUse(useNode) in (objNode) {
    // The object under construction is `this`.
    // Compile code to implement use of useNode.
    useNode.register := compileReuseCall(useNode.value)
        forClass (objNode.nameString)
        aliases (aliasList(useNode))
        exclusions (exclusionList(useNode))
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
