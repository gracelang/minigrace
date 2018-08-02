#pragma ExtendedLineups
import "util" as util
import "unicode" as unicode
import "errormessages" as errormessages
import "stringMap" as map

def keywords = map.new
keywords.put("alias", true)
keywords.put("as", true)
keywords.put("class", true)
keywords.put("def", true)
keywords.put("dialect", true)
keywords.put("exclude", true)
keywords.put("factory", true)
keywords.put("import", true)
keywords.put("inherit", true)
keywords.put("interface", true)
keywords.put("is", true)
keywords.put("method", true)
keywords.put("object", true)
keywords.put("prefix", true)
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

method padl(s, width, padCh) {
    if (s.size >= width) then {
        return s
    }
    var s' := s
    while {s'.size < width} do {
        s' := padCh ++ s'
    }
    return s'
}

method hex4(num) {
    padl(num.inBase 16, 4, "0")
}

def noSuchLine = singleton "noSuchLine"

method initialize {
    lineNumber := 1
    startPosition := 1
    currentLineIndent := 0
    startLine := 1
    unichars := 0
    currentLineBraceDepth := 0
    indentOfLineBeingContinued := noSuchLine
    indentStack := list.with 0
    priorLineBraceDepth := 0
    priorLineIndent := 0
    accum := ""
    inStr := false
    codepoint := 0
    interpDepth := 0
    interpString := false
}

var tokens                  // a linked-list of output tokens
var lineNumber              // the current input line number
var linePosition            // the character position on the input line
var startLine               // the line on which the current token starts
var startPosition           // character position of the start of the current token
var currentLineIndent       // indent of the current line, i.e, the number of leading spaces
var stringStart             // the start position of the current string, if there is one
var unichars                // the number of character remaining in a unicode escape
var braceChange             // the number of { minus the number of } on the current line
var currentLineBraceDepth   // the brace-depth of the current line
var indentOfLineBeingContinued  // noSuchLine if there is no continuation in progress
var indentStack             // the indent is the number of leading spaces,
                            // and hence one less than the position
                            // of the first non-space character.
var maxIndentOfContinuation // the maximum indentation of any of the
                            // lines of a continued line
var priorLineBraceDepth
var priorLineIndent
var state                   // the state of the lexer state machie
var accum                   // the accumulated characters of the current token
var inStr                   // are we in a string?
var codepoint               // calcultes the codepoint for a unicode escape
var interpDepth             // string interpolation depth
var interpString            // are we lexing a string interpolation?

initialize

def inputLines = util.lines // an alias for the list util.lines

method incrementBraceDepth {
    currentLineBraceDepth := currentLineBraceDepth + 1
}
method decrementBraceDepth {
    currentLineBraceDepth := currentLineBraceDepth - 1
}

class token {
    def line is public = lineNumber
    def indent is public = currentLineIndent
    def linePos is public = startPosition

    def null = object {
        method asString { "⏚" }
        method == (other) { isMe (other) }
        method isHeader { true }
    }
    var next is public := null
    var prev is public := null

    method == (other) {
        if (null == other) then {
            false
        } elseif {false == other} then {
            false
        } else {
            (line == other.line) && (linePos == other.linePos)
        }
    }
    method asString { "({line}.{linePos}){self.kind} {self.value}" }
    method value { abstract }
    method size { abstract }
    method kind { abstract }
    method endLine { line }
    method endPos { linePos + size - 1 }
    method isHeader { false }
    method hasPrev { prev.isHeader.not }
    method hasNext { next.isHeader.not }
    method isIdentifier { false }
    method isString { false }
    method isComment { false }
    method isLBrace { false }
    method isRBrace { false }
    method isLParen { false }
    method isRParen { false }
    method isLSquare { false }
    method isRSquare { false }
    method isComma { false }
    method isColon { false }
    method isDot { false }
    method isNum { false }
    method isKeyword { false }
    method isOp { false }
    method isArrow { false }
    method isBind { false }
    method isSeparator { false }
    method isLGeneric { false }
    method isRGeneric { false }
    method isEof { false }
}

