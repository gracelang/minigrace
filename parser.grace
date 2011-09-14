import io
import ast
import util
import subtype

var lastline := 0
var linenum := 0
var lastIndent := 0
var indentFreePass := false
var minIndentLevel := 0
var statementIndent := 0
var statementToken
var tokens := 0
var values := []
var auto_count := 0

var scopes := [HashMap.new]

// Global object containing the current token
var sym
var lastToken

// Advance to the next token in the stream, with special handling
// so the magic "line" tokens update the line number for error output.
method next {
    lastToken := sym
    if (tokens.size > 0) then {
        lastline := linenum
        lastIndent := sym.indent
        sym := tokens.pop
        linenum := sym.line
        util.setPosition(sym.line, sym.linePos)
    } else {
        sym := object {
            var kind := "eof"
            var line := linenum + 1
            var linePos := 0
            var indent := 0
            var value := ""
        }
    }
}

// True if the current token (next to be processed) is a t, where
// t is "num", "string", "method", etc.
method accept(t) {
    sym.kind == t
}

// True if the current token is a t, and it is on the same logical
// line (either because it's on the same physical line, or because
// it's on an indented continuation line).
method acceptSameLine(t) {
    (sym.kind == t) & ((lastline == sym.line) |
        (sym.indent > lastIndent))
}

// True if the current token is a t, and it is on the same logical
// line as a provided token.
method accept(t)onLineOf(other) {
    (sym.kind == t) & ((other.line == sym.line) |
        (sym.indent > other.indent))
}
// True if the current token is a t, and it is on the same logical
// line as a provided token.
method accept(t)onLineOfLastOr(other) {
    (sym.kind == t) & (((other.line == sym.line) |
        (sym.indent > other.indent)) | (lastToken.line == sym.line))
}
// Require a t as the current token; if not, raise a syntax error.
method expect(t) {
    if (sym.kind == t) then {
        return true
    }
    util.syntax_error("expected {t}, got {sym.kind}: {sym.value}")
}
// Require a t OR s as the current token; if not, raise a syntax error.
method expect(t)or(s) {
    if (sym.kind == t) then {
        return true
    }
    if (sym.kind == s) then {
        return true
    }
    util.syntax_error("expected {t}, got {sym.kind}: {sym.value}")
}
// Expect block to consume at least one token
method expectConsume(ablock) {
    var sz := tokens.size
    ablock.apply
    if (tokens.size == sz) then {
        util.syntax_error("unable to consume token")
    }
}
// Expect block to consume at least one token, or call fallback code.
method ifConsume(ablock)then(tblock) {
    var sz := tokens.size
    ablock.apply
    if (tokens.size /= sz) then {
        tblock.apply
    }
}

def DynamicIdentifier = ast.astidentifier("Dynamic", false)
def TopOther = ast.astidentifier("other", ast.astidentifier("Dynamic", false))
def StringIdentifier = ast.astidentifier("String", false)
def StringOther = ast.astidentifier("other", StringIdentifier)
def BooleanIdentifier = ast.astidentifier("Boolean", false)
def BooleanOther = ast.astidentifier("other", BooleanIdentifier)
def NumberIdentifier = ast.astidentifier("Number", false)
def NumberOther = ast.astidentifier("other", NumberIdentifier)
def DynamicType = ast.asttype("Dynamic", [])
def NumberType = ast.asttype("Number", [
    ast.astmethodtype("+", [NumberOther], NumberIdentifier),
    ast.astmethodtype("*", [NumberOther], NumberIdentifier),
    ast.astmethodtype("-", [NumberOther], NumberIdentifier),
    ast.astmethodtype("/", [NumberOther], NumberIdentifier),
    ast.astmethodtype("%", [NumberOther], NumberIdentifier),
    ast.astmethodtype("==", [TopOther], BooleanIdentifier),
    ast.astmethodtype("!=", [TopOther], BooleanIdentifier),
    ast.astmethodtype("/=", [TopOther], BooleanIdentifier),
    ast.astmethodtype("++", [TopOther], DynamicIdentifier),
    ast.astmethodtype("<", [NumberOther], NumberIdentifier),
    ast.astmethodtype("<=", [NumberOther], NumberIdentifier),
    ast.astmethodtype(">", [NumberOther], NumberIdentifier),
    ast.astmethodtype(">=", [NumberOther], NumberIdentifier),
    ast.astmethodtype("..", [NumberOther], DynamicIdentifier),
    ast.astmethodtype("asString", [], StringIdentifier),
    ast.astmethodtype("prefix-", [], NumberIdentifier)
])
def StringType = ast.asttype("String", [
    ast.astmethodtype("++", [TopOther], StringIdentifier),
    ast.astmethodtype("size", [], NumberIdentifier),
    ast.astmethodtype("ord", [], NumberIdentifier),
    ast.astmethodtype("at", [NumberOther], StringIdentifier),
    ast.astmethodtype("==", [TopOther], BooleanIdentifier),
    ast.astmethodtype("!=", [TopOther], BooleanIdentifier),
    ast.astmethodtype("/=", [TopOther], BooleanIdentifier),
    ast.astmethodtype("iter", [], DynamicIdentifier),
    ast.astmethodtype("substringFrom()to", [NumberOther, NumberOther],
        StringIdentifier),
    ast.astmethodtype("replace()with", [NumberOther, NumberOther],
        StringIdentifier),
    ast.astmethodtype("hashcode", [], NumberIdentifier),
    ast.astmethodtype("indices", [], DynamicIdentifier),
    ast.astmethodtype("asString", [], StringIdentifier)
])
def BooleanType = ast.asttype("Boolean", [
    ast.astmethodtype("++", [TopOther], StringIdentifier),
    ast.astmethodtype("&", [BooleanOther], BooleanIdentifier),
    ast.astmethodtype("|", [BooleanOther], BooleanIdentifier),
    ast.astmethodtype("&&", [TopOther], BooleanIdentifier),
    ast.astmethodtype("||", [TopOther], BooleanIdentifier),
    ast.astmethodtype("==", [TopOther], BooleanIdentifier),
    ast.astmethodtype("!=", [TopOther], BooleanIdentifier),
    ast.astmethodtype("/=", [TopOther], BooleanIdentifier),
    ast.astmethodtype("prefix!", [], BooleanIdentifier),
    ast.astmethodtype("not", [], BooleanIdentifier),
    ast.astmethodtype("ifTrue", [TopOther], BooleanIdentifier),
    ast.astmethodtype("asString", [], StringIdentifier)
])
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
    ast.astmember(name, mem)
}

