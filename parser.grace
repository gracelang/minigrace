#pragma DefaultVisibility=public
import "io" as io
import "ast" as ast
import "util" as util
import "mgcollections" as collections
import "errormessages" as errormessages

def don'tBreak = true
var lastline := 0
var linenum := 0
var lastIndent := 0
var indentFreePass := false
var minIndentLevel := 0
var statementIndent := 0
var statementToken
var tokens := false
var values := []
var auto_count := 0
var don'tTakeBlock := false
var braceIsType := false
var defaultDefVisibility := "confidential"
var defaultVarVisibility := "confidential"
var defaultMethodVisibility := "public"

// Global object containing the current token
var sym
var lastToken := object {
    var kind := "start"
    var line := 1
    var linePos := 0
    var indent := 0
    var value := ""
    def size = 0
}

var comment := false

// Advance to the next token in the stream, with special handling
// so the magic "line" tokens update the line number for error output.
method next {
    lastToken := sym
    if (tokens.size > 0) then {
        lastline := linenum
        lastIndent := sym.indent
        sym := tokens.poll
        if (sym.kind == "comment") then {
            comment := ""
            while {(sym.kind == "comment").andAlso {tokens.size > 0}} do {
                comment := comment ++ sym.value
                sym := tokens.poll
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
            def size = 0
        }
    }
}

// Search for the next token that the given block returns true for.
// Used for generating suggestions.
method findNextToken(tokenMatcher) {
    if(tokenMatcher.apply(sym)) then {
        return sym
    }
    var nextTok := false
    var n := sym
    while {(n != false).andAlso { nextTok == false }.andAlso { n.indent >= lastToken.indent }} do {
        if(tokenMatcher.apply(n)) then {
            nextTok := n
        }
        n := n.next
    }
    nextTok
}

method findNextTokenIndentedAt(tok) {
    if(((sym.line > tok.line) && (sym.indent <= tok.indent)) || (sym.kind == "eof")) then {
        return sym
    }
    var nextTok := false
    var n := sym
    while {(n != false).andAlso { nextTok == false }} do {
        if(((n.line > tok.line) && (n.indent <= tok.indent)) || (sym.kind == "eof")) then {
            nextTok := n
        }
        n := n.next
    }
    nextTok
}

method findNextValidToken(*validFollowTokens) {
    // Tokens that cannot start an expression.
    def invalidTokens = ["dot", "comma", "colon", "rparen", "rbrace", "rsquare", "arrow", "bind"];
    var validToken := sym
    while {validToken.kind != "eof"} do {
        // If the token is a valid follow token, then return that token.
        if(validFollowTokens.contains(validToken.kind)) then {
            return validToken
        }
        // If the token is not an invalid token for starting an expression, return that token.
        if(!invalidTokens.contains(validToken.kind)) then {
            return validToken
        }
        // The token is invalid, go to the next one.
        validToken := validToken.next
    }
    return validToken
}

// Finds the closing brace for a given token (that is the beginning of a control
// structure with an opening brace. Returns an object with two fields: found
// and tok. If a closing brace is found, found is set to true, and tok is set to
// the closing brace. Otherwise found is set to false, and tok is set to the
// token that the closing brace should appear after.
method findClosingBrace(tok, inserted) {
    var n := sym
    var numOpening := if(inserted) then {1} else {0}
    var numClosing := 0
    def result = object {
        var found
        var tok
    }
    // Skip all tokens on the same line first.
    while {(n.kind != "eof") && (n.line == tok.line)} do {
        if(n.kind == "lbrace") then { numOpening := numOpening + 1 }
        elseif(n.kind == "rbrace") then { numClosing := numClosing + 1 }
        n := n.next
    }
    // Skip all tokens that have greater indent than the target closing brace.
    while {(n.kind != "eof") && (n.indent > tok.indent)} do {
        if(n.kind == "lbrace") then { numOpening := numOpening + 1 }
        elseif(n.kind == "rbrace") then { numClosing := numClosing + 1 }
        n := n.next
    }
    if(n.kind == "rbrace") then {
        result.found := true
        result.tok := n
    } elseif((n.prev.kind == "rbrace") && (numOpening == numClosing)) then {
        // Check that the number of opening and closing braces matches.
        result.found := true
        result.tok := n.prev
    } else {
        result.found := false
        result.tok := n.prev
    }
    result
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
// Check if block did consume at least one token.
method didConsume(ablock) {
    var sz := tokens.size
    ablock.apply
    tokens.size != sz
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
                    var tok := sym
                    // Look back from the current token to try and find the tokens that cause this error.
                    while {tok.value != ":"} do { tok := tok.prev }
                    def suggestion = errormessages.suggestion.new
                    suggestion.deleteTokenRange(tok, tok.next)leading(true)trailing(false)
                    errormessages.syntaxError("An argument to an annotation cannot have a type.")atRange(
                        tok.line, tok.linePos, tok.next.linePos + tok.next.size - 1)withSuggestion(suggestion)
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
    if(didConsume({expression}).not) then {
        def suggestions = []
        var suggestion := errormessages.suggestion.new
        def nextTok = findNextValidToken("bind")
        if(nextTok == sym) then {
            suggestion.insert(" «annotation»")afterToken(lastToken)
        } else {
            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «annotation»")
        }
        suggestions.push(suggestion)
        suggestion := errormessages.suggestion.new
        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
        suggestions.push(suggestion)
        errormessages.syntaxError("One or more annotations separated by commas must follow 'is'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)
    }
    while {accept("comma")} do {
        anns.push(checkAnnotation(values.pop))
        next
        if(didConsume({expression}).not) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken("bind")
            if(nextTok == sym) then {
                suggestion.insert(" «annotation»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «annotation»")
            }
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
            suggestions.push(suggestion)
            errormessages.syntaxError("One or more annotations separated by commas must follow 'is'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)
        }
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
    if(didConsume({dotypeterm}).not) then {
        def suggestions = []
        var suggestion := errormessages.suggestion.new
        suggestion.insert(" «type name»")afterToken(lastToken)
        suggestions.push(suggestion)
        suggestion := errormessages.suggestion.new
        suggestion.deleteToken(lastToken)
        suggestions.push(suggestion)
        suggestion := errormessages.suggestion.new
        suggestion.replaceToken(lastToken)with(":=")
        suggestions.push(suggestion)
        errormessages.syntaxError("A type name or type expression must follow ':'.")atPosition(
            sym.line, sym.linePos)withSuggestions(suggestions)
    }
    overallType := values.pop
    while {acceptSameLine("op") && (sym.value == "|")} do {
        if (unionTypes.size == 0) then {
            unionTypes.push(overallType)
        }
        next
        if(didConsume({dotypeterm}).not) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" «type name»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)
            suggestions.push(suggestion)
            errormessages.syntaxError("A type name or type expression must follow '|'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
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
        if(didConsume({dotypeterm}).not) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" «type name»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)
            suggestions.push(suggestion)
            errormessages.syntaxError("A type name or type expression must follow '&'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
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
                    if(didConsume({expression}).not) then {
                        def suggestions = []
                        var suggestion := errormessages.suggestion.new
                        def nextTok = findNextValidToken("arrow", "rbrace")
                        if(nextTok == sym) then {
                            suggestion.insert(" «expression»")afterToken(lastToken)
                        } else {
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                        }
                        suggestions.push(suggestion)
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                        suggestions.push(suggestion)
                        errormessages.syntaxError("A block must have an expression after the ':'.")atPosition(
                            sym.line, sym.linePos)withSuggestions(suggestions)
                    }
                    braceIsType := false
                    ident1.dtype := values.pop
                }
                params.push(ident1)
                if (ident1.kind != "identifier") then {
                    isMatchingBlock := true
                }
                if (isMatchingBlock && {accept("comma")}) then {
                    def suggestions = []
                    var suggestion
                    def arrow = findNextToken({ t -> t.kind == "arrow" })
                    if(arrow != false) then {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(sym, arrow.prev)
                        suggestions.push(suggestion)
                    }
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceToken(sym)leading(true)trailing(false)with(" |")
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A matching block may only have one parameter.")atRange(
                        sym.line, sym.linePos, sym.linePos)withSuggestions(suggestions)
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
                    def suggestion = errormessages.suggestion.new
                    if((sym.kind == "bind") || (sym.value == "=")) then {
                        suggestion.replaceToken(sym)with("->")
                    } else {
                        suggestion.insert(" ->")afterToken(lastToken)
                    }
                    errormessages.syntaxError("A block must have one or more parameters followed by '->' and an expression.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
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
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rbrace")
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A valid expression must follow ':='.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
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
            if(didConsume({statement}).not) then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert("}")afterToken(lastToken)
                errormessages.syntaxError("A block must end with a '}'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            tmp := values.pop
            body.push(tmp)
        }
        minIndentLevel := minInd - 1
        statementIndent := startIndent
        next
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
        if(sym.kind != "lparen") then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rparen or then.
            def nextTok = findNextToken({ t -> (t.line == btok.line)
                && ((t.kind == "rparen") || (t.kind == "lbrace")
                || ((t.kind == "identifier") && (t.value == "then"))) })
            if(nextTok == false) then {
                suggestion.insert(" («expression») then \{")afterToken(btok)
            } elseif(nextTok.kind == "rparen") then {
                if(nextTok == sym) then {
                    suggestion.insert("(«expression»")beforeToken(sym)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                }
            } elseif(nextTok.kind == "lbrace") then {
                if(nextTok == sym) then {
                    suggestion.insert(" («expression») then")afterToken(btok)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                    suggestion.insert(") then")afterToken(nextTok.prev)andTrailingSpace(true)
                }
            } elseif(nextTok.kind == "identifier") then {
                if(nextTok == sym) then {
                    suggestion.insert("(«expression») ")beforeToken(sym)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                    suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
                }
            }
            errormessages.syntaxError("An if statement must have an expression in parentheses after the 'if'.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
        next
        if(didConsume({expression}).not) then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rparen.
            var nextTok := findNextToken({ t -> (t.line == lastToken.line) && (t.kind == "rparen") })
            if(nextTok == false) then {
                nextTok := findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression») then \{")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression») then \{")
                }
                errormessages.syntaxError("An if statement must have an expression in parentheses after the 'if'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            } else {
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                    errormessages.syntaxError("An if statement must have an expression in parentheses after the 'if'.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(false)trailing(true)with("«expression»")
                    errormessages.syntaxError("An if statement must have an expression in parentheses after the 'if'.")atRange(
                        sym.line, sym.linePos, nextTok.linePos - 1)withSuggestion(suggestion)
                }
            }
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
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
            if(sym.kind != "lbrace") then {
                def suggestion = errormessages.suggestion.new
                def closingBrace = findClosingBrace(btok, true)
                if(closingBrace.found == false) then {
                    if(closingBrace.tok == lastToken) then {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{}")
                    } else {
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                    }
                } else {
                    suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                }
                errormessages.syntaxError("An if statement must have a '\{' after the 'then'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
            if (sym.line == lastToken.line) then {
                minIndentLevel := sym.linePos - 1
            } else {
                minIndentLevel := minInd
            }
            while {(accept("rbrace")).not} do {
                if(didConsume({statement}).not) then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, false)
                    if(closingBrace.found == false) then {
                        if(closingBrace.tok == lastToken) then {
                            suggestion.insert("}")afterToken(lastToken)
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                        }
                    }
                    suggestion.deleteToken(sym)
                    errormessages.syntaxError("An if statement must end with a '}'.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
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
                if(sym.kind != "lparen") then {
                    def suggestion = errormessages.suggestion.new
                    // Look ahead for a rparen or then.
                    def nextTok = findNextToken({ t -> (t.line == statementToken.line)
                        && ((t.kind == "rparen") || (t.kind == "lbrace")
                        || ((t.kind == "identifier") && (t.value == "then"))) })
                    if(nextTok == false) then {
                        suggestion.insert(" («expression») then \{")afterToken(statementToken)
                    } elseif(nextTok.kind == "rparen") then {
                        if(nextTok == sym) then {
                            suggestion.insert("(«expression»")beforeToken(sym)
                        } else {
                            suggestion.insert("(")beforeToken(sym)
                        }
                    } elseif(nextTok.kind == "lbrace") then {
                        if(nextTok == sym) then {
                            suggestion.insert(" («expression») then")afterToken(statementToken)
                        } else {
                            suggestion.insert("(")beforeToken(sym)
                            suggestion.insert(") then")afterToken(nextTok.prev)andTrailingSpace(true)
                        }
                    } elseif(nextTok.kind == "identifier") then {
                        if(nextTok == sym) then {
                            suggestion.insert("(«expression») ")beforeToken(sym)
                        } else {
                            suggestion.insert("(")beforeToken(sym)
                            suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
                        }
                    }
                    errormessages.syntaxError("An elseif statement must have an expression in parentheses after the 'elseif'.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
                next
                if(didConsume({expression}).not) then {
                    def suggestion = errormessages.suggestion.new
                    // Look ahead for a rparen or then.
                    var nextTok := findNextToken({ t -> (t.line == lastToken.line) && (t.kind == "rparen") })
                    if(nextTok == false) then {
                        nextTok := findNextValidToken("rparen")
                        if(nextTok == sym) then {
                            suggestion.insert("«expression») then \{")afterToken(lastToken)
                        } else {
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression») then \{")
                        }
                        errormessages.syntaxError("An elseif statement must have an expression in parentheses after the 'elseif'.")atPosition(
                            sym.line, sym.linePos)withSuggestion(suggestion)
                    } else {
                        if(nextTok == sym) then {
                            suggestion.insert("«expression»")afterToken(lastToken)
                            errormessages.syntaxError("An elseif statement must have an expression in parentheses after the 'elseif'.")atPosition(
                                sym.line, sym.linePos)withSuggestion(suggestion)
                        } else {
                            //checkInvalidExpression
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(false)trailing(true)with("«expression»")
                            errormessages.syntaxError("An elseif statement must have an expression in parentheses after the 'elseif'.")atRange(
                                sym.line, sym.linePos, nextTok.linePos - 1)withSuggestion(suggestion)
                        }
                    }
                }
                if(sym.kind != "rparen") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(")")afterToken(lastToken)
                    errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
                next
                econd := values.pop
                if ((accept("identifier") &&
                    (sym.value == "then"))) then {
                    next
                    ebody := []
                } else {
                    def suggestion = errormessages.suggestion.new
                    if(sym.kind == "lbrace") then {
                        def closingBrace = findClosingBrace(statementToken, false)
                        if(closingBrace.found == false) then {
                            if(closingBrace.tok == sym) then {
                                suggestion.replaceToken(sym)leading(true)trailing(false)with(" then \{}")
                            } else {
                                suggestion.replaceToken(sym)leading(true)trailing(false)with(" then \{")
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        } else {
                            suggestion.replaceToken(sym)leading(true)trailing(false)with(" then \{")
                        }
                    } else {
                        def closingBrace = findClosingBrace(statementToken, true)
                        if(closingBrace.found == false) then {
                            if(closingBrace.tok == lastToken) then {
                                suggestion.insert(" then \{}")afterToken(lastToken)
                            } else {
                                suggestion.insert(" then \{")afterToken(lastToken)
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        } else {
                            suggestion.insert(" then \{")afterToken(lastToken)
                        }
                    }
                    errormessages.syntaxError("An elseif statement must have 'then' after the expression in parentheses.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
                if(sym.kind != "lbrace") then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, true)
                    if(closingBrace.found == false) then {
                        if(closingBrace.tok == lastToken) then {
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{}")
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                        }
                    } else {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                    }
                    errormessages.syntaxError("An elseif statement must have a '\{' after the 'then'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
                next
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    if(didConsume({statement}).not) then {
                        def suggestion = errormessages.suggestion.new
                        def closingBrace = findClosingBrace(btok, false)
                        if(closingBrace.found == false) then {
                            if(closingBrace.tok == lastToken) then {
                                suggestion.insert("}")afterToken(lastToken)
                            } else {
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        }
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("An elseif statement must end with a '}'.")atPosition(
                            sym.line, sym.linePos)withSuggestion(suggestion)
                    }
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
                if(sym.kind != "lbrace") then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, true)
                    if(closingBrace.found == false) then {
                        if(closingBrace.tok == lastToken) then {
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{}")
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{")
                        }
                    } else {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{")
                    }
                    errormessages.syntaxError("An else statement must have a '\{' after the 'else'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
                next
                // Just take all the statements and put them into
                // curelse.
                if (sym.line == lastToken.line) then {
                    minIndentLevel := sym.linePos - 1
                } else {
                    minIndentLevel := minInd
                }
                while {(accept("rbrace")).not} do {
                    if(didConsume({statement}).not) then {
                        def suggestion = errormessages.suggestion.new
                        def closingBrace = findClosingBrace(btok, false)
                        if(closingBrace.found == false) then {
                            if(closingBrace.tok == lastToken) then {
                                suggestion.insert("}")afterToken(lastToken)
                            } else {
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        }
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("An else statement must end with a '}'.")atPosition(
                            sym.line, sym.linePos)withSuggestion(suggestion)
                    }
                    v := values.pop
                    curelse.push(v)
                }
                next
            }
            var o := ast.ifNode.new(cond, body, elseblock)
            values.push(o)
        } else {
            // Raise an error here, or it will spin nastily forever.
            def suggestion = errormessages.suggestion.new
            if(sym.kind == "lbrace") then {
                def closingBrace = findClosingBrace(btok, false)
                if(closingBrace.found == false) then {
                    if(closingBrace.tok == sym) then {
                        suggestion.replaceToken(sym)leading(true)trailing(false)with(" then \{}")
                    } else {
                        suggestion.replaceToken(sym)leading(true)trailing(false)with(" then \{")
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                    }
                } else {
                    suggestion.replaceToken(sym)leading(true)trailing(false)with(" then \{")
                }
            } else {
                def closingBrace = findClosingBrace(btok, true)
                if(closingBrace.found == false) then {
                    if(closingBrace.tok == lastToken) then {
                        suggestion.insert(" then \{}")afterToken(lastToken)
                    } else {
                        suggestion.insert(" then \{")afterToken(lastToken)
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                    }
                } else {
                    suggestion.insert(" then \{")afterToken(lastToken)
                }
            }
            errormessages.syntaxError("An if statement must have 'then' after the expression in parentheses.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
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
            if(didConsume({expression}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("Parentheses must contain a valid expression.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            if(didConsume({term}).not) then {
                def suggestions = []
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                suggestions.push(suggestion)
                if(lastToken.prev.kind == "bind") then {
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestion.deleteToken(lastToken.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                }
                errormessages.syntaxError("A prefix operator must be followed by an expression.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            }
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
        def startToken = sym
        next
        while {accept("identifier")} do {
            identifier
            while {accept("dot")} do {
                next
                def memberIn = values.pop
                if(sym.kind != "identifier") then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    suggestion.insert("«type name»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteToken(lastToken)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A type name must follow the '.'.")atPosition(
                        lastToken.line, lastToken.linePos + 1)withSuggestions(suggestions)
                }
                identifier
                def memberName = values.pop
                values.push(ast.memberNode.new(memberName.value, memberIn))
            }
            generic
            gens.push(values.pop)
            if (accept("comma")) then {
                next
            } else {
                if(sym.kind != "rgeneric") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(">")afterToken(lastToken)
                    def suggestion2 = errormessages.suggestion.new
                    suggestion2.insert(" ")beforeToken(startToken)
                    def suggestions = [suggestion, suggestion2]
                    errormessages.syntaxError("A type containing a '<' must end with a '>', or the '<' operator must have a space before it.")atPosition(
                            lastToken.line, lastToken.linePos + lastToken.size)
                        withSuggestions(suggestions)
                }
            }
        }
        if(sym.kind != "rgeneric") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(">")afterToken(lastToken)
            def suggestion2 = errormessages.suggestion.new
            suggestion2.insert(" ")beforeToken(startToken)
            def suggestions = [suggestion, suggestion2]
            errormessages.syntaxError("A type containing a '<' must end with a '>', or the '<' operator must have a space before it.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)
                withSuggestions(suggestions)
        }
        next
        values.push(ast.genericNode.new(id, gens))
    }
}
method catchcase {
    if (!(accept("identifier") && (sym.value == "catch"))) then {
        return 0
    }
    def localmin = minIndentLevel
    def catchTok = sym
    next
    if (accept("lbrace")) then {
        block
    } else {
        if(sym.kind != "lparen") then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rbrace, rparen, or case.
            def nextTok = findNextToken({ t -> (t.kind == "rbrace")
                || ((t.kind == "rparen") && (t.line == catchTok.line))
                || ((t.kind == "identifier") && (t.value == "case")) })
            if(nextTok == false) then {
                suggestion.insert(" \{}")afterToken(catchTok)
            } elseif(nextTok.kind == "rbrace") then {
                suggestion.insert(" \{")afterToken(catchTok)
            } elseif(nextTok.kind == "rparen") then {
                if(nextTok == sym) then {
                    suggestion.insert("(«expression»")afterToken(lastToken)andTrailingSpace(true)
                } else {
                    suggestion.insert("(")afterToken(lastToken)andTrailingSpace(true)
                }
            } elseif(nextTok.kind == "identifier") then {
                suggestion.insert(" \{")afterToken(catchTok)
                suggestion.insert("\} ")beforeToken(nextTok)
            }
            errormessages.syntaxError("A catch statement must have either a block or an expression in parentheses after the 'catch'.")atPosition(
                catchTok.line, catchTok.linePos + catchTok.size + 1)withSuggestion(suggestion)
        }
        next
        if(didConsume({expression}).not) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken("rparen")
            if(nextTok == sym) then {
                suggestion.insert("«expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
            }
            errormessages.syntaxError("A catch statement must have either a block or an expression in parentheses after the 'catch'.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
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
            if(didConsume({expression}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("A catch statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = []
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(nextTok == false) then {
                suggestion.insert(" }")afterToken(tokens.last)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif(nextTok == sym) then {
                suggestion.insert(" («expression»)")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(" \{ «match expression» }")afterToken(lastToken)
                suggestions.push(suggestion)
            } else {
                suggestion.insert(" }")afterToken(nextTok.prev)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("A catch statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        cases.push(values.pop)
    }
    if (accept("identifier") && (sym.value == "finally")) then {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            if(didConsume({expression}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("A catch statement must have either a block or an expression in parentheses after the 'finally'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = []
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(nextTok == false) then {
                suggestion.insert(" }")afterToken(tokens.first)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif(nextTok == sym) then {
                suggestion.insert(" («expression»)")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(" \{ «expression» }")afterToken(lastToken)
                suggestions.push(suggestion)
            } else {
                suggestion.insert(" }")afterToken(nextTok.prev)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("A catch statement must have either a block or an expression in parentheses after the 'finally'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
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
    def matchTok = sym
    next
    if(sym.kind != "lparen") then {
        def suggestion = errormessages.suggestion.new
        // Look ahead for a rparen or case.
        def nextTok = findNextToken({ t -> ((t.kind == "rparen") && (t.line == matchTok.line))
            || ((t.kind == "identifier") && (t.value == "case")) })
        if(nextTok == false) then {
            suggestion.insert("(«expression»)")afterToken(matchTok)
        } elseif(nextTok.kind == "rparen") then {
            if(nextTok == sym) then {
                suggestion.insert("(«expression»")beforeToken(sym)
            } else {
                suggestion.insert("(")beforeToken(sym)
            }
        } elseif(nextTok.kind == "identifier") then {
            suggestion.insert("(")beforeToken(sym)
            suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
        }
        errormessages.syntaxError("A match statement must have an expression in parentheses after the 'match'.")atPosition(
            matchTok.line, matchTok.linePos + matchTok.size)withSuggestion(suggestion)
    }
    next
    if(didConsume({expression}).not) then {
        def suggestion = errormessages.suggestion.new
        def nextTok = findNextValidToken("rparen")
        if(nextTok == sym) then {
            suggestion.insert("«expression»")afterToken(lastToken)
        } else {
            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
        }
        errormessages.syntaxError("A match statement must have an expression in parentheses after the 'match'.")atPosition(
            sym.line, sym.linePos)withSuggestion(suggestion)
    }
    def matchee = values.pop
    if(sym.kind != "rparen") then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert(")")afterToken(lastToken)
        errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
    }
    next
    def cases = []
    var elsecase := false
    while {accept("identifier") && (sym.value == "case")} do {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            if(didConsume({expression}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("A match statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = []
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(nextTok == false) then {
                suggestion.insert(" }")afterToken(tokens.last)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif(nextTok == sym) then {
                suggestion.insert(" («expression»)")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(" \{ «match expression» }")afterToken(lastToken)
                suggestions.push(suggestion)
            } else {
                suggestion.insert(" }")afterToken(nextTok.prev)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("A match statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        cases.push(values.pop)
    }
    if (accept("identifier") && (sym.value == "else")) then {
        next
        if (accept("lbrace")) then {
            block
        } elseif (accept("lparen")) then {
            next
            if(didConsume({expression}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken("rparen")
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("A match statement must have either a block or an expression in parentheses after the 'else'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = []
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(nextTok == false) then {
                suggestion.insert(" }")afterToken(tokens.first)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif(nextTok == sym) then {
                suggestion.insert(" («expression»)")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(" \{ «expression» }")afterToken(lastToken)
                suggestions.push(suggestion)
            } else {
                suggestion.insert(" }")afterToken(nextTok.prev)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("A match statement must have either a block or an expression in parentheses after the 'else'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
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
        if(didConsume({expression}).not) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken("rparen")
            if(nextTok == sym) then {
                suggestion.insert("«expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
            }
            errormessages.syntaxError("Parentheses must contain a valid expression.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
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
        if(didConsume({expression}).not) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken("rsquare")
            if(nextTok == sym) then {
                suggestion.insert("«index»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«index»")
            }
            suggestions.push(suggestion)
            if(nextTok.kind == "rsquare") then {
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok)leading(true)trailing(false)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("A '[' in an expression must be followed by another expression and a ']'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        var index := values.pop
        if(sym.kind != "rsquare") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert("]")afterToken(lastToken)
            errormessages.syntaxError("A '[' in an expression must be followed by another expression and a ']'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
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
                def suggestions = []
                var suggestion := errormessages.suggestion.new
                suggestion.insert(")")afterToken(sym)
                suggestion.insert("(")beforeToken(lastToken.prev)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken.prev)
                suggestion.insert("(")beforeToken(lastToken.prev.prev.prev)
                suggestions.push(suggestion)
                errormessages.syntaxError("An expression containing both mathematical and non-mathematical operators requires parentheses.")atPosition(
                    lastToken.prev.line, lastToken.prev.linePos)withSuggestions(suggestions)
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
                if(didConsume({expression}).not) then {
                    def suggestion = errormessages.suggestion.new
                    def nextTok = findNextValidToken("rparen")
                    if(nextTok == sym) then {
                        suggestion.insert("«expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                    }
                    errormessages.syntaxError("Parentheses must contain a valid expression.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
                if(sym.kind != "rparen") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(")")afterToken(lastToken)
                    errormessages.syntaxError("An expression beginning with a '(' must end with a ')'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
                next
            } else {
                if (!tokenOnSameLine) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    suggestion.deleteToken(lastToken)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.insert(" «expression»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.insert(" " ++ util.lines[sym.line])afterToken(lastToken)
                    suggestion.deleteLine(sym.line)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A valid expression must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
                }
                if(didConsume({term}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("comma", "rparen", "rsquare", "rbrace")
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A valid expression must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
                }
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
            errormessages.syntaxError("Values left on term stack.")atPosition(sym.line, sym.linePos)
        }
    }
}

// Accept a member lookup with ".". This consumes the dot and
// a following identifier, and will pass along to further lookups or
// method calls on the result.
method dotrest {
    if (acceptSameLine("dot")) then {
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
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.insert("«method name»")afterToken(lastToken)
            suggestions.push(suggestion)
            errormessages.syntaxError("A field or method name must follow a '.'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
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
        def startToken = sym
        next
        genericIdents := collections.list.new
        while {accept("identifier")} do {
            identifier
            genericIdents.push(values.pop)
            if (accept("comma")) then {
                next
            }
        }
        if(sym.kind != "rgeneric") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(">")afterToken(lastToken)
            def suggestion2 = errormessages.suggestion.new
            suggestion2.insert(" ")beforeToken(startToken)
            def suggestions = [suggestion, suggestion2]
            errormessages.syntaxError("A method request containing a '<' must have a matching '>', or the '<' operator must have a space before it.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)
                withSuggestions(suggestions)
        }
        next
    }
    if (acceptSameLine("lparen")) then {
        part.line := sym.line
        part.linePos := sym.linePos
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
                    def suggestion = errormessages.suggestion.new
                    if(sym.next.kind == "identifier") then {
                        suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)
                        errormessages.syntaxError("Only variables and constants may be followed by a ':' and a type.")atRange(
                            sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)
                    } else {
                        suggestion.deleteToken(sym)leading(true)trailing(false)
                        errormessages.syntaxError("Only variables and constants may be followed by a ':' and a type.")atRange(
                            sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)
                    }
                }
                next
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rparen")
                    if(nextTok == sym) then {
                        suggestion.insert(" «type name»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «type name»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A type name or type expression must follow ':'.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
                tmp.dtype := values.pop
                values.push(tmp)
            }
            while {accept("comma")} do {
                tmp := values.pop
                part.args.push(tmp)
                next
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rparen")
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A method call must have an expression after a ','.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
                // For matching blocks - same as above
                if (accept("colon")) then {
                    tmp := values.pop
                    if (tmp.kind != "identifier") then {
                        def suggestion = errormessages.suggestion.new
                        if(sym.next.kind == "identifier") then {
                            suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)
                            errormessages.syntaxError("Only variables and constants may be followed by a ':' and a type.")atRange(
                                sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)
                        } else {
                            suggestion.deleteToken(sym)
                            errormessages.syntaxError("Only variables and constants may be followed by a ':' and a type.")atRange(
                                sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)
                        }
                    }
                    next
                    if(didConsume({expression}).not) then {
                        def suggestions = []
                        var suggestion := errormessages.suggestion.new
                        def nextTok = findNextValidToken("rparen")
                        if(nextTok == sym) then {
                            suggestion.insert(" «type name»")afterToken(lastToken)
                        } else {
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «type name»")
                        }
                        suggestions.push(suggestion)
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                        suggestions.push(suggestion)
                        errormessages.syntaxError("A type name or type expression must follow ':'.")atPosition(
                            sym.line, sym.linePos)withSuggestions(suggestions)
                    }
                    tmp.dtype := values.pop
                    values.push(tmp)
                }
            }
            tmp := values.pop
            part.args.push(tmp)
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("A method call beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        if (sym.line == part.line) then {
            part.lineLength := sym.linePos - part.linePos
        }
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
            def meth' = ast.identifierNode.new(methn, false)
            meth'.line := lnum
            meth'.linePos := lpos
            methn := callmprest(meth', signature, tok)
            if (meth.kind == "member") then {
                // callmprest loses this information, so restore
                // the member lookup (for x.between(3)and(10)-type
                // calls).
                meth := ast.memberNode.new(methn.value, meth.in)
            } else {
                meth := methn
            }
        }
        util.setline(lnum)
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
            def suggestion = errormessages.suggestion.new
            if(sym.kind == "identifier") then {
                suggestion.replaceToken(sym)leading(true)trailing(false)with("({sym.value})")
                if(methname == "while()do") then {
                    errormessages.syntaxError("A while loop must have either a loop body in braces, or a block in parentheses.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } elseif(methname == "for()do") then {
                    errormessages.syntaxError("A for loop must have either a loop body in braces, or a block in parentheses.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
                errormessages.syntaxError("A multi-part method call must have parentheses around each part of the method.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            } else {
                if(methname == "while()do") then {
                    suggestion.insert(" \{}")afterToken(lastToken)
                    errormessages.syntaxError("A while loop must have a body.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } elseif(methname == "for()do") then {
                    suggestion.insert(" \{}")afterToken(lastToken)
                    errormessages.syntaxError("A for loop must have a body.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } else {
                    suggestion.insert("()")afterToken(lastToken)
                    errormessages.syntaxError("A multi-part method call must end with '()'.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
            }
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
            if(sym.kind != "rparen") then {
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rparen")
                    if(nextTok == sym) then {
                        suggestion.insert("«expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                        suggestions.push(suggestion)
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                    }
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A method call must have an expression or a ')' after a '('.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
            }
            while {accept("comma")} do {
                nxt := values.pop
                part.args.push(nxt)
                next
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rparen")
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A method call must have an expression after a ','.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
            }
        }
        if (!isEmpty) then {
            nxt := values.pop
            part.args.push(nxt)
        }
        if (isTerm.not) then {
            if(sym.kind != "rparen") then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("A part of a multi-part method call beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
        }
        if (accept("rparen") && isTerm.not) then {
            ln := lastline
            next
        }
    }
    def meth' = ast.identifierNode.new(methname, false)
    meth'.line := meth.line
    meth'.linePos := meth.linePos
    meth'
}

// Accept a const declaration
method defdec {
    if (accept("keyword") && (sym.value == "def")) then {
        def line = sym.line
        def pos = sym.linePos
        def defTok = sym
        next
        if(sym.kind != "identifier") then {
            def suggestion = errormessages.suggestion.new
            def nextToken = findNextToken({ t -> (t.kind == "op")
                && (t.value == "=") && (t.line == sym.line)})
            if(nextToken == false) then {
                suggestion.insert(" «name» =")afterToken(lastToken)
            } elseif(nextToken == sym) then {
                suggestion.insert(" «name»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextToken.prev)leading(false)trailing(true)with("«name» ")
            }
            errormessages.syntaxError("A constant declaration must have a name, a '=', and a value after the 'def'.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
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
            if(didConsume({expression}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken()
                if(nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                }
                errormessages.syntaxError("A constant declaration must have a value after the '='.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            val := values.pop
        } elseif (accept("bind")) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.replaceToken(sym)with("=")
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.replaceToken(defTok)with("var")
            suggestions.push(suggestion)
            errormessages.syntaxError("A constant declaration must use '=' instead of ':='. A variable declaration uses 'var' and ':='.")atRange(
                sym.line, sym.linePos, sym.linePos + 1)withSuggestions(suggestions)
        } else {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" = «expression»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.replaceToken(defTok)with("var")
            suggestions.push(suggestion)
            errormessages.syntaxError("A constant declaration must have a '=' and a value after the name. "
                ++ "A variable declaration does not require a value and uses 'var' instead of 'def'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
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
        if ((!hasVisibility) && (!hasAccessibility)) then {
            if (defaultDefVisibility == "public") then {
                o.annotations.push(ast.identifierNode.new("public", false))
            }
        }
        o.startToken := defTok
        values.push(o)
    }
}

// Accept a var declaration
method vardec {
    if (accept("keyword") && (sym.value == "var")) then {
        def line = sym.line
        def pos = sym.linePos
        def varTok = sym
        next
        if(sym.kind != "identifier") then {
            def suggestion = errormessages.suggestion.new
            def nextToken = findNextToken({ t -> (t.kind == "bind")
                && (t.line == sym.line)})
            if((nextToken == false).orElse({nextToken == sym})) then {
                suggestion.insert(" «name»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextToken.prev)leading(false)trailing(true)with("«name» ")
            }
            errormessages.syntaxError("A variable declaration must have a name after the 'var'.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
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
            if(didConsume({expression}).not) then {
                def suggestions = []
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken()
                if(nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("A variable declaration must have a value after the ':='. "
                    ++ "A variable without a value can be declared with 'var' followed only by the variable name.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            }
            val := values.pop
        }
        if (accept("op") && (sym.value == "=")) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.replaceToken(sym)with(":=")
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.replaceToken(varTok)with("def")
            suggestions.push(suggestion)
            errormessages.syntaxError("A variable declaration must use ':=' instead of '='. A constant declaration uses 'def' and '='.")atRange(
                sym.line, sym.linePos, sym.linePos)withSuggestions(suggestions)
        }
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
        if ((!hasVisibility) && (!hasAccessibility)) then {
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
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rsquare")
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A list must contain zero or more valid expressions separated by commas.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
            }
            tmp := values.pop
            params.push(tmp)
        }
        if(sym.kind != "rsquare") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert("]")afterToken(lastToken)
            errormessages.syntaxError("A list beginning with a '[' must end with a ']'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        var o := ast.arrayNode.new(params)
        values.push(o)
        next
    }
}

// Accept "dialect "X""
method dodialect {
    if (accept("keyword") && (sym.value == "dialect")) then {
        next
        if(sym.kind != "string") then {
            def suggestion = errormessages.suggestion.new
            var errorPos
            if((sym.kind == "identifier") && (sym.line == lastToken.line)) then {
                suggestion.replaceToken(sym)with("\"{sym.value}\"")
                errorPos := sym.linePos
            } else {
                suggestion.insert(" \"«dialect name»\"")afterToken(lastToken)
                errorPos := lastToken.linePos + lastToken.size + 1
            }
            errormessages.syntaxError("A dialect statement must have the name of the dialect in quotes after the 'dialect'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        values.push(ast.dialectNode.new(sym.value))
        next
    }
}

// Accept "inherits X.new"
method inheritsdec {
    if (accept("keyword") && (sym.value == "inherits")) then {
        checkIndent
        next
        if(didConsume({expression}).not) then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken("rsquare")
            if(nextTok == sym) then {
                suggestion.insert(" «parent»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «parent»")
            }
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
            suggestions.push(suggestion)
            errormessages.syntaxError("An inheritance statement must have the object being inherited from after the 'inherits'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)
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
        if(sym.kind != "lbrace") then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextToken({ t -> t.kind == "rbrace" })
            if(nextTok == false) then {
                suggestion.insert(" \{}")afterToken(lastToken)
            } else {
                suggestion.insert(" \{")afterToken(lastToken)
            }
            errormessages.syntaxError("An object must have a '\{' afer the 'object'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
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
                if(sym.kind != "rbrace") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert("}")afterToken(lastToken)
                    errormessages.syntaxError("An object must end with a '}'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
            } elseif ((values.size == sz) && (lastToken.kind != "semicolon")) then {
                def suggestion = errormessages.suggestion.new
                suggestion.deleteToken(sym)
                errormessages.syntaxError("An object can only contain variable, constant, and method declarations; and statements.")atRange(
                    sym.line, sym.linePos, sym.linePos + sym.size - 1)withSuggestion(suggestion)
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
        if(sym.kind != "identifier") then {
            def suggestions = []
            if(sym.kind == "lbrace") then {
                var suggestion := errormessages.suggestion.new
                suggestion.insert(" «class name».new")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.replaceToken(lastToken)with("object")
                suggestions.push(suggestion)
            } else {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(" «class name».new \{}")afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("A class must have a name after the 'class'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)
        }
        pushidentifier // A class currently cannot be anonymous
        def cname = values.pop
        if (!accept("dot")) then {
            def suggestion = errormessages.suggestion.new
            suggestion.replaceToken(sym) with(".")
            errormessages.syntaxError "A class must have a dot after the object name."
                atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)
                withSuggestion(suggestion)
        }
        next
        var s := methodsignature(false)
        var csig := s.sig
        var constructorName := s.m
        var dtype := s.rtype
        def anns = doannotation
        if (!accept("lbrace")) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(" \{")afterToken(lastToken)
            errormessages.syntaxError("A class must have a '\{' after the name.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)
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
            if(sym.kind != "rbrace") then {
                def suggestion = errormessages.suggestion.new
                def closingBrace = findClosingBrace(btok, false)
                if(closingBrace.found == false) then {
                    if(closingBrace.tok == sym) then {
                        suggestion.insert("}")afterToken(lastToken)
                    } else {
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                    }
                }
                suggestion.deleteToken(sym)
                errormessages.syntaxError("A method must end with a '}'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            next
            minIndentLevel := localMin
        } else {
            def suggestion = errormessages.suggestion.new
            def closingBrace = findClosingBrace(btok, true)
            if(closingBrace.found == false) then {
                if(closingBrace.tok == lastToken) then {
                    suggestion.insert(" \{}")afterToken(lastToken)andTrailingSpace(true)
                } else {
                    suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                    suggestion.insert(" \{")afterToken(lastToken)andTrailingSpace(true)
                }
            } else {
                suggestion.insert(" \{")afterToken(lastToken)andTrailingSpace(true)
            }
            errormessages.syntaxError("A method must have a '\{' after the name.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
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
            def suggestion = errormessages.suggestion.new
            suggestion.insert("()")afterToken(lastToken)
            errormessages.syntaxError("A multi-part method must have parentheses around each part of the method.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
        next
        var comma := false
        while {accept("identifier")
                || (accept("op") && (sym.value == "*"))} do {
            if (accept("op")) then {
                next
                vararg := true
                if(sym.kind != "identifier") then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    suggestion.insert("«parameter name»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    if(comma == false) then {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteToken(lastToken)
                        suggestions.push(suggestion)
                    } else {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(comma, lastToken)
                        suggestions.push(suggestion)
                    }
                    errormessages.syntaxError("A variable length parameter (a parameter beginning with a '*') must have a name after the '*'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
                }
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
                if(sym.kind != "rparen") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(")")afterToken(lastToken)
                    errormessages.syntaxError("A part of a multi-part method beginning with a '(' must end with a ')'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
            } else {
                part.params.push(nxt)
            }
            if (accept("comma")) then {
                comma := sym
                next
            }
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("A part of a multi-part method beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        next
        signature.push(part)
    }
    ast.identifierNode.new(methname, false)
}

// Accept a method signature
method methodsignature(sameline) {
    if((sym.kind != "identifier") && (sym.kind != "op") && (sym.kind != "lsquare")) then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert(" «method name»")afterToken(lastToken)
        errormessages.syntaxError("A method name must either start with an identifier or '[]'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
    }
    pushidentifier
    var meth := values.pop
    var signature := []
    var part := ast.signaturePart.new(meth.value)
    var genericIdents := []
    signature.push(part)
    if (meth.value == "[") then {
        if(sym.kind != "rsquare") then {
            if((sym.kind == "identifier") && ((tokens.size == 0).orElse
                {tokens.first.kind == "rsquare"})) then {
                def suggestions = []
                def suggestion = errormessages.suggestion.new
                if(tokens.size == 0) then {
                    suggestion.replaceToken(sym)with("]({sym.value})")
                    suggestions.push(suggestion)
                } elseif(tokens.first.line == meth.line) then {
                    suggestion.replaceTokenRange(sym, tokens.first)with("]({sym.value})")
                    suggestions.push(suggestion)
                }
                errormessages.syntaxError("A method name beginning with '[]' must have the parameter name in parentheses after the '[]'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            } else {
                def suggestion = errormessages.suggestion.new
                suggestion.insert("]")afterToken(lastToken)
                errormessages.syntaxError("A method name must either start with an identifier or '[]'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
        }
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
        if(sym.kind != "rgeneric") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(">")afterToken(lastToken)
            errormessages.syntaxError("A type containing a '<' must end with a '>'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
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
        def lparen = sym
        part.linePos := sym.linePos
        next
        var id
        var comma := false
        while {accept("identifier") ||
                (accept("op") && (sym.value == "*"))} do {
            // Parse the parameter list, including optional dtype
            // annotations.
            if (accept("op")) then {
                next
                if(sym.kind != "identifier") then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    suggestion.insert("«parameter name»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    if(comma == false) then {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteToken(lastToken)
                        suggestions.push(suggestion)
                    } else {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(comma, lastToken)
                        suggestions.push(suggestion)
                    }
                    errormessages.syntaxError("A variable length parameter (a parameter beginning with a '*') must have a name after the '*'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
                }
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
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    suggestion.insert(" «type name»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteToken(lastToken)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A type name or type expression must follow ':'.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
            }
            id.dtype := dtype
            if (vararg) then {
                part.vararg := id
                if(sym.kind != "rparen") then {
                    def suggestion = errormessages.suggestion.new
                    def rparen = findNextToken({ t -> (t.kind == "rparen") && (t.line == sym.line) })
                    if((sym.kind == "comma") && (rparen != false)) then {
                        suggestion.insert(",*{id.value}")beforeToken(rparen)
                        suggestion.deleteTokenRange(lparen.next, sym)leading(true)trailing(false)
                        errormessages.syntaxError("A variable length parameter (a parameter beginning with a '*') cannot have any more parameters after it.")atRange(
                            lastToken.line, sym.linePos, rparen.linePos - 1)withSuggestion(suggestion)
                    } else {
                        suggestion.insert(")")afterToken(lastToken)
                        errormessages.syntaxError("A part of a method beginning with a '(' must end with a ')'.")atPosition(
                            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                    }
                }
            } else {
                part.params.push(id)
            }
            if (accept("comma")) then {
                comma := sym
                next
            } elseif (sym.kind != "rparen") then {
                if(sym.kind != "rparen") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(")")afterToken(lastToken)
                    errormessages.syntaxError("A part of a method beginning with a '(' must end with a ')'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
            }
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            def rparen = findNextToken({ t -> (t.kind == "rparen") && (t.line == lastToken.line) })
            if(rparen == false) then {
                suggestion.replaceToken(lastToken)with(")")
            } else {
                suggestion.deleteToken(sym)
            }
            errormessages.syntaxError("A part of a method beginning with a '(' must end with a ')'.")atRange(
                lastToken.line, lastToken.linePos, lastToken.linePos)withSuggestion(suggestion)
        }
        if (sym.line == part.line) then {
            part.lineLength := sym.linePos - part.linePos
        }
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
        def importline = sym.line
        next
        if(sym.kind != "string") then {
            var suggestion := errormessages.suggestion.new
            var errorPos
            if((sym.kind == "identifier") && (sym.line == lastToken.line)) then {
                suggestion.replaceToken(sym)with("\"{sym.value}\"")
                errorPos := sym.linePos
            } else {
                suggestion.insert(" \"«module name»\"")afterToken(lastToken)
                errorPos := lastToken.linePos + lastToken.size + 1
            }
            errormessages.syntaxError("An import statement must have the name of the module in quotes, 'as', and an identifier after 'import'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        pushstring
        def p = values.pop
        if((sym.kind != "identifier") || (sym.value != "as")) then {
            var suggestion := errormessages.suggestion.new
            if((sym.kind == "identifier") && (sym.line == lastToken.line)) then {
                suggestion.insert(" as")afterToken(lastToken)
            } else {
                suggestion.insert(" as {p.value}")afterToken(lastToken)
            }
            errormessages.syntaxError("An import statement must have 'as', and an identifier after the name of the module in quotes.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)
        }
        next
        if(sym.kind != "identifier") then {
            var suggestion := errormessages.suggestion.new
            var errorPos
            if((sym.kind == "string") && (sym.line == lastToken.line)) then {
                suggestion.replaceToken(sym)with("{sym.value}")
                errorPos := sym.linePos
            } else {
                suggestion.insert(" {p.value}")afterToken(lastToken)
                errorPos := lastToken.linePos + lastToken.size + 1
            }
            errormessages.syntaxError("An import statement must have an identifier after 'as'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        pushidentifier
        def n = values.pop
        util.setline(importline)
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
            if(didConsume({expression}).not) then {
                def suggestions = []
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken("rbrace")
                if(nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteToken(sym)leading(true)trailing(false)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                }
                suggestions.push(suggestion)
                errormessages.syntaxError("A return statement must have either an expression or a new-line after 'return'.")atRange(
                    sym.line, sym.linePos, sym.linePos + sym.size - 1)withSuggestions(suggestions)
            }
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
                def suggestion = errormessages.suggestion.new
                def newLine = util.lines[sym.line].substringFrom(1)to(lastToken.linePos - 1) ++ sym.value
                suggestion.addLine(sym.line + 0.1, newLine)
                suggestion.deleteToken(sym)leading(true)trailing(true)
                errormessages.syntaxError("Each method must be on a separate line in a type.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
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
            domethodtype
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
        if(sym.kind != "identifier") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(" «type name»")afterToken(lastToken)
            errormessages.syntaxError("A type declaration must have a name after the 'type'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)
        }
        pushidentifier
        generic
        var p := values.pop
        var gens := []
        if (p.kind == "generic") then {
            gens := p.params
            p := p.value
        }
        def anns = doannotation
        if((sym.kind != "op") || (sym.value != "=")) then {
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextToken({ t -> t.kind == "lbrace" })
            if((nextTok == false).orElse({nextTok == sym})) then {
                suggestion.insert(" =")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)with("=")
            }
            errormessages.syntaxError("A type declaration must have a '=' after the type name.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)
        }
        next
        def methods = []
        if (accept("lbrace")) then {
            next
            while {accept("rbrace").not} do {
                domethodtype
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
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            for(1..(minIndentLevel - (sym.linePos - 1))) do {
                suggestion.insert(" ")atPosition(1)onLine(sym.line)
            }
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            // Find the indent level for the opening brace.
            var tok := lastToken
            while {(tok.linePos != (tok.indent + 1)) || (tok.indent >= minIndentLevel)} do { tok := tok.prev }
            var line := ""
            for(1..(tok.indent)) do {
                line := line ++ " "
            }
            line := line ++ "}"
            suggestion.addLine(sym.line - 0.9, line)
            suggestions.push(suggestion)
            errormessages.syntaxError("The indentation for this line must be at least {minIndentLevel}. This is often caused by a missing '}'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
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
                if(didConsume({expression}).not) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken("rbrace")
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("A valid expression must follow ':='.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
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
        if ((sym.kind == "op") && (sym.value == "=")
            && (lastToken.kind == "identifier")) then {
            def sugg = errormessages.suggestion.new
            sugg.replaceToken(sym)leading(false)trailing(false)with(":=")
            errormessages.syntaxError("Assignment uses ':=', not '='.")
                atRange(sym.line, sym.linePos, sym.linePos)withSuggestion(sugg)
        }
        if (sym.kind == "rgeneric") then {
            def sugg = errormessages.suggestion.new
            sugg.insert(" ")atPosition(sym.linePos)onLine(sym.line)
            errormessages.syntaxError(
                    "The '>' operator must have a space before it.")
                atRange(sym.line, sym.linePos, sym.linePos)
                withSuggestion(sugg)
        }
        if (sym.kind != "rbrace") then {
            def suggestions = []
            var suggestion
            if ((values.size > 0).andAlso {
                    (values.last.kind == "identifier").orElse {
                        values.last.kind == "member"
                    }.andAlso {
                        sym.kind == "identifier"
                    }
                }) then {
                suggestion := errormessages.suggestion.new
                suggestion.replaceToken(sym)leading(true)trailing(false)with("({sym.value})")
                suggestions.push(suggestion)
            }
            def nextTok = findNextValidToken("rbrace")
            if(nextTok == sym) then {
                suggestion := errormessages.suggestion.new
                suggestion.addLine(lastToken.line, util.lines[lastToken.line].substringFrom(1)to(lastToken.linePos + lastToken.size - 1))
                def newLine = util.lines[sym.line].substringFrom(sym.linePos)to(util.lines[sym.line].size)
                suggestion.addLine(lastToken.line + 0.1, newLine)
                suggestions.push(suggestion)
            } else {
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("Multiple statements must be separated by a newline or a semicolon. This is often caused by missing parentheses.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
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
    if (toks.size == 0) then {
        return []
    }
    tokens := toks
    sym := tokens.first
    sym.prev := lastToken
// TODO: Do this in lexer.
    tokens.push(object {
        var kind := "eof"
        var line := tokens.last.line
        var linePos := util.lines[tokens.last.line].size + 1
        var indent := 0
        var value := ""
        def size = 0
        var next := false
        var prev := false
    })
    util.log_verbose("parsing.")
    linenum := 1
    next
    var oldlength := tokens.size
    while {tokens.size > 0} do {
        blank
        methoddec
        blank
        inheritsdec
        blank
        statement
        if (tokens.size == oldlength) then {
            def suggestion = errormessages.suggestion.new
            suggestion.deleteToken(sym)
            errormessages.syntaxError("Invalid statement. This is often caused by an extra '}', ')', or ']'.")atRange(
                sym.line, sym.linePos, sym.linePos + sym.size - 1)withSuggestion(suggestion)
        }
        oldlength := tokens.size
    }
    statement
    values
}