class identifierToken(s) {
    inherit token
    def kind is public = "identifier"
    def value is public = s
    def size is public = s.size
    method isIdentifier { true }
}
class stringToken(s) {
    inherit token
    def kind is public = "string"
    def value is public = s
    def size is public = linePosition - startPosition + 1
    method isString { true }
}
class multiLineStringToken(s) {
    inherit token
    def kind is public = "string"
    def value is public = s
    def size is public = s.size + 2
    def linePos is public = stringStart
    def line is override, public = startLine
    def endLine is override, public = lineNumber
    def endPos is override, public = linePosition
    method isString { true }
}
class commentToken(s) {
    inherit token
    def kind is public = "comment"
    def value is public = s
    def size is public = s.size + 2
    method isComment { true }
}
class lBraceToken {
    inherit token
    def kind is public = "lbrace"
    def value is public = "\{"
    def size is public = 1
    method isLBrace { true }
}
class rBraceToken {
    inherit token
    def kind is public = "rbrace"
    def value is public = "}"
    def size is public = 1
    method isRBrace { true }
}
class lParenToken {
    inherit token
    def kind is public = "lparen"
    def value is public = "("
    def size is public = 1
    method isLParen { true }
}
class rParenToken {
    inherit token
    def kind is public = "rparen"
    def value is public = ")"
    def size is public = 1
    method isRParen { true }
}
class lSquareToken {
    inherit token
    def kind is public = "lsquare"
    def value is public = "["
    def size is public = 1
    method isLSquare { true }
}
class rSquareToken {
    inherit token
    def kind is public = "rsquare"
    def value is public = "]"
    def size is public = 1
    method isRSquare { true }
}
class commaToken {
    inherit token
    def kind is public = "comma"
    def value is public = ","
    def size is public = 1
    method isComma { true }
}
class colonToken {
    inherit token
    def kind is public = "colon"
    def value is public = ":"
    def size is public = 1
    method isColon { true }
}
class dotToken {
    inherit token
    def kind is public = "dot"
    def value is public = "."
    def size is public = 1
    method isDot { true }
}
class numToken(v, b) {
    inherit token
    def kind is public = "num"
    def value is public = v
    def base is public = b
    def size is public = linePosition - startPosition + 1
    method isNum { true }
}
class keywordToken(v) {
    inherit token
    def kind is public = "keyword"
    def value is public = v
    def size is public = v.size
    method isKeyword { true }
}
class opToken(v) {
    inherit token
    def kind is public = "op"
    def value is public = v
    def size is public = v.size
    method isOp { true }
}
class arrowToken {
    inherit token
    def kind is public = "arrow"
    def value is public = "→"
    def size is public = 1
    method isArrow { true }
}
class bindToken {
    inherit token
    def kind is public = "bind"
    def value is public = ":="
    def size is public = 2
    method isBind { true }
}
class semicolonToken {
    inherit token
    def kind is public = "semicolon"
    def value is public = ";"
    def size is public = 1
    method isSeparator { true }
}
class separatorTokenAt(lineNum, pos) {
    inherit token
    def kind is public = "separator"
    def value is public = "\n"
    def size is public = 1
    method asString { "({line}.{linePos}){self.kind} \\n" }
    def line is override, public = lineNum
    def linePos is override, public = pos
    def endLine is override, public = lineNumber
    def endPos is override, public = currentLineIndent
    method isSeparator { true }
}
class lGenericToken {
    inherit token
    def kind is public = "lgeneric"
    def value is public = "⟦"
    def size is public = 1
    method isLGeneric { true }
}
class rGenericToken {
    inherit token
    def kind is public = "rgeneric"
    def value is public = "⟧"
    def size is public = 1
    method isRGeneric { true }
}
class eofToken {
    inherit token
    def kind is public = "eof"
    def value is public = ""
    def size is public = 0
    method isEof { true }
}

method advanceTo(s) { state := s }
method emit(t) {
    tokens.push(t)
    accum := ""
}
method emitNewlineSeparator {
    // we have already consumed the leading spaces on the following line.
    // We want the newline's coordinates to be those of the end of the prior line.
    if (tokens.isEmpty) then { return }
    def lastToken = tokens.last
    emit(separatorTokenAt(lineNumber - 1, lastToken.endPos + 1))
}
method store(c) { accum := accum ++ c }

def startState = object {
    method consume(c){
        if (c == "#") then {
            advanceTo(pragmaPrefixState)
        } else {
            advanceTo(indentationState)
            state.consume(c)
        }
    }
}

