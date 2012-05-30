import io
import ast
import util
import subtype

def preludeObj = HashMap.new
def moduleScope = HashMap.new
moduleScope.put("___is_object", true)
preludeObj.put("___is_prelude", true)
var scopes := [HashMap.new, preludeObj, moduleScope]
var selftypes := [ast.typeNode.new("module", [])]
var auto_count := 0

def DynamicIdentifier = ast.identifierNode.new("Dynamic", false)
def TopOther = ast.identifierNode.new("other", ast.identifierNode.new("Dynamic", false))
def StringIdentifier = ast.identifierNode.new("String", false)
def StringOther = ast.identifierNode.new("other", StringIdentifier)
def BooleanIdentifier = ast.identifierNode.new("Boolean", false)
def BooleanOther = ast.identifierNode.new("other", BooleanIdentifier)
def NumberIdentifier = ast.identifierNode.new("Number", false)
def NumberOther = ast.identifierNode.new("other", NumberIdentifier)
def ListIdentifier = ast.identifierNode.new("List", false)
def ListOther = ast.identifierNode.new("other", ListIdentifier)
def DynamicType = ast.typeNode.new("Dynamic", [])
def NumberType = ast.typeNode.new("Number", [
    ast.methodTypeNode.new("+", [ast.signaturePart.new("+", [NumberOther])], NumberIdentifier),
    ast.methodTypeNode.new("*", [ast.signaturePart.new("*", [NumberOther])], NumberIdentifier),
    ast.methodTypeNode.new("-", [ast.signaturePart.new("-", [NumberOther])], NumberIdentifier),
    ast.methodTypeNode.new("/", [ast.signaturePart.new("/", [NumberOther])], NumberIdentifier),
    ast.methodTypeNode.new("%", [ast.signaturePart.new("%", [NumberOther])], NumberIdentifier),
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("/=", [ast.signaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("++", [ast.signaturePart.new("++", [TopOther])], DynamicIdentifier),
    ast.methodTypeNode.new("<", [ast.signaturePart.new("<", [NumberOther])], BooleanIdentifier),
    ast.methodTypeNode.new("<=", [ast.signaturePart.new("<=", [NumberOther])], BooleanIdentifier),
    ast.methodTypeNode.new(">", [ast.signaturePart.new(">", [NumberOther])], BooleanIdentifier),
    ast.methodTypeNode.new(">=", [ast.signaturePart.new(">=", [NumberOther])], BooleanIdentifier),
    ast.methodTypeNode.new("..", [ast.signaturePart.new("..", [NumberOther])], DynamicIdentifier),
    ast.methodTypeNode.new("asString", [ast.signaturePart.new("asString")], StringIdentifier),
    ast.methodTypeNode.new("prefix-", [ast.signaturePart.new("prefix-")], NumberIdentifier),
    ast.methodTypeNode.new("inBase", [ast.signaturePart.new("inBase", [NumberOther])], StringIdentifier),
    ast.methodTypeNode.new("truncate", [ast.signaturePart.new("truncate")], NumberIdentifier),
    ast.methodTypeNode.new("match", [ast.signaturePart.new("match", [TopOther])], DynamicIdentifier)
])
def StringType = ast.typeNode.new("String", [
    ast.methodTypeNode.new("++", [ast.signaturePart.new("++", [TopOther])], StringIdentifier),
    ast.methodTypeNode.new("size", [ast.signaturePart.new("size")], NumberIdentifier),
    ast.methodTypeNode.new("ord", [ast.signaturePart.new("ord")], NumberIdentifier),
    ast.methodTypeNode.new("at", [ast.signaturePart.new("at", [NumberOther])], StringIdentifier),
    ast.methodTypeNode.new("[]", [ast.signaturePart.new("[]", [NumberOther])], StringIdentifier),
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("/=", [ast.signaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("iter", [ast.signaturePart.new("iter")], DynamicIdentifier),
    ast.methodTypeNode.new("substringFrom()to",
        [ast.signaturePart.new("substringFrom", [NumberOther]),
        ast.signaturePart.new("to", [NumberOther])], StringIdentifier),
    ast.methodTypeNode.new("replace()with", [ast.signaturePart.new("replace", [StringOther]),
        ast.signaturePart.new("with", [StringOther])], StringIdentifier),
    ast.methodTypeNode.new("hashcode", [ast.signaturePart.new("hashcode")], NumberIdentifier),
    ast.methodTypeNode.new("indices", [ast.signaturePart.new("indices")], ListIdentifier),
    ast.methodTypeNode.new("asString", [ast.signaturePart.new("asString")], StringIdentifier),
    ast.methodTypeNode.new("asNumber", [ast.signaturePart.new("asNumber")], NumberIdentifier),
    ast.methodTypeNode.new("match", [ast.signaturePart.new("match", [TopOther])], DynamicIdentifier)
])
def BooleanType = ast.typeNode.new("Boolean", [
    ast.methodTypeNode.new("++", [ast.signaturePart.new("++", [TopOther])], StringIdentifier),
    ast.methodTypeNode.new("&", [ast.signaturePart.new("&", [BooleanOther])], BooleanIdentifier),
    ast.methodTypeNode.new("|", [ast.signaturePart.new("|", [BooleanOther])], BooleanIdentifier),
    ast.methodTypeNode.new("&&", [ast.signaturePart.new("&&", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("||", [ast.signaturePart.new("||", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("/=", [ast.signaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("prefix!", [ast.signaturePart.new("prefix!")], BooleanIdentifier),
    ast.methodTypeNode.new("not", [ast.signaturePart.new("not")], BooleanIdentifier),
    ast.methodTypeNode.new("ifTrue", [ast.signaturePart.new("ifTrue", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("asString", [ast.signaturePart.new("asString")], StringIdentifier),
    ast.methodTypeNode.new("match", [ast.signaturePart.new("match", [TopOther])], DynamicIdentifier)
])
def ListType = ast.typeNode.new("List", [
    ast.methodTypeNode.new("size", [ast.signaturePart.new("size", [])], NumberIdentifier),
    ast.methodTypeNode.new("at", [ast.signaturePart.new("at", [NumberOther])], TopOther),
    ast.methodTypeNode.new("[]", [ast.signaturePart.new("[]", [NumberOther])], TopOther),
    ast.methodTypeNode.new("[]:=", [ast.signaturePart.new("[]:=", [NumberOther, TopOther])], TopOther),
    ast.methodTypeNode.new("at()put", [ast.signaturePart.new("at", [NumberOther]),
        ast.signaturePart.new("put", [TopOther])], TopOther),
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("/=", [ast.signaturePart.new("/=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("contains", [ast.signaturePart.new("contains", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("iter", [ast.signaturePart.new("iter")], DynamicIdentifier),
    ast.methodTypeNode.new("push", [ast.signaturePart.new("push", [TopOther])], TopOther),
    ast.methodTypeNode.new("pop", [ast.signaturePart.new("pop")], TopOther),
    ast.methodTypeNode.new("first", [ast.signaturePart.new("first")], NumberIdentifier),
    ast.methodTypeNode.new("last", [ast.signaturePart.new("last")], NumberIdentifier),
    ast.methodTypeNode.new("prepended", [ast.signaturePart.new("prepended", [TopOther])], ListIdentifier),
    ast.methodTypeNode.new("indices", [ast.signaturePart.new("indices")], ListIdentifier),
    ast.methodTypeNode.new("asString", [ast.signaturePart.new("asString")], StringIdentifier)
])
def VoidType = ast.typeNode.new("Void", [
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier)
])
def NothingType = ast.typeNode.new("Nothing", [
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier)
])
def NoneType = ast.typeNode.new("None", [
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier)
])
def BlockType = ast.typeNode.new("Block", [
    ast.methodTypeNode.new("==", [ast.signaturePart.new("==", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("!=", [ast.signaturePart.new("!=", [TopOther])], BooleanIdentifier),
    ast.methodTypeNode.new("apply", [ast.signaturePart.new("apply")], TopOther),
    ast.methodTypeNode.new("match", [ast.signaturePart.new("match")], TopOther)
])
def outerMethod = ast.methodTypeNode.new("outer", [ast.signaturePart.new("outer")], DynamicType)
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
    var mem := ast.identifierNode.new("self", false)
    var lv := scopes.indices.last
    var min := scopes.indices.first
    while {scopes.at(lv).contains(name).not} do {
        if (scopes.at(lv).contains("___is_object")) then {
            mem := ast.memberNode.new("outer", mem)
        }
        if (scopes.at(lv).contains("___is_class")) then {
            mem := ast.memberNode.new("outer", mem)
        }
        lv := lv - 1
        if (lv == min) then {
            return ast.identifierNode.new(name, false)
        }
    }
    if (scopes.at(lv).contains("___is_prelude")) then {
        ast.memberNode.new(name, ast.identifierNode.new("prelude", false))
    } else {
        ast.memberNode.new(name, mem)
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
            if (part.params.size > expr.with[partnr].args.size) then {
                util.type_error("method '{callname}' in {callreceivertype.value} "
                    ++ "requires {part.args.size} arguments for part {partnr}, not "
                    ++ "{expr.with[partnr].args.size}")
            }
        }
        def callsig = callmeth.signature
        def callparts = expr.with
        for (callparts.indices) do { partnr ->
            def callparams = callsig[partnr].params
            def callargs = callparts[partnr].args
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
        def objecttp = ast.typeNode.new("<Object_{expr.line}>", objectmeths)
        if (expr.superclass /= false) then {
            def supertype = expressionType(expr.superclass)
            for (supertype.methods) do {e->
                objectmeths.push(e)
            }
        }
        for (expr.value) do {e->
            if (e.kind == "defdec") then {
                objectmeths.push(ast.methodTypeNode.new(e.name.value,
                    [ast.signaturePart.new(e.name.value)], findType(e.dtype)))
            } elseif (e.kind == "method") then {
                objectmeths.push(ast.methodTypeNode.new(e.value.value, e.signature,
                    findType(e.dtype)))
            } elseif (e.kind == "vardec") then {
                def vtype = findType(e.dtype)
                objectmeths.push(ast.methodTypeNode.new(e.name.value,
                    [ast.signaturePart.new(e.name.value)], vtype))
                objectmeths.push(ast.methodTypeNode.new(e.name.value ++ ":=",
                    [ast.signaturePart.new(e.name.value ++ ":=",
                        [ast.identifierNode.new("_", vtype)])], false))
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
        def nt = ast.typeNode.new(gname, gtype.methods)
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
            var tmppart := ast.signaturePart.new(part.name)
            var tmpparams := []
            for (part.params) do {pp->
                if (pp.dtype == false) then {
                    tmpparams.push(pp)
                } elseif (pp.dtype.value == typevar.value) then {
                    tmpparams.push(ast.identifierNode.new(pp.value, concrete))
                    changed := true
                } elseif (pp.dtype.value.at(1) == "<") then {
                    def otype = findType(pp.dtype)
                    def tryrep = betaReduceType(otype, typevar, concrete)
                    if (otype == tryrep) then {
                        tmpparams.push(pp)
                    } else {
                        def trynamed = ast.typeNode.new(tryrep.value
                            ++ "<{typevar.value}={concrete.value}>",
                            tryrep.methods)
                        tmpparams.push(ast.identifierNode.new(pp.value, trynamed))
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
        newmeth.push(ast.methodTypeNode.new(m.value, tmpsig, tmprt))
    }
    if (changed) then {
        var tmp
        if (tp.value.substringFrom(1)to(11) == "InstanceOf<") then {
            tmp := ast.typeNode.new("{tp.value}<{typevar.value}={concrete.value}>",
                newmeth)
        } else {
            tmp := ast.typeNode.new(tp.value, newmeth)
        }
        tmp := ast.typeNode.new("{tp.value}<{typevar.value}={concrete.value}>",
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
        def nt = ast.typeNode.new(gnm, tmptp.methods)
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
        return ast.memberNode.new("outer", ast.identifierNode.new("self", false))
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
        def meth = findDeepMethod(nm)
        return ast.callNode.new(meth, [ast.callWithPart.new(meth.value)])
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
            for (part.args) do { a ->
                def tmp = rewritematchblockterm2(a)
                subpats.push(tmp[1])
                for (tmp[2]) do {b->
                    bindings.push(b)
                }
            }
        }
        def callpat = ast.callNode.new(
            ast.memberNode.new(
                "new",
                ast.memberNode.new("MatchAndDestructuringPattern",
                    ast.identifierNode.new("prelude", false)
                )
            ),
            [ast.callWithPart.new("new", [arg.value, ast.arrayNode.new(subpats)])]
        )
        return [callpat, bindings]
    }
    if (arg.kind == "identifier") then {
        def varpat = ast.callNode.new(
            ast.memberNode.new(
                "new",
                ast.memberNode.new("VariablePattern",
                    ast.identifierNode.new("prelude", false)
                )
            ),
            [ast.callWithPart.new("new", [ast.stringNode.new(arg.value)])]
        )
        if (arg.dtype != false) then {
            if (arg.dtype.kind == "identifier") then {
                return [ast.callNode.new(
                    ast.memberNode.new(
                        "new",
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)
                        )
                    ),
                    [ast.callWithPart.new("new", [varpat, arg.dtype])]
                ), [arg]]
            }
            def tmp = rewritematchblockterm2(arg.dtype)
            def bindings = [arg]
            for (tmp[2]) do {b->
                bindings.push(b)
            }
            def bindingpat = ast.callNode.new(
                ast.memberNode.new(
                    "new",
                    ast.memberNode.new("AndPattern",
                        ast.identifierNode.new("prelude", false)
                    )
                ),
                [ast.callWithPart.new("new", [varpat, tmp[1]])]
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
        def varpat = ast.callNode.new(
            ast.memberNode.new(
                "new",
                ast.memberNode.new("VariablePattern",
                    ast.identifierNode.new("prelude", false)
                )
            ),
            [ast.callWithPart.new("new", [ast.stringNode.new(arg.value)])]
        )
        if (arg.dtype != false) then {
            if (arg.dtype.kind == "identifier") then {
                pattern := ast.callNode.new(
                    ast.memberNode.new("new",
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)
                            )
                        ),
                    [ast.callWithPart.new("new", [varpat, arg.dtype])])
            } else {
                def tmp = rewritematchblockterm2(arg.dtype)
                def bindingpat = ast.callNode.new(
                    ast.memberNode.new("new",
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)
                            )
                        ),
                    [ast.callWithPart.new("new", [varpat, tmp[1]])]
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
    def newblk = ast.blockNode.new(newparams, blk.body)
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
    var newname := ast.identifierNode.new("__matchterm" ++ auto_count,
        false)
    auto_count := auto_count + 1
    bindIdentifier(newname)
    var pat := param
    var st
    if (pat.kind == "call") then {
        st := ast.ifNode.new(
            ast.callNode.new(
                ast.memberNode.new(
                    "match",
                    pat.value),
                [ast.callWithPart.new("match", [newname])]),
            body,
            [ast.identifierNode.new("MatchFailed", false)]
        )
    } elseif (pat.kind == "identifier") then {
        pat := pat.dtype
        param.dtype := false
        st := ast.callNode.new(ast.identifierNode.new("print"),
            [ast.callWithPart.new("print", [ast.stringNode.new("Recursively binding pattern matches unimplemented")])])
    } else {
        st := ast.ifNode.new(
            ast.opNode.new("==", pat, newname),
            body,
            [ast.identifierNode.new("MatchFailed", false)]
        )
    }
    return [newname, [st]]
}

method rewritematchblock(o) {
    var params := o.params
    if (params.size /= 1) then {
        def skipListBody = resolveIdentifiersList(o.body)
        return ast.blockNode.new(o.params, skipListBody)
    }
    var body := o.body
    var inbody := body
    var pat
    var tmpp
    var nparams
    var newname := ast.identifierNode.new("__matchvar" ++ auto_count,
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
            for (part.args.indices) do { pwi ->
                def pw = part.args[pwi]
                def rw2 = rewritematchblockterm(pw, inbody)
                part.args[pwi] := rw2[1]
                inbody := rw2[2]
            }
        }
        inbody := resolveIdentifiersList(inbody)
        var args := []
        for (pat.with) do { part ->
            for (part.args) do { arg ->
                args.push(arg)
            }
        }
        body := [ast.ifNode.new(
                    ast.callNode.new(
                        ast.memberNode.new(
                            "match",
                            pat.value),
                        [ast.callWithPart.new("match", [newname])]),
                    [
                        ast.callNode.new(
                            ast.memberNode.new("applyIndirectly",
                                ast.blockNode.new(args, inbody)
                            ),
                            [ast.callWithPart.new("applyIndirectly", [ast.callNode.new(
                                ast.memberNode.new("try", pat.value),
                                [ast.callWithPart.new("try", [newname])]
                            )])])
                    ],
                    [ast.identifierNode.new("MatchFailed", false)]
                    )
                ]
    } elseif (fst.kind /= "identifier") then {
        auto_count := auto_count + 1
        pat := fst
        params := [newname]
        inbody := resolveIdentifiersList(inbody)
        body := [ast.ifNode.new(
                    ast.opNode.new("==", pat, newname),
                    [
                        ast.callNode.new(
                            ast.memberNode.new("apply",
                                ast.blockNode.new([], inbody)
                            ),
                            [ast.callWithPart.new("apply")])
                    ],
                    [ast.identifierNode.new("MatchFailed", false)]
                    )
                ]
    } elseif (fst.dtype /= false) then {
        pat := fst.dtype
        tmpp := fst
        if (pat.kind == "call") then {
            nparams := []
            params := [newname]
            for (pat.with) do { part ->
                for (part.args.indices) do { pwi ->
                    def pw = part.args[pwi]
                    def rw2 = rewritematchblockterm(pw, inbody)
                    part.args[pwi] := rw2[1]
                    inbody := rw2[2]
                }
            }
            inbody := resolveIdentifiersList(inbody)
            body := [ast.ifNode.new(
                        ast.callNode.new(
                            ast.memberNode.new(
                                "match",
                                pat.value),
                            [ast.callWithPart.new("match", [newname])]),
                        [
                            ast.callNode.new(
                                ast.memberNode.new("applyIndirectly",
                                    ast.blockNode.new(pat.with.args.first.prepended(fst),
                                                inbody)
                                ),
                                [ast.callWithPart.new("applyIndirectly", [ast.callNode.new(
                                    ast.memberNode.new(
                                        "prepended",
                                        ast.callNode.new(
                                            ast.memberNode.new("try", pat.value),
                                            [ast.callWithPart.new("try", [newname])]
                                        )
                                    ),
                                    [ast.callWithPart.new("prepended", [newname])]
                                )
                                ])])
                        ],
                        [ast.identifierNode.new("MatchFailed", false)]
                        )
                    ]
        } else {
            inbody := resolveIdentifiersList(inbody)
            def binding = findName(pat.value)
            if (binding.kind != "type") then {
                params := [newname]
                body := [ast.ifNode.new(
                            ast.callNode.new(
                                ast.memberNode.new(
                                    "match",
                                    pat),
                                [ast.callWithPart.new("match", [newname])]),
                            [
                                ast.callNode.new(
                                    ast.memberNode.new("apply",
                                        ast.blockNode.new(o.params, inbody)
                                    ),
                                    [ast.callWithPart.new("apply", [newname])])
                            ],
                            [ast.identifierNode.new("MatchFailed", false)]
                            )
                        ]
            }
        }
    } else {
        body := resolveIdentifiersList(body)
    }
    o := ast.blockNode.new(params, body)
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
        return ast.genericNode.new(tmp, tmp2)
    }
    if (node.kind == "op") then {
        return ast.opNode.new(node.value, resolveIdentifiers(node.left),
            resolveIdentifiers(node.right))
    }
    if (node.kind == "call") then {
        var p := resolveIdentifiers(node.value)
        if (p.kind == "call") then {
            tmp := node.with
            for (node.with.indices) do { partnr ->
                var part := node.with[partnr]
                tmp[partnr].args := resolveIdentifiersList(part.args)
            }
            return ast.callNode.new(p.value, tmp)
        }
        tmp := node.with
        for (node.with.indices) do { partnr ->
            var part := node.with[partnr]
            tmp[partnr].args := resolveIdentifiersList(part.args)
        }
        return ast.callNode.new(p, tmp)
    }
    if (node.kind == "member") then {
        tmp := resolveIdentifiers(node.in)
        return ast.memberNode.new(node.value, tmp)
    }
    if (node.kind == "array") then {
        tmp := resolveIdentifiersList(node.value)
        if (node.value /= tmp) then {
            return ast.arrayNode.new(tmp)
        }
    }
    if (node.kind == "matchcase") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiersList(node.cases)
        tmp3 := resolveIdentifiers(node.elsecase)
        if ((tmp != node.value) | (tmp2 != node.cases)
            | (tmp3 != node.elsecase)) then {
            return ast.matchCaseNode.new(tmp, tmp2, tmp3)
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
        tmp := ast.methodNode.new(node.value, tmp2, l,
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
        tmp := ast.blockNode.new(node.params, l)
        tmp.matchingPattern := node.matchingPattern
        popScope
        return tmp
    }
    if (node.kind == "object") then {
        def selftype = ast.typeNode.new("<Object>", [outerMethod])
        tmp := {
            scopes.last.put("___is_object", Binding.new("yes"))
            scopes.last.put("outer", Binding.new("method"))
            def stb = Binding.new("def")
            stb.dtype := selftype
            scopes.last.put("self", stb)
        }
        selftypes.push(selftype)
        l := resolveIdentifiersList(node.value)withBlock(tmp)
        tmp2 := ast.objectNode.new(l,
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
        def selftype = ast.typeNode.new("<Object>", [outerMethod])
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
                def nom = ast.typeNode.new(nomnm, [])
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
        node := ast.classNode.new(node.name, tmp3, tmp2,
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
            return ast.bindNode.new(tmp, tmp2)
        }
    }
    if (node.kind == "type") then {
        if (node.generics.size > 0) then {
            pushScope
            for (node.generics) do {g->
                def nom = ast.typeNode.new(g.value, [])
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
                tmp.push(ast.methodTypeNode.new(mt.value, tmp2, tmp3))
                popScope
            }
            popScope
            tmp := ast.typeNode.new(node.value, tmp)
            tmp.generics := node.generics
            tmp.nominal := node.nominal
            return tmp
        } elseif (node.unionTypes.size > 0) then {
            tmp := resolveIdentifiersList(node.unionTypes)
            tmp2 := ast.typeNode.new(node.value, node.methods)
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
                tmp3 := ast.typeNode.new(node.value, tmp4)
                for (tmp2.unionTypes) do {ut->
                    tmp3.unionTypes.push(ut)
                }
                tmp2 := tmp3
            }
            subtype.resetType(tmp2)
        } elseif (node.intersectionTypes.size > 0) then {
            tmp := resolveIdentifiersList(node.intersectionTypes)
            tmp2 := ast.typeNode.new(node.value, node.methods)
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
                tmp3 := ast.typeNode.new(node.value, tmp4)
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
            return ast.varDecNode.new(node.name, tmp2, tmp4)
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
            return ast.defDecNode.new(node.name, tmp2, tmp4)
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
            return ast.returnNode.new(tmp2)
        }
    }
    if (node.kind == "index") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        tmp3 := resolveIdentifiers(node.index)
        if ((tmp2 /= tmp) | (tmp3 /= node.index)) then {
            return ast.indexNode.new(tmp2, tmp3)
        }
    }
    if (node.kind == "op") then {
        tmp := resolveIdentifiers(node.left)
        tmp2 := resolveIdentifiers(node.right)
        if ((tmp /= node.left) | (tmp2 /= node.right)) then {
            return ast.opNode.new(node.value, tmp, tmp2)
        }
    }
    if (node.kind == "if") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiersList(node.thenblock)
        tmp3 := resolveIdentifiersList(node.elseblock)
        if ((tmp /= node.value) | (tmp2 /= node.thenblock)
            | (tmp3 /= node.elseblock)) then {
            return ast.ifNode.new(tmp, tmp2, tmp3)
        }
    }
    if (node.kind == "while") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiersList(node.body)
        if ((tmp /= node.value) | (tmp2 /= node.body)) then {
            return ast.whileNode.new(tmp, tmp2)
        }
    }
    if (node.kind == "for") then {
        tmp := resolveIdentifiers(node.value)
        tmp2 := resolveIdentifiers(node.body)
        if ((tmp /= node.value) | (tmp2 /= node.body)) then {
            return ast.forNode.new(tmp, tmp2)
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
                ast.methodTypeNode.new(e.name.value, [ast.signaturePart.new(e.name.value)], findType(e.dtype)))
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
                ast.methodTypeNode.new(e.value.value, e.signature, mt.dtype))
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
                    def nom = ast.typeNode.new(nomnm, [])
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
            def classInstanceType' = expressionType(ast.objectNode.new(e.value,
                e.superclass))
            popScope
            def classInstanceType = ast.typeNode.new("InstanceOf<{className}>",
                classInstanceType'.methods)
            def classItselfType = ast.typeNode.new("ClassOf<{className}>", [
                ast.methodTypeNode.new(e.constructor.value, e.signature,
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
    modtype.methods.push(ast.methodTypeNode.new("print",
        [ast.signaturePart.new("print", [TopOther])], NoneType))
    modtype.methods.push(ast.methodTypeNode.new("length",
        [ast.signaturePart.new("length", [TopOther])], NumberType))
    modtype.methods.push(ast.methodTypeNode.new("escapestring",
        [ast.signaturePart.new("escapestring", [StringOther])], StringType))
    modtype.methods.push(ast.methodTypeNode.new("raise",
        [ast.signaturePart.new("raise", [TopOther])], NoneType))
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
