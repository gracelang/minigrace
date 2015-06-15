#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "buildinfo" as buildinfo
import "mgcollections" as collections
import "xmodule" as xmodule
import "mirrors" as mirrors
import "errormessages" as errormessages

// genc produces C code from the AST, and optionally links and
// compiles it to native code. Code that affects the way the compiler behaves
// is in the "compile" method at the bottom. Other methods principally deal
// with translating a single AST node to C, and parallel the AST and
// parser.

var tmp
var verbosity := 30
var pad1 := 1
var auto_count := 0
var constants := []
var globals := []
var output := []
var usedvars := []
var declaredvars := []
var bblock := "entry"
var linenum := 0
var values := []
var outfile
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
def topLevelTypes = collections.map.new
def imports = util.requiredModules
var dialectHasAtModuleEnd := false
var dialectHasAtModuleStart := false
var dialectHasChecker := false

method out(s) {
    output.push(s)
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
method log_verbose(s) {
    util.log_verbose(s)
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
        if ((k == "vardec") || (k == "defdec") || (k == "typedec")
             || (k == "class")) then {
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
        if ((k == "vardec") || (k == "defdec") || (k == "typedec")
             || (k == "class")) then {
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
    out("  Object array" ++ myc ++ " = alloc_BuiltinList();")
    out("  gc_pause();")
    var i := 0
    for (o.value) do {a ->
        r := compilenode(a)
        out("  params[0] = {r};")
        out("  partcv[0] = 1;")
        out("  callmethod(array{myc}, \"push\", 1, partcv, params);")
        i := i + 1
    }
    out("  gc_unpause();")
    o.register := "array" ++ myc
}
method compilemember(o) {
    // Member in value position is actually a nullary method call.
    util.setline(o.line)
    var c := ast.callNode.new(o, [ast.callWithPart.new(o.value)])
    var r := compilenode(c)
    o.register := r
}
method compileobjouter(selfr, outerRef) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := "outer"
    var enm := escapestring2(nm)
    out("// OBJECT OUTER DEC " ++ enm)
    out("  adddatum2({selfr}, {outerRef}, 0);")
    outprint("Object reader_{escmodname}_{enm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject*)self;")
    outprint("  return uo->data[0];")
    outprint("\}")
    out("  addmethodreal({selfr},\"outer\", &reader_{escmodname}_{enm}_{myc});")
}
method compileobjtypemeth(o, selfr, pos) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.nameString
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    var flags := "MFLAG_DEF"
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso{ann.value == "confidential"}) then {
            flags := "{flags} | MFLAG_CONFIDENTIAL"
        }
    }
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
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
        } elseif { o.value.kind == "class" } then {
            compileclass(o.value, false)
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
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    var flags := "MFLAG_DEF"
    var isPublic := false
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso{ann.value == "public"}) then {
            isPublic := true
        }
        if ((ann.kind == "identifier").andAlso{ann.value == "readable"}) then {
            isPublic := true
        }
    }
    if (!isPublic) then {
        flags := "{flags} | MFLAG_CONFIDENTIAL"
    }
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
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
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
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
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    var rflags := "MFLAG_CONFIDENTIAL"
    var wflags := "MFLAG_CONFIDENTIAL"
    for (o.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso {ann.value == "public"}) then {
            rflags := "0"
            wflags := "0"
        }
        if ((ann.kind == "identifier").andAlso {ann.value == "readable"}) then {
            rflags := "0"
        }
        if ((ann.kind == "identifier").andAlso {ann.value == "writable"}) then {
            wflags := "0"
        }
    }
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
    out("  Method *reader{myc} = addmethodrealflags({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc}, {rflags});")
    var nmw := nm ++ ":="
    nmw := escapestring2(nmw)
    outprint("Object writer_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  uo->data[{pos}] = args[0];")
    outprint("  return done;");
    outprint("\}")
    out("  Method *writer{myc} = addmethodrealflags({selfr}, \"{enm}:=\",&writer_{escmodname}_{inm}_{myc}, {wflags});")
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
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
    out("  addmethodreal({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc});")
    var nmw := nm ++ ":="
    nmw := escapestring2(nmw)
    outprint("Object writer_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  uo->data[{pos}] = args[0];")
    outprint("  return done;");
    outprint("\}")
    out("  addmethodreal({selfr}, \"{enm}:=\", &writer_{escmodname}_{inm}_{myc});")
}
method compileclass(o, includeConstant) {
    var signature := o.signature
    util.setPosition(o.line, o.linePos)
    def obj = ast.objectNode.new(o.value, o.superclass)
    obj.classname := o.name.value
    var mbody := [obj]
    var newmeth := ast.methodNode.new(o.constructor, signature, mbody, false)
    if (false != o.generics) then {
        newmeth.generics := o.generics
    }
    newmeth.isFresh := true
    var obody := [newmeth]
    var cobj := ast.objectNode.new(obody, false)
    if (includeConstant) then {
        def con = ast.defDecNode.new(o.name, cobj, false)
        if ((compilationDepth == 1) && {o.name.kind != "generic"}) then {
            def meth = ast.methodNode.new(o.name, [ast.signaturePart.new(o.name.value)], [o.name], false)
            compilenode(meth)
        }
        for (o.annotations) do {a->
            con.annotations.push(a)
        }
        o.register := compilenode(con)
    } else {
        o.register := compilenode(cobj)
    }
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
    if (o.classname != "object") then {
        out("if (objclass{myc} == NULL) \{")
        out("  glfree({selfr}->class->name);")
        out("  {selfr}->class->name = \"{o.classname}\";")
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
        } elseif { e.kind == "class" } then {
            def cd = ast.defDecNode.new(e.name,
                e, false)
            for (e.annotations) do {a->
                cd.annotations.push(a)
            }
            if (util.extensions.contains("DefaultVisibility")) then {
                if (util.extensions.get("DefaultVisibility") == "public") then
                    {
                    cd.annotations.push(ast.identifierNode.new("public",
                        false))
                    cd.annotations.push(ast.identifierNode.new("readable",
                        false))
                }
            }
            out("if (objclass{myc} == NULL) \{")
            compileobjdefdecmeth(cd, selfr, pos)
            out("\}")
            compileobjdefdecdata(cd, selfr, pos)
        } else {
            pos := pos - 1
        }
        pos := pos + 1
    }
    pos := 1
    for (o.value) do { e ->
        out "  sourceObject = {selfr};"
        if (e.kind == "method") then {
        } elseif { e.kind == "vardec" } then {
            compileobjvardecdata(e, selfr, pos)
        } elseif { e.kind == "defdec" } then {
            compileobjdefdecdata(e, selfr, pos)
        } elseif { e.kind == "typedec" } then {
            compileobjdefdecdata(e, selfr, pos)
        } elseif { e.kind == "class" } then {
        } elseif { e.kind == "inherits" } then {
            // The return value is irrelevant with factory inheritance,
            // but we save it as super for the sake of "inherits true".
            superobj := compilenode(e.value)
            out "  struct UserObject *{selfr}_uo = (struct UserObject *){selfr};"
            out "  {selfr}_uo->super = {superobj};"
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
    var myc := auto_count
    auto_count := auto_count + 1
    var obj := "block{myc}"
    out("  Object {obj} = alloc_Block(NULL, NULL, \"{modname}\", {linenum});")
    out("  gc_frame_newslot({obj});")
    var id := ast.identifierNode.new("_apply", false)
    var applymeth := ast.methodNode.new(id, [ast.signaturePart.new(id, o.params)], o.body, false)
    applymeth.selfclosure := true
    compilemethod(applymeth, obj, 0)
    if (false != o.matchingPattern) then {
        def pat = compilenode(o.matchingPattern)
        out("((struct UserObject *){obj})->data[1] = {pat};")
    }
    if (false != o.extraRuntimeData) then {
        def erdid = ast.identifierNode.new("extraRuntimeData", false)
        def erdmeth = ast.methodNode.new(erdid,
            [ast.signaturePart.new(erdid, [])],
            [o.extraRuntimeData], false)
        compilemethod(erdmeth, obj, 2)
    }
    o.register := obj
    inBlock := origInBlock
}
method compiletype(o) {     // dead code!
    def myc = auto_count
    auto_count := auto_count + 1
    def escName = escapestring2(o.value)
    def idName = escapeident(o.value)
    out("// Type {o.value}")
    out("Object type{myc} = alloc_Type(\"{escName}\", {o.methods.size});")
    if (!o.anonymous) then {
        out("*var_{idName} = type{myc};")
    }
    for (o.methods) do {meth->
        def mnm = escapestring2(meth.value)
        out("add_Method((ClassData)type{myc}, \"{mnm}\", NULL);")
    }
    o.register := "done"
    if (o.anonymous) then {
        o.register := "type{myc}"
    }
    if (compilationDepth == 1) then {
        def idd = ast.identifierNode.new(o.value, false)
        compilenode(ast.methodNode.new(idd, [ast.signaturePart.new(o.value)],
            [idd], false))
    }
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
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.new(o.name)],
            [o.name], false))  // TODO: should be TypeType
    }
}
method compiletypeliteral(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    out("//   Type literal ")
    out("    Object type{myc} = alloc_Type(\"{o.name}\", {o.methods.size});")
    for (o.methods) do {meth->
        def mnm = escapestring2(meth.value)
        out("    add_Method((ClassData)type{myc}, \"{mnm}\", NULL);")
    }
    // TODO: types in the type literal
    o.register := "type{myc}"
}
method compilefor(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    out("  int forframe{myc} = gc_frame_new();")
    var over := compilenode(o.value)
    out("  gc_frame_newslot({over});")
    var blk := o.body
    var obj := compilenode(blk)
    out("  gc_frame_newslot({obj});")
    out("  params[0] = {over};")
    out("  partcv[0] = 1;")
    out("  Object iter{myc} = callmethod({over}, \"iterator\", 1, partcv, params);")
    out("  gc_frame_newslot(iter{myc});")
    out("  int forvalslot{myc} = gc_frame_newslot(NULL);")
    out("  while(1) \{")
    out("    Object cond{myc} = callmethod(iter{myc}, \"hasNext\", 0, NULL, NULL);")
    out("    if (!istrue(cond{myc})) break;")
    out("    params[0] = callmethod(iter{myc}, \"next\", 0, NULL, NULL);")
    out("    gc_frame_setslot(forvalslot{myc}, params[0]);")
    out("    callmethod({obj}, \"apply\", 1, partcv, params);")
    out("  \}")
    out("  gc_frame_end(forframe{myc});")
    o.register := "done"
}
method compilemethod(o, selfobj, pos) {
    // How to deal with closures:
    // Calculate body, find difference of usedvars/declaredvars, if closure
    // then build as such. At top of method body bind var_x as usual, but
    // set to pointer from the additional closure parameter.
    out "// method {o.nameString}"
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
    var name := o.value.value
    var nm := name ++ myc
    var numslots := 0
    var slot := 0
    var haveTypedParams := false
    out("  int i;")
    out("  int curarg = 0;")
    out("  int pushcv[] = \{1\};")
    if (!o.selfclosure) then {
        out "  if (nparts < {o.signature.size} && args)"
        out("    gracedie(\"missing argument list for {name} (probably "
            ++ "reflection error): got %i lists, expected "
            ++ "{o.signature.size}.\", nparts);")
    }
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
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
        if (part.vararg != false) then { // part has vararg
            var van := escapeident(part.vararg.value)
            out("  Object var_init_{van} = alloc_BuiltinList();")
            out("  for (i = {part.params.size}; i < argcv[{partnr - 1}]; i++) \{")
            out("    callmethod(var_init_{van}, \"push\", 1, pushcv, &args[curarg]);")
            out("    curarg++;")
            out("  \}")
            out("  Object *var_{van} = &(stackframe->slots[{slot}]);")
            out("  *var_{van} = var_init_{van};")
            declaredvars.push(van)
            slot := slot + 1
            numslots := numslots + 1
        } else {
            if (!o.selfclosure) then {
                out "  if (argcv && argcv[{partnr - 1}] != {part.params.size})"
                out "    gracedie(\"wrong number of arguments for {part.name}\");"
            }
        }
    }
    out("  Object *selfslot = &(stackframe->slots[{slot}]);")
    out("  *selfslot = self;")
    out("  setframeelementname(stackframe, 0, \"self\");")
    slot := slot + 1
    numslots := numslots + 1
    out "  if (methodInheritingObject) curarg++;"
    if (o.generics.size > 0) then {
        out("// Start generics")
        for (o.generics) do {g->
            var gn := escapeident(g.value)
            declaredvars.push(gn)
            out("  Object *var_{gn} = &(stackframe->slots[{slot}]);")
            slot := slot + 1
            numslots := numslots + 1
        }
        out("  if (nparts == 1 + {o.signature.size} + (methodInheritingObject != NULL)) \{")
        out("    if (argcv[nparts-1] < {o.generics.size}) \{")
        out("      gracedie(\"insufficient generic parameters\");")
        out("    \}")
        for (o.generics) do {g->
            var gn := escapeident(g.value)
            out("    *var_{gn} = args[curarg++];")
        }
        out("  \} else \{")
        for (o.generics) do {g->
            var gn := escapeident(g.value)
            out("    *var_{gn} = Unknown;")
        }
        out("  \}")
        out("// End generics")
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
    if ((o.body.size > 0).andAlso {o.body.last.kind == "object"}) then {
        tailObject := o.body.pop       // remove tail object
        if (tailObject.classname == "object") then {
            var selfName := selfobj
            if (selfName.startsWith "var_") then {
                selfName := selfName.substringFrom 5 to(selfName.size)
            }
            tailObject.classname := selfobj ++ "." ++ o.nameString
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
    out("  pushstackframe(stackframe, \"{escapestring2(name)}\");")
    out("  int frame = gc_frame_new();")
    out("  gc_frame_newslot((Object)stackframe);")
    out "  Object methodInheritingObject = NULL;"
    for (o.signature.indices) do { partnr ->
        def part = o.signature[partnr]
        if (part.params.size > 0) then {
            out("  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})")
            out("    gracedie(\"insufficient arguments to method {name}\");")
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
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapestring2(name)}\", &{litname}, {pos});")
        compilemethodtypes(litname, o)
    } else {
        out("  block_savedest({selfobj});")
        out("  Object closure" ++ myc ++ " = createclosure("
            ++ closurevars.size ++ ", \"{escapestring2(name)}\");")
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
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapestring2(name)}\", &{litname}, {pos});")
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
// This method is given a different name ending in _object, with the final
// parameter being the object into which to insert methods.
method compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,
        oldout) {
    def myc = auto_count
    auto_count := auto_count + 1
    var litname := escapeident("meth_{modname}_{escapestring2(nm)}_object")
    def name = escapestring2(o.value.value ++ "()object")
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
    out("  pushstackframe(stackframe, \"{escapestring2(name)}\");")
    out("  int frame = gc_frame_new();")
    out("  gc_frame_newslot((Object)stackframe);")
    var sumAccum := "0"
    for (o.signature.indices) do { partnr ->
        sumAccum := sumAccum ++ " + argcv[{partnr - 1}]"
    }
    out "  Object methodInheritingObject = args[{sumAccum}];"
    for (o.signature.indices) do { partnr ->
        def part = o.signature[partnr]
        if (part.params.size > 0) then {
            out("  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})")
            out("    gracedie(\"insufficient arguments to method {name}\");")
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
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapestring2(name)}\", &{litname}, {pos});")
        compilemethodtypes(litname, o)
    } else {
        out("  block_savedest({selfobj});")
        out("  Object closure" ++ myc ++ " = createclosure("
            ++ closurevars.size ++ ", \"{escapestring2(name)}\");")
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
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapestring2(name)}\", &{litname}, {pos});")
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
        var part := o.signature[partnr]
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
                            ++ "= \"{escapestring2(p.value)}\";")
                    }
                }
            }
            pi := pi + 1
        }
    }
}
method compilewhile(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var numslots := countbindings(o.body)
    out("  int while_cond{myc} = gc_frame_newslot(undefined);")
    out("struct StackFrameObject *whiletmpstackframe{myc} = stackframe;")
    out("  while (1) \{")
    out("  int while_frame{myc} = gc_frame_new();")
    out("stackframe = alloc_StackFrame({numslots}, whiletmpstackframe{myc});")
    out("gc_frame_newslot((Object)stackframe);")
    def cond = compilenode(o.value)
    out("    gc_frame_setslot(while_cond{myc}, {cond});")
    out("    if (!istrue({cond})) break;")
    var tret := "null"
    var slot := 0
    definebindings(o.body, 0)
    for (o.body) do { l->
        tret := compilenode(l)
    }
    out("  gc_frame_end(while_frame{myc});")
    out("  \}")
    out("stackframe = whiletmpstackframe{myc};")
    o.register := "done"
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
    var dest := o.dest
    var val := ""
    var c := ""
    var r := ""
    if (dest.kind == "identifier") then {
        val := o.value
        val := compilenode(val)
        var nm := escapeident(dest.value)
        usedvars.push(nm)
        out("  *var_{nm} = {val};")
        out("  if ({val} == undefined)")
        out("    callmethod(done, \"assignment\", 0, NULL, NULL);")
        auto_count := auto_count + 1
        o.register := val
    } elseif { dest.kind == "member" } then {
        dest.value := dest.value ++ ":="
        c := ast.callNode.new(dest, [ast.callWithPart.new(dest.value, [o.value])])
        r := compilenode(c)
        o.register := r
    } elseif { dest.kind == "index" } then {
        var imem := ast.memberNode.new("[]:=", dest.value)
        c := ast.callNode.new(imem, [ast.callWithPart.new(imem.value, [dest.index, o.value])])
        r := compilenode(c)
        o.register := r
    }
    o.register := "done"
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
    out("    callmethod(done, \"assignment\", 0, NULL, NULL);")
    if (compilationDepth == 1) then {
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.new(o.name)], [o.name], false))
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
        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.new(o.name)], [o.name], false))
        def assignID = ast.identifierNode.new(o.name.value ++ ":=", false)
        def tmpID = ast.identifierNode.new("_var_assign_tmp", false)
        compilenode(ast.methodNode.new(assignID, [ast.signaturePart.new(assignID, [tmpID])],
            [ast.bindNode.new(o.name, tmpID)], false))
    }
    o.register := "done"
}
method compileindex(o) {
    var of := compilenode(o.value)
    var index := compilenode(o.index)
    out("  params[0] = {index};")
    out("  gc_frame_newslot(params[0]);")
    out("  partcv[0] = 1;")
    out("  Object idxres{auto_count} = callmethod({of}, \"[]\", 1, partcv, params);")
    o.register := "idxres" ++ auto_count
    auto_count := auto_count + 1
}
method compilecatchcase(o) {
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
        def idx = ie[1]
        def e = ie[2]
        out("  params[{idx}] = {e};")
    }
    out "  setline({o.line});"
    out("  Object catchres{myc} = catchCase({mainblock}, params, {cases.size},"
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
        def idx = ie[1]
        def e = ie[2]
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
    if ((o.left.kind == "identifier").andAlso {o.left.value == "super"}) then {
        def evl = escapestring2(o.value)
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
        out("  Object {rnm}{auto_count} = callmethod({left}, \"{o.value}\", "
            ++ "1, partcv, params);")
        o.register := rnm ++ auto_count
        auto_count := auto_count + 1
    } else {
        out("  params[0] = {right};")
        out("  partcv[0] = 1;")
        out("  Object opresult{auto_count} = "
            ++ "callmethod({left}, \"{o.value}\", 1, partcv, params);")
        o.register := "opresult" ++ auto_count
        auto_count := auto_count + 1
    }
}
method compilecall(o, tailcall) {
    def myc = auto_count
    auto_count := auto_count + 1
    var args := []
    var obj := ""
    var evl
    var i := 0
    out("  int callframe{myc} = gc_frame_new();")
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
        for (o.generics) do {g->
            out("  params[{i}] = {compilenode(g)};")
            i := i + 1
        }
        i := 0
    }
    evl := escapestring2(o.value.value)
    if ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "super")}) then {
        out "// call case 1: super request"
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        for (o.with.indices) do { partnr ->
            out("  partcv[{partnr - 1}] = {o.with[partnr].args.size};")
        }
        out("  Object call{auto_count} = callmethod4(self, \"{evl}\", "
            ++ "{nparts}, partcv, params, ((flags >> 24) & 0xff) + 1, "
            ++ "CFLAG_SELF);")
    } elseif {(o.value.kind == "member").andAlso {
        o.value.in.kind == "member"}.andAlso {
            o.value.in.value == "outer"} } then {
        out "// call case 2: outer request"
        def ot = compilenode(o.value.in)
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        for (o.with.indices) do { partnr ->
            out("  partcv[{partnr - 1}] = {o.with[partnr].args.size};")
        }
        out("  Object call{auto_count} = callmethodflags({ot}, \"{evl}\", "
            ++ "{nparts}, partcv, params, CFLAG_SELF);")
    } elseif { (o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "self") && (o.value.value == "outer")} } then {
        out "// call case 3: self.outer request"
        out("  Object call{auto_count} = callmethod3(self, \"{evl}\", "
            ++ "0, 0, NULL, ((flags >> 24) & 0xff));")
    } elseif { (o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "self")} } then {
        out "// call case 4: self request"
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        for (o.with.indices) do { partnr ->
            out("  partcv[{partnr - 1}] = {o.with[partnr].args.size};")
        }
        out("  Object call{auto_count} = callmethodflags(self, \"{evl}\", "
            ++ "{nparts}, partcv, params, CFLAG_SELF);")
    } elseif { (o.value.kind == "member") && {(o.value.in.kind == "identifier")
        && (o.value.in.value == "prelude")} } then {
        out "// call case 5: prelude request"
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        for (o.with.indices) do { partnr ->
            out("  partcv[{partnr - 1}] = {o.with[partnr].args.size};")
        }
        out("  Object call{auto_count} = callmethodflags(prelude, \"{evl}\", "
            ++ "{nparts}, partcv, params, CFLAG_SELF);")
    } elseif { o.value.kind == "member" } then {
        out "// call case 6: other member request"
        obj := compilenode(o.value.in)
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        for (o.with.indices) do { partnr ->
            out("  partcv[{partnr - 1}] = {o.with[partnr].args.size};")
        }
        if (tailcall) then {
            out("  Object call{auto_count} = tailcall({obj}, \"{evl}\",")
            out("    {nparts}, partcv, params, 0);")
        } else {
            out("  Object call{auto_count} = callmethod({obj}, \"{evl}\",")
            out("    {nparts}, partcv, params);")
        }
    } else {
        out "// call case 7: all other requests"
        obj := "self"
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        for (o.with.indices) do { partnr ->
            out("  partcv[{partnr - 1}] = {o.with[partnr].args.size};")
        }
        if (tailcall) then {
            out("  Object call{auto_count} = tailcall(self, \"{evl}\",")
            out("    {nparts}, partcv, params, 0);")
        } else {
            out("  Object call{auto_count} = callmethod(self, \"{evl}\",")
            out("    {nparts}, partcv, params);")
        }
    }
    out("  gc_frame_end(callframe{myc});")
    o.register := "call" ++ auto_count
    auto_count := auto_count + 1
}
method compileoctets(o) {
    var escval := ""
    var l := o.value.size / 2
    var i := 0
    for (o.value) do {c->
        if ((i % 2) == 0) then {
            escval := escval ++ "\"\"\\x"
        }
        escval := escval ++ c
        i := i + 1
    }
    out("  if (octlit{auto_count} == NULL) \{")
    out("    octlit{auto_count} = alloc_Octets(\"{escval}\", {l});")
    out("  \}")
    globals.push("static Object octlit{auto_count};");
    o.register := "octlit" ++ auto_count
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
    var fn := escapestring2(o.value)
    var modg := "module_" ++ escapeident(snm)
    var modgs := "module_" ++ snm
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
    if (dialectHasAtModuleEnd) then {
        out("  partcv[0] = 1;")
        out("  params[0] = alloc_String(\"{escapestring(modname)}\");")
        out("  callmethodflags(prelude, \"atModuleStart\", "
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
    o.register := "done"
    var nm := escapeident(o.nameString)
    var fn := escapestring2(o.path)
    var modg := "module_" ++ escapeident(snm)
    var modgs := "module_" ++ snm
    declaredvars.push(nm)
    globals.push("Object {modg};")
    out("  if ({modg} == NULL)")
    if (imports.other.contains(o.path)) then {
        out("    {modg} = dlmodule(\"{fn}\");")
        // for dynamic modules
    } else {
        out("    {modg} = {modg}_init();")
        // for both static and built-in modules
    }
    out("  *var_{nm} = {modg};")
    if (compilationDepth == 1) then {
        def methodIdent = o.value
        methodIdent.line := o.line
        methodIdent.linePos := o.linePos
        def accessor = (ast.methodNode.new(methodIdent, [ast.signaturePart.new(o.name)],
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
    out "   // start native code from line {o.line}"
    def reg = "nat" ++ auto_count
    auto_count := auto_count + 1
    out "  Object {reg};"
    out "  \{ Object result = done;"
    out(codeString)
    out "  {reg} = result;"
    out "  }"
    o.register := reg
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
    } elseif { oKind == "while" } then {
        compilewhile(o)
    } elseif { oKind == "if" } then {
        compileif(o)
    } elseif { oKind == "matchcase" } then {
        compilematchcase(o)
    } elseif { oKind == "catchcase" } then {
        compilecatchcase(o)
    } elseif { oKind == "class" } then {
        compileclass(o, true)
    } elseif { oKind == "object" } then {
        compileobject(o, "self")
    } elseif { oKind == "typedec" } then {
        compiletypedec(o)
    } elseif { oKind == "typeliteral" } then {
        compiletypeliteral(o)
    } elseif { oKind == "member" } then {
        compilemember(o)
    } elseif { oKind == "for" } then {
        compilefor(o)
    } elseif { oKind == "call" } then {
        if (o.value.isMember.andAlso{o.value.in.value == "prelude"}) then {
            if (o.nameString == "print") then {
                compilePrint(o)
            } elseif {o.nameString == "native()code"} then {
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

method processImports(values') {
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
    if (util.runmode == "make") then {
        for (values') do { v ->
            if (v.kind == "dialect") then {
                var nm := v.value
                log_verbose("loading dialect {nm} for checker.")
                def CheckerFailure = Exception.refine "CheckerFailure"
                var dobj
                try {
                    dobj := mirrors.loadDynamicModule(nm)
                    def mths = mirrors.reflect(dobj).methods
                    for (mths) do { m->
                        if (m.name == "checker") then {
                            dialectHasChecker := true
                        }
                        if (m.name == "atModuleEnd") then {
                            dialectHasAtModuleEnd := true
                        }
                        if (m.name == "atModuleStart") then {
                            dialectHasAtModuleStart := true
                        }
                    }
                } catch { e : RuntimeError ->
                    util.setPosition(v.line, 1)
                    e.printBacktrace
                    errormessages.error("Dialect error: Dialect '{nm}' failed to load: {e}.")atLine(v.line)
                } 
                try {
                    if (dialectHasChecker) then { dobj.checker(values') }
                } catch { e : CheckerFailure ->
                    match (e.data)
                        case { lp : LinePos ->
                            util.setPosition(e.data.line, e.data.linePos)
                            errormessages.error("{e.exception}: {e.message}.")
                                atPosition(lp.line, lp.linePos)
                        }
                        case { rs : RangeSuggestions ->
                            errormessages.error("{e.exception}: {e.message}.")
                                atRange(rs.line, rs.posStart, rs.posEnd)
                                withSuggestions(rs.suggestions)
                        }
                        case { _ ->
                            errormessages.error("{e.exception}: {e.message}.")
                                atPosition(util.linenum, 0)
                        }
                } catch { e : Exception ->
                    e.printBacktrace
                    errormessages.error("Unexpected exception raised by checker for dialect '{nm}'.\n"
                        ++ "{e.exception}: {e.message}.") atLine(v.line)
                }
            }
        }
    }
}
method compile(vl, of, mn, rm, bt) {
    log_verbose "generating C code..."
    var argv := sys.argv
    var cmd
    values := vl
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
    outfile := of
    modname := mn
    escmodname := escapeident(modname)
    runmode := rm
    buildtype := bt
    outprint("#include <gracelib.h>")
    outprint("#include <stdlib.h>")
    outprint("#include <math.h>")
    outprint("#include <float.h>")
    if (!util.extensions.contains("NoMain")) then {
        outprint "#ifndef __CYGWIN__"
        outprint "#pragma weak main"
        outprint "#endif"
    }
    outprint("static char compilerRevision[] = \"{buildinfo.gitrevision}\";")
    outprint("static Object undefined;")
    outprint("extern Object done;")
    outprint("extern Object _prelude;")
    outprint("extern Object ObjectType;")
    outprint("extern Object String;")
    outprint("extern Object Number;")
    outprint("extern Object Boolean;")
    outprint("extern Object Dynamic;")
    outprint("extern Object Unknown;")
    outprint("extern Object Block;")
    outprint("extern Object Done;")
    outprint("extern Object Type;")
    outprint("extern Object GraceDefaultObject;")
    outprint("extern Object sourceObject;")
    outprint("static Object type_Object;")
    outprint("static Object type_String;")
    outprint("static Object type_Number;")
    outprint("static Object type_Boolean;")
    outprint("static Object type_Block;")
    outprint("static Object type_Done;")
    outprint("static Object type_Type;")
    outprint("static Object argv;")
    outprint("static Object emptyclosure;")
    outprint("static Object prelude;")
    outprint("static int isTailObject = 0;")
    outprint("static Object inheritingObject = NULL;")
    outprint("static const char modulename[] = \"{modname}\";");
    outprint("Object module_StandardPrelude_init();");
    outprint("static char *originalSourceLines[] = \{")
    for (util.cLines) do {l->
        outprint("  \"{l}\",")
    }
    outprint("  NULL\n\};")
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
        out("  prelude = module_StandardPrelude_init();")
        out("  adddatum2(self, prelude, 0);")
    }
    out("  addmethod2(self, \"outer\", &grace_userobj_outer);")
    out("  setline(1);")
    out("  setmodule(modulename);")
    out("  setsource(originalSourceLines);")
    var modn := "Module<{modname}>"
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
    out("  *var_prelude = grace_prelude();")
    out("  gc_root(*var_MatchFailed);")
    out("  emptyclosure = createclosure(0, \"empty\");")
    out("  gc_root(emptyclosure);")
    out("  struct StackFrameObject *stackframe = alloc_StackFrame({nummethods}, NULL);")
    out("  gc_root((Object)stackframe);")
    out("  pushstackframe(stackframe, \"module scope\");")
    out("  Object *selfslot = &(stackframe->slots[0]);")
    out("  *selfslot = self;")
    out("  setframeelementname(stackframe, 0, \"self\");")
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
    if (modname == "StandardPrelude") then {
    // this has the same effect as "inherits _prelude" in the source
        out("  self = setsuperobj(self, *var__prelude);")
        out("  *selfslot = self;")
    }
    for (values) do { o ->
        if (o.kind == "inherits") then {
            def superobj = compilenode(o.value)
            out("  self = setsuperobj(self, {superobj});")
            out("  *selfslot = self;")
        }
        if ((o.kind != "method") && (o.kind != "type")) then {
            compilenode(o)
        }
    }
    if (dialectHasAtModuleEnd) then {
        out("  partcv[0] = 1;")
        out("  params[0] = self;")
        out("  callmethodflags(prelude, \"atModuleEnd\", "
            ++ "1, partcv, params, CFLAG_SELF);")
    }
    for (globals) do {e->
        outprint(e)
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
        out("    callmethod(tmp_argv, \"push\", 1, partcv_push, params);")
        out("  \}")
        out("  module_sys_init_argv(tmp_argv);")
        out("  module_{escmodname}_init();")
        out("  gracelib_stats();")
        out("  return 0;")
        out("}")
    }
    for (topOutput) do { x ->
        outprint(x)
    }
    for (output) do { x ->
        outprint(x)
    }
    
    xmodule.writeGCT(modname)
        fromValues(values) modules(imports.static ++ imports.other)
        
    outfile.close

    if (runmode == "make") then {
        log_verbose("compiling C code.")
        def ofpn = outfile.pathname
        var ix := ofpn.size
        while { (ix > 1).andAlso {ofpn.at(ix) != "."} } do { ix := ix - 1 }
        def ofpnBase = if (ix > 0) then { 
                ofpn.substringFrom 1 to (ix-1)
            } else {
                ofpn
            }

        cmd := "gcc -std=c99 -g -I\"{util.gracelibPath}\" -I\"{sys.execPath}/../include\" -I\"{sys.execPath}\" -I\"{buildinfo.includepath}\" -o \"{ofpnBase}.gcn\" -c \"{ofpn}\""
        
        if ((io.system(cmd)).not) then {
            io.error.write("Fatal error: C compilation of {modname} failed.\n")
            sys.exit(3)
        }
        if (util.noexec.not) then {
            log_verbose("linking.")
            var dlbit := ""
            var exportDynamicBit := ""
            cmd := "ld -ldl -o /dev/null 2>/dev/null"
            if (io.system(cmd)) then {
                dlbit := "-ldl"
            }
            cmd := "ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1"
            if (io.system(cmd)) then {
                exportDynamicBit := "-Wl,--export-dynamic"
            }
            cmd := "gcc -g -o \"{ofpnBase}\" -fPIC {exportDynamicBit} \"{ofpnBase}.gcn\" "

            if (io.exists "{util.gracelibPath}/gracelib.o") then {
                cmd := cmd ++ "\"{util.gracelibPath}/gracelib.o\" "
            } elseif { io.exists "{buildinfo.objectpath}/gracelib.o" } then {
                cmd := cmd ++ "\"{buildinfo.objectpath}/gracelib.o\" "
            } elseif { io.exists "{util.sourceDir}/gracelib.o" } then {
                cmd := cmd ++ "\"{util.sourceDir}/gracelib.o\" "
            } elseif { io.exists "{util.execDir}/gracelib.o" } then {
                cmd := cmd ++ "\"{util.execDir}/gracelib.o\" "
            } else {
                io.error.write("Unable to link: can't find file gracelib.o\n")
                sys.exit(3)
            }

            for (imports.linkfiles) do { fn ->
                cmd := cmd ++ " " ++ fn
            }
            cmd := cmd ++ " -lm {dlbit}"
            if ((io.system(cmd)).not) then {
                io.error.write("Failed linking.\n")
                sys.exit(3)
            }
        }
        if (util.dynamicModule) then {
            log_verbose("producing dynamic module {modname}.gso.")
            var dlbit := ""
            var exportDynamicBit := ""
            cmd := "ld -ldl -o /dev/null 2>/dev/null"
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
            cmd := "gcc -g -I\"{util.gracelibPath}\" -I\"{sys.execPath}/../include\" -I\"{sys.execPath}\" -I\"{buildinfo.includepath}\" -shared -o \"{ofpnBase}.gso\" -fPIC {exportDynamicBit} "
                ++ "\"{ofpnBase}.c\" "
            if ((io.system(cmd)).not) then {
                io.error.write("Failed producing dynamic module.\n")
                sys.exit(3)
            }
        }
        log_verbose("done.")
        if (buildtype == "run") then {
            if (ofpnBase[1] != "/") then {
                cmd := "./" ++ ofpnBase
            } else {
                cmd := ofpnBase
            }
            def runExitCode = io.spawn(cmd).wait
            if (runExitCode < 0) then {
                io.error.write "minigrace: Program {modname} exited with error {-runExitCode}.\n"
                sys.exit(4)
            }
        }
    }
}
