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
// True if there is a token on the same logical line
method tokenOnSameLine {
    (lastline == sym.line) | (sym.indent > lastIndent)
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
// Require a t OR s OR u as the current token; if not, raise a syntax error.
method expect(t)or(s)or(u) {
    if (sym.kind == t) then {
        return true
    } elseif (sym.kind == s) then {
        return true
    } elseif (sym.kind == u) then {
        return true
    }
    util.syntax_error("expected {t} or {s} or {u}, got {sym.kind}: {sym.value}")
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
        generic
        overallType := values.pop
    }
    while {acceptSameLine("op") & (sym.value == "|")} do {
        if (unionTypes.size == 0) then {
            unionTypes.push(overallType)
        }
        next
        pushidentifier
        generic
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
    while {acceptSameLine("op") & (sym.value == "&")} do {
        if (intersectionTypes.size == 0) then {
            intersectionTypes.push(overallType)
        }
        next
        pushidentifier
        generic
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
        var isMatchingBlock := false
        statementToken := sym
        if (sym.kind == "lparen") then {
            isMatchingBlock := true
        }
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
                if (ident1.kind != "identifier") then {
                    isMatchingBlock := true
                }
                if (isMatchingBlock && {accept("comma")}) then {
                    util.syntax_error("matching blocks can have only "
                        ++ "one parameter")
                }
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
        if (isMatchingBlock) then {
            if (params.size > 0) then {
                o.matchingPattern := params.first
            }
        }
        values.push(o)
    }
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
        def localMin = minIndentLevel
        def localStatementIndent = statementIndent
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
            var o := ast.astif(cond, body, elseblock)
            values.push(o)
        } else {
            // Raise an error here, or it will spin nastily forever.
            util.syntax_error("if with no then")
        }
        minIndentLevel := localMin
        statementIndent := localStatementIndent
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

// Accept an identifier. Handle "if", "while", and "for" specially by
// passing them on to the appropriate method above.
method identifier {
    if (accept("identifier")) then {
        if (sym.value == "if") then {
            doif
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
        callrest
        postfixsquare
        val := values.pop
        var mem := ast.astmember("prefix" ++ op, val)
        var call := ast.astcall(mem, [ast.callWithPart.new(mem.value)])
        values.push(call)
    }
}

method generic {
    if (accept("lgeneric")) then {
        def id = values.pop
        def gens = []
        next
        while {accept("identifier")} do {
            identifier
            generic
            gens.push(values.pop)
            if (accept("comma")) then {
                next
            } else {
                expect("rgeneric")
            }
        }
        expect("rgeneric")
        next
        values.push(ast.astgeneric(id, gens))
    }
}
method matchcase {
    if (!(accept("identifier") & (sym.value == "match"))) then {
        return 0
    }
    def localmin = minIndentLevel
    next
    expect("lparen")
    next
    expectConsume {expression}
    def matchee = values.pop
    expect("rparen")
    next
    def cases = []
    var elsecase := false
    while {accept("identifier") & (sym.value == "case")} do {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            expression
            expect("rparen")
            next
        } else {
            util.syntax_error("no argument to case")
        }
        cases.push(values.pop)
    }
    if (accept("identifier") & (sym.value == "else")) then {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            expression
            expect("rparen")
            next
        } else {
            util.syntax_error("no argument to case")
        }
        elsecase := values.pop
    }
    values.push(ast.astmatchcase(matchee, cases, elsecase))
    minIndentLevel := localmin
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
    } elseif(accept("identifier") & (sym.value == "match")) then {
        matchcase
    } elseif (accept("identifier")) then {
        identifier
        if (accept("lgeneric")) then {
            generic
        }
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
        def tmpStatementToken = statementToken
        statementToken := sym
        next
        expression
        expect("rparen")
        statementToken := tmpStatementToken
        next
    } else {
        term
    }
    dotrest
    callrest
    postfixsquare
    expressionrest
}

// Accept postcircumfix square brackets (as in x[y]) and replace the
// preceding expression with an index node into itself.
method postfixsquare {
    if (acceptSameLine("lsquare")) then {
        next
        var expr := values.pop
        expression
        var index := values.pop
        expect("rsquare")
        next
        var o := ast.astindex(expr, index)
        values.push(o)
        dotrest
        callrest
        postfixsquare
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
        while {accept("op")onLineOfLastOr(statementToken)} do {
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
            callrest
            postfixsquare
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
            } elseif (accept("lparen") | accept("lbrace")
                | accept("num") | accept("string") | accept("lsquare")) then {
                callrest
            }
        }
    }
}

