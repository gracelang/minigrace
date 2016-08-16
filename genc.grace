#pragma ExtendedLineups
import "ast" as ast
import "errormessages" as errormessages
import "io" as io
import "stringMap" as map
import "mirrors" as mirrors
import "sys" as sys
import "util" as util
import "xmodule" as xmodule

// genc produces C code from the AST, and optionally links and
// compiles it to native code. Code that affects the way the compiler behaves
// is in the "compile" method at the bottom. Other methods principally deal
// with translating a single AST node to C, and parallel the AST and
// parser.

var tmp
var verbosity := 30
var pad1 := 1
var auto_count := 1
var constants := []
var globals := []
var output := []
var outputFirst := []
var outputNativeHeader := []
var usedvars := []
var declaredvars := []
var bblock := "entry"
var linenum := 0
var values := []
var modname := "main"
var escmodname := "main"
var runmode := "build"
var buildtype := "bc"
var inBlock := false
var paramsUsed := 1
var partsUsed := 1
var topLevelMethodPos := 1
var topOutput := []
var bottomOutput := output
var compilationDepth := 0
def topLevelTypes = map.new
def imports = util.requiredModules
var bracketConstructor := "alloc_Lineup()"

method out(s) {
    output.push(s)
}
method outF(s) {
    outputFirst.push(s)
}
method outNH(s) {
    outputNativeHeader.push(s)
}
method outprint(s) {
    util.outprint(s)
}
method outswitchup {
    output := topOutput
}
method outswitchdown {
    output := bottomOutput
}
method countnodebindings(n) {
    if (n.kind == "if") then {
        countbindings(n.thenblock.body) + countbindings(n.elseblock.body)
    } else {
        0
    }
}
method countbindings(l) {
    var numslots := 0
    for (l) do { n ->
        def k = n.kind
        if ((k == "vardec") || (k == "defdec") || (k == "typedec")) then {
            numslots := numslots + 1
        } elseif { n.kind == "if" } then {
            numslots := numslots + countnodebindings(n)
        }
    }
    numslots
}
method definebindings(l, slot') {
    var slot := slot'
    for (l) do { n ->
        def k = n.kind
        if ((k == "vardec") || (k == "defdec") || (k == "typedec")) then {
            var tnm := ""
            var snm := ""
            if (n.name.kind == "generic") then {
                tnm := escapeident(n.name.value.value)
                snm := escapestring(n.name.value.value)
            } else {  // identifier
                tnm := escapeident(n.name.value)
                snm := escapestring(n.name.value)
            }
            if (!declaredvars.contains(tnm)) then {
                declaredvars.push(tnm)
                out("  Object *var_{tnm} = &(stackframe->slots[{slot}]);")
                out("  setframeelementname(stackframe, {slot}, \"{snm}\");")
                slot := slot + 1
            }
        } elseif {k == "if"} then {
            slot := definebindings(n.thenblock.body, slot)
            slot := definebindings(n.elseblock.body, slot)
            n.handledIdentifiers := true
        } elseif {n.kind == "import"} then {
            var tnm := escapeident(n.nameString)
            out "  Object *var_{tnm} = alloc_var();"
            // TODO: why is this different from a def?  Handle annotations!
        }
    }
    slot
}
method beginblock(s) {
    bblock := "%" ++ s
    out(s ++ ":")
}
method escapeident(s) {
    var ns := ""
    for (s) do { c ->
        def o = c.ord
        if (((o >= 65) && (o <= 90))
            || ((o >= 97) && (o <= 122))
            || ((o >= 48) && (o <= 57))
            || (o == 95)) then {
            ns := ns ++ c
        } else {
            ns := ns ++ "_{o}_"
        }
    }
    ns
}
method escapestring(s) {
    s._escape
}
method escapestring2(s) {
    var ns := ""
    var cd := 0
    var ls := false
    for (escapestring(s)) do { c->
        if (ls && (c == "\\")) then {
            ls := false
            ns := ns ++ "\\\\"
        } elseif { c == "\\" } then {
            ls := true
        } elseif { ls } then {
            ns := ns ++ "\"\"\\x" ++ c
            ls := false
            cd := 2
        } else {
            ns := ns ++ c
        }
        if (cd == 1) then {
            ns := ns ++ "\"\""
            cd := 0
        } elseif { cd > 0 } then {
            cd := cd - 1
        }
    }
    ns
}
method compilearray(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var r
    out "  Object array{myc} = {bracketConstructor};"
    out "  gc_pause();"
    var i := 0
    for (o.value) do {a ->
        r := compilenode(a)
        out("  params[0] = {r};")
        out("  partcv[0] = 1;")
        out("  callmethodflags(array{myc}, \"push(1)\", 1, partcv, params, CFLAG_SELF);")
        i := i + 1
    }
    out("  gc_unpause();")
    o.register := "array" ++ myc
}
method compilemember(o) {
    // memberNodes represent a nullary method request.
    o.generics := false         // because compilecall does generics incorrectly
    compilecall(o, false)
}
method compileobjouter(selfr, outerRef) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := "outer"
    var enm := escapestring2(nm)
    out("// OBJECT OUTER DEC " ++ enm)
    out("  adddatum2({selfr}, {outerRef}, 0);")
    outF("Object reader_{escmodname}_{enm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outF("  struct UserObject *uo = (struct UserObject*)self;")
    outF("  return uo->data[0];")
    outF("\}")
    out("  addmethodreal({selfr},\"outer\", &reader_{escmodname}_{enm}_{myc});")
}
method compileobjtypemeth(o, selfr, pos) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.nameString
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    outF("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    var flags := "MFLAG_DEF"
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier") && {ann.value == "confidential"}) then {
            flags := "{flags} | MFLAG_CONFIDENTIAL"
        }
    }
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  return uo->data[{pos}];")
    outF("\}")
    out("  Method *reader{myc} = addmethodrealflags({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc}, {flags});")
    out("  reader{myc}->definitionModule = modulename;")
    out("  reader{myc}->definitionLine = {o.line};")
}
method compileobjdefdecdata(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        if (o.value.kind == "object") then {
            compileobject(o.value, selfr)
            val := o.value.register
        } else {
            val := compilenode(o.value)
        }
    }
    out("  adddatum2({selfr}, {val}, {pos});")
    if (ast.findAnnotation(o, "parent")) then {
        out("  ((struct UserObject *){selfr})->super = {val};")
    }
}
method compileobjdefdecmeth(o, selfr, pos) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.name.value
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    outF("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    var flags := "MFLAG_DEF"
    var isPublic := false
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier") && {ann.value == "public"}) then {
            isPublic := true
        }
        if ((ann.kind == "identifier") && {ann.value == "readable"}) then {
            isPublic := true
        }
    }
    if (!isPublic) then {
        flags := "{flags} | MFLAG_CONFIDENTIAL"
    }
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  return uo->data[{pos}];")
    outF("\}")
    out("  Method *reader{myc} = addmethodrealflags({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc}, {flags});")
    out("  reader{myc}->definitionModule = modulename;")
    out("  reader{myc}->definitionLine = {o.line};")
}
method compileobjdefdec(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        if (o.value.kind == "object") then {
            compileobject(o.value, selfr)
            val := o.value.register
        } else {
            val := compilenode(o.value)
        }
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.name.value
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    out("// OBJECT CONST DEC " ++ enm)
    out("  adddatum2({selfr}, {val}, {pos});")
    outF("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  return uo->data[{pos}];")
    outF("\}")
    out("  Method *reader{myc} = addmethodrealflags({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc}, MFLAG_DEF);")
}
method compileobjvardecdata(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        val := compilenode(o.value)
    }
    out("  adddatum2({selfr}, {val}, {pos});")
}
method compileobjvardecmeth(o, selfr, pos) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.name.value
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    outF("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    var rflags := "MFLAG_CONFIDENTIAL"
    var wflags := "MFLAG_CONFIDENTIAL"
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier") && {ann.value == "public"}) then {
            rflags := "0"
            wflags := "0"
        }
        if ((ann.kind == "identifier") && {ann.value == "readable"}) then {
            rflags := "0"
        }
        if ((ann.kind == "identifier") && {ann.value == "writable"}) then {
            wflags := "0"
        }
    }
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  return uo->data[{pos}];")
    outF("\}")
    out("  Method *reader{myc} = addmethodrealflags({selfr}, \"{enm}\", &reader_{escmodname}_{inm}_{myc}, {rflags});")
    outF("Object writer_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  uo->data[{pos}] = args[0];")
    outF("  return done;");
    outF("\}")
    out("  Method *writer{myc} = addmethodrealflags({selfr}, \"{enm}:=(1)\", &writer_{escmodname}_{inm}_{myc}, {wflags});")
    out("  reader{myc}->definitionModule = modulename;")
    out("  writer{myc}->definitionModule = modulename;")
    out("  reader{myc}->definitionLine = {o.line};")
    out("  writer{myc}->definitionLine = {o.line};")
}
method compileobjvardec(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        val := compilenode(o.value)
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.name.value
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    out("// OBJECT VAR DEC " ++ nm)
    out("  adddatum2({selfr}, {val}, {pos});")
    outF("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  return uo->data[{pos}];")
    outF("\}")
    out("  addmethodreal({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc});")
    outF("Object writer_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outF("  struct UserObject *uo = (struct UserObject *)self;")
    outF("  uo->data[{pos}] = args[0];")
    outF("  return done;");
    outF("\}")
    out("  addmethodreal({selfr}, \"{enm}:=(1)\", &writer_{escmodname}_{inm}_{myc});")
}
method compileobject(o, outerRef) {
    var origInBlock := inBlock
    inBlock := false
    var myc := auto_count
    auto_count := auto_count + 1
    var selfr := "obj" ++ myc
    var numFields := 1
    var numMethods := 0
    var pos := 1
    var superobj := false
    out "  Object inheritingObject{myc} = inheritingObject;"
    out "  if (isTailObject) \{"
    out "    isTailObject = 0;"
    out "    inheritingObject = NULL;"
    out "  \}"
    for (o.value) do { e ->
        if (e.kind == "vardec") then {
            numMethods := numMethods + 1
        }
        if (e.kind == "method") then {
            if (e.isFresh) then {
                numMethods := numMethods + 1
                numFields := numFields + 1
            }
        }
        numMethods := numMethods + 1
        numFields := numFields + 1
    }
    if (numFields == 3) then {
        numFields := 4
    }
    globals.push("static ClassData objclass{myc};");
    out("  Object " ++ selfr ++ " = alloc_userobj2({numMethods},"
        ++ "{numFields}, objclass{myc});")
    out("  gc_frame_newslot({selfr});")
    if (o.name != "object") then {
        out("if (objclass{myc} == NULL) \{")
        out("  glfree({selfr}->class->name);")
        out("  {selfr}->class->name = \"{o.name}\";")
        out("\}")
    }
    compileobjouter(selfr, outerRef)
    out("  Object oldself{myc} = self;")
    out("  struct StackFrameObject *oldstackframe{myc} = stackframe;")
    out("  stackframe = alloc_StackFrame(1, oldstackframe{myc});")
    out("  gc_frame_newslot((Object)stackframe);")
    out("  self = {selfr};")
    out("  Object *oldselfslot{myc} = selfslot;")
    out("  selfslot = &stackframe->slots[0];")
    out("  *selfslot = self;")
    out("  setframeelementname(stackframe, 0, \"self\");")
    out "  Object thisouter{myc} = (*(struct UserObject *)self).data[0], lowerouter{myc} = thisouter{myc};"
    out "  if (inheritingObject{myc}) \{"
    out "    struct UserObject *inho{myc} = (struct UserObject *)inheritingObject{myc};"
    out "    while (inho{myc}->super != GraceDefaultObject) inho{myc} = (struct UserObject *)inho{myc}->super;"
    out "    inho{myc}->super = {selfr};"
    out "    self = inheritingObject{myc};"
    out "    *selfslot = self;"
    out "    lowerouter{myc} = (*(struct UserObject *)self).data[0];"
    out "    (*(struct UserObject *)self).data[0] = thisouter{myc};"
    out "  \}"
    for (o.value) do { e ->
        if (e.kind == "method") then {
            compilemethod(e, selfr, pos)
        } elseif { e.kind == "vardec" } then {
            out("if (objclass{myc} == NULL) \{")
            compileobjvardecmeth(e, selfr, pos)
            out("\}")
            out("{selfr}->flags |= OFLAG_MUTABLE;")
            out("adddatum2({selfr}, alloc_Undefined(), {pos});")
        } elseif { e.kind == "defdec" } then {
            out("if (objclass{myc} == NULL) \{")
            compileobjdefdecmeth(e, selfr, pos)
            out("\}")
            out("adddatum2({selfr}, alloc_Undefined(), {pos});")
        } elseif { e.kind == "typedec" } then {
            out("if (objclass{myc} == NULL) \{")
            compileobjtypemeth(e, selfr, pos)
            out("\}")
            out("adddatum2({selfr}, alloc_Undefined(), {pos});")
        } else {
            pos := pos - 1
        }
        pos := pos + 1
    }
    pos := 1

    def content = [ ]
    if (false != o.superclass) then { content.add(o.superclass) }
    o.usedTraits.do { t -> content.add(t) }
    o.value.do { e -> content.add(e) }

    content.do { e ->
        out "  sourceObject = {selfr};"
        if (e.kind == "method") then {
        } elseif { e.kind == "vardec" } then {
            compileobjvardecdata(e, selfr, pos)
        } elseif { e.kind == "defdec" } then {
            compileobjdefdecdata(e, selfr, pos)
        } elseif { e.kind == "typedec" } then {
            compileobjdefdecdata(e, selfr, pos)
        } elseif { e.kind == "inherit" } then {
            // The return value is irrelevant with factory inheritance,
            // but we save it as super for the sake of "inherit true".
            superobj := compilenode(e.value)
            out "  struct UserObject *{selfr}_uo = (struct UserObject *){selfr};"
            out "  {selfr}_uo->super = {superobj};"
            implementAliasesAndExclusionsFor(o) inheriting(e, superobj)
            pos := pos - 1
        } else {
            compilenode(e)
            pos := pos - 1 // Compensate for below
        }
        pos := pos + 1
    }
    out("  objclass{myc} = {selfr}->class;")
    out("  objclass{myc}->definitionModule = modulename;")
    out("  objclass{myc}->definitionLine = {o.line};")
    out "  (*(struct UserObject *)self).data[0] = lowerouter{myc};"
    out("  self = oldself{myc};")
    out("  selfslot = oldselfslot{myc};")
    out("  stackframe = oldstackframe{myc};")
    o.register := selfr
    inBlock := origInBlock
}
method compileblock(o) {
    def origInBlock = inBlock
    inBlock := true
    def myc = auto_count
    auto_count := auto_count + 1
    var obj := "block{myc}"
    out("  Object {obj} = alloc_Block(NULL, NULL, \"{modname}\", {linenum});")
    out("  gc_frame_newslot({obj});")
    var applymeth := ast.methodNode.new([ast.signaturePart.partName("_apply") params(o.params)], o.body, false)
    applymeth.selfclosure := true
    compilemethod(applymeth, obj, 0)
    if (false != o.matchingPattern) then {
        def pat = compilenode(o.matchingPattern)
        out("((struct UserObject *){obj})->data[1] = {pat};")
    }
    if (false != o.extraRuntimeData) then {
        def erdmeth = ast.methodNode.new(
            [ast.signaturePart.partName("extraRuntimeData")],
            [o.extraRuntimeData], false)
        compilemethod(erdmeth, obj, 2)
    }
    // TODO: get rid of extraRuntimeData — it doesn't appear to be used.
    o.register := obj
    inBlock := origInBlock
}
method compiletypedec(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def idName = if (o.name.kind == "generic") then {
                        escapeident(o.name.value.value)
                    } else {
                        escapeident(o.name.value)
                    }
    out("// Type decl {o.name.value}")
    declaredvars.push(idName)
    if (o.value.kind == "typeliteral") then {o.value.name := idName }
    compilenode(o.value)
    out("  *var_{idName} = {o.value.register};")
    o.register := "done"
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString)],
            [o.name], false))  // TODO: should be TypeType
    }
}
method compiletypeliteral(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    out("//   Type literal ")
    out("    Object type{myc} = alloc_Type(\"{o.name}\", {o.methods.size});")
    for (o.methods) do {meth->
        def mnm = escapestring2(meth.nameString)
        out("    add_Method((ClassData)type{myc}, \"{mnm}\", NULL);")
    }
    // TODO: types in the type literal
    o.register := "type{myc}"
}
method compilemethod(o, selfobj, pos) {
    // How to deal with closures:
    // Calculate body, find difference of usedvars/declaredvars, if closure
    // then build as such. At top of method body bind var_x as usual, but
    // set to pointer from the additional closure parameter.
    out "// method \"{o.canonicalName}\""
    var origParamsUsed := paramsUsed
    paramsUsed := 1
    var origPartsUsed := partsUsed
    partsUsed := 1
    var origInBlock := inBlock
    inBlock := o.selfclosure
    var oldout := output
    var oldbblock := bblock
    var oldusedvars := usedvars
    var olddeclaredvars := declaredvars
    output := []
    usedvars := []      // accumulates identifiers mentioned inside this method
    declaredvars := []
    var myc := auto_count
    auto_count := auto_count + 1
    def name = o.nameString
    def escapedName = escapestring2(name)
    var nm := name ++ myc
    var numslots := 0
    var slot := 0
    var haveTypedParams := false
    out("  int i;")
    out("  int curarg = 0;")
    out("  int pushcv[] = \{1\};")
    def npls = o.numParamLists
    if ((!o.selfclosure) && (npls > 0)) then {
        out "  if (nparts < {npls} && args)"
        out("    graceRaise(RequestError(), \"missing argument list for {o.canonicalName.quoted} (probably "
            ++ "reflection error): got %i lists, expected "
            ++ "{npls}.\", nparts);")
    }
    for (o.signature.indices) do { partnr ->
        var part := o.signature.at(partnr)
        for (part.params) do { param ->
            var pn := escapeident(param.value)
            out("  Object *var_{pn} = &(stackframe->slots[{slot}]);")
            out("  *var_{pn} = args[curarg];")
            out("  curarg++;")
            declaredvars.push(pn)
            slot := slot + 1
            numslots := numslots + 1
            if (param.dtype != false) then {
                if ((param.dtype.value != "Unknown")
                    && ((param.dtype.kind == "identifier")
                        || (param.dtype.kind == "typeliteral"))) then {
                    haveTypedParams := true
                }
            }
        }
        if (!o.selfclosure && (part.params.size > 0)) then {
            out "  if (argcv && argcv[{partnr - 1}] != {part.params.size})"
            out "    graceRaise(RequestError(), \"wrong number of arguments for part {part.canonicalName.quoted}\");"
        }
    }
    out("  Object *selfslot = &(stackframe->slots[{slot}]);")
    out("  *selfslot = self;")
    out("  setframeelementname(stackframe, 0, \"self\");")
    slot := slot + 1
    numslots := numslots + 1
    out "  if (methodInheritingObject) curarg++;"
    if (o.typeParams != false) then {
        out("// Start typeParams")
        o.typeParams.do {g->
            var gn := escapeident(g.value)
            declaredvars.push(gn)
            out("  Object *var_{gn} = &(stackframe->slots[{slot}]);")
            slot := slot + 1
            numslots := numslots + 1
        }
        out("  if (nparts == 1 + {o.signature.size} + (methodInheritingObject != NULL)) \{")
        out("    if (argcv[nparts-1] < {o.typeParams.size}) \{")
        out("      graceRaise(RequestError(), \"insufficient generic parameters\");")
        out("    \}")
        o.typeParams.do {g->
            var gn := escapeident(g.value)
            out("    *var_{gn} = args[curarg++];")
        }
        out("  \} else \{")
        o.typeParams.do {g->
            var gn := escapeident(g.value)
            out("    *var_{gn} = Unknown;")
        }
        out("  \}")
        out("// End typeParams")
    }
    var ret := "done"
    numslots := numslots + countbindings(o.body)
    definebindings(o.body, slot)
    var tailObject := false
    var tco := false
    if ((o.body.size > 0) && {o.body.last.kind == "call"}
        && {util.extensions.contains("TailCall")}) then {
        tco := o.body.pop
    }
    if ((o.body.size > 0) && {o.body.last.kind == "object"}) then {
        tailObject := o.body.pop       // remove tail object
        if (tailObject.name == "object") then {
            var selfName := selfobj
            if (selfName.startsWith "var_") then {
                selfName := selfName.substringFrom 5 to(selfName.size)
            }
            tailObject.name := selfobj ++ "." ++ o.nameString
        }
    }
    for (o.body) do { l ->
        ret := compilenode(l)
    }
    if (false != tailObject) then {
        o.body.push(tailObject)        // put tail object back
        out "  isTailObject = 1;"
        out "  inheritingObject = methodInheritingObject;"
        compileobject(tailObject, "self")
        ret := tailObject.register
    }
    if (false != tco) then {
        compilecall(tco, true)
        ret := tco.register
    }
    out("  gc_frame_end(frame);")
    out("  return {ret};")
    out("\}")
    // Now we've finished compiling the body of the method, we need to
    // construct the closure that makes the variables available.
    var body := output
    outswitchup
    var closurevars := []
    for (usedvars) do { u ->
        var decl := false
        for (declaredvars) do { d->
            if (d == u) then {
                decl := true
            }
        }
        if (decl) then {
            decl := decl
        } else {
            var found := false
            for (closurevars) do { v ->
                if (v == u) then {
                    found := true
                }
            }
            if (found) then {
                found := found
            } else {
                closurevars.push(u)
            }
        }
    }
    if (o.selfclosure) then {
        closurevars.push("self")
    }
    var litname := escapeident("meth_{modname}_{escapestring2(nm)}")
    if (closurevars.size > 0) then {
        if (o.selfclosure) then {
            out("Object {litname}(Object realself, int nparts, int *argcv, "
                ++ "Object *args, int32_t flags) \{")
            out("  struct UserObject *uo = (struct UserObject*)realself;")
        } else {
            out("Object {litname}(Object self, int nparts, int *argcv, Object *args, "
                ++ "int32_t flags) \{")
            out("  struct UserObject *uo = (struct UserObject*)self;")
        }
        out("  Object closure = getdatum((Object)uo, {pos}, (flags>>24)&0xff);")
        out("  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, getclosureframe(closure));")
        out("  pushclosure(closure);")
    } else {
        out("Object {litname}(Object self, int nparts, int *argcv, Object *args, "
            ++ "int32_t flags) \{")
        out("  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);")
        out("  pushclosure(NULL);")
    }
    out("  pushstackframe(stackframe, \"{escapedName}\");")
    out("  int frame = gc_frame_new();")
    out("  gc_frame_newslot((Object)stackframe);")
    out "  Object methodInheritingObject = NULL;"
    for (o.signature.indices) do { partnr ->
        def part = o.signature.at(partnr)
        if (part.params.size > 0) then {
            out("  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})")
            out("    graceRaise(RequestError(), \"insufficient arguments to method {o.canonicalName.quoted}\");")
        }
    }
    // We need to detect which parameters are used in a closure, and
    // treat those specially. As params[] is stack-allocated, references
    // to those variables would fail once the method was out of scope
    // unless we copied them onto the heap.
    var i := 0
    def toremove = []
    for (o.signature) do { part ->
        for (part.params) do { p ->
            var pn := escapeident(p.value)
            if (closurevars.contains(pn)) then {
                toremove.push(pn)
            }
        }
    }
    // APB: I believe that `toremove` is the list of enclosing
    // variables that are shadowed by parameters.  This is unnecessary,
    // since it is syntactially illgeal for a parameter to have the
    // same name as a variable in an enclosing scope.
    def origclosurevars = closurevars
    closurevars := []
    for (origclosurevars) do {pn->
        if (toremove.contains(pn)) then {
            // Remove this one
        } else {
            closurevars.push(pn)
        }
    }
    out("  Object params[{paramsUsed}];")
    out("  int partcv[{partsUsed}];")
    var j := 0
    for (closurevars) do { cv ->
        if (cv == "self") then {
            out("  Object self = *(getfromclosure(closure, {j}));")
            out("  sourceObject = self;")
        } else {
            out("  Object *var_{cv} = getfromclosure(closure, {j});")
        }
        j := j + 1
    }
    for (body) do { l->
        out(l)
    }
    outswitchdown
    output := oldout
    bblock := oldbblock
    usedvars := oldusedvars
    declaredvars := olddeclaredvars
    for (closurevars) do { cv ->
        if (cv != "self") then {
            if ((usedvars.contains(cv)).not) then {
                usedvars.push(cv)
            }
        }
    }
    if (selfobj == false) then {
    } elseif { closurevars.size == 0 } then {
        var uo2 := "uo{myc}"
        out("  struct UserObject *{uo2} = (struct UserObject*){selfobj};")
        out("  {uo2}->data[{pos}] = emptyclosure;")
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapedName}\", &{litname}, {pos});")
        compilemethodtypes(litname, o)
    } else {
        out("  block_savedest({selfobj});")
        out("  Object closure" ++ myc ++ " = createclosure("
            ++ closurevars.size ++ ", \"{escapedName}\");")
        out("  setclosureframe(closure{myc}, stackframe);")
        for (closurevars) do { v ->
            if (v == "self") then {
                out("  addtoclosure(closure{myc}, selfslot);")
                auto_count := auto_count + 1
            } else {
                out("  addtoclosure(closure{myc}, var_{v});")
            }
        }
        var uo := "uo{myc}"
        out("  struct UserObject *{uo} = (struct UserObject*){selfobj};")
        out("  {uo}->data[{pos}] = (Object)closure{myc};")
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapedName}\", &{litname}, {pos});")
        compilemethodtypes(litname, o)
    }
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier") && {ann.value == "confidential"}) then {
            out("  meth_{litname}->flags |= MFLAG_CONFIDENTIAL;");
        }
    }
    out("  meth_{litname}->definitionModule = modulename;")
    out("  meth_{litname}->definitionLine = {o.line};")
    if (o.isFresh) then {
        compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,
            oldout)
    }
    inBlock := origInBlock
    paramsUsed := origParamsUsed
    partsUsed := origPartsUsed
} // end of compilemethod