def pragmaPrefixState = object {
    method consume(c){
        checkSeparator(c)
        if (c == "\n") then {
            errormessages.syntaxError "Incomplete pragma definition "
                atRange(lineNumber, startPosition, linePosition)
        } elseif {isSpaceChar(c)} then {
            if (accum == "pragma") then {
                accum := ""
                advanceTo(pragmaBodyState)
            } else {
                errormessages.syntaxError "Pragmas must start with #pragma "
                    atRange(lineNumber, startPosition, linePosition)
            }
        } else {
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
                suggestion.deleteRange(tokens.last.linePos+tokens.last.size, linePosition - 1)
                    onLine(lineNumber)
                errormessages.syntaxError("Consecutive numbers are not allowed.")
                    atRange(lineNumber, tokens.last.linePos, linePosition)
                    withSuggestion(suggestion)
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
        } elseif {isOperatorChar(c, ordval)} then {
            advanceTo(operatorState)
            state.consume(c)
        } elseif {c == ","} then {
            emit(commaToken)
        } elseif {c == "\{"} then {
            incrementBraceDepth
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
            if (interpDepth > 0) then { newlineInInterpolationError }
            currentLineIndent := 0
            advanceTo(indentationState)
        } else {
            if((unicode.isSeparator(ordval).not) &&
                    (unicode.isControl(ordval).not) &&
                    (ordval != 10) &&
                    (ordval != 13) &&
                    (ordval != 32)) then {
                errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)}) "
                    ++ "is not a valid character")
                    atPosition(lineNumber, linePosition)
            }
        }
    }
}

def rBraceState = object {
    method consume (c){
        if (interpDepth > 0) then {
            if (tokens.last.kind == "lparen") then {
                def lastPos = tokens.last.linePos
                def lineLength = inputLines.at(lineNumber).size
                def suggestions = []
                if (lastPos < lineLength) then {
                    def suggestion1 = errormessages.suggestion.new

                    suggestion1.deleteRange(lastPos, linePosition)
                                    onLine(lineNumber)
                    suggestions.add(suggestion1)
                    def suggestion2 = errormessages.suggestion.new
                    suggestion2.insert "«expression»"
                                    atPosition (lastPos + 1)
                                    onLine(lineNumber)
                    suggestions.add(suggestion2)
                }
                errormessages.syntaxError "a string interpolation cannot be empty."
                      atRange (lineNumber, lastPos, linePosition)
                      withSuggestions (suggestions)
            }
            emit (rParenToken)
            emit (opToken("++"))
            interpDepth := interpDepth - 1
            inStr := true
            advanceTo(quotedStringState)
        } else {
            decrementBraceDepth
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
            if (interpString && (interpDepth == 0)) then {
                emit(rParenToken)
                interpString := false
            }
            advanceTo(defaultState)
            inStr := false
        } elseif {c == "\n"} then {
            unclosedStringError
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
            interpDepth := interpDepth + 1
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
            escapedNewlineError
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
        } else {
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
            currentLineIndent := linePosition
        } else {
            checkIndentation(c)
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
            currentLineIndent := 0
            advanceTo(indentationState)
        } else {
            store(c)
        }
    }
}

method checkIndentation(currentCharacter) {
    // a newline has been matched (including the spaces that follow it).
    // Depending on the state of the lexer, classify it as <whitespace> (when
    // the following line is a continuation line) or a real <newline> token."

    checkAndRecordIndentStatus(currentCharacter)
    if (isLineEmpty(currentCharacter)) then { return }
    if (isIndentationChangeOne) then {
        errormessages.syntaxError "a change of indentation of 1 is not permitted"
                        atRange (lineNumber, linePosition, linePosition)
    }
    terminateContinuationIfNecessary
    if (isBlockStart) then {
        recordNewIndentation
        saveDataForPriorLine
        if (priorLineEndsWithOpenBracket) then {
            return
        } else {
            emitNewlineSeparator
            return
        }
    }
    if (isBlockEnd) then { checkIndentationReset }
    if (isContinuationLine) then {
        recordContinuationStatus
        saveDataForPriorLine
        return
    }
    if (currentLineIndent < priorLineIndent) then { checkOutdent }
    saveDataForPriorLine
    if ( ")]}⟧".contains(currentCharacter) ) then { return }
    emitNewlineSeparator
}

method isLineEmpty(currentCharacter) {
    // answers true if the line that we just started is empty, or just a comment.
    // Leading spaces have already been consumed in indentationState, so
    // on a line containing just spaces, currentCharacter will be the next newline.
    // A line containing nothing but a comment is treated as empty,
    // so that comments do not reset the indentation.

    if ("\n" == currentCharacter) then { return true }
    if ("/" ≠ currentCharacter) then { return false }
    return "/" == followingCharacter
}
method followingCharacter {
    def currentLine = inputLines.at (lineNumber)
    if (currentLine.size == linePosition) then {
        "\n"
    } else {
        currentLine.at (linePosition + 1)
    }
}
method isIndentationChangeOne {
    def indentationChange = currentLineIndent - priorLineIndent
    return indentationChange.abs == 1
}

