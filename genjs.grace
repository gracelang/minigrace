#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "mgcollections" as mgcollections
import "xmodule" as xmodule
import "mirrors" as mirrors

var tmp
var indent := ""
var verbosity := 30
var pad1 := 1
var auto_count := 0
var constants := []
var output := []
var usedvars := []
var declaredvars := []
var bblock := "entry"
var linenum := 0
var modules := []
var values := []
var outfile
var modname := "main"
var runmode := "build"
var buildtype := "bc"
var gracelibPath := "gracelib.o"
var inBlock := false
var compilationDepth := 0
def staticmodules = mgcollections.set.new
def topLevelTypes = mgcollections.map.new
var dialectHasAtModuleEnd := false

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

method out(s) {
    output.push(indent ++ s)
}
method outprint(s) {
    util.outprint(s)
}
method log_verbose(s) {
    util.log_verbose(s)
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
        } elseif (c == "\\") then {
            os := os ++ "\\\\"
        } elseif (c == "\n") then {
            os := os ++ "\\n"
        } elseif ((c.ord < 32) || (c.ord > 126)) then {
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
    out("var array" ++ myc ++ " = new GraceList([")
    increaseindent
    for (vals) do {v->
        out(v ++ ",")
    }
    decreaseindent
    out("]);\n")
    o.register := "array" ++ myc
}
method compilemember(o) {
    // Member in value position is actually a nullary method call.
    var c := ast.callNode.new(o, [ast.callWithPart.new(o.value)])
    var r := compilenode(c)
    o.register := r
}
method compileobjouter(selfr, outerRef) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring("outer")
    var nmi := escapeident("outer")
    out(selfr ++ ".outer = " ++ outerRef ++ ";")
    out("var reader_" ++ modname ++ "_" ++ nmi ++ myc ++ " = function() \{")
    out("  return this.outer;")
    out("\}")
    out(selfr ++ ".methods[\"" ++ nm ++ "\"] = reader_" ++ modname ++
        "_" ++ nmi ++ myc ++ ";")
}
method compileobjtype(o, selfr, pos) {
    var val := "undefined"
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := escapestring(o.value)
    var nmi := escapeident(o.value)
    o.anonymous := true
    val := compilenode(o)
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("var reader_" ++ modname ++ "_" ++ nmi ++ myc ++ " = function() \{")
    out("  return this.data[\"" ++ nm ++ "\"];")
    out("\}")
    out("reader_{modname}_{nmi}{myc}.def = true;")
    var isReadable := false
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso
            {ann.value == "confidential"}) then {
            out("reader_{modname}_{nmi}{myc}.confidential = true;")
        }
    }
    out(selfr ++ ".methods[\"" ++ nm ++ "\"] = reader_" ++ modname ++
        "_" ++ nmi ++ myc ++ ";")
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
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("var reader_" ++ modname ++ "_" ++ nmi ++ myc ++ " = function() \{")
    out("  return this.data[\"" ++ nm ++ "\"];")
    out("\}")
    out("reader_{modname}_{nmi}{myc}.def = true;")
    var isReadable := false
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso
            {ann.value == "public"}) then {
            isReadable := true
        }
        if ((ann.kind == "identifier").andAlso
            {ann.value == "readable"}) then {
            isReadable := true
        }
    }
    if (!isReadable) then {
        out("reader_{modname}_{nmi}{myc}.confidential = true;")
    }
    out(selfr ++ ".methods[\"" ++ nm ++ "\"] = reader_" ++ modname ++
        "_" ++ nmi ++ myc ++ ";")
    if (ast.findAnnotation(o, "parent")) then {
        out("{selfr}.superobj = {val};")
    }
    if (o.dtype != false) then {
        linenum := o.line
        out "lineNumber = {linenum};"
        out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\","
        out "  [1], {val})))"
        out "    throw new GraceExceptionPacket(TypeErrorObject,"
        out "          new GraceString(\"expected \""
        out "          + \"initial value of def '{o.name.value}' to be of type {o.dtype.value}\"))";
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
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("var reader_" ++ modname ++ "_" ++ nmi ++ myc ++ " = function() \{")
    out("  return this.data[\"" ++ nm ++ "\"];")
    out("\}")
    out(selfr ++ ".methods[\"" ++ nm ++ "\"] = reader_" ++ modname ++
        "_" ++ nmi ++ myc ++ ";")
    out(selfr ++ ".data[\"" ++ nm ++ "\"] = " ++ val ++ ";")
    out("var writer_" ++ modname ++ "_" ++ nmi ++ myc ++ " = function(argcv, o) \{")
    out("  this.data[\"" ++ nm ++ "\"] = o;")
    out("\}")
    out(selfr ++ ".methods[\"" ++ nm ++ ":=\"] = writer_" ++ modname ++
        "_" ++ nmi ++ myc ++ ";")
    var isReadable := false
    var isWritable := false
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso
            {ann.value == "public"}) then {
            isReadable := true
            isWritable := true
        }
        if ((ann.kind == "identifier").andAlso
            {ann.value == "readable"}) then {
            isReadable := true
        }
        if ((ann.kind == "identifier").andAlso
            {ann.value == "writable"}) then {
            isWritable := true
        }
    }
    if (!isReadable) then {
        out("reader_{modname}_{nmi}{myc}.confidential = true;")
    }
    if (!isWritable) then {
        out("writer_{modname}_{nmi}{myc}.confidential = true;")
    }
    if (o.dtype != false) then {
        if (val == "undefined") then {
            return true
        }
        linenum := o.line
        out "lineNumber = {linenum};"
        out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\","
        out "  [1], {val})))"
        out "    throw new GraceExceptionPacket(TypeErrorObject,"
        out "          new GraceString(\"expected \""
        out "          + \"initial value of var '{o.name.value}' to be of type {o.dtype.value}\"))";
    }
}
method compileclass(o) {
    var signature := o.signature
    var mbody := [ast.objectNode.new(o.value, o.superclass)]
    var newmeth := ast.methodNode.new(o.constructor, signature, mbody,
        false)
    if (false != o.generics) then {
        newmeth.generics := o.generics
    }
    newmeth.properties.put("fresh", true)
    var obody := [newmeth]
    var cobj := ast.objectNode.new(obody, false)
    var con := ast.defDecNode.new(o.name, cobj, false)
    if ((compilationDepth == 1) && {o.name.kind != "generic"}) then {
        def meth = ast.methodNode.new(o.name, [ast.signaturePart.new(o.name.value)],
            [o.name], false)
        compilenode(meth)
    }
    for (o.annotations) do {a->
        con.annotations.push(a)
    }
    o.register := compilenode(con)
}
method compileobject(o, outerRef, inheritingObject) {
    var origInBlock := inBlock
    inBlock := false
    var myc := auto_count
    auto_count := auto_count + 1
    var selfr := "obj" ++ myc
    var superobj := false
    for (o.value) do {e->
        if (e.kind == "inherits") then {
            superobj := e.value
        }
    }
    out("var " ++ selfr ++ " = Grace_allocObject();")
    if (inheritingObject) then {
        out "var inho{myc} = inheritingObject;"
        out "while (inho{myc}.superobj) inho{myc} = inho{myc}.superobj;"
        out "inho{myc}.superobj = {selfr};"
        out "{selfr}.data = inheritingObject.data;"
    }
    compileobjouter(selfr, outerRef)
    out("function obj_init_{myc}() \{")
    increaseindent
    out("var origSuperDepth = superDepth;")
    out("superDepth = {selfr};")
    var pos := 0
    for (o.value) do { e ->
        if (e.kind == "method") then {
            compilemethod(e, selfr)
        }
    }
    for (o.value) do { e ->
        out("sourceObject = {selfr};")
        if (e.kind == "method") then {
        } elseif (e.kind == "vardec") then {
            compileobjvardec(e, selfr, pos)
            out("{selfr}.mutable = true;")
            pos := pos + 1
        } elseif (e.kind == "defdec") then {
            compileobjdefdec(e, selfr, pos)
            pos := pos + 1
        } elseif (e.kind == "type") then {
            compileobjtype(e, selfr, pos)
            pos := pos + 1
        } elseif (e.kind == "object") then {
            compileobject(e, selfr, false)
        } elseif (e.kind == "inherits") then {
            def so = compilenode(e.value)
            out("{selfr}.superobj = {so};")
            out("{selfr}._value = {so}._value;")
        } else {
            compilenode(e)
        }
    }
    out("superDepth = origSuperDepth;")
    decreaseindent
    out("\}")
    if (inheritingObject) then {
        out("obj_init_{myc}.apply(inheritingObject, []);")
    } else {
        out("obj_init_{myc}.apply({selfr}, []);")
    }
    o.register := selfr
    inBlock := origInBlock
}
method compileblock(o) {
    var origInBlock := inBlock
    inBlock := true
    var myc := auto_count
    auto_count := auto_count + 1
    out("var block" ++ myc ++ " = Grace_allocObject();")
    out("block" ++ myc ++ ".methods[\"apply\"] = function() \{")
    out("  var args = Array.prototype.slice.call(arguments, 1);")
    out("  return this.real.apply(this.receiver, args);")
    out("\}")
    out("block" ++ myc ++ ".methods[\"applyIndirectly\"] = function(argcv, a) \{")
    out("  return this.real.apply(this.receiver, a._value);")
    out("\}")
    out("block" ++ myc ++ ".methods[\"outer\"] = function() \{")
    out("  return callmethod(this.receiver, 'outer', [0]);")
    out("\}")
    if (false != o.matchingPattern) then {
        def pat = compilenode(o.matchingPattern)
        out("block{myc}.pattern = {pat};")
    }
    out("block{myc}.methods[\"match\"] = GraceBlock_match;")
    out("block" ++ myc ++ ".receiver = this;")
    out("block{myc}.className = 'block<{modname}:{o.line}>';")
    out("block" ++ myc ++ ".real = function(")
    increaseindent
    var first := true
    for (o.params) do {p->
        if (first.not) then {
            out(",")
        }
        first := false
        out(varf(p.value))
    }
    decreaseindent
    out(") \{")
    increaseindent
    out("sourceObject = this;")
    var ret := "undefined"
    for (o.body) do {l->
        ret := compilenode(l)
    }
    out("return " ++ ret ++ ";")
    decreaseindent
    out("\};")
    o.register := "block" ++ myc
    inBlock := origInBlock
}
method compiletype(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def escName = escapestring(o.value)
    def idName = escapeident(o.value)
    out("var type{myc} = new GraceType(\"{escName}\");")
    if (!o.anonymous) then {
        out "var var_{idName} = type{myc};"
    }
    for (o.methods) do {meth->
        def mnm = escapestring(meth.value)
        out("type{myc}.typeMethods.push(\"{mnm}\");")
    }
    if (compilationDepth == 1) then {
        def idd = ast.identifierNode.new(o.value, false)
        compilenode(ast.methodNode.new(idd, [ast.signaturePart.new(o.value)],
            [idd], false))
    }
    o.register := "type{myc}"
}
method compilefor(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var over := compilenode(o.value)
    var blk := o.body
    var blko := compilenode(blk)
    out("var it" ++ myc ++ " = " ++ over ++ ".methods[\"iterator\"].call("
        ++ over ++ ", [0]);")
    out("while (Grace_isTrue(it" ++ myc ++ ".methods[\"havemore\"].call("
        ++ "it" ++ myc ++ ", [0]))) \{")
    out("  var fv" ++ myc ++ " = it" ++ myc ++ ".methods[\"next\"].call("
        ++ "it" ++ myc ++ ", [0]);")
    out("  " ++ blko ++ ".methods[\"apply\"].call("
        ++ blko ++ ", [1], fv" ++ myc ++ ");")
    out("\}")
    o.register := over
}
method compilemethod(o, selfobj) {
    var oldusedvars := usedvars
    var olddeclaredvars := declaredvars
    def paramCounts = mgcollections.list.new
    def variableArities = mgcollections.list.new
    for (o.signature) do { part ->
        paramCounts.push(part.params.size)
        variableArities.push(part.vararg != false)
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
                if ((p.dtype.value != "Dynamic")
                    && ((p.dtype.kind == "identifier")
                        || (p.dtype.kind == "type"))) then {
                    haveTypedParams := true
                }
            }
        }
    }
    out("var func" ++ myc ++ " = function(argcv) \{")
    increaseindent
    out("var curarg = 1;")
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        for (part.params) do { p ->
            out("var {varf(p.value)} = arguments[curarg];")
            out("curarg++;")
        }
        if (part.vararg != false) then {
            out("var {varf(part.vararg.value)} = new GraceList("
                ++ "Array.prototype.slice.call(arguments, curarg, "
                ++ "curarg + argcv[{partnr - 1}] - {part.params.size}));")
            out("curarg += argcv[{partnr - 1}] - {part.params.size};")
        } else {
            if (!o.selfclosure) then {
                out "if (argcv[{partnr - 1}] !=  func{myc}.paramCounts[{partnr - 1}])"
                out("  callmethod(RuntimeErrorObject, \"raise\", [1], new "
                    ++ "GraceString(\"wrong number of arguments for part "
                    ++ "{partnr} ({part.name})\"));")
            }
        }
    }
    if (o.generics.size > 0) then {
        out("// Start generics")
        out("if (argcv.length == 1 + {o.signature.size}) \{")
        out("  if (argcv[argcv.length-1] < {o.generics.size}) \{")
        out("    callmethod(RuntimeErrorObject, \"raise\", [1], "
            ++ "new GraceString(\"insufficient generic parameters\"));")
        out("  \}")
        for (o.generics) do {g->
            out("  var {varf(g.value)} = arguments[curarg++];")
        }
        out("\} else \{")
        for (o.generics) do {g->
            out("  {varf(g.value)} = var_Dynamic;")
        }
        out("\}")
        out("// End generics")
        out "var curarg2 = 1;"
        for (o.signature.indices) do { partnr ->
            var part := o.signature[partnr]
            for (part.params) do { p ->
                if (p.dtype != false) then {
                    for (o.generics) do {g->
                        if (p.dtype.value == g.value) then {
                            linenum := o.line
                            out "lineNumber = {linenum};"
                            out "if (!Grace_isTrue(callmethod({compilenode(p.dtype)}, \"match\","
                            out "  [1], arguments[curarg2])))"
                            out "    throw new GraceExceptionPacket(TypeErrorObject,"
                            out "          new GraceString(\"expected \""
                            out "           + \"parameter '{p.value}' \""
                            out "           + \"to be of type {p.dtype.value}\"));";
                        }
                    }
                }
                out("curarg2++;")
            }
            if (part.vararg != false) then {
                out("var {varf(part.vararg.value)} = new GraceList("
                    ++ "Array.prototype.slice.call(arguments, curarg2, "
                    ++ "curarg2 + argcv[{partnr - 1}] - {part.params.size}));")
                out("curarg2 += argcv[{partnr - 1}] - {part.params.size};")
            }
        }
        out "// End checking generics"
    }
    out("var returnTarget = invocationCount;")
    out("invocationCount++;")
    out("try \{")
    increaseindent
    var ret := "undefined"
    for (o.body) do { l ->
        ret := compilenode(l)
    }
    out("return " ++ ret)
    decreaseindent
    out("\} catch(e) \{")
    out("  if ((e.exctype == 'return') && (e.target == returnTarget)) \{")
    out("    return e.returnvalue;")
    out("  \} else \{")
    out("    throw e;")
    out("  \}")
    out("\}")
    decreaseindent
    out("\}")
    usedvars := oldusedvars
    declaredvars := olddeclaredvars
    if (haveTypedParams) then {
        compilemethodtypes("func{myc}", o)
    }
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso
            {ann.value == "confidential"}) then {
            out("func{myc}.confidential = true;")
        }
    }
    out "func{myc}.paramCounts = ["
    increaseindent
    for (paramCounts) do {p->
        out("{p},")
    }
    decreaseindent
    out "];"
    out "func{myc}.variableArities = ["
    for (variableArities) do {p->
        if (p) then {
            out "  true,"
        } else {
            out "  false,"
        }
    }
    out "];"
    out("{selfobj}.methods[\"{name}\"] = func{myc};")
    if (o.properties.contains("fresh")) then {
        compilefreshmethod(o, selfobj)
    }
}
method compilefreshmethod(o, selfobj) {
    var myc := auto_count
    auto_count := auto_count + 1
    var name := escapestring(o.value.value)
    var nm := name ++ myc
    var haveTypedParams := false
    for (o.signature) do { part ->
        for (part.params) do {p->
            if (p.dtype != false) then {
                if ((p.dtype.value != "Dynamic")
                    && ((p.dtype.kind == "identifier")
                        || (p.dtype.kind == "type"))) then {
                    haveTypedParams := true
                }
            }
        }
    }
    out("var func" ++ myc ++ " = function(argcv) \{")
    increaseindent
    out("var curarg = 1;")
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        for (part.params) do { p ->
            out("var {varf(p.value)} = arguments[curarg];")
            out("curarg++;")
        }
        if (part.vararg != false) then {
            out("var {varf(part.vararg.value)} = new GraceList("
                ++ "Array.prototype.slice.call(arguments, curarg, "
                ++ "curarg + argcv[{partnr - 1}] - {part.params.size}));")
            out("curarg += argcv[{partnr - 1}] - {part.params.size};")
        }
    }
    out "var inheritingObject = arguments[curarg++];"
    if (o.generics.size > 0) then {
        out("// Start generics")
        out("if (argcv.length == 1 + {o.signature.size}) \{")
        out("  if (argcv[argcv.length-1] < {o.generics.size}) \{")
        out("    callmethod(RuntimeErrorObject, \"raise\", [1], "
            ++ "new GraceString(\"insufficient generic parameters\"));")
        out("  \}")
        for (o.generics) do {g->
            out("  var {varf(g.value)} = arguments[curarg++];")
        }
        out("\} else \{")
        for (o.generics) do {g->
            out("  {varf(g.value)} = var_Dynamic;")
        }
        out("\}")
        out("// End generics")
    }
    out("var returnTarget = invocationCount;")
    out("invocationCount++;")
    out("try \{")
    increaseindent
    var tailObject := false
    if ((o.body.size > 0).andAlso {o.body.last.kind == "object"}) then {
        tailObject := o.body.pop
    }
    var ret := "undefined"
    for (o.body) do { l ->
        ret := compilenode(l)
    }
    if (false != tailObject) then {
        compileobject(tailObject, "this", true)
        ret := tailObject.register
    }
    out("return " ++ ret)
    decreaseindent
    out("\} catch(e) \{")
    out("  if ((e.exctype == 'return') && (e.target == returnTarget)) \{")
    out("    return e.returnvalue;")
    out("  \} else \{")
    out("    throw e;")
    out("  \}")
    out("\}")
    decreaseindent
    out("\}")
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
            // absent information is treated as Dynamic (and unchecked).
            if (false != p.dtype) then {
                if ((p.dtype.kind == "identifier")
                    || (p.dtype.kind == "type")) then {
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
method compilewhile(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var cond := compilenode(o.value)
    out("var wcond" ++ myc ++ " = Grace_isTrue(" ++ cond ++ ");")
    out("while (wcond" ++ myc ++ ") \{")
    increaseindent
    var tret := "null"
    for (o.body) do { l->
        tret := compilenode(l)
    }
    cond := compilenode(o.value)
    out("wcond" ++ myc ++ " = Grace_isTrue(" ++ cond ++ ");")
    decreaseindent
    out("\}")
    o.register := cond // "%while" ++ myc
}
method compileif(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    out("if (Grace_isTrue(" ++ compilenode(o.value) ++ ")) \{")
    increaseindent
    var tret := "undefined"
    var fret := "undefined"
    for (o.thenblock) do { l->
        tret := compilenode(l)
    }
    out("var if" ++ myc ++ " = " ++ tret ++ ";")
    decreaseindent
    if (o.elseblock.size > 0) then {
        out("\} else \{")
        increaseindent
        for (o.elseblock) do { l->
            fret := compilenode(l)
        }
        out("var if" ++ myc ++ " = " ++ fret ++ ";")
        decreaseindent
    }
    out("\}")
    o.register := "if" ++ myc
}
method compileidentifier(o) {
    var name := o.value
    if (name == "self") then {
        o.register := "this"
    } elseif (name == "...") then {
        o.register := "ellipsis"
    } else {
        if (modules.contains(name)) then {
            out("// WARNING: module support not implemented in JS backend")
            out("\"var_val_" ++ name ++ auto_count
                ++ "\" = load %object** @.module." ++ name)
        } else {
            usedvars.push(name)
            o.register := varf(name)
        }
    }
}
method compilebind(o) {
    var dest := o.dest
    var val := ""
    var c := ""
    var r := ""
    if (dest.kind == "identifier") then {
        val := o.value
        val := compilenode(val)
        var nm := dest.value
        usedvars.push(nm)
        out(varf(nm) ++ " = " ++ val ++ ";")
        o.register := val
    } elseif (dest.kind == "member") then {
        if (dest.value.substringFrom(dest.value.size - 1)to(dest.value.size)
            != ":=") then {
            dest.value := dest.value ++ ":="
        }
        c := ast.callNode.new(dest, [ast.callWithPart.new(dest.value, [o.value])])
        r := compilenode(c)
        o.register := r
    } elseif (dest.kind == "index") then {
        var imem := ast.memberNode.new("[]:=", dest.value)
        c := ast.callNode.new(imem, [ast.callWithPart.new(imem.value, [dest.index, o.value])])
        r := compilenode(c)
        o.register := r
    }
}
method compiledefdec(o) {
    var nm
    var snm
    if (o.name.kind == "generic") then {
        snm := o.name.value.value
    } else {
        snm := o.name.value
    }
    nm := snm
    declaredvars.push(nm)
    var val := compilenode(o.value)
    out("var " ++ varf(nm) ++ " = " ++ val ++ ";")
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.new(o.name.value)],
            [o.name], false))
        if (ast.findAnnotation(o, "parent")) then {
            out("this.superobj = {val};")
        }
    }
    if (o.dtype != false) then {
        linenum := o.line
        out "lineNumber = {linenum};"
        out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\","
        out "  [1], {varf(nm)})))"
        out "    throw new GraceExceptionPacket(TypeErrorObject,"
        out "          new GraceString(\"expected \""
        out "          + \"initial value of def '{snm}' to be of type {o.dtype.value}\"))";
    }
    o.register := val
}
method compilevardec(o) {
    var nm := o.name.value
    declaredvars.push(nm)
    var val := o.value
    if (false != val) then {
        val := compilenode(val)
        out("var " ++ varf(nm) ++ " = " ++ val ++ ";")
    } else {
        out("var " ++ varf(nm) ++ ";")
        val := "false"
    }
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.new(o.name.value)],
            [o.name], false))
        def assignID = ast.identifierNode.new(o.name.value ++ ":=", false)
        def tmpID = ast.identifierNode.new("_var_assign_tmp", false)
        compilenode(ast.methodNode.new(assignID,
            [ast.signaturePart.new(assignID.value, [tmpID])],
            [ast.bindNode.new(o.name, tmpID)], false))
    }
    if (o.dtype != false) then {
        if (val != "false") then {
            linenum := o.line
            out "lineNumber = {linenum};"
            out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\","
            out "  [1], {varf(nm)})))"
            out "    throw new GraceExceptionPacket(TypeErrorObject,"
            out "          new GraceString(\"expected \""
            out "          + \"initial value of var '{o.name.value}' to be of type {o.dtype.value}\"))";
        }
    }
    o.register := val
}
method compileindex(o) {
    var of := compilenode(o.value)
    var index := compilenode(o.index)
    out("var idxres" ++ auto_count ++ " = " ++ of ++ ".methods[\"[]\"]"
        ++ ".call(" ++ of ++ ", [1], " ++ index ++ ");")
    o.register := "idxres" ++ auto_count
    auto_count := auto_count + 1
}
method compilecatchcase(o) {
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
    out("var catchres{myc} = catchCase({mainblock},cases{myc},{finally});")
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
    out("var matchres{myc} = matchCase({matchee},cases{myc},{elsecase});")
    o.register := "matchres" ++ myc
}
method compileop(o) {
    var left := compilenode(o.left)
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
    out("var " ++ rnm ++ auto_count ++ " = callmethod(" ++ left
        ++ ", \"" ++ o.value ++ "\", [1], " ++ right ++ ");")
    o.register := rnm ++ auto_count
    auto_count := auto_count + 1
}
method compilecall(o) {
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
        for (o.generics) do {g->
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
    } elseif ((o.value.kind == "member").andAlso {
        o.value.in.kind == "member"}.andAlso {
            o.value.in.value == "outer"}) then {
        def ot = compilenode(o.value.in)
        var call := "var call" ++ auto_count ++ " = callmethod({ot}"
            ++ ", \"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out("onOuter = true;");
        out("onSelf = true;");
        out(call)
    } elseif ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "self") && (o.value.value == "outer")}
        ) then {
        out("var call{auto_count} = callmethod(superDepth, "
            ++ "\"outer\", [0]);")
    } elseif ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "self")}) then {
        var call := "var call" ++ auto_count ++ " = callmethod(this"
            ++ ", \"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out("onSelf = true;");
        out(call)
    } elseif ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "prelude")}) then {
        var call := "var call" ++ auto_count ++ " = callmethod(Grace_prelude"
            ++ ",\"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out(call)
    } elseif (o.value.kind == "member") then {
        obj := compilenode(o.value.in)
        var call := "var call" ++ auto_count ++ " = callmethod(" ++ obj
            ++ ",\"" ++ escapestring(o.value.value) ++ "\", ["
        call := call ++ partl ++ "]"
        for (args) do { arg ->
            call := call ++ ", " ++ arg
        }
        call := call ++ ");"
        out(call)
    } else {
        obj := "this"
        var call := "var call" ++ auto_count ++ " = callmethod(this,"
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
    var snm := ""
    for (o.value) do {c->
        if (c == "/") then {
            snm := ""
        } else {
            snm := snm ++ c
        }
    }
    var fn := escapestring(o.value)
    out("this.outer = do_import(\"{fn}\", gracecode_{snm});")
    out("var Grace_prelude = this.outer;")
    o.register := "undefined"
}
method compileimport(o) {
    out("// Import of " ++ o.path)
    var snm := ""
    for (o.path) do {c->
        if (c == "/") then {
            snm := ""
        } else {
            snm := snm ++ c
        }
    }
    var nm := escapestring(o.value)
    var fn := escapestring(o.path)
    out("if (typeof gracecode_{snm} == 'undefined')")
    out "  throw new GraceExceptionPacket(RuntimeErrorObject, "
    out "    new GraceString('could not find module {snm}'));"
    out("var " ++ varf(nm) ++ " = do_import(\"{fn}\", gracecode_{snm});")
    if (o.dtype != false) then {
        out "if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \"match\","
        out "  [1], {varf(nm)})))"
        out "    throw new GraceExceptionPacket(TypeErrorObject,"
        out "          new GraceString(\"expected \""
        out "          + \"module {snm} to be of type {o.dtype.value}\"))";
    }
    o.register := "undefined"
}
method compilereturn(o) {
    var reg := compilenode(o.value)
    if (inBlock) then {
        out("throw new ReturnException(" ++ reg ++ ", returnTarget);")
    } else {
        out("return " ++ reg)
    }
    o.register := "undefined"
}
method compilenode(o) {
    compilationDepth := compilationDepth + 1
    if (linenum != o.line) then {
        linenum := o.line
        out("lineNumber = " ++ linenum);
    }
    if (o.kind == "num") then {
        o.register := "new GraceNum(" ++ o.value ++ ")"
    }
    var l := ""
    if (o.kind == "string") then {
        l := o.value.size
        l := l + 1
        var os := ""
        // Escape characters that may not be legal in string literals
        os := escapestring(o.value)
        out("var string" ++ auto_count ++ " = new GraceString(\""
            ++ os ++ "\");")
        o.register := "string" ++ auto_count
        auto_count := auto_count + 1
    }
    if (o.kind == "index") then {
        compileindex(o)
    }
    if (o.kind == "octets") then {
        compileoctets(o)
    }
    if (o.kind == "dialect") then {
        compiledialect(o)
    }
    if (o.kind == "import") then {
        compileimport(o)
    }
    if (o.kind == "return") then {
        compilereturn(o)
    }
    if (o.kind == "generic") then {
        o.register := compilenode(o.value)
    }
    if ((o.kind == "identifier")
        && ((o.value == "true") || (o.value == "false"))) then {
        var val := 0
        if (o.value == "true") then {
            val := 1
        }
        out("var bool" ++ auto_count ++ " = new GraceBoolean(" ++ o.value ++ ")")
        o.register := "bool" ++ auto_count
        auto_count := auto_count + 1
    } elseif (o.kind == "identifier") then {
        compileidentifier(o)
    }
    if (o.kind == "defdec") then {
        compiledefdec(o)
    }
    if (o.kind == "vardec") then {
        compilevardec(o)
    }
    if (o.kind == "block") then {
        compileblock(o)
    }
    if (o.kind == "method") then {
        compilemethod(o, "this")
    }
    if (o.kind == "array") then {
        compilearray(o)
    }
    if (o.kind == "bind") then {
        compilebind(o)
    }
    if (o.kind == "while") then {
        compilewhile(o)
    }
    if (o.kind == "if") then {
        compileif(o)
    }
    if (o.kind == "catchcase") then {
        compilecatchcase(o)
    }
    if (o.kind == "matchcase") then {
        compilematchcase(o)
    }
    if (o.kind == "class") then {
        compileclass(o)
    }
    if (o.kind == "object") then {
        compileobject(o, "this", false)
    }
    if (o.kind == "type") then {
        compiletype(o)
    }
    if (o.kind == "member") then {
        compilemember(o)
    }
    if (o.kind == "for") then {
        compilefor(o)
    }
    if ((o.kind == "call")) then {
        if ((o.value.value == "print") && (o.value.in.value == "prelude")) then {
            var args := []
            for (o.with) do { part ->
                for (part.args) do { prm ->
                    var r := compilenode(prm)
                    args.push(r)
                }
            }
            if(args.size == 0) then {
                out("var call" ++ auto_count ++ " = Grace_print(new GraceString(\"\"));")
            } else {
                out("var call" ++ auto_count ++ " = Grace_print(" ++ args.first ++ ");")
            }
            o.register := "call" ++ auto_count
            auto_count := auto_count + 1
        } else {
            compilecall(o)
        }
    }
    if (o.kind == "op") then {
        compileop(o)
    }
    compilationDepth := compilationDepth - 1
    o.register
}
method addTransitiveImports(filepath, epath) {
    def data = xmodule.parseGCT(epath, filepath)
    if (data.contains("modules")) then {
        for (data.get("modules")) do {m->
            if (m == util.modname) then {
                util.syntax_error("Cyclic import detected: '{m}' is imported "
                    ++ "by '{epath}', which is imported by '{m}' (and so on).")
            }
            checkimport(m)
        }
    }
    if (data.contains("path")) then {
        def path = data.get("path").first
        if (path != epath) then {
            util.syntax_error("Imported module '{epath}' compiled with"
                ++ " different path '{path}'.")
        }
    }
}
method checkimport(nm) {
    var exists := false
    var ext := false
    var cmd
    def argv = sys.argv
    if (staticmodules.contains(nm)) then {
        return true
    }
    if (io.exists("{nm}.grace")) then {
        staticmodules.add(nm)
        addTransitiveImports(nm ++ ".gct", nm)
    } elseif (io.exists("{sys.execPath}/modules/{nm}.grace")) then {
        staticmodules.add(nm)
        addTransitiveImports("{sys.execPath}/modules/{nm}.gct", nm)
    } elseif (io.exists("{sys.execPath}/../lib/minigrace/modules/{nm}.grace")) then {
        staticmodules.add(nm)
        addTransitiveImports("{sys.execPath}/../lib/minigrace/modules/{nm}.gct", nm)
    } elseif (io.exists("{sys.execPath}/{nm}.grace")) then {
        staticmodules.add(nm)
        addTransitiveImports("{sys.execPath}/{nm}.gct", nm)
    } else {
        xmodule.parseGCT(nm, nm ++ ".gct")
    }
}
method processDialect(values') {
    log_verbose("checking imports.")
    for (values') do { v ->
        if (v.kind == "import") then {
            checkimport(v.path)
        }
        if (v.kind == "dialect") then {
            var nm := v.value
            checkimport(nm)
            log_verbose("loading dialect for checkers.")
            def CheckerFailure = Exception.refine "CheckerFailure"
            catch {
                def dobj = mirrors.loadDynamicModule(nm)
                def mths = mirrors.reflect(dobj).methods
                for (mths) do { m->
                    if (m.name == "checker") then {
                        log_verbose("running dialect's checkers.")
                        dobj.checker(values')
                    }
                    if (m.name == "atModuleEnd") then {
                        dialectHasAtModuleEnd := true
                    }
                }
            } case { e : RuntimeError ->
                util.setPosition(v.line, 1)
                util.syntax_error("Dialect '{nm}' failed to load: {e}.")
            } case { e : CheckerFailure ->
                if (nothing != e.data) then {
                    util.setPosition(e.data.line, e.data.linePos)
                }
                util.syntax_error("Dialect failure: {e.message}.")
            }
        }
    }
}
method compile(vl, of, mn, rm, bt, glpath) {
    var argv := sys.argv
    var cmd
    values := vl
    outfile := of
    modname := mn
    runmode := rm
    buildtype := bt
    gracelibPath := glpath
    util.log_verbose("generating ECMAScript code.")
    topLevelTypes.put("String", true)
    topLevelTypes.put("Number", true)
    topLevelTypes.put("Boolean", true)
    topLevelTypes.put("Block", true)
    topLevelTypes.put("None", true)
    for (values) do {v->
        if (v.kind == "type") then {
            def typeid = escapeident(v.value)
            topLevelTypes.put(typeid, true)
        }
    }
    util.setline(1)
    out("function gracecode_" ++ modname ++ "() \{")
    increaseindent
    if (util.extensions.contains("NativePrelude")) then {
        out("var Grace_prelude = window.Grace_native_prelude;")
    }
    for (values) do { o ->
        if (o.kind == "method") then {
            compilenode(o)
        }
        if (o.kind == "type") then {
            compilenode(o)
            def typeid = escapeident(o.value)
            out("var type_{typeid} = var_{typeid};")
        }
    }
    for (values) do { o ->
        if (o.kind == "inherits") then {
            def sup = compilenode(o.value)
            out("this.superobj = {sup};")
            out("this.data = {sup}.data;")
            out("this._value = {sup}._value;")
        }
        if ((o.kind != "method") && (o.kind != "type")) then {
            compilenode(o)
        }
    }
    if (dialectHasAtModuleEnd) then {
        out("callmethod(Grace_prelude,\"atModuleEnd\", [1], this);")
    }
    out("return this;")
    decreaseindent
    out("\}")
    xmodule.writeGCT(modname, modname ++ ".gct")
        fromValues(values)modules(staticmodules)
    def gct = xmodule.parseGCT(modname, modname ++ ".gct")
    def gctText = xmodule.gctAsString(gct)
    out "if (gctCache)"
    out "  gctCache['{escapestring(modname)}'] = \"{escapestring(gctText)}\";"
    var lineOut := false
    for (output) do { o ->
        if ("lineNumber =" == o.substringFrom(0)to(14)) then {
            lineOut := o
        } else {
            if (false != lineOut) then {
                outprint(lineOut)
                lineOut := false
            }
            outprint(o)
        }
    }
    log_verbose("done.")
}
