#pragma DefaultVisibility=public
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
def importedModules = set.empty
def topLevelTypes = set.empty
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

method increaseindent() {
    indent := indent ++ "  "
}

method decreaseindent() {
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
    out "var array{myc} = new PrimitiveGraceList({vals});"
    o.register := "array" ++ myc
}
method compilemember(o) {
    // Member in value position is actually a nullary method call.
    util.setline(o.line)
    var c := ast.callNode.new(o, [ast.callWithPart.request(o.value) withArgs( [] )]) scope(o.scope)
    var r := compilenode(c)
    o.register := r
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
        if ((ann.kind == "identifier").andAlso
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
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\", [1], {val})))"
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
    out(selfr ++ ".methods[\"" ++ nm ++ ":=\"] = writer_" ++ emod ++
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
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\", [1], {val})))"
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
            "null"  // inheritance will be compiled later, when the inherits node is found
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
        out "    {selfr}._value = inheritingObject._value;"
    }
    compileobjouter(selfr, outerRef)
    out("var obj_init_{myc} = function () \{")
    increaseindent
    out("var origSuperDepth = superDepth;")
    out("superDepth = {selfr};")
    var pos := 0
    for (o.value) do { e ->
        if (e.kind == "method") then {
            compilemethod(e, selfr)
        }
    }
        
    // compile inherits
    if (false != o.superclass) then {
        out "sourceObject = {selfr};"
        compileInherits(o.superclass) in (o, selfr)
    }
    
    // compile traits
    o.usedTraits.do { t -> compileInherits(t) in (o, selfr) }

    // compile body
    o.value.do { e ->
        if (e.kind == "method") then {
        } elseif { e.kind == "vardec" } then {
            out "sourceObject = {selfr};"
            compileobjvardec(e, selfr, pos)
            out("{selfr}.mutable = true;")
            pos := pos + 1
        } elseif { e.kind == "defdec" } then {
            out "sourceObject = {selfr};"
            compileobjdefdec(e, selfr, pos)
            pos := pos + 1
        } elseif { e.kind == "typedec" } then {
            out "sourceObject = {selfr};"
            compiletypedec(e)
            pos := pos + 1
        } elseif { e.kind == "object" } then {
            out "sourceObject = {selfr};"
            compileobject(e, selfr, false)
        } else {
            out "sourceObject = {selfr};"
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
    var myc := auto_count
    def nParams = o.params.size
    auto_count := auto_count + 1
    out "var block{myc} = new GraceBlock(this, {o.line}, {nParams});"
    if (false != o.matchingPattern) then {
        def pat = compilenode(o.matchingPattern)
        out "block{myc}.pattern = {pat};"
    }
    var paramList := ""
    var paramTypes := list.empty
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
    out("block" ++ myc ++ ".real = function(" ++ paramList ++ ") \{")
    increaseindent
    out("sourceObject = this;")
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
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name.value) scope(enclosing)],
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
        def mnm = escapestring(meth.value)
        out("type{myc}.typeMethods.push(\"{mnm}\");")
    }
    // TODO: types in the type literal
    o.register := "type{myc}"
}
method compilemethod(o, selfobj) {
    var oldusedvars := usedvars
    var olddeclaredvars := declaredvars
    def paramCounts = list.empty
    def variableArities = list.empty
    for (o.signature) do { part ->
        paramCounts.push(part.params.size)
        variableArities.push(part.vararg != false)
    }
    var textualSignature := ""
    for (o.signature) do { part ->
        def size = part.params.size
        def isVar = part.vararg != false
        def varChar = if (isVar) then {"+"} else {""}
        textualSignature := textualSignature ++ part.name
        if ((size > 0) || (isVar)) then {
            textualSignature := textualSignature ++ "({size}{varChar})"
        }
    }
    usedvars := []
    declaredvars := []
    var myc := auto_count
    auto_count := auto_count + 1
    var name := escapestring(o.value.value)
    var nm := name ++ myc
    var closurevars := []
    var haveTypedParams := false
    for (o.signature) do { part ->
        for (part.params) do {p->
            if (p.dtype != false) then {
                if ((p.dtype.value != "Unknown")
                    && ((p.dtype.kind == "identifier")
                        || (p.dtype.kind == "typeliteral"))) then {
                    haveTypedParams := true
                }
            }
        }
    }
    out("var func" ++ myc ++ " = function(argcv) \{    // method " ++ textualSignature)
    increaseindent
    out("var curarg = 1;")
    if (debugMode) then {
        out "var myframe = new StackFrame(\"{name}\");"
    }
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        for (part.params) do { p ->
            out "var {varf(p.value)} = arguments[curarg];"
            out "curarg++;"
            if (debugMode) then {
                out "myframe.addVar(\"{escapestring(p.value)}\","
                out "  function() \{return {varf(p.value)};});"
            }
        }
        if (part.vararg != false) then {
            out("var {varf(part.vararg.value)} = new PrimitiveGraceList("
                ++ "Array.prototype.slice.call(arguments, curarg, "
                ++ "curarg + argcv[{partnr - 1}] - {part.params.size}));")
            out("curarg += argcv[{partnr - 1}] - {part.params.size};")
            if (debugMode) then {
                out "myframe.addVar(\"{escapestring(part.vararg.value)}\","
                out "  function() \{return {varf(part.vararg.value)};});"
            }
        } elseif { emitArgChecks } then {
            out "if (argcv[{partnr - 1}] !== {part.params.size})"
            def msgSuffix = if (o.signature.size < 2) then { 
                textualSignature
            } else { 
                "{part.name} (arg list {partnr}) of {textualSignature}"
            }
            out("  throw new GraceExceptionPacket(ProgrammingErrorObject, new "
                ++ "GraceString(\"wrong number of arguments for "
                ++ msgSuffix ++ "\"));")
        }
    }
    if (o.typeParams != false) then {
        def sz = o.signature.size
        out "// Start type arguments"
        o.typeParams.do {g->
            out "var {varf(g.value)} = var_Unknown;"
        }
        out "if (argcv.length == {1 + sz}) \{"
        if (emitArgChecks) then {
            out "  if (argcv[{sz}] !== {o.typeParams.size}) \{"
            out "    throw new GraceExceptionPacket(ProgrammingErrorObject, "
            out "        new GraceString(\"wrong number of type arguments for {textualSignature}\"));"
            out "  \}"
        }
        o.typeParams.do { g ->
            out("  {varf(g.value)} = arguments[curarg++];")
        }
        out "\}"
        out "// End type arguments"
    }
    out "// Start argument processing"
    out "curarg = 1;"
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        var paramnr := 0
        for (part.params) do { p ->
            paramnr := paramnr + 1
            if (emitTypeChecks && (p.dtype != false)) then {
                noteLineNumber(o.line)comment("argument check in compilemethod")
                def dtype = compilenode(p.dtype)
                out("if (!Grace_isTrue(callmethod({dtype}, \"match\"," ++
                    "  [1], arguments[curarg])))")
                out "    throw new GraceExceptionPacket(TypeErrorObject," 
                out "        new GraceString(\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \" + "
                out "            callmethod({dtype}, \"asString\", [0])._value + \".\"));"
            }
            out("curarg++;")
        }
        if (part.vararg != false) then {
            def pName = varf(part.vararg.value)
            out("var {pName} = new PrimitiveGraceList("
                ++ "Array.prototype.slice.call(arguments, curarg, "
                ++ "curarg + argcv[{partnr - 1}] - {part.params.size}));")
            out "curarg += argcv[{partnr - 1}] - {part.params.size};"
        }
    }
    out "// End argument processing"

    // Setting the location is deliberately delayed to this point, so that
    // argument checking errors are reported as errors at the request site
    // --- which is where the error happens.
    out("setModuleName(\"{modname}\");")
    if (debugMode) then {
        out "stackFrames.push(myframe);"
    }
    def isSimpleAccessor = (o.body.size == 1).andAlso{o.body.at(1).kind == "identifier"}
    if (isSimpleAccessor) then {
        out "// {textualSignature} is a simple accessor - elide try ... catch"
        def ret = compilenode(o.body.at(1))
        out("return " ++ ret ++ ";")
    } else {
        out("var returnTarget = invocationCount;")
        out("invocationCount++;")
        out("try \{")
        increaseindent
        var ret := "GraceDone"
        var lastLine := o.line
        for (o.body) do { l ->
            ret := compilenode(l)
            lastLine := l.line
        }
        if (debugMode) then {
            out "stackFrames.pop();"
        }
        if (ret != "undefined") then {
            if (emitTypeChecks && (o.dtype != false)) then {
                def dtype = compilenode(o.dtype)
                noteLineNumber (lastLine) comment "return value"
                out "if (!Grace_isTrue(callmethod({dtype}, \"match\", [1], {ret})))"
                out "    throw new GraceExceptionPacket(TypeErrorObject," 
                out "        new GraceString(\"result of method {textualSignature} does not have \" + "
                out "            callmethod({dtype}, \"asString\", [0])._value + \".\"));"
            }
            out("return " ++ ret ++ ";")
        }
        decreaseindent
        out("\} catch(e) \{")
        if (debugMode) then {
            out "stackFrames.pop();"
        }
        out("  if ((e.exctype == 'return') && (e.target == returnTarget)) \{")
        out("    return e.returnvalue;")
        out("  \} else \{")
        out("    throw e;")
        out("  \}")
        out("\}")
    }
    decreaseindent
    out "\};"
    usedvars := oldusedvars
    declaredvars := olddeclaredvars
    if (haveTypedParams) then {
        compilemethodtypes("func{myc}", o)
    }
    if (o.isConfidential) then {
        out "  func{myc}.confidential = true;"
    }
    out "func{myc}.paramCounts = {paramCounts};"
    out "func{myc}.variableArities = {variableArities};"
    out("{selfobj}.methods[\"{name}\"] = func{myc};")
    out "func{myc}.definitionLine = {o.line};"
    out "func{myc}.definitionModule = \"{modname}\";"
    o.register := "func{myc}"
    if (o.isFresh) then {
        increaseindent
        compilefreshmethod(o, selfobj)
        decreaseindent
    }
}
method compilefreshmethod(o, selfobj) {
    def paramCounts = list.empty
    def variableArities = list.empty
    for (o.signature) do { part ->
        paramCounts.push(part.params.size)
        variableArities.push(part.vararg != false)
    }
    var textualSignature := ""
    for (o.signature) do { part ->
        def size = part.params.size
        def isVar = part.vararg != false
        def varChar = if (isVar) then {"+"} else {""}
        textualSignature := textualSignature ++ part.name
        if ((size > 0) || (isVar)) then {
            textualSignature := textualSignature ++ "({size}{varChar})"
        }
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var name := escapestring(o.value.value)
    var nm := name ++ myc
    var haveTypedParams := false
    for (o.signature) do { part ->
        for (part.params) do {p->
            if (p.dtype != false) then {
                if ((p.dtype.value != "Unknown")
                    && ((p.dtype.kind == "identifier")
                        || (p.dtype.kind == "typeliteral"))) then {
                    haveTypedParams := true
                }
            }
        }
    }
    out "var func{myc} = function(argcv) \{    // method {textualSignature}()object"
    increaseindent
    out("var curarg = 1;")
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        for (part.params) do { p ->
            out("var {varf(p.value)} = arguments[curarg];")
            out("curarg++;")
        }
        if (part.vararg != false) then {
            def pName = varf(part.vararg.value)
            out("var {pName} = new PrimitiveGraceList("
                ++ "Array.prototype.slice.call(arguments, curarg, "
                ++ "curarg + argcv[{partnr - 1}] - {part.params.size}));")
            out("curarg += argcv[{partnr - 1}] - {part.params.size};")
        }
    }
    out "var inheritingObject = arguments[curarg++];"
    if (o.typeParams != false) then {
        def sz = o.signature.size + 1
        out "// Start type arguments"
        o.typeParams.do {g->
            out "var {varf(g.value)} = var_Unknown;"
        }
        out "if (argcv.length == {1 + sz}) \{"
        if (emitArgChecks) then {
            out "  if (argcv[{sz}] !== {o.typeParams.size}) \{"
            out "    callmethod(ProgrammingErrorObject, \"raise\", [1], "
            out "        new GraceString(\"wrong number of type arguments\"));"
            out "  \}"
        }
        o.typeParams.do { g ->
            out("  {varf(g.value)} = arguments[curarg++];")
        }
        out "\}"
        out "// End type arguments"
    }
    out "// Start argument processing"
    out "curarg = 1;"
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        var paramnr := 0
        for (part.params) do { p ->
            paramnr := paramnr + 1
            if (emitTypeChecks && (p.dtype != false)) then {
                noteLineNumber(o.line)comment("argument check in compilefreshmethod")
                def dtype = compilenode(p.dtype)
                out("if (!Grace_isTrue(callmethod({dtype}, \"match\"," ++
                    "  [1], arguments[curarg])))")
                out "    throw new GraceExceptionPacket(TypeErrorObject," 
                out "        new GraceString(\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \" + "
                out "            callmethod({dtype}, \"asString\", [0])._value + \".\"));"
            }
            out("curarg++;")
        }
        if (part.vararg != false) then {
            def pName = varf(part.vararg.value)
            out("var {pName} = new PrimitiveGraceList("
                ++ "Array.prototype.slice.call(arguments, curarg, "
                ++ "curarg + argcv[{partnr - 1}] - {part.params.size}));")
            out("curarg += argcv[{partnr - 1}] - {part.params.size};")
        }
    }
    out "// End argument processing"

    // Setting the location is deliberately delayed to this point, so that
    // argument checking errors are reported as errors at the request site
    // --- which is where the error happens.
    out("setModuleName(\"{modname}\");")
    if (debugMode) then {
        out "stackFrames.push(myframe);"
    }
    out("var returnTarget = invocationCount;")
    out("invocationCount++;")
    out("try \{")
    increaseindent
    var tailObject := false
    if ((o.body.size > 0).andAlso {o.body.last.kind == "object"}) then {
        tailObject := o.body.pop    // remove tail object
        tailObject.name := o.nameString
    }
    var ret := "GraceDone"
    for (o.body) do { l ->
        ret := compilenode(l)
    }
    if (false != tailObject) then {
        o.body.push(tailObject)     // put tail object back
        compileobject(tailObject, "this", true)
        ret := tailObject.register
    }
    out("return " ++ ret ++ ";")
    decreaseindent
    out("\} catch(e) \{")
    out("  if ((e.exctype == 'return') && (e.target == returnTarget)) \{")
    out("    return e.returnvalue;")
    out("  \} else \{")
    out("    throw e;")
    out("  \}")
    out("\}")
    decreaseindent
    out "\};"
    if (haveTypedParams) then {
        compilemethodtypes("func{myc}", o)
    }
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso
            {ann.value == "confidential"}) then {
            out("func{myc}.confidential = true;")
        }
    }
    out(selfobj ++ ".methods[\"" ++ name ++ "()object\"] = func" ++ myc ++ ";")
}
method compilemethodtypes(func, o) {
    out("{func}.paramTypes = [];")
    var pi := 0
    for (o.signature) do { part ->
        for (part.params) do {p->
            // We store information for static top-level types only:
            // absent information is treated as Unknown (and unchecked).
            if (false != p.dtype) then {
                if ((p.dtype.kind == "identifier").andAlso{p.dtype.value != "Unknown"}
                    || (p.dtype.kind == "typeliteral")) then {
                    def typeid = escapeident(p.dtype.value)
                    if (topLevelTypes.contains(typeid)) then {
                        out("{func}.paramTypes.push(["
                            ++ "type_{typeid}, \"{escapestring(p.value)}\"]);")
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
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name.value) scope(currentScope)],
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
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\", [1], {varf(nm)})))"
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
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name.value) scope(currentScope)],
            [o.name], false) scope(currentScope))
        def assignID = ast.identifierNode.new(o.name.value ++ ":=", false) scope(currentScope)
        def tmpID = ast.identifierNode.new("_var_assign_tmp", false)
        compilenode(ast.methodNode.new(assignID,
            [ast.signaturePart.partName(assignID.value) params( [tmpID] ) scope(currentScope)],
            [ast.bindNode.new(o.name, tmpID)], false)  scope(currentScope))
        out("this.methods[\"{nm}\"].debug = \"var\";")
    }
    if (emitTypeChecks) then {
        if (o.dtype != false) then {
            if (o.dtype.value != "Unknown") then {
                if (val != "false") then {
                    noteLineNumber(o.line)comment("compilevardec")
                    out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\", [1], {varf(nm)})))"
                    out "  throw new GraceExceptionPacket(TypeErrorObject,"
                    out "      new GraceString(\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\"));"
                }
            }
        }
    }
    o.register := "GraceDone"
}
method compileindex(o) {
    def of = compilenode(o.value)
    def index = compilenode(o.index)
    o.register := "idxres" ++ auto_count
    auto_count := auto_count + 1
    if (emitArgChecks) then {
        out "var {o.register} = callmethodChecked({of}, \"[]\", [1], {index});"
    } else {
        out "var {o.register} = callmethod({of}, \"[]\", [1], {index});"
    }
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
    if ((o.left.kind == "identifier") && (o.left.value == "super")) then {
        out("var " ++ rnm ++ auto_count ++ " = callmethodsuper(this"
            ++ ", \"" ++ escapestring(o.value) ++ "\", [1], " ++ right ++ ");")
    } else {
        var left := compilenode(o.left)
        auto_count := auto_count + 1
        if (emitArgChecks) then {
            out("var " ++ rnm ++ auto_count ++ " = callmethodChecked(" ++ left
                ++ ", \"" ++ escapestring(o.value) ++ "\", [1], " ++ right ++ ");")
        } else {
            out("var " ++ rnm ++ auto_count ++ " = callmethod(" ++ left
                ++ ", \"" ++ escapestring(o.value) ++ "\", [1], " ++ right ++ ");")
        }
    }
    o.register := rnm ++ auto_count
    auto_count := auto_count + 1
}
method compilecall(o) {
    noteLineNumber (o.line) comment "compilenode {o.kind}"
    var args := []
    var obj := ""
    var len := 0
    var con := ""
    for (o.with) do { part ->
        for (part.args) do { p ->
            var r := compilenode(p)
            args.push(r)
        }
    }
    if (false != o.generics) then {
        o.generics.do {g->
            args.push(compilenode(g))
        }
    }
    var partl := ""
    for (o.with.indices) do { partnr ->
        partl := partl ++ o.with[partnr].args.size
        if (partnr < o.with.size) then {
            partl := partl ++ ", "
        }
    }
    if (false != o.generics) then {
        partl := partl ++ ", {o.generics.size}"
    }
    def request = if (emitArgChecks) then {
        "callmethodChecked"
    } else { 
        "callmethod"
    }
    if ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "super")}) then {
        var call := "var call" ++ auto_count ++ " = callmethodsuper(this"
            ++ ", \"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out(call)
    } elseif { (o.value.kind == "member").andAlso {
        o.value.in.kind == "member"}.andAlso {
            o.value.in.value == "outer"} } then {
        def ot = compilenode(o.value.in)
        var call := "var call" ++ auto_count ++ " = " ++ requestCall ++ "({ot}"
            ++ ", \"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out("onOuter = true;");
        out("onSelf = true;");
        out(call)
    } elseif { (o.value.kind == "member") && {(o.value.in.kind == "identifier")
            && (o.value.in.value == "self") && (o.value.value == "outer")}
        } then {
        out("var call{auto_count} = " ++ requestCall ++ "(superDepth, "
            ++ "\"outer\", [0]);")
    } elseif { (o.value.kind == "member") && {(o.value.in.kind == "identifier")
            && (o.value.in.value == "self")} } then {
        var call := "var call" ++ auto_count ++ " = " ++ requestCall ++ "(this"
            ++ ", \"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out("onSelf = true;");
        out(call)
    } elseif { (o.value.kind == "member") && {(o.value.in.kind == "identifier")
            && (o.value.in.value == "prelude")} } then {
        var call := "var call" ++ auto_count ++ " = " ++ requestCall ++ "(var_prelude, \""
            ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out(call)
    } elseif { o.value.kind == "member" } then {
        obj := compilenode(o.value.in)
        var call := "var call" ++ auto_count ++ " = " ++ requestCall ++ "(" ++ obj
            ++ ",\"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out(call)
    } else {
        obj := "this"
        var call := "var call" ++ auto_count ++ " = " ++ requestCall ++ "(this,"
            ++ "\"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out(call)
    }
    o.register := "call" ++ auto_count
    auto_count := auto_count + 1
}
method compileoctets(o) {
    var escval := ""
    var l := o.value.size / 2
    var i := 0
    for (o.value) do {c->
        if ((i % 2) == 0) then {
            escval := escval ++ "\\"
        }
        escval := escval ++ c
        i := i + 1
    }
    out("%tmp" ++ auto_count ++ " = load %object** @.octlit"
        ++ auto_count)
    out("%cmp" ++ auto_count ++ " = icmp ne %object* %tmp"
        ++ auto_count ++ ", null")
    out("br i1 %cmp" ++ auto_count ++ ", label %octlit"
        ++ auto_count ++ ".already, label %octlit"
        ++ auto_count ++ ".define")
    beginblock("octlit" ++ auto_count ++ ".already")
    out("%alreadyoctets" ++ auto_count ++ " = load %object** @.octlit"
        ++ auto_count)
    out("br label %octlit" ++ auto_count ++ ".end")
    beginblock("octlit" ++ auto_count ++ ".define")
    out("%oct" ++ auto_count ++ " = getelementptr [" ++ l ++ " x i8]* @.oct" ++ constants.size ++ ", i32 0, i32 0")
    out("%defoctets" ++ auto_count ++ " = call %object* "
        ++ "@alloc_Octets(i8* "
          ++ "%oct" ++ auto_count ++ ", i32 " ++ l ++ ")")
    out("store %object* %defoctets" ++ auto_count ++ ", %object** "
        ++ "@.octlit" ++ auto_count)
    out("br label %octlit" ++ auto_count ++ ".end")
    beginblock("octlit" ++ auto_count ++ ".end")
    out(" %octets" ++ auto_count ++ " = phi %object* [%alreadyoctets"
        ++ auto_count ++ ", %octlit" ++ auto_count ++ ".already], "
        ++ "[%defoctets" ++ auto_count ++ ", %octlit" ++ auto_count
        ++ ".define]")
    var con := "@.oct" ++ constants.size ++ " = private unnamed_addr "
        ++ "constant [" ++ l ++ " x i8] c\"" ++ escval ++ "\""
    constants.push(con)
    con := ("@.octlit" ++ auto_count
        ++ " = private global %object* null")
    constants.push(con)
    o.register := "%octets" ++ auto_count
    auto_count := auto_count + 1
}
method compiledialect(o) {
    out("// Dialect import of {o.value}")
    var fn := escapestring(o.value)
    out "var_prelude = do_import(\"{fn}\", {formatModname(o.value)});"
    out "this.outer = var_prelude;"
    if (xmodule.currentDialect.hasAtStart) then {
        out "callmethod(var_prelude, \"atModuleStart\", [1], "
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
    def accessor = (ast.methodNode.new(methodIdent, [ast.signaturePart.partName(o.nameString) scope(currentScope)],
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
                out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\","
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
    } elseif { oKind == "index" } then {
        compileindex(o)
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
    } elseif { o.kind == "typeliteral" } then {
        compiletypeliteral(o)
    } elseif { oKind == "member" } then {
        compilemember(o)
    } elseif { oKind == "call" } then {
        if (o.value.isMember.andAlso{o.value.in.value == "prelude"}) then {
            if (o.nameString == "print") then {
                compilePrint(o)
            } elseif {o.nameString == "native()code"} then {
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
        out "var___95__prelude = do_import(\"StandardPrelude\", gracecode_StandardPrelude);"
    }
    util.setline(1)
    out("function {formatModname(modname)} () \{")
    increaseindent
    out("setModuleName(\"{modname}\");")
    out("if (callStack.length === 0)")
    out("  callStack = [\"execution environment\"];")
    out "this.definitionModule = \"{modname}\";"
    out "this.definitionLine = 0;"
    out "var var_prelude = var___95__prelude;"
        // var_prelude must be local to this function, because its value
        // varies from module to modules.

    if (debugMode) then {
        out "myframe = new StackFrame(\"{modname} module\");"
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
        out("callmethod(var_prelude, \"atModuleEnd\", [1], this);")
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
    // o is an inherits node: compile it.  
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
