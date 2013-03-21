#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "util" as util
import "unicode" as unicode
import "mgcollections" as collections

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

        class IdentifierToken.new(s) {
            def kind = "identifier"
            def value = s
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class StringToken.new(s) {
            def kind = "string"
            def value = s
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class OctetsToken.new(s) {
            def kind = "octets"
            def value = s
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class LBraceToken.new {
            def kind = "lbrace"
            def value = "\{"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class RBraceToken.new {
            def kind = "rbrace"
            def value = "}"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class LParenToken.new {
            def kind = "lparen"
            def value = "("
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class RParenToken.new {
            def kind = "rparen"
            def value = ")"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class LSquareToken.new {
            def kind = "lsquare"
            def value = "["
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class RSquareToken.new {
            def kind = "rsquare"
            def value = "]"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class CommaToken.new {
            def kind = "comma"
            def value = ","
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class ColonToken.new {
            def kind = "colon"
            def value = ":"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class DotToken.new {
            def kind = "dot"
            def value = "."
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class NumToken.new(v) {
            def kind = "num"
            def value = v
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class KeywordToken.new(v) {
            def kind = "keyword"
            def value = v
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class OpToken.new(v) {
            def kind = "op"
            def value = v
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class ArrowToken.new {
            def kind = "arrow"
            def value = "->"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class BindToken.new {
            def kind = "bind"
            def value = ":="
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class SemicolonToken.new {
            def kind = "semicolon"
            def value = ";"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class LGenericToken.new {
            def kind = "lgeneric"
            def value = "<"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }
        class RGenericToken.new {
            def kind = "rgeneric"
            def value = ">"
            def line = lineNumber
            def indent = indentLevel
            def linePos = startPosition
        }

        object {
            // When a new lexical class has begun, add to the tokens list
            // the token corresponding to the previous accumulated data.
            // mode is the previous lexical mode (a string), and accum the
            // accumulated characters since that mode began. Modes are:
            //   n        Whitespace       i   Identifier
            //   "        Quoted string    x   Octets literal
            //   m        Number           o   Any operator
            //   c        Comment
            //   ,.{}[] The corresponding literal character
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
                        tok := NumToken.new(accum)
                        tok := makeNumToken(accum)
                        if (tokens.size > 1) then {
                            if (tokens.last.kind == "dot") then {
                                tokens.pop
                                if (tokens.last.kind == "num") then {
                                    tok := tokens.pop
                                    tok := NumToken.new(tok.value ++ "." ++ accum)
                                } else {
                                    util.syntax_error("found ." ++ accum
                                        ++ ", expected term")
                                }
                            }
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
                        indentLevel := accum.size
                        done := true
                    } elseif (mode == "n") then {
                        done := true
                    } elseif (mode == "c") then {
                        done := true
                    } elseif (mode == "p") then {
                        if (accum.substringFrom(1)to(8) == "#pragma ") then {
                            util.processExtension(
                                accum.substringFrom(9)to(accum.size))
                        }
                    } elseif (done) then {
                        //print(mode, accum, tokens)
                    } else {
                        util.syntax_error("Lexing error: no handler for mode " ++ mode ++
                            " with accum " ++ accum)
                    }
                }
                startPosition := linePosition
            }
            def cLines = collections.list.new
            def lines = collections.list.new
            method fromBase(str, base) {
                def digits = "0123456789abcdefghijklmnopqrstuvqxyz"
                var val := 0
                for (str) do {c->
                    def n = c.ord
                    val := val * base
                    var inc := 0
                    if ((n >= 48) && (n <= 57)) then {
                        inc := n - 48 // 0
                    } else {
                        inc := n - 87 // 'a' - 10
                    }
                    if (inc >= base) then {
                        util.syntax_error("no such digit '{c}' in base {base}")
                    }
                    val := val + inc
                }
                val
            }
            method makeNumToken(accum) {
                var base := 10
                var sofar := ""
                for (accum) do {c->
                    if (c == "x") then {
                        base := sofar.asNumber
                        if (base == 0) then {
                            base := 16
                        }
                        sofar := ""
                    } else {
                        sofar := sofar ++ c
                    }
                }
                NumToken.new(fromBase(sofar, base).asString)
            }
            // True if ov is a valid identifier character. Identifier
            // characters are Unicode letters, Unicode numbers, apostrophe,
            // and (currently) underscore.
            method isidentifierchar(ov) {
                if (unicode.isLetter(ov) || unicode.isNumber(ov)
                    || (ov == 95) || (ov == 39)) then {
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
                lexinput(file.read)
            }

            method lexinput(input) {
                var tokens := []
                var mode := "n"
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
                var cline := ""
                var lineStr := ""
                linePosition := 0
                util.log_verbose("lexing.")
                util.lines := lines
                util.cLines := cLines
                for (input) do { c ->
                    linePosition := linePosition + 1
                    util.setPosition(lineNumber, linePosition)
                    var ct := ""
                    var ordval := c.ord // String.ord gives the codepoint
                    if ((unicode.isSeparator(ordval) && (ordval != 32) &&
                        (ordval != 8232)) || (ordval == 9)) then {
                        // Character is whitespace, but not an ASCII space or
                        // Unicode LINE SEPARATOR, or is a tab
                        lineStr := lineStr ++ c
                        lines.push(lineStr)
                        util.syntax_error("illegal whitespace in input: "
                            ++ "U+{padl(ordval.inBase 16, 4, "0")} "
                            ++ "({ordval}), {unicode.name(c)}")
                    }
                    if (unicode.isControl(ordval) && (ordval != 10)
                        && (ordval != 13)) then {
                        // Character is a control character other than
                        // carriage return or line feed.
                        lineStr := lineStr ++ c
                        lines.push(lineStr)
                        util.syntax_error("illegal control character in "
                            ++ "input: U+{padl(ordval.inBase 16, 4, "0")} "
                            ++ "({ordval}) on line {lineNumber}"
                            ++ " character {linePosition}.")
                    }
                    if (atStart && (linePosition == 1)) then {
                        if (c == "#") then {
                            mode := "p"
                            newmode := mode
                        } else {
                            atStart := false
                        }
                    }
                    if (instr || inBackticks) then {

                    } elseif ((mode != "c") && (mode != "p")) then {
                        // Not in a comment, so look for a mode.
                        if ((c == " ") && (mode != "d")) then {
                            newmode := "n"
                        }
                        if (c == "\"") then {
                            // Beginning of a string
                            newmode := "\""
                            instr := true
                            if (prev == "x") then {
                                // Or, actually of an Octet literal
                                newmode := "x"
                                mode := "n"
                            }
                        }
                        if (c == "`") then {
                            newmode := "I"
                            inBackticks := true
                        }
                        ct := isidentifierchar(ordval)
                        if (ct) then {
                            newmode := "i"
                        }
                        ct := ((ordval >= 48) && (ordval <=57))
                        if (ct && (mode != "i")) then {
                            newmode := "m"
                        }
                        if ((ordval >= 97) && (ordval <=122) && (mode == "m")) then {
                            newmode := "m"
                        }
                        if ((mode == "i") && (c == "<")) then {
                            newmode := "<"
                        } elseif (((mode == "i") || (mode == ">")
                            || (mode == "<"))
                            && (c == ">")) then {
                            if (mode == ">") then {
                                modechange(tokens, mode, accum)
                            }
                            newmode := ">"
                        } elseif (isoperatorchar(c, ordval)) then {
                            newmode := "o"
                        }
                        if ((c == "(") || (c == ")") || (c == ",") || (c == ".")
                            || (c == "\{") || (c == "}") || (c == "[")
                            || (c == "]") || (c == ";")) then {
                            newmode := c
                        }
                        if ((c == "#") && (mode != "p")) then {
                            lineStr := lineStr ++ c
                            lines.push(lineStr)
                            util.syntax_error("illegal operator character"
                                ++ ": #{ordval}"
                                ++ " '{c}', {unicode.name(c)}")
                        }
                        if ((c == ".") && (accum == ".")) then {
                            // Special handler for .. operator
                            mode := "o"
                            newmode := mode
                        }
                        if ((c == "/") && (accum == "/")) then {
                            // Start of comment
                            mode := "c"
                            newmode := mode
                        }
                        if ((newmode == mode) && (mode == "n")
                            && (unicode.isSeparator(ordval).not)
                            && (unicode.isControl(ordval).not)) then {
                            if ((unicode.isSeparator(ordval).not)
                                && (ordval != 10) && (ordval != 13)
                                && (ordval != 32)) then {
                                lineStr := lineStr ++ c
                                lines.push(lineStr)
                                util.syntax_error("unknown character in "
                                    ++ "input: #{ordval}"
                                    ++ " '{c}', {unicode.name(c)}")
                            }
                        }
                        if ((c == ".") && (accum == "..")) then {
                            // Special handler for ... identifier
                            mode := "n"
                            newmode := mode
                            modechange(tokens, "i", "...")
                            accum := ""
                        }
                    }
                    if ((mode == "x") && (c == "\"") && (escaped.not)) then {
                        // End of octet literal
                        newmode := "n"
                        instr := false
                    }
                    if ((mode == "\"") && (c == "\"") && (escaped.not)) then {
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
                    if ((mode == "I") && (inBackticks) && (c == "`")) then {
                        // End of backticked identifier
                        newmode := "n"
                        inBackticks := false
                        backtickIdent := true
                    }
                    if (newmode != mode) then {
                        // This character is the beginning of a different
                        // lexical mode - process the old one now.
                        modechange(tokens, mode, accum)
                        if ((newmode == "}") && (interpdepth > 0)) then {
                            modechange(tokens, ")", ")")
                            modechange(tokens, "o", "++")
                            newmode := "\""
                            instr := true
                            interpdepth := interpdepth - 1
                        }
                        mode := newmode
                        if (instr || inBackticks) then {
                            // String accum should skip the opening quote, but
                            // other modes' should include their first
                            // character.
                            accum := ""
                        } else {
                            accum := c
                        }
                        if ((mode == "(") || (mode == ")") || (mode == "[")
                            || (mode == "]") || (mode == "\{")
                            || (mode == "}")) then {
                            modechange(tokens, mode, accum)
                            mode := "n"
                            newmode := "n"
                            accum := ""
                        }
                        backtickIdent := false
                    } elseif (instr) then {
                        if (c == "\n") then {
                            if (interpdepth > 0) then {
                                lineStr := lineStr ++ c
                                lines.push(lineStr)
                                util.syntax_error("Runaway string "
                                    ++ "interpolation")
                            } else {
                                lineStr := lineStr ++ c
                                lines.push(lineStr)
                                util.syntax_error("Newlines not permitted "
                                    ++ "in string literals")
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
                    } elseif (inBackticks) then {
                        if (c == "\n") then {
                            lineStr := lineStr ++ c
                            lines.push(lineStr)
                            util.syntax_error("Newlines not permitted in"
                                ++ "backtick identifiers")
                        }
                        accum := accum ++ c
                    } elseif ((c == "\n") || (c == "\r")) then {
                        // Linebreaks terminate any open tokens
                        modechange(tokens, mode, accum)
                        mode := "d"
                        newmode := "d"
                        accum := ""
                        if (c != "\r") then {
                            cLines.push(cline)
                            cline := ""
                            lines.push(lineStr)
                            lineStr := ""
                        }
                    } else {
                        accum := accum ++ c
                    }
                    if ((accum == "...") && {mode == "o"}) then {
                            modechange(tokens, "i", "...")
                            newmode := "n"
                            mode := newmode
                            accum := ""
                    }
                    if (c == "\n") then {
                        // Linebreaks increment the line counter and insert a
                        // special "line" token, which the parser can use to
                        // track the origin of AST nodes for later error
                        // reporting.
                        lineNumber := lineNumber + 1
                        linePosition := 0
                        startPosition := 1
                        util.setPosition(lineNumber, 0)
                    } elseif (c == "\r") then {
                    } else {
                        if (c == "\"") then {
                            cline := cline ++ "\\\""
                        } else {
                            if (c == "\\") then {
                                cline := cline ++ "\\\\"
                            } else {
                                cline := cline ++ c
                            }
                        }
                        lineStr := lineStr ++ c
                    }
                    prev := c
                }
                // If file doesn't end in newline, add last line to the collection of lines.
                if ((prev != "\n") && (prev != "\r")) then {
                    cLines.push(cline)
                    lines.push(lineStr)
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
