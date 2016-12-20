#pragma ExtendedLineups
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
def suggestion is public = object {
  class new {
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

    method replaceUntil(until)with(s)onLine(lineNumber) {
        def line = getLine(lineNumber)
        def len = until.size
        for (1..line.size) do {i->
            if (line.substringFrom(i)to(i + len - 1) == until) then {
                replaceRange(1, i + len - 1)with(s)onLine(lineNumber)
                return true
            }
        }
        return false
    }

    method deleteRange(start, end)onLine(lineNumber) {
        var start' := start
        def line = getLine(lineNumber)
        if((start' > 1) && (end == line.size)) then {
            // Check for removing the whole line, then remove the indent also.
            var indent := true
            for(1..(start'-1)) do { i ->
                if(line.at(i) != " ") then {
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

    method append(s)onLine(lineNumber) {
        def line = getLine(lineNumber)
        addLine(lineNumber, line ++ s)
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
            if((token.prev != false) && ({token.prev.line == token.line})) then {
                start := token.prev.linePos + token.prev.size
            }
        }
        // Include indentation if this is the only token on the line.
        if(token.linePos == (token.indent + 1)) then {
            if ((token.next == false) || {token.next.line != token.line}) then {
                start := 1
            }
        }
        start
    }

    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {
        var end := token.linePos + token.size - 1
        // Include trailing space.
        if(includeTrailing == true) then {
            if((token.next != false) && ({token.next.line == token.line})) then {
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
            if (lines.size > 1) then {
                // Re-order the list.
                i := lines.size
                while {(i > 1) && {lineNumber < lineNumbers.at(i - 1)}} do {
                    lineNumbers.at(i) put(lineNumbers.at(i - 1))
                    lines.at(i) put (lines.at(i - 1))
                    i := i - 1
                }
                lineNumbers.at(i) put (lineNumber)
                lines.at(i) put (line)
            }
        }
    }

    // Internal method used to find the index of a line in the lines array.
    // Returns false if the line is not found.
    method findLine(lineNumber) is confidential {
        for(lineNumbers.indices) do { i ->
            if(lineNumbers.at(i) == lineNumber) then {
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
            util.lines.at(lineNumber)
        } else {
            lines.at(i)
        }
    }

    method print {
        for(1..lines.size) do { i ->
            if ((i > 1) && {(lineNumbers.at(i) > (lineNumbers.at(i-1) + 1))}) then {
                var s := ""
                repeat (lineNumbers.at(i-1).asString.size) times {
                    s := s ++ " "
                }
                io.error.write("    {s}...\n")
            }
            // Handle insertion of new lines.
            if(lineNumbers.at(i).truncated != lineNumbers.at(i)) then {
                io.error.write(" *{lineNumbers.at(i).truncated}: {lines.at(i)}\n")
            } else {
                io.error.write("  {lineNumbers.at(i)}: {lines.at(i)}\n")
            }
        }
    }
  }
}

method name (p:String) matches (t:String) within (k:Number) {
    // This is algorithm EDP from Jokinen, Jorma, Tarhio and Ukkinen:
    // "A comparison of Approximate String Matching Algorithms"
    // Software—Practice and Experience Vol 1(1), January 1988, pp.1–19
    //
    // Implements the "Enhanced Dynamic Programming" (EDP) algorithm for
    // approximate string matching.  If pattern p matches text t within
    // an edit distance ≤ k, this method returns j, the index of the highest
    // character of t involved in the match.  Its time compelxity is O(k*|p|).
    //
    // The algorithm builds a dynamic progarmming table D such that
    // D[i,j] is the minimum edit distance between p[1] p[2] ... p[i]
    // and any substring of t ending at t[j].   However, it isn't necessary
    // to store the whole table D.  Because D[i,j] depends on only D[i-1, j],
    // D[i-1, j-1] and D[i, j-1], we can store only the current
    // column, which we do in h, and the value of D[i-1,j-1], which is
    // cached in c.  Moreover, since we are not interested in edit
    // distances > k, it's only necessary to evalue the elments of the table
    // around the diagonal.


    def m = p.size
    def n = t.size
    if (k >= m) then { return m }  // trivial case
    def k' = min3(k, n-1, m-1)
    var top := k' + 1  // the location where the topmost diagonal under
                       // threshold intersects the current column
    def h = emptyList
    for (0..m) do { i -> h.at(i+1) put(i+1) }
    try {
        for (1..n) do { j ->
            var c := 0
            for (1..top) do { i ->
                def e = if (p.at(i) == t.at(j)) then {
                    c
                } else {
                    min3(h.at(i), h.at(i+1), c) + 1
                }
                c := h.at(i+1)
                h.at(i+1) put (e)
            }
            while { (top >= 0) && {h.at(top+1) > k'} } do { top := top - 1 }
            if (top == m) then {
                return j    // the last character of t that was used in the match
            } else {
                top := top + 1
            }
        }
    } catch { e:BoundsError -> return 0 }   // if the code is buggy, don't crash
    return 0            // there was no match
}

method min3(a, b, c) is confidential {
    def sf = if (a < b) then { a } else { b }
    if (sf < c) then { sf } else { c }
}


// Methods to actually display an error message and suggestions, then exit.

method syntaxError (message) atRange (r) {
    syntaxError (message) atRange (r) withSuggestions []
}

method syntaxError (message) atRange (r) withSuggestions (s) {
    syntaxError (message)
          atRange (r.start.line, r.start.column, r.end.column)
          withSuggestions (s)
}

method syntaxError(message)atRange(errlinenum, startpos, endpos) {
    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([])
}

method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestion(suggestion') {
    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([suggestion'])
}

method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {
    var loc := if(startpos == endpos) then {startpos.asString} else { "{startpos}-{endpos}" }
    var arr := "----"
    for (2..(startpos + errlinenum.asString.size)) do { _ ->
        arr := arr ++ "-"
    }
    for (startpos..endpos) do { _ ->
        arr := arr ++ "^"
    }
    util.syntaxError(message, errlinenum, ":{loc}", arr, false, suggestions)
}

method error(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {
    var loc := if(startpos == endpos) then {startpos.asString} else { "{startpos}-{endpos}" }
    var arr := "----"
    for (2..(startpos + errlinenum.asString.size)) do { _ ->
        arr := arr ++ "-"
    }
    for (startpos..endpos) do { _ ->
        arr := arr ++ "^"
    }
    util.generalError(message, errlinenum, ":{loc}", arr, false, suggestions)
}

method error(message) atRange(errlinenum, startpos, endpos) {
    error (message) atRange(errlinenum, startpos, endpos) withSuggestions([])
}

method syntaxError(message)atPosition(errlinenum, errpos) {
    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([])
}

method error(message) atPosition(errlinenum, errpos) {
    error(message) atPosition(errlinenum, errpos) withSuggestions([])
}

method syntaxError(message)atPosition(errlinenum, errpos)withSuggestion(suggestion') {
    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([suggestion'])
}

method syntaxError(message)atPosition(errlinenum, errpos)withSuggestions(suggestions) {
    var arr := "----"
    for (2..(errpos + errlinenum.asString.size)) do { _ ->
        arr := arr ++ "-"
    }
    arr := arr ++ "^"
    util.syntaxError(message, errlinenum, ":{errpos}", arr, false, suggestions)
}

method error(message) atPosition(errlinenum, errpos)
        withSuggestions(suggestions) {
    var arr := "----"
    for (2..(errpos + errlinenum.asString.size)) do { _ ->
        arr := arr ++ "-"
    }
    arr := arr ++ "^"
    util.generalError(message, errlinenum, ":{errpos}", arr, false, suggestions)
}

method error(message) {
    util.generalError(message, 0, "", "", false, [])
}

method error(message)atLine(errlinenum)withSuggestions(suggestions) {
    var arr := "----"
    for (1..errlinenum.asString.size) do { _ ->
        arr := arr ++ "-"
    }
    if (errlinenum > 0) then {
            arr := arr ++ ("^" * util.lines.at(errlinenum).size)
    }
    util.generalError(message, errlinenum, "", arr, false, suggestions)
}

method error(message)atLine(errlinenum) {
    error(message)atLine(errlinenum)withSuggestions([])
}

method syntaxError(message)atLine(errlinenum) {
    syntaxError(message)atLine(errlinenum)withSuggestions([])
}

method syntaxError(message)atLine(errlinenum)withSuggestion(suggestion') {
    syntaxError(message)atLine(errlinenum)withSuggestions([suggestion'])
}

method syntaxError(message)atLine(errlinenum)withSuggestions(suggestions) {
    var arr := "----"
    for (1..errlinenum.asString.size) do { _ ->
        arr := arr ++ "-"
    }
    for (1..util.lines.at(errlinenum).size) do { _ ->
        arr := arr ++ "^"
    }
    util.syntaxError(message, errlinenum, "", arr, false, suggestions)
}