// Compiles the "fresh" method version of a method, when applicable.
// This method is given a different name ending in `$object(1)`, with the final
// parameter being the object into which to insert methods.
method compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,
        oldout) {
    def myc = auto_count
    auto_count := auto_count + 1
    var litname := escapeident("meth_{modname}_{escapestring2(nm)}_object")
    def name = o.nameString ++ "$object(1)"
    def escapedName = escapestring2(name)
    outswitchup
    if (closurevars.size > 0) then {
        if (o.selfclosure) then {
            out("Object {litname}(Object realself, int nparts, int *argcv, "
                ++ "Object *args, int32_t flags) \{")
            out("  struct UserObject *uo = (struct UserObject*)realself;")
        } else {
            out("Object {litname}(Object self, int nparts, int *argcv, Object *args, "
                ++ "int32_t flags) \{")
            out("  struct UserObject *uo = (struct UserObject*)self;")
        }
        out("  Object closure = getdatum((Object)uo, {pos}, (flags>>24)&0xff);")
        out("  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, getclosureframe(closure));")
        out("  pushclosure(closure);")
    } else {
        out("Object {litname}(Object self, int nparts, int *argcv, Object *args, "
            ++ "int32_t flags) \{")
        out("  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);")
        out("  pushclosure(NULL);")
    }
    out("  pushstackframe(stackframe, \"{escapedName}\");")
    out("  int frame = gc_frame_new();")
    out("  gc_frame_newslot((Object)stackframe);")
    var sumAccum := "0"
    for (o.signature.indices) do { partnr ->
        sumAccum := sumAccum ++ " + argcv[{partnr - 1}]"
    }
    out "  Object methodInheritingObject = args[{sumAccum}];"
    for (o.signature.indices) do { partnr ->
        def part = o.signature.at(partnr)
        if (part.params.size > 0) then {
            out("  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})")
            out("    graceRaise(RequestError(), \"insufficient arguments for method {o.canonicalName}\");")
        }
    }
    out("  Object params[{paramsUsed}];")
    out("  int partcv[{partsUsed}];")
    var j := 0
    for (closurevars) do { cv ->
        if (cv == "self") then {
            out("  Object self = *(getfromclosure(closure, {j}));")
            out("  sourceObject = self;")
        } else {
            out("  Object *var_{cv} = getfromclosure(closure, {j});")
        }
        j := j + 1
    }
    for (body) do { l->
        out(l)
    }
    output := oldout
    if (selfobj == false) then {
    } elseif { closurevars.size == 0 } then {
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapedName}\", &{litname}, {pos});")
        compilemethodtypes(litname, o)
    } else {
        out("  block_savedest({selfobj});")
        out("  Object closure" ++ myc ++ " = createclosure("
            ++ closurevars.size ++ ", \"{escapedName}\");")
        out("  setclosureframe(closure{myc}, stackframe);")
        for (closurevars) do { v ->
            if (v == "self") then {
                out("  addtoclosure(closure{myc}, selfslot);")
                auto_count := auto_count + 1
            } else {
                out("  addtoclosure(closure{myc}, var_{v});")
            }
        }
        var uo := "uo{myc}"
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapedName}\", &{litname}, {pos});")
    }
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier") && {ann.value == "confidential"}) then {
            out("  meth_{litname}->flags |= MFLAG_CONFIDENTIAL;");
        }
    }
    out("  meth_{litname}->definitionModule = modulename;")
    out("  meth_{litname}->definitionLine = {o.line};")
}
method compilemethodtypes(litname, o) {
    var argcv := "  int argcv_{litname}[] = \{"
    for (o.signature.indices) do { partnr ->
        var part := o.signature.at(partnr)
        argcv := argcv ++ part.params.size
        if (partnr < o.signature.size) then {
            argcv := argcv ++ ", "
        }
    }
    argcv := argcv ++ "\};"
    out(argcv)
    out("  meth_{litname}->type = alloc_MethodType({o.signature.size}, argcv_{litname});")
    var pi := 0
    for (o.signature) do { part ->
        for (part.params) do { p ->
            // We store information for static top-level types only:
            // absent information is treated as Unknown (and unchecked).
            if (false != p.dtype) then {
                if ((p.dtype.kind == "identifier")
                    || (p.dtype.kind == "typeliteral")) then {
                    def typeid = escapeident(p.dtype.value)
                    if (topLevelTypes.contains(typeid)) then {
                        out("meth_{litname}->type->types[{pi}] "
                            ++ "= type_{typeid};")
                        out("meth_{litname}->type->names[{pi}] "
                            ++ "= \"{escapestring2(p.nameString)}\";")
                    }
                }
            }
            pi := pi + 1
        }
    }
}
method compileifexpr(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var cond := compilenode(o.value)
    out("  Object if{myc} = done;")
    out("struct StackFrameObject *iftmpstackframe{myc} = stackframe;")
    out("  if (istrue({cond})) \{")
    var numslots := countbindings(o.thenblock.body)
    out("stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});")
    out("gc_frame_newslot((Object)stackframe);")
    var tret := "done"
    var fret := "done"
    var tblock := "ERROR"
    var fblock := "ERROR"
    def thenList = o.thenblock.body
    definebindings(thenList, 0)
    for (thenList) do { l->
        tret := compilenode(l)
    }
    out("    gc_frame_newslot({tret});")
    out("    if{myc} = {tret};")
    out("  \} else \{")
    def elseList = o.elseblock.body
    if (elseList.size > 0) then {
        numslots := countbindings(elseList)
        out("  stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});")
        out("  gc_frame_newslot((Object)stackframe);")
        definebindings(elseList, 0)
        for (elseList) do { l->
            fret := compilenode(l)
        }
        out("    gc_frame_newslot({fret});")
        out("    if{myc} = {fret};")
    }
    out("  \}")
    out("stackframe = iftmpstackframe{myc};")
    o.register := "if" ++ myc
}
method compileif(o) {
    if (o.handledIdentifiers == false) then {
        return compileifexpr(o)
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var cond := compilenode(o.value)
    out("  Object if{myc} = done;")
    out("  if (istrue({cond})) \{")
    var tret := "done"
    var fret := "done"
    var tblock := "ERROR"
    var fblock := "ERROR"
    def thenList = o.thenblock.body
    for (thenList) do { l->
        tret := compilenode(l)
    }
    out("    gc_frame_newslot({tret});")
    out("    if{myc} = {tret};")
    out("  \} else \{")
    def elseList = o.elseblock.body
    if (elseList.size > 0) then {
        for (elseList) do { l->
            fret := compilenode(l)
        }
        out("    gc_frame_newslot({fret});")
        out("    if{myc} = {fret};")
    }
    out("  \}")
    o.register := "if" ++ myc
}
method compileidentifier(o) {
    var name := escapeident(o.value)
    if (name == "super") then {
        def sugg = errormessages.suggestion.new
        sugg.replaceRange(o.linePos, o.linePos + 4)with "self" onLine(o.line)
        errormessages.syntaxError("'super' can be used only to the "
                ++ "left of the . in a method request. "
                ++ "Use 'self' instead?")
            atRange(
                o.line, o.linePos, o.linePos + 4)withSuggestion(sugg)
    }
    if (name == "self") then {
        o.register := "self"
    } elseif { name == "__compilerRevision" } then {
        out("  Object var_val___compilerRevision" ++ auto_count
            ++ " = alloc_String(compilerRevision);")
        o.register := "var_val___compilerRevision" ++ auto_count
        auto_count := auto_count + 1
    } elseif { name == "_46__46__46_" } then {
        out("  Object ellipsis{auto_count} = alloc_ellipsis();")
        o.register := "ellipsis{auto_count}"
        auto_count := auto_count + 1
    } else {
        name := escapestring2(name)
        usedvars.push(name)
        o.register := "*var_{name}"
    }
}
method compilebind(o) {
    def lhs = o.dest
    if (lhs.isIdentifier) then {
        def val = compilenode(o.value)
        def nm = escapeident(lhs.value)
        usedvars.push(nm)
        out("  *var_{nm} = {val};")
        out("  if ({val} == undefined)")
        out("    graceRaise(ProgrammingError(), \"attempting to use an ininitilized variable\");");
        auto_count := auto_count + 1
        o.register := "done"
    } else {
        ProgrammingError.raise "bindNode {o} does not bind an indentifer"
    }
}
method compiledefdec(o) {
    var nm
    if (o.name.kind == "generic") then {
        nm := escapeident(o.name.value.value)
    } else {
        nm := escapeident(o.name.value)
    }
    declaredvars.push(nm)
    var val := compilenode(o.value)
    out("  *var_{nm} = {val};")
    out("  if ({val} == undefined)")
    out("    graceRaise(ProgrammingError(), \"attempting to use an ininitilized variable\");");
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString)], [o.name], false))
        if (ast.findAnnotation(o, "parent")) then {
            out("  ((struct UserObject *)self)->super = {val};")
        }
    }
    o.register := "done"
}
method compilevardec(o) {
    var nm := escapeident(o.name.value)
    declaredvars.push(nm)
    var val := o.value
    var hadval := false
    if (false != val) then {
        val := compilenode(val)
        hadval := true
    } else {
        val := "undefined"
    }
    out("  *var_{nm} = {val};")
    if (hadval) then {
        out("  if ({val} == undefined)")
        out("    callmethod(done, \"assignment\", 0, NULL, NULL);")
    }
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new( [ast.signaturePart.partName(o.nameString)], [o.name], false))
        def paramId = ast.identifierNode.new("_var_assign_tmp", false)
        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString ++ ":=") params( [paramId] )],
            [ast.bindNode.new(o.name, paramId)], false))
    }
    o.register := "done"
}
method compiletrycatch(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def cases = o.cases
    if (o.cases.size > paramsUsed) then {
        paramsUsed := o.cases.size
    }
    def mainblock = compilenode(o.value)
    out("  int frame{myc} = gc_frame_new();")
    out("  gc_frame_newslot({mainblock});")
    var i := 0
    def params = []
    for (cases) do {c->
        def e = compilenode(c)
        out("  gc_frame_newslot({e});")
        params.push([i, e])
        i := i + 1
    }
    var finally := "NULL"
    if (false != o.finally) then {
        finally := compilenode(o.finally)
        out("  gc_frame_newslot({finally});")
    }
    for (params) do {ie->
        def idx = ie.first
        def e = ie.second
        out("  params[{idx}] = {e};")
    }
    out "  setline({o.line});"
    out("  Object catchres{myc} = tryCatch({mainblock}, params, {cases.size},"
        ++ "{finally});")
    out("  gc_frame_end(frame{myc});")
    o.register := "catchres" ++ myc
}
method compilematchcase(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def cases = o.cases
    if (o.cases.size > paramsUsed) then {
        paramsUsed := o.cases.size
    }
    def matchee = compilenode(o.value)
    out("  int frame{myc} = gc_frame_new();")
    out("  gc_frame_newslot({matchee});")
    var i := 0
    def params = []
    for (cases) do {c->
        def e = compilenode(c)
        out("  gc_frame_newslot({e});")
        params.push([i, e])
        i := i + 1
    }
    var elsecase := "NULL"
    if (false != o.elsecase) then {
        elsecase := compilenode(o.elsecase)
        out("  gc_frame_newslot({elsecase});")
    }
    for (params) do {ie->
        def idx = ie.first
        def e = ie.second
        out("  params[{idx}] = {e};")
    }
    out("  Object matchres{myc} = matchCase({matchee}, params, {cases.size},"
        ++ "{elsecase});")
    out("  gc_frame_end(frame{myc});")
    o.register := "matchres" ++ myc
}
method compileop(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    var right := compilenode(o.right)
    out("  int op_slot_right_{myc} = gc_frame_newslot({right});")
    auto_count := auto_count + 1
    if ((o.left.kind == "identifier") && {o.left.value == "super"}) then {
        def evl = escapestring2(o.nameString)
        out("  params[0] = {right};")
        out("  partcv[0] = 1;")
        out("  Object opresult{myc} = callmethod4(self, "
            ++ "\"{evl}\", 1, partcv, params, ((flags >> 24) & 0xff) + 1,"
            ++ "CFLAG_SELF);")
        o.register := "opresult{myc}"
        return true
    }
    var left := compilenode(o.left)
    out("  int op_slot_left_{myc} = gc_frame_newslot({left});")
    if ((o.value == "+") || (o.value == "*") || (o.value == "/") ||
        (o.value == "-") || (o.value == "%")) then {
        var rnm := "sum"
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
        out("  params[0] = {right};")
        out("  partcv[0] = 1;")
        out("  Object {rnm}{auto_count} = callmethod({left}, \"{o.nameString}\", "
            ++ "1, partcv, params);")
        o.register := rnm ++ auto_count
        auto_count := auto_count + 1
    } else {
        out("  params[0] = {right};")
        out("  partcv[0] = 1;")
        out("  Object opresult{auto_count} = "
            ++ "callmethod({left}, \"{o.nameString.quoted}\", 1, partcv, params);")
        o.register := "opresult" ++ auto_count
        auto_count := auto_count + 1
    }
}
method compileArguments(o, args) {
    var i := 0
    for (o.with) do { part ->
        for (part.args) do { p ->
            var r := compilenode(p)
            args.push(r)
            out("  gc_frame_newslot({r});")
        }
    }
    if (args.size > paramsUsed) then {
        paramsUsed := args.size
    }
    if (o.with.size > partsUsed) then {
        partsUsed := o.with.size
    }
    var nparts := o.with.size
    if (false != o.generics) then {
        if (partsUsed == o.with.size) then {
            partsUsed := partsUsed + 1
        }
        if (paramsUsed < (args.size + o.generics.size)) then {
            paramsUsed := paramsUsed + o.generics.size
        }
        nparts := nparts + 1
        out("  partcv[{o.with.size}] = {o.generics.size};")
        i := args.size
        o.generics.do {g->
            out("  params[{i}] = {compilenode(g)};")
            i := i + 1
        }
        i := 0
    }
    nparts
}
method assembleArguments(o, args) {
    var i := 0
    args.do { arg ->
        out "  params[{i}] = {arg};"
        i := i + 1
    }
    for (o.with.indices) do { partnr ->
        out "  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};"
    }
}
method compileSuperRequest(o, args, nparts) {
    out "// call case 1: super request"
    assembleArguments(o, args)
    def escapedName = escapestring2(o.nameString)
    out("  Object call{auto_count} = callmethod4(self, \"{escapedName}\", "
        ++ "{nparts}, partcv, params, ((flags >> 24) & 0xff) + 1, "
        ++ "CFLAG_SELF);")
}
method compileOuterRequest(o, args, nparts) {
    out "// call case 2: outer request"
    def ot = "outer{auto_count}"
    out("  Object {ot} = callmethod3(self, \"outer\", "
        ++ "0, 0, NULL, ((flags >> 24) & 0xff));")
    assembleArguments(o, args)
    def escapedName = escapestring2(o.nameString)
    out("  Object call{auto_count} = callmethodflags({ot}, \"{escapedName}\", "
        ++ "{nparts}, partcv, params, CFLAG_SELF);")
}
method compileSelfOuterRequest(o, args, nparts) {
    out "// call case 3: self.outer request"
    out("  Object call{auto_count} = callmethod3(self, \"outer\", "
        ++ "0, 0, NULL, ((flags >> 24) & 0xff));")
}
method compileSelfRequest(o, args, nparts) {
    out "// call case 4: self request"
    assembleArguments(o, args)
    def escapedName = escapestring2(o.nameString)
    out("  Object call{auto_count} = callmethodflags(self, \"{escapedName}\", "
        ++ "{nparts}, partcv, params, CFLAG_SELF);")
}
method compilePreludeRequest(o, args, nparts) {
    out "// call case 5: prelude request"
    assembleArguments(o, args)
    def escapedName = escapestring2(o.nameString)
    out("  Object call{auto_count} = callmethodflags(prelude, \"{escapedName}\", "
        ++ "{nparts}, partcv, params, CFLAG_SELF);")
}
method compileOtherRequest(o, args, nparts, tailcall) {
    out "// call case 6: other requests"
    def target = compilenode(o.receiver)
    assembleArguments(o, args)
    def escapedName = escapestring2(o.nameString)
    def callFlags = if (o.isSelfRequest) then { "CFLAG_SELF" } else { "0" }
    if (tailcall) then {
        out("  Object call{auto_count} = tailcall({target}, \"{escapedName}\","
            ++ " {nparts}, partcv, params, {callFlags});")
    } else {
        out("  Object call{auto_count} = callmethodflags({target}, \"{escapedName}\","
            ++ " {nparts}, partcv, params, {callFlags});")
    }
}
method compilecall(o, tailcall) {
    def myc = auto_count
    auto_count := auto_count + 1
    out("  int callframe{myc} = gc_frame_new();")
    var args := []
    def nparts = compileArguments(o, args)
    def receiver = o.receiver
    if (receiver.isSuper) then {
        compileSuperRequest(o, args, nparts)
    } elseif { receiver.isOuter } then {
        compileOuterRequest(o, args, nparts)
    } elseif { receiver.isSelf && { o.nameString == "outer" } } then {
        compileSelfOuterRequest(o, args, nparts)
    } elseif { receiver.isSelf } then {
        compileSelfRequest(o, args, nparts)
    } elseif { receiver.isPrelude } then {
        compilePreludeRequest(o, args, nparts)
    } else {
        compileOtherRequest(o, args, nparts, tailcall)
    }
    out("  gc_frame_end(callframe{myc});")
    o.register := "call" ++ auto_count
    auto_count := auto_count + 1
}

