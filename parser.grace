dialect "standard"
import "io" as io
import "ast" as ast
import "util" as util
import "errormessages" as errormessages
import "basic" as basic

use basic.open

var tokens := false
var moduleObject
def comments = list.empty   // so we can request `removeAt`

var auto_count := 0
def noBlocks = false
def blocksOK = true


var values := list [ ]

//  The alternative definition below allows pushes and pops of `values`
//  to be traced.  It can be useful for debugging the parser.
//  def values = object {
//      def realValues = list [ ]
//      var tracing is public := false
//      method push(v) {
//          if (tracing) then {
//              print "pushed {v.toGrace 0} (line {v.line})"
//          }
//          realValues.push(v)
//      }
//      method pop {
//          def res = realValues.pop
//          if (tracing) then {
//              print "popped {res.toGrace 0} (line {res.line})"
//          }
//          res
//      }
//      method size { realValues.size }
//      method filter(b) { realValues.filter(b) }
//      method isEmpty { realValues.isEmpty }
//      method last { realValues.last }
//      method do(b) { realValues.do(b) }
//  }

// sym is a module-level field referring to the current token
var sym := object {
    def kind is public = "start"
    def line is public = 0
    def column is public = 0
    def indent is public = 0
    def value is public = ""
    def size is public = 0
    method ==(other) {
        if (other == false) then {
            false
        } else {
            (other.line == line) && (other.column == column)
        }
    }
}

var lastToken := sym
var statementToken := lastToken     // the token starting the current statement
var comment := false

method next {
    // Advance to the next token in the stream, assigning it to sym.
    // Put the position in the input into util module variables.

    if (tokens.size > 0) then {
        nextToken
        pushComments
    } else {
        errormessages.syntaxError("unexpectedly found the end of the input. "
            ++ "This is often caused by a missing '\}'")
            atPosition(sym.line, sym.column)
    }
}

method nextToken is confidential {
    lastToken := sym
    sym := tokens.poll
    if (util.verbosity > 110) then { io.error.write "{sym}\n" }
    util.setPosition(sym.line, sym.column)
}

method isOnAContinationLine {
    // is current token on a line that is a continuation of the previous line?
    def currentLine = sym.line
    var s := sym
    while {s.line == currentLine} do {
        if (s.hasPrev.not) then { return false }
        s := s.prev
        if (s.isSeparator) then { return false }
    }
    return true
}

method saveParsePosition {
    def lexerState = tokens.savePosition
    return [lexerState, values.size]
}

method restoreParsePosition(saved) {
    tokens.restorePosition(saved.first)
    sym := tokens.first.prev
    lastToken := sym.prev
    def oldValueStackSize = saved.second
    if (oldValueStackSize > values.size) then {
        ProgrammingError.raise "can't restore parse position; the values stack has been popped"
    }
    while {oldValueStackSize ≠ values.size} do { values.pop }
}

method findNextToken(tokenMatcher) {
    // Search for the next token for which the given block returns true.
    // Used for generating suggestions.

    if (tokenMatcher.apply(sym)) then {
        return sym
    }
    var n := sym
    while {n.isEof.not && { n.indent >= lastToken.indent }} do {
        if (tokenMatcher.apply(n)) then {
            return n
        }
        n := n.next
    }
    n
}

method findNextTokenIndentedAt(tok) {
    // Search for the next token for whose indent does not exceed that of tok.
    // Used for generating suggestions.
    if (((sym.line > tok.line) && (sym.indent <= tok.indent)) || (sym.isEof)) then {
        return sym
    }
    var n := sym
    while {n.isEof.not} do {
        if ((n.line > tok.line) && (n.indent <= tok.indent)) then {
            return n
        }
        n := n.next
    }
    n
}

method findNextValidToken(validFollowTokens) {
    // returns the next token in validFollowTokens, or the next token
    // that could start an expression, or eof

    def invalidTokens = set.withAll ["dot", "comma", "colon", "rparen", "rbrace",
            "rsquare", "arrow", "assignment"];  // Tokens that cannot start an expression

    var candidate := sym
    while {candidate.isEof.not} do {
        if (validFollowTokens.contains(candidate.kind)) then {
            return candidate    // candidate is a valid follow token, so return it
        }
        if (!invalidTokens.contains(candidate.kind)) then {
            return candidate   // candidate could start an expression, so return it
        }
        candidate := candidate.next  // candidate is invalid, so go to the next one
    }
    return candidate        // candidate is eof
}

method findClosingBrace(opening, inserted) {
    // Finds the closing brace correspondng to opening (that is the beginning of a control
    // structure) -- an opening brace. Returns an object with two fields: found
    // and tok. If a closing brace is found, found is true, and tok is
    // the closing brace. Otherwise, found is false, and tok is the
    // token after which the closing brace should appear.

    var n := sym
    var numOpening := if (inserted) then {1} else {0}
    var numClosing := 0
    def result = object {
        var found is public
        var tok is public
    }
    // Count all tokens on the same line first.
    while {(n.isEof.not) && (n.line == opening.line)} do {
        if (n.isLBrace) then {
            numOpening := numOpening + 1
        } elseif { n.isRBrace } then {
            numClosing := numClosing + 1
        }
        n := n.next
    }
    // Count all tokens that have greater indent than the opening brace.
    while {(n.isEof.not) && (n.indent > opening.indent)} do {
        if (n.isLBrace) then {
            numOpening := numOpening + 1
        } elseif { n.isRBrace } then {
            numClosing := numClosing + 1
        }
        n := n.next
    }
    if (n.isRBrace) then {
        result.found := true
        result.tok := n
    } else {
        result.found := false
        result.tok := n.prev
    }
    result
}


method accept(t) {
    // True if the current token has kind t, where
    // t is "num", "string", "keyword", etc.
    sym.kind == t
}

method acceptKeyword (kw) {
    if (sym.isKeyword.not) then { return false }
    def v = sym.value
    if (v == kw) then { return true }
    return false
}

method acceptKeyword (kw1) or (kw2) {
    if (sym.isKeyword.not) then { return false }
    def v = sym.value
    if (v == kw1) then { return true }
    if (v == kw2) then { return true }
    return false
}

method acceptKeyword (kw1) or (kw2) or (kw3) {
    if (sym.isKeyword.not) then { return false }
    def v = sym.value
    if (v == kw1) then { return true }
    if (v == kw2) then { return true }
    if (v == kw3) then { return true }
    return false
}

method skipSeparators {
    while { sym.isSeparator } do { next }
}

method acceptArgument {
    // True if the current token can start an argument to a request
    if (sym.isString) then { return true }
    if (sym.isNum) then { return true }
    if (sym.isLBrace) then { return true }
    if (sym.isLSquare) then { return true }
    if (sym.isIdentifier) then {
        def symValue = sym.value
        return (symValue == "true") || (symValue == "false")
    }
    return false
}

method successfulParse (aParsingBlock) {
    // returns true if executing aParsingBlock parses at least one value.
    def sz = values.size
    aParsingBlock.apply
    values.size != sz
}
method unsuccessfulParse (aParsingBlock) {
    // returns true if executing aParsingBlock fails to parse any values.
    def sz = values.size
    aParsingBlock.apply
    values.size == sz
}
method pushNum {
    // Push the current token onto the output stack as a number
    var o := ast.numeral(sym.value)
    values.push(o)
    next
    return o
}

method pushString {
    // Push the current token onto the output stack as a string
    var o := ast.stringLiteral(sym.value)
    o.end := line (sym.line) column (sym.endCol)
    values.push(o)
    next
    return o
}

method pushIdentifier {
    // Push the current token onto the output stack as an identifier.
    // false means that this identifier has not yet been annotated with a dtype.
    util.setPosition(sym.line, sym.column)
    def o = if (sym.value == "_") then {
        ast.wildcardIdentifier(false)
    } else {
        ast.identifier(sym.value, false)
    }
    values.push(o)
    next
    return o
}

