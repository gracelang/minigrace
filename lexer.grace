#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "util" as util
import "unicode" as unicode
import "mgcollections" as collections
import "errormessages" as errormessages

// Return the numeric value of the single hexadecimal character c.
method hexdecchar(c) {
    var chars := ["0", "1", "2", "3", "4", "5", "6", "7", "8",
                 "9", "a", "b", "c", "d", "e", "f"]
    var ret := 0
    var i := 0
    for (chars) do {cr->
        if (cr == c) then {
            ret := i
        }
        i := i + 1
    }
    ret
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

def LexerClass = object {
    method new {
        var lineNumber := 1
        var linePosition := 0
        var startPosition := 1
        var indentLevel := 0

        class Token.new() {
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition

            var next := false
            var prev := false

            method ==(other) {
                if(other == false) then {
                    false
                } else {
                    (other.line == line) && (other.linePos == linePos)
                }
            }
        }

        class IdentifierToken.new(s) {
            inherits Token.new
            def kind = "identifier"
            def value = s
            def size = s.size
        }
        class StringToken.new(s) {
            inherits Token.new
            def kind = "string"
            def value = s
            def size = s.size + 2
        }
        class CommentToken.new(s) {
            inherits Token.new
            def kind = "comment"
            def value = s
            def size = s.size + 2
        }
        class OctetsToken.new(s) {
            inherits Token.new
            def kind = "octets"
            def value = s
            def size = s.size + 3
        }
        class LBraceToken.new {
            inherits Token.new
            def kind = "lbrace"
            def value = "\{"
            def size = 1
        }
        class RBraceToken.new {
            inherits Token.new
            def kind = "rbrace"
            def value = "}"
            def size = 1
        }
        class LParenToken.new {
            inherits Token.new
            def kind = "lparen"
            def value = "("
            def size = 1
        }
        class RParenToken.new {
            inherits Token.new
            def kind = "rparen"
            def value = ")"
            def size = 1
        }
        class LSquareToken.new {
            inherits Token.new
            def kind = "lsquare"
            def value = "["
            def size = 1
        }
        class RSquareToken.new {
            inherits Token.new
            def kind = "rsquare"
            def value = "]"
            def size = 1
        }
        class CommaToken.new {
            inherits Token.new
            def kind = "comma"
            def value = ","
            def size = 1
        }
        class ColonToken.new {
            inherits Token.new
            def kind = "colon"
            def value = ":"
            def size = 1
        }
        class DotToken.new {
            inherits Token.new
            def kind = "dot"
            def value = "."
            def size = 1
        }
        class NumToken.new(v, b) {
            inherits Token.new
            def kind = "num"
            def value = v
            def base = b
            def size = linePosition - startPosition
        }
        class KeywordToken.new(v) {
            inherits Token.new
            def kind = "keyword"
            def value = v
            def size = v.size
        }
        class OpToken.new(v) {
            inherits Token.new
            def kind = "op"
            def value = v
            def size = v.size
        }
        class ArrowToken.new {
            inherits Token.new
            def kind = "arrow"
            def value = "->"
            def size = 2
        }
        class BindToken.new {
            inherits Token.new
            def kind = "bind"
            def value = ":="
            def size = 2
        }
        class SemicolonToken.new {
            inherits Token.new
            def kind = "semicolon"
            def value = ";"
            def size = 1
        }
        class LGenericToken.new {
            inherits Token.new
            def kind = "lgeneric"
            def value = "<"
            def size = 1
        }
        class RGenericToken.new {
            inherits Token.new
            def kind = "rgeneric"
            def value = ">"
            def size = 1
        }

        object {
            // When a new lexical class has begun, add to the tokens list
            // the token corresponding to the previous accumulated data.
            // mode is the previous lexical mode (a string), and accum the
            // accumulated characters since that mode began. Modes are:

            //   n           Whitespace       i   Identifier
            //   "           Quoted string    x   Octets literal
            //   m           Number           o   Any operator
            //   p           Pragma           d   Indentation
            //   c           Comment
            //   ,.{}()[]<>; The corresponding literal character
            //
            // There are three special cases for mode o. If accum is "->",
            // ":=", or "=", the corresponding special token is created.
            // For mode i, a keyword token is created for an identifier
            // whose name is a reserved keyword.
            method modechange(tokens, mode, accum) {
                var done := false
                var tok := 0
                if ((mode != "n") || (accum.size > 0)) then {
                    if (mode == "i") then {
                        tok := IdentifierToken.new(accum)
                        if ((accum == "object") || (accum == "method")
                            || (accum == "var") || (accum == "type")
                            || (accum == "import") || (accum == "class")
                            || (accum == "return") || (accum == "def")
                            || (accum == "inherits") || (accum == "is")
                            || (accum == "dialect")) then {
                            tok := KeywordToken.new(accum)
                        }
                        tokens.push(tok)
                        done := true
                    }
                    if (mode == "I") then {
                        tok := IdentifierToken.new(accum)
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "\"") then {
                        tok := StringToken.new(accum)
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "x") then {
                        tok := OctetsToken.new(accum)
                        tokens.push(tok)
                        done := true
                    } elseif (mode == ",") then {
                        tok := CommaToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == ".") then {
                        tok := DotToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "\{") then {
                        tok := LBraceToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "}") then {
                        tok := RBraceToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "(") then {
                        tok := LParenToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == ")") then {
                        tok := RParenToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "[") then {
                        tok := LSquareToken.new
                        tokens.push(tok)
                        done := true
                    }
                    if (mode == "]") then {
                        tok := RSquareToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "<") then {
                        tok := LGenericToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == ">") then {
                        tok := RGenericToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == ";") then {
                        tok := SemicolonToken.new
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "m") then {
                        if ((tokens.size > 1).andAlso {tokens.last.kind == "dot"}) then {
                            def dot = tokens.pop
                            if (tokens.last.kind == "num") then {
                                if (tokens.last.base == 10) then {
                                    tok := tokens.pop
                                    var decimal := makeNumToken(accum)
                                    if(decimal.base == 10) then {
                                        tok := NumToken.new(tok.value ++ "." ++ accum, 10)
                                    } else {
                                        def suggestions = []
                                        var suggestion := errormessages.suggestion.new
                                        suggestion.replaceRange(dot.linePos + 1, linePosition - 1)with(decimal.value)onLine(lineNumber)
                                        suggestions.push(suggestion)
                                        suggestion := errormessages.suggestion.new
                                        suggestion.deleteRange(dot.linePos, linePosition - 1)onLine(lineNumber)
                                        suggestions.push(suggestion)
                                        errormessages.syntaxError("The fractional part of a number must be in base 10.")atRange(
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
                                    errormessages.syntaxError("A number in base {tokens.last.base} cannot have a fractional part.")atRange(
                                        lineNumber, dot.linePos, linePosition - 1)withSuggestions(suggestions)
                                }
                            } else {
                                if(tokens.last.kind == "string") then {
                                    def suggestion = errormessages.suggestion.new
                                    suggestion.replaceChar(dot.linePos)with("++")onLine(dot.line)
                                    errormessages.syntaxError("A number may only follow a '.' if there is a number before the '.'. "
                                        ++ "To join a number to a string, use '++'.")atRange(
                                        dot.line, dot.linePos, dot.linePos)withSuggestion(suggestion)
                                } elseif((tokens.last.kind == "op") || (tokens.last.kind == "bind")) then {
                                    def suggestion = errormessages.suggestion.new
                                    suggestion.insert("0")atPosition(dot.linePos)onLine(dot.line)
                                    errormessages.syntaxError("A number must have a digit before the decimal point.")atPosition(
                                        dot.line, dot.linePos)withSuggestion(suggestion)
                                } elseif(tokens.last.kind == "identifier") then {
                                    def suggestions = []
                                    if(tokens.last.value == "o") then {
                                        def suggestion = errormessages.suggestion.new
                                        suggestion.replaceChar(tokens.last.linePos)with("0")onLine(tokens.last.line)
                                        suggestions.push(suggestion)
                                    }
                                    def suggestion = errormessages.suggestion.new
                                    suggestion.replaceRange(dot.linePos, linePosition - 1)with("({accum})")onLine(tokens.last.line)
                                    suggestions.push(suggestion)
                                    errormessages.syntaxError("A number may only follow a '.' if there is a number before the '.'.")atRange(
                                        dot.line, dot.linePos, dot.linePos)withSuggestions(suggestions)
                                } else {
                                    errormessages.syntaxError("A number may only follow a '.' if there is a number before the '.'.")atRange(
                                        dot.line, dot.linePos, dot.linePos)
                                }
                            }
                        } else {
                            tok := makeNumToken(accum)
                        }
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "o") then {
                        tok := OpToken.new(accum)
                        if (accum == "->") then {
                            tok := ArrowToken.new
                        } elseif (accum == ":=") then {
                            tok := BindToken.new
                        } elseif (accum == ":") then {
                            tok := ColonToken.new
                        }
                        tokens.push(tok)
                        done := true
                    } elseif (mode == "d") then {
                        indentLevel := linePosition - 1//accum.size
                        done := true
                    } elseif (mode == "n") then {
                        done := true
                    } elseif (mode == "c") then {
                        def cmt = accum.substringFrom(3)to(accum.size)
                        tokens.push(CommentToken.new(cmt))
                        done := true
                    } elseif (mode == "p") then {
                        if (accum.substringFrom(1)to(8) == "#pragma ") then {
                            util.processExtension(
                                accum.substringFrom(9)to(accum.size))
                        }
                    } elseif (done) then {
                        //print(mode, accum, tokens)
                    } else {
                        errormessages.syntaxError("Lexing error: no handler for mode {mode} with accum {accum}.")atPosition(lineNumber, linePosition)
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
                    } elseif((n >= 65) && (n <= 90)) then {
                        inc := n - 55 // 'A' - 10
                    } else {
                        inc := n - 87 // 'a' - 10
                    }
                    if (inc >= base) then {
                        if((str[1] == "0") && (inc < 16)) then {
                            def suggestion = errormessages.suggestion.new
                            suggestion.insert("x")atPosition(linePosition - str.size + 1)onLine(lineNumber)
                            errormessages.syntaxError("A number in base 16 must start with '0x'.")atPosition(
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
                            errormessages.syntaxError("Base {base} is not a valid numerical base.")atRange(
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
                    errormessages.syntaxError("At least one digit must follow the 'x' in a number.")atPosition(
                        lineNumber, linePosition - accum.size + i)withSuggestions(suggestions)
                }
                NumToken.new(fromBase(sofar, base).asString, base)
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
                if ((c == "-") || (c == "&") || (c == "|") || (c == ":")
                    || (c == "%") || (c == "^") || (c == "@") || (c == "?")
                    || (c == "*") || (c == "/") || (c == "+") || (c == "!")
                    ) then {
                    return true
                }
                if (unicode.isSymbolMathematical(ordval)) then {
                    return true
                } elseif (unicode.iscategory(c, "So")) then {
                    return true
                }
                return false
            }

            // Read the program text from util.infile and return a list of
            // tokens.
            method lexfile(file) {
                util.log_verbose("reading source.")
                def lines = []
                def cLines = []
                var line := ""
                var cLine := ""
                var source := ""
                for(file.read) do { c ->
                    if((c == "\n") || (c == "\l")) then {
                        lines.push(line)
                        cLines.push(cLine)
                        line := ""
                        cLine := ""
                    } elseif(c == "\r") then {
                    } elseif(c == "\\") then {
                        line := line ++ "\\"
                        cLine := cLine ++ "\\\\"
                    } elseif(c == "\"") then {
                        line := line ++ "\""
                        cLine := cLine ++ "\\\""
                    } else {
                        line := line ++ c
                        cLine := cLine ++ c
                    }
                    source := source ++ c
                }
                if(line != "") then {
                    lines.push(line)
                    cLines.push(cLine)
                }
                util.lines := lines
                util.cLines := cLines
                lexinput(source)
            }

            method lexinput(input) {
                // tokens is a doubly-linked list of tokens.
                var tokens := object {
                    var first := false
                    var last := false
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
                }

                var mode := "d"
                var newmode := mode
                var instr := false
                var inBackticks := false
                var backtickIdent := false
                var accum := ""
                var escaped := false
                var prev := ""
                var unichars := 0
                var codepoint := 0
                var interpdepth := 0
                var interpString := false
                var atStart := true
                linePosition := 0
                util.log_verbose("lexing.")
                def badSeparator = unicode.pattern("Z", 9)not(32, 8232)
                def badControl =  unicode.pattern("C")not(10, 13)
                def selfModes = unicode.pattern("(".ord, ")".ord, ",".ord,
                    ".".ord, "\{".ord, "}".ord, "[".ord, "]".ord, ";".ord)
                def brackets = unicode.pattern("(".ord, ")".ord,
                    "\{".ord, "}".ord, "[".ord, "]".ord)
                def identifierChar = unicode.pattern("L", "N", 95, 39)
                def digit = unicode.pattern("0".ord, "1".ord, "2".ord, "3".ord,
                    "4".ord, "5".ord, "6".ord, "7".ord, "8".ord, "9".ord)
                def digitB = unicode.pattern("0".ord, "1".ord, "2".ord, "3".ord,
                    "4".ord, "5".ord, "6".ord, "7".ord, "8".ord, "9".ord)
                def operatorChar = unicode.pattern("Sm", "So",
                    "-".ord, "&".ord, "|".ord, ":".ord,
                   "%".ord, "^".ord, "@".ord, "?".ord,
                   "*".ord, "/".ord, "+".ord, "!".ord
                    )
                def iGTLT = unicode.pattern("i".ord, "<".ord, ">".ord)
                def notcp = unicode.pattern()not("c".ord, "p".ord)
                def mainBlock = { c->
                    var ct := ""
                    var ordval := c.ord // String.ord gives the codepoint
                    if (badSeparator.match(ordval)) then {
                        // Character is whitespace, but not an ASCII space or
                        // Unicode LINE SEPARATOR, or is a tab
                        def suggestion = errormessages.suggestion.new
                        suggestion.replaceChar(linePosition)with(" ")onLine(lineNumber)
                        if(ordval == 9) then {
                            if (instr) then {
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
                            errormessages.syntaxError("Tabs are not allowed; use spaces instead.")atRange(lineNumber,
                                linePosition, linePosition)withSuggestion(suggestion)
                        } else {
                            if (instr) then {
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
                    }
                    if (badControl.match(ordval)) then {
                        // Character is a control character other than
                        // carriage return or line feed.
                        def suggestion = errormessages.suggestion.new
                        if (instr) then {
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
                    if (instr) then {

                    } elseif ((mode != "c") && (mode != "p")) then {
                        // Not in a comment, so look for a mode.
                        if ((c == " ") && (mode != "d")) then {
                            newmode := "n"
                        }
                        if (c == "\"") then {
                            // Beginning of a string
                            newmode := "\""
                            instr := true
                        }
                        if (identifierChar.match(ordval)) then {
                            newmode := "i"
                        }
                        ct := ((ordval >= 48) && (ordval <=57))
                        if (digit.match(ordval)) then {
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
                        if ((mode == "i") && (c == "<")) then {
                            newmode := "<"
                        } elseif (iGTLT.match(mode)
                            && (c == ">")) then {
                            if (mode == ">") then {
                                modechange(tokens, mode, accum)
                            }
                            newmode := ">"
                        } elseif (operatorChar.match(ordval)) then {
                            newmode := "o"
                        }
                        if (selfModes.match(ordval)) then {
                            newmode := c
                        }
                        if (c == "#") then {
                            if (mode != "p") then {
                                if(util.lines.at(lineNumber).substringFrom(1)to(7) == "#pragma") then {
                                    if(tokens.size == 0) then {
                                        def suggestion = errormessages.suggestion.new
                                        suggestion.addLine(1, util.lines.at(lineNumber))
                                        suggestion.addLine(lineNumber, "")
                                        errormessages.syntaxError("Pragma directives must be at the start of the file.")atLine(
                                            lineNumber)withSuggestion(suggestion)
                                    } else {
                                        errormessages.syntaxError("Pragma directives must be at the start of the file.")atLine(
                                            lineNumber)
                                    }
                                } else {
                                    def suggestion = errormessages.suggestion.new
                                    suggestion.replaceChar(linePosition)with("//")onLine(lineNumber)
                                    errormessages.syntaxError("'#' is not allowed here. For a comment use '//'.")atRange(
                                        lineNumber, linePosition, linePosition)withSuggestion(suggestion)
                                }
                            }
                        }
                        if (c == ".") then {
                            if (accum == ".") then {
                                // Special handler for .. operator
                                mode := "o"
                                newmode := mode
                            }
                            if (accum == "..") then {
                                // Special handler for ... identifier
                                mode := "n"
                                newmode := mode
                                modechange(tokens, "i", "...")
                                accum := ""
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
                                instr := false
                                if (interpString) then {
                                    modechange(tokens, mode, accum)
                                    modechange(tokens, ")", ")")
                                    mode := newmode
                                    interpString := false
                                }
                            }
                        }
                    }
                    if (newmode != mode) then {
                        // This character is the beginning of a different
                        // lexical mode - process the old one now.
                        modechange(tokens, mode, accum)
                        if (interpdepth > 0) then {
                            if (newmode == "}") then {
                                // Find the position of the opening brace to check in the interpolation is empty.
                                if (util.lines.at(tokens.last.line)[tokens.last.linePos] == "\{") then {
                                    def suggestion = errormessages.suggestion.new
                                    suggestion.deleteRange(linePosition - 1, linePosition)onLine(lineNumber)
                                    errormessages.syntaxError("A string interpolation cannot be empty.")atRange(
                                        lineNumber, tokens.last.linePos, linePosition)withSuggestion(suggestion)
                                }
                                modechange(tokens, ")", ")")
                                modechange(tokens, "o", "++")
                                newmode := "\""
                                instr := true
                                interpdepth := interpdepth - 1
                            }
                        }
                        mode := newmode
                        if (instr) then {
                            // String accum should skip the opening quote, but
                            // other modes' should include their first
                            // character.
                            accum := ""
                        } else {
                            accum := c
                        }
                        if (brackets.match(mode)) then {
                            modechange(tokens, mode, accum)
                            mode := "n"
                            newmode := "n"
                            accum := ""
                        }
                    } elseif (instr) then {
                        if (c == "\n") then {
                            if (interpdepth > 0) then {
                                // Find closest {.
                                var line := lineNumber
                                var i := util.lines.at(line).size
                                while { util.lines.at(line)[i] != "\{" } do {
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
                                    errormessages.syntaxError("For a '\{' character in a string use '\\\{'.")atPosition(
                                        line, i)withSuggestions(suggestions)
                                } else {
                                    suggestion := errormessages.suggestion.new
                                    suggestion.insert("}")atPosition(linePosition - accum.size - 1)onLine(lineNumber)
                                    suggestions.push(suggestion)
                                    errormessages.syntaxError("A string interpolation must end with a '}'. For a '\{' character in a string use '\\\{'.")atPosition(
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
                                    if(nextLine[i] == "\"") then { count := count + 1 }
                                    elseif(nextLine[i] == "\\") then { i := i + 1 }
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
                                    errormessages.syntaxError("A string must end with a '\"'. To insert a newline in a string use '\\n'. "
                                        ++ "To split a string over multiple lines use '++' to join strings together.")atRange(
                                        lineNumber, linePosition, linePosition)withSuggestions(suggestions)
                                } else {
                                    def suggestion = errormessages.suggestion.new
                                    suggestion.addLine(lineNumber, errorLine ++ "\"")
                                    errormessages.syntaxError("A string must end with a '\"'.")atPosition(
                                        lineNumber, linePosition)withSuggestion(suggestion)
                                }
                            }
                        }
                        if (escaped) then {
                            if (c == "n") then {
                                // Newline escape
                                accum := accum ++ "\u000a"
                            } elseif (c == "u") then {
                                // Beginning of a four-digit Unicode escape
                                // (for a BMP codepoint).
                                unichars := 4
                                codepoint := 0
                            } elseif (c == "U") then {
                                // Beginning of a six-digit Unicode escape
                                // (for a general codepoint).
                                unichars := 6
                                codepoint := 0
                            } elseif (c == "t") then {
                                // Tab escape
                                accum := accum ++ "\u0009"
                            } elseif (c == "r") then {
                                // Carriage return escape
                                accum := accum ++ "\u000d"
                            } elseif (c == "b") then {
                                // Backspace escape
                                accum := accum ++ "\u0008"
                            } elseif (c == "l") then {
                                // LINE SEPARATOR escape
                                accum := accum ++ "\u2028"
                            } elseif (c == "f") then {
                                // Form feed/"page down" escape
                                accum := accum ++ "\u000c"
                            } elseif (c == "e") then {
                                // Escape escape
                                accum := accum ++ "\u001b"
                            } else {
                                // For any other character preceded by \,
                                // insert it literally.
                                accum := accum ++ c
                            }
                            escaped := false
                        } elseif (c == "\\") then {
                            // Begin an escape sequence
                            escaped := true
                        } elseif (unichars > 0) then {
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
                        } elseif (c == "\{") then {
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
                            instr := false
                            interpdepth := interpdepth + 1
                        } else {
                            accum := accum ++ c
                        }
                    } elseif ((c == "\n") || (c == "\r")) then {
                        // Linebreaks terminate any open tokens
                        modechange(tokens, mode, accum)
                        mode := "d"
                        newmode := "d"
                        accum := ""
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
                    if (c == "\n") then {
                        // Linebreaks increment the line counter and insert a
                        // special "line" token, which the parser can use to
                        // track the origin of AST nodes for later error
                        // reporting.
                        lineNumber := lineNumber + 1
                        linePosition := 0
                        startPosition := 1
                    }
                }
                for (input) do { c ->
                    linePosition := linePosition + 1
                    if (c == " ") then {
                        if (mode == "d") then {
                        } else {
                            if (mode != "n") then {
                                mainBlock.apply(c)
                            }
                        }
                    } else {
                        mainBlock.apply(c)
                    }
                    prev := c
                }
                linePosition := linePosition + 1
                if (instr) then {
                    if (mode == "\"") then {
                        def suggestion = errormessages.suggestion.new
                        suggestion.addLine(lineNumber, util.lines.at(lineNumber) ++ "\"")
                        errormessages.syntaxError("A string must end with a '\"'.")atPosition(
                            lineNumber, linePosition)withSuggestion(suggestion)
                    }
                    if (mode == "x") then {
                        errormessages.syntaxError("Unfinished octets literal, expected '\"'.")atPosition(lineNumber, linePosition)
                    }
                }
                modechange(tokens, mode, accum)
                tokens
            }
        }
    }
}

method Lexer {
    LexerClass
}