method compiledialect(o) {
    out("// Dialect \"{o.value}\"")
    var snm := ""
    for (o.value) do {c->
        if (c == "/") then {
            snm := ""
        } else {
            snm := snm ++ c
        }
    }
    var fn := escapestring2(o.value)
    var modg := "module_" ++ escapeident(snm)
    out("  if ({modg} == NULL)")
    if (imports.static.contains(o.value)) then {
        out("    {modg} = {modg}_init();")
    } else {
        out("    {modg} = dlmodule(\"{fn}\");")
    }
    out("  Object *var_dialect = alloc_var();")
    out("  *var_dialect = {modg};")
    out("  prelude = {modg};")
    globals.push("Object {modg}_init();")
    globals.push("Object {modg};")
    auto_count := auto_count + 1
    if (xmodule.currentDialect.hasAtStart) then {
        out("  partcv[0] = 1;")
        out("  params[0] = alloc_String(\"{escapestring(modname)}\");")
        out("  callmethodflags(callmethodflags(prelude, \"thisDialect\", "
            ++ "0, NULL, NULL, CFLAG_SELF), \"atStart(1)\", "
            ++ "1, partcv, params, CFLAG_SELF);")
    }
    o.register := "done"
}
method compileimport(o) {
    out("// Import of {o.path} as {o.nameString}")
    var snm := ""
    for (o.path) do {c->
        if (c == "/") then {
            snm := ""
        } else {
            snm := snm ++ c
        }
    }
    snm := escapeident(snm)
    o.register := "done"
    var nm := escapeident(o.nameString)
    var modg := "module_" ++ snm
    declaredvars.push(nm)
    globals.push("Object {modg};")
    out("  if ({modg} == NULL)")
    if (xmodule.dynamicCModules.contains(o.path)) then {
        out "    {modg} = dlmodule(\"{snm}\");"
    } elseif { xmodule.builtInModules.contains(o.path) } then {
        out "    {modg} = {modg}_init();"
    } else {
        out "    {modg} = LOAD_MODULE({snm});"
        // for later transformation by the C preproecessor
    }
    out("  *var_{nm} = {modg};")
    if (compilationDepth == 1) then {
//      declaredvars.push(nm);
        def methodIdent = o.value
        methodIdent.line := o.line
        methodIdent.linePos := o.linePos
        def accessor = (ast.methodNode.new([ast.signaturePart.partName(o.nameString)],
                        [methodIdent], o.dtype))
        accessor.line := o.line
        accessor.linePos := o.linePos
        if ( o.isConfidential ) then {
            accessor.annotations.push(ast.identifierNode.new("confidential", false))
        }
//        compilenode(accessor)
    }
    globals.push("Object {modg}_init();")
}
method compilereturn(o) {
    var reg
    if ((o.value.kind == "call") &&
        {util.extensions.contains("TailCall")}) then {
        // Tail-call support
        compilecall(o.value, true)
        reg := o.value.register
    } else {
        reg := compilenode(o.value)
    }
    if (inBlock) then {
        out("  block_return(realself, {reg});")
    } else {
        out("  return {reg};")
    }
    o.register := "undefined"
}
method compilePrint(o) {
    var args := []
    for (o.with.first.args) do { prm ->
        var r := compilenode(prm)
        args.push(r)
    }
    var parami := 0
    for (args) do { arg ->
        out("  params[{parami}] = {arg};")
        parami := parami + 1
    }
    out("  Object call{auto_count} = gracelib_print(NULL, "
          ++ args.size ++ ",  params);")
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
    if (param1.value != "c") then {
        o.register := "done"
        return
    }
    def param2 = o.with.second.args.first
    if (param2.kind != "string") then {
        errormessages.syntaxError "the second argument to native()code must be a string literal"
            atLine(param2.line)
    }
    def codeString = param2.value
    if (o.nameString == "native(1)code(1)") then {
        out "   // start native code from line {o.line}"
        def reg = "nat" ++ auto_count
        auto_count := auto_count + 1
        out "  Object {reg};"
        out "  \{ Object result = done;"
        out(codeString)
        out "  {reg} = result;"
        out "  }"
        o.register := reg
    } elseif {o.nameString == "native(1)header(1)"} then {
        outNH(codeString)
    }
}

