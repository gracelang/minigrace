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
keywords.put("trait", true)
keywords.put("type", true)
keywords.put("use", true)
keywords.put("var", true)

def operatorChars = "-&|:$#\\%^@?*/+!~"

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
    var lineNumber := 1
    var linePosition := 0
    var startPosition := 1
    var indentLevel := 0
    var startLine := 1
    var stringStart
    
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
        inherits token
        def kind is public = "identifier"
        def value is public = s
        def size is public = s.size
    }
    class stringToken(s) {
        inherits token
        def kind is public = "string"
        def value is public = s
        def size is public = linePosition - stringStart + 1
    }
    class multiLineStringToken(s) {
        inherits token
        def kind is public = "string"
        def value is public = s
        def size is public = s.size + 2
        def line' = startLine
        def linePos' = stringStart
        method line is override { line' }
        method linePos is override { linePos' }
    }
    class commentToken(s) {
        inherits token
        def kind is public = "comment"
        def value is public = s
        def size is public = s.size + 2
    }
    class lBraceToken {
        inherits token
        def kind is public = "lbrace"
        def value is public = "\{"
        def size is public = 1
    }
    class rBraceToken {
        inherits token
        def kind is public = "rbrace"
        def value is public = "}"
        def size is public = 1
    }
    class lParenToken {
        inherits token
        def kind is public = "lparen"
        def value is public = "("
        def size is public = 1
    }
    class rParenToken {
        inherits token
        def kind is public = "rparen"
        def value is public = ")"
        def size is public = 1
    }
    class lSquareToken {
        inherits token
        def kind is public = "lsquare"
        def value is public = "["
        def size is public = 1
    }
    class rSquareToken {
        inherits token
        def kind is public = "rsquare"
        def value is public = "]"
        def size is public = 1
    }
    class commaToken {
        inherits token
        def kind is public = "comma"
        def value is public = ","
        def size is public = 1
    }
    class colonToken {
        inherits token
        def kind is public = "colon"
        def value is public = ":"
        def size is public = 1
    }
    class dotToken {
        inherits token
        def kind is public = "dot"
        def value is public = "."
        def size is public = 1
    }
    class numToken(v, b) {
        inherits token
        def kind is public = "num"
        def value is public = v
        def base is public = b
        def size is public = linePosition - startPosition
    }
    class keywordToken(v) {
        inherits token
        def kind is public = "keyword"
        def value is public = v
        def size is public = v.size
    }
    class opToken(v) {
        inherits token
        def kind is public = "op"
        def value is public = v
        def size is public = v.size
    }
    class arrowToken {
        inherits token
        def kind is public = "arrow"
        def value is public = "→"
        def size is public = 1
    }
    class bindToken {
        inherits token
        def kind is public = "bind"
        def value is public = ":="
        def size is public = 2
    }
    class semicolonToken {
        inherits token
        def kind is public = "semicolon"
        def value is public = ";"
        def size is public = 1
    }
    class lGenericToken {
        inherits token
        def kind is public = "lgeneric"
        def value is public = "⟦"
        def size is public = 1
    }
    class rGenericToken {
        inherits token
        def kind is public = "rgeneric"
        def value is public = "⟧"
        def size is public = 1
    }
    class eofToken {
        inherits token
        def kind is public = "eof"
        def value is public = ""
        def size is public = 0
    }


    method modechange(tokens, mode, accum) {
        // When a new lexical class has begun, add to the token list
        // the token corresponding to the previous accumulated data.
        // mode is the previous lexical mode (a string), and accum the
        // accumulated characters since that mode began. Modes are:
        //   n           Whitespace       i   Identifier
        //   "           Quoted string    q   extended string
        //   m           Number           o   Any operator
        //   p           Pragma           d   Indentation
        //   c           Comment          e   empty
        //   ,.{}()[]⟦⟧; The corresponding literal character
        //
        // There are three special cases for mode o. If accum is "→",
        // ":=", or "=", the corresponding special token is created.
        // For mode i, a keyword token is created when the identifier
        // is a reserved keyword.

        var tok := 0
        if ((mode != "n") || (accum.size > 0)) then {
            if (mode == "i") then {
                tok := if (keywords.contains(accum)) then {
                    keywordToken(accum)
                } else {
                    identifierToken(accum)
                }
                tokens.push(tok)
            } elseif { mode == "\"" } then {
                tok := stringToken(accum)
                tokens.push(tok)
            } elseif { mode == "q" } then {
                tok := multiLineStringToken(accum)
                tokens.push(tok)
            } elseif { mode == "," } then {
                tok := commaToken
                tokens.push(tok)
            } elseif { mode == "." } then {
                tok := dotToken
                tokens.push(tok)
            } elseif { mode == "\{" } then {
                tok := lBraceToken
                tokens.push(tok)
            } elseif { mode == "}" } then {
                tok := rBraceToken
                tokens.push(tok)
            } elseif { mode == "(" } then {
                tok := lParenToken
                tokens.push(tok)
            } elseif { mode == ")" } then {
                tok := rParenToken
                tokens.push(tok)
            } elseif { mode == "[" } then {
                tok := lSquareToken
                tokens.push(tok)
            } elseif { mode == "]" } then {
                tok := rSquareToken
                tokens.push(tok)
            } elseif { mode == "⟦" } then {
                tok := lGenericToken
                tokens.push(tok)
            } elseif { mode == "⟧" } then {
                tok := rGenericToken
                tokens.push(tok)
            } elseif { mode == ";" } then {
                tok := semicolonToken
                tokens.push(tok)
            } elseif { mode == "m" } then {
                if ((tokens.size > 1) && {tokens.last.kind == "dot"}) then {
                    def dot = tokens.pop
                    if (tokens.last.kind == "num") then {
                        if (tokens.last.base == 10) then {
                            tok := tokens.pop
                            var decimal := makeNumToken(accum)
                            if(decimal.base == 10) then {
                                tok := numToken(tok.value ++ "." ++ accum, 10)
                            } else {
                                def suggestions = []
                                var suggestion := errormessages.suggestion.new
                                suggestion.replaceRange(dot.linePos + 1, linePosition - 1)with(decimal.value)onLine(lineNumber)
                                suggestions.push(suggestion)
                                suggestion := errormessages.suggestion.new
                                suggestion.deleteRange(dot.linePos, linePosition - 1)onLine(lineNumber)
                                suggestions.push(suggestion)
                                errormessages.syntaxError("the fractional part of a number must be in base 10.")atRange(
                                    lineNumber, dot.linePos + 1, linePosition - 1)withSuggestions(suggestions)
                            }
                        } else {
                            def suggestions = []
                            var suggestion := errormessages.suggestion.new
                            suggestion.replaceRange(tokens.last.linePos, dot.linePos - 1)with(tokens.last.value)onLine(lineNumber)
                            suggestions.push(suggestion)
                            suggestion := errormessages.suggestion.new
                            suggestion.deleteChar(dot.linePos)onLine(lineNumber)
                            suggestions.push(suggestion)
                            errormessages.syntaxError("a number in base {tokens.last.base} cannot have a fractional part.")atRange(
                                lineNumber, dot.linePos, linePosition - 1)withSuggestions(suggestions)
                        }
                    } else {
                        if(tokens.last.kind == "string") then {
                            def suggestion = errormessages.suggestion.new
                            suggestion.replaceChar(dot.linePos)with("++")onLine(dot.line)
                            errormessages.syntaxError("a number may follow a '.' only if there is a number before the '.'. "
                                ++ "To join a number to a string, use '++'.")atRange(
                                dot.line, dot.linePos, dot.linePos)withSuggestion(suggestion)
                        } elseif { (tokens.last.kind == "op" ) || (tokens.last.kind == "bind") } then {
                            def suggestion = errormessages.suggestion.new
                            suggestion.insert("0")atPosition(dot.linePos)onLine(dot.line)
                            errormessages.syntaxError("a number must have a digit before the decimal point.")atPosition(
                                dot.line, dot.linePos)withSuggestion(suggestion)
                        } elseif { tokens.last.kind == "identifier" } then {
                            def suggestions = []
                            if(tokens.last.value == "o") then {
                                def suggestion = errormessages.suggestion.new
                                suggestion.replaceChar(tokens.last.linePos)with("0")onLine(tokens.last.line)
                                suggestions.push(suggestion)
                            }
                            def suggestion = errormessages.suggestion.new
                            suggestion.replaceRange(dot.linePos, linePosition - 1)with("({accum})")onLine(tokens.last.line)
                            suggestions.push(suggestion)
                            errormessages.syntaxError("a number may follow a '.' only if there is a number before the '.'.")atRange(
                                dot.line, dot.linePos, dot.linePos)withSuggestions(suggestions)
                        } else {
                            errormessages.syntaxError("a number may follow a '.' only if there is a number before the '.'.")atRange(
                                dot.line, dot.linePos, dot.linePos)
                        }
                    }
                } else {
                    tok := makeNumToken(accum)
                }
                tokens.push(tok)
            } elseif { mode == "o" } then {
                tok := opToken(accum)
                if (accum == "→") then {
                    tok := arrowToken
                } elseif { accum == ":=" } then {
                    tok := bindToken
                } elseif { accum == ":" } then {
                    tok := colonToken
                }
                tokens.push(tok)
            } elseif { mode == "d" } then {
                indentLevel := linePosition - 1
            } elseif { mode == "n" } then {
            } elseif { mode == "e" } then {
            } elseif { mode == "c" } then {
                var firstNonSpace := 3      // skip the leading "//"
                def accumSize = accum.size
                while { (firstNonSpace <= accum.size) && {
                        accum.at(firstNonSpace) == " " } } do {
                    firstNonSpace := firstNonSpace + 1 
                }
                def cmt = accum.substringFrom(firstNonSpace)to(accum.size)
                tokens.push(commentToken(cmt))
            } elseif { mode == "p" } then {
                if (accum.substringFrom(1)to(8) == "#pragma ") then {
                    util.processExtension(
                        accum.substringFrom(9)to(accum.size))
                }
            } else {
                ProgrammingError.raise("Internal error in lexer: " ++
                    "no handler for mode {mode} with accum ‹{accum}› " ++
                    "at position {lineNumber}:{linePosition}")
            }
        }
        startPosition := linePosition
    }

    method fromBase(str, base) {
        var val := 0
        var i := 0
        for (str) do {c->
            def n = c.ord
            val := val * base
            var inc := 0
            if ((n >= 48) && (n <= 57)) then {
                inc := n - 48 // 0
            } elseif {(n >= 65) && (n <= 90)} then {
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

    method makeNumToken(accum) {
        var base := 10
        var baseSet := false
        var sofar := ""
        var i := 0
        for (accum) do {c->
            if ((c == "x") && (!baseSet)) then {
                base := sofar.asNumber
                baseSet := true
                if (base == 0) then {
                    base := 16
                }
                if((base < 2) || (base > 36)) then {
                    def suggestions = []
                    var suggestion := errormessages.suggestion.new
                    suggestion.replaceChar(linePosition - accum.size + i)with("*")onLine(lineNumber)
                    suggestions.push(suggestion)
                    suggestion := errormessages.suggestion.new
                    suggestion.deleteRange(linePosition - accum.size, linePosition - accum.size + i)onLine(lineNumber)
                    suggestions.push(suggestion)
                    errormessages.syntaxError("base {base} is not a valid numerical base.")atRange(
                        lineNumber, linePosition - accum.size, linePosition - accum.size + i - 1)withSuggestions(suggestions)
                }
                sofar := ""
            } else {
                sofar := sofar ++ c
            }
            i := i + 1
        }
        if(sofar == "") then {
            def suggestions = []
            var suggestion := errormessages.suggestion.new
            suggestion.deleteRange(linePosition - accum.size + i - 1, linePosition - 1)onLine(lineNumber)
            suggestions.push(suggestion)
            suggestion := errormessages.suggestion.new
            suggestion.insert("0")atPosition(linePosition)onLine(lineNumber)
            suggestions.push(suggestion)
            errormessages.syntaxError("at least one digit must follow the 'x' in a number.")atPosition(
                lineNumber, linePosition - accum.size + i)withSuggestions(suggestions)
        }
        numToken(fromBase(sofar, base).asString, base)
    }
    // True if ov is a valid identifier character. Identifier
    // characters are Unicode letters, Unicode numbers, apostrophe,
    // and (currently) underscore.
    method isidentifierchar(ov) {
        if (unicode.isLetter(ov)) then {
            return true
        }
        if (unicode.isNumber(ov)) then {
            return true
        }
        if ((ov == 95) || (ov == 39)) then {
            // 95 is _, 39 is '
            true
        } else {
            false
        }
    }

    // True if c (with codepoint ordval) is a valid operator character.
    method isoperatorchar(c, ordval) {
        if (operatorChars.contains(c)) then { return true }
        if (unicode.isSymbolMathematical(ordval)) then { return true }
        if (unicode.iscategory(c, "So")) then { return true }
        return false
    }

    // Read the program text from util.infile and return a list of
    // tokens.
    method lexfile(file) {
        def lines = []
        def cLines = []
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
        util.lines := lines
        util.cLines := cLines
        lexinput(lines)
    }

    method lexinput(inputLines) {
        // tokens is a doubly-linked list of tokens.
        var tokens := object {
            var first is readable := false
            var last is readable := false
            var size' := 0

            method push(t) {
                if(first == false) then {
                    first := t
                    last := t
                } else {
                    last.next := t
                    t.prev := last
                    last := t
                }
                size' := size' + 1
            }

            method pop {
                if(last != false) then {
                    def popped = last
                    last := last.prev
                    if(last == false) then {
                        first := false
                    }
                    size' := size' - 1
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
                    size' := size' - 1
                    polled
                }
            }

            method size {
                size' + 0
            }

            method iter {
                object {
                    var n := first
                    method havemore {
                        n != false
                    }
                    method hasNext {
                        n != false
                    }
                    method next {
                        def ret = n
                        n := n.next
                        ret
                    }
                }
            }

            method iterator {
                iter
            }
            
            method do(action) {
                var n := first
                while { n != false } do {
                    action.apply(n)
                    n := n.next
                }
            }
        }

        var mode := "d"
        var newmode := mode
        var inStr := false
        var inBackticks := false
        var backtickIdent := false
        var accum := ""
        var escaped := false
        var unichars := 0
        var codepoint := 0
        var interpdepth := 0
        var interpString := false
        var atStart := true
        var newlineFound := false
        linePosition := 0
        util.log_verbose "lexing."
        def badSeparator = unicode.pattern("Z", 9)not(32, 160)
            // 32 is SPACE, and 160 NO-BREAK SPACE
        def badControl =  unicode.pattern("C")not(10, 13)
        def selfModes = unicode.pattern("(".ord, ")".ord, ",".ord,
            "\{".ord, "}".ord, "[".ord, "]".ord, ";".ord, "⟦".ord, "⟧".ord)
        def brackets = unicode.pattern("(".ord, ")".ord,
            "\{".ord, "}".ord, "[".ord, "]".ord, "⟦".ord, "⟧".ord)
        def identifierChar = unicode.pattern("L", "N", 95, 39) // 95 = _, 39 = '
        def digit = unicode.pattern("0".ord, "1".ord, "2".ord, "3".ord,
            "4".ord, "5".ord, "6".ord, "7".ord, "8".ord, "9".ord)
        def mainBlock = { c ->
            var ct := ""
            var ordval := c.ord // String.ord gives the codepoint
            if (badSeparator.match(ordval) && { mode != "q" }) then {
                // Character is whitespace, but not an ASCII space or
                // Unicode NO-BREAK SPACE.  For example, a tab
                def suggestion = errormessages.suggestion.new
                suggestion.replaceChar(linePosition)with(" ")onLine(lineNumber)
                if (ordval == 9) then {
                    if (inStr) then {
                        suggestion.replaceRange(linePosition, linePosition)
                            with("\\u{padl(ordval.inBase 16, 4, "0")}")
                            onLine(lineNumber)
                        errormessages.syntaxError("tabs cannot be "
                            ++ "written in the source code; "
                            ++ "use the Unicode escape \\u"
                            ++ padl(ordval.inBase 16, 4, "0")
                            ++ " instead")
                            atRange(lineNumber, linePosition, linePosition)
                            withSuggestion(suggestion)
                    }
                    errormessages.syntaxError("tabs are not allowed; use spaces instead.")atRange(lineNumber,
                        linePosition, linePosition)withSuggestion(suggestion)
                } else {
                    if (mode == "\"") then {
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
                    }
                    errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                        ++ "is not a valid whitespace character; use spaces instead.")atRange(lineNumber,
                        linePosition, linePosition)withSuggestion(suggestion)
                }
            } elseif {badControl.match(ordval) && { mode != "q" }} then {
                // Character is a control character other than
                // carriage return or line feed.
                def suggestion = errormessages.suggestion.new
                if (inStr) then {
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
                }
                suggestion.deleteChar(linePosition)onLine(lineNumber)
                errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                    ++ "is a control character and cannot be written in the source code; consider using spaces instead.")atRange(lineNumber,
                    linePosition, linePosition)withSuggestion(suggestion)
            }
            if (atStart) then {
                if (linePosition == 1) then {
                    if (c == "#") then {
                        mode := "p"
                        newmode := mode
                    } else {
                        atStart := false
                    }
                }
            }
            if (inStr) then {

            } elseif { (mode != "c") && (mode != "p") } then {
                // Not in a comment or pragma, so look for a mode.
                if ((c == " ") && (mode != "d")) then {
                    newmode := "n"
                }
                if (c == "\"") then {
                    // Beginning of a string
                    newmode := "\""
                    inStr := true
                    stringStart := linePosition
                } elseif { c == "‹" } then {
                    // Beginning of a multi-line string
                    newmode := "q"
                    inStr := true
                    startLine := lineNumber
                    stringStart := linePosition
                } elseif { identifierChar.match(ordval) } then {
                    newmode := "i"
                }
                if (digit.match(ordval)) then {
                    // This may overwrite newmode := "i"
                    // established 5 lines up
                    if (mode != "i") then {
                        newmode := "m"
                    }
                }
                if (mode == "m") then {
                    if ((ordval >= 97) && (ordval <=122)) then {
                        newmode := "m"
                    } else {
                        if ((ordval >= 65) && (ordval <= 90)) then {
                            newmode := "m"
                        }
                    }
                }
                if (c == "<") then {
                    if (mode == "i") then {
                        newmode := "⟦"
                    } elseif {(mode == "n") && (tokens.last.kind == "op")} then {
                        newmode := "⟧"
                    } else {
                        newmode := "o"
                    }
                } elseif { (c == ">") && {(mode == "i") || (mode == "e")} } then {
                    if (mode == "⟧") then {
                        modechange(tokens, mode, accum)
                    }
                    newmode := "⟧"
                } elseif { isoperatorchar(c, ordval) } then {
                    newmode := "o"
                } elseif { selfModes.match(ordval) } then {
                    newmode := c
                }
                if (c == "#") then {
                    if(util.lines.at(lineNumber).substringFrom(1)to(7) == "#pragma") then {
                        if (atStart) then {
                            mode := "p"
                            newmode := "p"
                        } else {
                            errormessages.syntaxError "pragmas must be at the start of the file."
                                atLine(lineNumber)
                        }
                    }
                }
                if (c == ".") then {
                    if (accum == ".") then {
                        // Special handler for .. operator
                        mode := "o"
                        newmode := mode
                    } elseif { accum == ".." } then {
                        // Special handler for ... identifier
                        mode := "n"
                        newmode := mode
                        modechange(tokens, "i", "...")
                        accum := ""
                    } else {
                        newmode := "."
                    }
                }
                if (c == "/") then {
                    if (accum == "/") then {
                        // Start of comment
                        mode := "c"
                        newmode := mode
                    }
                }
                if (mode == "n") then {
                    if (mode == newmode) then {
                        if (unicode.isSeparator(ordval).not) then {
                            if (unicode.isControl(ordval).not) then {
                                if (ordval != 10) then {
                                    if (ordval != 13) then {
                                        if (ordval != 32) then {
                                            if (c != ".") then{
                                                errormessages.syntaxError("{unicode.name(c)} (U+{padl(ordval.inBase 16, 4, "0")}) "
                                                    ++ "is not a valid character; use spaces instead.")atRange(
                                                    lineNumber, linePosition, linePosition)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (mode == "\"") then {
                if (c == "\"") then {
                    if (escaped.not) then {
                        // End of string literal
                        newmode := "n"
                        inStr := false
                        if (interpString) then {
                            modechange(tokens, mode, accum)
                            modechange(tokens, ")", ")")
                            mode := newmode
                            interpString := false
                        }
                    }
                }
            } elseif {mode == "q"} then {
                if (c == "›") then {
                    //end of literal
                    newmode := "n"
                    inStr := false
                }
            }
            if (newmode != mode) then {
                // This character is the beginning of a different
                // lexical mode - process the old one now.
                modechange(tokens, mode, accum)
                if (interpdepth > 0) then {
                    if (newmode == "}") then {
                        // Find the position of the opening brace to 
                        // check if the interpolation is empty.
                        if (tokens.last.kind == "lbrace") then {
                            def suggestion = errormessages.suggestion.new
                            suggestion.deleteRange(linePosition - 1, linePosition)onLine(lineNumber)
                            errormessages.syntaxError("a string interpolation cannot be empty.")atRange(
                                lineNumber, tokens.last.linePos, linePosition)withSuggestion(suggestion)
                        }
                        modechange(tokens, ")", ")")
                        modechange(tokens, "o", "++")
                        newmode := "\""
                        inStr := true
                        interpdepth := interpdepth - 1
                    }
                }
                mode := newmode
                if (inStr) then {
                    // String accum should skip the opening quote, but
                    // other modes' should include their first
                    // character.
                    accum := ""
                } else {
                    accum := c
                }
                if (brackets.match(mode)) then {
                    modechange(tokens, mode, accum)
                    mode := "e"
                    newmode := mode
                    accum := ""
                }
            } elseif { mode == "\"" } then {
                if (c == "\n") then {
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
                if (escaped) then {
                    if (c == "n") then {
                        // Newline escape
                        accum := accum ++ "\u000a"
                    } elseif { c == "u" } then {
                        // Beginning of a four-digit Unicode escape
                        // (for a BMP codepoint).
                        unichars := 4
                        codepoint := 0
                    } elseif { c == "U" } then {
                        // Beginning of a six-digit Unicode escape
                        // (for a general codepoint).
                        unichars := 6
                        codepoint := 0
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
                        accum := accum ++ c
                    }
                    escaped := false
                } elseif { c == "\\" } then {
                    // Begin an escape sequence
                    escaped := true
                } elseif { unichars > 0 } then {
                    // There are still hex digits to read for a
                    // Unicode escape. Use the current character
                    // as a hex digit and update the codepoint
                    // being calculated with its value.
                    unichars := unichars - 1
                    codepoint := codepoint * 16
                    codepoint := codepoint + hexdecchar(c)
                    if (unichars == 0) then {
                        // At the end of the sequence construct
                        // the character in the unicode library.
                        accum := accum ++ unicode.create(codepoint)
                    }
                } elseif { c == "\{" } then {
                    if (interpString.not) then {
                        modechange(tokens, "(", "(")
                        interpString := true
                    }
                    modechange(tokens, mode, accum)
                    modechange(tokens, "o", "++")
                    modechange(tokens, "(", "(")
                    mode := "n"
                    newmode := "n"
                    accum := ""
                    inStr:= false
                    interpdepth := interpdepth + 1
                } else {
                    accum := accum ++ c
                }
            } elseif { c == "\n" } then {
                newlineFound := true
                if (mode == "q") then {
                    accum := accum ++ c
                } else {
                    // Linebreaks terminate any open tokens
                    modechange(tokens, mode, accum)
                    mode := "d"
                    newmode := "d"
                    accum := ""
                }
            } else {
                accum := accum ++ c
            }
            if (accum == "...") then {
                if (mode == "o") then {
                    modechange(tokens, "i", "...")
                    newmode := "n"
                    mode := newmode
                    accum := ""
                }
            }
            if (newlineFound) then {
                // Linebreaks increment the line counter.
                newlineFound := false
                lineNumber := lineNumber + 1
                linePosition := 0
                startPosition := 1
            }
        }
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
                    if (bigraph == ">=") then { mainBlock.apply "≥"
                    } elseif { bigraph == "<=" } then { mainBlock.apply "≤"
                    } elseif { bigraph == "!=" } then { mainBlock.apply "≠"
                    } elseif { bigraph == "[[" } then { mainBlock.apply "⟦"
                    } elseif { bigraph == "]]" } then { mainBlock.apply "⟧"
                    } elseif { bigraph == "->" } then { mainBlock.apply "→"
                    } else {
                        linePosition := linePosition - 1
                        mainBlock.apply(ch)
                        linePosition := linePosition + 1
                        mainBlock.apply(nextCh)
                    }
                } elseif { ((ch == " ") && {"dn".contains(mode)}).not } then {
                    mainBlock.apply(ch)
                }
            }
            mainBlock.apply "\n"
        }
        linePosition := linePosition + 1
        if (inStr) then {
            if (mode == "\"") then {
                def suggestion = errormessages.suggestion.new
                suggestion.addLine(lineNumber, util.lines.at(lineNumber) ++ "\"")
                errormessages.syntaxError("a string must be terminated with a \" before the end of the line.")atPosition(
                    lineNumber, linePosition)withSuggestion(suggestion)
            } elseif {mode == "q"} then {
                errormessages.syntaxError("a multi-line string must end with a '›'.\n" ++
                    "String opened on line {startLine} and unclosed at end of input.")
                    atRange(startLine, stringStart, util.lines.at(startLine).size)
            }
        }
        modechange(tokens, mode, accum)
        tokens.push(eofToken)
        tokens
    }
}


