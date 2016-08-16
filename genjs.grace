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
method beginblock(s) {
    bblock := "%" ++ s
    out(s ++ ":")
}
method compilearray(o) {
    var myc := auto_count
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
method compileobjouter(selfr, outerRef) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring("outer")
    var nmi := escapeident("outer")
    def emod = escapeident(modname)
    out("{selfr}.outer = {outerRef};")
    out("var reader_{emod}_{nmi}{myc} = function() \{")
    out("  return this.outer;")
    out("\};")
    out("{selfr}.methods[\"{nm}\"] = reader_{emod}_{nmi}{myc};")
}
method compileobjtype(o, selfr, pos) {
    var val := "undefined"
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring(o.value)
    var nmi := escapeident(o.value)
    def emod = escapeident(modname)
    o.anonymous := true
    val := compilenode(o)
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("    var reader_{emod}_{nmi}{myc} = function() \{")
    out("    return this.data[\"" ++ nm ++ "\"];")
    out("  \};")
    out("  reader_{emod}_{nmi}{myc}.def = true;")
    var isReadable := false
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier") &&
            {ann.value == "confidential"}) then {
            out "  reader_{emod}_{nmi}{myc}.confidential = true;"
        }
    }
    out "{selfr}.methods[\"{nm}\"] = reader_{emod}_{nmi}{myc};"
}
method compileobjdefdec(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        if (o.value.kind == "object") then {
            compileobject(o.value, selfr, false)
            val := o.value.register
        } else {
            val := compilenode(o.value)
        }
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring(o.name.value)
    var nmi := escapeident(o.name.value)
    def emod = escapeident(modname)
    out "{selfr}.data[\"{nm}\"] = {val};"
    out "var reader_{emod}_{nmi}{myc} = function() \{"
    out "  return this.data[\"{nm}\"];"
    out "\};"
    out "reader_{emod}_{nmi}{myc}.def = true;"
    if (o.isReadable.not) then {
        out "reader_{emod}_{nmi}{myc}.confidential = true;"
    }
    out "{selfr}.methods[\"{nm}\"] = reader_{emod}_{nmi}{myc};"
    if (ast.findAnnotation(o, "parent")) then {
        out "  {selfr}.superobj = {val};"
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                noteLineNumber(o.line)comment("typecheck in compileobjdefdec")
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match(1)\", [1], {val})))"
                out "  throw new GraceExceptionPacket(TypeErrorObject,"
                out "      new GraceString(\"value of def '{o.name.value}' is not of type {o.dtype.toGrace(0)}\"));"
            }
        }
    }
}
method compileobjvardec(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        val := compilenode(o.value)
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring(o.name.value)
    var nmi := escapeident(o.name.value)
    def emod = escapeident(modname)
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("var reader_" ++ emod ++ "_" ++ nmi ++ myc ++ " = function() \{")
    out("  return this.data[\"" ++ nm ++ "\"];")
    out("\};")
    out(selfr ++ ".methods[\"" ++ nm ++ "\"] = reader_" ++ emod ++
        "_" ++ nmi ++ myc ++ ";")
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("var writer_" ++ emod ++ "_" ++ nmi ++ myc ++ " = function(argcv, o) \{")
    out("  this.data[\"" ++ nm ++ "\"] = o;")
    out "  return GraceDone;"
    out("\};")
    out(selfr ++ ".methods[\"" ++ nm ++ ":=(1)\"] = writer_" ++ emod ++
        "_" ++ nmi ++ myc ++ ";")
    if (o.isReadable.not) then {
        out("reader_{emod}_{nmi}{myc}.confidential = true;")
    }
    if (o.isWritable.not) then {
        out("writer_{emod}_{nmi}{myc}.confidential = true;")
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                if (val == "undefined") then {
                    return true
                }
                noteLineNumber(o.line)comment("typecheck in compileobjvardec")
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match(1)\", [1], {val})))"
                out "  throw new GraceExceptionPacket(TypeErrorObject,"
                out "      new GraceString(\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\"));"
            }
        }
    }
}
method compileobject(o, outerRef, inheritingObject) {
    var origInBlock := inBlock
    inBlock := false
    var myc := auto_count
    auto_count := auto_count + 1
    def selfr = "obj" ++ myc
    o.register := selfr
    def superConstructor =
        if (o.inTrait) then {
            "GraceTrait"
        } elseif {false == o.superclass} then {
            "GraceObject"
        } else {
            "null"  // inheritance will be compiled later, when the inherit node is found
        }
    out "var {selfr} = Grace_allocObject({superConstructor}, \"{o.name}\");"
    out "{selfr}.definitionModule = \"{modname}\";"
    out "{selfr}.definitionLine = {o.line};"
    if (inheritingObject) then {
        out "var inho{myc} = inheritingObject;"
        out "while (inho{myc}.superobj) inho{myc} = inho{myc}.superobj;"
        out "inho{myc}.superobj = {selfr};"
        out "{selfr}.data = inheritingObject.data;"
        out "if (inheritingObject.hasOwnProperty('_value'))"
        out "  {selfr}._value = inheritingObject._value;"
    }
    compileobjouter(selfr, outerRef)
    out("var obj_init_{myc} = function() \{")
    increaseindent
    out("var origSuperDepth = superDepth;")
    out("superDepth = {selfr};")
    var pos := 0
    for (o.value) do { e ->
        if (e.kind == "method") then {
            compilemethod(e, selfr)
        }
    }

    // compile inherit
    if (false != o.superclass) then {
        compileInherits(o.superclass) in (o, selfr)
    }

    // compile traits
    o.usedTraits.do { t -> compileInherits(t) in (o, selfr) }

    // compile body
    o.value.do { e ->
        if (e.kind == "method") then {
        } elseif { e.kind == "vardec" } then {
            compileobjvardec(e, selfr, pos)
            out("{selfr}.mutable = true;")
            pos := pos + 1
        } elseif { e.kind == "defdec" } then {
            compileobjdefdec(e, selfr, pos)
            pos := pos + 1
        } elseif { e.kind == "typedec" } then {
            compiletypedec(e)
            pos := pos + 1
        } elseif { e.kind == "object" } then {
            compileobject(e, selfr, false)
        } else {
            compilenode(e)
        }
    }
    out "superDepth = origSuperDepth;"
    decreaseindent
    out "\};"
    if (inheritingObject) then {
        out "obj_init_{myc}.apply(inheritingObject, []);"
    } else {
        out "obj_init_{myc}.apply({selfr}, []);"
    }
    inBlock := origInBlock
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
    def escName = escapestring(o.value)
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
    for (o.signature) do { part ->
        result.push(part.params.size)
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

method compileMethodPreamble(o, myc, name) {
    out "var func{myc} = function(argcv) \{    // method {name}"
    increaseindent
    out "var curarg = 1;"
    out "var returnTarget = invocationCount;"
    out "invocationCount++;"
}

method compileMethodPostamble(o, myc, name) {
    decreaseindent
    out "\};    // end of method {name}"
    if (hasTypedParams(o)) then {
        compilemethodtypes("func{myc}", o)
    }
    if (o.isConfidential) then {
        out "func{myc}.confidential = true;"
    }
}

method compileParameters(o) withDebug(needsDebug) {
    for (o.signature) do { part ->
        for (part.params) do { p ->
            def pName = p.nameString
            def varName = varf(pName)
            out "var {varName} = arguments[curarg];"
            out "curarg++;"
            if (needsDebug) then {
                out "myframe.addVar(\"{escapestring(pName)}\","
                out "  function() \{return {varName};});"
            }
        }
    }
}

method compileInheritingObjectParameter {
    out "var inheritingObject = arguments[curarg];"
    out "curarg++;"
}

method compileTypeParameters(o) atPosition(sz) {
    if (false == o.typeParams) then { return }
    out "// Start type parameters"
    out "if (argcv.length == {1 + sz}) \{"
    if (emitArgChecks) then {
        out "  if (argcv[{sz}] !== {o.typeParams.size}) \{"
        out "    throw new GraceExceptionPacket(ProgrammingErrorObject, "
        out "        new GraceString(\"wrong number of type arguments for {o.canonicalName}\"));"
        out "  \}"
    }
    o.typeParams.do { g ->
        out "  var {varf(g.value)} = arguments[curarg++];"
    }
    out "\} else \{"
    o.typeParams.do { g->
        out "  var {varf(g.value)} = var_Unknown;"
    }
    out "\}"
    out "// End type parameters"
}

method compileArgumentTypeChecks(o) {
    out "setModuleName(\"{modname}\");"     // do this before noteLineNumber
    if (emitTypeChecks && o.needsArgChecks) then {
        out "// Start argument checking"
        out "curarg = 1;"
        for (o.signature.indices) do { partnr ->
            var part := o.signature.at(partnr)
            var paramnr := 0
            for (part.params) do { p ->
                paramnr := paramnr + 1
                if (emitTypeChecks && (p.dtype != false)) then {
                    noteLineNumber(o.line)comment("argument check in compilemethod")
                    def dtype = compilenode(p.dtype)
                    out("if (!Grace_isTrue(callmethod({dtype}, \"match(1)\"," ++
                        "  [1], arguments[curarg])))")
                    out "    throw new GraceExceptionPacket(TypeErrorObject,"
                    out "        new GraceString(\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \" + "
                    out "            callmethod({dtype}, \"asString\", [0])._value + \".\"));"
                }
                out("curarg++;")
            }
        }
        out "// End argument checking"
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

method compileMethodBody(o)  {
    var ret := "GraceDone"
    var lastLine := o.line
    for (o.body) do { l ->
        ret := compilenode(l)
        lastLine := l.line
    }
    if (ret != "undefined") then {  // TODO what if it is "undefined" ?

    }
    compileResultTypeCheck(o, ret) onLine (lastLine)
    return ret
}

method compileFreshMethodBody(o) {
    var tailObject := false
    // two cases: body ends with an object, or body ends with a clone method
    if ((o.body.size > 0) && {o.body.last.isObject}) then {
        tailObject := o.body.pop    // remove tail object
        util.log 50 verbose "object name was {tailObject.name}, changed to {o.nameString}"
        tailObject.name := o.nameString
    }
    var ret := "GraceDone"
    var lastLine := o.line
    for (o.body) do { l ->
        ret := compilenode(l)
        lastLine := l.line
    }
    if (false != tailObject) then {
        o.body.push(tailObject)     // put tail object back
        compileobject(tailObject, "this", true)
        ret := tailObject.register
    }
    compileResultTypeCheck(o, ret) onLine (lastLine)
    return ret
}

method compileResultTypeCheck(o, ret) onLine (lineNr) {
    if (emitTypeChecks && (false ≠ o.dtype)) then {
        def dtype = compilenode(o.dtype)
        noteLineNumber (lineNr) comment "return value"
        out "if (!Grace_isTrue(callmethod({dtype}, \"match(1)\", [1], {ret})))"
        out "    throw new GraceExceptionPacket(TypeErrorObject,"
        out "        new GraceString(\"result of method {o.canonicalName} does not have \" + "
        out "            callmethod({dtype}, \"asString\", [0])._value + \".\"));"
    }
}

method compileMetadata(o, myc, name, selfobj) {
    out "func{myc}.paramCounts = {paramCounts(o)};"
    out "func{myc}.definitionLine = {o.line};"
    out "func{myc}.definitionModule = \"{modname}\";"
    out "{selfobj}.methods[\"{name}\"] = func{myc};"
}

method compilemethod(o, selfobj) {
    def oldusedvars = usedvars
    def olddeclaredvars = declaredvars
    def myc = auto_count
    auto_count := auto_count + 1
    o.register := "func{myc}"
    def isSimpleAccessor = (o.body.size == 1) && {o.body.first.isIdentifier}
    usedvars := []
    declaredvars := []
    def name = escapestring(o.nameString)
    compileMethodPreamble(o, myc, o.canonicalName)
    if (debugMode && isSimpleAccessor.not) then {
        out "var myframe = new StackFrame(\"{name}\");"
    }
    compileParameters(o) withDebug(debugMode && isSimpleAccessor.not)
    compileTypeParameters(o) atPosition(o.signature.size)
    compileArgumentTypeChecks(o)
    if (isSimpleAccessor) then {
        out "// {o.canonicalName} is a simple accessor - elide try ... catch"
        out "return {compilenode(o.body.first)};"
    } else {
        debugModePrefix
        out "return {compileMethodBody(o)};"
        debugModeSuffix
    }
    compileMethodPostamble(o, myc, o.canonicalName)
    usedvars := oldusedvars
    declaredvars := olddeclaredvars
    compileMetadata(o, myc, name, selfobj)
    if (o.isFresh) then {
        compilefreshmethod(o, selfobj)
    }
}
method compilefreshmethod(o, selfobj) {
    def myc = auto_count
    auto_count := auto_count + 1
    def isSimpleAccessor = false
    def name = escapestring(o.nameString ++ "$object(1)")
    compileMethodPreamble(o, myc, o.canonicalName ++ "$object(_)")
    compileParameters(o) withDebug(false)
    compileInheritingObjectParameter
    compileTypeParameters(o) atPosition(o.signature.size + 1)
    compileArgumentTypeChecks(o)
    debugModePrefix
    out "return {compileFreshMethodBody(o)};"
    debugModeSuffix
    compileMethodPostamble(o, myc, o.canonicalName ++ "$object(_)")
    compileMetadata(o, myc, name, selfobj)
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
    var myc := auto_count
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
    var nm
    var snm
    def currentScope = o.scope
    if (o.name.kind == "generic") then {
        snm := o.name.value.value
    } else {
        snm := o.name.value
    }
    nm := snm
    if (debugMode) then {
        out "myframe.addVar(\"{escapestring(nm)}\", function() \{return {varf(nm)}});"
    }
    declaredvars.push(nm)
    var val := compilenode(o.value)
    out("var " ++ varf(nm) ++ " = " ++ val ++ ";")
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],
            [o.name], false) scope(currentScope))
        if (ast.findAnnotation(o, "parent")) then {
            out("this.superobj = {val};")
        }
        out("this.methods[\"{nm}\"].debug = \"def\";")
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                noteLineNumber(o.line)comment("compiledefdec")
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match(1)\", [1], {varf(nm)})))"
                out "  throw new GraceExceptionPacket(TypeErrorObject,"
                out "      new GraceString(\"value of def '{snm}' is not of type {o.dtype.toGrace(0)}\"));"
            }
        }
    }
    o.register := "GraceDone"
}
method compilevardec(o) {
    var nm := o.name.value
    def currentScope = o.scope
    declaredvars.push(nm)
    var val := o.value
    if (false != val) then {
        val := compilenode(val)
        out("var " ++ varf(nm) ++ " = " ++ val ++ ";")
    } else {
        out("var " ++ varf(nm) ++ ";")
        val := "false"
    }
    if (debugMode) then {
        out "myframe.addVar(\"{escapestring(nm)}\", function() \{return {varf(nm)}});"
    }
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],
            [o.name], false) scope(currentScope))
        def paramID = ast.identifierNode.new("_var_assign_tmp", false)
        compilenode(ast.methodNode.new(
            [ast.signaturePart.partName(o.nameString ++ ":=") params( [paramID] ) scope(currentScope)],
            [ast.bindNode.new(o.name, paramID)], false)  scope(currentScope))
        out("this.methods[\"{nm}\"].debug = \"var\";")
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                if (val != "false") then {
                    noteLineNumber(o.line)comment("compilevardec")
                    out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match(1)\", [1], {varf(nm)})))"
                    out "  throw new GraceExceptionPacket(TypeErrorObject,"
                    out "      new GraceString(\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\"));"
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
    out("var call{auto_count} = callmethodsuper(this" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileOuterRequest(o, args) {
    out "// call case 2: outer request"
    def ot = compilenode(o.receiver)
    out("var call{auto_count} = {requestCall}({ot}" ++
          ", \"{escapestring(o.receiver.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileSelfOuterRequest(o, args) {
    out "// call case 3: self.outer request"
    out("var call{auto_count} = {requestCall}(superDepth, " ++
            "\"outer\", [0]);")
}
method compileSelfRequest(o, args) {
    out "// call case 4: self request"
    out("onSelf = true;");
    out("var call{auto_count} = {requestCall}(this" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compilePreludeRequest(o, args) {
    out "// call case 5: prelude request"
    out("var call{auto_count} = {requestCall}(var_prelude" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compileOtherRequest(o, args) {
    out "// call case 6: other requests"
    def target = compilenode(o.receiver)
    if (o.isSelfRequest) then {
        out "onSelf = true;"
    }
    out("var call{auto_count} = {requestCall}({target}" ++
          ", \"{escapestring(o.nameString)}\", [{partl(o)}]{assembleArguments(args)});")
}
method compilecall(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    var args := []
    compileArguments(o, args)
    def receiver = o.receiver
    if (receiver.isSuper) then {
        compileSuperRequest(o, args)
    } elseif { receiver.isOuter } then {
        compileOuterRequest(o, args)
    } elseif { receiver.isSelf && { o.nameString == "outer" } } then {
        compileSelfOuterRequest(o, args)
    } elseif { receiver.isSelf } then {
        compileSelfRequest(o, args)
    } elseif { receiver.isPrelude } then {
        compilePreludeRequest(o, args)
    } else {
        compileOtherRequest(o, args)
    }
    o.register := "call" ++ auto_count
    auto_count := auto_count + 1
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
    var nm := escapeident(o.nameString)
    var fn := escapestring(o.path)
    out("if (typeof {formatModname(o.path)} == 'undefined')")
    out "  throw new GraceExceptionPacket(EnvironmentExceptionObject, "
    out "    new GraceString('could not find module {o.path}'));"
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
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match(1)\","
                out "  [1], {varf(nm)})))"
                out "    throw new GraceExceptionPacket(TypeErrorObject,"
                out "          new GraceString(\"module {o.nameString} is not of type {o.dtype.toGrace(0)}\"))";
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
    }
    if (oKind == "string") then {
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
        compileobject(o, "this", false)
    } elseif { oKind == "typedec" } then {
        compiletypedec(o)
    } elseif { oKind == "typeliteral" } then {
        compiletypeliteral(o)
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
    }
    compilationDepth := compilationDepth - 1
    o.register
}

method compile(moduleObject, of, rm, bt, glPath) {
    var argv := sys.argv
    def isPrelude = util.extensions.contains("NativePrelude")
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
    runmode := rm
    buildtype := bt
    if (util.extensions.contains("Debug")) then {
        debugMode := true
    }
    util.log_verbose("generating ECMAScript code.")
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
    out "this.definitionModule = \"{modname}\";"
    out "this.definitionLine = 0;"
    out "var var_prelude = var___95__prelude;"
        // var_prelude must be local to this function, because its value
        // varies from module to modules.

    if (debugMode) then {
        out "var myframe = new StackFrame(\"{modname} module\");"
        out "stackFrames.push(myframe);"
    }
    compileobjouter("this", "var_prelude")
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
            compileInherits(moduleObject.superclass) in (moduleObject, "this")
        }
        moduleObject.usedTraits.do { t ->
            compileInherits(t) in (moduleObject, "this")
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
    def importList = imported.map{ each -> "'{each}'" }.asList.sort
    out "{generatedModuleName}.imports = {importList};"

    moduleObject.imports := imports.other
    xmodule.writeGctForModule(moduleObject)

    def gct = xmodule.parseGCT(modname)
    def gctText = xmodule.gctAsString(gct)
    out "if (typeof gctCache !== \"undefined\")"
    out "  gctCache['{escapestring(basename(modname))}'] = \"{escapestring(gctText)}\";"
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

method compileInherits(o) in (objNode, selfr) {
    // o is an inherit node: compile it.
    // selfr is the name of enclosing object; objNode is the enclosing AST node
    if (o.isUse) then {
        compileTrait(o) in (objNode, selfr)
    } else {
        compileSuper(o, selfr)
    }
}

method compileSuper(o, selfr) {
    def sup = compilenode(o.value)
    out "{selfr}.superobj = {sup};"
    out "if ({sup}.data) {selfr}.data = {sup}.data;"
    // out "delete {sup}.data;"    // to avoid a redundant reference
    out "if ({sup}.hasOwnProperty('_value'))"
    out "    {selfr}._value = {sup}._value;"
    // out "delete {sup}._value;"  // to avoid an inconsistent copy of built-in values
    // this breaks inheritance from booleans
    o.aliases.do { each ->
        out "{selfr}.methods['{each.newName.nameString}'] = findMethod({sup}, '{each.oldName.nameString}');"
    }
    o.exclusions.do { each ->
        out "delete {sup}.methods['{each.nameString}'];"
    }
}

method compileTrait(o) in (objNode, selfr) {
    def tObj = compilenode(o.value)
    def tMethNames = o.providedNames -- objNode.localNames
//    util.log 70 verbose "tMethNames = {tMethNames.asList.sort}"
    o.aliases.do { each ->
        def nn = each.newName.nameString
        out("{selfr}.methods['{nn}'] = " ++
            "{tObj}.methods['{each.oldName.nameString}'];  // alias")
        tMethNames.remove(nn)
    }
    tMethNames.do { methName ->
        out "{selfr}.methods['{methName}'] = {tObj}.methods['{methName}'];"
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