method compilenum(o) {
    var cnum := o.value
    var havedot := false
    for (cnum) do {c->
        if (c == ".") then {
            havedot := true
        }
    }
    out("  Object num{auto_count} = alloc_Float64({cnum});")
    o.register := "num" ++ auto_count
    auto_count := auto_count + 1
}
method compilenode(o) {
    compilationDepth := compilationDepth + 1
    if (linenum != o.line) then {
        linenum := o.line
        out("// Begin line " ++ linenum)
        out("  setline({linenum});")
        out("  setmodule(modulename);")
        out("  setsource(originalSourceLines);")
    }
    def oKind = o.kind
    out "// starting to compile {oKind} node (depth = {compilationDepth})"
    if (oKind == "num") then {
        compilenum(o)
    } elseif { oKind == "string" } then {
        o.value := escapestring2(o.value)
        out("  if (strlit{auto_count} == NULL) \{")
        out("    strlit{auto_count} = alloc_String(\"{o.value}\");")
        out("    gc_root(strlit{auto_count});")
        out("  \}")
        globals.push("static Object strlit{auto_count};")
        o.register := "strlit" ++ auto_count
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
        if ((o.value == "true") || (o.value == "false")) then {
            var val := 0
            if (o.value == "true") then {
                val := 1
            }
            out("  Object bool" ++ auto_count ++ " = alloc_Boolean({val});")
            o.register := "bool" ++ auto_count
            auto_count := auto_count + 1
        } else {
            compileidentifier(o)
        }
    } elseif { oKind == "defdec" } then {
        compiledefdec(o)
    } elseif { oKind == "vardec" } then {
        compilevardec(o)
    } elseif { oKind == "block" } then {
        compileblock(o)
    } elseif { oKind == "method" } then {
        compilemethod(o, "self", topLevelMethodPos)
        topLevelMethodPos := topLevelMethodPos + 1
    } elseif { oKind == "array" } then {
        compilearray(o)
    } elseif { oKind == "bind" } then {
        compilebind(o)
    } elseif { oKind == "if" } then {
        compileif(o)
    } elseif { oKind == "matchcase" } then {
        compilematchcase(o)
    } elseif { oKind == "trycatch" } then {
        compiletrycatch(o)
    } elseif { oKind == "object" } then {
        compileobject(o, "self")
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
            } elseif {o.nameString == "native(1)header(1)"} then {
                compileNativeCode(o)
            } else {
                compilecall(o, false)
            }
        } else {
            compilecall(o, false)
        }
    } elseif { oKind == "op" } then {
        compileop(o)
    }
    out "// compiled {oKind} node returning {o.register} (depth = {compilationDepth})"
    compilationDepth := compilationDepth - 1
    o.register
}

