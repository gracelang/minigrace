#pragma ExtendedLineups
import "util" as util
import "unicode" as unicode
import "errormessages" as errormessages
import "stringMap" as map

def keywords = map.new
keywords.put("alias", true)
keywords.put("class", true)
keywords.put("def", true)
keywords.put("dialect", true)
keywords.put("exclude", true)
keywords.put("factory", true)
keywords.put("import", true)
keywords.put("inherits", true)
keywords.put("inherit", true)
keywords.put("is", true)
keywords.put("method", true)
keywords.put("object", true)
keywords.put("return", true)
keywords.put("super", true)
keywords.put("trait", true)
keywords.put("type", true)
keywords.put("use", true)
keywords.put("var", true)

def operatorChars = "-&|:$#\\%^@?*/+!~"
method isOperatorChar(c, ordval) {
    if (operatorChars.contains(c)) then { return true }
    if (unicode.isSymbolMathematical(ordval)) then { return true }
    if (unicode.inCategory(c, "So")) then { return true }
    return false
}

def spaceChars = " \u00A0"    // ASCII space + non-breaking space
def tab = "\t"
method isBadSeparator(ch) {
    if (spaceChars.contains(ch)) then { return false }
    if (tab == ch) then { return true }
    return unicode.inCategory(ch, "Z")
}

def nl_cr = "\n\r"      // nl and cr
method isBadControl(ch) {
    if (nl_cr.contains(ch)) then { return false }
    return unicode.inCategory(ch, "C")
}

def selfModes = "(),\{}[];⟦⟧"
method isSelfMode(ch) { selfModes.contains(ch) }

def brackets = "()\{}[]⟦⟧"
method isBracket(ch) { brackets.contains(ch) }

def alphaNums = "_'0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
method isIdentifierChar(ch) {
    if (alphaNums.contains(ch)) then { return true }
    if (unicode.inCategory(ch, "L")) then { return true }
    if (unicode.inCategory(ch, "N")) then { return true }
    return false
}
def digits = "0123456789"
method isDigit(ch) { digits.contains(ch) }

def asciiLetters = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
method isLetter(ch) {
    if (asciiLetters.contains(ch)) then { return true }
    if (unicode.inCategory(ch, "L")) then { return true }
    return false
}

method padl(s, l, w) {
    if (s.size >= l) then {
        return s
    }
    var s' := s
    while {s'.size < l} do {
        s' := w ++ s'
    }
    return s'
}

class new {
    var tokens
    var lineNumber := 1
    var linePosition := 0
    var startPosition := 1
    var indentLevel := 0
    var startLine := 1
    var stringStart
    var unichars := 0
    class token {
        def line is public = lineNumber
        def indent is public = indentLevel
        def linePos is public = startPosition

        var next is public := false
        var prev is public := false

        method ==(other) {
            if (other == false) then {
                false
            } else {
                (other.line == line) && (other.linePos == linePos)
            }
        }
        method asString { "({line}:{linePos}){self.kind} {self.value}" }
    }