method terminateContinuationIfNecessary {
    if (indentOfLineBeingContinued == noSuchLine) then { return }
    if ((braceChange == 0) && { currentLineIndent >= maxIndentOfContinuation }) then {
        maxIndentOfContinuation := currentLineIndent
        return
    }
    // The continuation has ended, either because we have opened a new block,
    // or because currentLineIndent < maxIndentOfContinuation
    priorLineIndent := indentOfLineBeingContinued
    if ((braceChange == 0) && {currentLineIndent ≠ priorLineIndent}) then {
        lexicalError ("if this line continues the previous line, its indentation "
            ++ "must be at least {maxIndentOfContinuation}; if it starts a new "
            ++ "statement, its indentation must be {indentOfLineBeingContinued}")
    }
    indentOfLineBeingContinued := noSuchLine    // record termination of continuation
}

method checkAndRecordIndentStatus (currentCharacter) {
    if ("\t" == currentCharacter) then {
        lexicalError "Please indent with spaces, not tabs"
    }
    braceChange := currentLineBraceDepth - priorLineBraceDepth
    if ("}" == currentCharacter) then {
        // treat a line that starts with a "}" as being at the
        // prior indent level
        braceChange := braceChange - 1
    }
}
method isBlockStart {
    braceChange > 0
}
method isBlockEnd {
    braceChange < 0
}
method recordNewIndentation {
    // One or more blocks have just started.  Record the new
    // indentation(s)
    if (currentLineIndent ≤ priorLineIndent) then {
        lexicalError "Please indent the body of a block"
    }
    if (braceChange > 1) then {
        lexicalError("The prior line opened two blocks. There is no way for you "
            ++ "to close them correctly! Please split the prior line into two.")
    }
    repeat (braceChange) times {
        indentStack.addLast (currentLineIndent)
    }
}
method saveDataForPriorLine {
    priorLineBraceDepth := priorLineBraceDepth + braceChange
    priorLineIndent := currentLineIndent
}
method priorLineEndsWithOpenBracket {
    "[(\{⟦".contains (tokens.last.value)
}
method checkIndentationReset {
    // A bock has ended.  Check that the indentation returns
    // to the previous level

    repeat (- braceChange) times { indentStack.removeLast }
    if (currentLineIndent ≠ indentStack.last) then {
        lexicalError("on closing a block, the indentation must return to that "
            ++ "of the line on which the block was opened ({indentStack.last})")
    }
}
method isContinuationLine {
    if (noSuchLine ≠ indentOfLineBeingContinued) then {
        return  true
    }
    currentLineIndent > priorLineIndent
}
method recordContinuationStatus {
    if (noSuchLine == indentOfLineBeingContinued) then {
        indentOfLineBeingContinued := indentStack.last
        maxIndentOfContinuation := currentLineIndent
    }
}
method checkOutdent {
    // The indentation has decreased.  Check that this is ok

    if (braceChange == 0) then {
        lexicalError "do not reduce the indentation except when ending a block"
    }
}
method lexicalError (message) {
    errormessages.
        syntaxError (message)
        atRange (lineNumber, 1, linePosition)
}
method escapedNewlineError {
    errormessages.syntaxError "to include a newline in a string use '\\n'"
          atPosition(lineNumber, linePosition - accum.size - 1)
}

method newlineInInterpolationError {
    errormessages.syntaxError("A string interpolation may not "
          ++ "contain a newline. ")
          atPosition(lineNumber, linePosition)
}