method compileDynamicModule(fnBase, buildinfo) {
    // compile a dynamicly-linkable version as .gso
//    util.log 50 verbose "producing dynamic module {modname}.gso"
    var dlbit := ""
    var exportDynamicBit := ""
    var cmd := "ld -ldl -o /dev/null 2>/dev/null"
    if (io.system(cmd)) then {
        dlbit := "-ldl"
    }
    cmd := "ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1"
    if (io.system(cmd)) then {
        exportDynamicBit := "-Wl,--export-dynamic"
    } else {
        cmd := "ld -o /dev/null -undefined dynamic_lookup -lc >/dev/null 2>&1"
        if (io.system(cmd)) then {
            exportDynamicBit := "-Wl,-undefined -Wl,dynamic_lookup"
        }
    }
    cmd := "gcc -DDYNAMIC -g -I\"{util.gracelibPath}\" -I\"{sys.execPath}/../include\" " ++
        "-I\"{sys.execPath}\" -I\"{buildinfo.includepath}\" -shared -o \"{fnBase}.gso\" " ++
        "-fPIC {exportDynamicBit} \"{fnBase}.c\" "
    if ((io.system(cmd)).not) then {
        io.error.write("Fatal error: Failed compiling dynamic module.\n")
        io.error.write("The failing command was\n{cmd}\n")
        sys.exit(3)
    }
}
method compileStaticModule(fnBase, buildinfo) {
    // compile a statically-linkable version as .gcn
//    util.log 50 verbose "producing static module {modname}.gcn"
    def cmd = "gcc -std=c99 -g -I\"{util.gracelibPath}\" -I\"{sys.execPath}/../include\" " ++
        "-I\"{sys.execPath}\" -I\"{buildinfo.includepath}\" -o \"{fnBase}.gcn\" -c \"{fnBase}.c\""
        // -c          => don't run linker
        // -o <file>   => names the output file

    if ((io.system(cmd)).not) then {
        io.error.write("Fatal error: C compilation of {modname} failed.\n")
        io.error.write("The failing command was\n{cmd}\n")
        sys.exit(3)
    }
}