method checkAnnotation(ann) {
    if (ann.isCall) then {
        for (ann.parts) do {p->
            for (p.args) do {a->
                if ((a.isIdentifier) && {false != a.dtype}) then {
                    var tok := sym
                    // Look back from the current token to try and find the tokens that cause this error.
                    while {tok.value != ":"} do { tok := tok.prev }
                    def suggestion = errormessages.suggestion.new
                    suggestion.deleteTokenRange(tok, tok.next)leading(true)trailing(false)
                    errormessages.syntaxError("an argument to an annotation cannot have a type.")
                          atRange(tok.line, tok.column, tok.next.endCol)
                          withSuggestion(suggestion)
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
    def anns = ast.noAnnotations
    if (unsuccessfulParse {expression(noBlocks)}) then {
        errorMissingAnnotation
    }
    while {sym.isComma} do {
        anns.add(checkAnnotation(values.pop))
        next
        if (unsuccessfulParse {expression(noBlocks)}) then {
            errorMissingAnnotation
        }
    }
    anns.add(checkAnnotation(values.pop))
    anns
}

method errorMissingAnnotation {
    def suggestions = list [ ]
    var suggestion := errormessages.suggestion.new
    def nextTok = findNextValidToken ["assignment"]
    if (nextTok == sym) then {
        suggestion.insert(" «annotation»")afterToken(lastToken)
    } else {
        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «annotation»")
    }
    suggestions.push(suggestion)
    suggestion := errormessages.suggestion.new
    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
    suggestions.push(suggestion)
    errormessages.syntaxError("one or more annotations separated by commas must follow 'is'.")
        atRange(lastToken.line, lastToken.column, lastToken.endCol)
        withSuggestions(suggestions)
}

method typeterm {
    if (sym.isIdentifier) then {
        pushIdentifier
        generic
        dotrest(noBlocks)
    } elseif {acceptKeyword "outer"} then {
        doouter
        skipSeparators
        if (! sym.isDot) then {
            values.pop
            // `outer` without a following `.method` is not a valid type
        } else {
            dotrest(noBlocks)
        }
    } elseif {acceptKeyword "self"} then {
        doself
        if (! sym.isDot) then {
            values.pop
            // `outer` without a following `.method` is not a valid type
        } else {
            dotrest(noBlocks)
        }
    } elseif {acceptKeyword "interface"} then {
        interfaceLiteral
    } elseif {acceptKeyword "Unknown"} then {
        values.push(ast.unknownLiteral)
        next
    } elseif {acceptKeyword "Self"} then {
        values.push(ast.selfTypeLiteral)
        next
    } elseif {acceptKeyword "..."} then {
        values.push(ast.ellipsis)
        next
    }
}

method typeexpression {
    var sz := values.size
    if (sym.isLParen) then {
        def prevStatementToken = statementToken
        statementToken := sym
        next
        if (unsuccessfulParse {typeexpression}) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken ["rparen"]
            if (nextTok == sym) then {
                suggestion.insert("«type expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev) leading (true)
                    trailing(false) with "«type expression»"
            }
            errormessages.syntaxError "parentheses must contain a valid type expression."
                atPosition(sym.line, sym.column) withSuggestion(suggestion)
        }
        if (sym.kind != "rparen") then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError "a type expression beginning with a '(' must end with a ')'."
                atRange(lastToken.line, lastToken.column, lastToken.endCol)
                withSuggestion(suggestion)
        }
        statementToken := prevStatementToken
        next
    } else {
        typeterm
    }
    if (values.size > sz) then {
        dotrest(noBlocks)
        typeexpressionrest
    }
    // TODO: check that the expression doesn't contain arbitrary requests or var references.
    // This has to happen in the identifier resolution phase.
}

method newIf(cond, thenList, elseList) {
    def thenBlock = ast.block(sequence.empty, thenList)
    def elseBlock = ast.block(sequence.empty, elseList)
    ast.ifExpr(cond, thenBlock, elseBlock)
}

method reportSyntaxError(message) before (expectedTokens) {
    def suggestions = list [ ]
    var suggestion := errormessages.suggestion.new
    def nextTok = findNextValidToken (expectedTokens)
    if (nextTok == sym) then {
        suggestion.insert(" «expression»")afterToken(lastToken)
    } else {
        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
    }
    suggestions.push(suggestion)
    suggestion := errormessages.suggestion.new
    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
    suggestions.push(suggestion)
    errormessages.syntaxError(message)
        atPosition(sym.line, sym.column)
        withSuggestions(suggestions)
}

method reportMissingArrow {
    def suggestion = errormessages.suggestion.new
    if ((sym.isAssignment) || (sym.value == "=")) then {
        suggestion.replaceToken(sym)with("->")
    } else {
        suggestion.insert(" ->")afterToken(lastToken)
    }
    errormessages.syntaxError("in a block with parameters, the parameters must be followed by '->'")
        atPosition(sym.line, sym.column) withSuggestion(suggestion)
}

method reportBadRhs {
    // a bind symbol := was not followed by a valid expression.

    def suggestions = list [ ]
    var suggestion := errormessages.suggestion.new
    def nextTok = findNextValidToken ["rbrace"]
    if (nextTok == sym) then {
        suggestion.insert(" «expression»")afterToken(lastToken)
    } else {
        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
    }
    suggestions.push(suggestion)
    suggestion := errormessages.suggestion.new
    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
    suggestions.push(suggestion)
    errormessages.syntaxError("a valid expression must follow ':='.")
        atPosition(sym.line, sym.column) withSuggestions(suggestions)
}

method block {
    // Parses a block.  Since a block is (a) treated as a statement, and
    // (b) may have statements inside, we save and restore the setting of the
    // global variables relevant to the statement context.

    if (sym.isLBrace) then {
        def btok = sym
        next
        skipSeparators
        def oldStatementToken = statementToken
        statementToken := sym
        var isMatchingBlock := false

        // a block may start with or without parameters.  We assume that
        // parameters are present, parse the first expression, and then check.
        // If it wasn't a parameter, we back-up the parse position.
        def savedPosition = saveParsePosition
        def params = blockParameters
        if (params.isEmpty) then {
            restoreParsePosition(savedPosition)
        }

        def blockNode = blockBody (params) beginningWith (btok)
        values.push(blockNode)
        statementToken := oldStatementToken
    }
}

method blockParameters {
    // parse all the parameters of this block, and return them as a
    // collection of identifier nodes.
    def params = list [ ]
    while {blockParameter(params)} do {
        if (sym.isArrow) then {
            next
            skipSeparators
            return params
        }
        if (sym.isComma) then {
            next
        } else {
            reportMissingArrow
        }
    }
    skipSeparators
    return params
}

method blockParameter(params) -> Boolean {
    // parse one parameter, if possible, push it onto params, and
    // return true. If the next expression is not a parameter, return false.

    var paramIsPattern := sym.isLParen
    // Parsing the expression ‹(a)› will return an identifierNode‹a› .
    // Checking for a paren lets us distinguish parameter from pattern.
    if (successfulParse {expression(blocksOK)}) then {
        if (sym.isComma || sym.isArrow || sym.isColon) then {
            // we have found a parameter
            var thisParam := values.pop
            if (paramIsPattern || thisParam.isIdentifier.not) then {
                paramIsPattern := true
                thisParam := ast.wildcardIdentifier(thisParam)
                    // put the pattern in the type field
            }
            thisParam.isBindingOccurrence := true
            thisParam.isParameter := true
            if (paramIsPattern && sym.isColon) then {
                reportSyntaxError("a block parameter that's an expression is assumed to mean " ++
                      "_:‹expression›, and so cannot be followed by a colon")
                      before ["arrow", "comma"]
            }
            if (sym.isColon) then {
                // We allow an expression for v: <PatternExpression>
                next
                if (successfulParse {expression(blocksOK)} .not) then {
                    reportSyntaxError "a block parameter must have a pattern or type expression after the ':'." before ["arrow", "rbrace"]
                }
                thisParam.dtype := values.pop
            }
            params.push(thisParam)
            return true
        } else {
            // we just parsed the first expression in the block
            return false
        }
    } else {
        return false    // we didn't parse anything
    }
}

method blockBody(params) beginningWith (btok) {
    // returns a block AST node.  params is the list of parameters,
    // which may be empty, and btok the lbrace that started the block.
    // The module variable sym is the first token in the body, and lastToken
    // is the preceeding lbrace that started the block, or the arrow that
    // terminated the parameter list (if there was one),
    // or the comment that appears after the lbrace, if there was one.

    def originalValues = values
    values := list []
    while {sym.isRBrace.not} do {
        // Take the body of the block
        if (unsuccessfulParse {statement}) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert "}" afterToken (lastToken)
            errormessages.syntaxError "a block must end with a '}'."
                atPosition(sym.line, sym.column) withSuggestion(suggestion)
        }
        separator
    }
    def etok = sym  // the closing rbrace
    next
    def body = values
    values := originalValues
    return ast.block(params, body).setPositionFrom(btok)
}


// Accept an "if" statement. This is a special syntactic case, rather
// than just a call with a multi-part method name - it might be possible
// to change that and compensate later on.
method doif {
    if (sym.isIdentifier && (sym.value == "if")) then {
        def btok = sym
        next
        def opener = if (sym.isLParen || {sym.isLBrace})
                        then { sym.value } else { "-missing-" }
        def closer = if (opener == "(") then { ")" }
                        elseif { opener == "\{" } then { "\}" }
                        else { "-nothing-" }
        if (opener == "-missing-") then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rparen or then.
            def nextTok = findNextToken { t ->
                (t.line == btok.line) && ((t.isRParen) ||
                    (t.isRBrace) || (t.isLBrace) ||
                    ((t.isIdentifier) && (t.value == "then")))
            }
            if (false == nextTok) then {
                suggestion.insert(" («condition») then \{")afterToken(btok)
            } elseif { nextTok.isRParen } then {
                if (nextTok == sym) then {
                    suggestion.insert("(«condition»")beforeToken(sym)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                }
            } elseif { nextTok.isLBrace } then {
                if (nextTok == sym) then {
                    suggestion.insert(" («condition») then")afterToken(btok)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                    suggestion.insert(") then")afterToken(nextTok.prev)andTrailingSpace(true)
                }
            } elseif { nextTok.isIdentifier } then {
                if (nextTok == sym) then {
                    suggestion.insert("(«condition») ")beforeToken(sym)
                } else {
                    suggestion.insert("(")beforeToken(sym)
                    suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
                }
            }
            errormessages.syntaxError("an if statement must have a condition " ++
                "in parentheses or braces after the 'if'.")
                atPosition(sym.line, sym.column) withSuggestion(suggestion)
        }
        next
        if (unsuccessfulParse {expression(blocksOK)}) then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rparen.
            var nextTok := findNextToken { t -> (t.line == lastToken.line) && (t.isRParen) }
            if (false == nextTok) then {
                nextTok := findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert("«expression») then \{")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                          leading(true)trailing(false)with("«expression») then \{")
                }
                errormessages.syntaxError("an if statement must have a " ++
                      "condition in parentheses or braces after the 'if'.")
                      atPosition(sym.line, sym.column)
                      withSuggestion(suggestion)
            } else {
                if (nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                    errormessages.syntaxError("an if statement must have a " ++
                        "condition in parentheses or braces after the 'if'.")
                        atPosition(sym.line, sym.column)
                        withSuggestion(suggestion)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                        leading(false)trailing(true)with("«expression»")
                    errormessages.syntaxError("an if statement must have a " ++
                        "condition in parentheses or braces after the 'if'.")
                        atRange(sym.line, sym.column, nextTok.column - 1)
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
                  atPosition(lastToken.line, lastToken.column + lastToken.size)
                  withSuggestion(suggestion)
        }
        next
        var cond := values.pop
        var body := list []

        var elseblock := list []
        var curelse := elseblock
            // These two variables are for else/elseif handling. An 'elseif' is
            // turned into nested 'if' statements for the AST; `curelse` points
            // to the most deeply-nested of those (where any eventual "else"
            // blocks will go). `elseblock` contains the statements of the
            // top-level 'else' block --- if there are any 'elseif's, that top-
            // level 'else' will comprise just one statement: another if.
        var v
        if (sym.isIdentifier && (sym.value == "then")) then {
            next
            if (sym.kind != "lbrace") then {
                def suggestion = errormessages.suggestion.new
                def closingBrace = findClosingBrace(btok, true)
                if (closingBrace.found.not) then {
                    if (closingBrace.tok == lastToken) then {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{}")
                    } else {
                        suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                    }
                } else {
                    suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                }
                errormessages.syntaxError("an if statement must have a '\{' after the 'then'.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
            }
            next
            while {sym.isRBrace.not} do {
                if (unsuccessfulParse {statement}) then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, false)
                    if (closingBrace.found.not) then {
                        if (closingBrace.tok == lastToken) then {
                            suggestion.insert("}")afterToken(lastToken)
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                        }
                    }
                    suggestion.deleteToken(sym)
                    errormessages.syntaxError "the then clause of an if statement must end with a '}'"
                          atPosition(sym.line, sym.column)
                          withSuggestion(suggestion)
                }
                separator
                body.push(values.pop)
            }
            next
            var econd
            var eif
            var newelse
            var ebody
            while {sym.isIdentifier && (sym.value == "elseif")} do {
                // Currently, the parser just accepts arbitrarily many
                // "elseifs", turning them into ifs inside the else.
                // TODO: allow blocks after elseif to contain a sequence of expressions.
                statementToken := sym
                next
                if (sym.isLBrace.not) then {
                    def suggestion = errormessages.suggestion.new
                    // Look ahead for a rbrace or then.
                    def nextTok = findNextToken { t ->
                        (t.line == statementToken.line)
                              && ((t.isRBrace || t.isLBrace)
                              || (t.isIdentifier && (t.value == "then"))) }
                    if (false == nextTok) then {
                        suggestion.insert(" \{ «expression» \} then \{")afterToken(statementToken)
                    } elseif { nextTok.isRBrace } then {
                        if (nextTok == sym) then {
                            suggestion.insert("\{ «expression» \}")beforeToken(sym)
                        } else {
                            suggestion.insert("\{ ")beforeToken(sym)
                        }
                    } elseif { nextTok.isLBrace } then {
                        if (nextTok == sym) then {
                            suggestion.insert(" \{ «expression» \} then")afterToken(statementToken)
                        } else {
                            suggestion.insert("\{ ")beforeToken(sym)
                            suggestion.insert(" \} then")afterToken(nextTok.prev)andTrailingSpace(true)
                        }
                    } elseif { nextTok.isIdentifier } then {
                        if (nextTok == sym) then {
                            suggestion.insert("\{ «expression» \} ")beforeToken(sym)
                        } else {
                            suggestion.insert("\{ ")beforeToken(sym)
                            suggestion.insert(" \}")afterToken(nextTok.prev)andTrailingSpace(true)
                        }
                    }
                    errormessages.syntaxError("an elseif statement must have a " ++
                          "condition in braces after the 'elseif'.")
                          atPosition(sym.line, sym.column)
                          withSuggestion(suggestion)
                }
                next
                if (unsuccessfulParse {expression(blocksOK)}) then {
                    def suggestion = errormessages.suggestion.new
                    // Look ahead for a rbrace or then.
                    var nextTok := findNextToken { t ->
                        (t.line == lastToken.line) && (t.isRBrace)}
                    if (false == nextTok) then {
                        nextTok := findNextValidToken ["rbrace"]
                        if (nextTok == sym) then {
                            suggestion.insert("«expression» \} then \{")afterToken(lastToken)
                        } else {
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression» \} then \{")
                        }
                        errormessages.syntaxError("an elseif clause must have an expression in braces after the 'elseif'.")atPosition(
                            sym.line, sym.column)withSuggestion(suggestion)
                    } else {
                        if (nextTok == sym) then {
                            suggestion.insert("«expression»")afterToken(lastToken)
                            errormessages.syntaxError("an elseif clause must have an expression in braces after the 'elseif'.")atPosition(
                                sym.line, sym.column)withSuggestion(suggestion)
                        } else {
                            //checkInvalidExpression
                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(false)trailing(true)with("«expression»")
                            errormessages.syntaxError("(4) an elseif statement must have an expression in braces after the 'elseif'.")atRange(
                                sym.line, sym.column, nextTok.column - 1)withSuggestion(suggestion)
                        }
                    }
                }
                if (sym.value != "\}") then {
                    checkBadOperators
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert "}" afterToken (lastToken)
                    errormessages.syntaxError("a condition beginning with a " ++
                        "'\{' must end with a '\}'.")
                        atPosition(lastToken.line, lastToken.column + lastToken.size)
                        withSuggestion(suggestion)
                }
                next
                econd := values.pop
                if (sym.isIdentifier && (sym.value == "then")) then {
                    next
                    ebody := list []
                } else {
                    def suggestion = errormessages.suggestion.new
                    if (sym.isLBrace) then {
                        def closingBrace = findClosingBrace(statementToken, false)
                        if (closingBrace.found.not) then {
                            if (closingBrace.tok == sym) then {
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
                        if (closingBrace.found.not) then {
                            if (closingBrace.tok == lastToken) then {
                                suggestion.insert(" then \{}")afterToken(lastToken)
                            } else {
                                suggestion.insert(" then \{")afterToken(lastToken)
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        } else {
                            suggestion.insert(" then \{")afterToken(lastToken)
                        }
                    }
                    errormessages.syntaxError("an elseif clause must have 'then' after the expression in braces.")
                          atPosition(sym.line, sym.column)withSuggestion(suggestion)
                }
                if (sym.kind != "lbrace") then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, true)
                    if (closingBrace.found.not) then {
                        if (closingBrace.tok == lastToken) then {
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{}")
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                        }
                    } else {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("then \{")
                    }
                    errormessages.syntaxError("an elseif clause must have a '\{' after the 'then'.")atPosition(
                        lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
                }
                next
                while { sym.isRBrace.not } do {
                    if (unsuccessfulParse {statement}) then {
                        def suggestion = errormessages.suggestion.new
                        def closingBrace = findClosingBrace(btok, false)
                        if (closingBrace.found.not) then {
                            if (closingBrace.tok == lastToken) then {
                                suggestion.insert("}")afterToken(lastToken)
                            } else {
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        }
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("an 'elseif' clause must end with a '}'.")atPosition(
                            sym.line, sym.column)withSuggestion(suggestion)
                    }
                    separator
                    v := values.pop
                    ebody.push(v)
                }
                next
                newelse := list []
                eif := newIf(econd, ebody, newelse)
                // Construct the inner "if" AST node, and then push it
                // inside the current "else" block.
                curelse.push(eif)
                // Update curelse to point to the new, empty, nested
                // else block.
                curelse := newelse
            }
            if (sym.isIdentifier && (sym.value == "else")) then {
                next
                if (sym.isLBrace.not) then {
                    def suggestion = errormessages.suggestion.new
                    def closingBrace = findClosingBrace(btok, true)
                    if (closingBrace.found.not) then {
                        if (closingBrace.tok == lastToken) then {
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{}")
                        } else {
                            suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{")
                        }
                    } else {
                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with("else \{")
                    }
                    errormessages.syntaxError("an else clause must start with a '\{' after the 'else'.")
                          atPosition(lastToken.line, lastToken.column + lastToken.size - 1)
                          withSuggestion(suggestion)
                }
                next
                // Just take all the statements and put them into
                // curelse.
                while {sym.isRBrace.not} do {
                    if (unsuccessfulParse {statement}) then {
                        def suggestion = errormessages.suggestion.new
                        def closingBrace = findClosingBrace(btok, false)
                        if (closingBrace.found.not) then {
                            if (sym.isEof) then {
                                errormessages.syntaxError("end of program " ++
                                    "found while searching for the '}' to close " ++
                                      "an 'else' statement.")
                                        atPosition(sym.line, sym.column)
                            }
                            if (closingBrace.tok == lastToken) then {
                                suggestion.insert("}")afterToken(lastToken)
                            } else {
                                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                            }
                        }
                        suggestion.deleteToken(sym)
                        errormessages.syntaxError("an else statement must end with a '}'.")atPosition(
                            sym.line, sym.column)withSuggestion(suggestion)
                    }
                    v := values.pop
                    curelse.push(v)
                    separator
                }
                next
            }
            util.setPosition(btok.line, btok.column)
            var o := newIf(cond, body, elseblock)
            values.push(o)
        } else {
            // Raise an error here, or it will spin nastily forever.
            def suggestion = errormessages.suggestion.new
            if (sym.isLBrace) then {
                def closingBrace = findClosingBrace(btok, false)
                if (closingBrace.found.not) then {
                    if (closingBrace.tok == sym) then {
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
                if (closingBrace.found.not) then {
                    if (closingBrace.tok == lastToken) then {
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
                  atPosition(sym.line, sym.column) withSuggestion(suggestion)
        }
    }
}

// Accept an identifier. Handle "if" specially by
// passing it to the method above.
method identifier {
    if (sym.isIdentifier) then {
        if (sym.value == "if") then {
            doif
        } else {
            pushIdentifier
        }
    }
}

method prefixop {
    if (sym.isOp) then {
        var op := sym.value
        next
        if (sym.isLParen) then {
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("parentheses must contain a valid expression.")atPosition(
                    sym.line, sym.column)withSuggestion(suggestion)
            }
            if (sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            if (unsuccessfulParse {term}) then {
                def suggestions = list [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert "«expression»" afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev) leading(true)
                          trailing(false) with "«expression»"
                }
                suggestions.push(suggestion)
                if (lastToken.prev.isAssignment) then {
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestion.deleteToken(lastToken.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                }
                errormessages.syntaxError("a prefix operator must be followed by an expression.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestions(suggestions)
            }
        }
        dotrest(blocksOK)
        callrest(blocksOK)
        def rcvr = values.pop
        def call = ast.request(rcvr,
            [ ast.requestPart "prefix{op}" withArgs [] ] )
        call.end := line (lastToken.line) column (lastToken.endCol)
        values.push(call)
    }
}

method generic {
    if (sym.isLGeneric) then {
        values.push(ast.typeApplication(values.pop, typeArgs))
    }
}
method trycatch {
    if (!(sym.isIdentifier && {sym.value == "try"})) then {
        return
    }
    def tryTok = sym
    next
    if (sym.isLBrace) then {
        block
    } else {
        if (sym.kind != "lparen") then {
            def suggestion = errormessages.suggestion.new
            // Look ahead for a rbrace, rparen, or catch.
            def nextTok = findNextToken { t ->
                  (t.isRBrace)
                      || ((t.isRParen) && (t.line == tryTok.line))
                      || ((t.isIdentifier) && (t.value == "catch"))
            }
            if (false == nextTok) then {
                suggestion.insert(" \{}")afterToken(tryTok)
            } elseif { nextTok.isRBrace } then {
                suggestion.insert(" \{")afterToken(tryTok)
            } elseif { nextTok.isRParen } then {
                if (nextTok == sym) then {
                    suggestion.insert("(«expression»")afterToken(lastToken)andTrailingSpace(true)
                } else {
                    suggestion.insert("(")afterToken(lastToken)andTrailingSpace(true)
                }
            } elseif { nextTok.isIdentifier } then {
                suggestion.insert(" \{")afterToken(tryTok)
                suggestion.insert("\} ")beforeToken(nextTok)
            }
            errormessages.syntaxError("a try(_)catch(_) statement must have " ++
                "a block or an expression in parentheses after the 'try'.")
                atPosition(tryTok.line, tryTok.endCol + 1)
                withSuggestion(suggestion)
        }
        next
        if (unsuccessfulParse {expression(blocksOK)}) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken ["rparen"]
            if (nextTok == sym) then {
                suggestion.insert("«expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
            }
            errormessages.syntaxError("a 'try(_)catch(_)…' statement must have " ++
                "a block or an expression in parentheses after the 'try'.")
                atPosition(sym.line, sym.column) withSuggestion(suggestion)
        }
        if (sym.kind != "rparen") then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")
                atPosition(lastToken.line, lastToken.column + lastToken.size)
                withSuggestion(suggestion)
        }
        next
    }
    def mainblock = values.pop
    def cases = list []
    var finally := false
    while {sym.isIdentifier && (sym.value == "catch")} do {
        next
        if (sym.isLBrace) then {
            block
        } elseif { sym.isLParen } then {
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.")atPosition(
                    sym.line, sym.column)withSuggestion(suggestion)
            }
            if (sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = list [ ]
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if (false == nextTok) then {
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
            errormessages.syntaxError("a 'try(_)catch(_)…' statement must have " ++
                  "either a matching block or an expression in parentheses after the 'catch'.")
                    atPosition(sym.line, sym.column) withSuggestions (suggestions)
        }
        cases.push(values.pop)
    }
    if (sym.isIdentifier && (sym.value == "case")) then {
        def suggestion = errormessages.suggestion.new
        suggestion.replaceToken(sym)with("catch")
        errormessages.syntaxError("a 'try(_)catch(_)…' statement starts with a "
                ++ "'try', followed by zero or more 'catch' blocks; there "
                ++ "are no 'case' blocks.")
                atRange(sym.line, sym.column, sym.column + 3)
                withSuggestion(suggestion)
    }
    if (sym.isIdentifier && (sym.value == "finally")) then {
        next
        if (sym.isLBrace) then {
            block
        } elseif { sym.isLParen } then {
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("a 'try(_)catch(_)…finally(_)' statement " ++
                    "must have either a block, or an expression in parentheses, " ++
                    "after the 'finally'.")
                    atPosition(sym.line, sym.column) withSuggestion(suggestion)
            }
            if (sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = list [ ]
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if (false == nextTok) then {
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
            errormessages.syntaxError("a try(_)catch(_)…finally(_) statement must have either a block or an expression in parentheses after the 'finally'.")atPosition(
                sym.line, sym.column)withSuggestions(suggestions)
        }
        finally := values.pop
    }
    util.setPosition(tryTok.line, tryTok.column)
    values.push(ast.tryCatch(mainblock, cases, finally))
}
method matchcase {
    if (!(sym.isIdentifier && (sym.value == "match"))) then {
        return 0
    }
    def matchTok = sym
    next
    if (sym.kind != "lparen") then {
        def suggestion = errormessages.suggestion.new
        // Look ahead for a rparen or case.
        def nextTok = findNextToken { t ->
            ((t.isRParen) && (t.line == matchTok.line))
                  || ((t.isIdentifier) && (t.value == "case")) }
        if (false == nextTok) then {
            suggestion.insert("(«expression»)")afterToken(matchTok)
        } elseif { nextTok.isRParen } then {
            if (nextTok == sym) then {
                suggestion.insert("(«expression»")beforeToken(sym)
            } else {
                suggestion.insert("(")beforeToken(sym)
            }
        } elseif { nextTok.isIdentifier } then {
            suggestion.insert("(")beforeToken(sym)
            suggestion.insert(")")afterToken(nextTok.prev)andTrailingSpace(true)
        }
        errormessages.syntaxError("a match statement must have an expression in parentheses after the 'match'.")atPosition(
            matchTok.line, matchTok.column + matchTok.size)withSuggestion(suggestion)
    }
    next
    if (unsuccessfulParse {expression(blocksOK)}) then {
        def suggestion = errormessages.suggestion.new
        def nextTok = findNextValidToken ["rparen"]
        if (nextTok == sym) then {
            suggestion.insert("«expression»")afterToken(lastToken)
        } else {
            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
        }
        errormessages.syntaxError("a match statement must have an expression in parentheses after the 'match'.")atPosition(
            sym.line, sym.column)withSuggestion(suggestion)
    }
    def matchee = values.pop
    if (sym.kind != "rparen") then {
        checkBadOperators
        def suggestion = errormessages.suggestion.new
        suggestion.insert(")")afterToken(lastToken)
        errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
            lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
    }
    next
    def cases = list []
    var elsecase := false
    while {sym.isIdentifier && (sym.value == "case")} do {
        next
        if (sym.isLBrace) then {
            block
        } elseif { sym.isLParen } then {
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError("a match statement must have either a matching block or an expression in parentheses after the 'case'.")atPosition(
                    sym.line, sym.column)withSuggestion(suggestion)
            }
            if (sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            def suggestions = list [ ]
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if (false == nextTok) then {
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
                sym.line, sym.column)withSuggestions(suggestions)
        }
        def case = values.pop
        if (case.isBlock) then {
            if (case.hasParams) then {
                def guard = case.params.first.decType
                if (guard.isUnknownType) then {
                    util.log 20 verbose "case pattern on line {case.params.first.line} is type Unknown; this is not useful, because it will always be true.  Perhaps you want an 'else' branch, which is true only when all other cases are false?"
                }
            } else {
                errormessages.syntaxError "the case block in a match(_)case(_)... expression must have one parameter"
                    atPosition(case.line, case.column)
            }
        }
        cases.push(case)
    }
    if (sym.isIdentifier && (sym.value == "else")) then {
        next
        if (sym.isLBrace) then {
            block
        } elseif {sym.isLParen} then {
            next
            if(successfulParse{ expression(blocksOK) }.not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if(nextTok == sym) then {
                    suggestion.insert("«expression»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«expression»")
                }
                errormessages.syntaxError "A match(_)case(_) statement must have a block after the 'else'"
                      atPosition (sym.line, sym.column) withSuggestion (suggestion)
            }
            if (sym.isRParen.not) then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert ")" afterToken (lastToken)
                errormessages.syntaxError "An expression beginning with a '(' must end with a ')'."
                      atPosition (lastToken.line, lastToken.column + lastToken.size)
                      withSuggestion (suggestion)
            }
            next
        } else {
            def suggestions = list.empty
            def nextTok = findNextTokenIndentedAt(lastToken)
            var suggestion := errormessages.suggestion.new
            if (nextTok == false) then {
                suggestion.insert " }" afterToken (tokens.first)
                suggestion.insert " \{" afterToken (lastToken)
                suggestions.push(suggestion)
            } elseif {nextTok == sym} then {
                suggestion.insert " («block expression»)" afterToken (lastToken)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.insert " \{ «expression» }" afterToken (lastToken)
                suggestions.push(suggestion)
            } else {
                suggestion.insert " }" afterToken(nextTok.prev)
                suggestion.insert " \{" afterToken(lastToken)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError "A match(_)case(_) must have a block after the 'else'"
                  atPosition (sym.line, sym.column) withSuggestions (suggestions)
        }
        elsecase := values.pop
    }
    util.setPosition(matchTok.line, matchTok.column)
    values.push(ast.matchCase(matchee, cases, elsecase))
}
method term {
    // Accept a term, and push onto values stack.  Terms are single syntactic
    // units that do not contain operators or parentheses, unlike expression.

    util.setPosition(sym.line, sym.column)
    if (sym.isNum) then {
        pushNum
    } elseif { sym.isString } then {
        pushString
    } elseif { sym.isIdentifier && (sym.value == "match") } then {
        matchcase
    } elseif { sym.isIdentifier && (sym.value == "try") } then {
        trycatch
    } elseif { sym.isIdentifier } then {
        identifier
    } elseif { acceptKeyword "self" } then {
        doself
    } elseif { acceptKeyword "outer" } then {
        doouter
    } elseif { acceptKeyword "object" } then {
        doobject
    } elseif { acceptKeyword "interface" } then {
        interfaceLiteral
    } elseif {acceptKeyword "Unknown"} then {
        values.push(ast.unknownLiteral)
        next
    } elseif {acceptKeyword "Self"} then {
        values.push(ast.selfTypeLiteral)
        next
    } elseif { sym.isLBrace } then {
        block
    } elseif { sym.isLSquare } then {
        sequenceConstructor
    } elseif { sym.isOp } then {
        // Prefix operator
        prefixop
    } elseif { acceptKeyword "..." } then {
        values.push(ast.ellipsis)
        next
    }
}

method doself {
    def o = ast.yourselfNode 0
    values.push(o)
    next
    o
}

method doouter {
    var n := 1
    while {
        next    // skip the keyword "outer"
        acceptDotOuter
    } do {
        next    // skip the dot
        n := n + 1
    }
    def o = ast.yourselfNode(n)
    values.push(o)
    o
}

method acceptDotOuter {
    // look ahead to see if there is a following `.outer`
    if (sym.isDot.not) then { return false }
    def nextSym = sym.next
    if (nextSym.isKeyword.not) then { return false }
    if (nextSym.value ≠ "outer") then { return false }
    true
}

method expression(acceptBlocks) {
    // Accept an expression. Expressions may consist of parenthesised
    // subexpressions or terms, which may be followed by method invocations
    // (dotrest), the rest of a method request, or an operator expression.

    var sz := values.size
    util.setPosition(sym.line, sym.column)
    if (sym.isLParen) then {
        def tmpStatementToken = statementToken
        statementToken := sym
        util.setPosition(sym.line, sym.column)
        next
        if (successfulParse{expression(acceptBlocks)}.not) then {
            def suggestion = errormessages.suggestion.new
            def nextTok = findNextValidToken ["rparen"]
            if (nextTok == sym) then {
                suggestion.insert("«expression»")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)
                      leading(true)trailing(false)with("«expression»")
            }
            errormessages.syntaxError("parentheses must contain a valid expression.")atPosition(
                sym.line, sym.column)withSuggestion(suggestion)
        }
        if (sym.kind != "rparen") then {
            checkBadOperators
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")
                  atPosition(lastToken.line, lastToken.column + lastToken.size)
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
        valueexpressionrest
    }
}

method toprec(ops) {
    // Return the precedence of the operator at the top of the "ops" stack.
    if (ops.isEmpty) then {
        0
    } else {
        ops.last.precedence
    }
}


method typeexpressionrest {
    if (sym.isOp) then {
        expressionrest "type expression" recursingWith {typeexpression} blocks (noBlocks)
    }
}

method valueexpressionrest {
    if (sym.isOp) then {
        expressionrest "expression" recursingWith {expression(blocksOK)} blocks (blocksOK)
    }
}

class operator(opSymToken) {
    // represents a binary operator in an expression
    // opSymToken is the operator symbol token

    def symbol = opSymToken
    def op is public = symbol.value
    var typeArgs is public := false
    def start:Position is public = symbol.start
    def end:Position is public = symbol.end

    once method isArithmetic {
        if (op == "*") then { return true }
        if (op == "/") then { return true }
        if (op == "+") then { return true }
        if (op == "-") then { return true }
        false
    }

    once method precedence {
        // Answer the precedence of this operator. Only
        // multiplication and division have nontrivial precedence.
        if (op == "*") then { 10 }
            elseif { op == "/" } then { 10 }
            else { 5 }
    }
}

method expressionrest(name) recursingWith (recurse) blocks (acceptBlocks) {
    // Process the rest of an operator expression using the shunting-yard
    // algorithm. This method uses the oprec and toprec methods above to
    // ensure the correct precedence, and treats all operators as
    // left-associative.  It is parameterised so that it
    // can be used for both type- and value- expressions.

    def terms = list [] // stack of operands yet to be used
    def ops = list []   // Operator stack
    var o
    terms.push(values.pop)
    var allArithmetic := true // This expr consists only of arithmetic operators
    var opSymbol              // The single operator being used in this expression
    var opSymbolEncountered := false  // true once opSymbol has been assigned
    while {
        (sym.isOp) && {sym.value ≠ "="}
    } do {
        o := operator(sym)
        next
        o.typeArgs := typeArgs          // parse the type arguments, if present
        if (o.isArithmetic.not) then {
            allArithmetic := false
        }
        if (opSymbolEncountered && {(opSymbol.op ≠ o.op) && allArithmetic.not}) then {
            // If: this is not the first operator, and it is not the same as
            // the previous operator, and the expression has not been entirely
            // arithmetic (that is, comprising +, -, * and /), raise an error.
            def suggestions = list [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.insert(")")afterToken(sym)
            suggestion.insert("(")beforeToken(lastToken.prev)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken.prev)
            suggestion.insert("(")beforeToken(lastToken.prev.prev.prev)
            suggestions.push(suggestion)
            def msg = if (o.isArithmetic ≠ opSymbol.isArithmetic) then {
                "using both arithmetic and non-arithmetic operators"
            } else {
                "using two different operators"
            }
            errormessages.syntaxError "an expression {msg} requires parentheses" atRange (
                  lastToken.prev.prev.prev.line, lastToken.prev.prev.prev.column,
                  lastToken.column) withSuggestions (suggestions)
        }
        opSymbol := o
        opSymbolEncountered := true
        while {(ops.size > 0) && (o.precedence <= toprec(ops))} do {
            // Do the shunting: for as long as the current operator
            // has lesser or equal precedence than the one on the
            // top of the stack, take the operator off the stack and
            // replace its two operands with the combined operator node.
            // This rule works for left-associative operators only.
            def o2 = ops.pop
            def tmp2 = terms.pop
            def tmp1 = terms.pop
            terms.push(ast.opRequest(o2.op, tmp1, tmp2).
                withGenericArgs(o2.typeArgs).
                setPositionFrom(tmp1))
        }
        ops.push(o)
        if (sym.isLParen) then {
            // When a parenthesis is found, take an expression from
            // *within* the parentheses and add it to the stack. Do
            // not delegate entirely to expression, because it will
            // then consume all the following operators and break
            // precedence. Possibly parenthesised expressions could
            // be allowed in term above?
            next
            if (successfulParse(recurse).not) then {
                def suggestion = errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert("«{name}»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with("«{name}»")
                }
                errormessages.syntaxError("parentheses must contain a valid {name}.")atPosition(
                    sym.line, sym.column)withSuggestion(suggestion)
            }
            if (sym.kind != "rparen") then {
                checkBadOperators
                def suggestion = errormessages.suggestion.new
                suggestion.insert(")")afterToken(lastToken)
                errormessages.syntaxError("an expression beginning with a '(' must end with a ')'.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
            }
            next
        } else {
            if (sym.isSeparator) then {
                def suggestions = list [ ]
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
                    lastToken.line, lastToken.column + lastToken.size)withSuggestions(suggestions)
            }
            if (unsuccessfulParse {term}) then {
                def suggestions = list [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken ["comma", "rparen", "rsquare", "rbrace"]
                if (nextTok == sym) then {
                    suggestion.insert(" «{name}»")afterToken(lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «{name}»")
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("a valid {name} must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.")atPosition(
                    lastToken.line, lastToken.column + lastToken.size)withSuggestions(suggestions)
            }
        }

        // Regardless of where the last value came from, it may have
        // method invocations happening to it.  These should now be applied,
        // and the result put into the operands list.
        dotrest(acceptBlocks)
        callrest(acceptBlocks)
        terms.push(values.pop)
    }
    while {ops.size > 0} do {
        // Shunt off any remaining operators at the end
        def top = ops.pop
        def t2 = terms.pop
        def t1 = terms.pop
        terms.push(ast.opRequest(top.op, t1, t2)
            .withGenericArgs(top.typeArgs)
            .setPositionFrom(t1))
    }
    values.push(terms.pop)
    if (terms.isEmpty.not) then {
        errormessages.syntaxError("values left on term stack.")atPosition(sym.line, sym.column)
    }
}

method dotrest(acceptBlocks) {
    // Accept a method request starting with ".". The receiver of the request
    // is assumed to be on the values stack, and will be replaced by a
    // memberNode representing this request, consuming the dot and all the
    // parts of a following method name and its arguments.   Any following
    // dotted requests will also be parsed, by recursive invocations.

    if (sym.isDot) then {
        util.setPosition(sym.line, sym.column)
        var receiver := values.pop
        next
        if (sym.isIdentifier) then {
            def dro = ast.requestWithoutArgs(sym.value, receiver)
                  .setPositionFrom(receiver)
            values.push(dro)
            next
            if (sym.isDot) then {
                dotrest(acceptBlocks)
            } elseif { sym.isLGeneric } then {
                dro.generics := typeArgs
            }
            if (sym.isLParen || (acceptBlocks && sym.isLBrace) ||
                  sym.isNum || sym.isString || sym.isLSquare) then {
                callrest(acceptBlocks)
            }
        } else {
            def suggestions = list [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.insert("«method name»")afterToken(lastToken)
            suggestions.push(suggestion)
            errormessages.syntaxError("a field or method name must follow a '.'.")atPosition(
                sym.line, sym.column)withSuggestions(suggestions)
        }
    }
}

method callrest(acceptBlocks) {
    // Accept a method request with arguments, if they are present.
    // Method requests without arguments are left as "member" AST nodes

    // The top of the values stack may be an identifierNode, which will become
    // the method name of an implicit request, or a memberNode, whose receiver
    // will become the receiver of the parsed call, and whose nameString
    // will become the first part-name of the method name.  It may also
    // be some other expression (such as a literal), in which case there
    // can be no arguments, and there is nothing to do.
    // Leaves the stack depth unchanged.

    if (values.size == 0) then {
        return
    }
    var meth := values.pop
    def kind = meth.kind
    if (kind ≠ "identifier") then {
        if (kind ≠ "member") then {
            values.push(meth)
            return
        }
    }
    def lnum = meth.line
    def lpos = meth.column
    var methn := meth.nameString
    def argumentParts = list []
    def part = ast.requestPart(methn) withArgs(list []).setPositionFrom(meth)
    argumentParts.push(part)
    var foundArgs := false
    var tok := lastToken
    var genericIdents := false
    def g = meth.generics
        // when used to parse a value expression, generic arguments have already
        // been parse and are in `meth`.  When used to parse a type expression,
        // they are in the unparsed input.  TODO: this is probably a bug!
    if (false == g) then {
        if (sym.isLGeneric) then {
            genericIdents := typeArgs
        }
    } else {
        genericIdents := g
    }
    foundArgs := parseArgumentsFor(meth) into (part) acceptBlocks (acceptBlocks)

    if (foundArgs) then {
        def realRcvr = if (meth.isIdentifier) then {
            ast.implicit.setPositionFrom(meth)
        } else {
            meth.receiver
        }
        meth := ast.request(realRcvr, argumentParts).setPositionFrom(realRcvr)

        while {sym.isIdentifier} do {
            // parse more parts of a multi-part request
            def argList = list [ ]      // will be modified by parseArgumentsFor(_)into(_)
            def namePart = ast.requestPart(sym.value) withArgs(argList).setPositionFrom(sym)
            next
            def argsFound = parseArgumentsFor(meth) into (namePart) acceptBlocks (acceptBlocks)
            if (argsFound.not) then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert "(‹expression›)" afterToken (lastToken)
                def more = if (isOnAContinationLine) then {
                    "  The indentation tells me that this is a continuation of" ++
                        " the previous line; is that what you intended?"
                } else { "" }
                def reqStart = line (lnum) column (lpos)
                def reqEnd = line (lastToken.line) column (lastToken.endCol)
                def reqRange = ast.start (reqStart) end (reqEnd)
                errormessages.syntaxError("a multi-part method request must end with an argument list," ++
                    " either parenthesized or self-delimiting." ++ more)
                        atRange(reqRange) withSuggestion (suggestion)
            }
            argumentParts.addLast(namePart)
        }
        meth.end := line (lastToken.line) column (lastToken.endCol)
        // we do this indside the if, because outside meth might be an
        // identifierNode or a memberNode
    }
    meth.generics := genericIdents
    values.push(meth)
    dotrest(acceptBlocks)
}

method parseArgumentsFor(meth) into (part) acceptBlocks (acceptBlocks) {
    // `meth` is a memberNode or an identifier.
    // Parses the arguments for `part`, a requestPart of a method request.
    // If arguments are present, adds them to `part.args` and answers true.
    // Answers false if no arguments are present.


    var tok := lastToken
    if (sym.isLParen) then {
        tok := sym
        parenthesizedArgs(part) startingWith (tok)
        true
    } elseif { acceptBlocks.not && { sym.isLBrace } } then {
        false
    } elseif { acceptArgument } then {
        tok := sym
        term
        part.args.push(values.pop)
        true
    } else {
        false
    }
}

method parenthesizedArgs(part) startingWith (tok) {
    next
    if (successfulParse {expression(blocksOK)}) then {
        while {sym.isComma} do {
            part.args.push(values.pop)
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestions = list [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken ["rparen"]
                if (nextTok == sym) then {
                    suggestion.insert " «expression»" afterToken (lastToken)
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)
                        leading (true) trailing (false) with " «expression»"
                }
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
                errormessages.syntaxError("an argument list must have an expression after a ','.")
                      atPosition(sym.line, sym.column)
                      withSuggestions(suggestions)
            }
        }
        part.args.push(values.pop)
    }
    if (sym.kind != "rparen") then {
        checkBadOperators
        def suggestion = errormessages.suggestion.new
        suggestion.insert(")")afterToken(lastToken)
        def rng = ast.start (line (tok.line) column (tok.column))
                        end (line (lastToken.line) column (lastToken.column + lastToken.size))
        errormessages.syntaxError "an argument list beginning with a '(' must end with a ')'."
              atRange (rng) withSuggestion (suggestion)
    }
    if (sym.line == part.line) then {
        part.lineLength := sym.column - part.column
    }
    next
}

method typeArgs {
    // Parses one or more type arguments, if present, and returns them as a list.

    if (sym.isLGeneric.not) then { return [] }
    def args = list [ ]
    def startToken = sym
    next
    while {successfulParse{typeexpression}} do {
        args.add(values.pop)
        if (sym.isComma) then { next }
    }
    if (sym.isRGeneric.not) then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert "⟧" afterToken(lastToken)
        def suggestion2 = errormessages.suggestion.new
        suggestion2.insert " " beforeToken(startToken)
        def suggestions = [suggestion, suggestion2]
        errormessages.syntaxError "a type argument list containing a '⟦' must have a matching '⟧'. "
              atPosition(lastToken.line, lastToken.column + lastToken.size)
              withSuggestions(suggestions)
    }
    if (args.isEmpty) then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert("«type expression»")afterToken(lastToken)
        errormessages.syntaxError "a type argument list starting with a '⟦' must end with a matching '⟧'. "
            atPosition(lastToken.line, lastToken.column + lastToken.size) withSuggestion(suggestion)
    }
    next
    return args
}

method errorDefNoName {
    def suggestion = errormessages.suggestion.new
    def nextTok = findNextToken { t ->
        (t.isOp) && (t.value == "=") && (t.line == sym.line)
    }
    if (false == nextTok) then {
        suggestion.insert(" «name» =")afterToken(lastToken)
    } elseif { nextTok == sym } then {
        suggestion.insert(" «name»")afterToken(lastToken)
    } else {
        suggestion.replaceTokenRange(sym, nextTok.prev)
              leading(false)trailing(true)with("«name» ")
    }
    var msg := "a definition must have a name, '=', and a value after the 'def'"
    if (sym.isKeyword) then {
        msg := msg ++ "; '{sym.value}' is a reserved word"
        errormessages.syntaxError(msg) atRange(sym)
    } else {
        errormessages.syntaxError(msg) atPosition(sym.line, sym.column)
                withSuggestion(suggestion)
    }
}

method errorDefNoExpression {
    def suggestion = errormessages.suggestion.new
    def nextTok = findNextValidToken [ ]
    if (nextTok == sym) then {
        suggestion.insert(" «expression»")afterToken(lastToken)
    } else {
        suggestion.replaceTokenRange(sym, nextTok.prev)
              leading(true)trailing(false)with(" «expression»")
    }
    errormessages.syntaxError("a definition must have a value after the '='.")
          atPosition(lastToken.line, lastToken.column + lastToken.size)
          withSuggestion(suggestion)
}

method errorDefUsesAssign(defTok) {
    def suggestions = list [ ]
    var suggestion := errormessages.suggestion.new
    suggestion.replaceToken(sym)with("=")
    suggestions.push(suggestion)
    suggestion := errormessages.suggestion.new
    suggestion.replaceToken(defTok)with("var")
    suggestions.push(suggestion)
    errormessages.syntaxError("a definition must use '=' instead of ':='. " ++
        "A variable declaration uses 'var' and ':='.")atRange(
        sym.line, sym.column, sym.column + 1) withSuggestions(suggestions)
}

method errorDefMissingRhs(defTok) {
    def suggestions = list [ ]
    var suggestion := errormessages.suggestion.new
    suggestion.insert(" = «expression»")afterToken(lastToken)
    suggestions.push(suggestion)
    suggestion := errormessages.suggestion.new
    suggestion.replaceToken(defTok)with("var")
    suggestions.push(suggestion)
    errormessages.syntaxError("a definition must have '=' and a value after the name. "
        ++ "A variable declaration does not require a value but uses 'var', not 'def'.")
        atPosition(sym.line, sym.column) withSuggestions(suggestions)
}

method defdec {
    // Accept definition of a constant

    if (acceptKeyword "def") then {
        def line = sym.line
        def pos = sym.column
        def defTok = sym
        next
        if (sym.isIdentifier.not) then {
            errorDefNoName
        }
        pushIdentifier
        def name = values.pop
        name.isBindingOccurrence := true
        def dtype = optionalTypeAnnotation
        def anns = doannotation
        def o = ast.defDec(name, ast.nullNode, dtype).setPositionFrom(defTok)
        if (false != anns) then { o.annotations.addAll(anns) }
        if (sym.isOp && (sym.value == "=")) then {
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                errorDefNoExpression
            }
            o.value := values.pop       // overwrite nullNode with initializer
        } elseif { sym.isAssignment } then {
            errorDefUsesAssign(defTok)
        } elseif { o.isAnnotationDecl.not } then {
            errorDefMissingRhs(defTok)
        }
        values.push(o)
        reconcileComments
    }
}

method vardec {
    // Accept a var declaration

    if (acceptKeyword "var") then {
        def line = sym.line
        def pos = sym.column
        def varTok = sym
        next
        if (sym.isIdentifier.not) then {
            def nextTok = findNextToken { t ->
                  (t.isAssignment) && (t.line == sym.line)
            }
            var msg := "a variable declaration must have a name after the 'var'"
            if (sym.isKeyword) then {
                msg := msg ++ "; '{sym.value}' is a reserved word"
                errormessages.syntaxError (msg) atRange(sym)
            } else {
                errormessages.syntaxError (msg) atPosition(sym.line, sym.column)
            }
        }
        pushIdentifier
        var val := false
        var name := values.pop
        name.isBindingOccurrence := true
        def dtype = optionalTypeAnnotation
        def anns = doannotation
        if (sym.isAssignment) then {
            next
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestions = list [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken [ ]
                if (nextTok == sym) then {
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
                    lastToken.line, lastToken.column + lastToken.size)withSuggestions(suggestions)
            }
            val := values.pop
        } else {
            if ((sym.isOp) && (sym.value == "=")) then {
                def suggestions = list [ ]
                var suggestion := errormessages.suggestion.new
                suggestion.replaceToken(sym)with(":=")
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.replaceToken(varTok)with("def")
                suggestions.push(suggestion)
                errormessages.syntaxError("a variable declaration must use ':=' instead of '='. A definition uses 'def' and '='.")
                    atRange(sym.line, sym.column, sym.column)
                    withSuggestions(suggestions)
            }
        }
        util.setPosition(line, pos)
        def o = ast.varDec(name, val, dtype)
        if (false != anns) then { o.annotations.addAll(anns) }
        values.push(o)
        reconcileComments
    }
}

method sequenceConstructor {
    // Accept a square-bracketed sequence literal like [1,2,3].

    if (sym.isLSquare) then {
        def lSq = sym
        next
        def params = list []
        if (successfulParse {expression(blocksOK)}) then {
            while {sym.isComma} do {
                params.push(values.pop)
                next
                if (unsuccessfulParse {expression(blocksOK)}) then {
                    def suggestions = list [ ]
                    var suggestion := errormessages.suggestion.new
                    def nextTok = findNextValidToken ["rsquare"]
                    if (nextTok == sym) then {
                        suggestion.insert(" «expression»")afterToken(lastToken)
                    } else {
                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    }
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("a sequence must contain zero or more expressions separated by commas.")
                        atPosition(sym.line, sym.column) withSuggestions(suggestions)
                }
            }
            params.push(values.pop)
        }
        if (sym.isRSquare.not) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert("]")afterToken(lastToken)
            errormessages.syntaxError("a sequence beginning with a '[' must end with a ']'.")atPosition(
                lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
        }
        def o = ast.sequenceConstructor(params).setPositionFrom(lSq)
        values.push(o)
        next
    }
}

method dodialect {
    // Parses "dialect «quoted-string»"

    if (acceptKeyword "dialect") then {
        def dialectToken = sym
        next
        if (sym.isString.not) then {
            def suggestion = errormessages.suggestion.new
            var errorPos
            if ((sym.isIdentifier) && (sym.line == lastToken.line)) then {
                suggestion.replaceToken(sym)with("\"{sym.value}\"")
                errorPos := sym.column
            } else {
                suggestion.insert(" \"«dialect name»\"")afterToken(lastToken)
                errorPos := lastToken.column + lastToken.size + 1
            }
            errormessages.syntaxError("a dialect statement must have the name " ++
                "of the dialect in quotes after the word 'dialect'.")
                atPosition(lastToken.line, errorPos)withSuggestion(suggestion)
        }
        pushString
        def p = values.pop
        def dn = ast.dialectFromStringLiteral(p).setPositionFrom(dialectToken)
        if (dn.value.endsWith ".grace") then {
            errormessages.syntaxError "the name of the dialect must not end with \".grace\""
                  atRange(p)
        }
        if (values.isEmpty) then {
            if (moduleObject.theDialect.line == 0) then {
                moduleObject.theDialect := dn
            } else {
                errormessages.syntaxError("at most one dialect statement may appear in a module.")
                  atRange(dn)
            }
        } else {
            errormessages.syntaxError("a dialect statement must be at the start of the module.")
                  atRange(dn)
        }
    }
}

method inheritOrUse {
    // Parses "inherit «object expression»"
    if (sym.isKeyword.not) then { return }
    if ((sym.value == "inherit") || (sym.value == "use")) then {
        statementToken := sym
        def btok = sym
        next
        if (unsuccessfulParse {expression(blocksOK)}) then {
            def suggestions = list [ ]
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextValidToken ["rsquare"]
            if (nextTok == sym) then {
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
                atPosition(lastToken.line, lastToken.column + lastToken.size + 1)
                withSuggestions(suggestions)
        }
        util.setPosition(btok.line, btok.column)
        def inhNode = ast.inheritStatement(values.pop)
        if (btok.value == "use") then {
            inhNode.isUse := true
        }
        while { inheritModifier(inhNode) } do { }
        values.push(inhNode)
    }
}

method inheritModifier(node) {
    // parse an alias or exclude modifier on an `inherit` clause
    // node is the inheritNode

    if (sym.isKeyword.not) then { return false }
    def symValue = sym.value
    if (symValue == "alias") then {
        parseAlias(node)
    } elseif {symValue == "exclude"} then {
        parseExclude(node)
    } else {
        false
    }
}

method parseAlias(node) {
    // parse an alias modifier on an `inherit` clause; node is the inheritNode
    next    // skip the alias keyword
    def newMeth = methodSignature
    if (sym.isOp && (sym.value == "=")) then {
        next
        def oldMeth = methodSignature.appliedOccurrence
        if (newMeth.numParams ≠ oldMeth.numParams) then {
            errormessages.syntaxError "a method and its alias must have the same number of parameters"
                atRange (newMeth.line, newMeth.column, oldMeth.endCol)
        }
        node.addAlias (newMeth) for (oldMeth)
    } else {
        errormessages.syntaxError ("an alias modifier must take the form " ++
            "'‹newMethodHeader› = ‹oldMethodHeader›'")
            atPosition (lastToken.line, lastToken.column + lastToken.size)
    }
    return true
}
method parseExclude(node) {
    // parse an exclude modifier on an `inherit` clause; node is the inheritNode
    next    // skip the exclude keyword
    def excludedMeth = methodSignature.appliedOccurrence
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

method parseObjectConstructorBody (constructName) startingWith (btok) after (prev) {
    // Parse the body of an object constructor, leaving the node on the
    // values stack.  This method is used for parsing object, class, and trait
    // bodies; constructName says which, so that error messages are correct.
    // btok is the keyword token that started the construct: class, object, or trait.

    def anns = doannotation
    if (sym.isLBrace.not) then {
        def suggestion = errormessages.suggestion.new
        def nextTok = findNextToken { t -> t.isRBrace }
        if (false == nextTok) then {
            suggestion.insert(" \{}")afterToken(lastToken)
        } else {
            suggestion.insert(" \{")afterToken(lastToken)
        }
        errormessages.syntaxError "{constructName} must have a '\{' after {prev}."
            atPosition(lastToken.line, lastToken.column + lastToken.size)
            withSuggestion(suggestion)
    }
    next
    skipSeparators
    def originalValues = values
    values := list []
    var superObject := false
    def usedTraits = list []
    var inPreamble := true  // => processing inherit and use statements
    while {sym.isRBrace.not && sym.isEof.not} do {
        pushComments
        if (successfulParse {inheritOrUse}) then {
            def parentNode = values.pop
            if (inPreamble) then {
                if (parentNode.isUse) then {
                    usedTraits.add(parentNode)
                } elseif { false != superObject } then {
                    errormessages.syntaxError("at most one 'inherit' statement " ++
                        "is permitted in {constructName}")
                        atRange(parentNode.line, parentNode.column,
                        parentNode.column + 6)
                } elseif { usedTraits.isEmpty } then {
                    superObject := parentNode
                } else {
                    errormessages.syntaxError("'inherit' must come " ++
                        "before 'use' in {constructName}")
                        atRange(parentNode.line, parentNode.column,
                        parentNode.column + 6)
                }
            } else {
                errormessages.syntaxError("'{parentNode.statementName}' must " ++
                    "come at the start of {constructName}")
                    atRange(parentNode.line, parentNode.column,
                            parentNode.column + parentNode.statementName.size)
            }
        } elseif { successfulParse {methodClassOrTrait} } then {
            inPreamble := false
        } elseif { successfulParse {statement} } then {
            inPreamble := false
        } else {
            errormessages.syntaxError("unexpected symbol '{sym.value}' in body " ++
                "of {constructName}")
                atRange(sym.line, sym.column, sym.endCol)
        }
        separator
    }
    def body = values
    values := originalValues
    next
    def objNode = ast.objectWithBody(body) inheriting (superObject) using(usedTraits)
    objNode.setPositionFrom(btok)
    if (false != anns) then { objNode.annotations.addAll(anns) }
    values.push(objNode)
}

method classOrTrait(btok) {
    // Accepts a class or trait declaration, which started with btok
    //
    // Class declarations were formerly of the form:
    //
    //   class objName.methodName (param1, param2) {
    //     inherit <expr>
    //     var x
    //     method y(z) { … }
    // }
    // Such declarations are no longer supported, and produce an
    // error message starting with "dotted classes are no longer supported"
    //
    // Classes are now of the form:
    //
    // class methodName (param1, param2) {
    //     inherit <expr>
    //     var x
    //     method y(z) { … }
    // }
    //
    // A class is compiled into a methodNode that contains
    // an objectNode, i.e., it is treated as syntactic sugar for
    //
    // method methodName (param1, param2) {
    //     object {
    //         inherit <expr>
    //         var x
    //         method y(z) { … }
    //     }
    // }
    //
    // Arguably, this is wrong.  Perhaps the parser should create classNodes,
    // which would later be removed by the AST re-writing step?
    // So that syntactic-classes can be found if necessary, methodNodes
    // have a description field which is "class" or "trait"

    statementToken := sym       // the `class` or `trait` keyword
    def myKind = statementToken.value
    next
    if (sym.isIdentifier.not) then {
        def suggestions = list [ ]
        if (sym.isLBrace) then {
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" «{myKind} name»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.replaceToken(lastToken)with("object")
            suggestions.push(suggestion)
        } else {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(" «{myKind} name» \{}")afterToken(lastToken)
            suggestions.push(suggestion)
        }
        var msg := "a {myKind} declaration must have a name after the '{myKind}'"
        if (sym.isKeyword) then {
            msg := msg ++ "; '{sym.value}' is a reserved word"
            errormessages.syntaxError(msg)atRange(sym)
        } else {
            errormessages.syntaxError(msg)
                  atPosition(sym.line, sym.column)
                  withSuggestions(suggestions)
        }
    }
    if (tokens.first.isDot) then {
        errormessages.syntaxError("dotted classes are no longer supported. " ++
                "Consider using a class, or a class inside an object constructor.")
                atPosition(tokens.first.line, tokens.first.column)
    }
    def methNode = methodHeader.setPositionFrom(btok)
    parseObjectConstructorBody "a {myKind}" startingWith (btok) after "the {myKind} header"
    def objNode = values.pop
    methNode.body := [objNode]
    methNode.description := myKind
    methNode.annotations.addAll(objNode.annotations)  // TODO: sort this out!
        // In a class declaration, there is just one place for annotations.
        // These might include annotations on the method (such as
        // confidential), and annotations on the object (such as immutable)
    objNode.name := methNode.canonicalName
    if (myKind == "class") then {
        objNode.inClass := true
        objNode.isFresh := true
    } elseif { myKind == "trait" } then {
        objNode.inTrait := true
        objNode.isFresh := true
    }
    values.push(methNode)
    reconcileComments
}

method methodClassOrTrait {
    // Parse a method declaration, including a class or trait declaration
    var isOnceMethod := false
    var btok := sym
    if (acceptKeyword "once") then {
        isOnceMethod := true
        next
        if (acceptKeyword "method" or "class" or "trait" .not) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert " method" afterToken(btok)
            errormessages.syntaxError "`once` must be followed by `method`, `class` or `trait`"
                  atPosition(sym.line, sym.column) withSuggestion(suggestion)
        }
    }
    if (acceptKeyword "method") then {
        methodDeclaration(btok)
    } elseif {acceptKeyword "class" or "trait"} then {
        classOrTrait(btok)
    } else {
        return      // no method, class or trait was found
    }
    values.last.isOnceMethod := isOnceMethod
}

method methodDeclaration(btok) {
    next    // skip the "method" keyword
    def methNode = methodHeader.setPositionFrom(btok)
    def anns = doannotation
    def originalValues = values
    values := list []
    var lBraceSym
    if (sym.isLBrace) then {
        lBraceSym := sym
        next
        skipSeparators
        // sym is now the first token in the method body
        while { successfulParse { statement } } do { separator }
            // The body is a sequence of statements; the method ends
            // when no further statement is found.
        if (sym.isRBrace.not) then {
            def suggestion = errormessages.suggestion.new
            def closingBrace = findClosingBrace(btok, false)
            if (closingBrace.found.not) then {
                if (sym.isEof) then {
                    errormessages.syntaxError("end of program " ++
                        "found while searching for the '}' to close " ++
                          "a method declaration.")
                            atPosition(sym.line, sym.column)
                }
                if (closingBrace.tok == sym) then {
                    suggestion.insert("}")afterToken(lastToken)
                } else {
                    suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                }
            }
            suggestion.deleteToken(sym)
            errormessages.syntaxError("a method must end with a '}'.")atPosition(
                sym.line, sym.column)withSuggestion(suggestion)
        }
        next
    } elseif {false == anns} then {
        def suggestion = errormessages.suggestion.new
        def closingBrace = findClosingBrace(btok, true)
        if (closingBrace.found.not) then {
            if (closingBrace.tok == lastToken) then {
                suggestion.insert(" \{}")afterToken(lastToken)andTrailingSpace(true)
            } else {
                suggestion.addLine(closingBrace.tok.line + 0.1, "}")
                suggestion.insert(" \{")afterToken(lastToken)andTrailingSpace(true)
            }
        } else {
            suggestion.insert(" \{")afterToken(lastToken)andTrailingSpace(true)
        }
        errormessages.syntaxError("a method must have a '\{' after the name.")atPosition(
            lastToken.line, lastToken.column + lastToken.size)withSuggestion(suggestion)
    } else {
        methNode.hasBody := false
    }
    methNode.body := values
    if (false != anns) then { methNode.annotations.addAll(anns) }
    if (methNode.hasBody) then {
        def abst = methNode.isAbstract
        if ( abst || methNode.isRequired ) then {
            def which = if (abst) then { "an abstract" } else { "a required" }
            errormessages.syntaxError "{which} method must not have a method body"
                  atRange(lBraceSym.line, lBraceSym.column, lastToken.line, lastToken.column)
        }
    }
    values := originalValues
    util.setline(btok.line)
    values.push(methNode)
    reconcileComments
}

method separator {
    pushComments
    if (sym.isSeparator) then {
        skipSeparators
    } elseif { sym.isEof || sym.isRBrace } then {
        // do nothing
    } else {
        errormessages.syntaxError "statements must be separated by newlines (or semicolons)"
                    atPosition(lastToken.line, lastToken.column + lastToken.size)
    }
}

method methodDecRest(tm) {
    // Process the remainder of a method header. These follow
    // mostly the same rules as requests
    //
    // tm is a methodNode.  This method modifies tm.params in place.

    var signatureParts := tm.signatureParts
    while {sym.isIdentifier} do {
        pushIdentifier
        def part = ast.signaturePart(values.pop.nameString) params (list [])
        if (sym.isLParen.not) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert "(" afterToken(lastToken)
            errormessages.syntaxError("the declaration of a method with multiple " ++
                  "parameter lists must have parentheses around each parameter list.")
                  atPosition(sym.line, sym.column)withSuggestion(suggestion)
        }
        next
        var comma := false
        while {
            sym.isIdentifier || { sym.isOp && (sym.value == "*") }
        } do {
            if (sym.isOp) then {
                next
                errormessages.syntaxError("variable length parameter lists (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} a Collection.")
                    atPosition(lastToken.line, lastToken.column)
            }
            pushIdentifier
            def nxt = values.pop
            nxt.isBindingOccurrence := true
            nxt.dtype := optionalTypeAnnotation
            part.params.push(nxt)
            if (sym.isComma) then {
                comma := sym
                next
            }
        }
        if (sym.isRParen.not) then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert(")")afterToken(lastToken)
            errormessages.syntaxError "a parameter list beginning with a '(' must end with a ')'"
                  atPosition(lastToken.line, lastToken.column + lastToken.size)
                  withSuggestion(suggestion)
        }
        next
        signatureParts.push(part)
    }
}

method optionalTypeAnnotation {
    // Accept a type annotation if present.
    // Returns the type, or false if there is no annotation
    if (sym.isColon) then {
        next
        if (successfulParse { typeexpression }) then {
            values.pop
        } else {
            checkBadInterfaceLiteral
            def suggestions = list [ ]
            var suggestion := errormessages.suggestion.new
            suggestion.insert(" «type name»")afterToken(lastToken)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.deleteToken(lastToken)leading(true)trailing(false)
            suggestions.push(suggestion)
            errormessages.syntaxError("a type expression must follow ':'.")atPosition(
                sym.line, sym.column)withSuggestions(suggestions)
        }
    } else {
        false
    }
}

method methodHeader {
    // Accept a method header, including the -> and result type, and
    // return an ast.methodNode with an empty list for the method body
    if ((! acceptKeyword "prefix") && (sym.isIdentifier.not) && (sym.isOp.not)) then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert(" «method name»")afterToken(lastToken)
        errormessages.syntaxError("a method name must start with an identifier, or be an operator.")
            atPosition(lastToken.line, lastToken.column + lastToken.size + 1)
                withSuggestion(suggestion)
    }
    def startToken = sym
    def part = ast.signaturePart(startToken.value) params (list [])
    next
    def universals = list []
    def result = ast.methodDec( list [ part ], list [], false, universals)
    if ((startToken.value == "[") && {sym.isRSquare}) then {
        errormessages.syntaxError("methods named '[]' and '[]:=' are no longer part of Grace.")
            atRange(lastToken.line, lastToken.column, sym.column)
    }
    if (sym.isLGeneric) then { part.typeParams := typeparameters }
    if (sym.isAssignment) then {
        part.name := part.name ++ ":="
        next
    } elseif { sym.isOp  && (startToken.value == "prefix") } then {
        part.name := part.name ++ sym.value
        next
    }
    if (sym.isLParen) then {
        def lparen = sym
        next
        if (sym.isOp && (sym.value == "*")) then { errorNoVarArgs }
        if (sym.isKeyword) then { errorUnexpectedKeyword }
        if (sym.isIdentifier.not) then { errorMissingIdentifier }
        parameterList(part)
        if (sym.line == part.line) then {
            part.lineLength := sym.column - part.column
        }
        next
        if (sym.isIdentifier) then {
            // The presence of an identifier here means
            // a multi-part method name.
            methodDecRest(result)
        }
    }
    if (sym.isArrow) then {
        // parse the return type
        next
        if (unsuccessfulParse {typeexpression} ) then {
            errormessages.syntaxError("after an arrow, write the method's return " ++
                  "type. If you don't want to state the return type, omit the arrow.")
                  atRange(sym.line, sym.column, sym.endCol)
        }
        result.dtype := values.pop
    }
    if (acceptKeyword "forall") then {
        // parse universal declaration
        next
        if (sym.isIdentifier.not) then {
            errormessages.syntaxError "forall must be followed by one or more identifiers naming the universally-quantified types" atRange(sym.line, sym.column, sym.endCol)
        }
        universals.add(ast.universalDec(ast.identifier(sym.value, false)))
        next
        while {sym.isComma} do {
            next
            if (sym.isIdentifier.not) then {
                errormessages.syntaxError ("a comma in a list of universally-quantified types must be followed by the name of another type")
                    atRange (sym.line, sym.column, sym.endCol)
            }
            universals.add(ast.universalDec(ast.identifier(sym.value, false)))
            next
        }
    }
    result
}

method parameterList(part) {
    // Parse the parameter list, including optional type annotations.
    // Precondition: sym.isIdentifier

    while { sym.isIdentifier } do {
        pushIdentifier
        def id = values.pop
        id.isBindingOccurrence := true
        id.isParameter := true
        id.dtype := optionalTypeAnnotation
        part.params.push(id)
        if (sym.isComma) then {
            next
        } elseif { sym.isRParen.not } then {
            def suggestion = errormessages.suggestion.new
            suggestion.insert ")" afterToken(lastToken)
            errormessages.syntaxError("a parameter list beginning with a '(' must " ++
                    "end with a ')'.")
                    atPosition(lastToken.line, lastToken.column + lastToken.size)
                    withSuggestion(suggestion)
        }
    }
}

method errorNoVarArgs {
    next
    errormessages.syntaxError("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} a sequence.")
        atPosition(lastToken.line, lastToken.column)
}

method errorMissingIdentifier {
    errormessages.syntaxError("a parameter list beginning with a '(' must be followed by an identifer.")
                        atPosition(lastToken.line, lastToken.column + lastToken.size)
}

method errorUnexpectedKeyword {
    errormessages.syntaxError "'{sym.value}' is a reserved word, and cannot be used as an identifier."
                        atRange(sym)
}

method typeparameters {
    // precondition: sym.isLGeneric
    def openBracket = sym
    next
    def typeIds = list.empty
    def whereConditions = list.empty
    if {sym.isIdentifier.not} then {
        errormessages.syntaxError "a '⟦' must be followed by one or more identifiers naming the type parameters" atRange(sym.line, sym.column, sym.endCol)
    }
    pushIdentifier              // does next
    typeIds.add(values.pop.typeParameter)
    while {sym.isComma} do {
        next
        if { sym.isIdentifier.not } then {
            errormessages.syntaxError ("a comma in a list of type parameters must " ++
                  "be followed by the name of another type parameter")
                  atRange (sym.line, sym.column, sym.endCol)
        }
        pushIdentifier         // does next
        typeIds.push(values.pop.typeParameter)
    }
    if (acceptKeyword "where") then {
        next
        def conditionStart = sym
        if (unsuccessfulParse {expression(noBlocks)}) then {
            errormessages.syntaxError "`where` must be followed by a condition on one of the type parameters"
                  atRange(conditionStart.line, conditionStart.column, conditionStart.endCol)
        }
        whereConditions.add(checkWhereCondition)
        while {sym.isComma} do {
            next
            if (unsuccessfulParse {expression(noBlocks)}) then {
                errormessages.syntaxError "`where` must be followed by list of conditions on the type parameters"
                      atRange(sym.line, sym.column, sym.endCol)
            }
            whereConditions.add(checkWhereCondition)
        }
    }
    if (sym.isRGeneric.not) then {
        def suggestion = errormessages.suggestion.new
        suggestion.insert "⟧" afterToken (lastToken)
        errormessages.syntaxError "a list of type parameters starting with '⟦' must end with '⟧'"
              atRange(lastToken.line, lastToken.column, lastToken.endCol) withSuggestion (suggestion)
    }
    next
    ast.typeParameters(typeIds) whereClauses(whereConditions).setPositionFrom(openBracket)
}

def typeRelations = ["<:", "<*", ":>", "*>"]

method checkWhereCondition {
    // an expression is on the values stack.  Check that it is a valid where
    // condition, and if so, remove it from values and return it.
    def cond = values.pop
    if ((cond.kind ≠ "op") || { typeRelations.contains(cond.value).not }) then {
        errormessages.syntaxError("a where condition must be a relation using " ++
              "one of the operators {errormessages.readableStringFrom(typeRelations)}")
              atRange(cond)
    }
    cond
}

method doimport {
    // Accept an import statement, which has the form
    //      import ‹string› as ‹identifier›:‹type expression› is ‹annotation›
    if (acceptKeyword "import") then {
        def importSym = sym
        next
        if (sym.kind != "string") then {
            var suggestion := errormessages.suggestion.new
            var errorPos
            if ((sym.isIdentifier) && (sym.line == lastToken.line)) then {
                suggestion.replaceToken(sym)with("\"{sym.value}\"")
                errorPos := sym.column
            } else {
                suggestion.insert(" \"«module name»\"")afterToken(lastToken)
                errorPos := lastToken.column + lastToken.size + 1
            }
            errormessages.syntaxError("an import statement must have the name of the module to be imported (in quotes), 'as', and an identifier after 'import'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        pushString
        def p = values.pop
        if (p.value.endsWith ".grace") then {
            errormessages.syntaxError("the name of the imported module must not end with \".grace\"")
                atRange(p)
        }
        if (! acceptKeyword "as") then {
            var suggestion := errormessages.suggestion.new
            if ((sym.isIdentifier) && (sym.line == lastToken.line)) then {
                suggestion.insert(" as")afterToken(lastToken)
            } else {
                suggestion.insert(" as {p.value}")afterToken(lastToken)
            }
            errormessages.syntaxError("an import statement must have 'as', followed by an identifier, after the name of the module in quotes.")atPosition(
                lastToken.line, lastToken.column + lastToken.size + 1)withSuggestion(suggestion)
        }
        next
        if (sym.kind != "identifier") then {
            var suggestion := errormessages.suggestion.new
            var errorPos
            if ((sym.isString) && (sym.line == lastToken.line)) then {
                suggestion.replaceToken(sym)with("{sym.value}")
                errorPos := sym.column
            } else {
                suggestion.insert(" {p.value}")afterToken(lastToken)
                errorPos := lastToken.column + lastToken.size + 1
            }
            errormessages.syntaxError("an import statement must have an identifier after 'as'.")atPosition(
                lastToken.line, errorPos)withSuggestion(suggestion)
        }
        pushIdentifier
        def name = values.pop
        name.isBindingOccurrence := true
        def dtype = optionalTypeAnnotation
        def o = ast.importStatement(p.value, name, dtype).setPositionFrom(importSym)
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
        if (sym.isRBrace.not) then {
            if (unsuccessfulParse {expression(blocksOK)}) then {
                def suggestions = list [ ]
                var suggestion := errormessages.suggestion.new
                def nextTok = findNextValidToken ["rbrace", "separator"]
                if (nextTok == sym) then {
                    suggestion.insert(" «expression»")afterToken(lastToken)
                    suggestions.push(suggestion)
                    if (sym.isSeparator.not) then {
                        suggestion := errormessages.suggestion.new
                        suggestion.deleteToken(sym)leading(true)trailing(false)
                        suggestions.push(suggestion)
                    }
                } else {
                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(" «expression»")
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                    suggestions.push(suggestion)
                }
                errormessages.syntaxError ("a `return` statement must be followed " ++
                    "by an expression, or by the end of the block.")
                    atRange (retTok.line, retTok.column, sym.column)
                    withSuggestions (suggestions)
            }
            retval := values.pop
        } else {
            retval := ast.identifier("done", false).setStart(ast.noPosition)
            retval.end := ast.noPosition
        }
        util.setPosition(retTok.line, retTok.column)
        var o := ast.returnStatement(retval)
        values.push(o)
    }
}

method methodInInterface(toks) {
    tokens := toks
    next
    methodInInterface

    values.pop
}

method methodInInterface {
    // parses a method signature in an interface literal, and pushes the
    // resulting node, along with any comments, onto values
    values.push(methodSignature)
    reconcileComments
}

method methodSignature {
    // parses a method signature, and returns a methodSignature
    if (acceptKeyword "...") then {
        def result = ast.ellipsis
        next
        return result
    }
    def firstTok = sym
    def m = methodHeader
    ast.methodSignature(m.signatureParts, m.dtype, m.universalTypeDecls).
            setPositionFrom(firstTok)
}

method checkForSeparatorInInterface {
    if (sym.isSeparator) then {
        next
    } else {
        if (sym.isRBrace .not) then {
            if (lastToken.line == sym.line) then {
                def suggestion = errormessages.suggestion.new
                def newLine = util.lines.at(sym.line).substringFrom(1)to(lastToken.column - 1) ++ sym.value
                suggestion.addLine(sym.line + 0.1, newLine)
                suggestion.deleteToken(sym)leading(true)trailing(true)
                errormessages.syntaxError "methods and types in an interface literal must be on separate lines (or separated by semicolons)"
                    atPosition (sym.line, sym.column)
                    withSuggestion(suggestion)
            }
        }
    }
}

method interfaceLiteral {
    // parses an interface literal between braces, with
    // leading 'interface' keyword.
    def startToken = sym
    if (acceptKeyword "interface") then {
        next
        if (sym.isLBrace.not) then {
            def suggestion = errormessages.suggestion.new
            suggestion.replaceToken(sym) with("\{")
            errormessages.syntaxError "interface literals must open with a brace."
                atPosition(sym.line, sym.column) withSuggestion(suggestion)
            return
        }
        next
        def meths = list []
        def types = list []
        skipSeparators
        while { sym.isRBrace.not } do {
            if (acceptKeyword "type") then {
                typedec
                types.push(values.pop)
            } else {
                methodInInterface
                meths.push(values.pop)
            }
            checkForSeparatorInInterface
        }
        next
        util.setPosition(startToken.line, startToken.column)
        def t = ast.interfaceLiteral(meths, types)
        values.push(t)
    }
}

method typedec(toks) {
    // Parses the type declaration described by toks; returns the approriate parse tree

    // This method is used by xmodule to parse type declarations in the gct string
    if (toks.isEmpty) then {
        RequestError.raise "Empty tokenList in typedec(tokenList)"
        //treat this edge case later
    }
    tokens := toks
    next
    typedec
    values.pop
}

method typedec {
    // Accept a declaration: 'type <name> = <type expression>'
    if (acceptKeyword "type") then {
        def line = sym.line
        def pos = sym.column
        next
        if (sym.isIdentifier.not) then {
            var msg := "a type declaration must have a name after the 'type'"
            if (sym.isKeyword) then {
                msg := msg ++ "; '{sym.value}' is a reserved word"
                errormessages.syntaxError(msg) atRange(sym)
            } else {
                errormessages.syntaxError(msg) atPosition(line, pos + 1)
            }
        }
        pushIdentifier
        util.setPosition(line, pos)
        def nt = ast.typeDec(values.pop, false)
        if (sym.isLGeneric) then { nt.typeParams := typeparameters }
        nt.name.isBindingOccurrence := true
        def anns = doannotation
        if (sym.value ≠ "=") then {
            var suggestion := errormessages.suggestion.new
            def nextTok = findNextToken { t ->
                (t.isLBrace) || (t.isKeyword)
            }
            if ((false == nextTok) || {nextTok == sym}) then {
                suggestion.insert(" =")afterToken(lastToken)
            } else {
                suggestion.replaceTokenRange(sym, nextTok.prev)with("=")
            }
            errormessages.syntaxError "a type declaration must have an '=' after the type name"
                  atPosition(lastToken.line, lastToken.column + lastToken.size + 1)
                  withSuggestion(suggestion)
        }
        next
        if (sym.isLBrace) then {
            errormessages.syntaxError "an interface literal must start with the reserved word 'interface'"
                  atRange(sym.line, sym.column, sym.endCol)
        } elseif {acceptKeyword "type"} then {
            errormessages.syntaxError "an interface literal must start with 'interface', not 'type'"
                  atRange(sym.line, sym.column, sym.endCol)
        } elseif {unsuccessfulParse {typeexpression}} then {
            def suggestion = errormessages.suggestion.new
            errormessages.syntaxError "a type declaration must have a type expression after the '='"
                  atPosition(lastToken.line, lastToken.column + lastToken.size + 1)
                  withSuggestion(suggestion)
        }
        nt.value := values.pop
        if (false != anns) then {
            nt.annotations.addAll(anns)
        }
        values.push(nt)
        reconcileComments
    }
}

method startsStatement {
    if (sym.isKeyword.not) then { return false }
    if ("interface|self|outer|...".contains(sym.value)) then { return false }
    true
}

method statement {
    // Accept a statement.
    //
    // Here, a "statement" is more general than in the grammar: it means
    // anything that is legal at the top level, and inside object constructors,
    // including expressions.
    // A statement may also be a bind statement x := y, which creates a
    // bind AST node out of the expressions on either side (which at this point
    // can be any arbitrary expression).
    // When the parse tree is examined during identifierresolution, illegal
    // constructs (such as type and method declarations that are not inside objects)
    // will be flagged as errors.  This gives better error messages than "invalid
    // token", which is what would be generated here due to an unexpected `type`
    // or `method` keyword.

    statementToken := sym
    def btok = sym
    pushComments
    if (startsStatement) then {
        def symValue = sym.value
        if (symValue == "var") then {
            vardec
        } elseif { symValue == "def" } then {
            defdec
        } elseif { symValue == "import" } then {
            doimport
        } elseif { symValue == "dialect" } then {
            dodialect
        } elseif { symValue == "type" } then {
            typedec
        } elseif { symValue == "return" } then {
            doreturn
        } elseif { symValue == "object" } then {
            doobject
        } else {
            methodClassOrTrait
        }
    } else {
        if (successfulParse {expression(blocksOK)}) then {
            if (( values.last.isIdentifier || values.last.isMember ) && {sym.isAssignment}) then {
                var dest := values.pop
                if (dest.kind == "lbrace") then {
                    print "sym = {sym}, sym.line = {sym.line}"
                    ProgrammingError.raise "popped lbrace token while parsing statement"
                }
                next
                if (unsuccessfulParse {expression(blocksOK)}) then {
                    reportBadRhs
                }
                var val := values.pop
                util.setPosition(btok.line, btok.column)
                var o := ast.assignment(dest, val)
                values.push(o)
            }
        }
    }
    reconcileComments
    if (sym.isEof) then {
        return true
    }
}

method pushComments {
    // Push a comment onto the comments stack as a commentNode. If
    // there are consecutive comments following, deal with them all.
    // Adjacent comments extend the first; a break of a blank line
    // starts a new comment node.

    if ( sym.isComment.not ) then { return }
    util.setPosition(sym.line, sym.column)
    var o := ast.comment(sym.value)
    if ((lastToken.line == sym.line) && (lastToken.kind != "comment")) then {
        o.isPartialLine := true
    } elseif { lastToken.line < (sym.line - 1) } then {
        o.isPreceededByBlankLine := true
    }
    comments.push(o)
    while {
        nextToken
        sym.isComment
    } do {
        o := ast.comment(sym.value)
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
    // Finds comments associated with that node, removes them from comments
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
    def preComments = list.empty
    def postComments = list.empty

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
            atRange(sym.line, sym.column, sym.column)
            withSuggestion(sugg)
    }
}

method checkBadInterfaceLiteral {
    if (sym.isLBrace) then {
        def sugg = errormessages.suggestion.new
        sugg.insert "interface " beforeToken(sym)
        errormessages.syntaxError "interface literals must start with the reserved word 'interface'"
            atRange(sym.line, sym.column, sym.column)
            withSuggestion(sugg)
    }
}

method checkUnexpectedTokenAfterStatement {
    if (sym.line == lastToken.line) then {
        if ((sym.isOp) && (sym.value == "=") && (lastToken.isIdentifier)) then {
            def sugg = errormessages.suggestion.new
            def suggestions = list [ ]
            sugg.replaceToken(sym)leading(false)trailing(false)with(":=")
            suggestions.push(sugg)
            def sugg2 = errormessages.suggestion.new
            sugg2.replaceToken(sym)leading(false)trailing(false)with "=="
            suggestions.push(sugg2)
            errormessages.syntaxError("assignment uses ':=', not '='.")
                atRange(sym.line, sym.column, sym.column)
                withSuggestions (suggestions)
        }
        if (sym.kind != "rbrace") then {
            def suggestions = list [ ]
            var suggestion
            if ( (values.size > 0) && { (values.last.isIdentifier) || { values.last.isMember }} && { sym.isIdentifier } ) then {
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
                if (values.last.isIdentifier) then {
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceToken(sym)leading(false)trailing(false)with("\"{sym.value}\"")
                    suggestions.push(suggestion)
                }
            }
            def nextTok = findNextValidToken ["rbrace"]
            if (nextTok == sym) then {
                suggestion := errormessages.suggestion.new
                suggestion.addLine(lastToken.line, util.lines.at(lastToken.line).substringFrom(1)to(lastToken.endCol))
                def newLine = util.lines.at(sym.line).substringFrom(sym.column)to(util.lines.at(sym.line).size)
                suggestion.addLine(lastToken.line + 0.1, newLine)
                suggestions.push(suggestion)
            } else {
                suggestion := errormessages.suggestion.new
                suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError(
                "multiple statements must be separated by a newline or a semicolon. " ++
                  "This error is often caused by unbalanced parentheses, " ++
                    "or by omitting a part of a method name.\nsym = {sym}")
                      atPosition (sym.line, sym.column) withSuggestions (suggestions)
        }
    }
}


method parse(toks) {
    // Parses toks, a linked list of tokens, and returns an AST moduleNode
    // corresponding to it.

    util.log_verbose "parsing."
    values.clear        //  <thismodule>.parse(_) can be requested multiple times
    moduleObject := ast.module(values) named (util.modname)

    if (toks.size == 0) then {
        return moduleObject
    }
    tokens := toks
    while { next ; sym.isSeparator } do { }

    while {sym.isEof.not} do {
        def oldlength = tokens.size
        pushComments
        methodClassOrTrait
        pushComments
        if (successfulParse { inheritOrUse }) then {
            def parentNode = values.pop
            if (parentNode.isUse) then {
                moduleObject.usedTraits.add(parentNode)
            } elseif { false != moduleObject.superclass } then {
                errormessages.syntaxError("at most one 'inherit' statement " ++
                    "is permitted in a module")
                    atRange(parentNode.line, parentNode.column,
                    parentNode.column + 6)
            } elseif { moduleObject.usedTraits.isEmpty } then {
                moduleObject.superclass := parentNode
            } else {
                errormessages.syntaxError("'inherit' must come " ++
                    "before 'use' in a module.")
                    atRange(parentNode.line, parentNode.column,
                    parentNode.column + 6)
            }
        }
        pushComments
        statement
        pushComments
        if (tokens.size == oldlength) then {
            def suggestion = errormessages.suggestion.new
            suggestion.deleteToken(sym)
            errormessages.syntaxError ("invalid statement. This is often " ++
                "caused by an extra '}', ')', or ']'.")
                atRange (sym.line, sym.column, sym.endCol)
                withSuggestion (suggestion)
        }
        separator
    }
    def result = moduleObject
    tokens := object {}
    moduleObject := {}
    sym := object {}
    lastToken := object {}
    statementToken := object {}
    comments.clear
    result
}
