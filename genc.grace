import io
import sys
import ast
import util
import buildinfo
import subtype

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
var linenum := 1
var modules := []
var staticmodules := []
var values := []
var outfile
var modname := "main"
var escmodname := "main"
var runmode := "build"
var buildtype := "bc"
var gracelibPath := "gracelib.o"
var inBlock := false
var paramsUsed := 1
var topLevelMethodPos := 1
var topOutput := []
var bottomOutput := output
var compilationDepth := 0
def topLevelTypes = HashMap.new

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
        countbindings(n.thenblock) + countbindings(n.elseblock)
    } else {
        0
    }
}
method countbindings(l) {
    var numslots := 0
    for (l) do { n ->
        if ((n.kind == "vardec") | (n.kind == "defdec")
            | (n.kind == "class") | (n.kind == "type")) then {
            numslots := numslots + 1
        } elseif (n.kind == "if") then {
            numslots := numslots + countnodebindings(n)
        }
    }
    numslots
}
method definebindings(l, slot) {
    for (l) do { n ->
        if ((n.kind == "vardec") | (n.kind == "defdec")
            | (n.kind == "class")) then {
            var tnm := ""
            if (n.name.kind == "generic") then {
                tnm := escapeident(n.name.value.value)
            } else {
                tnm := escapeident(n.name.value)
            }
            if (!declaredvars.contains(tnm)) then {
                declaredvars.push(tnm)
                out("  Object *var_{tnm} = &(stackframe->slots[{slot}]);")
                slot := slot + 1
            }
        } else {
            if (n.kind == "if") then {
                slot := definebindings(n.thenblock, slot)
                slot := definebindings(n.elseblock, slot)
                n.handledIdentifiers := true
            } else {
                if (n.kind == "type") then {
                    var tnm := escapeident(n.value)
                    if (!declaredvars.contains(tnm)) then {
                        declaredvars.push(tnm)
                        out("  Object *var_{tnm} = "
                            ++ "&(stackframe->slots[{slot}]);")
                        slot := slot + 1
                    }
                }
            }
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
        if (((o >= 65) & (o <= 90))
            | ((o >= 97) & (o <= 122))
            | ((o >= 48) & (o <= 57))
            | (o == 95)) then {
            ns := ns ++ c
        } else {
            ns := ns ++ "_{o}_"
        }
    }
    ns
}
method escapestring2(s) {
    var ns := ""
    var cd := 0
    var ls := false
    for (escapestring(s)) do { c->
        if (ls & (c == "\\")) then {
            ls := false
            ns := ns ++ "\\\\"
        } elseif (c == "\\") then {
            ls := true
        } elseif (ls) then {
            ns := ns ++ "\"\"\\x" ++ c
            ls := false
            cd := 2
        } else {
            ns := ns ++ c
        }
        if (cd == 1) then {
            ns := ns ++ "\"\""
            cd := 0
        } elseif (cd > 0) then {
            cd := cd - 1
        }
    }
    ns
}
method compilearray(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var r
    out("  Object array" ++ myc ++ " = alloc_List();")
    out("  gc_pause();")
    var i := 0
    for (o.value) do {a ->
        r := compilenode(a)
        out("  params[0] = {r};")
        out("  int argcv{myc}_{i}[] = \{1\};")
        out("  callmethod(array{myc}, \"push\", 1, argcv{myc}_{i}, params);")
        i := i + 1
    }
    out("  gc_unpause();")
    o.register := "array" ++ myc
}
method compilemember(o) {
    // Member in value position is actually a nullary method call.
    var l := []
    var c := ast.astcall(o, [l])
    var r := compilenode(c)
    o.register := r
}
method compileobjouter(selfr, outerRef) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := "outer"
    var len := length(nm) + 1
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
}
method compileobjdefdecmeth(o, selfr, pos) {
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.name.value
    var len := length(nm) + 1
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
    out("  addmethodrealflags({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc}, MFLAG_DEF);")
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
    var len := length(nm) + 1
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
    out("  addmethodrealflags({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc}, MFLAG_DEF);")
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
    var len := length(nm) + 1
    var enm := escapestring2(nm)
    var inm := escapeident(nm)
    outprint("Object reader_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  return uo->data[{pos}];")
    outprint("\}")
    out("  addmethodreal({selfr}, \"{enm}\",&reader_{escmodname}_{inm}_{myc});")
    var nmw := nm ++ ":="
    len := length(nmw) + 1
    nmw := escapestring2(nmw)
    outprint("Object writer_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  uo->data[{pos}] = args[0];")
    outprint("  return none;");
    outprint("\}")
    out("  addmethodreal({selfr}, \"{enm}:=\", &writer_{escmodname}_{inm}_{myc});")
}
method compileobjvardec(o, selfr, pos) {
    var val := "undefined"
    if (false != o.value) then {
        val := compilenode(o.value)
    }
    var myc := auto_count
    auto_count := auto_count + 1
    var nm := o.name.value
    var len := length(nm) + 1
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
    len := length(nmw) + 1
    nmw := escapestring2(nmw)
    outprint("Object writer_{escmodname}_{inm}_{myc}"
        ++ "(Object self, int nparams, int *argcv, "
        ++ "Object* args, int flags) \{")
    outprint("  struct UserObject *uo = (struct UserObject *)self;")
    outprint("  uo->data[{pos}] = args[0];")
    outprint("  return none;");
    outprint("\}")
    out("  addmethodreal({selfr}, \"{enm}:=\", &writer_{escmodname}_{inm}_{myc});")
}
method compileclass(o) {
    var signature := o.signature
    def obj = ast.astobject(o.value, o.superclass)
    obj.classname := o.name.value
    var mbody := [obj]
    var newmeth := ast.astmethod(o.constructor, signature, mbody, false)
    var obody := [newmeth]
    var cobj := ast.astobject(obody, false)
    var con := ast.astdefdec(o.name, cobj, false)
    if ((compilationDepth == 1) && {o.name.kind != "generic"}) then {
        def meth = ast.astmethod(o.name, [ast.SignaturePart.new(o.name)], [o.name], false)
        compilenode(meth)
    }
    o.register := compilenode(con)
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
    for (o.value) do { e ->
        if (e.kind == "vardec") then {
            numMethods := numMethods + 1
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
    if (o.superclass /= false) then {
        superobj := compilenode(o.superclass)
        out("  setsuperobj({selfr}, {superobj});")
    }
    compileobjouter(selfr, outerRef)
    out("  Object oldself{myc} = self;")
    out("  self = {selfr};")
    out("  *selfslot = self;")
    for (o.value) do { e ->
        if (e.kind == "method") then {
            compilemethod(e, selfr, pos)
        } elseif (e.kind == "vardec") then {
            out("if (objclass{myc} == NULL) \{")
            compileobjvardecmeth(e, selfr, pos)
            out("\}")
            out("{selfr}->flags |= OFLAG_MUTABLE;")
            compileobjvardecdata(e, selfr, pos)
        } elseif (e.kind == "defdec") then {
            out("if (objclass{myc} == NULL) \{")
            compileobjdefdecmeth(e, selfr, pos)
            out("\}")
            compileobjdefdecdata(e, selfr, pos)
        } elseif (e.kind == "inherits") then {
            superobj := compilenode(e.value)
            out("  setsuperobj({selfr}, {superobj});")
            pos := pos - 1
        } else {
            compilenode(e)
            pos := pos - 1 // Compensate for below
        }
        pos := pos + 1
    }
    out("objclass{myc} = {selfr}->class;")
    out("  self = oldself{myc};")
    out("  *selfslot = self;")
    out("  set_type({selfr}, "
        ++ "{subtype.typeId(o.otype)});")
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
    var id := ast.astidentifier("_apply", false)
    var applymeth := ast.astmethod(id, [ast.SignaturePart.new(id, o.params)], o.body, false)
    applymeth.selfclosure := true
    compilemethod(applymeth, obj, 0)
    if (false != o.matchingPattern) then {
        def pat = compilenode(o.matchingPattern)
        out("((struct UserObject *){obj})->data[1] = {pat};")
        out("((struct UserObject *){obj})->data[2] = {obj};")
    }
    o.register := obj
    inBlock := origInBlock
}
method compiletype(o) {
    def myc = auto_count
    auto_count := auto_count + 1
    def escName = escapestring2(o.value)
    def idName = escapeident(o.value)
    out("// Type {o.value}")
    out("Object type{myc} = alloc_Type(\"{escName}\", {o.methods.size});")
    out("*var_{idName} = type{myc};")
    for (o.methods) do {meth->
        def mnm = escapestring2(meth.value)
        out("add_Method((ClassData)type{myc}, \"{mnm}\", NULL);")
    }
    o.register := "none"
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
    out("  int argcv{myc}[] = \{1\};")
    out("  Object iter{myc} = callmethod({over}, \"iter\", 1, argcv{myc}, params);")
    out("  gc_frame_newslot(iter{myc});")
    out("  int forvalslot{myc} = gc_frame_newslot(NULL);")
    out("  while(1) \{")
    out("    Object cond{myc} = callmethod(iter{myc}, \"havemore\", 0, NULL, NULL);")
    out("    if (!istrue(cond{myc})) break;")
    out("    params[0] = callmethod(iter{myc}, \"next\", 0, NULL, NULL);")
    out("    gc_frame_setslot(forvalslot{myc}, params[0]);")
    out("    callmethod({obj}, \"apply\", 1, argcv{myc}, params);")
    out("  \}")
    out("  gc_frame_end(forframe{myc});")
    o.register := "none"
}
method compilemethod(o, selfobj, pos) {
    // How to deal with closures:
    // Calculate body, find difference of usedvars/declaredvars, if closure
    // then build as such. At top of method body bind var_x as usual, but
    // set to pointer from the additional closure parameter.
    var origParamsUsed := paramsUsed
    paramsUsed := 1
    var origInBlock := inBlock
    inBlock := o.selfclosure
    var oldout := output
    var oldbblock := bblock
    var oldusedvars := usedvars
    var olddeclaredvars := declaredvars
    output := []
    usedvars := []
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
                if ((param.dtype.value != "Dynamic")
                    && ((param.dtype.kind == "identifier")
                        || (param.dtype.kind == "type"))) then {
                    haveTypedParams := true
                }
            }
        }
        if (part.vararg != false) then { // part has vararg
            var van := escapeident(part.vararg.value)
            out("  Object var_init_{van} = alloc_List();")
            out("  for (i = {part.params.size}; i < argcv[{partnr - 1}]; i++) \{")
            out("    callmethod(var_init_{van}, \"push\", 1, pushcv, &args[curarg]);")
            out("    curarg++;")
            out("  \}")
            out("  Object *var_{van} = &(stackframe->slots[{slot}]);")
            out("  *var_{van} = var_init_{van};")
            declaredvars.push(van)
            slot := slot + 1
            numslots := numslots + 1
        }
    }
    out("  Object *selfslot = &(stackframe->slots[{slot}]);")
    out("  *selfslot = self;")
    slot := slot + 1
    numslots := numslots + 1
    var ret := "none"
    numslots := numslots + countbindings(o.body)
    definebindings(o.body, slot)
    var tco := false
    if ((o.body.size > 0) && {o.body.last.kind == "call"}
        && {util.extensions.contains("TailCall")}) then {
        tco := o.body.pop
    }
    for (o.body) do { l ->
        ret := compilenode(l)
    }
    if (false != tco) then {
        compilecall(tco, true)
        ret := tco.register
    }
    out("  gc_frame_end(frame);")
    out("  return {ret};")
    out("\}")
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
    } else {
        out("Object {litname}(Object self, int nparts, int *argcv, Object *args, "
            ++ "int32_t flags) \{")
        out("  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);")
    }
    out("  int frame = gc_frame_new();")
    out("  gc_frame_newslot((Object)stackframe);")
    for (o.signature.indices) do { partnr ->
        def part = o.signature[partnr]
        if (part.params.size > 0) then {
            out("  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})")
            out("    gracedie(\"insufficient arguments to method\");")
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
    var j := 0
    for (closurevars) do { cv ->
        if (cv == "self") then {
            out("  Object self = *(getfromclosure(closure, {j}));")
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
        if (cv /= "self") then {
            if ((usedvars.contains(cv)).not) then {
                usedvars.push(cv)
            }
        }
    }
    var len := length(name) + 1
    if (selfobj == false) then {
    } elseif (closurevars.size == 0) then {
        var uo2 := "uo{myc}"
        out("  struct UserObject *{uo2} = (struct UserObject*){selfobj};")
        out("  {uo2}->data[{pos}] = emptyclosure;")
        out("  Method *meth_{litname} = addmethod2pos({selfobj}, \"{escapestring2(name)}\", &{litname}, {pos});")
        if (haveTypedParams) then {
            compilemethodtypes(litname, o)
        }
    } else {
        out("  block_savedest({selfobj});")
        out("  Object closure" ++ myc ++ " = createclosure("
            ++ closurevars.size ++ ", \"{escapestring2(name)}\");")
        out("setclosureframe(closure{myc}, stackframe);")
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
        if (haveTypedParams) then {
            compilemethodtypes(litname, o)
        }
    }
    inBlock := origInBlock
    paramsUsed := origParamsUsed
}
method compilemethodtypes(litname, o) {
    var argcv := "int argcv_{litname}[] = \{"
    for (o.signature.indices) do { partnr ->
        var part := o.signature[partnr]
        argcv := argcv ++ part.params.size
        if (partnr < o.signature.size) then {
            argcv := argcv ++ ", "
        }
    }
    argcv := argcv ++ "\};"
    out(argcv)
    out("meth_{litname}->type = alloc_MethodType({o.signature.size}, argcv_{litname});")
    var pi := 0
    for (o.signature) do { part ->
        for (part.params) do { p ->
            // We store information for static top-level types only:
            // absent information is treated as Dynamic (and unchecked).
            if (false != p.dtype) then {
                if ((p.dtype.kind == "identifier")
                    || (p.dtype.kind == "type")) then {
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
    out("gc_frame_newslot(stackframe);")
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
    o.register := "none"
}
method compileifexpr(o) {
    var myc := auto_count
    auto_count := auto_count + 1
    var cond := compilenode(o.value)
    out("  Object if{myc} = none;")
    out("struct StackFrameObject *iftmpstackframe{myc} = stackframe;")
    out("  if (istrue({cond})) \{")
    var numslots := countbindings(o.thenblock)
    out("stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});")
    out("gc_frame_newslot(stackframe);")
    var tret := "none"
    var fret := "none"
    var tblock := "ERROR"
    var fblock := "ERROR"
    definebindings(o.thenblock, 0)
    for (o.thenblock) do { l->
        tret := compilenode(l)
    }
    out("    gc_frame_newslot({tret});")
    out("    if{myc} = {tret};")
    out("  \} else \{")
    if (o.elseblock.size > 0) then {
        numslots := countbindings(o.elseblock)
        out("stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});")
        out("gc_frame_newslot(stackframe);")
        definebindings(o.elseblock, 0)
        for (o.elseblock) do { l->
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
    out("  Object if{myc} = none;")
    out("  if (istrue({cond})) \{")
    var tret := "none"
    var fret := "none"
    var tblock := "ERROR"
    var fblock := "ERROR"
    for (o.thenblock) do { l->
        tret := compilenode(l)
    }
    out("    gc_frame_newslot({tret});")
    out("    if{myc} = {tret};")
    out("  \} else \{")
    if (o.elseblock.size > 0) then {
        for (o.elseblock) do { l->
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
    if (name == "self") then {
        o.register := "self"
    } elseif (name == "__compilerRevision") then {
        out("  Object var_val___compilerRevision" ++ auto_count
            ++ " = alloc_String(compilerRevision);")
        o.register := "var_val___compilerRevision" ++ auto_count
        auto_count := auto_count + 1
    } elseif (name == "_46__46__46_") then {
        out("  Object ellipsis{auto_count} = alloc_ellipsis();")
        o.register := "ellipsis{auto_count}"
        auto_count := auto_count + 1
    } else {
        name := escapestring2(name)
        if (modules.contains(name)) then {
            o.register := "module_" ++ name
        } else {
            usedvars.push(name)
            o.register := "*var_{name}"
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
        var nm := escapeident(dest.value)
        usedvars.push(nm)
        out("  *var_{nm} = {val};")
        out("  if ({val} == undefined)")
        out("    callmethod(none, \"assignment\", 0, NULL, NULL);")
        auto_count := auto_count + 1
        o.register := val
    } elseif (dest.kind == "member") then {
        dest.value := dest.value ++ ":="
        c := ast.astcall(dest, [[o.value]])
        r := compilenode(c)
        o.register := r
    } elseif (dest.kind == "index") then {
        var imem := ast.astmember("[]:=", dest.value)
        c := ast.astcall(imem, [[dest.index, o.value]])
        r := compilenode(c)
        o.register := r
    }
    o.register := "none"
}
method compiledefdec(o) {
    var nm
    if (o.name.kind == "generic") then {
        nm := escapeident(o.name.value.value)
    } else {
        nm := escapeident(o.name.value)
    }
    declaredvars.push(nm)
    var val := o.value
    if (false != val) then {
        val := compilenode(val)
    } else {
        util.syntax_error("const must have value bound.")
    }
    out("  *var_{nm} = {val};")
    out("  if ({val} == undefined)")
    out("    callmethod(none, \"assignment\", 0, NULL, NULL);")
    if (compilationDepth == 1) then {
        compilenode(ast.astmethod(o.name, [ast.SignaturePart.new(o.name)], [o.name], false))
    }
    o.register := "none"
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
        out("    callmethod(none, \"assignment\", 0, NULL, NULL);")
    }
    if (compilationDepth == 1) then {
        compilenode(ast.astmethod(o.name, [ast.SignaturePart.new(o.name)], [o.name], false))
        def assignID = ast.astidentifier(o.name.value ++ ":=", false)
        def tmpID = ast.astidentifier("_var_assign_tmp", false)
        compilenode(ast.astmethod(assignID, [ast.SignaturePart.new(assignID, [tmpID])],
            [ast.astbind(o.name, tmpID)], false))
    }
    o.register := "none"
}
method compileindex(o) {
    var of := compilenode(o.value)
    var index := compilenode(o.index)
    out("  params[0] = {index};")
    out("  gc_frame_newslot(params[0]);")
    out("  int argcv{auto_count}[] = \{1\};")
    out("  Object idxres{auto_count} = callmethod({of}, \"[]\", 1, argcv{auto_count}, params);")
    o.register := "idxres" ++ auto_count
    auto_count := auto_count + 1
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
    var left := compilenode(o.left)
    out("  int op_slot_left_{myc} = gc_frame_newslot({left});")
    var right := compilenode(o.right)
    out("  int op_slot_right_{myc} = gc_frame_newslot({right});")
    auto_count := auto_count + 1
    if ((o.value == "+") | (o.value == "*") | (o.value == "/") |
        (o.value == "-") | (o.value == "%")) then {
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
        out("  int argcv{auto_count}[] = \{1\};")
        out("  Object {rnm}{auto_count} = callmethod({left}, \"{o.value}\", "
            ++ "1, argcv{auto_count}, params);")
        o.register := rnm ++ auto_count
        auto_count := auto_count + 1
    } else {
        var len := length(o.value) + 1
        var evl := escapestring2(o.value)
        var con := "@.str" ++ constants.size ++ " = private unnamed_addr "
            ++ "constant [" ++ len ++ " x i8] c\"" ++ evl ++ "\\00\""
        out("  params[0] = {right};")
        out("  int argcv{auto_count}[] = \{1\};")
        out("  Object opresult{auto_count} = "
            ++ "callmethod({left}, \"{o.value}\", 1, argcv{auto_count}, params);")
        o.register := "opresult" ++ auto_count
        auto_count := auto_count + 1
    }
}
method compilecall(o, tailcall) {
    def myc = auto_count
    auto_count := auto_count + 1
    var args := []
    var obj := ""
    var len := 0
    var evl
    var i := 0
    out("  int callframe{myc} = gc_frame_new();")
    for (o.with) do { part ->
        for (part) do { p ->
            var r := compilenode(p)
            args.push(r)
            out("  gc_frame_newslot({r});")
        }
    }
    if (args.size > paramsUsed) then {
        paramsUsed := args.size
    }
    evl := escapestring2(o.value.value)
    if ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        & (o.value.in.value == "super")}) then {
        var argcv := "  int argcv{auto_count}[] = \{"
        for (1..o.with.size) do { partnr ->
            argcv := argcv ++ o.with[partnr].size
            if (partnr < o.with.size) then {
                argcv := argcv ++ ", "
            }
        }
        argcv := argcv ++ "\};"
        out(argcv)
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        out("  Object call{auto_count} = callmethod3(self, \"{evl}\", "
            ++ "{o.with.size}, argcv{auto_count}, params, ((flags >> 24) & 0xff) + 1);")
    } elseif ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        & (o.value.in.value == "self") & (o.value.value == "outer")}
        ) then {
        out("  Object call{auto_count} = callmethod3(self, \"{evl}\", "
            ++ "0, 0, NULL, ((flags >> 24) & 0xff));")
    } elseif ((o.value.kind == "member") && {(o.value.in.kind == "identifier")
        & (o.value.in.value == "prelude")}) then {
        var argcv := "  int argcv{auto_count}[] = \{"
        for (1..o.with.size) do { partnr ->
            argcv := argcv ++ o.with[partnr].size
            if (partnr < o.with.size) then {
                argcv := argcv ++ ", "
            }
        }
        argcv := argcv ++ "\};"
        out(argcv)
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        out("  Object call{auto_count} = callmethod(prelude, \"{evl}\", "
            ++ "{o.with.size}, argcv{auto_count}, params);")
    } elseif (o.value.kind == "member") then {
        obj := compilenode(o.value.in)
        len := length(o.value.value) + 1
        var argcv := "  int argcv{auto_count}[] = \{"
        for (1..o.with.size) do { partnr ->
            argcv := argcv ++ o.with[partnr].size
            if (partnr < o.with.size) then {
                argcv := argcv ++ ", "
            }
        }
        argcv := argcv ++ "\};"
        out(argcv)
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        if (tailcall) then {
            out("  Object call{auto_count} = tailcall({obj}, \"{evl}\",")
            out("    {o.with.size}, argcv{auto_count}, params, 0);")
        } else {
            out("  Object call{auto_count} = callmethod({obj}, \"{evl}\",")
            out("    {o.with.size}, argcv{auto_count}, params);")
        }
    } else {
        obj := "self"
        len := length(o.value.value) + 1
        var argcv := "  int argcv{auto_count}[] = \{"
        for (1..o.with.size) do { partnr ->
            argcv := argcv ++ o.with[partnr].size
            if (partnr < o.with.size) then {
                argcv := argcv ++ ", "
            }
        }
        argcv := argcv ++ "\};"
        out(argcv)
        for (args) do { arg ->
            out("  params[{i}] = {arg};")
            i := i + 1
        }
        if (tailcall) then {
            out("  Object call{auto_count} = tailcall(self, \"{evl}\",")
            out("    {o.with.size}, argcv{auto_count}, params, 0);")
        } else {
            out("  Object call{auto_count} = callmethod(self, \"{evl}\",")
            out("    {o.with.size}, argcv{auto_count}, arams);")
        }
    }
    out("  gc_frame_end(callframe{myc});")
    o.register := "call" ++ auto_count
    auto_count := auto_count + 1
}
method compileoctets(o) {
    var escval := ""
    var l := length(o.value) / 2
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
method compileimport(o) {
    out("// Import of " ++ o.value.value)
    var con
    var nm := escapeident(o.value.value)
    var fn := escapestring2(o.value.value)
    var modg := "module_" ++ nm
    out("  if ({modg} == NULL)")
    if (staticmodules.contains(nm)) then {
        out("    {modg} = {modg}_init();")
    } else {
        out("    {modg} = dlmodule(\"{fn}\");")
    }
    out("  Object *var_{nm} = alloc_var();")
    out("  *var_{nm} = {modg};")
    modules.push(nm)
    globals.push("Object {modg}_init();")
    globals.push("Object {modg};")
    auto_count := auto_count + 1
    o.register := "none"
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
    if (linenum /= o.line) then {
        linenum := o.line
        out("// Begin line " ++ linenum)
        out("  setline({linenum});")
        out("  setmodule(modulename);")
    }
    if (o.kind == "num") then {
        compilenum(o)
    }
    var l := ""
    if (o.kind == "string") then {
        l := length(o.value)
        l := l + 1
        o.value := escapestring2(o.value)
        out("  if (strlit{auto_count} == NULL) \{")
        out("    strlit{auto_count} = alloc_String(\"{o.value}\");")
        out("    gc_root(strlit{auto_count});")
        out("  \}")
        globals.push("static Object strlit{auto_count};")
        o.register := "strlit" ++ auto_count
        auto_count := auto_count + 1
    }
    if (o.kind == "index") then {
        compileindex(o)
    }
    if (o.kind == "octets") then {
        compileoctets(o)
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
        & ((o.value == "true") | (o.value == "false"))) then {
        var val := 0
        if (o.value == "true") then {
            val := 1
        }
        out("  Object bool" ++ auto_count ++ " = alloc_Boolean({val});")
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
        compilemethod(o, "self", topLevelMethodPos)
        topLevelMethodPos := topLevelMethodPos + 1
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
    if (o.kind == "matchcase") then {
        compilematchcase(o)
    }
    if (o.kind == "class") then {
        compileclass(o)
    }
    if (o.kind == "object") then {
        compileobject(o, "self")
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
        if (o.value.value == "print") then {
            var args := []
            for (o.with[1]) do { prm ->
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
        } elseif ((o.value.kind == "member") &&
                { (o.value.in.kind == "identifier")
                    & (o.value.in.value == "self")
                    & (o.value.value == "length")}) then {
            tmp := compilenode(o.with[1].first)
            out("  Object call" ++ auto_count ++ " = gracelib_length({tmp});")
            o.register := "call" ++ auto_count
            auto_count := auto_count + 1
        } elseif ((o.value.kind == "identifier")
                & (o.value.value == "length")) then {
            if (o.with[1].size == 0) then {
                out("; PP FOLLOWS")
                out(o.pretty(0))
                tmp := "null"
            } else {
                tmp := compilenode(o.with[1].first)
            }
            out("  Object call" ++ auto_count ++ " = gracelib_length({tmp});")
            o.register := "call" ++ auto_count
            auto_count := auto_count + 1
        } elseif ((o.value.kind == "member") &&
                { (o.value.in.kind == "identifier")
                    & (o.value.in.value == "self")
                    & (o.value.value == "escapestring")}) then {
            tmp := o.with[1].first
            tmp := ast.astmember("_escape", tmp)
            tmp := ast.astcall(tmp, [[]])
            o.register := compilenode(tmp)
        } elseif ((o.value.kind == "identifier")
                & (o.value.value == "escapestring")) then {
            tmp := o.with[1].first
            tmp := ast.astmember("_escape", tmp)
            tmp := ast.astcall(tmp, [[]])
            o.register := compilenode(tmp)
        } else {
            compilecall(o, false)
        }
    }
    if (o.kind == "op") then {
        compileop(o)
    }
    compilationDepth := compilationDepth - 1
    out("// compilenode returning " ++ o.register)
    o.register
}
method spawnSubprocess(subprocesses, id, cmd) {
    if (subprocesses.size < util.jobs) then {
        return subprocesses.push([id, io.spawn("bash", "-c", cmd)])
    }
    var alive := 0
    var firstAlive := false
    for (subprocesses) do {spinfo->
        def sp = spinfo[2]
        if (!sp.terminated) then {
            if (false == firstAlive) then {
                firstAlive := spinfo
            }
            alive := alive + 1
        }
    }
    if (alive >= util.jobs) then {
        firstAlive[2].wait
    }
    subprocesses.push([id, io.spawn("bash", "-c", cmd)])
}
method compile(vl, of, mn, rm, bt) {
    var argv := sys.argv
    var cmd
    values := vl
    var nummethods := 2
    for (values) do { v->
        if (v.kind == "vardec") then {
            nummethods := nummethods + 2
        } elseif (v.kind == "method") then {
            nummethods := nummethods + 1
        } elseif (v.kind == "defdec") then {
            nummethods := nummethods + 1
        } elseif (v.kind == "class") then {
            nummethods := nummethods + 1
        }
    }
    outfile := of
    modname := mn
    escmodname := escapeident(modname)
    runmode := rm
    buildtype := bt
    var linkfiles := []
    var ext := false
    if (runmode == "make") then {
        log_verbose("checking imports.")
        def subprocesses = []
        for (values) do { v ->
            if (v.kind == "import") then {
                var nm := v.value.value
                var exists := false
                if (io.exists("{sys.execPath}/{nm}.gso") &&
                    {!util.extensions.contains("Static")}) then {
                    exists := true
                } elseif (io.exists(nm ++ ".gso") &&
                    {!util.extensions.contains("Static")}) then {
                    exists := true
                } elseif(nm == "StandardPrelude") then {
                    exists := true
                    staticmodules.push(nm)
                } elseif (io.exists("{sys.execPath}/{nm}.gcn") && {
                        !io.exists("{nm}.grace")
                    }) then {
                    // Find static modules like unicode alongside compiler,
                    // but not modules compiled from Grace code here.
                    exists := true
                    linkfiles.push("{sys.execPath}/{nm}.gcn")
                    staticmodules.push(nm)
                } elseif (io.exists(nm ++ ".gcn")) then {
                    if (io.newer(nm ++ ".gcn", nm ++ ".grace")) then {
                        exists := true
                        linkfiles.push(nm ++ ".gcn")
                        staticmodules.push(nm)
                    }
                }
                if (exists.not) then {
                    if (io.exists(nm ++ ".gc")) then {
                        ext := ".gc"
                    }
                    if (io.exists(nm ++ ".grace")) then {
                        ext := ".grace"
                    }
                    if (ext /= false) then {
                        cmd := argv.first ++ " --target c --make " ++ nm ++ ext
                        cmd := cmd ++ " --gracelib \"{util.gracelibPath}\""
                        if (util.verbosity > 30) then {
                            cmd := cmd ++ " --verbose"
                        }
                        if (false != util.vtag) then {
                            cmd := cmd ++ " --vtag " ++ util.vtag
                        }
                        cmd := cmd ++ " --noexec --no-recurse -XNoMain"
                        if (util.recurse) then {
                            spawnSubprocess(subprocesses, nm, cmd)
                        }
                        exists := true
                        linkfiles.push(nm ++ ".gcn")
                        staticmodules.push(nm)
                        ext := false
                    }
                }
                if ((nm == "sys") | (nm == "io")) then {
                    exists := true
                    staticmodules.push(nm)
                }
                if (exists.not) then {
                    util.syntax_error("failed finding import of " ++ nm ++ ".")
                }
            }
        }
        def imperrors = []
        for (subprocesses) do { tt->
            def nm = tt[1]
            def p = tt[2]
            if (!p.success) then {
                imperrors.push(nm)
            }
        }
        if (imperrors.size > 0) then {
            util.syntax_error("failed processing import of " ++ imperrors ++".")
        }
    }
    outprint("#include \"{util.gracelibPath}/gracelib.h\"")
    outprint("#include <stdlib.h>")
    outprint("#ifndef __CYGWIN__")
    outprint("#pragma weak main")
    outprint("#endif")
    outprint("static char compilerRevision[] = \"{buildinfo.gitrevision}\";")
    outprint("static Object undefined;")
    outprint("extern Object none;")
    outprint("extern Object _prelude;")
    outprint("extern Object String;")
    outprint("extern Object Number;")
    outprint("extern Object Boolean;")
    outprint("extern Object Dynamic;")
    outprint("extern Object Block;")
    outprint("extern Object None;")
    outprint("extern Object Type;")
    outprint("static Object type_String;")
    outprint("static Object type_Number;")
    outprint("static Object type_Boolean;")
    outprint("static Object type_Block;")
    outprint("static Object type_None;")
    outprint("static Object type_Void;")
    outprint("static Object argv;")
    outprint("static Object emptyclosure;")
    outprint("static Object prelude;")
    outprint("static const char modulename[] = \"{modname}\";");
    outprint("Object module_StandardPrelude_init();");
    topLevelTypes.put("String", true)
    topLevelTypes.put("Number", true)
    topLevelTypes.put("Boolean", true)
    topLevelTypes.put("Void", true)
    topLevelTypes.put("None", true)
    topLevelTypes.put("Block", true)
    for (values) do {v->
        if (v.kind == "type") then {
            def typeid = escapeident(v.value)
            outprint("static Object type_{typeid};")
            topLevelTypes.put(typeid, true)
        }
    }
    out("Object module_{escmodname}_init() \{")
    out("  int flags = 0;")
    out("  int frame = gc_frame_new();")
    out("  Object self = alloc_obj2({nummethods}, {nummethods});")
    out("  gc_root(self);")
    if (util.extensions.contains("NativePrelude")) then {
        out("  prelude = grace_prelude();")
        out("  adddatum2(self, grace_prelude(), 0);")
    } else {
        out("  prelude = module_StandardPrelude_init();")
        out("  adddatum2(self, prelude, 0);")
    }
    out("  addmethod2(self, \"outer\", &grace_userobj_outer);")
    var modn := "Module<{modname}>"
    out("  setclassname(self, \"{modn}\");")
    out("  Object *var_HashMap = alloc_var();")
    out("  *var_HashMap = alloc_HashMapClassObject();")
    out("  Object *var_MatchFailed = alloc_var();")
    out("  *var_MatchFailed = alloc_MatchFailed();")
    out("  Object *var_noSuchValue = alloc_var();")
    out("  *var_noSuchValue = none;")
    out("  Object *var_void = alloc_var();")
    out("  *var_void = none;")
    out("  Object *var_nothing = alloc_var();")
    out("  *var_nothing = none;")
    out("  Object *var_String = alloc_var();")
    out("  *var_String = String;")
    out("  type_String = String;")
    out("  Object *var_Block = alloc_var();")
    out("  *var_Block = Block;")
    out("  type_Block = Block;")
    out("  Object *var_Void = alloc_var();")
    out("  *var_Void = None;")
    out("  type_Void = None;")
    out("  Object *var_None = alloc_var();")
    out("  *var_None = None;")
    out("  type_None = None;")
    out("  Object *var_Number = alloc_var();")
    out("  *var_Number = Number;")
    out("  type_Number = Number;")
    out("  Object *var_Boolean = alloc_var();")
    out("  *var_Boolean = Boolean;")
    out("  type_Boolean = Boolean;")
    out("  Object *var_Dynamic = alloc_var();")
    out("  *var_Dynamic = Dynamic;")
    out("  Object *var_Type = alloc_var();")
    out("  *var_Type = Type;")
    out("  Object *var__prelude = alloc_var();")
    out("  *var__prelude = grace_prelude();")
    out("  gc_root(*var_MatchFailed);")
    out("  emptyclosure = createclosure(0, \"empty\");")
    out("  gc_root(emptyclosure);")
    out("struct StackFrameObject *stackframe = alloc_StackFrame({nummethods}, ")
    out("  NULL);")
    out("gc_root((Object)stackframe);")
    out("Object *selfslot = &(stackframe->slots[0]);")
    out("*selfslot = self;")
    var tmpo := output
    output := []
    definebindings(values, 1)
    for (values) do { o ->
        if (o.kind == "inherits") then {
            def superobj = compilenode(o.value)
            out("  setsuperobj(self, {superobj});")
        }
        compilenode(o)
        if (o.kind == "type") then {
            def typeid = escapeident(o.value)
            out("type_{typeid} = *var_{typeid};")
        }
    }
    for (globals) do {e->
        outprint(e)
    }
    var tmpo2 := output
    output := tmpo
    out("  Object params[{paramsUsed}];")
    for (tmpo2) do { l->
        out(l)
    }
    paramsUsed := 1
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
        if (!util.extensions.contains("NativePrelude")) then {
            //out("  prelude = module_StandardPrelude_init();")
        }
        out("  gracelib_argv(argv);")
        out("  Object params[1];")
        out("  undefined = alloc_Undefined();")
        out("  none = alloc_none();")
        out("  Object tmp_argv = alloc_List();")
        out("  gc_root(tmp_argv);")
        out("  int argcv_push[] = \{1\};")
        out("  int i; for (i=0; i<argc; i++) \{")
        out("    params[0] = alloc_String(argv[i]);")
        out("    callmethod(tmp_argv, \"push\", 1, argcv_push, params);")
        out("  \}")
        out("  module_sys_init_argv(tmp_argv);")
        out("  module_{escmodname}_init();")
        out("  gracelib_stats();")
        out("  return 0;")
        out("}")
    }
    log_verbose("writing file.")
    for (topOutput) do { x ->
        outprint(x)
    }
    for (output) do { x ->
        outprint(x)
    }

    if (runmode == "make") then {
        log_verbose("compiling C code.")
        outfile.close
        cmd := "gcc -g -I\"{sys.execPath}\" -o {modname}.gcn -c {modname}.c"
        if ((io.system(cmd)).not) then {
            io.error.write("Fatal error: Failed C compilation of {modname}.\n")
            sys.exit(1)
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
            cmd := "gcc -g -o {modname} -fPIC {exportDynamicBit} "
                ++ "{modname}.gcn "
                ++ util.gracelibPath ++ "/gracelib.o "
                ++ "-lm {dlbit}"
            for (linkfiles) do { fn ->
                cmd := cmd ++ " " ++ fn
            }
            if ((io.system(cmd)).not) then {
                io.error.write("Failed linking")
                sys.exit(1)
            }
        }
        log_verbose("done.")
        if (buildtype == "run") then {
            cmd := "./" ++ modname
            if (!io.system(cmd)) then {
                io.error.write("minigrace: Program exited with error: "
                    ++ modname ++ "\n")
                sys.exit(1)
            }
        }
    }
}