method linkExecutable(fnBase, buildinfo) {
    util.log_verbose "linking."
    var dlbit := ""
    var exportDynamicBit := ""
    var cmd := "ld -ldl -o /dev/null 2>/dev/null"
    if (io.system(cmd)) then {
        dlbit := "-ldl"
    }
    cmd := "ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1"
    if (io.system(cmd)) then {
        exportDynamicBit := "-Wl,--export-dynamic"
    }
    cmd := "gcc -g -o \"{fnBase}\" -fPIC {exportDynamicBit} \"{fnBase}.gcn\" "

    if (io.exists "{util.gracelibPath}/gracelib.o") then {
        cmd := cmd ++ "\"{util.gracelibPath}/gracelib.o\" "
    } elseif { io.exists "{buildinfo.objectpath}/gracelib.o" } then {
        cmd := cmd ++ "\"{buildinfo.objectpath}/gracelib.o\" "
    } elseif { io.exists "{util.outDir}/gracelib.o" } then {
        cmd := cmd ++ "\"{util.outDir}/gracelib.o\" "
    } elseif { io.exists "{util.execDir}/gracelib.o" } then {
        cmd := cmd ++ "\"{util.execDir}/gracelib.o\" "
    } else {
        io.error.write("Unable to link: can't find file gracelib.o\n")
        sys.exit(3)
    }
//    util.log 50 verbose "linking with {cmd}"

    for (imports.linkfiles) do { fn ->
        cmd := "{cmd} \"{fn}\""
    }
    cmd := "{cmd} -lm {dlbit}"
    if ((io.system(cmd)).not) then {
        io.error.write("Fatal Error: Failed linking executable for {modname}.\n")
        io.error.write("The failing command was\n{cmd}\n")
        sys.exit(3)
    }
}

