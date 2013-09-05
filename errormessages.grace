#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "util" as util

// Contains modified lines used as suggestions for error messages.
// When a line is added using one of the utility methods such as
// insert()afterToken()onLine(), the line is copied from util.lines to the
// internal lines array in the suggestion, and when a line that is already in
// the array is modified, the internal lines array is updated.
// There is no sorting of the order of the lines at any point, so
// lines must be added in ascending order.
class suggestion.new() {

    def lineNumbers is confidential = []
    def lines is confidential = []

    // Methods that deal with inserting/replacing/deleting character positions
    // and ranges. These methods are usually called by lexing error messages
    // due to lack of access to tokens, and by insert/replace/delete methods
    // that operate on tokens.

    method replaceRange(start, end)with(s)onLine(lineNumber) {
        def line = getLine(lineNumber)
        if(start == 1) then {
            addLine(lineNumber, s ++ line.substringFrom(end + 1)to(line.size))
        } else {
            addLine(lineNumber, line.substringFrom(1)to(start - 1)
                ++ s ++ line.substringFrom(end + 1)to(line.size))
        }
    }

    method replaceChar(pos)with(s)onLine(lineNumber) {
        replaceRange(pos, pos)with(s)onLine(lineNumber)
    }

    method deleteRange(start, end)onLine(lineNumber) {
        var start' := start
        def line = getLine(lineNumber)
        if((start' > 1) && (end == line.size)) then {
            // Check for removing the whole line, then remove the indent also.
            var indent := true
            for(1..(start'-1)) do { i ->
                if(line[i] != " ") then {
                    indent := false
                }
            }
            if(indent == true) then {
                start' := 1
            }
        }
        replaceRange(start', end)with("")onLine(lineNumber)
    }

    method deleteChar(pos)onLine(lineNumber) {
        replaceRange(pos, pos)with("")onLine(lineNumber)
    }

    method insert(s)atPosition(pos)onLine(lineNumber) {
        def line = getLine(lineNumber)
        if(pos == 1) then {
            addLine(lineNumber, s ++ line)
        } else {
            addLine(lineNumber, line.substringFrom(1)to(pos - 1) ++ s
                ++ line.substringFrom(pos)to(line.size))
        }
    }

    // Methods that deal with inserting/replacing/deleteing tokens or ranges of
    // tokens. These methods call the underlying methods that operate on
    // characters.

    method getTokenStart(token)includeLeadingSpace(includeLeading) {
        var start := token.linePos
        // Include leading whitespace.
        if(includeLeading == true) then {
            if((token.prev != false).andAlso({token.prev.line == token.line})) then {
                start := token.prev.linePos + token.prev.size
            }
        }
        // Include indentation if this is the only token on the line.
        if(token.linePos == (token.indent + 1)) then {
            if((token.next == false).orElse({token.next.line != token.line})) then {
                start := 1
            }
        }
        start
    }

    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {
        var end := token.linePos + token.size - 1
        // Include trailing space.
        if(includeTrailing == true) then {
            if((token.next != false).andAlso({token.next.line == token.line})) then {
                end := token.next.linePos - 1;
            } else {
                end := getLine(token.line).size
            }
        }
        end
    }

    method replaceToken(token)leading(replaceLeading)trailing(replaceTrailing)with(s) {
        def start = getTokenStart(token)includeLeadingSpace(replaceLeading)
        def end = getTokenEnd(token)includeTrailingSpace(replaceTrailing)
        replaceRange(start, end)with(s)onLine(token.line)
    }

    method replaceToken(token)with(s) {
        replaceToken(token)leading(false)trailing(false)with(s)
    }

    method replaceTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)with(s) {
        if(start == end) then {
            replaceToken(start)leading(replaceLeading)trailing(replaceTrailing)with(s)
        } else {
            // Get the ident and position now in case deleteTokenRange changes it.
            def insertPos = getTokenStart(start)includeLeadingSpace(replaceLeading)
            def indent = getLine(start.line).substringFrom(1)to(start.indent)
            deleteTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)
            // If delete token range deleted the indent, then add it back.
            if(getLine(start.line) == "") then {
                insert(indent ++ s)atPosition(insertPos)onLine(start.line)
            } else {
                insert(s)atPosition(insertPos)onLine(start.line)
            }
        }
    }

    method replaceTokenRange(start, end)with(s) {
        replaceTokenRange(start, end)leading(false)trailing(false)with(s)
    }

    // Deletes a token, and optionally leading and/or trailing spaces.
    method deleteToken(token)leading(deleteLeading)trailing(deleteTrailing) {
        def start = getTokenStart(token)includeLeadingSpace(deleteLeading)
        def end = getTokenEnd(token)includeTrailingSpace(deleteTrailing)
        deleteRange(start, end)onLine(token.line)
    }

    method deleteToken(token) {
        deleteToken(token)leading(false)trailing(false)
    }

    // Deletes a range of tokens, and optionally leading and/or trailing spaces.
    method deleteTokenRange(start, end)leading(deleteLeading)trailing(deleteTrailing) {
        if(start == end) then {
            deleteToken(start)leading(deleteLeading)trailing(deleteTrailing)
        } else {
            var line := start.line
            var startPos := getTokenStart(start)includeLeadingSpace(deleteLeading)
            var endPos := getTokenEnd(start)includeTrailingSpace(deleteTrailing)
            var tok := start.next
            while {tok != end} do {
                if(tok.line != line) then {
                    deleteRange(startPos, endPos)onLine(line)
                    line := tok.line
                    startPos := getTokenStart(tok)includeLeadingSpace(deleteLeading)
                }
                endPos := getTokenEnd(tok)includeTrailingSpace(deleteTrailing)
                tok := tok.next
            }
            if(end.line != line) then {
                deleteRange(startPos, endPos)onLine(line)
            }
            endPos := getTokenEnd(end)includeTrailingSpace(deleteTrailing)
            deleteRange(startPos, endPos)onLine(end.line)
        }
    }

    method deleteTokenRange(start, end) {
        deleteTokenRange(start, end)leading(false)trailing(false)
    }

    method deleteLine(lineNumber) {
        addLine(lineNumber, "")
    }

    method insert(s)afterToken(token)andTrailingSpace(afterTrailing) {
        def pos = getTokenEnd(token)includeTrailingSpace(afterTrailing) + 1
        insert(s)atPosition(pos)onLine(token.line)
    }

    method insert(s)afterToken(token) {
        insert(s)afterToken(token)andTrailingSpace(false)
    }

    method insert(s)beforeToken(token) {
        insert(s)atPosition(token.linePos)onLine(token.line)
    }

    // Insert a new line. This stores the line with the same number as the line it comes after.
    method insertNewLine(line)after(lineNumber) {
        addLine(lineNumber, line)
    }

    // Manually add a line to the suggestion. This will overwrite any previous
    // changes that may have been made to this line.
    method addLine(lineNumber, line) {
        var i := findLine(lineNumber)
        if(i != false) then {
            lines.at(i)put(line)
        } else {
            // Add new lines to make the list big enough.
            lineNumbers.push(lineNumber)
            lines.push(line)
            if(lines.size > 1) then {
                // Re-order the list.
                i := lines.size
                while {(i > 1).andAlso({lineNumber < lineNumbers[i - 1]})} do {
                    lineNumbers[i] := lineNumbers[i - 1]
                    lines[i] := lines[i - 1]
                    i := i - 1
                }
                lineNumbers[i] := lineNumber
                lines[i] := line
            }
        }
    }

    // Internal method used to find the index of a line in the lines array.
    // Returns false if the line is not found.
    method findLine(lineNumber) is confidential {
        for(lineNumbers.indices) do { i ->
            if(lineNumbers[i] == lineNumber) then {
                return i
            }
        }
        false
    }

    // Internal method used to get the contents of a line so far.
    // If the line is not part of this suggestion then it gets the unmodified line.
    method getLine(lineNumber) is confidential {
        def i = findLine(lineNumber)
        if(i == false) then {
            util.lines[lineNumber]
        } else {
            lines[i]
        }
    }

    method print() {
        for(1..lines.size) do { i ->
            if((i > 1).andAlso {(lineNumbers[i] > (lineNumbers[i-1] + 1))}) then {
                var s := ""
                for(1..lineNumbers[i-1].asString.size) do {
                    s := s ++ " "
                }
                io.error.write("    {s}...\n")
            }
            // Handle insertion of new lines.
            if(lineNumbers[i].truncate != lineNumbers[i]) then {
                io.error.write(" *{lineNumbers[i].truncate}: {lines[i]}\n")
            } else {
                io.error.write("  {lineNumbers[i]}: {lines[i]}\n")
            }
        }
    }
}

// Implemented http://en.wikipedia.org/wiki/Levenshtein_distance#Iterative_with_two_matrix_rows
method levenshtein(s, t) {
    if(s == t) then { return 0 }
    if(s.size == 0) then { return t.size }
    if(t.size == 0) then { return s.size }

    def v0 = PrimitiveArray.new(t.size + 1)
    def v1 = PrimitiveArray.new(t.size + 1)

    for(0..(v0.size - 1)) do { i ->
        v0[i] := i
        v1[i] := 0
    }

    for(0..(s.size - 1)) do { i ->
        v1[0] := i + 1
        for(0..(t.size - 1)) do { j ->
            def cost = if(s[i + 1] == t[j + 1]) then { 0 } else { 1 }
            v1[j + 1] := min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost)
        }

        for (0..(v0.size - 1)) do { j ->
            v0[j] := v1[j]
        }
    }