    class identifierToken(s) {
        inherit token
        def kind is public = "identifier"
        def value is public = s
        def size is public = s.size
    }
    class stringToken(s) {
        inherit token
        def kind is public = "string"
        def value is public = s
        def size is public = linePosition - startPosition + 1
    }
    class multiLineStringToken(s) {
        inherit token
        def kind is public = "string"
        def value is public = s
        def size is public = s.size + 2
        def line' = startLine
        def linePos' = stringStart
        method line is override { line' }
        method linePos is override { linePos' }
    }
    class commentToken(s) {
        inherit token
        def kind is public = "comment"
        def value is public = s
        def size is public = s.size + 2
    }
    class lBraceToken {
        inherit token
        def kind is public = "lbrace"
        def value is public = "\{"
        def size is public = 1
    }
    class rBraceToken {
        inherit token
        def kind is public = "rbrace"
        def value is public = "}"
        def size is public = 1
    }
    class lParenToken {
        inherit token
        def kind is public = "lparen"
        def value is public = "("
        def size is public = 1
    }
    class rParenToken {
        inherit token
        def kind is public = "rparen"
        def value is public = ")"
        def size is public = 1
    }
    class lSquareToken {
        inherit token
        def kind is public = "lsquare"
        def value is public = "["
        def size is public = 1
    }
    class rSquareToken {
        inherit token
        def kind is public = "rsquare"
        def value is public = "]"
        def size is public = 1
    }
    class commaToken {
        inherit token
        def kind is public = "comma"
        def value is public = ","
        def size is public = 1
    }
    class colonToken {
        inherit token
        def kind is public = "colon"
        def value is public = ":"
        def size is public = 1
    }
    class dotToken {
        inherit token
        def kind is public = "dot"
        def value is public = "."
        def size is public = 1
    }
    class numToken(v, b) {
        inherit token
        def kind is public = "num"
        def value is public = v
        def base is public = b
        def size is public = linePosition - startPosition
    }
    class keywordToken(v) {
        inherit token
        def kind is public = "keyword"
        def value is public = v
        def size is public = v.size
    }
    class opToken(v) {
        inherit token
        def kind is public = "op"
        def value is public = v
        def size is public = v.size
    }
    class arrowToken {
        inherit token
        def kind is public = "arrow"
        def value is public = "→"
        def size is public = 1
    }
    class bindToken {
        inherit token
        def kind is public = "bind"
        def value is public = ":="
        def size is public = 2
    }
    class semicolonToken {
        inherit token
        def kind is public = "semicolon"
        def value is public = ";"
        def size is public = 1
    }
    class lGenericToken {
        inherit token
        def kind is public = "lgeneric"
        def value is public = "⟦"
        def size is public = 1
    }
    class rGenericToken {
        inherit token
        def kind is public = "rgeneric"
        def value is public = "⟧"
        def size is public = 1
    }
    class eofToken {
        inherit token
        def kind is public = "eof"
        def value is public = ""
        def size is public = 0
    }

    var state
    var accum := ""

    var inStr := false
    var escaped := false
    var codepoint := 0
    var interpdepth := 0
    var interpString := false

    method advanceTo(s) { state := s }
    method emit(t) {
        tokens.push(t)
        accum := ""
    }
    method store(c) { accum := accum ++ c }

    def startState = object {
        method consume(c){
            if (c == "#") then {
                advanceTo(pragmaPrefixState)
            } else {
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }
    state := startState

    def pragmaPrefixState = object {
        method consume(c){
            checkSeparator(c)
            if (c == "\n") then {
                errormessages.syntaxError "Incomplete pragma definition "
                    atRange(lineNumber, startPosition, linePosition)
            } elseif{isSpaceChar(c)} then {
                if (accum == "pragma") then {
                    accum := ""
                    advanceTo(pragmaBodyState)
                } else {
                    errormessages.syntaxError "Pragmas must start with #pragma "
                        atRange(lineNumber, startPosition, linePosition)
                }
            }
            else {
                store(c)
            }
        }
    }

    def pragmaBodyState = object {
        method consume(c){
            checkSeparator(c)
            if ((c == "\n") || isSpaceChar(c)) then {
                //a complete pragma has been found
                util.processExtension(accum)
                accum := ""
                advanceTo(pragmaTrailingWhitespaceState)
                state.consume(c)
            } else {
                store(c)
            }
        }
    }

    def pragmaTrailingWhitespaceState = object {
        method consume(c) {
            checkSeparator(c)
            if (c == "\n") then {
                advanceTo(startState)
            } elseif {!isSpaceChar(c)} then {
                errormessages.syntaxError "Pragmas must be a single word "
                    atRange(lineNumber, startPosition, linePosition)
            }
        }
    }

    def defaultState = object {
        method consume(c) {
            def ordval = c.ord
            checkSeparator(c)
            startPosition := linePosition
            startLine := lineNumber
            if (spaceChars.contains(c)) then {
                //do nothing
            } elseif {c == "\""} then {
                inStr := true
                stringStart := linePosition
                advanceTo(quotedStringState)
            } elseif {c == "‹"} then {
                inStr := true
                stringStart := linePosition
                advanceTo(extendedStringState)
            } elseif {isDigit(c)} then {
                if ((tokens.size > 0) && {tokens.last.kind == "num"}) then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.deleteRange(tokens.last.linePos+tokens.last.size, linePosition - 1)onLine(lineNumber)
                    errormessages.syntaxError("Consecutive numbers are not allowed.")
                        atRange(lineNumber, tokens.last.linePos, linePosition)withSuggestion(suggestion)
                }
                startPosition := linePosition
                advanceTo(numberStartState)
                state.consume(c)
            } elseif {isIdentifierChar(c)} then {
                advanceTo(identifierState)
                state.consume(c)
            } elseif {c == "/"} then {
                advanceTo(slashState)
                state.consume(c)
            } elseif {c == "."} then {
                advanceTo(dotState)
                state.consume(c)
            } elseif {(c == "<") || isOperatorChar(c, ordval)} then {
                advanceTo(operatorState)
                state.consume(c)
            } elseif {c == ","} then {
                emit(commaToken)
            } elseif {c == "\{"} then {
                emit(lBraceToken)
            } elseif {c == "}"} then {
                advanceTo(rBraceState)
                state.consume(c)
            } elseif {c == "("} then {
                emit(lParenToken)
            } elseif {c == ")"} then {
                if ((tokens.size > 0) && {tokens.last.kind == "lparen"}) then {
                    errormessages.syntaxError("empty parenthesis are not allowed. " ++
                        "Remove them, or put something between them.")
                        atRange(lineNumber, tokens.last.linePos, linePosition)
                }
                emit(rParenToken)
            } elseif {c == "["} then {
                emit(lSquareToken)
            } elseif {c == "]"} then {
                emit(rSquareToken)
            } elseif {c == "⟦"} then {
                emit(lGenericToken)
            } elseif {c == "⟧"} then {
                emit(rGenericToken)
            } elseif {c == ";"} then {
                emit(semicolonToken)
            } elseif {c == "\n"} then {
                indentLevel := 0
                advanceTo(indentationState)
            } else {
                if((unicode.isSeparator(ordval).not) &&
                        (unicode.isControl(ordval).not) &&
                        (ordval != 10) &&
                        (ordval != 13) &&
                        (ordval != 32)) then {
                    errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                        ++ "is not a valid character; use spaces instead.")atRange(
                        lineNumber, linePosition, linePosition)
                }
            }
        }
    }

    def rBraceState = object {
        method consume (c){
            if (interpdepth > 0) then {
                if (tokens.last.kind == "lparen") then {
                    def suggestion1 = errormessages.suggestion.new
                    suggestion1.deleteRange(tokens.last.linePos, linePosition)
                                    onLine(lineNumber)
                    def suggestion2 = errormessages.suggestion.new
                    suggestion2.insert "«expression»"
                                    atPosition (tokens.last.linePos+1)
                                    onLine(lineNumber)
                    errormessages.syntaxError "a string interpolation cannot be empty."
                          atRange (lineNumber, tokens.last.linePos, linePosition)
                          withSuggestions [suggestion1, suggestion2]
                }
                emit (rParenToken)
                emit (opToken("++"))
                interpdepth := interpdepth - 1
                inStr := true
                advanceTo(quotedStringState)
            }
            else {
                emit (rBraceToken)
                advanceTo (defaultState)
            }
        }
    }

    def slashState = object {
        method consume (c) {
            checkSeparator(c)
            if (c == "/") then {
                store(c)
                if (accum == "//") then {
                    advanceTo(commentSpaceState)
                }
            } elseif {accum == "/"} then {
                advanceTo(operatorState)
                state.consume(c)
            } else {
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }

    def dotState = object {
        method consume (c) {
            checkSeparator(c)
            if (c == ".") then {
                store(c)
                if (accum == "...") then {
                    advanceTo(identifierState)
                }
            } elseif {accum == ".."} then {
                advanceTo(operatorState)
                state.consume(c)
            } elseif {isDigit(c)} then {
                accum := "0."
                //should an error be thrown instead?
                advanceTo(numberFractionState)
                state.consume(c)
            } else {
                emit(dotToken)
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }

    def identifierState = object {
        method consume (c) {
            checkSeparator(c)
            if (!isIdentifierChar(c)) then {
                if (keywords.contains(accum)) then {
                    if (accum == "super") then {
                        errormessages.syntaxError(
                            "`super` is no longer part of Grace.\n" ++
                              "Consider using an `alias` clause on the inherit statement.")
                              atRange(lineNumber, startPosition, linePosition-1)
                    } elseif {accum == "inherits"} then {
                        errormessages.syntaxError(
                            "The reserved word `inherits` has been replaced by `inherit`.")
                              atRange(lineNumber, startPosition, linePosition-1)
                    }
                    emit(keywordToken(accum))
                } else {
                    emit(identifierToken(accum))
                }
                advanceTo(defaultState)
                state.consume(c)
            } else {
                store(c)
            }
        }
    }
    def quotedStringState = object {
        method consume (c) {

            checkSeparatorString (c)
            if (c == "\"") then {
                emit(stringToken(accum))
                if (interpString && (interpdepth == 0)) then {
                    emit(rParenToken)
                    interpString := false
                }
                advanceTo(defaultState)
                inStr := false
            } elseif {c == "\n"} then {
                newLineError
            } elseif {c == "\{"} then {
                def strToken = stringToken(accum)
                startPosition := linePosition
                if (!interpString) then {
                    emit(lParenToken)
                    interpString := true
                }
                emit(strToken)
                emit(opToken("++"))
                emit(lParenToken)
                advanceTo(defaultState)
                inStr := false
                interpdepth := interpdepth + 1
            } elseif {c == "\\"} then {
                advanceTo(quotedStringEscapedState)
            } else {
                store(c)
            }
        }
    }
    def unicodeState = object {
        method consume(c){
            unichars := unichars - 1
            codepoint := codepoint * 16
            codepoint := codepoint + hexdecchar(c)
            //print "adding unicode char {c}"
            if (unichars == 0) then {
                // At the end of the sequence construct
                // the character in the unicode library.
                store(unicode.create(codepoint))
                advanceTo(quotedStringState)
            }
        }
    }
    def quotedStringEscapedState = object {
        method consume (c) {
            checkSeparatorString (c)
            advanceTo(quotedStringState)
            if (c == "\n") then {
               newLineError
            } elseif { c == "n" } then {
                // Newline escape
                accum := accum ++ "\u000a"
            } elseif { c == "u" } then {
                // Beginning of a four-digit Unicode escape
                // (for a BMP codepoint).
                unichars := 4
                codepoint := 0
                advanceTo(unicodeState)
            } elseif { c == "U" } then {
                // Beginning of a six-digit Unicode escape
                // (for a general codepoint).
                unichars := 6
                codepoint := 0
                advanceTo(unicodeState)
            } elseif { c == "t" } then {
                // Tab escape
                accum := accum ++ "\u0009"
            } elseif { c == "r" } then {
                // Carriage return escape
                accum := accum ++ "\u000d"
            } elseif { c == "b" } then {
                // Backspace escape
                accum := accum ++ "\u0008"
            } elseif { c == "l" } then {
                // LINE SEPARATOR escape
                accum := accum ++ "\u2028"
            } elseif { c == "f" } then {
                // Form feed/page down escape
                accum := accum ++ "\u000c"
            } elseif { c == "e" } then {
                // Escape escape
                accum := accum ++ "\u001b"
            } elseif { c == "_" } then {
                // non-breaking space
                accum := accum ++ "\u00a0"
            } else {
                // For any other character preceded by \,
                // insert it literally.
                store(c)
            }
        }
    }

    def extendedStringState = object {
        method consume (c) {

            if (c == "›") then {
                emit(multiLineStringToken(accum))
                inStr := false
                advanceTo(defaultState)
            }
            else {
                store(c)
            }
        }
    }

    var tokenBase is writable
    var mantissa is writable
    def numberStartState = object {
        method consume (c) {
            checkSeparator (c)
            if (isDigit(c)) then {
                store(c)
            } elseif { c == "x" } then {
                tokenBase := accum.asNumber
                if (tokenBase == 0) then {
                    tokenBase := 16
                }
                accum := ""
                advanceTo(numberBaseState)
            } elseif {(c == "e") || (c == "E")} then {
                mantissa := accum.asNumber
                accum := ""
                advanceTo(numberExponentSignState)
            } elseif { isLetter(c) } then {
                def suggestion = errormessages.suggestion.new
                suggestion.insert(".")atPosition(linePosition)onLine(lineNumber)
                errormessages.syntaxError("'{c}' is not a valid digit in base 10. Valid digits are 0..9.")atRange(
                    lineNumber, startPosition, linePosition)withSuggestion(suggestion)
            } elseif { c == "." } then {
                advanceTo(numberDotState)
            } else {
                emit(numToken(accum, 10))
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }
    def numberBaseState = object {
        method consume (c) {
            checkSeparator(c)
            if (isDigit(c) || isLetter(c)) then {
                store(c)
            } elseif {(c == ".") && (tokenBase == 10)} then {
                advanceTo(numberDotState)
            } else {
                emit(numToken(fromBase(accum, tokenBase).asString, tokenBase))
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }


    def numberDotState = object {
        method consume (c) {
            if (isDigit(c)) then {
                store(".")
                advanceTo(numberFractionState)
                state.consume(c)
            } elseif { spaceChars.contains(c) } then {
                //alternatively, throw an error here
                emit(numToken(accum, 10))
                advanceTo(defaultState)
                state.consume(c)
            } else {
                emit(numToken(accum, 10))
                accum := "."
                advanceTo(dotState)
                state.consume(c)
            }
        }
    }
    def numberFractionState = object {
        method consume (c) {
            checkSeparator(c)
            if (isDigit(c)) then {
                store(c)
            } elseif {(c == "e") || (c == "E")} then {
                mantissa := accum.asNumber
                accum := ""
                advanceTo(numberExponentSignState)
            } elseif {isLetter(c)} then {
                errormessages.syntaxError("the fractional part of a number must be in base 10.")atRange(
                    lineNumber, startPosition, linePosition)
            } else {
                emit(numToken(accum, 10))
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }
    def numberExponentSignState = object {
        method consume (c) {
            checkSeparator(c)
            if (isDigit(c) || (c == "-")) then {
                store(c)
                advanceTo(numberExponentState)
            } elseif {isLetter(c)} then {
                errormessages.syntaxError("{c} is not an allowed base-10 exponent character")atRange(
                    lineNumber, startPosition, linePosition)
            } else {
                errormessages.syntaxError("exponents must have at least one digit")atRange(
                    lineNumber, startPosition, linePosition)
            }
        }
    }
    def numberExponentState = object {
        method consume (c) {
            checkSeparator(c)
            if (isDigit(c)) then {
                store(c)
            } elseif {isLetter(c)} then {
                errormessages.syntaxError("{c} is not an allowed base-10 exponent character")atRange(
                    lineNumber, startPosition, linePosition)
            } else {
                if (accum == "-") then {
                    errormessages.syntaxError("exponents must have at least one digit")atRange(
                        lineNumber, startPosition, linePosition)
                }
                def exponent = accum.asNumber
                var absExp := exponent
                if (exponent < 0) then {
                    absExp := -exponent
                }
                var absMultiplier := 1
                repeat (absExp) times {
                    absMultiplier := absMultiplier * 10
                }
                if (exponent >= 0) then {
                    emit (numToken((mantissa * absMultiplier).asString, 10))
                } else {
                    emit (numToken((mantissa / absMultiplier).asString, 10))
                }
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }

    def operatorState = object {
        method consume (c) {
            checkSeparator (c)
            if (isOperatorChar(c, c.ord)) then {
                store(c)
            } else {
                if (accum == "→") then {
                    emit(arrowToken)
                } elseif { accum == ":=" } then {
                    emit(bindToken)
                } elseif { accum == ":" } then {
                    emit(colonToken)
                } else {
                    emit(opToken(accum))
                }
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }

    def indentationState = object {
        method consume (c) {
            if (spaceChars.contains(c)) then {
                indentLevel := linePosition
            } else {
                advanceTo(defaultState)
                state.consume(c)
            }
        }
    }
    def commentSpaceState = object {
        method consume (c) {
            if (!spaceChars.contains(c)) then {
                accum := ""
                advanceTo(commentState)
                state.consume(c)
            }
        }
    }
    def commentState = object {
        method consume (c) {
            if (c == "\n") then {
                emit (commentToken(accum))
                indentLevel := 0
                advanceTo(indentationState)
            } else {
                store(c)
            }
        }
    }

    method newLineError {
        if (interpdepth > 0) then {
            // Find closest {.
            var line := lineNumber
            var i := util.lines.at(line).size
            while { util.lines.at(line).at(i) != "\{" } do {
                i := i - 1
                if(i == 0) then {
                    lineNumber := line - 1
                    i := util.lines.at(line).size
                }
            }
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.insert("\\")atPosition(i)onLine(line)
            suggestions.push(suggestion)
            if((line == lineNumber) && (i == (linePosition - 2))) then {
                errormessages.syntaxError("for a '\{' character in a string use '\\\{'.")atPosition(
                    line, i)withSuggestions(suggestions)
            } else {
                suggestion := errormessages.suggestion.new
                suggestion.insert("}")atPosition(linePosition - accum.size - 1)onLine(lineNumber)
                suggestions.push(suggestion)
                errormessages.syntaxError("a string interpolation must end with a '}'. For a '\{' character in a string use '\\\{'.")atPosition(
                    lineNumber, linePosition - accum.size - 1)withSuggestions(suggestions)
            }
        } else {
            def errorLine = util.lines.at(lineNumber)
            def nextLine = if(util.lines.size >= (lineNumber + 1)) then {
                util.lines.at(lineNumber + 1)
            } else {
                ""
            }
            // Count the number of literal quotes in the next line.
            var i := 1
            var count := 0
            while { i <= nextLine.size } do {
                if(nextLine.at(i) == "\"") then { count := count + 1 }
                elseif { nextLine.at(i) == "\\" } then { i := i + 1 }
                i := i + 1
            }
            if ((count % 2) == 1) then {
                def suggestions = []
                var suggestion := errormessages.suggestion.new
                suggestion.addLine(lineNumber, errorLine ++ nextLine)
                suggestion.addLine(lineNumber + 1, "")
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.addLine(lineNumber, errorLine ++ "\"")
                suggestion.addLine(lineNumber + 1, "    ++ \"" ++ nextLine)
                suggestions.push(suggestion)
                suggestion := errormessages.suggestion.new
                suggestion.addLine(lineNumber, errorLine ++ "\\n" ++ nextLine)
                suggestion.addLine(lineNumber + 1, "")
                suggestions.push(suggestion)
                errormessages.syntaxError("a string must be terminated by a \" before the end of the line. To insert a newline in a string, use '\\n'. To split a string over multiple lines, use '++' to join strings together.")
                    atRange(lineNumber, linePosition, linePosition)
                    withSuggestions(suggestions)
            } else {
                def suggestion = errormessages.suggestion.new
                suggestion.addLine(lineNumber, errorLine ++ "\"")
                errormessages.syntaxError("a string must be terminated " ++
                    "by a \" before the end of the line.")
                    atPosition(lineNumber, linePosition)
                    withSuggestion(suggestion)
            }
        }
    }

    method isSpaceChar(c){
        spaceChars.contains(c)
    }
    method checkSeparatorString (c) {
        def ordval = c.ord
        if (isBadSeparator(c)) then {
            // Character is whitespace, but not an ASCII space or
            // Unicode NO-BREAK SPACE.  For example, a tab

            def suggestion = errormessages.suggestion.new
            suggestion.replaceChar(linePosition)with(" ")onLine(lineNumber)
            if (ordval == 9) then {
                suggestion.replaceRange(linePosition, linePosition)
                    with("\\t")
                    onLine(lineNumber)
                errormessages.syntaxError("tabs cannot be "
                    ++ "written in the source code; "
                    ++ "use the string escape \\t instead")
                    atRange(lineNumber, linePosition, linePosition)
                    withSuggestion(suggestion)
                errormessages.syntaxError("tabs are not allowed; use spaces instead.")atRange(lineNumber,
                    linePosition, linePosition)withSuggestion(suggestion)
            } else {
                suggestion.replaceRange(linePosition, linePosition)
                    with("\\u{padl(ordval.inBase 16, 4, "0")}")
                    onLine(lineNumber)
                errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                    ++ "is not a valid whitespace character"
                    ++ " and cannot be "
                    ++ "written in the source code; "
                    ++ "use the Unicode escape \\u"
                    ++ padl(ordval.inBase 16, 4, "0")
                    ++ " instead")
                    atRange(lineNumber, linePosition, linePosition)
                    withSuggestion(suggestion)
                errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                    ++ "is not a valid whitespace character; use spaces instead.")atRange(lineNumber,
                    linePosition, linePosition)withSuggestion(suggestion)
            }
        } elseif {isBadControl(c)} then {
            // Character is a control character other than
            // carriage return or line feed.
            def suggestion = errormessages.suggestion.new
            suggestion.replaceRange(linePosition, linePosition)
                with("\\u{padl(ordval.inBase 16, 4, "0")}")
                onLine(lineNumber)
            errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                ++ "is a control character and cannot be "
                ++ "written in the source code; "
                ++ "use the Unicode escape \\u"
                ++ padl(ordval.inBase 16, 4, "0")
                ++ " instead")
                atRange(lineNumber, linePosition, linePosition)
                withSuggestion(suggestion)
            suggestion.deleteChar(linePosition)onLine(lineNumber)
            errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                ++ "is a control character and cannot be written in the source code; consider using spaces instead.")atRange(lineNumber,
                linePosition, linePosition)withSuggestion(suggestion)
        }
    }

    method checkSeparator (c){
        def ordval = c.ord
        if (isBadSeparator(c)) then {
            // Character is whitespace, but not an ASCII space or
            // Unicode NO-BREAK SPACE.  For example, a tab

            def suggestion = errormessages.suggestion.new
            suggestion.replaceChar(linePosition)with(" ")onLine(lineNumber)
            if (ordval == 9) then {
                errormessages.syntaxError("tabs are not allowed; use spaces instead.")atRange(lineNumber,
                    linePosition, linePosition)withSuggestion(suggestion)
            } else {
                errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                    ++ "is not a valid whitespace character; use spaces instead.")atRange(lineNumber,
                    linePosition, linePosition)withSuggestion(suggestion)
            }
        } elseif {isBadControl(c)} then {
            // Character is a control character other than
            // carriage return or line feed.
            def suggestion = errormessages.suggestion.new
            suggestion.deleteChar(linePosition)onLine(lineNumber)
            errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                ++ "is a control character and cannot be written in the source code; consider using spaces instead.")atRange(lineNumber,
                linePosition, linePosition)withSuggestion(suggestion)
        }
    }

    method fromBase(str, base) {
        var val := 0
        var i := 0
        for (str) do {c->
            def n = c.ord
            val := val * base
            var inc := 0
            if ((n >= 48) && (n <= 57)) then {          // 48 = '0', 57 = '9'
                inc := n - 48 // '0'
            } elseif {(n >= 65) && (n <= 90)} then {    // 65 = 'A', 90 = 'Z'
                inc := n - 55 // 'A' - 10
            } else {
                inc := n - 87 // 'a' - 10
            }
            if (inc >= base) then {
                if((str.first == "0") && (inc < 16)) then {
                    def suggestion = errormessages.suggestion.new
                    suggestion.insert("x")atPosition(linePosition - str.size + 1)onLine(lineNumber)
                    errormessages.syntaxError("a number in base 16 must start with '0x'.")atPosition(
                        lineNumber, linePosition - str.size + 1)withSuggestion(suggestion)
                } else {
                    def suggestion = errormessages.suggestion.new
                    if(str.size == 1) then {
                        suggestion.deleteRange(linePosition - str.size - 1, linePosition - 1)onLine(lineNumber)
                    } else {
                        suggestion.deleteChar(linePosition - str.size + i)onLine(lineNumber)
                    }
                    def validDigits = if(base <= 10) then {
                        "'0' to '{base - 1}'"
                    } else {
                        "'0' to '9', 'a' to '{unicode.create(87 + base)}'"
                    }
                    errormessages.syntaxError("'{c}' is not a valid digit in base {base}. Valid digits are {validDigits}.")atRange(
                        lineNumber, linePosition - str.size + i, linePosition - str.size + i)withSuggestion(suggestion)
                }
            }
            val := val + inc
            i := i + 1
        }
        val
    }

    method hexdecchar(c) {
    // Return the numeric value of the single hexadecimal digit c.
        def AOrd = "A".ord
        def aOrd = "a".ord
        def zeroOrd = "0".ord
        def cOrd = c.ord
        if ( (cOrd >= AOrd) && (cOrd <= "F".ord) ) then {
            cOrd - AOrd + 10
        } elseif { (cOrd >= aOrd) && (cOrd <= "f".ord) } then {
            cOrd - aOrd + 10
        } elseif { (cOrd >= zeroOrd) && (cOrd <= "9".ord) } then {
            cOrd - zeroOrd
        } else {
            errormessages.syntaxError("the character '{c}' must be a hexadecimal digit")
                atRange(lineNumber, linePosition, linePosition)
        }
    }
    // Read the program text from util.infile and return a list of
    // tokens.
    method lexfile(file) {
        def lines = util.lines.makeEmpty
        def cLines = util.cLines.makeEmpty
            // making them empty is necessary for the browser,
            // where these variables persist from one compilation
            // to the next
        var line := ""
        var cLine := ""
        var wasCR := false
        for(file.read) do { c ->
            if (c == "\r") then {
                lines.push(line)
                cLines.push(cLine)
                line := ""
                cLine := ""
                wasCR := true
            } elseif {c  == "\n"} then {
                if (wasCR) then {
                    // the spec says "LINE FEED that immediately
                    // follows a CARRIAGE RETURN is ignored"
                } else {
                    lines.push(line)
                    cLines.push(cLine)
                    line := ""
                    cLine := ""
                }
                wasCR := false
            } elseif {c == "\l"} then {
                lines.push(line)
                cLines.push(cLine)
                line := ""
                cLine := ""
                wasCR := false
            } elseif {c == "\\"} then {
                line := line ++ c
                cLine := cLine ++ "\\\\"
                wasCR := false
            } elseif {c == "\""} then {
                line := line ++ c
                cLine := cLine ++ "\\\""
                wasCR := false
            } else {
                line := line ++ c
                cLine := cLine ++ c
                wasCR := false
            }
        }
        if (line != "") then {
            // this deals with an un-terminated final line
            lines.push(line)
            cLines.push(cLine)
        }
        lexinput(lines)
    }

    method lexinput(inputLines) {
        // tokens is a doubly-linked list of tokens.
        tokens := object {
            var first is readable := false
            var last is readable := false
            var size is readable := 0

            method savePosition {
                return [first, last, size]
            }

            method restorePosition(saved) {
                first := saved.first
                last := saved.second
                size := saved.third
            }

            method push(t) {
                if(first == false) then {
                    first := t
                    last := t
                } else {
                    last.next := t
                    t.prev := last
                    last := t
                }
                size := size + 1
            }

            method pop {
                if(last != false) then {
                    def popped = last
                    last := last.prev
                    if(last == false) then {
                        first := false
                    }
                    size := size - 1
                    popped
                }
            }

            method poll {
                if(first != false) then {
                    def polled = first
                    first := first.next
                    if(first == false) then {
                        last := false
                    }
                    size := size - 1
                    polled
                }
            }

            class iterator {
                var n := first
                method hasNext {
                    n != false
                }
                method next {
                    def ret = n
                    n := n.next
                    ret
                }
            }

            method do(action) {
                var n := first
                while { n != false } do {
                    action.apply(n)
                    n := n.next
                }
            }
        }


        linePosition := 0
        util.log_verbose "lexing."
        state := startState
        for (inputLines) do { eachLine ->
            def charS = eachLine.iterator
            while {charS.hasNext} do {
                def ch = charS.next
                linePosition := linePosition + 1
                if (inStr.not && { "><![]-".contains(ch) } && charS.hasNext) then {
                    // map to unicode equavalents
                    def nextCh = charS.next
                    linePosition := linePosition + 1
                    def bigraph = ch ++ nextCh
                    if (bigraph == ">=") then { state.consume "≥"
                    } elseif { bigraph == "<=" } then { state.consume("≤")
                    } elseif { bigraph == "!=" } then { state.consume("≠")
                    } elseif { bigraph == "[[" } then { state.consume("⟦")
                    } elseif { bigraph == "]]" } then { state.consume("⟧")
                    } elseif { bigraph == "->" } then { state.consume("→")
                    } else {
                        linePosition := linePosition - 1
                        state.consume(ch)
                        linePosition := linePosition + 1
                        state.consume(nextCh)
                    }
                } else {
                    state.consume(ch)
                }
            }
            state.consume("\n")
            linePosition := 0
            lineNumber := lineNumber + 1
        }
        linePosition := linePosition + 1
        if (inStr) then {
            errormessages.syntaxError("a multi-line string must end with a '›'.\n" ++
                "String opened on line {startLine} and unclosed at end of input.")
                atRange(startLine, stringStart, util.lines.at(startLine).size)
        }
        tokens.push(eofToken)
        tokens
    }
}