method unclosedStringError {
    // We have found a newline inside a string.  Report the error

    if (interpDepth > 0) then {
        // Find closest {.
        var line := lineNumber
        var ix := inputLines.at(line).size
        while { inputLines.at(line).at(ix) != "\{" } do {
            ix := ix - 1
            if (ix == 0) then {
                lineNumber := line - 1
                ix := inputLines.at(line).size
            }
        }
        def suggestions = []
        var suggestion := errormessages.suggestion.new
        suggestion.insert "\\" atPosition (ix) onLine (line)
        suggestions.push(suggestion)
        if ((line == lineNumber) && (ix == (linePosition - 2))) then {
            errormessages.syntaxError("for a '\{' character in a string use '\\\{'.")
                atPosition(line, ix)
                withSuggestions(suggestions)
        } else {
            suggestion := errormessages.suggestion.new
            suggestion.insert("}")
                  atPosition(linePosition - accum.size - 1)
                  onLine(lineNumber)
            suggestions.push(suggestion)
            errormessages.syntaxError("a string interpolation must end with a '}';"
                ++ "for a '\{' character in a string use '\\\{'.")
                atPosition(lineNumber, linePosition - accum.size - 1)
                withSuggestions(suggestions)
        }
    }

    def errorLine = inputLines.at(lineNumber)
    def nextLine = if (inputLines.size >= (lineNumber + 1)) then {
        inputLines.at(lineNumber + 1)
    } else {
        ""
    }

    // Count the number of literal quotes in nextLine.
    var i := 1
    var count := 0
    while { i <= nextLine.size } do {
        if (nextLine.at(i) == "\"") then {
            count := count + 1
        } elseif {
            nextLine.at(i) == "\\"
        } then {
            i := i + 1
        }
        i := i + 1
    }
    if (count.isOdd) then {
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
        errormessages.syntaxError("a string must be terminated by a \" before "
            ++ "the end of the line. To insert a newline in a string, use '\\n'. "
            ++ "To spread a string over multiple lines, use several strings "
            ++ "joined together with '++'")
            atPosition(lineNumber, linePosition)
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
            errormessages.syntaxError("tabs are not allowed; use spaces instead.")
                atPosition(lineNumber, linePosition) withSuggestion(suggestion)
        } else {
            suggestion.replaceRange(linePosition, linePosition)
                with("\\u{hex4(ordval)}")
                onLine(lineNumber)
            errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)})"
                ++ " is not a valid whitespace character"
                ++ " and cannot be written in the source code;"
                ++ " use the Unicode escape \\u{hex4(ordval)} instead")
                atRange(lineNumber, linePosition, linePosition)
                withSuggestion(suggestion)
            errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)}) "
                ++ "is not a valid whitespace character; use spaces instead.")
                atPosition(lineNumber, linePosition) withSuggestion(suggestion)
        }
    } elseif {isBadControl(c)} then {
        // Character is a control character other than
        // carriage return or line feed.
        def suggestion = errormessages.suggestion.new
        suggestion.replaceRange(linePosition, linePosition)
            with("\\u{hex4(ordval)}")
            onLine(lineNumber)
        errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)}) "
            ++ "is a control character and cannot be written in the source code; "
            ++ "use the Unicode escape \\u{hex4(ordval)} instead")
            atRange(lineNumber, linePosition, linePosition)
            withSuggestion(suggestion)
        suggestion.deleteChar(linePosition)onLine(lineNumber)
        errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)}) "
            ++ "is a control character and cannot be written in the source code; "
            ++ "consider using spaces instead.")
            atPosition(lineNumber, linePosition) withSuggestion(suggestion)
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
            errormessages.syntaxError("tabs are not allowed; use spaces instead.")
                atPosition(lineNumber, linePosition) withSuggestion(suggestion)
        } else {
            errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)}) "
                ++ "is not a valid whitespace character; use spaces instead.")
                atPosition(lineNumber, linePosition) withSuggestion(suggestion)
        }
    } elseif {isBadControl(c)} then {
        // Character is a control character other than
        // carriage return or line feed.
        def suggestion = errormessages.suggestion.new
        suggestion.deleteChar(linePosition)onLine(lineNumber)
        errormessages.syntaxError("{unicode.name(c)} (U+{hex4(ordval)}) "
            ++ "is a control character and cannot be written in the source "
            ++ "code; consider using spaces instead.")
            atPosition(lineNumber, linePosition) withSuggestion(suggestion)
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
                suggestion.insert("x")
                    atPosition(linePosition - str.size + 1) onLine(lineNumber)
                errormessages.syntaxError("a number in base 16 must start with '0x'.")
                    atPosition(lineNumber, linePosition - str.size + 1)
                    withSuggestion(suggestion)
            } else {
                def suggestion = errormessages.suggestion.new
                if(str.size == 1) then {
                    suggestion.deleteRange(linePosition - str.size - 1, linePosition - 1)
                        onLine(lineNumber)
                } else {
                    suggestion.deleteChar(linePosition - str.size + i)
                        onLine(lineNumber)
                }
                def validDigits = if(base <= 10) then {
                    "'0' to '{base - 1}'"
                } else {
                    "'0' to '9', 'a' to '{unicode.create(87 + base)}'"
                }
                errormessages.syntaxError("'{c}' is not a valid digit in base {base}. "
                    ++ "Valid digits are {validDigits}.")
                    atRange(lineNumber, linePosition - str.size + i, linePosition - str.size + i)
                    withSuggestion(suggestion)
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
            atPosition(lineNumber, linePosition)
    }
}

