import io
import ast
import util
import subtype

def preludeObj = HashMap.new
def moduleScope = HashMap.new
moduleScope.put("___is_object", true)
preludeObj.put("___is_prelude", true)
var scopes := [HashMap.new, preludeObj, moduleScope]
var selftypes := [ast.asttype("module", [])]
var auto_count := 0

def DynamicIdentifier = ast.astidentifier("Dynamic", false)
def TopOther = ast.astidentifier("other", ast.astidentifier("Dynamic", false))
def StringIdentifier = ast.astidentifier("String", false)
def StringOther = ast.astidentifier("other", StringIdentifier)
def BooleanIdentifier = ast.astidentifier("Boolean", false)
def BooleanOther = ast.astidentifier("other", BooleanIdentifier)
def NumberIdentifier = ast.astidentifier("Number", false)
def NumberOther = ast.astidentifier("other", NumberIdentifier)
def ListIdentifier = ast.astidentifier("List", false)
def ListOther = ast.astidentifier("other", ListIdentifier)
def DynamicType = ast.asttype("Dynamic", [])
def NumberType = ast.asttype("Number", [
    ast.astmethodtype("+", [ast.SignaturePart.new("+", [NumberOther])], NumberIdentifier),
    ast.astmethodtype("*", [ast.SignaturePart.new("*", [NumberOther])], NumberIdentifier),
    ast.astmethodtype("-", [ast.SignaturePart.new("-", [NumberOther])], NumberIdentifier),
    ast.astmethodtype("/", [ast.SignaturePart.new("/", [NumberOther])], NumberIdentifier),
    ast.astmethodtype("%", [ast.SignaturePart.new("%", [NumberOther])], NumberIdentifier),
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("/=", [ast.SignaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("++", [ast.SignaturePart.new("++", [TopOther])], DynamicIdentifier),
    ast.astmethodtype("<", [ast.SignaturePart.new("<", [NumberOther])], BooleanIdentifier),
    ast.astmethodtype("<=", [ast.SignaturePart.new("<=", [NumberOther])], BooleanIdentifier),
    ast.astmethodtype(">", [ast.SignaturePart.new(">", [NumberOther])], BooleanIdentifier),
    ast.astmethodtype(">=", [ast.SignaturePart.new(">=", [NumberOther])], BooleanIdentifier),
    ast.astmethodtype("..", [ast.SignaturePart.new("..", [NumberOther])], DynamicIdentifier),
    ast.astmethodtype("asString", [ast.SignaturePart.new("asString")], StringIdentifier),
    ast.astmethodtype("prefix-", [ast.SignaturePart.new("prefix-")], NumberIdentifier),
    ast.astmethodtype("inBase", [ast.SignaturePart.new("inBase", [NumberOther])], StringIdentifier),
    ast.astmethodtype("truncate", [ast.SignaturePart.new("truncate")], NumberIdentifier),
    ast.astmethodtype("match", [ast.SignaturePart.new("match", [TopOther])], DynamicIdentifier)
])
def StringType = ast.asttype("String", [
    ast.astmethodtype("++", [ast.SignaturePart.new("++", [TopOther])], StringIdentifier),
    ast.astmethodtype("size", [ast.SignaturePart.new("size")], NumberIdentifier),
    ast.astmethodtype("ord", [ast.SignaturePart.new("ord")], NumberIdentifier),
    ast.astmethodtype("at", [ast.SignaturePart.new("at", [NumberOther])], StringIdentifier),
    ast.astmethodtype("[]", [ast.SignaturePart.new("[]", [NumberOther])], StringIdentifier),
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("/=", [ast.SignaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("iter", [ast.SignaturePart.new("iter")], DynamicIdentifier),
    ast.astmethodtype("substringFrom()to",
        [ast.SignaturePart.new("substringFrom", [NumberOther]),
        ast.SignaturePart.new("to", [NumberOther])], StringIdentifier),
    ast.astmethodtype("replace()with", [ast.SignaturePart.new("replace", [StringOther]),
        ast.SignaturePart.new("with", [StringOther])], StringIdentifier),
    ast.astmethodtype("hashcode", [ast.SignaturePart.new("hashcode")], NumberIdentifier),
    ast.astmethodtype("indices", [ast.SignaturePart.new("indices")], ListIdentifier),
    ast.astmethodtype("asString", [ast.SignaturePart.new("asString")], StringIdentifier),
    ast.astmethodtype("asNumber", [ast.SignaturePart.new("asNumber")], NumberIdentifier),
    ast.astmethodtype("match", [ast.SignaturePart.new("match", [TopOther])], DynamicIdentifier)
])
def BooleanType = ast.asttype("Boolean", [
    ast.astmethodtype("++", [ast.SignaturePart.new("++", [TopOther])], StringIdentifier),
    ast.astmethodtype("&", [ast.SignaturePart.new("&", [BooleanOther])], BooleanIdentifier),
    ast.astmethodtype("|", [ast.SignaturePart.new("|", [BooleanOther])], BooleanIdentifier),
    ast.astmethodtype("&&", [ast.SignaturePart.new("&&", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("||", [ast.SignaturePart.new("||", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("/=", [ast.SignaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("prefix!", [ast.SignaturePart.new("prefix!")], BooleanIdentifier),
    ast.astmethodtype("not", [ast.SignaturePart.new("not")], BooleanIdentifier),
    ast.astmethodtype("ifTrue", [ast.SignaturePart.new("ifTrue", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("asString", [ast.SignaturePart.new("asString")], StringIdentifier),
    ast.astmethodtype("match", [ast.SignaturePart.new("match", [TopOther])], DynamicIdentifier)
])
def ListType = ast.asttype("List", [
    ast.astmethodtype("size", [ast.SignaturePart.new("size", [])], NumberIdentifier),
    ast.astmethodtype("at", [ast.SignaturePart.new("at", [NumberOther])], TopOther),
    ast.astmethodtype("[]", [ast.SignaturePart.new("[]", [NumberOther])], TopOther),
    ast.astmethodtype("[]:=", [ast.SignaturePart.new("[]:=", [NumberOther, TopOther])], TopOther),
    ast.astmethodtype("at()put", [ast.SignaturePart.new("at", [NumberOther]),
        ast.SignaturePart.new("put", [TopOther])], TopOther),
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("/=", [ast.SignaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("contains", [ast.SignaturePart.new("contains", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("iter", [ast.SignaturePart.new("iter")], DynamicIdentifier),
    ast.astmethodtype("push", [ast.SignaturePart.new("push", [TopOther])], TopOther),
    ast.astmethodtype("pop", [ast.SignaturePart.new("pop")], TopOther),
    ast.astmethodtype("first", [ast.SignaturePart.new("first")], NumberIdentifier),
    ast.astmethodtype("last", [ast.SignaturePart.new("last")], NumberIdentifier),
    ast.astmethodtype("prepended", [ast.SignaturePart.new("prepended", [TopOther])], ListIdentifier),
    ast.astmethodtype("indices", [ast.SignaturePart.new("indices")], ListIdentifier),
    ast.astmethodtype("asString", [ast.SignaturePart.new("asString")], StringIdentifier)
])
def VoidType = ast.asttype("Void", [
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier)
])
def NothingType = ast.asttype("Nothing", [
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier)
])
def NoneType = ast.asttype("None", [
    ast.astmethodtype("==", [TopOther], BooleanIdentifier),
    ast.astmethodtype("!=", [TopOther], BooleanIdentifier)
])
def BlockType = ast.asttype("Block", [
    ast.astmethodtype("==", [ast.SignaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("!=", [ast.SignaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.astmethodtype("apply", [ast.SignaturePart.new("apply")], TopOther),
    ast.astmethodtype("match", [ast.SignaturePart.new("match")], TopOther)
])
def outerMethod = ast.astmethodtype("outer", [], DynamicType)
var currentReturnType := false

class Binding { kind' ->
    var kind := kind'
    var dtype := DynamicType
    var value := false
}

method haveBinding(name) {
    var ret := false
    for (scopes) do { sc ->
        if (sc.contains(name)) then {
            ret := true
        }
    }
    ret
}
method findName(name) {
    var ret := false
    var scc := scopes
    for (scopes) do { sc ->
        if (sc.contains(name)) then {
            ret := sc.get(name)
        }
    }
    if (ret == false) then {
        ret := Binding.new("undef")
    }
    ret
}
method findDeepMethod(name) {
    var mem := ast.astidentifier("self", false)
    var lv := scopes.indices.last
    var min := scopes.indices.first
    while {scopes.at(lv).contains(name).not} do {
        if (scopes.at(lv).contains("___is_object")) then {
            mem := ast.astmember("outer", mem)
        }
        if (scopes.at(lv).contains("___is_class")) then {
            mem := ast.astmember("outer", mem)
        }
        lv := lv - 1
        if (lv == min) then {
            return ast.astidentifier(name, false)
        }
    }
    if (scopes.at(lv).contains("___is_prelude")) then {
        ast.astmember(name, ast.astidentifier("prelude", false))
    } else {
        ast.astmember(name, mem)
    }
}

method pushScope {
    var scope := HashMap.new
    scopes.push(scope)
}

method popScope {
    scopes.pop
}

method conformsType(b)to(a) {
    if (util.extensions.contains("IgnoreTypes")) then {
        return DynamicType
    }
    if ((b == false) | (a == false)) then {
        return true
    }
    if (a.value == "Dynamic") then {
        return true
    }
    if (b.value == "Dynamic") then {
        return true
    }
    if (b.unionTypes.size > 0) then {
        for (b.unionTypes) do {ut->
            if (conformsType(findType(ut))to(a).not) then {
                return false
            }
        }
        return true
    }
    if (a.unionTypes.size > 0) then {
        for (a.unionTypes) do {ut->
            if (conformsType(b)to(findType(ut))) then {
                return true
            }
        }
        return false
    }
    return subtype.conformsType(b)to(a)
    var foundall := true
    for (a.methods) do {m1 ->
        def rtype1 = findType(m1.rtype)
        var found := false
        for (b.methods) do {m2->
            if (m2.value == m1.value) then {
                def rtype2 = findType(m2.rtype)
                found := true
            }
        }
        if (!found) then {
            return false
        }
    }
    return true
}

method expressionType(expr) {
    if (expr.kind == "identifier") then {
        if ((expr.value == "true") | (expr.value == "false")) then {
            return BooleanType
        }
        if (expr.dtype /= false) then {
            if (expr.dtype.kind == "type") then {
                if (expr.dtype.generics.size > 0) then {
                    var gitype := findType(expr.dtype)
                    for (expr.dtype.generics) do {gt->
                        gitype := betaReduceType(gitype, gt, DynamicType)
                    }
                    return gitype
                }
            }
        }
        if (expr.value == "self") then {
            return selftypes.last
        }
        return expr.dtype
    }
    if (expr.kind == "num") then {
        return NumberType
    }
    if (expr.kind == "string") then {
        return StringType
    }
    if (expr.kind == "array") then {
        return ListType
    }
    if (expr.kind == "block") then {
        return BlockType
    }
    if (expr.kind == "op") then {
        def opname = expr.value
        def opreceiver = expr.left
        def opargument = expr.right
        def opreceivertype = expressionType(expr.left)
        def opargumenttype = expressionType(expr.right)
        if (opreceivertype == false) then {
            return DynamicType
        }
        if (opreceivertype.value == "Dynamic") then {
            return DynamicType
        }
        var opfound := false
        var opmeth := false
        for (opreceivertype.methods) do {m->
            if (m.value == opname) then {
                opfound := true
                opmeth := m
            }
        }
        if (opfound.not) then {
            util.type_error("no such operator '{opname}' in {opreceivertype.value}")
        }
        def opparamtypeid = opmeth.signature.first.params.first.dtype
        def opparamtypebd = if (false != opparamtypeid)
            then {findName(opparamtypeid.value)} else {
                object {def value=object {def value="Dynamic"}}
            }
        if (conformsType(opargumenttype)to(opparamtypebd.value).not) then {
            util.type_error("passed argument of type "
                ++ "{opargumenttype.value} to parameter of type "
                ++ opparamtypebd.value.value)
        }
        def opreturntypeid = opmeth.rtype
        def opreturntypebd = findName(opreturntypeid.value)
        return opreturntypebd.value
    }
    if (expr.kind == "member") then {
        def memname = expr.value
        def memin = expr.in
        def memreceivertype = expressionType(memin)
        if (memreceivertype == false) then {
            return DynamicType
        }
        if (memreceivertype.value == "Dynamic") then {
            return DynamicType
        }
        var memfound := false
        var memmeth := false
        for (memreceivertype.methods) do {m->
            if (m.value == memname) then {
                memfound := true
                memmeth := m
            }
        }
        if (memfound.not) then {
            util.type_error("no such method '{memname}' in {memreceivertype.value}")
        }
        if (memmeth.signature.first.params.size /= 0) then {
            util.type_error("method '{memname}' in {memreceivertype.value} "
                ++ "requires {memmeth.signature.first.params.size} arguments, not 0")
        }
        def memreturntypeid = memmeth.rtype
        if (memreturntypeid.kind == "type") then {
            return memreturntypeid
        }
        def memreturntypebd = findName(memreturntypeid.value)
        return memreturntypebd.value
    }
    if (expr.kind == "call") then {
        def callmem = expr.value
        if (callmem.kind /= "member") then {
            return DynamicType
        }
        def callname = callmem.value
        def callin = callmem.in
        def callreceivertype = expressionType(callin)
        if (callreceivertype == false) then {
            return DynamicType
        }
        if (callreceivertype.value == "Dynamic") then {
            return DynamicType
        }
        var callfound := false
        var callmeth := false
        for (callreceivertype.methods) do {m->
            if (m.value == callname) then {
                callfound := true
                callmeth := m
            }
        }
        if (callfound.not) then {
            util.type_error("no such method '{callname}' in {callreceivertype.value}")
        }
        for (callmeth.signature.indices) do { partnr ->
            var part := callmeth.signature[partnr]
            if (part.params.size > expr.with[partnr].size) then {
                util.type_error("method '{callname}' in {callreceivertype.value} "
                    ++ "requires {part.params.size} arguments for part {partnr}, not "
                    ++ "{expr.with[partnr].size}")
            }
        }
        def callsig = callmeth.signature
        def callparts = expr.with
        for (callparts.indices) do { partnr ->
            def callparams = callsig[partnr].params
            def callargs = callparts[partnr]
            if (callparams.size > 0) then {
                for (callparams.indices) do { i ->
                    def arg = callargs.at(i)
                    def prm = callparams.at(i)
                    def argtp = expressionType(arg)
                    def prmtypeid = prm.dtype
                    def prmtype = findType(prmtypeid)
                    if (conformsType(argtp)to(prmtype).not) then {
                        util.type_error("argument {i} of '{callname}' must be of "
                            ++ "type {prmtype.value}, given {argtp.value}")
                    }
                }
            }
        }
        def callreturntypeid = callmeth.rtype
        if (callreturntypeid.kind == "type") then {
            return callreturntypeid
        }
        def callreturntypebd = findName(callreturntypeid.value)
        return callreturntypebd.value
    }
    if (expr.kind == "object") then {
        def objectmeths = []
        def objecttp = ast.asttype("<Object_{expr.line}>", objectmeths)
        if (expr.superclass /= false) then {
            def supertype = expressionType(expr.superclass)
            for (supertype.methods) do {e->
                objectmeths.push(e)
            }
        }
        for (expr.value) do {e->
            if (e.kind == "defdec") then {
                objectmeths.push(ast.astmethodtype(e.name.value,
                    [ast.SignaturePart.new(e.name.value)], findType(e.dtype)))
            } elseif (e.kind == "method") then {
                objectmeths.push(ast.astmethodtype(e.value.value, e.signature,
                    findType(e.dtype)))
            } elseif (e.kind == "vardec") then {
                def vtype = findType(e.dtype)
                objectmeths.push(ast.astmethodtype(e.name.value,
                    [ast.SignaturePart.new(e.name.value)], vtype))
                objectmeths.push(ast.astmethodtype(e.name.value ++ ":=",
                    [ast.SignaturePart.new(e.name.value ++ ":=",
                        [ast.astidentifier("_", vtype)])], false))
            } elseif (e.kind == "inherits") then {
                def stype = expressionType(resolveIdentifiers(e.value))
                for (stype.methods) do { m->
                    objectmeths.push(m)
                }
            }
        }
        subtype.addType(objecttp)
        expr.otype := objecttp
        return objecttp
    }
    if (expr.kind == "generic") then {
        var gtype
        var gname
        if (expr.value.kind == "type") then {
            gname := expr.value.value
            gtype := expr.value
        } elseif (expr.value.kind == "identifier") then {
            gname := expr.value.value
            def gidb = findName(gname)
            gtype := findType(gidb.dtype)
        } else {
            gname := expr.value.value
            gtype := expressionType(expr.value)
        }
        def gtb = gtype
        for (expr.params.indices) do {i->
            def tv = gtb.generics.at(i)
            def ct = findType(expr.params.at(i))
            gtype := betaReduceType(gtype, tv, ct)
        }
        def nt = ast.asttype(gname, gtype.methods)
        nt.generics := expr.params
        subtype.addType(nt)
        return nt
    }
    return DynamicType
}

method checkShadowing(name, kd) {
    if (haveBinding(name)) then {
        var namebinding := findName(name)
        if ((kd == "method") & ((namebinding.kind == "var") |
            (namebinding.kind == "method"))) then {
            // Pass; this is allowable.
        } elseif (util.extensions.contains("ShadowingWarnOnly")) then {
            util.warning("name {name} shadows lexically enclosing name")
        } elseif (util.extensions.contains("IgnoreShadowing")) then {
            // Pass
        } else {
            util.syntax_error("name {name} shadows lexically enclosing name")
        }
    }
}
method bindName(name, binding) {
    checkShadowing(name, binding.kind)
    scopes.last.put(name, binding)
}
method bindIdentifier(ident) {
    if (ident.kind == "call") then {
        util.syntax_error("name shadows method")
    }
    if (scopes.last.contains("___is_object")) then {
        checkShadowing(ident.value, "method")
        scopes.last.put(ident.value, Binding.new("method"))
    } else {
        checkShadowing(ident.value, "var")
        var tmpb := Binding.new("var")
        var tdtype := DynamicType
        if (ident.dtype == false) then {
            // pass
        } elseif (ident.dtype.kind == "identifier") then {
            def tdb = findName(ident.dtype.value)
            tdtype := tdb.value
        } elseif (ident.dtype.kind == "generic") then {
            tdtype := findType(resolveIdentifiers(ident.dtype))
        } elseif (ident.dtype.kind == "type") then {
            tdtype := ident.dtype
        }
        tmpb.dtype := tdtype
        scopes.last.put(ident.value, tmpb)
    }
}

method betaReduceType(tp, typevar, concrete) {
    var methods := tp.methods
    var tmprt
    var newmeth := []
    var changed := false
    for (methods) do {m->
        tmprt := m.rtype
        if (tmprt == false) then {
        } elseif (tmprt.value == typevar.value) then {
            tmprt := concrete
            changed := true
        } elseif (tmprt.value.substringFrom(1)to(11) == "InstanceOf<") then {
            def ortype = findType(tmprt)
            def tryrrep = betaReduceType(ortype, typevar, concrete)
            if (ortype /= tryrrep) then {
                tmprt := tryrrep
                changed := true
            }
        }
        var tmpsig := []
        for (m.signature) do { part ->
            var tmppart := ast.SignaturePart.new(part.name)
            var tmpparams := []
            for (part.params) do {pp->
                if (pp.dtype == false) then {
                    tmpparams.push(pp)
                } elseif (pp.dtype.value == typevar.value) then {
                    tmpparams.push(ast.astidentifier(pp.value, concrete))
                    changed := true
                } elseif (pp.dtype.value.at(1) == "<") then {
                    def otype = findType(pp.dtype)
                    def tryrep = betaReduceType(otype, typevar, concrete)
                    if (otype == tryrep) then {
                        tmpparams.push(pp)
                    } else {
                        def trynamed = ast.asttype(tryrep.value
                            ++ "<{typevar.value}={concrete.value}>",
                            tryrep.methods)
                        tmpparams.push(ast.astidentifier(pp.value, trynamed))
                        changed := true
                    }
                } else {
                    tmpparams.push(pp)
                }
            }
            tmppart.params := tmpparams
            tmppart.vararg := part.vararg
            tmpsig.push(tmppart)
        }
        newmeth.push(ast.astmethodtype(m.value, tmpsig, tmprt))
    }
    if (changed) then {
        var tmp
        if (tp.value.substringFrom(1)to(11) == "InstanceOf<") then {
            tmp := ast.asttype("{tp.value}<{typevar.value}={concrete.value}>",
                newmeth)
        } else {
            tmp := ast.asttype(tp.value, newmeth)
        }
        tmp := ast.asttype("{tp.value}<{typevar.value}={concrete.value}>",
            newmeth)
        subtype.addType(tmp)
        return tmp
    } else {
        return tp
    }
}
method findType(tp) {
    if (tp == false) then {
        return DynamicType
    }
    if (tp.kind == "type") then {
        return tp
    }
    if (tp.kind == "identifier") then {
        def tpnm = tp.value
        def tpbd = findName(tpnm)
        var gtp := tpbd.value
        if (gtp /= false) then {
            if (gtp.generics.size > 0) then {
                def gdyns = []
                for (gtp.generics) do {gdt->
                    gtp := betaReduceType(gtp, gdt, DynamicType)
                    gdyns.push(gdt)
                }
            }
        }
        return gtp
        return tpbd.value
    }
    if (tp.kind == "generic") then {
        def gtnm = tp.value.value
        def gtbd = findName(gtnm)
        def gtg = gtbd.value
        var gnm := gtnm ++ "<"
        if (gtg == false) then {
            util.type_error("could not find base type to instantiate: {gtnm}")
        }
        var methods := gtg.methods
        var tmprt
        var tmpparams
        var tmptp := gtg
        def gnms = []
        for (tp.params.indices) do {i->
            def tv = gtg.generics.at(i)
            def ct = findType(tp.params.at(i))
            gnms.push(ct.value)
            tmptp := betaReduceType(tmptp, tv, ct)
        }
        gnm := gnm ++ util.join(",", gnms) ++ ">"
        def nt = ast.asttype(gnm, tmptp.methods)
        subtype.addType(nt)
        subtype.addType(gtg)
        return nt
    }
    return DynamicType
}
method resolveIdentifier(node) {
    if (node.kind /= "identifier") then {
        return node
    }
    var nm := node.value
    if (haveBinding(nm).not) then {
        util.syntax_error("use of undefined identifier {nm}")
    }
    if (nm == "outer") then {
        return ast.astmember("outer", ast.astidentifier("self", false))
    }
    if (nm == "self") then {
        node.dtype := selftypes.last
        return node
    }
    var b := findName(nm)
    if (b.kind == "var") then {
        def vtp = findType(b.dtype)
        if (node.dtype /= vtp) then {
            node.dtype := vtp
        }
        return node
    } elseif (b.kind == "def") then {
        def dtp = findType(b.dtype)
        if (node.dtype /= dtp) then {
            node.dtype := dtp
        }
        return node
    } elseif (b.kind == "method") then {
        return ast.astcall(findDeepMethod(nm), [[]])
    }
    node
}
method rewritematchblockterm2(arg) {
    if (arg.kind == "num") then {
        return [arg, []]
    }
    if (arg.kind == "string") then {
        return [arg, []]
    }
    if (arg.kind == "boolean") then {
        return [arg, []]
    }
    if (arg.kind == "call") then {
        def bindings = []
        def subpats = []
        for (arg.with) do { part ->
            for (part) do { a ->
                def tmp = rewritematchblockterm2(a)
                subpats.push(tmp[1])
                for (tmp[2]) do {b->
                    bindings.push(b)
                }
            }
        }
        def callpat = ast.astcall(
            ast.astmember(
                "new",
                ast.astmember("MatchAndDestructuringPattern",
                    ast.astidentifier("prelude", false)
                )
            ),
            [[arg.value, ast.astarray(subpats)]]
        )
        return [callpat, bindings]
    }
    if (arg.kind == "identifier") then {
        def varpat = ast.astcall(
            ast.astmember(
                "new",
                ast.astmember("VariablePattern",
                    ast.astidentifier("prelude", false)
                )
            ),
            [[ast.aststring(arg.value)]]
        )
        if (arg.dtype != false) then {
            if (arg.dtype.kind == "identifier") then {
                return [ast.astcall(
                    ast.astmember(
                        "new",
                        ast.astmember("AndPattern",
                            ast.astidentifier("prelude", false)
                        )
                    ),
                    [[varpat, arg.dtype]]
                ), [arg]]
            }
            def tmp = rewritematchblockterm2(arg.dtype)
            def bindings = [arg]
            for (tmp[2]) do {b->
                bindings.push(b)
            }
            def bindingpat = ast.astcall(
                ast.astmember(
                    "new",
                    ast.astmember("AndPattern",
                        ast.astidentifier("prelude", false)
                    )
                ),
                [[varpat, tmp[1]]]
            )
            return [bindingpat, bindings]
        }
        return [varpat, [arg]]
    }
}
method rewritematchblock2(blk) {
    def arg = blk.params[1]
    var pattern := false
    var newparams := blk.params
    if ((arg.kind == "num") || (arg.kind == "string") ||
        (arg.kind == "boolean")) then {
        def tmp = rewritematchblockterm2(arg)
        pattern := tmp[1]
        newparams := tmp[2]
    }
    if (arg.kind == "identifier") then {
        def varpat = ast.astcall(
            ast.astmember(
                "new",
                ast.astmember("VariablePattern",
                    ast.astidentifier("prelude", false)
                )
            ),
            [[ast.aststring(arg.value)]]
        )
        if (arg.dtype != false) then {
            if (arg.dtype.kind == "identifier") then {
                pattern := ast.astcall(
                    ast.astmember("new",
                        ast.astmember("AndPattern",
                            ast.astidentifier("prelude", false)
                            )
                        ),
                    [[varpat, arg.dtype]])
            } else {
                def tmp = rewritematchblockterm2(arg.dtype)
                def bindingpat = ast.astcall(
                    ast.astmember("new",
                        ast.astmember("AndPattern",
                            ast.astidentifier("prelude", false)
                            )
                        ),
                    [[varpat, tmp[1]]]
                )
                pattern := bindingpat
                for (tmp[2]) do {p->
                    newparams.push(p)
                }
            }
            pattern := resolveIdentifiers(pattern)
        } else {
            if (blk.matchingPattern == arg) then {
                pattern := resolveIdentifiers(arg)
                newparams := []
            }
        }
    }
    def newblk = ast.astblock(newparams, blk.body)
    newblk.matchingPattern := pattern
    return newblk
}
method rewritematchblockterm(param, body) {
    if (param.kind == "identifier") then {
        bindIdentifier(param)
        if ((param.dtype == false) || {param.dtype.kind == "call"}) then {
            return [param, body]
        }
    }
    var newname := ast.astidentifier("__matchterm" ++ auto_count,
        false)
    auto_count := auto_count + 1
    bindIdentifier(newname)
    var pat := param
    var st
    if (pat.kind == "call") then {
        st := ast.astif(
            ast.astcall(
                ast.astmember(
                    "match",
                    pat.value),
                [[newname]]),
            body,
            [ast.astidentifier("MatchFailed", false)]
        )
    } elseif (pat.kind == "identifier") then {
        pat := pat.dtype
        param.dtype := false
        st := ast.astcall(ast.astidentifier("print"),
            [[ast.aststring("Recursively binding pattern matches unimplemented")]])
    } else {
        st := ast.astif(
            ast.astop("==", pat, newname),
            body,
            [ast.astidentifier("MatchFailed", false)]
        )
    }
    return [newname, [st]]
}

method rewritematchblock(o) {
    var params := o.params
    if (params.size /= 1) then {
        def skipListBody = resolveIdentifiersList(o.body)
        return ast.astblock(o.params, skipListBody)
    }
    var body := o.body
    var inbody := body
    var pat
    var tmpp
    var nparams
    var newname := ast.astidentifier("__matchvar" ++ auto_count,
        false)
    auto_count := auto_count + 1
    bindIdentifier(newname)
    var fst := params.first
    if (fst.kind == "call") then {
        pat := fst
        tmpp := fst
        params := [newname]
        nparams := []
        for (pat.with) do { part ->
            for (part.indices) do { pwi ->
                def pw = part[pwi]
                def rw2 = rewritematchblockterm(pw, inbody)
                part[pwi] := rw2[1]
                inbody := rw2[2]
            }
        }
        inbody := resolveIdentifiersList(inbody)
        body := [ast.astif(
                    ast.astcall(
                        ast.astmember(
                            "match",
                            pat.value),
                        [[newname]]),
                    [
                        ast.astcall(
                            ast.astmember("applyIndirectly",
                                ast.astblock(flatten(pat.with), inbody)
                            ),
                            [[ast.astcall(
                                ast.astmember("try", pat.value),
                                [[newname]]
                            )]])
                    ],
                    [ast.astidentifier("MatchFailed", false)]
                    )
                ]
    } elseif (fst.kind /= "identifier") then {
        auto_count := auto_count + 1
        pat := fst
        params := [newname]
        inbody := resolveIdentifiersList(inbody)
        body := [ast.astif(
                    ast.astop("==", pat, newname),
                    [
                        ast.astcall(
                            ast.astmember("apply",
                                ast.astblock([], inbody)
                            ),
                            [[]])
                    ],
                    [ast.astidentifier("MatchFailed", false)]
                    )
                ]
    } elseif (fst.dtype /= false) then {
        pat := fst.dtype
        tmpp := fst
        if (pat.kind == "call") then {
            nparams := []
            params := [newname]
            for (pat.with) do { part ->
                for (part.indices) do { pwi ->
                    def pw = part[pwi]
                    def rw2 = rewritematchblockterm(pw, inbody)
                    part[pwi] := rw2[1]
                    inbody := rw2[2]
                }
            }
            inbody := resolveIdentifiersList(inbody)
            body := [ast.astif(
                        ast.astcall(
                            ast.astmember(
                                "match",
                                pat.value),
                            [[newname]]),
                        [
                            ast.astcall(
                                ast.astmember("applyIndirectly",
                                    ast.astblock(pat.with.first.prepended(fst),
                                                inbody)
                                ),
                                [[ast.astcall(
                                    ast.astmember(
                                        "prepended",
                                        ast.astcall(
                                            ast.astmember("try", pat.value),
                                            [[newname]]
                                        )
                                    ),
                                    [newname]
                                )
                                ]])
                        ],
                        [ast.astidentifier("MatchFailed", false)]
                        )
                    ]
        } else {
            inbody := resolveIdentifiersList(inbody)
            def binding = findName(pat.value)
            if (binding.kind != "type") then {
                params := [newname]
                body := [ast.astif(
                            ast.astcall(
                                ast.astmember(
                                    "match",
                                    pat),
                                [[newname]]),
                            [
                                ast.astcall(
                                    ast.astmember("apply",
                                        ast.astblock(o.params, inbody)
                                    ),
                                    [[newname]])
                            ],
                            [ast.astidentifier("MatchFailed", false)]
                            )
                        ]
            }
        }
    } else {
        body := resolveIdentifiersList(body)
    }
    o := ast.astblock(params, body)
    return o
}

method resolveIdentifiers(node) {
    var l
    var tmp
    var tmp2
    var tmp3
    var tmp4
    if (node == false) then {
        return node
    }
    if (node.kind == "identifier") then {
        tmp := resolveIdentifier(node)
        return tmp
    }
    if (node.kind == "generic") then {
        tmp := resolveIdentifier(node.value)
        tmp2 := resolveIdentifiersList(node.params)
        return ast.astgeneric(tmp, tmp2)
    }
    if (node.kind == "op") then {
        return ast.astop(node.value, resolveIdentifiers(node.left),
            resolveIdentifiers(node.right))
    }
    if (node.kind == "call") then {
        var p := resolveIdentifiers(node.value)
        if (p.kind == "call") then {
            tmp := []
            for (node.with) do { lst ->
                tmp.push(resolveIdentifiersList(lst))
            }
            return ast.astcall(p.value, tmp)
        }
        tmp := []
        for (node.with) do { lst ->
            tmp.push(resolveIdentifiersList(lst))
        }
        return ast.astcall(p, tmp)
    }
    if (node.kind == "member") then {
        tmp := resolveIdentifiers(node.in)
        return ast.astmember(node.value, tmp)
    }
    if (node.kind == "array") then {
        tmp := resolveIdentifiersList(node.value)
        if (node.value /= tmp) then {
            return ast.astarray(tmp)
        }
    }
    if (node.kind == "matchcase") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiersList(node.cases)
        tmp3 := resolveIdentifiers(node.elsecase)
        if ((tmp != node.value) | (tmp2 != node.cases)
            | (tmp3 != node.elsecase)) then {
            return ast.astmatchcase(tmp, tmp2, tmp3)
        }
        return node
    }
    if (node.kind == "method") then {
        pushScope
        for (node.signature) do { part ->
            for (part.params) do { e ->
                // Ensure parameter type exists
                if (false != e.dtype) then {
                    e.dtype := resolveIdentifiers(e.dtype)
                    if (e.dtype.kind == "generic") then {
                        e.dtype := findType(e.dtype)
                    }
                }
                bindIdentifier(e)
            }
            if (part.vararg != false) then {
                bindIdentifier(part.vararg)
            }
        }
        tmp2 := node.signature
        for (node.signature.indices) do { partnr ->
            var part := node.signature[partnr]
            tmp2[partnr].params := resolveIdentifiersList(part.params)
        }
        tmp4 := resolveIdentifiers(node.dtype)
        def oldReturnType = currentReturnType
        currentReturnType := findType(tmp4)
        if (currentReturnType == false) then {
            util.type_error("return type of method not defined as a type.")
        }
        l := resolveIdentifiersList(node.body)
        if (l.size > 0) then {
            def lastStatement = l.last
            def realType = expressionType(lastStatement)
            if (lastStatement.kind == "return") then {
                // pass
            } elseif (conformsType(realType)to(currentReturnType).not) then {
                util.type_error("returning type "
                    ++ "{realType.value} from method of return type "
                    ++ currentReturnType.value)
            }
        }
        currentReturnType := oldReturnType
        popScope
        tmp := ast.astmethod(node.value, tmp2, l,
            tmp4)
        tmp.varargs := node.varargs
        return tmp
    }
    if (node.kind == "block") then {
        if (node.params.size == 1) then {
            node := rewritematchblock2(node)
        }
        pushScope
        for (node.params) do {e->
            if (e.kind == "identifier") then {
                bindIdentifier(e)
            }
        }
        l := resolveIdentifiersList(node.body)
        tmp := ast.astblock(node.params, l)
        tmp.matchingPattern := node.matchingPattern
        popScope
        return tmp
    }
    if (node.kind == "object") then {
        def selftype = ast.asttype("<Object>", [outerMethod])
        tmp := {
            scopes.last.put("___is_object", Binding.new("yes"))
            scopes.last.put("outer", Binding.new("method"))
            def stb = Binding.new("def")
            stb.dtype := selftype
            scopes.last.put("self", stb)
        }
        selftypes.push(selftype)
        l := resolveIdentifiersList(node.value)withBlock(tmp)
        tmp2 := ast.astobject(l,
            resolveIdentifiers(node.superclass))
        selftypes.pop
        return tmp2
    }
    if (node.kind == "inherits") then {
        def csupertype = expressionType(resolveIdentifiers(node.value))
        for (csupertype.methods) do { m->
            scopes.last.put(m.value, Binding.new("method"))
        }
    }
    if (node.kind == "class") then {
        pushScope
        def selftype = ast.asttype("<Object>", [outerMethod])
        tmp := {
            scopes.last.put("___is_object", Binding.new("yes"))
            scopes.last.put("___is_class", Binding.new("yes"))
            scopes.last.put("outer", Binding.new("method"))
            def stb = Binding.new("def")
            stb.dtype := selftype
            scopes.last.put("self", stb)
        }
        selftypes.push(selftype)
        if (node.name.kind == "generic") then {
            for (node.name.params) do {gp->
                def nomnm = gp.value
                def nom = ast.asttype(nomnm, [])
                nom.nominal := true
                subtype.addType(nom)
                def tpb = Binding.new("type")
                tpb.value := nom
                bindName(gp.value, tpb)
            }
        }
        for (node.signature) do { part ->
            for (part.params) do { e ->
                bindIdentifier(e)
                if (false != e.dtype) then {
                    resolveIdentifier(e.dtype)
                }
            }
            if (part.vararg != false) then {
                bindIdentifier(part.vararg)
            }
        }
        tmp2 := resolveIdentifiersList(node.value)withBlock(tmp)
        tmp3 := node.signature
        for (node.signature.indices) do { partnr ->
            var part := node.signature[partnr]
            tmp3[partnr].params := resolveIdentifiersList(part.params)
        }
        node := ast.astclass(node.name, tmp3, tmp2,
            resolveIdentifiers(node.superclass), node.constructor)
        popScope
        selftypes.pop
    }
    if (node.kind == "bind") then {
        tmp := resolveIdentifiers(node.dest)
        tmp2 := resolveIdentifiers(node.value)
        if (tmp.kind == "identifier") then {
            tmp3 := findName(tmp.value)
            tmp4 := findType(tmp.dtype)
            if (tmp3.kind == "def") then {
                util.syntax_error("reassignment to constant {tmp.value}")
            } elseif (tmp3.kind == "method") then {
                util.syntax_error("assignment to method {node.dest.value}")
            } elseif (tmp3.kind == "undef") then {
                util.syntax_error("assignment to undeclared {tmp.value}")
            }
            if (conformsType(expressionType(tmp2))to(tmp.dtype).not) then {
                util.type_error("assigning value of nonconforming type "
                    ++ subtype.nicename(expressionType(tmp2))
                    ++ " to var of type "
                    ++ subtype.nicename(findType(tmp.dtype)))
            }
        } elseif ((tmp.kind == "call") & (node.kind /= "call")) then {
            tmp := tmp.value
        }
        if ((tmp /= node.dest) | (tmp2 /= node.value)) then {
            return ast.astbind(tmp, tmp2)
        }
    }
    if (node.kind == "type") then {
        if (node.generics.size > 0) then {
            pushScope
            for (node.generics) do {g->
                def nom = ast.asttype(g.value, [])
                nom.nominal := true
                def tpb = Binding.new("type")
                tpb.value := nom
                bindName(g.value, tpb)
            }
            tmp := []
            for (node.methods) do {mt->
                pushScope
                tmp2 := mt.signature
                for (mt.signature.indices) do { partnr ->
                    var part := mt.signature[partnr]
                    var tmpparams := []
                    for (part.params) do { e ->
                        e.dtype := resolveIdentifiers(e.dtype)
                        bindIdentifier(e)
                        tmpparams.push(e)
                    }
                    tmp2[partnr].params := tmpparams
                }
                tmp3 := resolveIdentifiers(mt.rtype)
                tmp.push(ast.astmethodtype(mt.value, tmp2, tmp3))
                popScope
            }
            popScope
            tmp := ast.asttype(node.value, tmp)
            tmp.generics := node.generics
            tmp.nominal := node.nominal
            return tmp
        } elseif (node.unionTypes.size > 0) then {
            tmp := resolveIdentifiersList(node.unionTypes)
            tmp2 := ast.asttype(node.value, node.methods)
            for (tmp) do {ut->
                tmp2.unionTypes.push(findType(ut))
            }
            tmp4 := false
            for (tmp2.unionTypes) do {utt->
                if (tmp4 == false) then {
                    tmp4 := utt.methods
                } else {
                    tmp3 := []
                    for (utt.methods) do {utm->
                        for (tmp4) do {existingmeth->
                            if (existingmeth.value == utm.value) then {
                                tmp3.push(existingmeth)
                            }
                        }
                    }
                    tmp4 := tmp3
                }
            }
            if (tmp4 /= false) then {
                tmp3 := ast.asttype(node.value, tmp4)
                for (tmp2.unionTypes) do {ut->
                    tmp3.unionTypes.push(ut)
                }
                tmp2 := tmp3
            }
            subtype.resetType(tmp2)
        } elseif (node.intersectionTypes.size > 0) then {
            tmp := resolveIdentifiersList(node.intersectionTypes)
            tmp2 := ast.asttype(node.value, node.methods)
            for (tmp) do {it->
                tmp2.intersectionTypes.push(findType(it))
            }
            tmp4 := false
            for (tmp2.intersectionTypes) do {utt->
                if (tmp4 == false) then {
                    tmp4 := []
                    for (utt.methods) do {tm->
                        tmp4.push(tm)
                    }
                } else {
                    for (utt.methods) do {utm->
                        var imfound := false
                        for (tmp4) do {existingmeth->
                            if (existingmeth.value == utm.value) then {
                                imfound := true
                            }
                        }
                        if (!imfound) then {
                            tmp4.push(utm)
                        }
                    }
                }
            }
            if (tmp4 /= false) then {
                tmp3 := ast.asttype(node.value, tmp4)
                for (tmp2.intersectionTypes) do {ut->
                    tmp3.intersectionTypes.push(ut)
                }
                tmp2 := tmp3
            }
            subtype.resetType(tmp2)
        } else {
            tmp2 := node
        }
        return tmp2
    }
    if (node.kind == "vardec") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        tmp4 := resolveIdentifiers(node.dtype)
        if (tmp2 /= false) then {
            tmp3 := findType(tmp4)
            tmp4 := tmp3
            if (conformsType(expressionType(tmp2))to(tmp3).not) then {
                util.type_error("initialising var of type "
                    ++ subtype.nicename(tmp3)
                    ++ " with expression of type "
                    ++ subtype.nicename(expressionType(tmp2)))
            }
        }
        if ((tmp2 /= tmp) | (tmp4 /= node.dtype)) then {
            findName(node.name.value).dtype := tmp4
            return ast.astvardec(node.name, tmp2, tmp4)
        }
    }
    if (node.kind == "defdec") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        tmp4 := resolveIdentifiers(node.dtype)
        tmp3 := findType(tmp4)
        def tmp5 = expressionType(tmp2)
        if (conformsType(tmp5)to(tmp3).not) then {
            util.type_error("initialising def of type "
                ++ subtype.nicename(tmp3)
                ++ " with expression of type "
                ++ subtype.nicename(tmp5))
        }
        if ((node.dtype == false) | (tmp4.value == "Dynamic")) then {
            tmp4 := expressionType(tmp2)
        }
        if ((tmp2 /= tmp) | (tmp4 /= node.dtype)) then {
            findName(node.name.value).dtype := tmp4
            return ast.astdefdec(node.name, tmp2, tmp4)
        }
    }
    if (node.kind == "return") then {
        if (currentReturnType == false) then {
            util.syntax_error("return statement with no surrounding method")
        }
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        tmp3 := expressionType(tmp2)
        if (conformsType(tmp3)to(currentReturnType).not) then {
            util.type_error("returning type "
                ++ "{tmp3.value} from method of return type "
                ++ currentReturnType.value)
        }
        if (tmp2 /= tmp) then {
            return ast.astreturn(tmp2)
        }
    }
    if (node.kind == "index") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        tmp3 := resolveIdentifiers(node.index)
        if ((tmp2 /= tmp) | (tmp3 /= node.index)) then {
            return ast.astindex(tmp2, tmp3)
        }
    }
    if (node.kind == "op") then {
        tmp := resolveIdentifiers(node.left)
        tmp2 := resolveIdentifiers(node.right)
        if ((tmp /= node.left) | (tmp2 /= node.right)) then {
            return ast.astop(node.value, tmp, tmp2)
        }
    }
    if (node.kind == "if") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiersList(node.thenblock)
        tmp3 := resolveIdentifiersList(node.elseblock)
        if ((tmp /= node.value) | (tmp2 /= node.thenblock)
            | (tmp3 /= node.elseblock)) then {
            return ast.astif(tmp, tmp2, tmp3)
        }
    }
    if (node.kind == "while") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiersList(node.body)
        if ((tmp /= node.value) | (tmp2 /= node.body)) then {
            return ast.astwhile(tmp, tmp2)
        }
    }
    if (node.kind == "for") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiers(node.body)
        if ((tmp /= node.value) | (tmp2 /= node.body)) then {
            return ast.astfor(tmp, tmp2)
        }
    }
    node
}

method resolveIdentifiersList(lst)withBlock(bk) {
    var nl := []
    var isobj := false
    var tpb
    var tmp := false
    pushScope
    bk.apply
    if (scopes.last.contains("___is_object")) then {
        isobj := true
    }
    for (lst) do {e->
        if (e.kind == "type") then {
            tpb := Binding.new("type")
            tpb.value := e
            bindName(e.value, tpb)
        }
    }
    for (lst) do {e->
        if (e.kind == "type") then {
            tpb := findName(e.value)
            tpb.value := resolveIdentifiers(e)
            subtype.addType(tpb.value)
        }
    }
    for (lst) do {e->
        if (isobj & ((e.kind == "vardec") | (e.kind == "defdec"))) then {
            bindName(e.name.value, Binding.new("method"))
            selftypes.last.methods.push(
                ast.astmethodtype(e.name.value, [ast.SignaturePart.new(e.name.value)], findType(e.dtype)))
        } elseif (e.kind == "vardec") then {
            tpb := findType(e.dtype)
            if ((tpb == false) || {tpb.kind /= "type"}) then {
                util.type_error("declared type of {e.name.value}, '{e.dtype.value}', not a type")
            }
            tmp := Binding.new("var")
            tmp.dtype := tpb
            bindName(e.name.value, tmp)
        } elseif (e.kind == "defdec") then {
            tpb := findType(e.dtype)
            if ((tpb == false) || {tpb.kind /= "type"}) then {
                util.type_error("declared type of {e.name.value}, '{e.dtype.value}', not a type")
            }
            tmp := Binding.new("def")
            tmp.dtype := tpb
            bindName(e.name.value, tmp)
        } elseif (e.kind == "method") then {
            def mt = Binding.new("method")
            mt.dtype := findType(e.dtype)
            bindName(e.value.value, mt)
            selftypes.last.methods.push(
                ast.astmethodtype(e.value.value, e.signature, mt.dtype))
        } elseif (e.kind == "inherits") then {
            def stype = expressionType(resolveIdentifiers(e.value))
            def st = selftypes.last.methods
            for (stype.methods) do { m->
                st.push(m)
            }
        } elseif (e.kind == "class") then {
            tmp := Binding.new("def")
            var className
            var classGenerics := []
            pushScope
            if (e.name.kind == "identifier") then {
                className := e.name.value
            } else {
                className := e.name.value.value
                classGenerics := e.name.params
                for (classGenerics) do {gp->
                    def nomnm = gp.value
                    def nom = ast.asttype(nomnm, [])
                    nom.nominal := true
                    subtype.addType(nom)
                    def gtpb = Binding.new("type")
                    gtpb.value := nom
                    bindName(gp.value, gtpb)
                }
            }
            for (e.signature) do { part ->
                for (part.params) do { p ->
                    bindIdentifier(p)
                }
                if (part.vararg != false) then {
                    bindIdentifier(part.vararg)
                }
            }
            def classInstanceType' = expressionType(ast.astobject(e.value,
                e.superclass))
            popScope
            def classInstanceType = ast.asttype("InstanceOf<{className}>",
                classInstanceType'.methods)
            def classItselfType = ast.asttype("ClassOf<{className}>", [
                ast.astmethodtype(e.constructor.value, e.signature,
                    classInstanceType)
            ])
            classItselfType.generics := classGenerics
            subtype.addType(classInstanceType)
            subtype.addType(classItselfType)
            tmp.dtype := classItselfType
            bindName(className, tmp)
        } elseif (e.kind == "import") then {
            tmp := Binding.new("def")
            tmp.dtype := DynamicType
            bindName(e.value.value, tmp)
        }
    }
    for (lst) do {e->
        util.setline(e.line)
        tmp := resolveIdentifiers(e)
        expressionType(tmp)
        nl.push(tmp)
    }
    popScope
    nl
}
method resolveIdentifiersList(lst) {
    resolveIdentifiersList(lst)withBlock { }
}

preludeObj.put("while()do", Binding.new("method"))
preludeObj.put("for()do", Binding.new("method"))
preludeObj.put("octets", Binding.new("method"))
method typecheck(values) {
    util.log_verbose("typechecking.")
    util.runOnNew {
        if (!util.extensions.contains("NativePrelude")) then {
            for (prelude._methods) do {mn->
                preludeObj.put(mn, Binding.new("method"))
            }
        }
    } else { }
    var btmp
    bindName("print", Binding.new("method"))
    bindName("length", Binding.new("method"))
    bindName("escapestring", Binding.new("method"))
    def modtype = selftypes.last
    modtype.methods.push(ast.astmethodtype("print",
        [ast.SignaturePart.new("print", [TopOther])], NoneType))
    modtype.methods.push(ast.astmethodtype("length",
        [ast.SignaturePart.new("length", [TopOther])], NumberType))
    modtype.methods.push(ast.astmethodtype("escapestring",
        [ast.SignaturePart.new("escapestring", [StringOther])], StringType))
    modtype.methods.push(ast.astmethodtype("raise",
        [ast.SignaturePart.new("raise", [TopOther])], NoneType))
    bindName("HashMap", Binding.new("def"))
    bindName("MatchFailed", Binding.new("def"))
    bindName("void", Binding.new("def"))
    btmp := Binding.new("def")
    btmp.dtype := NothingType
    bindName("nothing", btmp)
    bindName("true", Binding.new("def"))
    bindName("false", Binding.new("def"))
    bindName("...", Binding.new("def"))
    bindName("self", Binding.new("def"))
    bindName("super", Binding.new("def"))
    bindName("raise", Binding.new("method"))
    bindName("outer", Binding.new("method"))
    bindName("prelude", Binding.new("def"))
    bindName("_prelude", Binding.new("def"))
    btmp := Binding.new("type")
    btmp.value := DynamicType
    bindName("Dynamic", btmp)
    btmp := Binding.new("type")
    btmp.value := NumberType
    bindName("Number", btmp)
    btmp := Binding.new("type")
    btmp.value := StringType
    bindName("String", btmp)
    btmp := Binding.new("type")
    btmp.value := BooleanType
    bindName("Boolean", btmp)
    btmp := Binding.new("type")
    btmp.value := ListType
    bindName("List", btmp)
    btmp := Binding.new("type")
    btmp.value := VoidType
    bindName("Void", btmp)
    btmp := Binding.new("type")
    btmp.value := NothingType
    bindName("Nothing", btmp)
    btmp := Binding.new("type")
    bindName("None", btmp)
    btmp := Binding.new("type")
    btmp.value := BlockType
    bindName("Block", btmp)
    subtype.addType(DynamicType)
    subtype.addType(NumberType)
    subtype.addType(StringType)
    subtype.addType(BooleanType)
    subtype.addType(ListType)
    subtype.addType(VoidType)
    subtype.addType(NoneType)
    subtype.addType(NothingType)
    subtype.addType(BlockType)
    resolveIdentifiersList(values)
}

// TODO: does only one level of flattening, how to detect lists?
method flatten(lst) {
    var ret := []
    for (lst) do { l ->
        for (l) do { ll ->
            ret.push(ll)
        }
    }
    ret
}