    v1[t.size]
}

// Return the minimum number from the given arguments.
method min(*n) {
    if(n.size > 0) then {
        var m := n[1]
        for (n) do { i ->
            if(i < m) then { m := i }
        }
        m
    }
}

// Methods to actually display an error message and suggestions, then exit.
method syntaxError(message)atRange(errlinenum, startpos, endpos) {
    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([])
}

method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestion(suggestion') {
    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([suggestion'])
}

method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {
    var loc := if(startpos == endpos) then {startpos.asString} else { "{startpos}-{endpos}" }
    var arr := "----"
    for (2..(startpos + errlinenum.asString.size)) do {
        arr := arr ++ "-"
    }
    for (startpos..endpos) do {
        arr := arr ++ "^"
    }
    util.syntaxError(message, errlinenum, ":{loc}", arr, false, suggestions)
}

method syntaxError(message)atPosition(errlinenum, errpos) {
    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([])
}

method syntaxError(message)atPosition(errlinenum, errpos)withSuggestion(suggestion') {
    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([suggestion'])
}

method syntaxError(message)atPosition(errlinenum, errpos)withSuggestions(suggestions) {
    var arr := "----"
    for (2..(errpos + errlinenum.asString.size)) do {
        arr := arr ++ "-"
    }
    arr := arr ++ "^"
    util.syntaxError(message, errlinenum, ":({errpos})", arr, errpos, suggestions)
}

method syntaxError(message)atLine(errlinenum) {
    syntaxError(message)atLine(errlinenum)withSuggestions([])
}

method syntaxError(message)atLine(errlinenum)withSuggestion(suggestion') {
    syntaxError(message)atLine(errlinenum)withSuggestions([suggestion'])
}

method syntaxError(message)atLine(errlinenum)withSuggestions(suggestions) {
    var arr := "----"
    for (1..errlinenum.asString.size) do {
        arr := arr ++ "-"
    }
    for (1..util.lines.at(errlinenum).size) do {
        arr := arr ++ "^"
    }
    util.syntaxError(message, errlinenum, "", arr, false, suggestions)
}