method implementAliasesAndExclusionsFor(o) inheriting(e, superobj) {
    // o is an object node, and e an inherit node.  e has already been
    // compiled into register superobj.

    if (e.aliases.isEmpty && e.exclusions.isEmpty) then { return }

    def tObj = compilenode(e.value)
    def tMethNames = e.providedNames -- o.localNames
    util.log 70 verbose "tMethNames = {tMethNames.asList.sort}"
    e.aliases.do { each ->
        def nn = each.newName.nameString
        def methc = auto_count
        auto_count := auto_count + 1
        out "  Method *oldmeth{methc} = findmethodsimple({superobj},  \"{each.oldName.nameString.quoted}\");"
        out("  Method *newmeth{methc} = addmethodrealflags(self, \"{nn.quoted}\", " ++
              "oldmeth{methc}->func, MFLAG_CONFIDENTIAL);  // alias")
        out "  newmeth{methc}->definitionModule = oldmeth{methc}->definitionModule;"
        out "  newmeth{methc}->definitionLine = oldmeth{methc}->definitionLine;"
        tMethNames.remove(nn)
    }
    e.exclusions.do { each ->
        def exn = each.nameString
        if (o.localNames.contains(exn).not) then {
            def methc = auto_count
            auto_count := auto_count + 1
            out "  Method *oldmeth{methc} = findmethodsimple({superobj}, \"{exn.quoted}\");"
            out "  oldmeth{methc}->func = required_method;"
            out "  oldmeth{methc}->definitionModule = \"{modname.quoted}\";"
            out "  oldmeth{methc}->definitionLine = {each.line};"
        }
    }
}