method lexfile(file) {
    // Reads the program text from file; returns a list of tokens.

    inputLines.clear
    def cLines = util.cLines.clear
        // making them empty is necessary for the browser,
        // where these variables persist from one compilation
        // to the next
    var line := ""
    var cLine := ""
    var wasCR := false
    for(file.read) do { c ->
        if (c == "\r") then {
            inputLines.push(line)
            cLines.push(cLine)
            line := ""
            cLine := ""
            wasCR := true
        } elseif {c  == "\n"} then {
            if (wasCR) then {
                // the spec says "a LINE FEED that immediately
                // follows a CARRIAGE RETURN is ignored"
            } else {
                inputLines.push(line)
                cLines.push(cLine)
                line := ""
                cLine := ""
            }
            wasCR := false
        } elseif {c == "\l"} then {
            inputLines.push(line)
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
        inputLines.push(line)
        cLines.push(cLine)
    }
    lexInputLines
}

method lexString (inputString) {
    // this method is here to make it easier to test the lexer
    def input = inputString.split "\n"
    util.lines.clear
    util.lines.addAll(input)
    initialize
    lexInputLines
}

method lexLine (aSingleInputLine) {
    def input = aSingleInputLine.split "\n"
    if ((input.size > 2) || {(input.size == 2) && {input.second.isEmpty.not}}) then {
        ProgrammingError.raise "argument to lexLine is not a single line"
    }
    def oldInput = util.lines.copy
    try {
        util.lines.clear
        util.lines.addAll(input)
        initialize
        lexInputLines
    } finally {
        util.lines.clear
        util.lines.addAll(oldInput)
    }
}

method lexInputLines {
    // tokens is a doubly-linked list of tokens.
    tokens := object {
        def header = object {
            var next is public
            method asString { "⏚" }
            method == (other) { isMe (other) }
            method isHeader { true }
        }
        header.next := header
        var last is readable := header
        var size is readable := 0

        method first { header.next }
        method first := (nu) is confidential { header.next := nu }
        method isEmpty { header == last }

        method savePosition {
            return [first, last, size]
        }

        method restorePosition(saved) {
            first := saved.first
            last := saved.second
            size := saved.third
        }

        method push(t) {
            // adds t to the end of the list

            last.next := t
            t.prev := last
            if (isEmpty) then {
                if (t.indent ≠ 0) then {
                    def msg = "the first line must not be indented"
                    errormessages.syntaxError(msg) atRange(t.line, 1, t.indent)
                }
            } elseif {(t.indent - last.indent).abs == 1} then {
                def m1 = "the indentation for this line can't differ "
                def m2 = "from that of the previous line by 1.\n  To start a block, or "
                def m3 = "continue a statement on the next line line, indent by 2 or more. "
                def m4 = "To end a block, or end the continuation, decrease the indent "
                def m5 = "to the prior level. "
                def m6 = "Otherwise, use the same indentation as the previous line"
                def msg = m1 ++ m2 ++ m3 ++ m4 ++ m5 ++ m6
                errormessages.syntaxError(msg) atRange(t.line, 1, t.indent)
            }
            last := t
            size := size + 1
        }

        method pop {
            // removes the last element and returns it
            if (isEmpty) then {
                ProgrammingError.raise "attempt to pop from an empty token list"
            }
            def popped = last
            last := last.prev
            size := size - 1
            popped
        }

        method poll {
            // removes the first element and returns it
            if (isEmpty) then {
                ProgrammingError.raise "attempt to poll from an empty token list"
            }
            def polled = first
            first := first.next
            size := size - 1
            polled
        }

        class iterator {
            var n := first
            method hasNext {
                header ≠ n
            }
            method next {
                def ret = n
                n := n.next
                ret
            }
        }

        method do(action) {
            var n := first
            while { n.isHeader.not } do {
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
                } elseif { bigraph == "<=" } then { state.consume "≤"
                } elseif { bigraph == "!=" } then { state.consume "≠"
                } elseif { bigraph == "[[" } then { state.consume "⟦"
                } elseif { bigraph == "]]" } then { state.consume "⟧"
                } elseif { bigraph == "->" } then { state.consume "→"
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
            atRange(startLine, stringStart, inputLines.at(startLine).size)
    }
    tokens.push(eofToken)
    tokens
}
