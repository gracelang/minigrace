import io
import ast
import util

var lastline := 0
var linenum := 0
var lastIndent := 0
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
method next() {
    lastToken := sym
    if (tokens.size > 0) then {
        lastline := linenum
        lastIndent := sym.indent
        sym := tokens.pop()
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

class Binding { kind' ->
    var kind := kind'
    var type := "unknown"
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
    var mem := ast.astidentifier("self")
    var lv := scopes.indices.last
    var min := scopes.indices.first
    while {scopes.at(lv).contains(name).not} do {
        if (scopes.at(lv).contains("___is_object")) then {
            mem := ast.astmember("outer", mem)
        }
        lv := lv - 1
        if (lv == min) then {
            return ast.astidentifier(name)
        }
    }
    ast.astmember(name, mem)
}

method pushScope() {
    var scope := HashMap.new
    scopes.push(scope)
}

method popScope() {
    scopes.pop
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
        scopes.last.put(ident.value, Binding.new("var"))
    }
}

// Push the current token onto the output stack as a number
method pushnum() {
    var o := ast.astnum(sym.value)
    values.push(o)
    next()
}

// Push the current token onto the output stack as an octet literal
method pushoctets() {
    var o := ast.astoctets(sym.value)
    values.push(o)
    next()
}

// Push the current token onto the output stack as a string
method pushstring() {
    var o := ast.aststring(sym.value)
    values.push(o)
    next()
}

// Push the current token onto the output stack as an identifier.
// false means that this identifier has not been assigned a type (yet).
method pushidentifier() {
    var o := ast.astidentifier(sym.value, false)
    if (o.value == "_") then {
        o.value := "__" ++ auto_count
        auto_count := auto_count + 1
    }
    values.push(o)
    next()
}

// Accept a block
method block() {
    if (accept("lbrace")) then {
        next()
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

        ifConsume({expression()}) then {
            if (accept("comma") | accept("arrow") | accept("colon")) then {
                // This block has parameters
                ident1 := values.pop()
                if (accept("colon")) then {
                    // We allow an expression here for the case of v : T
                    // patterns, where T may be "Pair(hd, tl)" or similar.
                    next()
                    expression()
                    ident1.type := values.pop()
                }
                params.push(ident1)
                while {accept("comma")} do {
                    // Keep doing the above for the rest of the parameters.
                    next()
                    pushidentifier()
                    ident1 := values.pop()
                    if (accept("colon")) then {
                        next()
                        pushidentifier()
                        ident1.type := values.pop()
                    }
                    params.push(ident1)
                }
                if ((accept("arrow")).not) then {
                    util.syntax_error("block parameter list not terminated ->.")
                }
                next()
            } elseif (accept("bind")) then {
                var lhs := values.pop
                next()
                expression()
                var rhs := values.pop
                body.push(ast.astbind(lhs, rhs))
            } else {
                body.push(values.pop)
            }
        }
        if (accept("arrow")) then {
            next()
        }
        var ln := values.size
        if (sym.line == lastToken.line) then {
            minIndentLevel := sym.linePos - 1
        } else {
            minIndentLevel := minInd
        }
        while {(accept("rbrace")).not} do {
            // Take the body of the block
            expectConsume({statement()})
            tmp := values.pop()
            body.push(tmp)
        }
        minIndentLevel := minInd - 1
        statementIndent := startIndent
        next()
        var o := ast.astblock(params, body)
        o := rewritematchblock(o)
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
                    "match()matchesBinding()else",
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
                    "match()matchesBinding()else",
                    newname),
                [pat, ast.astblock([], inbody),
                ast.astblock([], [
                    ast.astcall(ast.astidentifier("print", false),
                        [ast.aststring("Pattern match failed.")])
                ])])]
    } elseif (fst.type /= false) then {
        pat := fst.type
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
                        "match()matchesBinding()else",
                        tmpp),
                    [pat, ast.astblock(nparams, inbody),
                    ast.astblock([tmpp], [
                        ast.astcall(ast.astidentifier("print", false),
                            [ast.aststring("Pattern match failed.")])
                    ])])]
        } else {
            params := [newname]
            body := [ast.astcall(ast.astmember(
                        "match()matchesBinding()else",
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
method doif() {
    if (accept("identifier") & (sym.value == "if")) then {
        next()
        expression()
        var cond := values.pop()
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
            next()
            if (accept("lbrace")) then {
                next()
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    statement()
                    v := values.pop()
                    body.push(v)
                }
                next()
            }
            var econd
            var eif
            var newelse
            var ebody
            while {accept("identifier") & (sym.value == "elseif")} do {
                // Currently, the parser just accepts arbitrarily many
                // "elseifs", turning them into ifs inside the else.
                statementToken := sym
                next()
                expression()
                econd := values.pop()
                if ((accept("identifier") &
                    (sym.value == "then")).not) then {
                    util.syntax_error("elseif with no then.")
                }
                next()
                ebody := []
                if ((accept("lbrace")).not) then {
                    util.syntax_error("expected \{.")
                }
                next()
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    statement()
                    v := values.pop()
                    ebody.push(v)
                }
                next()
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
                next()
                if (accept("lbrace")) then {
                    // Just take all the statements and put them into
                    // curelse.
                    next()
                    if (sym.line == lastToken.line) then {
                        minIndentLevel := sym.linePos - 1
                    } else {
                        minIndentLevel := minInd
                    }
                    while {(accept("rbrace")).not} do {
                        statement()
                        v := values.pop()
                        curelse.push(v)
                    }
                    next()
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
method dofor() {
    if (accept("identifier") & (sym.value == "for")) then {
        next()
        var over
        expression()
        over := values.pop()
        var body := []
        var variable
        var localMin
        var minInd := statementIndent + 1
        if (accept("identifier") & ((sym.value == "each")
            | (sym.value == "do"))) then {
            next()
            expect("lbrace")
            block()
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
method dowhile() {
    if (accept("identifier") & (sym.value == "while")) then {
        var minInd := statementIndent + 1
        next()
        var cond
        if (accept("lbrace")) then {
            next()
            expression()
            cond := values.pop()
            if (accept("rbrace")) then {
                next()
            }
        }
        var body := []
        if (accept("identifier") & (sym.value == "do")) then {
            next()
            expect("lbrace")
            next()
            if (sym.line == lastToken.line) then {
                minIndentLevel := sym.linePos - 1
            } else {
                minIndentLevel := minInd
            }
            while {(accept("rbrace")).not} do {
                statement()
                var v := values.pop()
                body.push(v)
            }
            next()
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
method identifier() {
    if (accept("identifier")) then {
        if (sym.value == "if") then {
            doif()
        } elseif (sym.value == "while") then {
            dowhile()
        } elseif (sym.value == "for") then {
            dofor()
        } else {
            pushidentifier()
        }
    }
}

method prefixop() {
    if (accept("op")) then {
        var op := sym.value
        var val
        next()
        if (accept("lparen")) then {
            next()
            expression()
            expect("rparen")
            next()
            val := values.pop()
        } else {
            term()
            val := values.pop()
        }
        var mem := ast.astmember("prefix" ++ op, val)
        var call := ast.astcall(mem, [])
        values.push(call)
    }
}

// Accept a term. Terms consist only of single syntactic units and
// do not contain any operators or parentheses, unlike expression.
method term() {
    if (accept("num")) then {
        pushnum()
    } elseif (accept("string")) then {
        pushstring()
    } elseif (accept("octets")) then {
        pushoctets()
    } elseif (accept("identifier")) then {
        identifier()
    } elseif (accept("keyword") & (sym.value == "object")) then {
        doobject()
    } elseif (accept("lbrace")) then {
        block()
    } elseif (accept("lsquare")) then {
        doarray()
    } elseif (accept("op")) then {
        // Prefix operator
        prefixop()
    }
}

// Accept an expression. Expressions may consist of parenthesised
// subexpressions or terms, which may be followed by method invocations
// (dotrest), postcircumfix square brackets, the rest of a method call,
// or an operator expression.
method expression() {
    if (accept("lparen")) then {
        next()
        expression()
        expect("rparen")
        next()
    } else {
        term()
    }
    dotrest()
    postfixsquare()
    callrest()
    expressionrest()
}

// Accept postcircumfix square brackets (as in x[y]) and replace the
// preceding expression with an index node into itself.
method postfixsquare() {
    if (accept("lsquare")) then {
        next()
        var expr := values.pop()
        expression()
        var index := values.pop()
        expect("rsquare")
        next()
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
// algorithm. This method uses the oprec() and toprec() methods above to
// ensure the correct precedence, and treats all operators as
// left-associative.
method expressionrest() {
    if (accept("op")) then {
        var terms := [] // List of operands yet to be used
        var ops := [] // Operator stack
        var o
        var o2
        var tmp2
        var tmp := values.pop()
        terms.push(tmp)
        var prec
        var allarith := true // Consists only of arithmetic operators
        var opcount := 0
        var optype := "" // The single operator being used in this expression
        while {accept("op")onLineOf(statementToken)} do {
            opcount := opcount + 1
            o := sym.value
            next()
            prec := oprec(o)
            if ((o /= "*") & (o /= "/") & (o /= "+") & (o /= "-")) then {
                allarith := false
            }
            if ((optype /= "") & (optype /= o) & (allarith.not)) then {
                // If: this is not the first operator, it is not the same
                // as the last operator, and the expression has not been
                // entirely arithmetic, raise a syntax error.
                util.syntax_error("mixed operators without parentheses: "
                    ++ optype ++ " and " ++ o)
            }
            optype := o
            while {(ops.size > 0) & (prec <= toprec(ops))} do {
                // Do the shunting: for as long as the current operator
                // has lesser or equal precedence than the one on the
                // top of the stack, take the operator off the stack and
                // replace its two operands with the combined operator node.
                // This corresponds to left-associative operators only.
                o2 := ops.pop()
                tmp2 := terms.pop()
                tmp := terms.pop()
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
                // be allowed in term() above?
                next()
                expression()
                expect("rparen")
                next()
            } else {
                term()
            }

            // Regardless of where the last value came from, it may have
            // method invocations, indexes, or method call happening to it,
            // which should be applied and the result put into the operands
            // list.
            dotrest()
            postfixsquare()
            callrest()
            tmp := values.pop()
            terms.push(tmp)
        }
        while {ops.size > 0} do {
            // Shunt off any remaining operators at the end
            o := ops.pop()
            tmp2 := terms.pop
            tmp := terms.pop
            tmp := ast.astop(o, tmp, tmp2)
            terms.push(tmp)
        }
        tmp := terms.pop()
        values.push(tmp)
        if (terms.size > 0) then {
            util.syntax_error("values left on term stack")
        }
    }
}

// Accept a member lookup with ".". This consumes the dot and
// a following identifier, and will pass along to further lookups or
// method calls on the result.
method dotrest() {
    if (accept("dot")) then {
        var lookuptarget := values.pop()
        next()
        if (accept("identifier")) then {
            var dro := ast.astmember(sym.value, lookuptarget)
            values.push(dro)
            next()
            if (accept("dot")) then {
                dotrest()
            } elseif (accept("lparen")) then {
                callrest()
            }
        }
    }
}

// Accept a method invocation indicated by parentheses. Unparenthesised
// method calls are left as "member" AST nodes and processed correctly at
// a later stage.
method callrest() {
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
        next()
        ifConsume({expression()}) then {
            while {accept("comma")} do {
                tmp := values.pop()
                params.push(tmp)
                next()
                expectConsume({expression()})
            }
            tmp := values.pop()
            params.push(tmp)
        }
        expect("rparen")
        ln := linenum
        next()
    } elseif (accept("string")onLineOf(tok) | accept("num")onLineOf(tok)
        | accept("lbrace")onLineOf(tok)
        | (accept("identifier")onLineOf(tok) & ((sym.value == "true")
                                   | (sym.value == "false")))) then {
        tok := sym
        hadcall := true
        methn := meth.value
        ln := linenum
        term()
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
    dotrest()
}

// Process the rest of a multi-part method name. Returns an identifier
// to replace the one passed in, in which each word is joined by "()",
// and updates params in place.
method callmprest(meth, params, tok) {
    var methname := meth.value
    var nxt
    var ln := linenum
    while {accept("identifier")onLineOf(tok)
           | accept("identifier")onLineOf(lastToken)} do {
        // Each word must start on the same line as the preceding parameter
        // ended.
        methname := methname ++ "()"
        pushidentifier()
        nxt := values.pop
        methname := methname ++ nxt.value
        var isTerm := false
        if ((accept("lparen")).not & (accept("lbrace")).not
            & accept("string").not & accept("num").not) then {
            util.syntax_error("multi-part method name parameters require ().")
        }
        if (accept("lbrace")onLineOfLastOr(tok)
            | accept("string")onLineOfLastOr(tok)
            | accept("num")onLineOfLastOr(tok)
            | (accept("identifier")onLineOfLastOr(tok)
                & ((sym.value == "true")
                    | (sym.value == "false")))) then {
            isTerm := true
        } else {
            next()
        }
        if (isTerm) then {
            ln := lastline
            term()
        } else {
            expression()
            while {accept("comma")} do {
                nxt := values.pop
                params.push(nxt)
                next()
                expectConsume({expression()})
            }
        }
        nxt := values.pop()
        params.push(nxt)
        if (isTerm.not) then {
            expect("rparen")
        }
        if (accept("rparen") & isTerm.not) then {
            ln := lastline
            next()
        }
    }
    ast.astidentifier(methname, false)
}

// Accept a const declaration
method constdec() {
    if (accept("keyword") & (
            (sym.value == "const")
            | (sym.value == "def"))) then {
        next()
        pushidentifier()
        var val := false
        var type := false
        var name := values.pop()
        if (accept("colon")) then {
            next()
            identifier()
            type := values.pop()
        }
        if (accept("bind") | (accept("op") & (sym.value == "="))) then {
            next()
            expression()
            val := values.pop()
        } else {
            util.syntax_error("const declaration requires value")
        }
        var o := ast.astconstdec(name, val, type)
        values.push(o)
    }
}

// Accept a var declaration
method vardec() {
    if (accept("keyword") & (sym.value == "var")) then {
        next()
        pushidentifier()
        var val := false
        var type := false
        var name := values.pop()
        if (accept("colon")) then {
            next()
            identifier()
            type := values.pop()
        }
        if (accept("bind")) then {
            next()
            expression()
            val := values.pop()
        }
        var o := ast.astvardec(name, val, type)
        values.push(o)
    }
}

// Accept a square-bracketed list literal like [1,2,3].
method doarray() {
    if (accept("lsquare")) then {
        next()
        var tmp
        var params := []
        ifConsume({expression()}) then {
            while {accept("comma")} do {
                tmp := values.pop()
                params.push(tmp)
                next()
                expectConsume({expression()})
            }
            tmp := values.pop()
            params.push(tmp)
        }
        expect("rsquare")
        var o := ast.astarray(params)
        values.push(o)
        next()
    }
}

// Accept an object literal.
method doobject() {
    // doobject because "object" is a keyword
    if (accept("keyword") & (sym.value == "object")) then {
        next()
        var superclass := false
        if (accept("identifier") & (sym.value == "extends")) then {
            next()
            expect("identifier")
            identifier()
            var nm := values.pop
            if (accept("dot").not) then {
                util.syntax_error("extends must have .new invocation on right")
            }
            next()
            expect("identifier")
            identifier()
            var mn := values.pop
            var scargs := []
            if (accept("(")) then {
                next()
                while {accept(")").not} do {
                    expectConsume({expression()})
                    var tmp := values.pop
                    scargs.push(tmp)
                }
                next()
            }
            superclass := ast.astcall(ast.astmember(mn.value, nm), scargs)
        }
        expect("lbrace")
        values.push(object {
            var kind := "lbrace"
            var register := ""
        })
        next()
        var sz := values.size()
        while {(accept("rbrace")).not} do {
            // An object body contains zero or more var declarations,
            // const declarations, and method declarations. If anything
            // else appears before the closing brace, it is a syntax error.
            vardec()
            methoddec()
            constdec()
            if (values.size == sz) then {
                util.syntax_error("did not consume anything in "
                    ++ "object declaration.")
            }
            sz := values.size
        }
        next()
        var rbody := []
        var n := values.pop()
        while {n.kind /= "lbrace"} do {
            rbody.push(n)
            n := values.pop()
        }
        var body := []
        for (rbody.indices) do { x ->
            // Reorder the list
            var p := rbody.pop()
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
method doclass() {
    if (accept("keyword") & (sym.value == "class")) then {
        next()
        expect("identifier")
        pushidentifier() // A class currently cannot be anonymous
        var superclass := false
        if (accept("identifier") & (sym.value == "extends")) then {
            next()
            expect("identifier")
            identifier()
            var nm := values.pop
            if (accept("dot").not) then {
                util.syntax_error("extends must have .new invocation on right")
            }
            next()
            expect("identifier")
            identifier()
            var mn := values.pop
            var scargs := []
            if (accept("lparen")) then {
                next()
                while {accept("rparen").not} do {
                    expectConsume({expression()})
                    var tmp := values.pop
                    scargs.push(tmp)
                }
                next()
            }
            superclass := ast.astcall(ast.astmember(mn.value, nm), scargs)
        }
        var cname := values.pop()
        if (accept("lbrace")) then {
            values.push(object {
                var kind := "lbrace"
                var register := ""
            })
            next()
            var params := []
            if (accept("identifier")) then {
                // We have a parameter list, because everything else that
                // can appear first in a class body is a keyword.
                pushidentifier()
                var pid := values.pop()
                if (accept("colon")) then {
                    next()
                    pushidentifier()
                    pid.type := values.pop()
                }
                params.push(pid)
                while {accept("comma")} do {
                    next()
                    pushidentifier()
                    pid := values.pop()
                    if (accept("colon")) then {
                        next()
                        pushidentifier()
                        pid.type := values.pop()
                    }
                    params.push(pid)
                }
                if (accept("arrow")) then {
                    next()
                } else {
                    util.syntax_error("expected ->.")
                }
            }
            var sz := values.size()
            while {(accept("rbrace")).not} do {
                // Body of the class, the same as the body of an object.
                vardec()
                methoddec()
                constdec()
                if (values.size == sz) then {
                    util.syntax_error("did not consume anything in "
                        ++ "class declaration.")
                }
                sz := values.size
            }
            next()
            var rbody := []
            var n := values.pop()
            while {n.kind /= "lbrace"} do {
                rbody.push(n)
                n := values.pop()
            }
            var body := []
            for (rbody.indices) do { x ->
                var p := rbody.pop()
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
    const params := tm.params
    var nxt
    var varargs := false
    while {accept("identifier")} do {
        if (varargs) then {
            util.syntax_error("varargs parameter must be last.")
        }
        methname := methname ++ "()"
        pushidentifier()
        nxt := values.pop
        methname := methname ++ nxt.value
        if ((accept("lparen")).not) then {
            util.syntax_error("multi-part method name parameters require ().")
        }
        next()
        while {accept("identifier")
                | (accept("op") & (sym.value == "*"))} do {
            if (varargs) then {
                util.syntax_error("varargs parameter must be last.")
            }
            if (accept("op")) then {
                next()
                varargs := true
                expect("identifier")
            }
            pushidentifier()
            nxt := values.pop()
            if (accept("colon")) then {
                next()
                pushidentifier()
                var tp := values.pop()
                nxt.type := tp
            }
            if (varargs) then {
                tm.vararg := nxt
                tm.varargs := true
                expect("rparen")
            } else {
                params.push(nxt)
            }
            if (accept("comma")) then {
                next()
            }
        }
        expect("rparen")
        next()
    }
    ast.astidentifier(methname, false)
}

// Accept a method declaration
method methoddec() {
    if (accept("keyword") & (sym.value == "method")) then {
        next()
        expect("identifier")or("op")
        pushidentifier()
        var meth := values.pop()
        if (accept("bind")) then {
            next()
            meth.value := meth.value ++ ":="
        } elseif (accept("op") & (meth.value == "prefix")) then {
            meth.value := meth.value ++ sym.value
            next()
        }
        var rparams := []
        var params := []
        var type := false
        var varargs := false
        var vararg := false
        if (accept("lparen")) then {
            next()
            var id
            while {accept("identifier") |
                    (accept("op") & (sym.value == "*"))} do {
                // Parse the parameter list, including optional type
                // annotations.
                if (accept("op")) then {
                    next()
                    varargs := true
                }
                pushidentifier()
                id := values.pop()
                type := false
                if (accept("colon")) then {
                    next()
                    if (accept("identifier")) then {
                        pushidentifier()
                        type := values.pop()
                    } else {
                        util.syntax_error("expected type after :.")
                    }
                }
                id.type := type
                if (varargs) then {
                    vararg := id
                    expect("rparen")
                } else {
                    params.push(id)
                }
                if (accept("comma")) then {
                    next()
                } elseif ((accept("rparen")).not) then {
                    util.syntax_error("expected comma or rparen.")
                }
            }
            expect("rparen")
            next()
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
            // Return type
            next()
            pushidentifier()
            type := values.pop()
        } else {
            type := false
        }
        var body := []
        var stok := sym
        var localMin
        if (accept("lbrace")) then {
            next()
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
            statement()
            var s := values.pop()
            while {s.kind /= "lbrace"} do {
                // The body is a sequence of statements, and
                // the method ends when no further statement
                // is found.
                body.push(s)
                statement()
                s := values.pop()
            }
            if (accept("rbrace")) then {
                next()
            } else {
                util.syntax_error("No statement but not end of "
                    ++ meth.value ++ ". Have " ++ sym.kind ++ ".")
            }
            minIndentLevel := localMin
        } else {
            util.syntax_error("No body in method declaration for " ++
                meth.value)
        }
        var o := ast.astmethod(meth, params, body, type)
        if (varargs) then {
            o.varargs := true
            o.vararg := vararg
        }
        values.push(o)
    }
}

// Accept an import statement. import takes a single identifier
// following, as in "import parser".
method doimport() {
    if (accept("keyword") & (sym.value == "import")) then {
        next()
        expect("identifier")
        identifier()
        var p := values.pop()
        var o := ast.astimport(p)
        values.push(o)
    }
}

// Accept a return statement. return takes a mandatory argument,
// of the form "return x". x may be any expression.
method doreturn() {
    if (accept("keyword") & (sym.value == "return")) then {
        next()
        expectConsume({expression()})
        var p := values.pop()
        var o := ast.astreturn(p)
        values.push(o)
    }
}

// Accept a statement. A statement is any of the above that may exist
// at the top level, and includes expressions.
// A statement may also be a bind statement x := y, which creates a
// bind AST node out of the expressions on either side (which at this point
// can be any arbitrary expression).
method statement() {
    statementIndent := sym.indent
    statementToken := sym
    if ((sym.kind == "rbrace") | (sym.kind == "rparen")
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
            vardec()
        } elseif (sym.value == "def") then {
            constdec()
        } elseif (sym.value == "const") then {
            constdec()
        } elseif (sym.value == "method") then {
            methoddec()
        } elseif (sym.value == "import") then {
            doimport()
        } elseif (sym.value == "class") then {
            doclass()
        } elseif (sym.value == "return") then {
            doreturn()
        } else {
            expression()
        }
    } else {
        expression()
        if (accept("bind")) then {
            var dest := values.pop()
            next()
            expression()
            var val := values.pop()
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
        next()
    }
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
        return ast.astmember("outer", ast.astidentifier("self"))
    }
    var b := findName(nm)
    if (b.kind == "var") then {
        return node
    } elseif (b.kind == "def") then {
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
        pushScope()
        for (node.params) do {e->
            bindIdentifier(e)
        }
        if (node.varargs) then {
            bindIdentifier(node.vararg)
        }
        l := resolveIdentifiersList(node.body)
        popScope()
        tmp := ast.astmethod(node.value, node.params, l,
            resolveIdentifiers(node.type))
        tmp.varargs := node.varargs
        tmp.vararg := node.vararg
        return tmp
    }
    if (node.kind == "block") then {
        pushScope()
        for (node.params) do {e->
            bindIdentifier(e)
        }
        l := resolveIdentifiersList(node.body)
        popScope()
        tmp := ast.astblock(node.params, l)
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
        pushScope()
        tmp := {
            scopes.last.put("___is_object", Binding.new("yes"))
            scopes.last.put("outer", Binding.new("method"))
        }
        for (node.params) do { e->
            bindIdentifier(e)
        }
        tmp2 := resolveIdentifiersList(node.value)withBlock(tmp)
        node := ast.astclass(node.name, node.params,
            tmp2,
            resolveIdentifiers(node.superclass))
        popScope()
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
        } elseif ((tmp.kind == "call") & (node.kind /= "call")) then {
            tmp := tmp.value
        }
        if ((tmp /= node.dest) | (tmp2 /= node.value)) then {
            return ast.astbind(tmp, tmp2)
        }
    }
    if (node.kind == "vardec") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        if (tmp2 /= tmp) then {
            return ast.astvardec(node.name, tmp2, node.type)
        }
    }
    if (node.kind == "constdec") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
        if (tmp2 /= tmp) then {
            return ast.astvardec(node.name, tmp2, node.type)
        }
    }
    if (node.kind == "return") then {
        tmp := node.value
        tmp2 := resolveIdentifiers(tmp)
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
    pushScope()
    bk.apply
    if (scopes.last.contains("___is_object")) then {
        isobj := true
    }
    for (lst) do {e->
        if (isobj & ((e.kind == "vardec") | (e.kind == "constdec"))) then {
            bindName(e.name.value, Binding.new("method"))
        } elseif (e.kind == "vardec") then {
            bindName(e.name.value, Binding.new("var"))
        } elseif (e.kind == "constdec") then {
            bindName(e.name.value, Binding.new("def"))
        } elseif (e.kind == "method") then {
            bindName(e.value.value, Binding.new("method"))
        } elseif (e.kind == "class") then {
            bindName(e.name.value, Binding.new("def"))
        } elseif (e.kind == "import") then {
            bindName(e.value.value, Binding.new("def"))
        }
    }
    for (lst) do {e->
        util.setline(e.line)
        nl.push(resolveIdentifiers(e))
    }
    popScope()
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
        var o := otoks.pop()
        tokens.push(o)
    }
    util.log_verbose("parsing.")
    bindName("print", Binding.new("method"))
    bindName("length", Binding.new("method"))
    bindName("escapestring", Binding.new("method"))
    bindName("HashMap", Binding.new("def"))
    bindName("true", Binding.new("def"))
    bindName("false", Binding.new("def"))
    bindName("self", Binding.new("def"))
    bindName("raise", Binding.new("method"))
    pushScope()
    linenum := 1
    next()
    var oldlength := tokens.size + 0
    if (tokens.size == 0) then {
        // Single token is ignored otherwise
        statement()
    }
    while {tokens.size > 0} do {
        statement()
        if (tokens.size == oldlength) then {
            var nxtToks := ""
            for (0..5) do {i->
                if (i < tokens.size) then {
                    var t := tokens.at(tokens.size - i)
                    nxtToks := nxtToks ++ t.kind ++ ": " ++ t.value ++ ", "
                }
            }
            var lstAST := ""
            for (0..5) do {i->
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
    popScope()
    resolveIdentifiersList(values)
}