method compile(moduleObject, outfile, rm, bt, buildinfo) {
    util.log_verbose "generating C code."
    var argv := sys.argv
    var cmd
    values := moduleObject.value
    if (util.extensions.contains "ExtendedLineups") then {
        bracketConstructor := "alloc_BuiltinList()"
    }
    var nummethods := 2 + countbindings(values)
    for (values) do { v->
        if (v.kind == "vardec") then {
            nummethods := nummethods + 1
        } elseif { v.kind == "method" } then {
            nummethods := nummethods + 1
            if (v.isFresh) then {
                nummethods := nummethods + 1
            }
        }
    }
    modname := moduleObject.name
    escmodname := escapeident(modname)
    runmode := rm
    buildtype := bt
    outF("#include <gracelib.h>")
    outF("#include <stdlib.h>")
    outF("#include <math.h>")
    outF("#include <float.h>")
    if (!util.extensions.contains("NoMain")) then {
        outF "#ifndef __CYGWIN__"
        outF "#pragma weak main"
        outF "#endif"
    }
    outF("static char compilerRevision[] = \"{buildinfo.gitrevision}\";")
    outF("static Object undefined;")
    outF("extern Object done;")
    outF("extern Object _prelude;")
    outF("extern Object ObjectType;")
    outF("extern Object String;")
    outF("extern Object Number;")
    outF("extern Object Boolean;")
    outF("extern Object Dynamic;")
    outF("extern Object Unknown;")
    outF("extern Object Block;")
    outF("extern Object Done;")
    outF("extern Object Type;")
    outF("extern Object GraceDefaultObject;")
    outF("extern Object sourceObject;")
    outF("static Object type_Object;")
    outF("static Object type_String;")
    outF("static Object type_Number;")
    outF("static Object type_Boolean;")
    outF("static Object type_Block;")
    outF("static Object type_Done;")
    outF("static Object type_Type;")
    outF("static Object argv;")
    outF("static Object emptyclosure;")
    outF("static Object prelude;")
    outF("static int isTailObject = 0;")
    outF("static Object inheritingObject = NULL;")
    outF("static const char modulename[] = \"{modname.quoted}\";");
    outF("Object module_standardGrace_init();");
    outF("static char *originalSourceLines[] = \{")
    for (util.cLines) do {l->
        outF("  \"{l}\",")
    }
    outF("  NULL\n\};")
    topLevelTypes.put("String", true)
    topLevelTypes.put("Number", true)
    topLevelTypes.put("Boolean", true)
    topLevelTypes.put("Done", true)
    topLevelTypes.put("Block", true)
    out("Object module_{escmodname}_init() \{")
    out("  int flags = 0;")
    out("  int frame = gc_frame_new();")
    out("  Object self = alloc_obj2({nummethods}, {nummethods});")
    out "  self->class->definitionModule = modulename;"
    out "  gc_root(self);"
    if (util.extensions.contains("NativePrelude")) then {
        out "  prelude = grace_prelude();"
        out "  adddatum2(self, grace_prelude(), 0);"
        out "  Object ObjectType = alloc_ObjectType();"
    } else {
        out("  prelude = module_standardGrace_init();")
        out("  adddatum2(self, prelude, 0);")
    }
    out("  addmethod2(self, \"outer\", &grace_userobj_outer);")
    out("  setline(1);")
    out("  setmodule(modulename);")
    out("  setsource(originalSourceLines);")
    var modn := "Module<{modname.quoted}>"
    out("  setclassname(self, \"{modn}\");")
    out("  Object *var_MatchFailed = alloc_var();")
    out("  *var_MatchFailed = alloc_MatchFailed();")
    out("  Object *var_noSuchValue = alloc_var();")
    out("  *var_noSuchValue = done;")
    out("  Object *var_done = alloc_var();")
    out("  *var_done = done;")
    out("  Object *var_Object = alloc_var();")
    out("  *var_Object = ObjectType;")
    out("  type_Object = ObjectType;")
    out("  Object *var_String = alloc_var();")
    out("  *var_String = String;")
    out("  type_String = String;")
    out("  Object *var_Block = alloc_var();")
    out("  *var_Block = Block;")
    out("  type_Block = Block;")
    out("  Object *var_Done = alloc_var();")
    out("  *var_Done = Done;")
    out("  type_Done = Done;")
    out("  Object *var_Number = alloc_var();")
    out("  *var_Number = Number;")
    out("  type_Number = Number;")
    out("  Object *var_Boolean = alloc_var();")
    out("  *var_Boolean = Boolean;")
    out("  type_Boolean = Boolean;")
    out("  Object *var_Dynamic = alloc_var();")
    out("  *var_Dynamic = Dynamic;")
    out("  Object *var_Unknown = alloc_var();")
    out("  *var_Unknown= Unknown;")
    out("  Object *var_Type = alloc_var();")
    out("  *var_Type = Type;")
    out("  type_Done = Type;")
    out("  Object *var__prelude = alloc_var();")
    out("  *var__prelude = grace_prelude();")
    out("  Object *var_prelude = alloc_var();")
    out("  *var_prelude = prelude;")
    out("  gc_root(*var_MatchFailed);")
    out("  emptyclosure = createclosure(0, \"empty\");")
    out("  gc_root(emptyclosure);")
    out("  struct StackFrameObject *stackframe = alloc_StackFrame({nummethods}, NULL);")
    out("  gc_root((Object)stackframe);")
    out("  pushstackframe(stackframe, \"module scope\");")
    out("  Object *selfslot = &(stackframe->slots[0]);")
    out("  *selfslot = self;")
    out("  setframeelementname(stackframe, 0, \"self\");")
    out("// end of preamble")
    var tmpo := output
    output := []
    definebindings(values, 1)
    for (values) do { o ->
        if (o.kind == "method") then {
            compilenode(o)
        }
        if (o.kind == "type") then {
            compilenode(o)
            def typeid = escapeident(o.value)
            out("type_{typeid} = *var_{typeid};")
        }
    }
    if (modname == "standardGrace") then {
    // this has the same effect as "inherit _prelude" in the source
        out("  self = setsuperobj(self, *var__prelude);")
        out("  *selfslot = self;")
    } else {
        moduleObject.externalsDo { o -> compilenode(o) }
        if (false != moduleObject.superclass) then {
            def superobj = compilenode(moduleObject.superclass.value)
            out("  self = setsuperobj(self, {superobj});")
            out("  *selfslot = self;")
            implementAliasesAndExclusionsFor(moduleObject)
                inheriting(moduleObject.superclass, superobj)
        }
    }

    moduleObject.usedTraits.do { t ->
        errormessages.error("I'm sorry, trait usage is not yet supported by " ++
              "the C code generator.") atRange(t.line. t.linePos, t.linePos + 3)
    }

    moduleObject.value.do { o ->
        if (o.isExternal) then {
            if (modname == "standardGrace") then {
                compilenode(o)
            } else {
                // do nothing, because it was already compiled above
            }
        } elseif { (o.kind != "method") && (o.kind != "type") } then {
            compilenode(o)
        }
    }
    if (xmodule.currentDialect.hasAtEnd) then {
        out("  partcv[0] = 1;")
        out("  params[0] = self;")
        out("  callmethodflags(callmethodflags(prelude, \"thisDialect\", "
            ++ "0, NULL, NULL, CFLAG_SELF), \"atEnd(1)\", "
            ++ "1, partcv, params, CFLAG_SELF);")
    }
    for (globals) do {e->
        outF(e)
    }
    var tmpo2 := output
    output := tmpo
    out("  Object params[{paramsUsed}];")
    out("  int partcv[{partsUsed}];")
    for (tmpo2) do { l->
        out(l)
    }
    paramsUsed := 1
    partsUsed := 1
    out("  gc_frame_end(frame);")
    out("  return self;")
    out("}")
    if (!util.extensions.contains("NoMain")) then {
        out("int main(int argc, char **argv) \{")
        out("  initprofiling();")
        if (util.extensions.contains("LogCallGraph")) then {
            var lcgfile := util.extensions.get("LogCallGraph")
            out("  enable_callgraph(\"{lcgfile}\");")
        }
        out("  setCompilerModulePath(\"{io.realpath(sys.execPath)}\");")
        if(buildinfo.modulepath != "") then {
            out("  setModulePath(\"{buildinfo.modulepath}\");")
        }
        out("  gracelib_argv(argv);")
        out("  Object params[1];")
        out("  undefined = alloc_Undefined();")
        out("  done = alloc_done();")
        out("  Object tmp_argv = alloc_BuiltinList();")
        out("  gc_root(tmp_argv);")
        out("  int partcv_push[] = \{1\};")
        out("  int i; for (i=0; i<argc; i++) \{")
        out("    params[0] = alloc_String(argv[i]);")
        out("    callmethodflags(tmp_argv, \"push(1)\", 1, partcv_push, params, CFLAG_SELF);")
        out("  \}")
        out("  module_sys_init_argv(tmp_argv);")
        out("  module_{escmodname}_init();")
        out("  gracelib_stats();")
        out("  return 0;")
        out("}")
    }
    for (outputFirst) do { x ->
        outprint(x)
    }
    for (outputNativeHeader) do { x ->
        outprint(x)
    }
    for (topOutput) do { x ->
        outprint(x)
    }
    for (output) do { x ->
        outprint(x)
    }

    moduleObject.imports := imports.static ++ imports.other
    xmodule.writeGctForModule(moduleObject)

    outfile.close

    if (runmode == "make") then {
        util.log_verbose "compiling C code."
        def ofpn = outfile.pathname
        var ix := ofpn.size
        while { (ix > 1) && {ofpn.at(ix) != "."} } do { ix := ix - 1 }
        def ofpnBase = if (ix > 0) then {
                ofpn.substringFrom 1 to (ix-1)
            } else {
                ofpn
            }
        compileStaticModule(ofpnBase, buildinfo)
        compileDynamicModule(ofpnBase, buildinfo)
        if (util.noexec.not) then {
            linkExecutable(ofpnBase, buildinfo)
        }
        util.log_verbose "done."
        if (buildtype == "run") then {
            if (ofpnBase.first != "/") then {
                cmd := "./" ++ ofpnBase
            } else {
                cmd := ofpnBase
            }
            def runExitCode = io.spawn(cmd, []).wait
            if (runExitCode < 0) then {
                io.error.write "minigrace: Program {modname.quoted} exited with error {-runExitCode}.\n"
                sys.exit(4)
            }
        }
    }
}