// Accept a method invocation indicated by parentheses. Unparenthesised
// method calls are left as "member" AST nodes and processed correctly at
// a later stage.
method callrest {
    if (values.size == 0) then {
        return 0
    }
    var meth := values.pop
    if (meth.kind != "identifier") then {
        if (meth.kind != "member") then {
            values.push(meth)
            return 0
        }
    }
    var methn
    var tmp
    var ln := false
    var signature := []
    var part := ast.callWithPart.new
    signature.push(part)
    var hadcall := false
    var tok := lastToken
    var startInd := minIndentLevel
    if (acceptSameLine("lparen")) then {
        tok := sym
        hadcall := true
        methn := meth.value
        part.name := methn
        next
        ifConsume {expression} then {
            // For matching blocks - same as below
            if (accept("colon")) then {
                tmp := values.pop
                if (tmp.kind != "identifier") then {
                    util.syntax_error("colon must follow identifier")
                }
                next
                expectConsume {expression}
                tmp.dtype := values.pop
                values.push(tmp)
            }
            while {accept("comma")} do {
                tmp := values.pop
                part.args.push(tmp)
                next
                expectConsume {expression}
                // For matching blocks - same as above
                if (accept("colon")) then {
                    tmp := values.pop
                    if (tmp.kind != "identifier") then {
                        util.syntax_error("colon must follow identifier")
                    }
                    next
                    expectConsume {expression}
                    tmp.dtype := values.pop
                    values.push(tmp)
                }
            }
            tmp := values.pop
            part.args.push(tmp)
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
        part.name := methn
        ln := linenum
        term
        var ar := values.pop
        part.args.push(ar)
    } elseif (meth.kind == "identifier") then {
        values.push(meth)
    } elseif (meth.kind == "member") then {
        var root := meth.in
        var outroot := meth
        while {root.kind == "member"} do {
            outroot := root
            root := root.in
        }
        if (root.kind == "identifier") then {
            values.push(meth)
        } else {
            values.push(meth)
        }
    } else {
        values.push(meth)
    }
    if (hadcall) then {
        if (accept("identifier")onLineOfLastOr(tok)) then {
            // Multi-part method name
            methn := callmprest(ast.astidentifier(methn, false), signature, tok)
            if (meth.kind == "member") then {
                // callmprest loses this information, so restore
                // the member lookup (for x.between(3)and(10)-type
                // calls).
                meth := ast.astmember(methn.value, meth.in)
            } else {
                meth := methn
            }
        }
        tmp := ast.astcall(meth, signature)
        values.push(tmp)
    }
    minIndentLevel := startInd
    dotrest
}

// Process the rest of a multi-part method name. Returns an identifier
// to replace the one passed in, in which each word is joined by "",
// and updates params in place.
method callmprest(meth, signature, tok) {
    var methname := meth.value
    var nxt
    var ln := linenum
    var part
    while {accept("identifier")onLineOf(tok)
           | accept("identifier")onLineOf(lastToken)} do {
        // Each word must start on the same line as the preceding parameter
        // ended.
        part := ast.callWithPart.new
        signature.push(part)
        methname := methname ++ "()"
        pushidentifier
        nxt := values.pop
        methname := methname ++ nxt.value
        part.name := nxt.value
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
                part.args.push(nxt)
                next
                expectConsume {expression}
            }
        }
        nxt := values.pop
        part.args.push(nxt)
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
        var dtype := ast.astidentifier("Dynamic", false)
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
        var dtype := ast.astidentifier("Dynamic", false)
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

// Accept "inherits X.new"
method inheritsdec {
    if (accept("keyword") & (sym.value == "inherits")) then {
        checkIndent
        next
        expectConsume {
            expression
        }
        var tmp := values.pop
        values.push(ast.astinherits(tmp))
    }
}

// Accept an object literal.
method doobject {
    // doobject because "object" is a keyword
    if (accept("keyword") & (sym.value == "object")) then {
        def localMinIndentLevel = minIndentLevel
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
            superclass := ast.astcall(ast.astmember(mn.value, nm),
                [ast.callWithPart.new(mn.value, scargs)])
        }
        expect("lbrace")
        values.push(object {
            var kind := "lbrace"
            var register := ""
        })
        next
        if (sym.line == statementToken.line) then {
            minIndentLevel := sym.linePos - 1
        } else {
            minIndentLevel := statementToken.indent + 1
        }
        var sz := values.size
        while {(accept("rbrace")).not} do {
            // An object body contains zero or more var declarations,
            // const declarations, and method declarations. If anything
            // else appears before the closing brace, it is a syntax error.
            methoddec
            inheritsdec
            statement
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
        minIndentLevel := localMinIndentLevel
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
        def localMinIndentLevel = minIndentLevel
        expect("identifier")
        pushidentifier // A class currently cannot be anonymous
        if (!accept("dot")) then {
            return doclassOld
        }
        def cname = values.pop
        next
        var s := methodsignature
        var csig := s.sig
        var constructorName := s.m
        if (!accept("lbrace")) then {
            util.syntax_error("class declaration without body")
        }
        next
        if (sym.line == statementToken.line) then {
            minIndentLevel := sym.linePos - 1
        } else {
            minIndentLevel := statementToken.indent + 1
        }
        def body = []
        while {(accept("rbrace")).not} do {
            ifConsume {methoddec} then {
                body.push(values.pop)
            }
            ifConsume {inheritsdec} then {
                body.push(values.pop)
            }
            ifConsume {statement} then {
                body.push(values.pop)
            }
        }
        next
        var o := ast.astclass(cname, csig, body, false, constructorName)
        values.push(o)
        minIndentLevel := localMinIndentLevel
    }
}

method doclassOld {
    if (true) then {
        def localMinIndentLevel = minIndentLevel
        generic
        var superclass := false
        if (accept("identifier") & (sym.value == "extends")) then {
            next
            expect("identifier")
            identifier
            generic
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
            superclass := ast.astcall(ast.astmember(mn.value, nm),
                [ast.callWithPart.new(mn.value, scargs)])
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
                    generic
                    pid.dtype := values.pop
                }
                params.push(pid)
                while {accept("comma")} do {
                    next
                    pushidentifier
                    generic
                    pid := values.pop
                    if (accept("colon")) then {
                        next
                        pushidentifier
                        generic
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
                inheritsdec
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
            var o := ast.astclass(cname, [ast.signaturePart.new(cname.value, params)],
                body, superclass, ast.astidentifier("new", false))
            values.push(o)
        } else {
            util.syntax_error("class definition without body")
        }
        minIndentLevel := localMinIndentLevel
    }
}

// Accept a method declaration
method methoddec {
    if (accept("keyword") & (sym.value == "method")) then {
        checkIndent
        var stok := sym
        next
        var m := methodsignature
        var meth := m.m
        var signature := m.sig
        var dtype := m.rtype
        var varargs := m.v
        var body := []
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
        var o := ast.astmethod(meth, signature, body, dtype)
        if (varargs) then {
            o.varargs := true
        }
        values.push(o)
    }
}

// Process the declaration of a multi-part method name. These follow
// mostly the same rules as calls, but aren't strictly enforced to be on
// a single line (because they are ended by "{" or "->"). This method
// returns a replacement method name identifier and modifies params in
// place.
method parsempmndecrest(tm) {
    var methname := tm.value.value
    var signature := tm.signature
    var nxt
    while {accept("identifier")} do {
        methname := methname ++ "()"
        var part := ast.signaturePart.new
        pushidentifier
        nxt := values.pop
        methname := methname ++ nxt.value
        part.name := nxt.value
        var vararg := false
        if ((accept("lparen")).not) then {
            util.syntax_error("multi-part method name parameters require ().")
        }
        next
        while {accept("identifier")
                | (accept("op") & (sym.value == "*"))} do {
            if (vararg) then {
                util.syntax_error("varargs parameter must be last.")
            }
            if (accept("op")) then {
                next
                vararg := true
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
            if (vararg) then {
                part.vararg := nxt
                tm.varargs := true
                expect("rparen")
            } else {
                part.params.push(nxt)
            }
            if (accept("comma")) then {
                next
            }
        }
        expect("rparen")
        next
        signature.push(part)
    }
    ast.astidentifier(methname, false)
}

// Accept a method signature
method methodsignature {
    expect("identifier")or("op")or("lsquare")
    pushidentifier
    var meth := ast.astidentifier("", false)
    var signature := []
    var part := ast.signaturePart.new
    signature.push(part)
    part.name := values.pop
    meth.value := meth.value ++ part.name.value
    if (meth.value == "[") then {
        expect("rsquare")
        next
        meth.value := "[]"
    }
    if (accept("bind")) then {
        next
        meth.value := meth.value ++ ":="
    } elseif (accept("op") & (meth.value == "prefix")) then {
        meth.value := meth.value ++ sym.value
        next
    }
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
                vararg := true
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
            if (vararg) then {
                part.vararg := id
                expect("rparen")
            } else {
                part.params.push(id)
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
            var tm := ast.astmethod(meth, signature, [], false)
            meth := parsempmndecrest(tm)
            varargs := varargs | tm.varargs
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
    var o := object {
        var m := meth
        var sig := signature
        var rtype := dtype
        var v := varargs
    }
    o
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
        var retval
        if (tokenOnSameLine) then {
            expectConsume {expression}
            retval := values.pop
        } else {
            retval := ast.astidentifier("void", false)
        }
        var o := ast.astreturn(retval)
        values.push(o)
    }
}

method domethodtype {
    var m := methodsignature
    var meth := m.m
    var signature := m.sig
    var dtype := m.rtype
    var varargs := m.v
    if (dtype == false) then {
        dtype := ast.astidentifier("Unit", false)
    }
    var o := ast.astmethodtype(meth.value, signature, dtype)
    if (varargs) then {
        o.varargs := true
    }
    values.push(o)
    if (accept("semicolon")) then {
        next
    } else {
        if (!accept("rbrace")) then {
            if (id.line == sym.line) then {
                util.syntax_error("multiple methods on same line in type, "
                    ++ "after {mn}")
            }
        }
    }
}

// Accept a type declaration.
method dotype {
    if (accept("keyword") & (sym.value == "type")) then {
        next
        expect("identifier")
        pushidentifier
        generic
        var p := values.pop
        var gens := []
        if (p.kind == "generic") then {
            gens := p.params
            p := p.value
        }
        expect("op")
        if (sym.value /= "=") then {
            util.syntax_error("type declarations require =.")
        }
        next
        def methods = []
        if (accept("lbrace")) then {
            next
            while {accept("rbrace").not} do {
                expectConsume {domethodtype}
                methods.push(values.pop)
            }
            next
            def t = ast.asttype(p.value, methods)
            t.generics := gens
            values.push(t)
        } else {
            dotyperef
            def ot = values.pop
            def nt = ast.asttype(p.value, ot.methods)
            nt.generics := nt.generics
            for (ot.unionTypes) do {ut->
                nt.unionTypes.push(ut)
            }
            for (ot.intersectionTypes) do {ut->
                nt.intersectionTypes.push(ut)
            }
            values.push(nt)
        }
    }
}

method checkIndent {
    if (indentFreePass) then {
        indentFreePass := false
    } elseif (sym.kind == "semicolon") then {
        // pass
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
}

// Accept a statement. A statement is any of the above that may exist
// at the top level, and includes expressions.
// A statement may also be a bind statement x := y, which creates a
// bind AST node out of the expressions on either side (which at this point
// can be any arbitrary expression).
method statement {
    statementIndent := sym.indent
    statementToken := sym
    checkIndent
    if (accept("keyword")) then {
        if (sym.value == "var") then {
            vardec
        } elseif (sym.value == "def") then {
            defdec
        } elseif (sym.value == "const") then {
            util.syntax_error("no such keyword const; did you mean def?")
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
    } else {
        if (sym.line == lastToken.line) then {
            if (sym.kind != "rbrace") then {
                util.syntax_error("unexpected token after statement ended; "
                    ++ "got {sym.kind}:'{sym.value}', expected "
                    ++ "new line or semicolon")
            }
        }
    }
}

// Parse the given list of tokens, returning a list of AST nodes
// corresponding to it.
method parse(toks) {
    util.log_verbose("processing tokens.")
    var otoks := toks
    if (toks.size == 0) then {
        return toks
    }
    sym := toks.first
    tokens := []
    for (otoks.indices) do { i ->
        var o := otoks.pop
        tokens.push(o)
    }
    util.log_verbose("parsing.")
    linenum := 1
    next
    var oldlength := tokens.size + 0
    if (tokens.size == 0) then {
        // Single token is ignored otherwise
        statement
    }
    while {tokens.size > 0} do {
        methoddec
        inheritsdec
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
    values
}
