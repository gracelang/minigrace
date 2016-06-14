#pragma ExtendedLineups
import "io" as io
import "ast" as ast
import "util" as util
import "errormessages" as errormessages

var blankLocation := 0
var lastLine := 0
var lastIndent := 0
var indentFreePass := false
var minIndentLevel := 0
var statementIndent := 0
var tokens := false
var values := [ ]
var moduleObject
var comments := emptyList   // so we can request `removeAt`
var auto_count := 0
def noBlocks = false
def blocksOK = true
var braceIsType := false

// sym is a module-level field containing the current token
var sym := object {
    def kind is public = "start"
    def line is public = 0
    def linePos is public = 0
    def indent is public = 0
    def value is public = ""
    def size is public = 0
}

var lastToken := sym
var previousCommentToken := lastToken
var statementToken := lastToken     // the token starting the current statement
var comment := false

method noteBlank {
    blankLocation := sym.line - 1
}

var firstCallOfNext := true

method next {
    // Advance to the next token in the stream, assigning it to sym.
    // Put the position in the input into util module variables.

    if (tokens.size > 0) then {
        lastToken := sym
        lastLine := lastToken.line
        lastIndent := lastToken.indent
        sym := tokens.poll
        if (sym.line > (lastLine + 1)) then { noteBlank }
        pushComments
        util.setPosition(sym.line, sym.linePos)
    } else {
        errormessages.syntaxError("unexpectedly found the end of the input. " 
            ++ "This is often caused by a missing '\}'")
            atRange(sym.line, sym.linePos, sym.linePos)
    }
}


method findNextToken(tokenMatcher) {
    // Search for the next token for which the given block returns true.
    // Used for generating suggestions.

    if (tokenMatcher.apply(sym)) then {
        return sym
    }
    var nextTok := false
    var n := sym
    while {(false != n) && { false == nextTok } && { n.indent >= lastToken.indent }} do {
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
    while {(false != n) && { false == nextTok }} do {
        if(((n.line > tok.line) && (n.indent <= tok.indent)) || (sym.kind == "eof")) then {
            nextTok := n
        }
        n := n.next
    }
    nextTok
}

method findNextValidToken(validFollowTokens) {
    // Tokens that cannot start an expression.
    def invalidTokens = set ["dot", "comma", "colon", "rparen",
            "rbrace", "rsquare", "arrow", "bind"];
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

// Finds the closing brace for token (that is the beginning of a control
// structure) -- an opening brace. Returns an object with two fields: found
// and tok. If a closing brace is found, found is set to true, and tok is set to
// the closing brace. Otherwise found is set to false, and tok is set to the
// token that the closing brace should appear after.
method findClosingBrace(token, inserted) {
    var n := sym
    var numOpening := if(inserted) then {1} else {0}
    var numClosing := 0
    def result = object {
        var found is public
        var tok is public
    }
    // Skip all tokens on the same line first.
    while {(n.kind != "eof") && (n.line == token.line)} do {
        if(n.kind == "lbrace") then { numOpening := numOpening + 1 }
        elseif { n.kind == "rbrace" } then { numClosing := numClosing + 1 }
        n := n.next
    }
    // Skip all tokens that have greater indent than the target closing brace.
    while {(n.kind != "eof") && (n.indent > token.indent)} do {
        if (n.kind == "lbrace") then {
            numOpening := numOpening + 1
        } elseif { n.kind == "rbrace" } then {
            numClosing := numClosing + 1 
        }
        n := n.next
    }
    if (n.kind == "rbrace") then {
        result.found := true
        result.tok := n
    } elseif {(n.prev.kind == "rbrace") && (numOpening == numClosing)} then {
        // Check that the number of opening and closing braces matches.
        result.found := true
        result.tok := n.prev
    } else {
        result.found := false
        result.tok := n.prev
    }
    result
}


method accept(t) {
    // True if the current token has kind t, where
    // t is "num", "string", "method", etc.
    sym.kind == t
}

method acceptKeyword (kw) {
    if (sym.kind != "keyword") then { return false }
    return sym.value == kw
}

method acceptSameLine (t) {
    // True if the current token is a t, and it is on the same logical
    // line (either because it's on the same physical line, or because
    // it's on an indented continuation line).

    (sym.kind == t) && 
        ((lastLine == sym.line) || (sym.indent > lastIndent))
}
method acceptWithoutSpaces (t) {
    // True if the current token is a t, and follows the previous token
    // without any intervening spaces or continuation lines.

    (sym.kind == t) && 
        (lastLine == sym.line) && (sym.linePos == (lastToken.linePos + lastToken.size))
}
method acceptAfterSpaces (t) {
    // True if the current token is a t, and is separated from the previous token
    // by one or more spaces, or a continuation line.

    if (sym.kind != t) then { return false }
    if (lastLine == sym.line) then {
        return sym.linePos != (lastToken.linePos + lastToken.size)
    }
    return sym.linePos == (sym.indent + 1)
}
method accept (t) onLineOf (other) {
    // True if the current token is a t, and it is on the same logical
    // line as other (either because it's on the same physical
    // line, or because it's on an indented continuation line).
    (sym.kind == t) && ((other.line == sym.line) ||
        (sym.indent > other.indent))
}
method acceptAfterSpaces (t) onLineOf (other) {
    // True if the current token is a t, is on the same logical line as other,
    // and is separated from the previous token by one or more spaces, 
    // or a continuation line.

    if (sym.kind != t) then { return false }
    if (sym.line == other.line) then {
        return sym.linePos != (lastToken.linePos + lastToken.size)
    } else {
        return sym.linePos == (sym.indent + 1)
    }
}
method accept (t) onLineOfLastOr (other) {
    // True if the current token is a t, and it is on the same logical
    // line as the last token, or the other token.
    (sym.kind == t) && (((other.line == sym.line) ||
        (sym.indent > other.indent)) || (lastToken.line == sym.line))
}
method acceptArgumentOnLineOf(tok) {
    // True if the current token can start an argument to a request
    if (accept "string" onLineOf(tok)) then { return true }
    if (accept "num" onLineOf(tok)) then { return true }
    if (accept "lbrace" onLineOf(tok)) then { return true }
    if (acceptAfterSpaces "lsquare" onLineOf(tok)) then { return true }
    if (accept "identifier" onLineOf(tok)) then { 
        return (sym.value == "true") || (sym.value == "false")
    }
    return false
}
method tokenOnSameLine {
    // True if there is a token on the current logical line
    (lastLine == sym.line) || (sym.indent > lastIndent)
}
method didConsume(aParsingBlock) {
    // True if executing aParsingBlock consumes at least one token.
    var sz := tokens.size
    aParsingBlock.apply
    tokens.size != sz
}
method ifConsume(ablock)then(tblock) {
    // If ablock consumes at least one token, execute tblock.
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

// Push the current token onto the output stack as a string
method pushstring {
    var o := ast.stringNode.new(sym.value)
    values.push(o)
    next
}

// Push the current token onto the output stack as an identifier.
// false means that this identifier has not been assigned a dtype (yet).
method pushidentifier {
    util.setPosition(sym.line, sym.linePos)
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
                if ((a.kind == "identifier") && {false != a.dtype}) then {
                    var tok := sym
                    // Look back from the current token to try and find the tokens that cause this error.
                    while {tok.value != ":"} do { tok := tok.prev }
                    def suggestion = errormessages.suggestion.new
                    suggestion.deleteTokenRange(tok, tok.next)leading(true)trailing(false)
                    errormessages.syntaxError("an argument to an annotation cannot have a type.")atRange(
                        tok.line, tok.linePos, tok.next.linePos + tok.next.size - 1)withSuggestion(suggestion)
                }
            }
        }
    }
    ann
}
method doannotation {
    if (acceptKeyword "is" .not) then {
        return false
    }
    next
    def anns = [ ]
    if(didConsume({expression(noBlocks)}).not) then {
        def suggestions = [ ]
        var suggestion := errormessages.suggestion.new
        def nextTok = findNextValidToken( ["bind"] )
        if(nextTok == sym) then {
            suggestion.insert(" «annotation»")afterToken(lastToken)
        } else {
            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «annotation»")
        }
        suggestions.push(suggestion)
        suggestion := errormessages.suggestion.new
        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
        suggestions.push(suggestion)
        errormessages.syntaxError("one or more annotations separated by commas must follow 'is'.")
            atRange(lastToken.line, lastToken.linePos + lastToken.size + 1)
            withSuggestions(suggestions)
    }
    while {accept("comma")} do {
        anns.push(checkAnnotation(values.pop))
        next
        if(didConsume({expression(noBlocks)}).not) then {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken( ["bind"] )
            if(nextTok == sym) then {
                suggestion.insert(" «annotation»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «annotation»")
            }
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
            suggestions.push(suggestion)
            errormessages.syntaxError("one or more annotations separated by commas must follow 'is'.")
                atRange(lastToken.line, lastToken.linePos + lastToken.size + 1)
                withSuggestions(suggestions)
        }
    }
    anns.push(checkAnnotation(values.pop))
    anns
}

method blank {
    if (blankLocation == 0) then {
        if ( sym.line <= (lastToken.line + 1) ) then { return }
        if ( sym.line <= (previousCommentToken.line + 1) ) then { return }
    }
    pushComments
    if ((values.size == 0) || 
            ((values.size > 0) && { values.last.kind != "blank" })) then {
        if (blankLocation > 0) then {
            util.setPosition(blankLocation, 0)
            blankLocation := 0
        } else {
            util.setPosition(sym.line - 1, 0)
        }
        values.push(ast.blankNode.new)
    }
}

method dotypeterm {
    if (accept "identifier") then {
        pushidentifier
        generic
        dotrest(noBlocks)
    } else {
        if (acceptKeyword "type") then {
            dotypeLiteral
        }
    }
}

method typeexpression {
    var sz := values.size
    if (accept "lparen") then {
        def prevStatementToken = statementToken
        statementToken := sym
        next
        if(didConsume({typeexpression}).not) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken( ["rparen"] )
            if (nextTok == sym) then {
                suggestion.insert("«type expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev) leading (true)
                    trailing(false) with "«type expression»"
            }
            errormessages.syntaxError "parentheses must contain a valid type expression."
                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
        }
        if(sym.kind != "rparen") then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError "a type expression beginning with a '(' must end with a ')'."
                atRange(lastToken.line, lastToken.linePos + lastToken.size)
                withSuggestion(suggestion)
        }
        statementToken := prevStatementToken
        next
    } else {
        dotypeterm
    }
    if (values.size > sz) then {
        dotrest(noBlocks)
        typeexpressionrest
    }
    // TODO: check that the expression doesn't contain requests or var references.
    // This has to happen in the identifier resolution phase.
}