method pushScope {
    var scope := HashMap.new
    scopes.push(scope)
}

method popScope {
    scopes.pop
}

method conformsType(b)to(a) {
    if ((b == false) | (a == false)) then {
        return true
    }
    if (a.value == "Dynamic") then {
        return true
    }
    if (b.value == "Dynamic") then {
        return true
    }
    if (b.value == a.value) then {
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
        return expr.dtype
    }
    if (expr.kind == "num") then {
        return NumberType
    }
    if (expr.kind == "string") then {
        return StringType
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
        def opparamtypeid = opmeth.params.first.dtype
        def opparamtypebd = findName(opparamtypeid.value)
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
        if (memmeth.params.size /= 0) then {
            util.type_error("method '{memname}' in {memreceivertype.value} "
                ++ "requires {memmeth.params.size} arguments, not 0")
        }
        def memreturntypeid = memmeth.rtype
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
        if (callmeth.params.size > expr.with.size) then {
            util.type_error("method '{callname}' in {callreceivertype.value} "
                ++ "requires {callmeth.params.size} arguments, not "
                ++ "{expr.with.size}")
        }
        def callparams = callmeth.params
        def callargs = expr.with
        if (callparams.size > 0) then {
            var calli := callparams.indices.first
            def callimax = callparams.indices.last
            for (calli..callimax) do { i->
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
        def callreturntypeid = callmeth.rtype
        def callreturntypebd = findName(callreturntypeid.value)
        return callreturntypebd.value
    }
    if (expr.kind == "object") then {
        def objectmeths = []
        def objecttp = ast.asttype("<Object_{expr.line}>", objectmeths)
        for (expr.value) do {e->
            if (e.kind == "defdec") then {
                objectmeths.push(ast.astmethodtype(e.name.value, [],
                    findType(e.dtype)))
            } elseif (e.kind == "method") then {
                objectmeths.push(ast.astmethodtype(e.value.value, e.params,
                    findType(e.dtype)))
            } elseif (e.kind == "vardec") then {
                def vtype = findType(e.dtype)
                objectmeths.push(ast.astmethodtype(e.name.value, [],
                    vtype))
                objectmeths.push(ast.astmethodtype(e.name.value ++ ":=", [
                    ast.astidentifier("_", vtype)],
                    false))
            }
        }
        subtype.addType(objecttp)
        expr.otype := objecttp
        return objecttp
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
        }
        tmpb.dtype := tdtype
        scopes.last.put(ident.value, tmpb)
    }
}

// Push the current token onto the output stack as a number
method pushnum {
    var o := ast.astnum(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as an octet literal
method pushoctets {
    var o := ast.astoctets(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as a string
method pushstring {
    var o := ast.aststring(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as an identifier.
// false means that this identifier has not been assigned a dtype (yet).
method pushidentifier {
    var o := ast.astidentifier(sym.value, false)
    if (o.value == "_") then {
        o.value := "__" ++ auto_count
        auto_count := auto_count + 1
    }
    values.push(o)
    next
}

method dotyperef {
    var overallType := false
    var tp := false
    var op := false
    def unionTypes = []
    if (accept("identifier")) then {
        pushidentifier
        overallType := values.pop
    }
    while {accept("op") & (sym.value == "|")} do {
        if (unionTypes.size == 0) then {
            unionTypes.push(overallType)
        }
        next
        pushidentifier
        unionTypes.push(values.pop)
    }
    if (unionTypes.size > 0) then {
        var unionName := "Union<"
        for (unionTypes) do {ut->
            unionName := "{unionName}|{ut.value}"
        }
        unionName := "{unionName}|>"
        overallType := ast.asttype(unionName, [])
        for (unionTypes) do {ut->
            overallType.unionTypes.push(ut)
        }
        subtype.addType(overallType)
    }
    def intersectionTypes = []
    while {accept("op") & (sym.value == "&")} do {
        if (intersectionTypes.size == 0) then {
            intersectionTypes.push(overallType)
        }
        next
        pushidentifier
        intersectionTypes.push(values.pop)
    }
    if (intersectionTypes.size > 0) then {
        var intersectionName := "Intersection<"
        for (intersectionTypes) do {it->
            intersectionName := "{intersectionName}&{it.value}"
        }
        intersectionName := intersectionName ++ "&>"
        overallType := ast.asttype(intersectionName, [])
        for (intersectionTypes) do {it->
            overallType.intersectionTypes.push(it)
        }
        subtype.addType(overallType)
    }
    values.push(overallType)
}

// Accept a block
method block {
    if (accept("lbrace")) then {
        next
        var minInd := statementIndent + 1
        var startIndent := statementIndent
        var ident1
        var s := sym
        var tmp
        var params := []
        var body := []
        var havearrow := true
        var found := false
        var i := 0
        var toks := tokens
        statementToken := sym
        ifConsume {expression} then {
            if (accept("comma") | accept("arrow") | accept("colon")) then {
                // This block has parameters
                ident1 := values.pop
                if (accept("colon")) then {
                    // We allow an expression here for the case of v : T
                    // patterns, where T may be "Pair(hd, tl)" or similar.
                    next
                    expression
                    ident1.dtype := values.pop
                }
                params.push(ident1)
                while {accept("comma")} do {
                    // Keep doing the above for the rest of the parameters.
                    next
                    pushidentifier
                    ident1 := values.pop
                    if (accept("colon")) then {
                        next
                        pushidentifier
                        ident1.dtype := values.pop
                    }
                    params.push(ident1)
                }
                if ((accept("arrow")).not) then {
                    util.syntax_error("block parameter list not terminated ->.")
                }
                next
            } elseif (accept("bind")) then {
                var lhs := values.pop
                next
                expression
                var rhs := values.pop
                body.push(ast.astbind(lhs, rhs))
            } else {
                body.push(values.pop)
            }
        }
        if (accept("arrow")) then {
            next
        }
        var ln := values.size
        if (sym.line == lastToken.line) then {
            minIndentLevel := sym.linePos - 1
        } else {
            minIndentLevel := minInd
        }
        while {(accept("rbrace")).not} do {
            // Take the body of the block
            expectConsume {statement}
            tmp := values.pop
            body.push(tmp)
        }
        minIndentLevel := minInd - 1
        statementIndent := startIndent
        next
        var o := ast.astblock(params, body)
        values.push(o)
    }
}
method rewritematchblock(o) {
    var params := o.params
    if (params.size /= 1) then {
        return o
    }
    var body := o.body
    var inbody := body
    var pat
    var tmpp
    var nparams
    var newname := ast.astidentifier("__matchvar" ++ auto_count,
        false)
    auto_count := auto_count + 1
    var fst := params.first
    if (fst.kind == "call") then {
        pat := fst
        tmpp := fst
        params := [newname]
        nparams := []
        for (pat.with) do {p->
            var inname := ast.astidentifier("__matchvar" ++ auto_count, false)
            auto_count := auto_count + 1
            nparams.push(inname)
            inbody := [ast.astcall(
                ast.astmember("apply", rewritematchblock(ast.astblock([p],
                    inbody))), [inname]) ]
        }
        pat := pat.value
        body := [ast.astcall(ast.astmember(
                    "matchmatchesBindingelse",
                    newname),
                [pat, ast.astblock(nparams, inbody),
                ast.astblock([], [
                    ast.astcall(ast.astidentifier("print", false),
                        [ast.aststring("Pattern match failed.")])
                ])])]
    } elseif (fst.kind /= "identifier") then {
        auto_count := auto_count + 1
        pat := fst
        params := [newname]
        body := [ast.astcall(ast.astmember(
                    "matchmatchesBindingelse",
                    newname),
                [pat, ast.astblock([], inbody),
                ast.astblock([], [
                    ast.astcall(ast.astidentifier("print", false),
                        [ast.aststring("Pattern match failed.")])
                ])])]
    } elseif (fst.dtype /= false) then {
        pat := fst.dtype
        tmpp := fst
        if (pat.kind == "call") then {
            nparams := []
            for (pat.with) do {p->
                var inname := ast.astidentifier("__matchvar" ++ auto_count, false)
                auto_count := auto_count + 1
                nparams.push(inname)
                inbody := [ast.astcall(
                    ast.astmember("apply", rewritematchblock(ast.astblock([p],
                        inbody))), [inname]) ]
            }
            pat := pat.value
            body := [ast.astcall(ast.astmember(
                        "matchmatchesBindingelse",
                        tmpp),
                    [pat, ast.astblock(nparams, inbody),
                    ast.astblock([tmpp], [
                        ast.astcall(ast.astidentifier("print", false),
                            [ast.aststring("Pattern match failed.")])
                    ])])]
        } else {
            params := [newname]
            body := [ast.astcall(ast.astmember(
                        "matchmatchesBindingelse",
                        newname),
                    [pat, ast.astblock([tmpp], inbody),
                    ast.astblock([tmpp], [
                        ast.astcall(ast.astidentifier("print", false),
                            [ast.aststring("Pattern match failed.")])
                    ])])]
        }
    }
    o := ast.astblock(params, body)
    return o
}


// Accept an "if" statement. This is a special syntactic case, rather
// than just a call with a multi-part method name - it might be possible
// to change that and compensate later on.
method doif {
    if (accept("identifier") & (sym.value == "if")) then {
        next
        expression
        var cond := values.pop
        var body := []

        // These two are for else/elseif handling. elseif is turned into
        // nested if statements for the AST, so curelse points to the
        // most deeply-nested of those (where any eventual "else" block's
        // statements will go). elseblock contains the statements of the
        // top-level "else" block - if there are any elseifs, that
        // consists of only one statement, another if.
        var elseblock := []
        var curelse := elseblock
        var v
        var localMin
        var minInd := statementIndent + 1
        if (accept("identifier") & (sym.value == "then")) then {
            next
            if (accept("lbrace")) then {
                next
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    statement
                    v := values.pop
                    body.push(v)
                }
                next
            }
            var econd
            var eif
            var newelse
            var ebody
            while {accept("identifier") & (sym.value == "elseif")} do {
                // Currently, the parser just accepts arbitrarily many
                // "elseifs", turning them into ifs inside the else.
                statementToken := sym
                next
                expression
                econd := values.pop
                if ((accept("identifier") &
                    (sym.value == "then")).not) then {
                    util.syntax_error("elseif with no then.")
                }
                next
                ebody := []
                if ((accept("lbrace")).not) then {
                    util.syntax_error("expected \{.")
                }
                next
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    statement
                    v := values.pop
                    ebody.push(v)
                }
                next
                newelse := []
                eif := ast.astif(econd, ebody, newelse)
                // Construct the inner "if" AST node, and then push it
                // inside the current "else" block.
                curelse.push(eif)
                // Update curelse to point to the new, empty, nested
                // else block.
                curelse := newelse
            }
            if (accept("identifier") & (sym.value == "else")) then {
                next
                if (accept("lbrace")) then {
                    // Just take all the statements and put them into
                    // curelse.
                    next
                    if (sym.line == lastToken.line) then {
                        minIndentLevel := sym.linePos - 1
                    } else {
                        minIndentLevel := minInd
                    }
                    while {(accept("rbrace")).not} do {
                        statement
                        v := values.pop
                        curelse.push(v)
                    }
                    next
                }
            }
            minIndentLevel := minInd - 1
            var o := ast.astif(cond, body, elseblock)
            values.push(o)
        } else {
            // Raise an error here, or it will spin nastily forever.
            util.syntax_error("if with no then")
        }
    }
}

// Accept a "for" statement. This is also a syntactic special case
// at the moment. It currently *requires* exactly one parameter.
method dofor {
    if (accept("identifier") & (sym.value == "for")) then {
        next
        var over
        expression
        over := values.pop
        var body := []
        var variable
        var localMin
        var minInd := statementIndent + 1
        if (accept("identifier") & ((sym.value == "each")
            | (sym.value == "do"))) then {
            next
            expect("lbrace")
            block
            var blk := values.pop
            var o := ast.astfor(over, blk)
            values.push(o)
            minIndentLevel := minInd - 1
        } else {
            util.syntax_error("expected 'do'")
        }
    }
}

// Accept a "while" statement as a syntactic special case. There is
// nothing particularly special about it compared to the last two.
method dowhile {
    if (accept("identifier") & (sym.value == "while")) then {
        var minInd := statementIndent + 1
        next
        var cond
        if (accept("lbrace")) then {
            next
            expression
            cond := values.pop
            if (accept("rbrace")) then {
                next
            }
        }
        var body := []
        if (accept("identifier") & (sym.value == "do")) then {
            next
            expect("lbrace")
            next
            if (sym.line == lastToken.line) then {
                minIndentLevel := sym.linePos - 1
            } else {
                minIndentLevel := minInd
            }
            while {(accept("rbrace")).not} do {
                statement
                var v := values.pop
                body.push(v)
            }
            next
            var o := ast.astwhile(cond, body)
            values.push(o)
        }
        minIndentLevel := minInd - 1
    } else {
        util.syntax_error("expected 'do'")
    }
}

// Accept an identifier. Handle "if", "while", and "for" specially by
// passing them on to the appropriate method above.
method identifier {
    if (accept("identifier")) then {
        if (sym.value == "if") then {
            doif
        } elseif (sym.value == "while") then {
            dowhile
        } elseif (sym.value == "for") then {
            dofor
        } else {
            pushidentifier
        }
    }
}

method prefixop {
    if (accept("op")) then {
        var op := sym.value
        var val
        next
        if (accept("lparen")) then {
            next
            if (accept("rparen")) then {
                util.syntax_error("empty () in expression")
            }
            expression
            expect("rparen")
            next
        } else {
            term
        }
        dotrest
        postfixsquare
        callrest
        val := values.pop
        var mem := ast.astmember("prefix" ++ op, val)
        var call := ast.astcall(mem, [])
        values.push(call)
    }
}

// Accept a term. Terms consist only of single syntactic units and
// do not contain any operators or parentheses, unlike expression.
method term {
    if (accept("num")) then {
        pushnum
    } elseif (accept("string")) then {
        pushstring
    } elseif (accept("octets")) then {
        pushoctets
    } elseif (accept("identifier")) then {
        identifier
    } elseif (accept("keyword") & (sym.value == "object")) then {
        doobject
    } elseif (accept("lbrace")) then {
        block
    } elseif (accept("lsquare")) then {
        doarray
    } elseif (accept("op")) then {
        // Prefix operator
        prefixop
    }
}

// Accept an expression. Expressions may consist of parenthesised
// subexpressions or terms, which may be followed by method invocations
// (dotrest), postcircumfix square brackets, the rest of a method call,
// or an operator expression.
method expression {
    if (accept("lparen")) then {
        next
        expression
        expect("rparen")
        next
    } else {
        term
    }
    dotrest
    postfixsquare
    callrest
    expressionrest
}

// Accept postcircumfix square brackets (as in x[y]) and replace the
// preceding expression with an index node into itself.
method postfixsquare {
    if (accept("lsquare")) then {
        next
        var expr := values.pop
        expression
        var index := values.pop
        expect("rsquare")
        next
        var o := ast.astindex(expr, index)
        values.push(o)
    }
}

// Calculate the precedence of an operator. In this case, only
// multiplication and division have nontrivial precedence. Used in
// expressionrest.
method oprec(o) {
    if (o == "*") then {
        return 10
    } elseif (o == "/") then {
        return 10
    }
    return 5
}

// Return the precedence of the operator at the top of the "ops" stack.
method toprec(ops) {
    if (ops.size > 0) then {
        var o := ops.last
        return oprec(o)
    }
    0
}

// Process the rest of an operator expression using the shunting-yard
// algorithm. This method uses the oprec and toprec methods above to
// ensure the correct precedence, and treats all operators as
// left-associative.
method expressionrest {
    if (accept("op")) then {
        var terms := [] // List of operands yet to be used
        var ops := [] // Operator stack
        var o
        var o2
        var tmp2
        var tmp := values.pop
        terms.push(tmp)
        var prec
        var allarith := true // Consists only of arithmetic operators
        var opcount := 0
        var opdtype := "" // The single operator being used in this expression
        while {accept("op")onLineOf(statementToken)} do {
            opcount := opcount + 1
            o := sym.value
            next
            prec := oprec(o)
            if ((o /= "*") & (o /= "/") & (o /= "+") & (o /= "-")) then {
                allarith := false
            }
            if ((opdtype /= "") & (opdtype /= o) & (allarith.not)) then {
                // If: this is not the first operator, it is not the same
                // as the last operator, and the expression has not been
                // entirely arithmetic, raise a syntax error.
                util.syntax_error("mixed operators without parentheses: "
                    ++ opdtype ++ " and " ++ o)
            }
            if (o == "=") then {
                util.syntax_error("bare '=' outside of def declaration")
            }
            opdtype := o
            while {(ops.size > 0) & (prec <= toprec(ops))} do {
                // Do the shunting: for as long as the current operator
                // has lesser or equal precedence than the one on the
                // top of the stack, take the operator off the stack and
                // replace its two operands with the combined operator node.
                // This corresponds to left-associative operators only.
                o2 := ops.pop
                tmp2 := terms.pop
                tmp := terms.pop
                tmp := ast.astop(o2, tmp, tmp2)
                terms.push(tmp)
            }
            ops.push(o)
            if (accept("lparen")) then {
                // When a parenthesis is found, take an expression from
                // *within* the parentheses and add it to the stack. Do
                // not delegate entirely to expression, because it will
                // then consume all the following operators and break
                // precedence. Possibly parenthesised expressions could
                // be allowed in term above?
                next
                if (accept("rparen")) then {
                    util.syntax_error("empty () in expression (maybe empty interpolated \{\} block)")
                }
                expression
                expect("rparen")
                next
            } else {
                term
            }

            // Regardless of where the last value came from, it may have
            // method invocations, indexes, or method call happening to it,
            // which should be applied and the result put into the operands
            // list.
            dotrest
            postfixsquare
            callrest
            tmp := values.pop
            terms.push(tmp)
        }
        while {ops.size > 0} do {
            // Shunt off any remaining operators at the end
            o := ops.pop
            tmp2 := terms.pop
            tmp := terms.pop
            tmp := ast.astop(o, tmp, tmp2)
            terms.push(tmp)
        }
        tmp := terms.pop
        values.push(tmp)
        if (terms.size > 0) then {
            util.syntax_error("values left on term stack")
        }
    }
}

// Accept a member lookup with ".". This consumes the dot and
// a following identifier, and will pass along to further lookups or
// method calls on the result.
method dotrest {
    if (accept("dot")) then {
        var lookuptarget := values.pop
        next
        if (accept("identifier")) then {
            var dro := ast.astmember(sym.value, lookuptarget)
            values.push(dro)
            next
            if (accept("dot")) then {
                dotrest
            } elseif (accept("lparen")) then {
                callrest
            }
        }
    }
}

// Accept a method invocation indicated by parentheses. Unparenthesised
// method calls are left as "member" AST nodes and processed correctly at
// a later stage.
method callrest {
    var meth := values.pop
    var methn
    var tmp
    var ln := false
    var params := []
    var hadcall := false
    var tok := lastToken
    var startInd := minIndentLevel
    if (accept("lparen")) then {
        tok := sym
        hadcall := true
        methn := meth.value
        next
        ifConsume {expression} then {
            while {accept("comma")} do {
                tmp := values.pop
                params.push(tmp)
                next
                expectConsume {expression}
            }
            tmp := values.pop
            params.push(tmp)
        }
        expect("rparen")
        ln := linenum
        next
    } elseif (accept("string")onLineOf(tok) | accept("num")onLineOf(tok)
        | accept("lbrace")onLineOf(tok)
        | (accept("identifier")onLineOf(tok) & ((sym.value == "true")
                                   | (sym.value == "false")))) then {
        tok := sym
        hadcall := true
        methn := meth.value
        ln := linenum
        term
        var ar := values.pop
        params.push(ar)
    } elseif (meth.kind == "identifier") then {
        var bd := findName(meth.value)
        if (bd.kind == "method") then {
            methn := meth.value
            meth := findDeepMethod(methn)
            values.push(meth)
        } else {
            values.push(meth)
        }
    } elseif (meth.kind == "member") then {
        var root := meth.in
        var outroot := meth
        while {root.kind == "member"} do {
            outroot := root
            root := root.in
        }
        if (root.kind == "identifier") then {
            var bd' := findName(root.value)
            if (bd'.kind == "method") then {
                methn := meth.value
                outroot.in := findDeepMethod(root.value)
                values.push(meth)
            } else {
                values.push(meth)
            }
        } else {
            values.push(meth)
        }
    } else {
        values.push(meth)
    }
    if (hadcall) then {
        if (accept("identifier")onLineOfLastOr(tok)) then {
            // Multi-part method name
            methn := callmprest(ast.astidentifier(methn, false), params, tok)
            if (meth.kind == "member") then {
                // callmprest loses this information, so restore
                // the member lookup (for x.between(3)and(10)-type
                // calls).
                meth := ast.astmember(methn.value, meth.in)
            } else {
                meth := methn
            }
        }
        tmp := ast.astcall(meth, params)
        values.push(tmp)
    }
    minIndentLevel := startInd
    dotrest
}

// Process the rest of a multi-part method name. Returns an identifier
// to replace the one passed in, in which each word is joined by "",
// and updates params in place.
method callmprest(meth, params, tok) {
    var methname := meth.value
    var nxt
    var ln := linenum
    var lastparamcount := 0
    while {accept("identifier")onLineOf(tok)
           | accept("identifier")onLineOf(lastToken)} do {
        // Each word must start on the same line as the preceding parameter
        // ended.
        util.runOnNew {
            methname := methname ++ "({params.size - lastparamcount})"
            lastparamcount := params.size
        } else {
            false // XXX Parse bug
            methname := methname ++ "()"
        }
        pushidentifier
        nxt := values.pop
        methname := methname ++ nxt.value
        var isTerm := false
        if ((accept("lparen")).not & (accept("lbrace")).not
            & accept("string").not & accept("num").not) then {
            util.syntax_error("multi-part method name parameters require .")
        }
        if (accept("lbrace")onLineOfLastOr(tok)
            | accept("string")onLineOfLastOr(tok)
            | accept("num")onLineOfLastOr(tok)
            | (accept("identifier")onLineOfLastOr(tok)
                & ((sym.value == "true")
                    | (sym.value == "false")))) then {
            isTerm := true
        } else {
            next
        }
        if (isTerm) then {
            ln := lastline
            term
        } else {
            expression
            while {accept("comma")} do {
                nxt := values.pop
                params.push(nxt)
                next
                expectConsume {expression}
            }
        }
        nxt := values.pop
        params.push(nxt)
        if (isTerm.not) then {
            expect("rparen")
        }
        if (accept("rparen") & isTerm.not) then {
            ln := lastline
            next
        }
    }
    ast.astidentifier(methname, false)
}

// Accept a const declaration
method defdec {
    if (accept("keyword") & (sym.value == "def")) then {
        next
        pushidentifier
        var val := false
        var dtype := DynamicType
        var name := values.pop
        if (accept("colon")) then {
            next
            dotyperef
            dtype := values.pop
        }
        if (accept("op") & (sym.value == "=")) then {
            next
            expression
            val := values.pop
        } elseif (accept("bind")) then {
            util.syntax_error("def declaration uses '=', not ':='")
        } else {
            util.syntax_error("def declaration requires value")
        }
        var o := ast.astdefdec(name, val, dtype)
        values.push(o)
    }
}

// Accept a var declaration
method vardec {
    if (accept("keyword") & (sym.value == "var")) then {
        next
        pushidentifier
        var val := false
        var dtype := DynamicType
        var name := values.pop
        if (accept("colon")) then {
            next
            dotyperef
            dtype := values.pop
        }
        if (accept("bind")) then {
            next
            expression
            val := values.pop
        }
        if (accept("op") & (sym.value == "=")) then {
            util.syntax_error("var declaration uses ':=', not '='")
        }
        var o := ast.astvardec(name, val, dtype)
        values.push(o)
    }
}

// Accept a square-bracketed list literal like [1,2,3].
method doarray {
    if (accept("lsquare")) then {
        next
        var tmp
        var params := []
        ifConsume {expression} then {
            while {accept("comma")} do {
                tmp := values.pop
                params.push(tmp)
                next
                expectConsume {expression}
            }
            tmp := values.pop
            params.push(tmp)
        }
        expect("rsquare")
        var o := ast.astarray(params)
        values.push(o)
        next
    }
}

// Accept an object literal.
method doobject {
    // doobject because "object" is a keyword
    if (accept("keyword") & (sym.value == "object")) then {
        next
        var superclass := false
        if (accept("identifier") & (sym.value == "extends")) then {
            next
            expect("identifier")
            identifier
            var nm := values.pop
            if (accept("dot").not) then {
                util.syntax_error("extends must have .new invocation on right")
            }
            next
            expect("identifier")
            identifier
            var mn := values.pop
            var scargs := []
            if (accept("(")) then {
                next
                while {accept(")").not} do {
                    expectConsume {expression}
                    var tmp := values.pop
                    scargs.push(tmp)
                }
                next
            }
            superclass := ast.astcall(ast.astmember(mn.value, nm), scargs)
        }
        expect("lbrace")
        values.push(object {
            var kind := "lbrace"
            var register := ""
        })
        next
        var sz := values.size
        while {(accept("rbrace")).not} do {
            // An object body contains zero or more var declarations,
            // const declarations, and method declarations. If anything
            // else appears before the closing brace, it is a syntax error.
            vardec
            methoddec
            defdec
            if (values.size == sz) then {
                util.syntax_error("did not consume anything in "
                    ++ "object declaration.")
            }
            sz := values.size
        }
        next
        var rbody := []
        var n := values.pop
        while {n.kind /= "lbrace"} do {
            rbody.push(n)
            n := values.pop
        }
        var body := []
        for (rbody.indices) do { x ->
            // Reorder the list
            var p := rbody.pop
            body.push(p)
        }
        var o := ast.astobject(body, superclass)
        values.push(o)
    }
}

// Accept a class declaration
// Class declarations are currently of the form:
//   class classname [extends Foo.new(...)] { param1, param2 ->
//     var x
//     method y(z) { ... }
//   }
method doclass {
    if (accept("keyword") & (sym.value == "class")) then {
        next
        expect("identifier")
        pushidentifier // A class currently cannot be anonymous
        var superclass := false
        if (accept("identifier") & (sym.value == "extends")) then {
            next
            expect("identifier")
            identifier
            var nm := values.pop
            if (accept("dot").not) then {
                util.syntax_error("extends must have .new invocation on right")
            }
            next
            expect("identifier")
            identifier
            var mn := values.pop
            var scargs := []
            if (accept("lparen")) then {
                next
                while {accept("rparen").not} do {
                    expectConsume {expression}
                    var tmp := values.pop
                    scargs.push(tmp)
                }
                next
            }
            superclass := ast.astcall(ast.astmember(mn.value, nm), scargs)
        }
        var cname := values.pop
        if (accept("lbrace")) then {
            values.push(object {
                var kind := "lbrace"
                var register := ""
            })
            next
            var params := []
            if (accept("identifier")) then {
                // We have a parameter list, because everything else that
                // can appear first in a class body is a keyword.
                pushidentifier
                var pid := values.pop
                if (accept("colon")) then {
                    next
                    pushidentifier
                    pid.dtype := values.pop
                }
                params.push(pid)
                while {accept("comma")} do {
                    next
                    pushidentifier
                    pid := values.pop
                    if (accept("colon")) then {
                        next
                        pushidentifier
                        pid.dtype := values.pop
                    }
                    params.push(pid)
                }
                if (accept("arrow")) then {
                    next
                } else {
                    util.syntax_error("expected ->.")
                }
            }
            var sz := values.size
            while {(accept("rbrace")).not} do {
                // Body of the class, the same as the body of an object.
                vardec
                methoddec
                defdec
                if (values.size == sz) then {
                    util.syntax_error("did not consume anything in "
                        ++ "class declaration.")
                }
                sz := values.size
            }
            next
            var rbody := []
            var n := values.pop
            while {n.kind /= "lbrace"} do {
                rbody.push(n)
                n := values.pop
            }
            var body := []
            for (rbody.indices) do { x ->
                var p := rbody.pop
                body.push(p)
            }
            var o := ast.astclass(cname, params, body, superclass)
            values.push(o)
        } else {
            util.syntax_error("class definition without body")
        }
    }
}

// Process the declaration of a multi-part method name. These follow
// mostly the same rules as calls, but aren't strictly enforced to be on
// a single line (because they are ended by "{" or "->"). This method
// returns a replacement method name identifier and modifies params in
// place.
method parsempmndecrest(tm) {
    var methname := tm.value.value
    def params = tm.params
    var lastparamcount := 0
    var nxt
    var varargs := false
    while {accept("identifier")} do {
        if (varargs) then {
            util.syntax_error("varargs parameter must be last.")
        }
        util.runOnNew {
            methname := methname ++ "({params.size - lastparamcount})"
            lastparamcount := params.size
        } else {
            false // XXX Parse bug
            methname := methname ++ "()"
        }
        pushidentifier
        nxt := values.pop
        methname := methname ++ nxt.value
        if ((accept("lparen")).not) then {
            util.syntax_error("multi-part method name parameters require .")
        }
        next
        while {accept("identifier")
                | (accept("op") & (sym.value == "*"))} do {
            if (varargs) then {
                util.syntax_error("varargs parameter must be last.")
            }
            if (accept("op")) then {
                next
                varargs := true
                expect("identifier")
            }
            pushidentifier
            nxt := values.pop
            if (accept("colon")) then {
                next
                pushidentifier
                var tp := values.pop
                nxt.dtype := tp
            }
            if (varargs) then {
                tm.vararg := nxt
                tm.varargs := true
                expect("rparen")
            } else {
                params.push(nxt)
            }
            if (accept("comma")) then {
                next
            }
        }
        expect("rparen")
        next
    }
    ast.astidentifier(methname, false)
}

// Accept a method declaration
method methoddec {
    if (accept("keyword") & (sym.value == "method")) then {
        next
        expect("identifier")or("op")
        pushidentifier
        var meth := values.pop
        if (accept("bind")) then {
            next
            meth.value := meth.value ++ ":="
        } elseif (accept("op") & (meth.value == "prefix")) then {
            meth.value := meth.value ++ sym.value
            next
        }
        var rparams := []
        var params := []
        var dtype := false
        var varargs := false
        var vararg := false
        if (accept("lparen")) then {
            next
            var id
            while {accept("identifier") |
                    (accept("op") & (sym.value == "*"))} do {
                // Parse the parameter list, including optional dtype
                // annotations.
                if (accept("op")) then {
                    next
                    varargs := true
                }
                pushidentifier
                id := values.pop
                dtype := false
                if (accept("colon")) then {
                    next
                    if (accept("identifier")) then {
                        dotyperef
                        dtype := values.pop
                    } else {
                        util.syntax_error("expected type after :.")
                    }
                }
                id.dtype := dtype
                if (varargs) then {
                    vararg := id
                    expect("rparen")
                } else {
                    params.push(id)
                }
                if (accept("comma")) then {
                    next
                } elseif ((accept("rparen")).not) then {
                    util.syntax_error("expected comma or rparen.")
                }
            }
            expect("rparen")
            next
            if (accept("identifier")) then {
                // The presence of an identifier here means
                // a multi-part method name.
                var tm := ast.astmethod(meth, params, [], false)
                meth := parsempmndecrest(tm)
                varargs := tm.varargs
                vararg := tm.vararg
            }
        }
        if (accept("arrow")) then {
            // Return dtype
            next
            dotyperef
            dtype := values.pop
        } else {
            dtype := false
        }
        var body := []
        var stok := sym
        var localMin
        if (accept("lbrace")) then {
            next
            localMin := minIndentLevel
            if (sym.line == stok.line) then {
                minIndentLevel := sym.linePos - 1
            } else {
                minIndentLevel := stok.indent + 1
            }
            values.push(object {
                var kind := "lbrace"
                var register := ""
            })
            statement
            var s := values.pop
            while {s.kind /= "lbrace"} do {
                // The body is a sequence of statements, and
                // the method ends when no further statement
                // is found.
                body.push(s)
                statement
                s := values.pop
            }
            if (accept("rbrace")) then {
                next
            } else {
                util.syntax_error("No statement but not end of "
                    ++ meth.value ++ ". Have " ++ sym.kind ++ ".")
            }
            minIndentLevel := localMin
        } else {
            util.syntax_error("No body in method declaration for " ++
                meth.value)
        }
        var o := ast.astmethod(meth, params, body, dtype)
        if (varargs) then {
            o.varargs := true
            o.vararg := vararg
        }
        values.push(o)
    }
}

// Accept an import statement. import takes a single identifier
// following, as in "import parser".
method doimport {
    if (accept("keyword") & (sym.value == "import")) then {
        next
        expect("identifier")
        identifier
        var p := values.pop
        var o := ast.astimport(p)
        values.push(o)
    }
}

// Accept a return statement. return takes a mandatory argument,
// of the form "return x". x may be any expression.
method doreturn {
    if (accept("keyword") & (sym.value == "return")) then {
        next
        expectConsume {expression}
        var p := values.pop
        var o := ast.astreturn(p)
        values.push(o)
    }
}

method domethodtype {
    pushidentifier
    var id := values.pop
    var mn := id.value
    if (accept("bind")) then {
        mn := "{mn}:="
    }
    var rtype := ast.astidentifier("Unit", false)
    var params := []
    var lastparamcount := 0
    while {accept("lparen")} do {
        next
        while {accept("identifier")} do {
            pushidentifier
            var prm := values.pop
            if (accept("colon")) then {
                next
                dotyperef
                var tp := values.pop
                prm.dtype := tp
            }
            params.push(prm)
            if (accept("comma")) then {
                next
            }
        }
        expect("rparen")
        next
        if (accept("identifier")) then {
            pushidentifier
            util.runOnNew {
                mn := "{mn}({params.size - lastparamcount}){values.pop.value}"
                lastparamcount := params.size
            } else {
                false // XXX Parse bug
                mn := mn ++ "()" ++ values.pop.value
            }
        }
    }
    if (accept("arrow")) then {
        next
        expect("identifier")
        dotyperef
        rtype := values.pop
    }
    values.push(ast.astmethodtype(mn, params, rtype))
}

// Accept a type declaration.
method dotype {
    if (accept("keyword") & (sym.value == "type")) then {
        next
        expect("identifier")
        pushidentifier
        var p := values.pop
        expect("op")
        if (sym.value /= "=") then {
            util.syntax_error("type declarations require =.")
        }
        next
        def methods = []
        expect("lbrace")
        next
        while {accept("rbrace").not} do {
            expectConsume {domethodtype}
            methods.push(values.pop)
        }
        next
        values.push(ast.asttype(p.value, methods))
    }
}

// Accept a statement. A statement is any of the above that may exist
// at the top level, and includes expressions.
// A statement may also be a bind statement x := y, which creates a
// bind AST node out of the expressions on either side (which at this point
// can be any arbitrary expression).
method statement {
    statementIndent := sym.indent
    statementToken := sym
    if (indentFreePass) then {
        indentFreePass := false
    } elseif ((sym.kind == "rbrace") | (sym.kind == "rparen")
        | (sym.kind == "rsquare")) then {
        // pass
    } elseif (sym.indent < minIndentLevel) then {
        if ((sym.linePos - 1) /= minIndentLevel) then {
            util.syntax_error("block and indentation inconsistent "
                ++ "for token " ++ sym.kind ++ ": " ++ sym.value ++ "; "
                ++ "indentation is " ++ sym.indent ++ ", must be at least "
                ++ minIndentLevel)
        }
    } elseif (sym.indent > minIndentLevel) then {
        minIndentLevel := sym.indent
    }
    if (accept("keyword")) then {
        if (sym.value == "var") then {
            vardec
        } elseif (sym.value == "def") then {
            defdec
        } elseif (sym.value == "const") then {
            util.syntax_error("no such keyword const; did you mean def?")
        } elseif (sym.value == "method") then {
            methoddec
        } elseif (sym.value == "import") then {
            doimport
        } elseif (sym.value == "type") then {
            dotype
        } elseif (sym.value == "class") then {
            doclass
        } elseif (sym.value == "return") then {
            doreturn
        } else {
            expression
        }
    } else {
        expression
        if (accept("bind")) then {
            var dest := values.pop
            next
            expression
            var val := values.pop
            var o := ast.astbind(dest, val)
            if (dest.kind == "call") then {
                if (dest.value.kind /= "member") then {
                    util.syntax_error("assignment to method call")
                }
            }
            values.push(o)
        }
    }
    if (accept("semicolon")) then {
        def oldLine = sym.line
        next
        if (sym.line == oldLine) then {
            indentFreePass := true
        }
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
        return tpbd.value
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
        return ast.astcall(findDeepMethod(nm), [])
    }
    node
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
    if (node.kind == "op") then {
        return ast.astop(node.value, resolveIdentifiers(node.left),
            resolveIdentifiers(node.right))
    }
    if (node.kind == "call") then {
        var p := resolveIdentifiers(node.value)
        if (p.kind == "call") then {
            return ast.astcall(p.value,
                resolveIdentifiersList(node.with))
        }
        return ast.astcall(p,
            resolveIdentifiersList(node.with))
    }
    if (node.kind == "member") then {
        tmp := resolveIdentifiers(node.in)
        return ast.astmember(node.value, tmp)
    }
    if (node.kind == "method") then {
        pushScope
        for (node.params) do {e->
            bindIdentifier(e)
        }
        tmp2 := resolveIdentifiersList(node.params)
        if (node.varargs) then {
            bindIdentifier(node.vararg)
        }
        tmp4 := resolveIdentifiers(node.dtype)
        def oldReturnType = currentReturnType
        currentReturnType := findType(tmp4)
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
        tmp.vararg := node.vararg
        return tmp
    }
    if (node.kind == "block") then {
        pushScope
        for (node.params) do {e->
            bindIdentifier(e)
        }
        l := resolveIdentifiersList(node.body)
        popScope
        tmp := ast.astblock(node.params, l)
        return tmp
    }
    if (node.kind == "object") then {
        tmp := {
            scopes.last.put("___is_object", Binding.new("yes"))
            scopes.last.put("outer", Binding.new("method"))
        }
        l := resolveIdentifiersList(node.value)withBlock(tmp)
        tmp2 := ast.astobject(l,
            resolveIdentifiers(node.superclass))
        return tmp2
    }
    if (node.kind == "class") then {
        pushScope
        tmp := {
            scopes.last.put("___is_object", Binding.new("yes"))
            scopes.last.put("___is_class", Binding.new("yes"))
            scopes.last.put("outer", Binding.new("method"))
        }
        for (node.params) do { e->
            bindIdentifier(e)
        }
        tmp2 := resolveIdentifiersList(node.value)withBlock(tmp)
        tmp3 := resolveIdentifiersList(node.params)
        node := ast.astclass(node.name, tmp3,
            tmp2,
            resolveIdentifiers(node.superclass))
        popScope
    }
    if (node.kind == "bind") then {
        tmp := resolveIdentifiers(node.dest)
        tmp2 := resolveIdentifiers(node.value)
        if (tmp.kind == "identifier") then {
            tmp3 := findName(tmp.value)
            if (tmp3.kind == "def") then {
                util.syntax_error("reassignment to constant {tmp.value}")
            } elseif (tmp3.kind == "method") then {
                util.syntax_error("assignment to method {node.dest.value}")
            } elseif (tmp3.kind == "undef") then {
                util.syntax_error("assignment to undeclared {tmp.value}")
            }
            if (conformsType(expressionType(tmp2))to(tmp.dtype).not) then {
                util.type_error("assigning value of nonconforming type "
                    ++ "{expressionType(tmp2).value} to var of type "
                    ++ "{tmp.dtype.value}")
            }
        } elseif ((tmp.kind == "call") & (node.kind /= "call")) then {
            tmp := tmp.value
        }
        if ((tmp /= node.dest) | (tmp2 /= node.value)) then {
            return ast.astbind(tmp, tmp2)
        }
    }
    if (node.kind == "type") then {
        if (node.unionTypes.size > 0) then {
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
            if (conformsType(expressionType(tmp2))to(tmp3).not) then {
                util.type_error("initialising var of type "
                    ++ "{tmp3.value} with expression of type "
                    ++ expressionType(tmp2).value)
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
        if (conformsType(expressionType(tmp2))to(tmp3).not) then {
            util.type_error("initialising def of type "
                ++ "{tmp3.value} with expression of type "
                ++ expressionType(tmp2).value)
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
        } elseif (e.kind == "vardec") then {
            tpb := findType(e.dtype)
            if (tpb.kind /= "type") then {
                util.type_error("declared type of {e.name.value}, '{e.dtype.value}', not a type")
            }
            tmp := Binding.new("var")
            tmp.dtype := tpb
            bindName(e.name.value, tmp)
        } elseif (e.kind == "defdec") then {
            tpb := findType(e.dtype)
            if (tpb.kind /= "type") then {
                util.type_error("declared type of {e.name.value}, '{e.dtype.value}', not a type")
            }
            tmp := Binding.new("def")
            tmp.dtype := tpb
            bindName(e.name.value, tmp)
        } elseif (e.kind == "method") then {
            bindName(e.value.value, Binding.new("method"))
        } elseif (e.kind == "class") then {
            tmp := Binding.new("def")
            tmp.dtype := DynamicType
            bindName(e.name.value, tmp)
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

// Parse the given list of tokens, returning a list of AST nodes
// corresponding to it.
method parse(toks) {
    util.log_verbose("processing tokens.")
    var otoks := toks
    sym := toks.first
    tokens := []
    for (otoks.indices) do { i ->
        var o := otoks.pop
        tokens.push(o)
    }
    util.log_verbose("parsing.")
    var btmp
    bindName("print", Binding.new("method"))
    bindName("length", Binding.new("method"))
    bindName("escapestring", Binding.new("method"))
    bindName("HashMap", Binding.new("def"))
    bindName("true", Binding.new("def"))
    bindName("false", Binding.new("def"))
    bindName("self", Binding.new("def"))
    bindName("raise", Binding.new("method"))
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
    subtype.addType(DynamicType)
    subtype.addType(NumberType)
    subtype.addType(StringType)
    subtype.addType(BooleanType)
    pushScope
    linenum := 1
    next
    var oldlength := tokens.size + 0
    if (tokens.size == 0) then {
        // Single token is ignored otherwise
        statement
    }
    while {tokens.size > 0} do {
        statement
        if (tokens.size == oldlength) then {
            var nxtToks := ""
            for (0..5) do {i->
                if (i < tokens.size) then {
                    var t := tokens.at(tokens.size - i)
                    nxtToks := nxtToks ++ t.kind ++ ": " ++ t.value ++ ", "
                }
            }
            var lstAST := ""
            for (0..1) do {i->
                if (values.size > 0) then {
                    var t := values.pop
                    print(t.kind)
                    print(t.pretty(2))
                    lstAST := t.pretty(1) ++ "\n" ++ lstAST
                }
            }
            util.syntax_error("No token consumed. Have " ++ sym.kind
                ++ ": " ++ sym.value ++ ". Recent AST:\n"
                ++ lstAST ++ "\nNext tokens: " ++ nxtToks)
        }
        oldlength := tokens.size + 0
    }
    popScope
    resolveIdentifiersList(values)
}
