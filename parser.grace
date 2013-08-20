#pragma DefaultVisibility=public
import "io" as io
import "ast" as ast
import "util" as util
import "mgcollections" as collections

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
var don'tTakeBlock := false
var braceIsType := false
var defaultDefVisibility := "local"
var defaultVarVisibility := "local"
var defaultMethodVisibility := "public"

// Global object containing the current token
var sym
var lastToken := object {
    var kind := "start"
    var line := 1
    var linePos := 0
    var indent := 0
    var value := ""
}

var comment := false

// Advance to the next token in the stream, with special handling
// so the magic "line" tokens update the line number for error output.
method next {
    lastToken := sym
    if (tokens.size > 0) then {
        lastline := linenum
        lastIndent := sym.indent
        sym := tokens.pop
        if (sym.kind == "comment") then {
            comment := ""
            while {(sym.kind == "comment").andAlso {tokens.size > 0}} do {
                comment := comment ++ sym.value
                sym := tokens.pop
            }
        }
        linenum := sym.line
        util.setPosition(sym.line, sym.linePos)
    } else {
        sym := object {
            var kind := "eof"
            var line := lastToken.line
            var linePos := util.lines[lastToken.line].size + 1
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
    (sym.kind == t) && ((lastline == sym.line) ||
        (sym.indent > lastIndent))
}

// True if the current token is a t, and it is on the same logical
// line as a provided token.
method accept(t)onLineOf(other) {
    (sym.kind == t) && ((other.line == sym.line) ||
        (sym.indent > other.indent))
}
// True if the current token is a t, and it is on the same logical
// line as a provided token.
method accept(t)onLineOfLastOr(other) {
    (sym.kind == t) && (((other.line == sym.line) ||
        (sym.indent > other.indent)) || (lastToken.line == sym.line))
}
// True if there is a token on the same logical line
method tokenOnSameLine {
    (lastline == sym.line) || (sym.indent > lastIndent)
}
// Require a t as the current token; if not, raise a syntax error.
method expect(t) {
    if (sym.kind == t) then {
        return true
    }
    util.setPosition(sym.line, sym.linePos)
    util.syntax_error("Expected {t}, got {sym.kind}: '{sym.value}'.")
}
// Require a t OR s as the current token; if not, raise a syntax error.
method expect(t)or(s) {
    if (sym.kind == t) then {
        return true
    }
    if (sym.kind == s) then {
        return true
    }
    util.setPosition(sym.line, sym.linePos)
    util.syntax_error("Expected {t} or {s}, got {sym.kind}: '{sym.value}'.")
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
    util.setPosition(sym.line, sym.linePos)
    util.syntax_error("Expected {t} or {s} or {u}, got {sym.kind}: '{sym.value}'.")
}
// Expect block to consume at least one token
method expectConsume(ablock) {
    var sz := tokens.size
    ablock.apply
    if (tokens.size == sz) then {
        util.setPosition(sym.line, sym.linePos)
        util.syntax_error("Unable to consume token: {sym.kind}: '{sym.value}'.")
    }
}
// Expect block to consume at least one token, or report string error
method expectConsume(ablock)error(msg) {
    var sz := tokens.size
    ablock.apply
    if (tokens.size == sz) then {
        util.setPosition(sym.line, sym.linePos)
        util.syntax_error("Unable to consume token: {msg}.")
    }
}
// Expect block to consume at least one token, or call fallback code.
method ifConsume(ablock)then(tblock) {
    var sz := tokens.size
    ablock.apply
    if (tokens.size != sz) then {
        tblock.apply
    }
}

// Push the current token onto the output stack as a number
method pushnum {
    var o := ast.numNode.new(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as an octet literal
method pushoctets {
    var o := ast.octetsNode.new(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as a string
method pushstring {
    var o := ast.stringNode.new(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as an identifier.
// false means that this identifier has not been assigned a dtype (yet).
method pushidentifier {
    util.setline(sym.line)
    var o := ast.identifierNode.new(sym.value, false)
    if (o.value == "_") then {
        o.value := "__" ++ auto_count
        o.wildcard := true
        auto_count := auto_count + 1
    }
    values.push(o)
    next
}
method checkAnnotation(ann) {
    if (ann.kind == "call") then {
        for (ann.with) do {p->
            for (p.args) do {a->
                if ((a.kind == "identifier").andAlso {a.dtype != false}) then {
                    util.setPosition(a.line, a.linePos)
                    util.syntax_error("Type given on argument to annotation.")
                }
            }
        }
    }
    ann
}
method doannotation {
    if ((!accept("keyword")).orElse {sym.value != "is"}) then {
        return false
    }
    next
    def anns = collections.list.new
    don'tTakeBlock := true
    expectConsume {expression}
    while {accept("comma")} do {
        anns.push(checkAnnotation(values.pop))
        next
        expectConsume {expression}
    }
    don'tTakeBlock := false
    anns.push(checkAnnotation(values.pop))
    anns
}

method blank {
    if (sym.line > (lastToken.line + 1)) then {
        if (values.size > 0) then {
            if (values.last.kind != "blank") then {
                values.push(ast.blankNode.new)
            }
        }
    }
}

method dotypeterm {
    if (accept("identifier")) then {
        pushidentifier
        generic
        don'tTakeBlock := true
        dotrest
        don'tTakeBlock := false
    } else {
        if (accept("lbrace")) then {
            doanontype
        }
    }
}

method dotyperef {
    var overallType := false
    var tp := false
    var op := false
    def unionTypes = []
    expectConsume {dotypeterm}
    overallType := values.pop
    while {acceptSameLine("op") && (sym.value == "|")} do {
        if (unionTypes.size == 0) then {
            unionTypes.push(overallType)
        }
        next
        expectConsume {dotypeterm}
        unionTypes.push(values.pop)
    }
    if (unionTypes.size > 0) then {
        var unionName := "Union<"
        for (unionTypes) do {ut->
            unionName := "{unionName}|{ut.value}"
        }
        unionName := "{unionName}|>"
        overallType := ast.typeNode.new(unionName, [])
        for (unionTypes) do {ut->
            overallType.unionTypes.push(ut)
        }
    }
    def intersectionTypes = []
    while {acceptSameLine("op") && (sym.value == "&")} do {
        if (intersectionTypes.size == 0) then {
            intersectionTypes.push(overallType)
        }
        next
        expectConsume {dotypeterm}
        intersectionTypes.push(values.pop)
    }
    if (intersectionTypes.size > 0) then {
        var intersectionName := "Intersection<"
        for (intersectionTypes) do {it->
            intersectionName := "{intersectionName}&{it.value}"
        }
        intersectionName := intersectionName ++ "&>"
        overallType := ast.typeNode.new(intersectionName, [])
        for (intersectionTypes) do {it->
            overallType.intersectionTypes.push(it)
        }
    }
    values.push(overallType)
}

// Accept a block
method block {
    if (accept("lbrace")) then {
        def btok = sym
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
            if (accept("comma") || accept("arrow") || accept("colon")) then {
                // This block has parameters
                ident1 := values.pop
                if (accept("colon")) then {
                    // We allow an expression here for the case of v : T
                    // patterns, where T may be "Pair(hd, tl)" or similar.
                    next
                    braceIsType := true
                    expectConsume {expression}
                    braceIsType := false
                    ident1.dtype := values.pop
                }
                params.push(ident1)
                if (ident1.kind != "identifier") then {
                    isMatchingBlock := true
                }
                if (isMatchingBlock && {accept("comma")}) then {
                    util.syntax_error("Matching blocks can have only "
                        ++ "one parameter.")
                }
                while {accept("comma")} do {
                    // Keep doing the above for the rest of the parameters.
                    next
                    pushidentifier
                    ident1 := values.pop
                    if (accept("colon")) then {
                        next
                        dotyperef
                        ident1.dtype := values.pop
                    }
                    params.push(ident1)
                }
                if ((accept("arrow")).not) then {
                    util.syntax_error("Block parameter list not terminated with '->'.")
                }
                next
            } elseif (accept("semicolon")) then {
                body.push(values.pop)
                next
                if (accept("semicolon")) then {
                    next
                    if (sym.line == lastToken.line) then {
                        indentFreePass := true
                    }
                }
            } elseif (((values.last.kind == "member")
                || (values.last.kind == "identifier")
                || (values.last.kind == "index"))
                && accept("bind")) then {
                var lhs := values.pop
                next
                expectConsume {expression}
                var rhs := values.pop
                body.push(ast.bindNode.new(lhs, rhs))
                if (accept("semicolon")) then {
                    next
                    if (sym.line == lastToken.line) then {
                        indentFreePass := true
                    }
                }
            } else {
                checkUnexpectedTokenAfterStatement
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
        util.setPosition(btok.line, btok.linePos)
        var o := ast.blockNode.new(params, body)
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
    if (accept("identifier") && (sym.value == "if")) then {
        def btok = sym
        next
        expect "lparen"
        next
        expectConsume {expression}
        expect "rparen"
        next
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
        if (accept("identifier") && (sym.value == "then")) then {
            next
            expect "lbrace"
            next
            if (sym.line == lastToken.line) then {
                minIndentLevel := sym.linePos - 1
            } else {
                minIndentLevel := minInd
            }
            while {(accept("rbrace")).not} do {
                expectConsume {statement}
                v := values.pop
                body.push(v)
            }
            next
            var econd
            var eif
            var newelse
            var ebody
            while {accept("identifier") && (sym.value == "elseif")} do {
                // Currently, the parser just accepts arbitrarily many
                // "elseifs", turning them into ifs inside the else.
                statementToken := sym
                next
                expect "lparen"
                next
                expectConsume {expression}
                expect "rparen"
                next
                econd := values.pop
                if ((accept("identifier") &&
                    (sym.value == "then")).not) then {
                    util.syntax_error("'elseif' with no 'then'.")
                }
                next
                ebody := []
                if ((accept("lbrace")).not) then {
                    util.syntax_error("Expected '\{'.")
                }
                next
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    expectConsume {statement}
                    v := values.pop
                    ebody.push(v)
                }
                next
                newelse := []
                eif := ast.ifNode.new(econd, ebody, newelse)
                // Construct the inner "if" AST node, and then push it
                // inside the current "else" block.
                curelse.push(eif)
                // Update curelse to point to the new, empty, nested
                // else block.
                curelse := newelse
            }
            if (accept("identifier") && (sym.value == "else")) then {
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
                        expectConsume {statement}
                        v := values.pop
                        curelse.push(v)
                    }
                    next
                }
            }
            util.setPosition(btok.line, btok.linePos)
            var o := ast.ifNode.new(cond, body, elseblock)
            values.push(o)
        } else {
            // Raise an error here, or it will spin nastily forever.
            util.syntax_error("'if' with no 'then'.")
        }
        minIndentLevel := localMin
        statementIndent := localStatementIndent
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
                util.syntax_error("Empty () in expression.")
            }
            expression
            expect("rparen")
            next
        } else {
            expectConsume {term}
        }
        dotrest
        callrest
        postfixsquare
        val := values.pop
        var mem := ast.memberNode.new("prefix" ++ op, val)
        var call := ast.callNode.new(mem, [ast.callWithPart.new(mem.value)])
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
            while {accept("dot")} do {
                next
                def memberIn = values.pop
                expect "identifier"
                identifier
                def memberName = values.pop
                values.push(ast.memberNode.new(memberName.value, memberIn))
            }
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
        values.push(ast.genericNode.new(id, gens))
    }
}
method catchcase {
    if (!(accept("identifier") && (sym.value == "catch"))) then {
        return 0
    }
    def localmin = minIndentLevel
    next
    if (accept("lbrace")) then {
        block
    } else {
        expect "lparen"
        next
        expectConsume {expression}
        expect "rparen"
        next
    }
    def mainblock = values.pop
    def cases = []
    var finally := false
    while {accept("identifier") && (sym.value == "case")} do {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            expectConsume {expression}
            expect("rparen")
            next
        } else {
            util.syntax_error("No argument to case.")
        }
        cases.push(values.pop)
    }
    if (accept("identifier") && (sym.value == "finally")) then {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            expectConsume {expression}
            expect("rparen")
            next
        } else {
            util.syntax_error("No argument to finally.")
        }
        finally := values.pop
    }
    values.push(ast.catchCaseNode.new(mainblock, cases, finally))
    minIndentLevel := localmin
}
method matchcase {
    if (!(accept("identifier") && (sym.value == "match"))) then {
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
    while {accept("identifier") && (sym.value == "case")} do {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            expectConsume {expression}
            expect("rparen")
            next
        } else {
            util.syntax_error("No argument to case.")
        }
        cases.push(values.pop)
    }
    if (accept("identifier") && (sym.value == "else")) then {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            expectConsume {expression}
            expect("rparen")
            next
        } else {
            util.syntax_error("No argument to else.")
        }
        elsecase := values.pop
    }
    values.push(ast.matchCaseNode.new(matchee, cases, elsecase))
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
    } elseif(accept("identifier") && (sym.value == "match")) then {
        matchcase
    } elseif(accept("identifier") && (sym.value == "catch")) then {
        catchcase
    } elseif (accept("identifier")) then {
        identifier
    } elseif (accept("keyword") && (sym.value == "object")) then {
        doobject
    } elseif (accept("lbrace") && braceIsType) then {
        dotypeterm
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
    var sz := values.size
    if (accept("lparen")) then {
        def tmpStatementToken = statementToken
        statementToken := sym
        next
        expectConsume {expression}
        expect("rparen")
        statementToken := tmpStatementToken
        next
    } else {
        term
    }
    if (values.size > sz) then {
        dotrest
        callrest
        postfixsquare
        expressionrest
    }
}

// Accept postcircumfix square brackets (as in x[y]) and replace the
// preceding expression with an index node into itself.
method postfixsquare {
    if (acceptSameLine("lsquare")) then {
        next
        var expr := values.pop
        expectConsume {expression}
        var index := values.pop
        expect("rsquare")
        next
        var o := ast.indexNode.new(expr, index)
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
        while {accept("op")onLineOfLastOr(statementToken).andAlso
                {sym.value != "="}} do {
            opcount := opcount + 1
            o := sym.value
            next
            prec := oprec(o)
            if ((o != "*") && (o != "/") && (o != "+") && (o != "-")) then {
                allarith := false
            }
            if ((opdtype != "") && (opdtype != o) && (allarith.not)) then {
                // If: this is not the first operator, it is not the same
                // as the last operator, and the expression has not been
                // entirely arithmetic, raise a syntax error.
                util.syntax_error("Mixed operators without parentheses: "
                    ++ "'{opdtype}' and '{o}'.")
            }
            opdtype := o
            while {(ops.size > 0) && (prec <= toprec(ops))} do {
                // Do the shunting: for as long as the current operator
                // has lesser or equal precedence than the one on the
                // top of the stack, take the operator off the stack and
                // replace its two operands with the combined operator node.
                // This corresponds to left-associative operators only.
                o2 := ops.pop
                tmp2 := terms.pop
                tmp := terms.pop
                tmp := ast.opNode.new(o2, tmp, tmp2)
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
                    util.syntax_error("Empty () in expression.")
                }
                expression
                expect("rparen")
                next
            } else {
                util.setPosition(lastToken.line, lastToken.linePos + 1)
                if (!tokenOnSameLine) then {
                    util.syntax_error "expected term after operator."
                }
                expectConsume {term} error "expected term after operator."
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
            tmp := ast.opNode.new(o, tmp, tmp2)
            terms.push(tmp)
        }
        tmp := terms.pop
        values.push(tmp)
        if (terms.size > 0) then {
            util.syntax_error("Values left on term stack.")
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
            var dro := ast.memberNode.new(sym.value, lookuptarget)
            values.push(dro)
            next
            if (accept("dot")) then {
                dotrest
            } elseif (accept("lparen") || accept("lbrace")
                || accept("num") || accept("string") || accept("lsquare")
                || accept("lgeneric")
                ) then {
                callrest
            }
        } else {
            util.syntax_error("Expected identifier after '.'.")
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
    var lnum := linenum
    var lpos := 1
    if (meth.kind != "identifier") then {
        if (meth.kind != "member") then {
            values.push(meth)
            return 0
        }
    }
    if (meth.kind == "identifier") then {
        lnum := meth.line
        lpos := meth.linePos
    }
    var methn
    def btok = sym
    var tmp
    var ln := false
    var signature := []
    var part := ast.callWithPart.new
    signature.push(part)
    var hadcall := false
    var tok := lastToken
    var startInd := minIndentLevel
    var genericIdents := false
    if (acceptSameLine "lgeneric") then {
        // Generic!
        next
        genericIdents := collections.list.new
        while {accept("identifier")} do {
            identifier
            genericIdents.push(values.pop)
            if (accept("comma")) then {
                next
            }
        }
        expect "rgeneric"
        next
    }
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
                    util.syntax_error("Colon must follow identifier.")
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
                        util.syntax_error("Colon must follow identifier.")
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
    } elseif (don'tTakeBlock && {accept("lbrace")onLineOf(tok)}) then {
        values.push(meth)
    } elseif (accept("string")onLineOf(tok) || accept("num")onLineOf(tok)
        || accept("lbrace")onLineOf(tok)
        || (accept("identifier")onLineOf(tok) && ((sym.value == "true")
                                   || (sym.value == "false")))) then {
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
            util.setPosition(lnum, lpos)
            methn := callmprest(ast.identifierNode.new(methn, false), signature, tok)
            if (meth.kind == "member") then {
                // callmprest loses this information, so restore
                // the member lookup (for x.between(3)and(10)-type
                // calls).
                meth := ast.memberNode.new(methn.value, meth.in)
            } else {
                meth := methn
            }
        }
        util.setPosition(btok.line, btok.linePos)
        tmp := ast.callNode.new(meth, signature)
        tmp.generics := genericIdents
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
    var lp := meth.linePos
    var part
    while {accept("identifier")onLineOf(tok)
           || accept("identifier")onLineOf(lastToken)} do {
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
        if ((accept("lparen")).not && (accept("lbrace")).not
            && accept("string").not && accept("num").not) then {
            util.syntax_error("Multi-part method name parameters require ().")
        }
        if (accept("lbrace")onLineOfLastOr(tok)
            || accept("string")onLineOfLastOr(tok)
            || accept("num")onLineOfLastOr(tok)
            || (accept("identifier")onLineOfLastOr(tok)
                && ((sym.value == "true")
                    || (sym.value == "false")))) then {
            isTerm := true
        } else {
            next
        }
        var isEmpty := false
        if (accept "rparen") then {
            isEmpty := true
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
        if (!isEmpty) then {
            nxt := values.pop
            part.args.push(nxt)
        }
        if (isTerm.not) then {
            expect("rparen")
        }
        if (accept("rparen") && isTerm.not) then {
            ln := lastline
            next
        }
    }
    util.setPosition(ln, lp)
    ast.identifierNode.new(methname, false)
}

// Accept a const declaration
method defdec {
    if (accept("keyword") && (sym.value == "def")) then {
        def line = sym.line
        def pos = sym.linePos
        next
        expect "identifier"
        pushidentifier
        var val := false
        var dtype := ast.identifierNode.new("Dynamic", false)
        var name := values.pop
        if (accept("colon")) then {
            next
            dotyperef
            dtype := values.pop
        }
        def anns = doannotation
        if (accept("op") && (sym.value == "=")) then {
            next
            expectConsume {
                expression
            } error "initial value of def expected after '='"
            val := values.pop
        } elseif (accept("bind")) then {
            util.syntax_error("def declaration uses '=', not ':='.")
        } else {
            util.syntax_error("def declaration requires value.")
        }
        util.setPosition(line, pos)
        var o := ast.defDecNode.new(name, val, dtype)
        var hasVisibility := false
        var hasAccessibility := false
        if (anns != false) then {
            for (anns) do {a->
                if ((a.kind == "identifier").andAlso {
                    (a.value == "public")
                     || (a.value == "confidential")}) then {
                    hasVisibility := true
                }
                if ((a.kind == "identifier").andAlso {
                    (a.value == "readable")
                     || (a.value == "writable")}) then {
                    hasAccessibility := true
                }
            }
            o.annotations.extend(anns)
        }
        if (!hasVisibility) then {
            if (defaultDefVisibility == "confidential") then {
                o.annotations.push(ast.identifierNode.new("confidential",
                    false))
            }
        }
        if (!hasAccessibility) then {
            if (defaultDefVisibility == "public") then {
                o.annotations.push(ast.identifierNode.new("readable",
                    false))
            }
        }
        values.push(o)
    }
}

// Accept a var declaration
method vardec {
    if (accept("keyword") && (sym.value == "var")) then {
        def line = sym.line
        def pos = sym.linePos
        next
        expect "identifier"
        pushidentifier
        var val := false
        var dtype := ast.identifierNode.new("Dynamic", false)
        var name := values.pop
        if (accept("colon")) then {
            next
            dotyperef
            dtype := values.pop
        }
        def anns = doannotation
        if (accept("bind")) then {
            next
            expectConsume {
                expression
            } error "initial value of var expected after ':='"
            val := values.pop
        }
        if (accept("op") && (sym.value == "=")) then {
            util.syntax_error("var declaration uses ':=', not '='.")
        }
        util.setPosition(line, pos)
        var o := ast.varDecNode.new(name, val, dtype)
        var hasVisibility := false
        var hasAccessibility := false
        if (anns != false) then {
            for (anns) do {a->
                if ((a.kind == "identifier").andAlso {
                    (a.value == "public")
                     || (a.value == "confidential")}) then {
                    hasVisibility := true
                }
                if ((a.kind == "identifier").andAlso {
                    (a.value == "readable")
                     || (a.value == "writable")}) then {
                    hasAccessibility := true
                }
            }
            o.annotations.extend(anns)
        }
        if (!hasVisibility) then {
            if (defaultVarVisibility == "confidential") then {
                o.annotations.push(ast.identifierNode.new("confidential",
                    false))
            }
        }
        if (!hasAccessibility) then {
            if (defaultVarVisibility == "public") then {
                o.annotations.push(ast.identifierNode.new("readable",
                    false))
                o.annotations.push(ast.identifierNode.new("writable",
                    false))
            }
        }
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
        var o := ast.arrayNode.new(params)
        values.push(o)
        next
    }
}

// Accept "dialect "X""
method dodialect {
    if (accept("keyword") && (sym.value == "dialect")) then {
        next
        expect "string"
        values.push(ast.dialectNode.new(sym.value))
        next
    }
}

// Accept "inherits X.new"
method inheritsdec {
    if (accept("keyword") && (sym.value == "inherits")) then {
        checkIndent
        next
        expectConsume {
            expression
        }
        var tmp := values.pop
        values.push(ast.inheritsNode.new(tmp))
    }
}

// Accept an object literal.
method doobject {
    // doobject because "object" is a keyword
    if (accept("keyword") && (sym.value == "object")) then {
        def btok = sym
        def localMinIndentLevel = minIndentLevel
        next
        var superclass := false
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
            if (sym.kind == "eof") then {
                expect("rbrace")
            } elseif ((values.size == sz) && (lastToken.kind != "semicolon")) then {
                util.setPosition(sym.line, sym.linePos)
                util.syntax_error("Unexpected symbol in "
                    ++ "object declaration. Expected 'var', 'def', 'method', "
                    ++ "'\}', or statement, "
                    ++ "got {sym.kind}: '{sym.value}'.")
            }
            sz := values.size
        }
        next
        var rbody := []
        var n := values.pop
        while {n.kind != "lbrace"} do {
            rbody.push(n)
            n := values.pop
        }
        var body := []
        for (rbody.indices) do { x ->
            // Reorder the list
            var p := rbody.pop
            body.push(p)
        }
        util.setline(btok.line)
        var o := ast.objectNode.new(body, superclass)
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
    if (accept("keyword") && (sym.value == "class")) then {
        def btok = sym
        next
        def localMinIndentLevel = minIndentLevel
        expect("identifier")
        pushidentifier // A class currently cannot be anonymous
        if (!accept("dot")) then {
            return doclassOld
        }
        def cname = values.pop
        next
        var s := methodsignature(false)
        var csig := s.sig
        var constructorName := s.m
        var dtype := s.rtype
        def anns = doannotation
        if (!accept("lbrace")) then {
            util.syntax_error("Class declaration without body.")
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
        util.setline(btok.line)
        var o :=
            ast.classNode.new(cname, csig, body, false, constructorName, dtype)
        o.generics := s.generics
        if (false != anns) then {
            o.annotations.extend(anns)
        } else {
            if (defaultMethodVisibility == "confidential") then {
                o.annotations.push(ast.identifierNode.new("confidential",
                    false))
            }
        }
        values.push(o)
        minIndentLevel := localMinIndentLevel
    }
}

method doclassOld {
    if (true) then {
        def localMinIndentLevel = minIndentLevel
        generic
        var superclass := false
        if (accept("identifier") && (sym.value == "extends")) then {
            next
            expect("identifier")
            identifier
            generic
            var nm := values.pop
            if (accept("dot").not) then {
                util.syntax_error("extends must have '.new' invocation on right.")
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
            superclass := ast.callNode.new(ast.memberNode.new(mn.value, nm),
                [ast.callWithPart.new(mn.value, scargs)])
        }
        var cname := values.pop
        if (cname.kind != "generic") then {
            util.warning("Old class syntax: should be 'class {cname.value}.new'"
                ++ " or other factory method name.\n")
        }
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
                    util.syntax_error("Expected '->'.")
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
                    util.syntax_error("Did not consume anything in "
                        ++ "class declaration.")
                }
                sz := values.size
            }
            next
            var rbody := []
            var n := values.pop
            while {n.kind != "lbrace"} do {
                rbody.push(n)
                n := values.pop
            }
            var body := []
            for (rbody.indices) do { x ->
                var p := rbody.pop
                body.push(p)
            }
            var o := ast.classNode.new(cname, [ast.signaturePart.new("new", params)],
                body, superclass, ast.identifierNode.new("new", false), false)
            values.push(o)
        } else {
            util.syntax_error("Class definition without body.")
        }
        minIndentLevel := localMinIndentLevel
    }
}

// Accept a method declaration
method methoddec {
    if (accept("keyword") && (sym.value == "method")) then {
        def btok = sym
        checkIndent
        var stok := sym
        next
        var m := methodsignature(false)
        var meth := m.m
        var signature := m.sig
        var dtype := m.rtype
        var varargs := m.v
        var generics := m.generics
        var body := []
        var localMin
        def anns = doannotation
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
            while {s.kind != "lbrace"} do {
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
                util.syntax_error("Statement or closing brace of body of "
                    ++ "method '{meth.value}' expected, not {sym.kind}.")
            }
            minIndentLevel := localMin
        } else {
            util.syntax_error("No body in method declaration for " ++
                "'{meth.value}'.")
        }
        util.setline(btok.line)
        var o := ast.methodNode.new(meth, signature, body, dtype)
        if (varargs) then {
            o.varargs := true
        }
        o.generics := generics
        if (false != anns) then {
            o.annotations.extend(anns)
        } else {
            if (defaultMethodVisibility == "confidential") then {
                o.annotations.push(ast.identifierNode.new("confidential",
                    false))
            }
        }
        values.push(o)
    }
}

// Process the declaration of a multi-part method name. These follow
// mostly the same rules as calls, but aren't strictly enforced to be on
// a single line (because they are ended by "{" or "->"). This method
// returns a replacement method name identifier and modifies params in
// place.
method parsempmndecrest(tm, sameline) {
    var methname := tm.value.value
    var signature := tm.signature
    var nxt
    while {(!sameline && accept("identifier")) || acceptSameLine("identifier")} do {
        methname := methname ++ "()"
        var part := ast.signaturePart.new
        pushidentifier
        nxt := values.pop
        methname := methname ++ nxt.value
        part.name := nxt.value
        var vararg := false
        if ((accept("lparen")).not) then {
            util.syntax_error("Multi-part method name parameters require ().")
        }
        next
        while {accept("identifier")
                || (accept("op") && (sym.value == "*"))} do {
            if (accept("op")) then {
                next
                vararg := true
                expect("identifier")
            }
            pushidentifier
            nxt := values.pop
            if (accept("colon")) then {
                next
                dotyperef
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
    ast.identifierNode.new(methname, false)
}

// Accept a method signature
method methodsignature(sameline) {
    expect("identifier")or("op")or("lsquare")
    pushidentifier
    var meth := values.pop
    var signature := []
    var part := ast.signaturePart.new(meth.value)
    var genericIdents := []
    signature.push(part)
    if (meth.value == "[") then {
        expect("rsquare")
        next
        meth.value := "[]"
    }
    if (accept("lgeneric")) then {
        // Generic!
        next
        genericIdents := part.generics
        while {accept("identifier")} do {
            identifier
            genericIdents.push(values.pop)
            if (accept("comma")) then {
                next
            }
        }
        expect "rgeneric"
        next
    }
    if (accept("bind")) then {
        next
        meth.value := meth.value ++ ":="
        part.name := part.name ++ ":="
    } elseif (accept("op") && (meth.value == "prefix")) then {
        meth.value := meth.value ++ sym.value
        part.name := part.name ++ sym.value
        next
    }
    var dtype := false
    var varargs := false
    var vararg := false
    if (accept("lparen")) then {
        next
        var id
        while {accept("identifier") ||
                (accept("op") && (sym.value == "*"))} do {
            // Parse the parameter list, including optional dtype
            // annotations.
            if (accept("op")) then {
                next
                expect "identifier"
                vararg := true
                varargs := true
            }
            pushidentifier
            id := values.pop
            dtype := false
            if (accept("colon")) then {
                next
                if (accept("identifier") || {accept("lbrace")}) then {
                    dotyperef
                    dtype := values.pop
                } else {
                    util.syntax_error("Expected type after ':'.")
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
                util.syntax_error("Expected ',' or ')'.")
            }
        }
        expect("rparen")
        next
        if ((!sameline && accept("identifier")) ||
            acceptSameLine("identifier")) then {
            // The presence of an identifier here means
            // a multi-part method name.
            var tm := ast.methodNode.new(meth, signature, [], false)
            meth := parsempmndecrest(tm, sameline)
            varargs := varargs || tm.varargs
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
        var generics := genericIdents
    }
    o
}

// Accept an import statement. import takes a single identifier
// following, as in "import parser".
method doimport {
    if (accept("keyword") && (sym.value == "import")) then {
        next
        expect("string")
        pushstring
        def p = values.pop
        expect("identifier")
        if (sym.value != "as") then {
            util.syntax_error("Unexpected token {sym.kind}: '{sym.value}'; "
                ++ "expected 'as'.")
        }
        next
        expect("identifier")
        pushidentifier
        def n = values.pop
        def o = ast.importNode.new(p.value, n.value)
        if (accept("colon")) then {
            next
            dotypeterm
            o.dtype := values.pop
        }
        values.push(o)
    }
}

// Accept a return statement. return takes a mandatory argument,
// of the form "return x". x may be any expression.
method doreturn {
    if (accept("keyword") && (sym.value == "return")) then {
        next
        var retval
        if (tokenOnSameLine) then {
            expectConsume {expression}
            retval := values.pop
        } else {
            retval := ast.identifierNode.new("done", false)
        }
        var o := ast.returnNode.new(retval)
        values.push(o)
    }
}

method domethodtype {
    var m := methodsignature(true)
    var meth := m.m
    var signature := m.sig
    var dtype := m.rtype
    var varargs := m.v
    if (dtype == false) then {
        dtype := ast.identifierNode.new("Done", false)
    }
    var o := ast.methodTypeNode.new(meth.value, signature, dtype)
    o.generics := m.generics
    values.push(o)
    if (accept("semicolon")) then {
        next
    } else {
        if (!accept("rbrace")) then {
            if (lastToken.line == sym.line) then {
                util.syntax_error("Multiple methods on same line in type, "
                    ++ "after '{meth.value}'.")
            }
        }
    }
}

method doanontype {
    if (accept("lbrace")) then {
        def methods = []
        def mc = auto_count
        auto_count := auto_count + 1
        next
        while {accept("rbrace").not} do {
            expectConsume {domethodtype}
            methods.push(values.pop)
        }
        next
        def t = ast.typeNode.new("<Anon_{mc}>", methods)
        t.anonymous := true
        values.push(t)
    }
}
// Accept a type declaration.
method dotype {
    if (accept("keyword") && (sym.value == "type")) then {
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
        def anns = doannotation
        expect("op")
        if (sym.value != "=") then {
            util.syntax_error("Type declarations require '='.")
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
            def t = ast.typeNode.new(p.value, methods)
            t.generics := gens
            if (false != anns) then {
                t.annotations.extend(anns)
            }
            values.push(t)
        } else {
            dotyperef
            def ot = values.pop
            var nt
            if (ot.kind == "type") then {
                nt := ast.typeNode.new(p.value, ot.methods)
                nt.generics := nt.generics
                for (ot.unionTypes) do {ut->
                    nt.unionTypes.push(ut)
                }
                for (ot.intersectionTypes) do {ut->
                    nt.intersectionTypes.push(ut)
                }
                nt.generics := gens
            } else {
                nt := ast.typeNode.new(p.value, [])
            }
            if (false != anns) then {
                nt.annotations.extend(anns)
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
    } elseif ((sym.kind == "rbrace") || (sym.kind == "rparen")
        || (sym.kind == "rsquare")) then {
        // pass
    } elseif (sym.kind == "eof") then {
    } elseif (sym.indent < minIndentLevel) then {
        if ((sym.linePos - 1) != minIndentLevel) then {
            util.syntax_error("Block and indentation inconsistent "
                ++ "for token {sym.kind}: '{sym.value}'; "
                ++ "indentation is {sym.indent}, must be at least "
                ++ "{minIndentLevel}.")
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
        } elseif (sym.value == "import") then {
            doimport
        } elseif (sym.value == "dialect") then {
            dodialect
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
        ifConsume {expression} then {
            if (((values.last.kind == "identifier")
                || (values.last.kind == "member")
                || (values.last.kind == "index"))
                && accept("bind")) then {
                var dest := values.pop
                next
                expectConsume {expression}
                var val := values.pop
                var o := ast.bindNode.new(dest, val)
                values.push(o)
            }
        }
    }
    if (accept("eof")) then {
        return true
    }
    if (accept("semicolon")) then {
        def oldLine = sym.line
        next
        if (sym.line == oldLine) then {
            indentFreePass := true
        }
    } else {
        checkUnexpectedTokenAfterStatement
    }
}

method checkUnexpectedTokenAfterStatement {
    if (sym.line == lastToken.line) then {
        if (sym.kind != "rbrace") then {
            util.setPosition(sym.line, sym.linePos)
            if ((values.size > 0).andAlso {
                    (values.last.kind == "identifier").orElse {
                        values.last.kind == "member"
                    }.andAlso {
                        sym.kind == "identifier"
                    }
                }) then {
                util.syntax_error("Unexpected token after statement ended; "
                    ++ "got {sym.kind}: '{sym.value}', expected "
                    ++ "new line or semicolon. Did you mean "
                    ++ "'{values.last.toGrace 0}({sym.value})'?")
            } else {
                util.syntax_error("unexpected token after statement ended; "
                    ++ "got {sym.kind}: '{sym.value}', expected "
                    ++ "new line or semicolon.")
            }
        }
    }
}

// Parse the given list of tokens, returning a list of AST nodes
// corresponding to it.
method parse(toks) {
    util.log_verbose("processing tokens.")
    values := []
    if (util.extensions.contains("DefaultVisibility")) then {
        defaultDefVisibility := util.extensions.get("DefaultVisibility")
        defaultVarVisibility := util.extensions.get("DefaultVisibility")
        defaultMethodVisibility := util.extensions.get("DefaultVisibility")
    }
    if (util.extensions.contains("DefaultDefVisibility")) then {
        defaultDefVisibility := util.extensions.get("DefaultDefVisibility")
    }
    if (util.extensions.contains("DefaultVarVisibility")) then {
        defaultVarVisibility := util.extensions.get("DefaultVarVisibility")
    }
    if (util.extensions.contains("DefaultMethodVisibility")) then {
        defaultMethodVisibility := util.extensions.get("DefaultMethodVisibility")
    }
    var otoks := toks
    if (toks.size == 0) then {
        return toks
    }
    sym := toks.first
    tokens := []
    tokens.push(object {
        var kind := "eof"
        var line := toks.last.line
        var linePos := util.lines[toks.last.line].size + 1
        var indent := 0
        var value := ""
    })
    for (otoks.indices) do { i ->
        var o := otoks.pop
        tokens.push(o)
    }
    util.log_verbose("parsing.")
    linenum := 1
    next
    var oldlength := tokens.size + 0
    while {tokens.size > 0} do {
        blank
        methoddec
        blank
        inheritsdec
        blank
        statement
        if (tokens.size == oldlength) then {
            util.setPosition(sym.line, sym.linePos)
            util.syntax_error("No token consumed at top level. Have "
                ++ "{sym.kind}: '{sym.value}', expected statement.")
        }
        oldlength := tokens.size + 0
    }
    statement
    values
}