method newIf(cond, thenList, elseList) {
    def thenBlock = ast.blockNode.new(emptySequence, thenList)
    def elseBlock = ast.blockNode.new(emptySequence, elseList)
    ast.ifNode.new(cond, thenBlock, elseBlock)
}

method block {
    // parse a block
    if (accept "lbrace") then {
        def btok = sym
        next
        var minInd := statementIndent + 2
        var startIndent := statementIndent
        var expr1
        var s := sym
        var tmp
        var params := [ ]
        var body := [ ]
        var havearrow := true
        var found := false
        var i := 0
        var isMatchingBlock := false
        statementToken := sym
        if (sym.kind == "lparen") then {
            isMatchingBlock := true
        }
        // Parsing the expression ‹(a)› will return an identifierNode‹a› .
        // The paren lets us distinguish parameter ‹a› from pattern ‹(a)› .
        ifConsume {expression(blocksOK)} then {
            if (accept("comma") || accept("arrow") || accept("colon")) then {
                // This block has parameters or patterns
                expr1 := values.pop
                if (accept "colon") then {
                    // We allow an expression here for the case of v : T
                    // patterns, where T may be "Pair(hd, tl)" or similar.
                    next
                    braceIsType := true
                    if(didConsume({expression(blocksOK)}).not) then {
                        def suggestions = [ ]
                        var suggestion := errormessages.suggestion.new
                        def nextTok = findNextValidToken( ["arrow", "rbrace"] )
                        if(nextTok == sym) then {
                            suggestion.insert(" «expression»")afterToken(lastToken)
                        } else {
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                        }
                        suggestions.push(suggestion)
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                        suggestions.push(suggestion)
                        errormessages.syntaxError("a block must have an expression after the ':'.")
                            atPosition(sym.line, sym.linePos)
                            withSuggestions(suggestions)
                    }
                    braceIsType := false
                    expr1.dtype := values.pop
                }
                params.push(expr1)
                if (isMatchingBlock.not && expr1.isIdentifier) then {
                    expr1.isBindingOccurrence := true
                } else {
                    isMatchingBlock := true
                }
                if (isMatchingBlock && {accept("comma")}) then {
                    def suggestions = [ ]
                    var suggestion
                    def arrow = findNextToken({ t -> t.kind == "arrow" })
                    if(false != arrow) then {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(sym, arrow.prev)
                        suggestions.push(suggestion)
                    }
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceToken(sym)leading(true)trailing(false)with(" |")
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a matching block may only have one parameter.")atRange(
                        sym.line, sym.linePos, sym.linePos)withSuggestions(suggestions)
                }
                while {accept("comma")} do {
                    // Keep doing the above for the rest of the parameters.
                    next
                    pushidentifier
                    expr1 := values.pop
                    expr1.isBindingOccurrence := true
                    expr1.dtype := optionalTypeAnnotation
                    params.push(expr1)
                }
                if ((accept("arrow")).not) then {
                    def suggestion = errormessages.suggestion.new
                    if((sym.kind == "bind") || (sym.value == "=")) then {
                        suggestion.replaceToken(sym)with("->")
                    } else {
                        suggestion.insert(" ->")afterToken(lastToken)
                    }
                    errormessages.syntaxError("a block must have one or more parameters followed by '->' and an expression.")
                        atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
                }
                next
            } elseif { accept "semicolon" } then {
                body.push(values.pop)
                next
                if (accept "semicolon") then {
                    next
                    if (sym.line == lastToken.line) then {
                        indentFreePass := true
                    }
                }
            } elseif { ((values.last.kind == "member")
                        || (values.last.kind == "identifier")
                        || (values.last.kind == "index"))
                        && accept("bind") } then {
                var lhs := values.pop
                next
                if(didConsume({expression(blocksOK)}).not) then {
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken( ["rbrace"] )
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a valid expression must follow ':='.")
                        atPosition(sym.line, sym.linePos) withSuggestions(suggestions)
                }
                var rhs := values.pop
                util.setPosition(btok.line, btok.linePos)
                body.push(ast.bindNode.new(lhs, rhs))
                if (accept "semicolon") then {
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
        if (accept "arrow") then {
            next
        }
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
                errormessages.syntaxError("a block must end with a '}'.")
                    atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
            }
            tmp := values.pop
            body.push(tmp)
        }
        minIndentLevel := minInd - 2
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
        def opener = if ((sym.kind == "lparen") || {sym.kind == "lbrace"})
                        then { sym.value } else { "-missing-" }
        def closer = if (opener == "(") then { ")" }
                        else { if (opener == "\{") then { "\}" } else { "-nothing-" } }
        if (opener == "-missing-") then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rparen or then.
            def nextTok = findNextToken({ t -> (t.line == btok.line)
                && ((t.kind == "rparen") || (t.kind == "rbrace") || (t.kind == "lbrace")
                || ((t.kind == "identifier") && (t.value == "then"))) })
            if (false == nextTok) then {
                suggestion.insert(" («condition») then \{")afterToken(btok)
            } elseif { nextTok.kind == "rparen" } then {
                if(nextTok == sym) then {
                    suggestion.insert("(«condition»")beforeToken(sym)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                }
            } elseif { nextTok.kind == "lbrace" } then {
                if(nextTok == sym) then {
                    suggestion.insert(" («condition») then")afterToken(btok)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                    suggestion.insert(") then")afterToken(nextTok.prev)andTrailingSpace(true)
                }
            } elseif { nextTok.kind == "identifier" } then {
                if(nextTok == sym) then {
                    suggestion.insert("(«condition») ")beforeToken(sym)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                    suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
                }
            }
            errormessages.syntaxError("an if statement must have a condition " ++
                "in parentheses or braces after the 'if'.")
                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
        }
        next
        if (didConsume({expression(blocksOK)}).not) then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rparen.
            var nextTok := findNextToken({ t -> (t.line == lastToken.line) && (t.kind == "rparen") })
            if (false == nextTok) then {
                nextTok := findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert("«expression») then \{")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                          leading(true)trailing(false)with("«expression») then \{")
                }
                errormessages.syntaxError("an if statement must have a " ++
                      "condition in parentheses or braces after the 'if'.")
                      atPosition(sym.line, sym.linePos)
                      withSuggestion(suggestion)
            } else {
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                    errormessages.syntaxError("an if statement must have a " ++
                        "condition in parentheses or braces after the 'if'.")
                        atPosition(sym.line, sym.linePos)
                        withSuggestion(suggestion)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                        leading(false)trailing(true)with("«expression»")
                    errormessages.syntaxError("an if statement must have a " ++
                        "condition in parentheses or braces after the 'if'.")
                        atRange(sym.line, sym.linePos, nextTok.linePos - 1)
                        withSuggestion(suggestion)
                }
            }
        }
        if (sym.value != closer) then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("an expression beginning with a "++
                  "'{opener}' must end with a '{closer}'.")
                  atPosition(lastToken.line, lastToken.linePos + lastToken.size)
                  withSuggestion(suggestion)
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
        var minInd := statementIndent + 2
        if (accept("identifier") && (sym.value == "then")) then {
            next
            if(sym.kind != "lbrace") then {
                def suggestion = errormessages.suggestion.new
                def closingBrace = findClosingBrace(btok, true)
                if (closingBrace.found.not) then {
                    if(closingBrace.tok == lastToken) then {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{}")
                    } else {
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                    }
                } else {
                    suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                }
                errormessages.syntaxError("an if statement must have a '\{' after the 'then'.")atPosition(
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
                    if (closingBrace.found.not) then {
                        if(closingBrace.tok == lastToken) then {
                            suggestion.insert("}")afterToken(lastToken)
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                        }
                    }
                    suggestion.deleteToken(sym)
                    errormessages.syntaxError("an if statement must end with a '}'.")atPosition(
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
                // TODO: allow blocks after elseif to contain a sequence of expressions.
                statementToken := sym
                next
                def elopener = if ((sym.kind == "lparen") || {sym.kind == "lbrace"})
                                then { sym.value } else { "-missing-" }
                def elcloser = if (elopener == "(") then { ")" }
                                else { if (elopener == "\{") then { "\}" } else { "-nothing-" } }
                if (elopener == "-missing-") then {
                    def suggestion = errormessages.suggestion.new
                    // Look ahead for a rparen or then.
                    def nextTok = findNextToken({ t -> (t.line == statementToken.line)
                        && ((t.kind == "rparen") || (t.kind == "rbrace") || (t.kind == "lbrace")
                        || ((t.kind == "identifier") && (t.value == "then"))) })
                    if(false == nextTok) then {
                        suggestion.insert(" («expression») then \{")afterToken(statementToken)
                    } elseif { nextTok.kind == "rparen" } then {
                        if(nextTok == sym) then {
                            suggestion.insert("(«expression»")beforeToken(sym)
                        } else {
                            suggestion.insert("(")beforeToken(sym)
                        }
                    } elseif { nextTok.kind == "lbrace" } then {
                        if(nextTok == sym) then {
                            suggestion.insert(" («expression») then")afterToken(statementToken)
                        } else {
                            suggestion.insert("(")beforeToken(sym)
                            suggestion.insert(") then")afterToken(nextTok.prev)andTrailingSpace(true)
                        }
                    } elseif { nextTok.kind == "identifier" } then {
                        if(nextTok == sym) then {
                            suggestion.insert("(«expression») ")beforeToken(sym)
                        } else {
                            suggestion.insert("(")beforeToken(sym)
                            suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
                        }
                    }
                    errormessages.syntaxError("an elseif statement must have a " ++
                          "condition in parentheses or braces after the 'elseif'.")
                          atPosition(sym.line, sym.linePos)
                          withSuggestion(suggestion)
                }
                next
                if(didConsume({expression(blocksOK)}).not) then {
                    def suggestion = errormessages.suggestion.new
                    // Look ahead for a rparen or then.
                    var nextTok := findNextToken({ t -> (t.line == lastToken.line) && 
                        ((t.kind == "rparen") || (t.kind == "rbrace"))})
                    if(false == nextTok) then {
                        nextTok := findNextValidToken( ["rparen"] )
                        if(nextTok == sym) then {
                            suggestion.insert("«expression») then \{")afterToken(lastToken)
                        } else {
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression») then \{")
                        }
                        errormessages.syntaxError("an elseif statement must have an expression in parentheses or braces after the 'elseif'.")atPosition(
                            sym.line, sym.linePos)withSuggestion(suggestion)
                    } else {
                        if(nextTok == sym) then {
                            suggestion.insert("«expression»")afterToken(lastToken)
                            errormessages.syntaxError("an elseif statement must have an expression in parentheses or braces after the 'elseif'.")atPosition(
                                sym.line, sym.linePos)withSuggestion(suggestion)
                        } else {
                            //checkInvalidExpression
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(false)trailing(true)with("«expression»")
                            errormessages.syntaxError("4: An elseif statement must have an expression in parentheses or braces after the 'elseif'.")atRange(
                                sym.line, sym.linePos, nextTok.linePos - 1)withSuggestion(suggestion)
                        }
                    }
                }
                if(sym.value != elcloser) then {
                    checkBadOperators
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(")")afterToken(lastToken)
                    errormessages.syntaxError("an expression beginning with a " ++
                        "'{elopener}' must end with a '{elcloser}'.")
                        atPosition(lastToken.line, lastToken.linePos + lastToken.size)
                        withSuggestion(suggestion)
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
                        if(closingBrace.found.not) then {
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
                        if(closingBrace.found.not) then {
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
                    errormessages.syntaxError("an elseif statement must have 'then' after the expression in parentheses.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
                if(sym.kind != "lbrace") then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, true)
                    if(closingBrace.found.not) then {
                        if(closingBrace.tok == lastToken) then {
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{}")
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                        }
                    } else {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                    }
                    errormessages.syntaxError("an elseif statement must have a '\{' after the 'then'.")atPosition(
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
                        if(closingBrace.found.not) then {
                            if(closingBrace.tok == lastToken) then {
                                suggestion.insert("}")afterToken(lastToken)
                            } else {
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        }
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("an elseif statement must end with a '}'.")atPosition(
                            sym.line, sym.linePos)withSuggestion(suggestion)
                    }
                    v := values.pop
                    ebody.push(v)
                }
                next
                newelse := []
                eif := newIf(econd, ebody, newelse)
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
                    if(closingBrace.found.not) then {
                        if(closingBrace.tok == lastToken) then {
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{}")
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{")
                        }
                    } else {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{")
                    }
                    errormessages.syntaxError("an else statement must have a '\{' after the 'else'.")atPosition(
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
                        if(closingBrace.found.not) then {
                            if(closingBrace.tok == lastToken) then {
                                suggestion.insert("}")afterToken(lastToken)
                            } else {
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        }
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("an else statement must end with a '}'.")atPosition(
                            sym.line, sym.linePos)withSuggestion(suggestion)
                    }
                    v := values.pop
                    curelse.push(v)
                }
                next
            }
            util.setPosition(btok.line, btok.linePos)
            var o := newIf(cond, body, elseblock)
            values.push(o)
        } else {
            // Raise an error here, or it will spin nastily forever.
            def suggestion = errormessages.suggestion.new
            if(sym.kind == "lbrace") then {
                def closingBrace = findClosingBrace(btok, false)
                if(closingBrace.found.not) then {
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
                if(closingBrace.found.not) then {
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
            errormessages.syntaxError("an if statement must have 'then' after " ++
                  "the condition in parentheses.")
                  atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
        }
        minIndentLevel := localMin
        statementIndent := localStatementIndent
    }
}

// Accept an identifier. Handle "if" specially by
// passing it to the method above.
method identifier {
    if (accept "identifier") then {
        if (sym.value == "if") then {
            doif
        } else {
            pushidentifier
        }
    }
}

method prefixop {
    if (accept "op") then {
        var op := sym.value
        var val
        next
        if (accept "lparen") then {
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("parentheses must contain a valid expression.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            if(didConsume({term}).not) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
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
                errormessages.syntaxError("a prefix operator must be followed by an expression.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            }
        }
        dotrest(blocksOK)
        callrest(blocksOK)
        postfixsquare
        val := values.pop
        var mem := ast.memberNode.new("prefix" ++ op, val)
        var call := ast.callNode.new(mem, [ast.callWithPart.request(mem.value) withArgs( [] )])
        values.push(call)
    }
}

method generic {
    if (accept "lgeneric") then {
        def id = values.pop
        def gens = [ ]
        def startToken = sym
        next
        while {accept("identifier")} do {
            identifier
            while {accept("dot")} do {
                next
                def memberIn = values.pop
                if(sym.kind != "identifier") then {
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    suggestion.insert("«type name»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteToken(lastToken)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a type name must follow the '.'.")atPosition(
                        lastToken.line, lastToken.linePos + 1)withSuggestions(suggestions)
                }
                identifier
                def memberName = values.pop
                def memberNd = ast.memberNode.new(memberName.value, memberIn)
                memberNd.line := memberName.line
                memberNd.linePos := memberName.linePos
                values.push(memberNd)
            }
            generic
            gens.push(values.pop)
            if (accept "comma") then {
                next
            } else {
                if(sym.kind != "rgeneric") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(">")afterToken(lastToken)
                    def suggestion2 = errormessages.suggestion.new
                    suggestion2.insert(" ")beforeToken(startToken)
                    def suggestions = [suggestion, suggestion2]
                    errormessages.syntaxError("a type containing a '<' must end with a '>', or the '<' operator must have a space before it.")atPosition(
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
            errormessages.syntaxError("a type containing a '<' must end with a '>', or the '<' operator must have a space before it.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)
                withSuggestions(suggestions)
        }
        next
        values.push(ast.genericNode.new(id, gens))
    }
}
method trycatch {
    if (!(accept("identifier") && (sym.value == "try"))) then {
        return 0
    }
    def localmin = minIndentLevel
    def catchTok = sym
    next
    if (accept "lbrace") then {
        block
    } else {
        if(sym.kind != "lparen") then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rbrace, rparen, or catch.
            def nextTok = findNextToken({ t -> (t.kind == "rbrace")
                || ((t.kind == "rparen") && (t.line == catchTok.line))
                || ((t.kind == "identifier") && (t.value == "catch")) })
            if(false == nextTok) then {
                suggestion.insert(" \{}")afterToken(catchTok)
            } elseif { nextTok.kind == "rbrace" } then {
                suggestion.insert(" \{")afterToken(catchTok)
            } elseif { nextTok.kind == "rparen" } then {
                if(nextTok == sym) then {
                    suggestion.insert("(«expression»")afterToken(lastToken)andTrailingSpace(true)
                } else {
                    suggestion.insert("(")afterToken(lastToken)andTrailingSpace(true)
                }
            } elseif { nextTok.kind == "identifier" } then {
                suggestion.insert(" \{")afterToken(catchTok)
                suggestion.insert("\} ")beforeToken(nextTok)
            }
            errormessages.syntaxError("a catch statement must have either a block or an expression in parentheses after the 'catch'.")atPosition(
                catchTok.line, catchTok.linePos + catchTok.size + 1)withSuggestion(suggestion)
        }
        next
        if(didConsume({expression(blocksOK)}).not) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken( ["rparen"] )
            if(nextTok == sym) then {
                suggestion.insert("«expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
            }
            errormessages.syntaxError("a catch statement must have either a block or an expression in parentheses after the 'catch'.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
        if(sym.kind != "rparen") then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        next
    }
    def mainblock = values.pop
    def cases = []
    var finally := false
    while {accept("identifier") && (sym.value == "catch")} do {
        next
        if (accept "lbrace") then {
            block
        } elseif { accept "lparen" } then {
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = [ ]
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(false == nextTok) then {
                suggestion.insert(" }")afterToken(tokens.last)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif { nextTok == sym } then {
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
            errormessages.syntaxError("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        cases.push(values.pop)
    }
    if (accept("identifier")onLineOf(catchTok) && (sym.value == "case")) then {
        def suggestion = errormessages.suggestion.new
        suggestion.replaceToken(sym)with("catch")
        errormessages.syntaxError("a try-catch statement starts with a "
                ++ "'try' and then zero or more 'catch' blocks; there "
                ++ "are no 'case' blocks.")
            atRange(sym.line, sym.linePos, sym.linePos + 3)
            withSuggestion(suggestion)
    }
    if (accept("identifier") && (sym.value == "finally")) then {
        next
        if (accept "lbrace") then {
            block
        } elseif { accept "lparen" } then {
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("a catch statement must have either a block or an expression in parentheses after the 'finally'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = [ ]
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(false == nextTok) then {
                suggestion.insert(" }")afterToken(tokens.first)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif { nextTok == sym } then {
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
            errormessages.syntaxError("a try-finally statement must have either a block or an expression in parentheses after the 'finally'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        finally := values.pop
    }
    util.setPosition(catchTok.line, catchTok.linePos)
    values.push(ast.tryCatchNode.new(mainblock, cases, finally))
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
        if(false == nextTok) then {
            suggestion.insert("(«expression»)")afterToken(matchTok)
        } elseif { nextTok.kind == "rparen" } then {
            if(nextTok == sym) then {
                suggestion.insert("(«expression»")beforeToken(sym)
            } else {
                suggestion.insert("(")beforeToken(sym)
            }
        } elseif { nextTok.kind == "identifier" } then {
            suggestion.insert("(")beforeToken(sym)
            suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
        }
        errormessages.syntaxError("a match statement must have an expression in parentheses after the 'match'.")atPosition(
            matchTok.line, matchTok.linePos + matchTok.size)withSuggestion(suggestion)
    }
    next
    if(didConsume({expression(blocksOK)}).not) then {
        def suggestion = errormessages.suggestion.new
        def nextTok = findNextValidToken( ["rparen"] )
        if(nextTok == sym) then {
            suggestion.insert("«expression»")afterToken(lastToken)
        } else {
            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
        }
        errormessages.syntaxError("a match statement must have an expression in parentheses after the 'match'.")atPosition(
            sym.line, sym.linePos)withSuggestion(suggestion)
    }
    def matchee = values.pop
    if(sym.kind != "rparen") then {
        checkBadOperators
        def suggestion = errormessages.suggestion.new
        suggestion.insert(")")afterToken(lastToken)
        errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
    }
    next
    def cases = []
    var elsecase := false
    while {accept("identifier") && (sym.value == "case")} do {
        next
        if (accept "lbrace") then {
            block
        } elseif { accept "lparen" } then {
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("a match statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = [ ]
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if(false == nextTok) then {
                suggestion.insert(" }")afterToken(tokens.last)
                suggestion.insert(" \{")afterToken(lastToken)
                suggestions.push(suggestion)
            } elseif { nextTok == sym } then {
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
            errormessages.syntaxError("a match statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        cases.push(values.pop)
    }
    util.setPosition(matchTok.line, matchTok.linePos)
    values.push(ast.matchCaseNode.new(matchee, cases, elsecase))
    minIndentLevel := localmin
}
// Accept a term. Terms consist only of single syntactic units and
// do not contain any operators or parentheses, unlike expression.
method term {
    util.setPosition(sym.line, sym.linePos)
    if (accept "num") then {
        pushnum
    } elseif { accept "string" } then {
        pushstring
    } elseif { accept "identifier" && (sym.value == "match") } then {
        matchcase
    } elseif { accept("identifier") && (sym.value == "try") } then {
        trycatch
    } elseif { accept "identifier" } then {
        identifier
    } elseif { acceptKeyword "object" } then {
        doobject
    } elseif { acceptKeyword "type" } then {
        dotypeLiteral
    } elseif { accept "lbrace" } then {
        block
    } elseif { acceptAfterSpaces "lsquare" } then {
        doarray
    } elseif { (lastToken.kind != "identifier") && (accept "lsquare") } then {
        doarray
    } elseif { accept "op" } then {
        // Prefix operator
        prefixop
    }
}

// Accept an expression. Expressions may consist of parenthesised
// subexpressions or terms, which may be followed by method invocations
// (dotrest), postcircumfix square brackets, the rest of a method call,
// or an operator expression.
method expression(acceptBlocks) {
    var sz := values.size
    util.setPosition(sym.line, sym.linePos)
    if (accept "lparen") then {
        def tmpStatementToken = statementToken
        statementToken := sym
        util.setPosition(sym.line, sym.linePos)
        next
        if (didConsume{expression(acceptBlocks)}.not) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken( ["rparen"] )
            if(nextTok == sym) then {
                suggestion.insert("«expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)
                      leading(true)trailing(false)with("«expression»")
            }
            errormessages.syntaxError("parentheses must contain a valid expression.")atPosition(
                sym.line, sym.linePos)withSuggestion(suggestion)
        }
        if(sym.kind != "rparen") then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")
                  atPosition(lastToken.line, lastToken.linePos + lastToken.size)
                  withSuggestion(suggestion)
        }
        statementToken := tmpStatementToken
        next
    } else {
        term
    }
    if (values.size > sz) then {
        dotrest(acceptBlocks)
        callrest(acceptBlocks)
        postfixsquare
        valueexpressionrest
    }
}

// Accept postcircumfix square brackets (as in x[y]) and replace the
// preceding expression with an index node into itself.
method postfixsquare {
    if (acceptWithoutSpaces("lsquare")) then {
        def opening = sym
        next
        def expr = values.pop
        if(didConsume({expression(blocksOK)}).not) then {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken( ["rsquare"] )
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
            errormessages.syntaxError("a '[' in an expression must be followed by another expression and a ']'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
        if(sym.kind != "rsquare") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert("]")afterToken(lastToken)
            errormessages.syntaxError("a '[' in an expression must be followed by another expression and a ']'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        errormessages.syntaxError("'[ ... ]' without preceeding space is no longer part of Grace. " ++
            "For a Lineup, add a space.  For an indexing operation, use `at(_)` or `at(_)put(_)`.")
                atPosition(opening.line, opening.linePos)
    }
}

// Calculate the precedence of an operator. In this case, only
// multiplication and division have nontrivial precedence. Used in
// expressionrest.
method oprec(o) {
    if (o == "*") then {
        return 10
    } elseif { o == "/" } then {
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


method typeexpressionrest {
    if (acceptSameLine("op")) then {
        expressionrest "type expression" recursingWith {typeexpression} blocks (noBlocks)
    }
}

method valueexpressionrest {
    if (accept "op") then {
        expressionrest "expression" recursingWith {expression(blocksOK)} blocks (blocksOK)
    }
}

method expressionrest(name) recursingWith (recurse) blocks (acceptBlocks) {
    // Process the rest of an operator expression using the shunting-yard
    // algorithm. This method uses the oprec and toprec methods above to
    // ensure the correct precedence, and treats all operators as
    // left-associative.  It is parametrised so that it
    // can be used for both type- and value- expressions.
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
    while {accept("op")onLineOfLastOr(statementToken) && 
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
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.insert(")")afterToken(sym)
            suggestion.insert("(")beforeToken(lastToken.prev)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken.prev)
            suggestion.insert("(")beforeToken(lastToken.prev.prev.prev)
            suggestions.push(suggestion)
            errormessages.syntaxError("an expression containing both arithmetic and non-arithmetic operators requires parentheses.")atPosition(
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
            util.setPosition(tmp.line, tmp.linePos)
            tmp := ast.opNode.new(o2, tmp, tmp2)
            terms.push(tmp)
        }
        ops.push(o)
        if (accept "lparen") then {
            // When a parenthesis is found, take an expression from
            // *within* the parentheses and add it to the stack. Do
            // not delegate entirely to expression, because it will
            // then consume all the following operators and break
            // precedence. Possibly parenthesised expressions could
            // be allowed in term above?
            next
            if(didConsume(recurse).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert("«{name}»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«{name}»")
                }
                errormessages.syntaxError("parentheses must contain a valid {name}.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            if(sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            if (!tokenOnSameLine) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                suggestion.deleteToken(lastToken)leading(true)trailing(false)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(" «{name}»")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert(" " ++ util.lines.at(sym.line))afterToken(lastToken)
                suggestion.deleteLine(sym.line)
                suggestions.push(suggestion)
                errormessages.syntaxError("a valid expression must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            }
            if(didConsume({term}).not) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken( ["comma", "rparen", "rsquare", "rbrace"] )
                if(nextTok == sym) then {
                    suggestion.insert(" «{name}»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «{name}»")
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("a valid {name} must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            }
        }

        // Regardless of where the last value came from, it may have
        // method invocations, indexes, or method call happening to it,
        // which should be applied and the result put into the operands
        // list.
        dotrest(acceptBlocks)
        callrest(acceptBlocks)
        postfixsquare
        tmp := values.pop
        terms.push(tmp)
    }
    while {ops.size > 0} do {
        // Shunt off any remaining operators at the end
        o := ops.pop
        tmp2 := terms.pop
        tmp := terms.pop
        util.setPosition(tmp.line, tmp.linePos)
        tmp := ast.opNode.new(o, tmp, tmp2)
        terms.push(tmp)
    }
    tmp := terms.pop
    values.push(tmp)
    if (terms.size > 0) then {
        errormessages.syntaxError("values left on term stack.")atPosition(sym.line, sym.linePos)
    }
}

// Accept a member lookup with ".". This consumes the dot and
// a following identifier, and will pass along to further lookups or
// method calls on the result.
method dotrest(acceptBlocks) {
    if (acceptSameLine("dot")) then {
        util.setPosition(sym.line, sym.linePos)
        var lookuptarget := values.pop
        next
        if (accept "identifier") then {
            util.setPosition(sym.line, sym.linePos)
            var dro := ast.memberNode.new(sym.value, lookuptarget)
            values.push(dro)
            next
            if (accept "dot") then {
                dotrest(acceptBlocks)
            } elseif { accept "lparen" || (acceptBlocks && accept "lbrace")
                  || accept("num") || accept("string") || accept("lsquare")
                  || accept("lgeneric") } then {
                callrest(acceptBlocks)
            }
        } else {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.insert("«method name»")afterToken(lastToken)
            suggestions.push(suggestion)
            errormessages.syntaxError("a field or method name must follow a '.'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
    }
}

// Accept a method invocation indicated by parentheses. Unparenthesised
// method calls are left as "member" AST nodes and processed correctly at
// a later stage.
method callrest(acceptBlocks) {
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
    def lnum = meth.line
    def lpos = meth.linePos
    var methn := meth.nameString
    def btok = sym
    util.setPosition(sym.line, sym.linePos)
    var signature := []
    var part := ast.callWithPart.new
    signature.push(part)
    var hadcall := false
    var tok := lastToken
    var startInd := minIndentLevel
    var genericIdents := false
    if (acceptSameLine "lgeneric") then {
        genericIdents := typeArgs
    }
    if (acceptSameLine("lparen")) then {
        part.line := sym.line
        part.linePos := sym.linePos
        part.name := methn
        tok := sym
        hadcall := true
        parenthesizedArg(part)
    } elseif { acceptBlocks.not && {accept("lbrace")onLineOf(tok)} } then {
        values.push(meth)
    } elseif { acceptArgumentOnLineOf(tok) } then {
        tok := sym
        hadcall := true
        part.name := methn
        term
        var ar := values.pop
        part.args.push(ar)
    } elseif { meth.kind == "identifier" } then {
        values.push(meth)
    } elseif { meth.kind == "member" } then {
        var root := meth.in
        var outroot := meth
        while {root.kind == "member"} do {
            outroot := root
            root := root.in
        }
        if (root.kind == "identifier") then {
            values.push(meth)
        } else {
            meth.generics := genericIdents
            values.push(meth)
        }
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
                meth.line := methn.line
                meth.linePos := methn.linePos
            } else {
                meth := methn
            }
        }
        util.setline(lnum)
        def call = ast.callNode.new(meth, signature)
        call.generics := genericIdents
        values.push(call)
    } elseif {false != genericIdents} then {
        meth.generics := genericIdents
    }
    minIndentLevel := startInd
    dotrest(acceptBlocks)
}

method parenthesizedArg(part) {
    next
    ifConsume {expression(blocksOK)} then {
        // For matching blocks - same as below
        if (accept "colon") then {
            def expr = values.pop
            if (expr.kind != "identifier") then {
                def suggestion = errormessages.suggestion.new
                if(sym.next.kind == "identifier") then {
                    suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)
                    errormessages.syntaxError("only variables and constants may be followed by a ':' and a type.")atRange(
                        sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)
                } else {
                    suggestion.deleteToken(sym)leading(true)trailing(false)
                    errormessages.syntaxError("only variables and constants may be followed by a ':' and a type.")atRange(
                        sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)
                }
            }
            next
            if(didConsume({expression(blocksOK)}).not) then {
                checkBadTypeLiteral
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert(" «type name»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «type name»")
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("a type name or type expression must follow ':'.")atPosition(
                    sym.line, sym.linePos)withSuggestions(suggestions)
            }
            expr.dtype := values.pop
            values.push(expr)
        }
        while {accept("comma")} do {
            part.args.push(values.pop)
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rparen"] )
                if(nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("a method request must have an expression after a ','.")atPosition(
                    sym.line, sym.linePos)withSuggestions(suggestions)
            }
            // For matching blocks - same as above
            if (accept "colon") then {
                def arg = values.pop
                if (arg.kind != "identifier") then {
                    def suggestion = errormessages.suggestion.new
                    if(sym.next.kind == "identifier") then {
                        suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)
                        errormessages.syntaxError("only declarations may be followed by a ':' and a type.")atRange(
                            sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)
                    } else {
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("only declarations may be followed by a ':' and a type.")atRange(
                            sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)
                    }
                }
                next
                if(didConsume({expression(blocksOK)}).not) then {
                    checkBadTypeLiteral
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken( ["rparen"] )
                    if(nextTok == sym) then {
                        suggestion.insert(" «type name»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «type name»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a type name or type expression must follow ':'.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
                arg.dtype := values.pop
                values.push(arg)
            }
        }
        part.args.push(values.pop)
    }
    if(sym.kind != "rparen") then {
        checkBadOperators
        def suggestion = errormessages.suggestion.new
        suggestion.insert(")")afterToken(lastToken)
        errormessages.syntaxError("a method request beginning with a '(' must end with a ')'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
    }
    if (sym.line == part.line) then {
        part.lineLength := sym.linePos - part.linePos
    }
    next
}

method typeArgs {
    // Parse one or more type arguments, if present, and answer them as a list.
    def startToken = sym
    def args = [ ]
    if (sym.kind != "lgeneric") then { return args }
    next
    while {didConsume{typeArg}} do {
        args.add(values.pop)
        if (sym.kind == "comma") then { next }
    }
    if(sym.kind != "rgeneric") then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert(">")afterToken(lastToken)
        def suggestion2 = errormessages.suggestion.new
        suggestion2.insert(" ")beforeToken(startToken)
        def suggestions = [suggestion, suggestion2]
        errormessages.syntaxError("a method request containing a '<' must have a matching '>'. "
            ++ "If '<' is intended as an operator, precede it by a space.")
            atPosition(lastToken.line, lastToken.linePos + lastToken.size)
            withSuggestions(suggestions)
    }
    next
    return args
}

method typeArg {
    // Parses a single type argument, and leave it on the values stack.
    // TODO: 'identifier' could be a dotted identifier, 
    //        or perhaps a type expression?
    if (accept "identifier") then {
        identifier
        if (sym.kind == "lgeneric") then {
            values.push(ast.genericNode.new(values.pop, typeArgs))
        } else {
            // values.push(values.pop)
        }
    } elseif {didConsume{dotypeLiteral}} then {
        // values.push(values.pop)
    }
}

method callmprest(meth, signature, tok) {
    // Parses the rest of a multi-part method name.
    // meth is an identifierNode representing the first part of the name.
    // Returns a new identifierNode, representing the full method name,
    // and updates signature.params with the parsed arguments.
    var methname := meth.value
    var nxt
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
        if (accept "lparen") then {
            next    // skip over the `(`
        } elseif { acceptArgumentOnLineOf(lastToken) } then {
            isTerm := true
        } else {
            def suggestion = errormessages.suggestion.new
            if(sym.kind == "identifier") then {
                suggestion.replaceToken(sym)leading(true)trailing(false)with("({sym.value})")
                if(methname == "while()do") then {
                    errormessages.syntaxError("a while loop must have either a loop body in braces, or a block in parentheses.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } elseif { methname == "for()do" } then {
                    errormessages.syntaxError("a for loop must have either a loop body in braces, or a block in parentheses.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
                errormessages.syntaxError("each argument list in a multi-part method request must be parenthesized, unless it is self-delimiting.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            } else {
                if (methname == "while()do") then {
                    suggestion.insert(" \{}")afterToken(lastToken)
                    errormessages.syntaxError("a while loop must have a body.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } elseif { methname == "for()do" } then {
                    suggestion.insert(" \{}")afterToken(lastToken)
                    errormessages.syntaxError("a for loop must have a body.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                } else {
                    suggestion.insert("()")afterToken(lastToken)
                    errormessages.syntaxError("a multi-part method request must end with '()'.")atPosition(
                        sym.line, sym.linePos)withSuggestion(suggestion)
                }
            }
        }
        def isEmpty = accept "rparen"
        if (isTerm) then {
            term
        } else {
            if(sym.kind != "rparen") then {
                if(didConsume({expression(blocksOK)}).not) then {
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken( ["rparen"] )
                    if(nextTok == sym) then {
                        suggestion.insert("«expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                        suggestions.push(suggestion)
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                    }
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a method request must have an expression or a ')' after a '('.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
            }
            while {accept("comma")} do {
                nxt := values.pop
                part.args.push(nxt)
                next
                if(didConsume({expression(blocksOK)}).not) then {
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken( ["rparen"] )
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a method request must have an expression after a ','.")atPosition(
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
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("a part of a multi-part method request beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
            }
        }
        if (accept("rparen") && isTerm.not) then {
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
    if (acceptKeyword "def") then {
        def line = sym.line
        def pos = sym.linePos
        def defTok = sym
        next
        if(sym.kind != "identifier") then {
            def suggestion = errormessages.suggestion.new
            def nextToken = findNextToken({ t -> (t.kind == "op")
                && (t.value == "=") && (t.line == sym.line)})
            if (false == nextToken) then {
                suggestion.insert(" «name» =")afterToken(lastToken)
            } elseif { nextToken == sym } then {
                suggestion.insert(" «name»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextToken.prev)
                      leading(false)trailing(true)with("«name» ")
            }
            errormessages.syntaxError("a definition must have a name, '=', " ++
                  "and a value after the 'def'.") atPosition(sym.line, sym.linePos)
                  withSuggestion(suggestion)
        }
        pushidentifier
        var val := false
        var name := values.pop
        name.isBindingOccurrence := true
        var dtype := optionalTypeAnnotation
        def anns = doannotation
        if (accept("op") && (sym.value == "=")) then {
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken( [ ] )
                if(nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                          leading(true)trailing(false)with(" «expression»")
                }
                errormessages.syntaxError("a definition must have a value after the '='.")
                      atPosition(lastToken.line, lastToken.linePos + lastToken.size)
                      withSuggestion(suggestion)
            }
            val := values.pop
        } elseif { accept "bind" } then {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.replaceToken(sym)with("=")
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.replaceToken(defTok)with("var")
            suggestions.push(suggestion)
            errormessages.syntaxError("a definition must use '=' instead of ':='. " ++
                "A variable declaration uses 'var' and ':='.")atRange(
                sym.line, sym.linePos, sym.linePos + 1) withSuggestions(suggestions)
        } else {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" = «expression»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.replaceToken(defTok)with("var")
            suggestions.push(suggestion)
            errormessages.syntaxError("a definition must have '=' and a value after the name. "
                ++ "A variable declaration does not require a value but uses 'var', not 'def'.")
                atPosition(sym.line, sym.linePos) withSuggestions(suggestions)
        }
        util.setPosition(defTok.line, defTok.linePos)
        var o := ast.defDecNode.new(name, val, dtype)
        if (false != anns) then { o.annotations.addAll(anns) }
        o.startToken := defTok
        values.push(o)
        reconcileComments
    }
}

// Accept a var declaration
method vardec {
    if (acceptKeyword "var") then {
        def line = sym.line
        def pos = sym.linePos
        def varTok = sym
        next
        if(sym.kind != "identifier") then {
            def suggestion = errormessages.suggestion.new
            def nextToken = findNextToken({ t -> (t.kind == "bind")
                && (t.line == sym.line)})
            if ((false == nextToken) || {nextToken == sym}) then {
                suggestion.insert(" «name»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextToken.prev)
                      leading(false)trailing(true)with("«name» ")
            }
            errormessages.syntaxError "a variable declaration must have a name after the 'var'."
                  atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
        }
        pushidentifier
        var val := false
        var name := values.pop
        name.isBindingOccurrence := true
        def dtype = optionalTypeAnnotation
        def anns = doannotation
        if (accept "bind") then {
            next
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken( [ ] )
                if(nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                          leading(true)trailing(false)with(" «expression»")
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("a variable declaration must have a value after the ':='. "
                    ++ "A variable without a value can be declared with 'var' followed only by the variable name.")atPosition(
                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)
            }
            val := values.pop
        } else {
            if (accept("op") && (sym.value == "=")) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                suggestion.replaceToken(sym)with(":=")
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.replaceToken(varTok)with("def")
                suggestions.push(suggestion)
                errormessages.syntaxError("a variable declaration must use ':=' instead of '='. A definition uses 'def' and '='.")
                    atRange(sym.line, sym.linePos, sym.linePos)
                    withSuggestions(suggestions)
            }
        }
        util.setPosition(line, pos)
        def o = ast.varDecNode.new(name, val, dtype)
        if (false != anns) then { o.annotations.addAll(anns) }
        values.push(o)
        reconcileComments
    }
}

// Accept a square-bracketed list literal like [1,2,3].
method doarray {
    if (accept "lsquare") then {
        next
        var tmp
        var params := []
        ifConsume {expression(blocksOK)} then {
            while {accept("comma")} do {
                tmp := values.pop
                params.push(tmp)
                next
                if(didConsume({expression(blocksOK)}).not) then {
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken( ["rsquare"] )
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a Lineup must contain zero or more expressions separated by commas.")
                        atPosition(sym.line, sym.linePos) withSuggestions(suggestions)
                }
            }
            tmp := values.pop
            params.push(tmp)
        }
        if(sym.kind != "rsquare") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert("]")afterToken(lastToken)
            errormessages.syntaxError("a Lineup beginning with a '[' must end with a ']'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        var o := ast.arrayNode.new(params)
        values.push(o)
        next
    }
}

// Accept "dialect "X""
method dodialect {
    if (acceptKeyword "dialect") then {
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
            errormessages.syntaxError("a dialect statement must have the name of the dialect in quotes after the 'dialect'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        values.push(ast.dialectNode.new(sym.value))
        next
    }
}

method inheritsOrUses {
    // Parses "inherit «object expression»"

    if (! accept "keyword") then { return }
    if ((sym.value == "inherits") || (sym.value == "inherit") || (sym.value == "use")) then {
        def btok = sym
        checkIndent
        next
        if(didConsume({expression(noBlocks)}).not) then {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken( ["rsquare"] )
            if(nextTok == sym) then {
                suggestion.insert(" «parent»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «parent»")
            }
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
            suggestions.push(suggestion)
            var msg := "The {btok.value} keyword must be followed by an expression that creates "
            if (btok.value == "use") then {
                msg := msg ++ "the trait being used."
            } else {
                msg := msg ++ "the object being inherited."
            }
            errormessages.syntaxError(msg)
                atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)
                withSuggestions(suggestions)
        }
        util.setPosition(btok.line, btok.linePos)
        def inhNode = ast.inheritsNode.new(values.pop)
        if (btok.value == "use") then {
            inhNode.isUse := true
        }
        while { inheritsModifier(inhNode) onLineOf(btok) } do { }
        values.push(inhNode)
    }
}

method inheritsModifier(node) onLineOf(startToken) {
    // parse an alias or excludes modifier on an `inherits` clause
    if (! accept "keyword" onLineOf(startToken) ) then { 
        return false
    }
    if (sym.value == "alias") then { 
        parseAlias(node) 
    } elseif {sym.value == "exclude"} then {
        parseExclude(node)
    } else {
        false
    }
}

method parseAlias(node) {
    next    // skip the alias keyword
    def newSig = methodsignature(true)
    def newMeth = newSig.nameString
    if (accept "op" && (sym.value == "=")) then {
        next
        def oldSig = methodsignature(true)
        def oldMeth = oldSig.nameString
        oldMeth.isBindingOccurrence := false
        node.addAlias (newMeth) for (oldMeth)
    } else {
        errormessages.syntaxError ("An alias modifier must take the form " ++
            "'newMethodName = oldMethodName'") 
            atPosition (lastToken.line, lastToken.linePos + lastToken.size)
    }
    return true
}
method parseExclude(node) {
    next    // skip the exclude keyword
    def exSig = methodsignature(true)
    def excludedMeth = exSig.nameString
    excludedMeth.isBindingOccurrence := false
    node.addExclusion (excludedMeth)
    return true
}

method doobject {
    // Parse an object constructor.
    // this method is called doobject because "object" is a keyword

    if (acceptKeyword "object") then {
        next
        parseObjectConstructorBody "an object constructor" 
            startingWith (lastToken) after "'object'"
    }
}

method parseObjectConstructorBody(constructName) startingWith (btok) after (prev) {
    // Parse the body of an object constructor, leaving the node on the
    // values stack.  Common code for parsing object, class, and factory method
    // bodies; constructName says which, so that error messages are correct.
    // btok is the keyword token that started the construct: class, object, or trait.
    def localMinIndentLevel = minIndentLevel
    def anns = doannotation
    if (sym.kind != "lbrace") then {
        def suggestion = errormessages.suggestion.new
        def nextTok = findNextToken { t -> t.kind == "rbrace" }
        if (false == nextTok) then {
            suggestion.insert(" \{}")afterToken(lastToken)
        } else {
            suggestion.insert(" \{")afterToken(lastToken)
        }
        errormessages.syntaxError "{constructName} must have a '\{' after the {prev}."
            atPosition(lastToken.line, lastToken.linePos + lastToken.size)
            withSuggestion(suggestion)
    }
    next
    if (sym.line == statementToken.line) then {
        minIndentLevel := sym.linePos - 2
    } else {
        minIndentLevel := statementToken.indent + 2
    }
    def body = []
    var superObject := false
    def usedTraits = []
    var inPreamble := true  // => processing inherit and use statements
    while {(accept("rbrace")).not && {sym.kind != "eof"}} do {
        if (didConsume {inheritsOrUses}) then {
            def parentNode = values.pop
            if (inPreamble) then {
                if (parentNode.isUse) then {
                    usedTraits.add(parentNode)
                } elseif { usedTraits.isEmpty } then {
                    superObject := parentNode
                } else {
                    errormessages.syntaxError("'inherit' must come " ++
                        "before 'use' in {constructName}")
                        atRange(parentNode.line, parentNode.linePos,
                        parentNode.linePos + 7)
                }
            } else {
                errormessages.syntaxError("'{parentNode.statementName}' must " ++
                    "come at the start of {constructName}")
                    atRange(parentNode.line, parentNode.linePos,
                            parentNode.linePos + parentNode.statementName.size)
            }
        } elseif { didConsume {methoddec} } then {
            inPreamble := false
            body.push(values.pop)
        } elseif { didConsume {statement} } then {
            inPreamble := false
            body.push(values.pop)
        } else {
            errormessages.syntaxError("unexpected symbol '{sym.value}' in body " ++
                "of of {constructName}")
                atRange(sym.line, sym.linePos, sym.linePos + sym.value.size - 1)
        }
    }
    next
    util.setPosition(btok.line, btok.linePos)
    def objNode = ast.objectNode.new(body, superObject)
    if (false != anns) then { objNode.annotations.addAll(anns) }
    objNode.usedTraits := usedTraits
    values.push(objNode)
    minIndentLevel := localMinIndentLevel
}

method doclass {
    // Accepts a class declaration with or without a `dot`
    // Class declarations were formerly of the form:
    //
    //   class objName.methodName (param1, param2) {
    //     inherits <expr>
    //     var x
    //     method y(z) { ... }
    // }
    // Now they are of the form:
    //
    // class methodName (param1, param2) {
    //     inherits <expr>
    //     var x
    //     method y(z) { ... }
    // }
    // The old "dotted" form is compiled into a defDecNode that contains
    // an objectNode that contains the class method and an asString method.
    // The current form is compiled into a methodNode that contains
    // an objectNode, i.e., it is treated as syntactic sugar for
    //
    // method methodName (param1, param2) {
    //     object {
    //         inherits <expr>
    //         var x
    //         method y(z) { ... }
    //     }
    // }

    def btok = sym
    next
    def localMinIndentLevel = minIndentLevel
    if(sym.kind != "identifier") then {
        def suggestions = [ ]
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
        errormessages.syntaxError("a class must have a name after the 'class'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)
    }
    var objName := false
    if (tokens.first.kind == "dot") then {
        pushidentifier // the name of the class object
        objName := values.pop
        objName.isBindingOccurrence := true
        next    // skip over the dot
    }
    def meth = methodsignature(false)
    meth.setPositionFrom(btok)
    parseObjectConstructorBody "a class" startingWith (btok) after "method header"
    def objNode = values.pop
    meth.body := [objNode]
    meth.usesClassSyntax := true
    meth.annotations.addAll(objNode.annotations)  // TODO: sort this out!
    // see comment in dofactoryMethod
    if (false != objName) then {   // deal with (deprecated) dotted class
        objNode.name := objName.nameString ++ "." ++ meth.canonicalName
        def asStringBody = [ ast.stringNode.new("class {objName.nameString}") ]
        def signature = [ ast.signaturePart.partName "asString" ]
        def asStringMeth = ast.methodNode.new(false, signature, asStringBody, false)
        def metaBody = [meth, asStringMeth]
        def metaObj = ast.objectNode.body (metaBody) named "class {objName.nameString}"
        def defDec = ast.defDecNode.new(objName, metaObj, ast.unknownType)
        defDec.startToken := btok
        defDec.annotations.add(ast.identifierNode.new("public", false))
        values.push(defDec)
    } else {
        objNode.name := meth.nameString
        if (btok.value == "class") then {
            objNode.inClass := true
        } elseif { btok.value == "trait" } then {
            objNode.inTrait := true
        }
        values.push(meth)
    }
    reconcileComments
    minIndentLevel := localMinIndentLevel
}

method dofactoryMethod {
    // Accept a factory method declaration
    if ((acceptKeyword "factory") && {
            tokens.first.kind == "keyword"} && {
            tokens.first.value == "method"}) then {
        def btok = sym
        next
        next
        def localMinIndentLevel = minIndentLevel
        if (sym.kind != "identifier") then {
            def suggestions = [ ]
            if(sym.kind == "lbrace") then {
                var suggestion := errormessages.suggestion.new
                suggestion.insert(" «method name»")afterToken(lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.replaceToken(lastToken)with("object")
                suggestions.push(suggestion)
            } else {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(" «method name» \{}")afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError "a factory method must have a name after the 'method'."
                atPosition (lastToken.line, lastToken.linePos + lastToken.size + 1)
                withSuggestions (suggestions)
        }
        var meth := methodsignature(false)
        parseObjectConstructorBody "a factory method" startingWith (btok) after "method header"
        def objNode = values.pop
        objNode.name := meth.nameString
        util.setPosition(btok.line, btok.linePos)
        meth.body := [objNode]
        meth.annotations.addAll(objNode.annotations)  // TODO: sort this out!
        // In a class or factory method declaration, there is just one place
        // for annotations.  These might include annotations on the method (such
        // as confidential), and annotations on the object (such as imutable)
        values.push(meth)
        reconcileComments
        minIndentLevel := localMinIndentLevel
    }
}

method methoddec {
    // Parse a method declaration

    if (acceptKeyword "method") then {
        def btok = sym
        checkIndent
        statementToken := sym
        var stok := sym
        next
        def methNode = methodsignature(false).setPositionFrom(btok)
        def body = []
        var localMin
        def anns = doannotation
        if (accept "lbrace") then {
            next
            localMin := minIndentLevel
            if (sym.line == stok.line) then {
                minIndentLevel := sym.linePos - 1
            } else {
                minIndentLevel := stok.indent + 1
            }
            values.push(object {
                def kind is public = "lbrace"
                var register is public := ""
            })  // a dummy token to mark the position in the values stack
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
                if(closingBrace.found.not) then {
                    if(closingBrace.tok == sym) then {
                        suggestion.insert("}")afterToken(lastToken)
                    } else {
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                    }
                }
                suggestion.deleteToken(sym)
                errormessages.syntaxError("a method must end with a '}'.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
            next
            minIndentLevel := localMin
        } else {
            def suggestion = errormessages.suggestion.new
            def closingBrace = findClosingBrace(btok, true)
            if(closingBrace.found.not) then {
                if(closingBrace.tok == lastToken) then {
                    suggestion.insert(" \{}")afterToken(lastToken)andTrailingSpace(true)
                } else {
                    suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                    suggestion.insert(" \{")afterToken(lastToken)andTrailingSpace(true)
                }
            } else {
                suggestion.insert(" \{")afterToken(lastToken)andTrailingSpace(true)
            }
            errormessages.syntaxError("a method must have a '\{' after the name.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        methNode.body := body
        util.setline(btok.line)
        if (false != anns) then { methNode.annotations.addAll(anns) }
        values.push(methNode)
        reconcileComments
    }
}


method methodDecRest(tm, sameline) {
    // Process the remainder of a method header. These follow
    // mostly the same rules as calls, but aren't strictly enforced to be on
    // a single line (because they are ended by "{"). 
    //
    // tm is a methodNode.  This method modifies tm.params in place.

    var signature := tm.signature
    while {(!sameline && accept("identifier")) || acceptSameLine("identifier")} do {
        pushidentifier
        def part = ast.signaturePart.partName(values.pop.nameString)
        if ((accept("lparen")).not) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert("()")afterToken(lastToken)
            errormessages.syntaxError("the declaration of a method with multiple " ++
                  "parameter lists must have parentheses around each parameter list.")
                  atPosition(sym.line, sym.linePos)withSuggestion(suggestion)
        }
        next
        var comma := false
        while {accept("identifier")
                || (accept("op") && (sym.value == "*"))} do {
            if (accept "op") then {
                next
                errormessages.syntaxError("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} an Iterable.")
                    atPosition(lastToken.line, lastToken.linePos)
            }
            pushidentifier
            def nxt = values.pop
            nxt.isBindingOccurrence := true
            nxt.dtype := optionalTypeAnnotation
            part.params.push(nxt)
            if (accept "comma") then {
                comma := sym
                next
            }
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("a part of a multi-part method beginning with a '(' must end with a ')'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
        }
        next
        signature.push(part)
    }
}

method optionalTypeAnnotation {
    // Accept a type annotation if present.
    // Returns the type, or false if there is no annotation
    if (accept "colon") then {
        next
        if (didConsume { typeexpression }) then {
            values.pop
        } else {
            checkBadTypeLiteral
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" «type name»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)leading(true)trailing(false)
            suggestions.push(suggestion)
            errormessages.syntaxError("a type name or type expression must follow ':'.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
    } else {
        false
    }
}

method methodsignature(sameline) {
    // Accept a method signature
    if((sym.kind != "identifier") && (sym.kind != "op") && (sym.kind != "lsquare")) then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert(" «method name»")afterToken(lastToken)
        errormessages.syntaxError("a method name must start with an identifier, or be an operator.")
            atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)
                withSuggestion(suggestion)
    }
    def startToken = sym
    def part = ast.signaturePart.partName(startToken.value)
    next
    def result = ast.methodNode.new(false, [ part ], [], false)
    if ((startToken.value == "[") && {sym.kind == "rsquare"}) then {
        errormessages.syntaxError("methods named '[]' and '[]:=' are no longer part of Grace.")
            atRange(lastToken.line, lastToken.linePos, sym.linePos)
    }
    if (accept "lgeneric") then { result.typeParams := typeparameters }
    if (accept "bind") then {
        part.name := part.name ++ ":="
        next
    } elseif { accept "op"  && (startToken.value == "prefix") } then {
        part.name := part.name ++ sym.value
        next
    }
    if (accept "lparen") then {
        def lparen = sym
        next
        var id
        var comma := false
        while {accept("identifier") ||
                (accept("op") && (sym.value == "*"))} do {
            // Parse the parameter list, including optional dtype
            // annotations.
            if (accept "op") then {
                next
                errormessages.syntaxError("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} an Iterable.")
                    atPosition(lastToken.line, lastToken.linePos)
            }
            pushidentifier
            id := values.pop
            id.isBindingOccurrence := true
            id.dtype := optionalTypeAnnotation
            part.params.push(id)
            if (accept "comma") then {
                comma := sym
                next
            } elseif { sym.kind != "rparen" } then {
                if(sym.kind != "rparen") then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert(")")afterToken(lastToken)
                    errormessages.syntaxError("a part of a method beginning with a '(' must end with a ')'.")atPosition(
                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
                }
            }
        }
        if(sym.kind != "rparen") then {
            def suggestion = errormessages.suggestion.new
            def rparen = findNextToken({ t -> (t.kind == "rparen") && (t.line == lastToken.line) })
            if(false == rparen) then {
                suggestion.replaceToken(lastToken)with(")")
            } else {
                suggestion.deleteToken(sym)
            }
            errormessages.syntaxError("a part of a method beginning with a '(' must end with a ')'.")atRange(
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
            methodDecRest(result, sameline)
        }
    }
    if (accept "arrow") then {
        // Return dtype
        next
        typeexpression
        result.dtype := values.pop
    }
    result
}

method typeparameters {
    next
    def typeIds = [ ]
    while {accept("identifier")} do {
        identifier
        def id = values.pop
        id.isBindingOccurrence := true
        typeIds.push(id)
        if (accept "comma") then {
            next
        }
    }
    typeIds.do { each -> each.isBindingOccurrence := true }
    def result = ast.typeParametersNode.new(typeIds)
    if(sym.kind != "rgeneric") then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert(">")afterToken(lastToken)
        errormessages.syntaxError("a list of type parameters starting with '<' must end with '>'.")atPosition(
            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)
    }
    next
    result
}

method doimport {
    // Accept an import statement, which has the form
    //      import ‹string› as ‹identifier›:‹type expression› is ‹annotation›
    if (acceptKeyword "import") then {
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
            errormessages.syntaxError("an import statement must have the name of the module in quotes, 'as', and an identifier after 'import'.")atPosition(
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
            errormessages.syntaxError("an import statement must have 'as', and an identifier after the name of the module in quotes.")atPosition(
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
            errormessages.syntaxError("an import statement must have an identifier after 'as'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        pushidentifier
        def name = values.pop
        name.isBindingOccurrence := true
        def dtype = optionalTypeAnnotation
        util.setline(importline)
        def o = ast.importNode.new(p.value, name, dtype)
        def anns = doannotation
        if (false != anns) then { o.annotations.addAll(anns) }
        values.push(o)
        reconcileComments
    }
}

method doreturn {
    // Accept a return statement; 'return' is followed by an optional expression.
    if (acceptKeyword "return") then {
        def retTok = sym
        next
        var retval
        if ((tokenOnSameLine) && {accept("rbrace").not}) then {
            if(didConsume({expression(blocksOK)}).not) then {
                def suggestions = [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken( ["rbrace"] )
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
                errormessages.syntaxError("a return statement must have either an expression or a new-line after 'return'.")atRange(
                    sym.line, sym.linePos, sym.linePos + sym.size - 1)withSuggestions(suggestions)
            }
            retval := values.pop
        } else {
            retval := ast.identifierNode.new("done", false)
        }
        util.setPosition(retTok.line, retTok.linePos)
        var o := ast.returnNode.new(retval)
        values.push(o)
    }
}

method domethodtype {
    // parses a method in a type literal
    def methodTypeTok = sym
    var methNode := methodsignature(true)
    var dtype := methNode.dtype
    if (false == methNode.dtype) then {
        dtype := ast.identifierNode.new("Done", false)
    }
    def o = ast.methodTypeNode
        .new(methNode.nameString, methNode.signature, dtype)
            .setPositionFrom(methodTypeTok)
    o.typeParams := methNode.typeParams
    values.push(o)
    reconcileComments
    if (accept "semicolon") then {
        next
    } else {
        if (!accept("rbrace")) then {
            if (lastToken.line == sym.line) then {
                def suggestion = errormessages.suggestion.new
                def newLine = util.lines.at(sym.line).substringFrom(1)to(lastToken.linePos - 1) ++ sym.value
                suggestion.addLine(sym.line + 0.1, newLine)
                suggestion.deleteToken(sym)leading(true)trailing(true)
                errormessages.syntaxError("methods in a type literal must be on separate lines, or separated by semicolons.")atPosition(
                    sym.line, sym.linePos)withSuggestion(suggestion)
            }
        }
    }
}

method dotypeLiteral {
    // parses a type literal between braces, with optional leading 'type' keyword.
    def typeLiteralTok = sym
    if (acceptKeyword "type") then {
        next
        if (!accept("lbrace")) then {
            def suggestion = errormessages.suggestion.new
            suggestion.replaceToken(sym) with("\{")
            errormessages.syntaxError "type literals must open with a brace."
                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)
            return
        }
    }
    if (accept "lbrace") then {
        def meths = []
        def types = []
        def mc = auto_count
        auto_count := auto_count + 1
        next
        while {accept("rbrace").not} do {
            if (acceptKeyword "type") then {
                typedec
                types.push(values.pop)
            } else {
                domethodtype
                meths.push(values.pop)
            }
        }
        next
        util.setPosition(typeLiteralTok.line, typeLiteralTok.linePos)
        def t = ast.typeLiteralNode.new(meths, types)
        values.push(t)
    }
}

method typedec {
    // Accept a declaration: 'type = <type expression>'
    if (acceptKeyword "type") then {
        def line = sym.line
        def pos = sym.linePos
        next
        if(sym.kind != "identifier") then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(" «type name»")afterToken(lastToken)
            errormessages.syntaxError("a type declaration must have a name after the 'type'.")atPosition(
                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)
        }
        pushidentifier
        util.setPosition(line, pos)
        def nt = ast.typeDecNode.new(values.pop, false)
        if (accept "lgeneric") then { nt.typeParams := typeparameters }
        nt.name.isBindingOccurrence := true
        def anns = doannotation
        if((sym.kind != "op") || (sym.value != "=")) then {
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextToken({ t -> t.kind == "lbrace" })
            if ((false == nextTok) || {nextTok == sym}) then {
                suggestion.insert(" =")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)with("=")
            }
            errormessages.syntaxError "a type declaration must have an '=' after the type name."
                  atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)
                  withSuggestion(suggestion)
        }
        next
        // Special case for type Literals without leading 'type' keyword.
        if (accept "lbrace") then {
            dotypeLiteral
        } else {
            expression(noBlocks)
        }
        nt.value := values.pop
        if (false != anns) then {
            nt.annotations.addAll(anns)
        }
        values.push(nt)
        reconcileComments
    }
}

method checkIndent {
    if (indentFreePass) then {
        indentFreePass := false
    } elseif { sym.kind == "semicolon" } then {
        // pass
    } elseif {(sym.kind == "rbrace") || (sym.kind == "rparen")
          || (sym.kind == "rsquare")} then {
        // pass
    } elseif { sym.kind == "eof" } then {
    } elseif { sym.indent < minIndentLevel } then {
        if ((sym.linePos - 1) != minIndentLevel) then {
            def suggestions = [ ]
            var suggestion := errormessages.suggestion.new
            for(1..(minIndentLevel - (sym.linePos - 1))) do { _ ->
                suggestion.insert " " atPosition 1 onLine(sym.line)
            }
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            // Find the indent level for the opening brace.
            var tok := lastToken
            while {(tok.linePos != (tok.indent + 1)) || (tok.indent >= minIndentLevel)} do { 
                tok := tok.prev 
            }
            var line := ""
            for(1..(tok.indent)) do { _ ->
                line := line ++ " "
            }
            line := line ++ "}"
            suggestion.addLine(sym.line - 0.9, line)
            suggestions.push(suggestion)
            errormessages.syntaxError("the indentation for this line must be " ++
                  "at least {minIndentLevel}. This is often caused by a missing '}'.")
                  atPosition(sym.line, sym.linePos)withSuggestions(suggestions)
        }
    } elseif { sym.indent > (minIndentLevel + 1) } then {
        minIndentLevel := sym.indent
    } elseif { (sym.indent - lastIndent).abs == 1 } then {
        def m1 = "the indentation for this line can't differ "
        def m2 = "from that of the previous line by 1.\n  To start a block, or "
        def m3 = "to signal a continuation line, increase the indent by 2 or more. "
        def m4 = "To end a block, or end the continuation, decrease the indent "
        def m5 = "to the prior level. Otherwise, use the same indent as the previous line."
        def msg = m1 ++ m2 ++ m3 ++ m4 ++ m5
        errormessages.syntaxError(msg) atPosition(sym.line, sym.linePos)
    }
}

method statement {
    // Accept a statement. A statement is any of the above that may exist
    // at the top level, and includes expressions.
    // A statement may also be a bind statement x := y, which creates a
    // bind AST node out of the expressions on either side (which at this point
    // can be any arbitrary expression).

    statementIndent := sym.indent
    statementToken := sym
    def btok = sym
    checkIndent
    if (accept "keyword") then {
        if (sym.value == "var") then {
            vardec
        } elseif { sym.value == "def" } then {
            defdec
        } elseif { sym.value == "import" } then {
            doimport
        } elseif { sym.value == "dialect" } then {
            dodialect
        } elseif { sym.value == "type" } then {
            typedec
        } elseif { sym.value == "class" } then {
            doclass
        } elseif { sym.value == "trait" } then {
            doclass
        } elseif { sym.value == "factory" } then {
            dofactoryMethod
        } elseif { sym.value == "return" } then {
            doreturn
        } else {
            expression(blocksOK)
        }
    } else {
        ifConsume {expression(blocksOK)} then {
            if (((values.last.kind == "identifier")
                || (values.last.kind == "member")
                || (values.last.kind == "index"))
                && accept("bind")) then {
                var dest := values.pop
                if (dest.kind == "lbrace") then {
                    print "sym = {sym}, sym.line = {sym.line}"
                    ProgrammingError.raise "popped lbrace token while parsing statement"
                }
                next
                if(didConsume({expression(blocksOK)}).not) then {
                    def suggestions = [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken( ["rbrace"] )
                    if(nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a valid expression must follow ':='.")atPosition(
                        sym.line, sym.linePos)withSuggestions(suggestions)
                }
                var val := values.pop
                util.setPosition(btok.line, btok.linePos)
                var o := ast.bindNode.new(dest, val)
                values.push(o)
            }
        }
    }
    reconcileComments
    if (accept "eof") then {
        return true
    }
    if (accept "semicolon") then {
        def oldLine = sym.line
        next
        if (sym.line == oldLine) then {
            indentFreePass := true
        }
    } else {
        checkUnexpectedTokenAfterStatement
    }
}

method pushComments {
    // Push a comment onto the comments stack as a commentNode. If
    // there are consecutive comments following, deal with them all.
    // Adjacent comments extend the first; a break of a blank line
    // starts a new comment node.

    if ( ! accept "comment" ) then { return }
    util.setPosition(sym.line, sym.linePos)
    var o := ast.commentNode.new(sym.value)
    if ((lastToken.line == sym.line) && (lastToken.kind != "comment")) then {
        o.isPartialLine := true
    } elseif { lastToken.line < (sym.line - 1) } then {
        o.isPreceededByBlankLine := true
    }
    comments.push(o)
    while { 
        previousCommentToken := sym
        sym := tokens.poll
        if (sym.line > (previousCommentToken.line + 1)) then { noteBlank }
        accept "comment"
    } do {
        util.setPosition(sym.line, sym.linePos)
        o := ast.commentNode.new(sym.value)
        if ( comments.last.endLine == (sym.line - 1) ) then {
            comments.last.extendCommentUsing(o)
        } else {
            comments.push(o)
            if ( lastToken.line < (sym.line - 1) ) then {
                o.isPreceededByBlankLine := true
            }
        }
    }
}

method reconcileComments {
    // Should be requested after a new node that represents a "syntactic unit"
    // to which comments can be attached is pushed onto `values`
    // Finds comments associated with that node, remove thems from comments
    // stack, and puts them in that node's comments attribute.

    pushComments
    def node = if (values.isEmpty) then {
        moduleObject 
    } else {
        values.last
    }
    if (node.kind == "lbrace") then {
        // lbrace nodes are not AST nodes.  They are used to mark the stack for
        // nested expressions.  Hence, no comments should be attached to them.
        return
    }
    def oLine = node.line
    def preComments = emptyList
    def postComments = emptyList

    var ix := comments.size
    while { ix > 0 } do {
        def each = comments.at(ix)
        def isPostComment = (each.line == oLine) || (each.line == (oLine+1))
        def isPreComment = each.isPreceededByBlankLine && (each.endLine == (oLine-1))
        if (isPostComment) then {
            postComments.push(comments.removeAt(ix))
        } elseif { isPreComment } then {
            preComments.addFirst(comments.removeAt(ix))
        } elseif { each.endLine < (oLine-1) } then {
            ix := 0     // exit from while
        }
        ix := ix - 1
    }

    def postSz = postComments.size
    def preSz = preComments.size

    if ((postSz > 1) && (preSz > 1)) then {
        preComments.last.value := preComments.last.value ++ "\n"
    }
    node.addComments(preComments)
    node.addComments(postComments)
}

method checkBadOperators {
    if (sym.value == "=") then {
        def sugg = errormessages.suggestion.new
        sugg.insert("=")afterToken(sym)
        errormessages.syntaxError("use '==' to test equality, not '='.")
            atRange(sym.line, sym.linePos, sym.linePos)
            withSuggestion(sugg)
    }
    if (sym.kind == "rgeneric") then {
        def sugg = errormessages.suggestion.new
        sugg.insert(" ")beforeToken(sym)
        errormessages.syntaxError("the '>' operator must be preceded by a space.")
            atRange(sym.line, sym.linePos, sym.linePos)
            withSuggestion(sugg)
    }
}

method checkBadTypeLiteral {
    if (sym.kind == "lbrace") then {
        def sugg = errormessages.suggestion.new
        sugg.insert("type ") beforeToken(sym)
        errormessages.syntaxError("type literals must start with the keyword 'type'.")
            atRange(sym.line, sym.linePos, sym.linePos)
            withSuggestion(sugg)
    }
}

method checkUnexpectedTokenAfterStatement {
    if (sym.line == lastToken.line) then {
        if ((sym.kind == "op") && (sym.value == "=")
            && (lastToken.kind == "identifier")) then {
            def sugg = errormessages.suggestion.new
            def suggestions = [ ]
            sugg.replaceToken(sym)leading(false)trailing(false)with(":=")
            suggestions.push(sugg)
            def sugg2 = errormessages.suggestion.new
            sugg2.replaceToken(sym)leading(false)trailing(false)with "=="
            suggestions.push(sugg2)
            errormessages.syntaxError("assignment uses ':=', not '='.")
                atRange(sym.line, sym.linePos, sym.linePos)
                withSuggestions (suggestions)
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
            def suggestions = [ ]
            var suggestion
            if ( (values.size > 0) && { (values.last.kind == "identifier") || { values.last.kind == "member" }} && { sym.kind == "identifier" } ) then {
                suggestion := errormessages.suggestion.new
                suggestion.replaceToken(sym)leading(true)trailing(false)with("({sym.value})")
                suggestions.push(suggestion)
                if (false != sym.next) then {
                    def n = sym.next
                    if (n.line == sym.line) then {
                        suggestion := errormessages.suggestion.new
                        suggestion.replaceToken(sym)leading(true)trailing(false)with("({sym.value}")
                        suggestion.append ")" onLine(sym.line)
                        suggestions.push(suggestion)
                    }
                }
                if (values.last.kind == "identifier") then {
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceToken(sym)leading(false)trailing(false)with("\"{sym.value}\"")
                    suggestions.push(suggestion)
                }
            }
            def nextTok = findNextValidToken( ["rbrace"] )
            if(nextTok == sym) then {
                suggestion := errormessages.suggestion.new
                suggestion.addLine(lastToken.line, util.lines.at(lastToken.line).substringFrom(1)to(lastToken.linePos + lastToken.size - 1))
                def newLine = util.lines.at(sym.line).substringFrom(sym.linePos)to(util.lines.at(sym.line).size)
                suggestion.addLine(lastToken.line + 0.1, newLine)
                suggestions.push(suggestion)
            } else {
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("multiple statements must be separated by a newline or a semicolon. This is often caused by missing parentheses.")atPosition(
                sym.line, sym.linePos)withSuggestions(suggestions)
        }
    }
}


method parse(toks) {
    // Parse the given list of tokens, toks, returning an AST moduleNode
    // corresponding to it.

    util.log_verbose "parsing."
    moduleObject := ast.moduleNode.body(values) named (util.modname)

    if (toks.size == 0) then {
        return moduleObject
    }
    tokens := toks
    next
    if (sym.indent > 0) then {
        def sugg = errormessages.suggestion.new
        sugg.deleteRange(1, sym.indent) onLine(sym.line)
        errormessages.syntaxError "the first line must not be indented."
            atRange(sym.line, 1, sym.indent)
            withSuggestion(sugg)
    }
    var oldlength := tokens.size
    while {tokens.size > 0} do {
        blank
        methoddec
        blank
        ifConsume { inheritsOrUses } then {
            def parentNode = values.pop
            if (parentNode.isUse) then {
                moduleObject.usedTraits.add(parentNode)
            } elseif { moduleObject.usedTraits.isEmpty } then {
                moduleObject.superclass := parentNode
            } else {
                errormessages.syntaxError("'inherit' must come " ++
                    "before 'use' in a module.")
                    atRange(parentNode.line, parentNode.linePos,
                    parentNode.linePos + 7)
            }
        }
        blank
        statement
        blank
        if (tokens.size == oldlength) then {
            def suggestion = errormessages.suggestion.new
            suggestion.deleteToken(sym)
            errormessages.syntaxError("invalid statement. This is often " ++
                "caused by an extra '}', ')', or ']'.")
                atRange(sym.line, sym.linePos, sym.linePos + sym.size - 1)
                withSuggestion(suggestion)
        }
        oldlength := tokens.size
    }
    blank
    statement
    blank
    return moduleObject
}
