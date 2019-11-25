dialect "standard"
import "io" as io
import "sys" as sys
import "util" as util

def suggestion is public = object {
    // Contains modified lines used as suggestions for error messages.
    // When a line is added using one of the utility methods such as
    // insert()afterToken()onLine(), the line is copied from util.lines to the
    // lines array in the suggestion. When a line that is already in
    // the array is modified, the lines array is updated.
    // There is no sorting of the order of the lines at any point, so
    // lines must be added in ascending order.

  class new {
    use equality

    def lineNumbers is public = list.empty     // two parallel arrays,
    def lines is public = list.empty           // simulating a dictionary

    method ==(other) {
        if (lineNumbers == other.lineNumbers) then {
            if (lines == other.lines) then { return true }
        }
        return false
    }

    method hash { lines.hash }

    // Methods that deal with inserting/replacing/deleting character positions
    // and ranges. These methods are usually called by lexing error messages
    // due to lack of access to tokens, and by insert/replace/delete methods
    // that operate on tokens.

    method replaceRange(start, end)with(s)onLine(lineNumber) {
        def line = getLine(lineNumber)
        def size = line.size
        if (size == 0) then {
            addLine(lineNumber, s)
        } else {
            def newStart = min(start, size)
            def newEnd = min(end, size)
            addLine(lineNumber, line.substringFrom 1 to (newStart - 1)
                    ++ s ++ line.substringFrom (newEnd + 1))
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
        if ((start > 1) && (end == line.size) && (start ≤ end)) then {
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
        if (pos > line.size) then {
            addLine(lineNumber, line ++ s)
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
        if (true == includeLeading) then {
            if (token.hasPrev && {token.prev.line == token.line}) then {
                start := token.prev.linePos + token.prev.size
            }
        }
        // Include indentation if this is the only token on the line.
        if (token.linePos == (token.indent + 1)) then {
            if (token.hasNext.not || {token.next.line ≠ token.line}) then {
                start := 1
            }
        }
        start
    }

    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {
        var end := token.linePos + token.size - 1
        // Include trailing space.
        if (true == includeTrailing) then {
            if (token.hasNext && {token.next.line == token.line}) then {
                end := token.next.linePos - 1
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

method readableStringFrom(xs:Collection) using (connectingWord:String) {
    // returns a string describing the contents of xs,
    // separating items with commas and the word "and"
    var result := ""
    var count := xs.size
    xs.do { v ->
        result := result ++ v.asString
        count := count - 1
        if (count == 1) then {
            if (xs.size > 2) then { result := result ++ "," }
            result := result ++ " " connectingWord ++ " "
        } elseif { count > 1 } then {
            result := result ++ ", "
        }
    }
    result
}

method readableStringFrom(xs) {
    readableStringFrom(xs) using "and"
}

method name (p:String) mightBeIntendedToBe (target:String) {
    // heuristics for finding typos, mis-spellings, etc.

    if (p.contains "$") then { return false }
    if (p.startsWithLetter ≠ target.startsWithLetter) then { return false }
        // either both operators, or both names
    def parenIx = p.indexOf "(" ifAbsent { p.size + 1 }
    def pPrefix = p.substringFrom 1 to (parenIx - 1)
    if (target.startsWith(pPrefix)) then { return true }
    if (target.size > (p.size * 2)) then { return false }
    def rng = name (p) matches (target) within 2
    if (rng == 0) then { return false }
    if (rng > (p.size * 2)) then { return false }  // found too far along
    return true
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
    // distances > k, it's necessary to evaluate only those elements
    // of the table around the diagonal.


    def m = p.size
    def n = t.size
    if ((m ≤ k)) then {
        return min(m, n)   // can match first min(m, n) chars of t
    }
    var top := k + 1  // the location where the topmost diagonal under
                      // threshold intersects the current column
    var maxResult := 0
    def h = list.empty
    for (0..m) do { i -> h.at(i+1) put(i) }
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
            while { h.at(top+1) > k } do { top := top - 1 }
            if (top == m) then {
                maxResult := max(maxResult, j)       //  j is the index of
                    //  the last character of t that was used in the match
            } else {
                top := top + 1
            }
        }
    } catch { e:BoundsError ->
        print "BoundsError in name({p})matches({t})within({k})"
        e.printBacktrace
        return 0 }   // if the code is buggy, don't crash
    return maxResult
}

method min3(a, b, c) is confidential {
    def sf = if (a < b) then { a } else { b }
    if (sf < c) then { sf } else { c }
}

// Methods to raise a SyntaxError exception, with an accompanying
// data object that contains information and suggestions.
// The exception will normally be caught by a try(_)catch(_) in
// the compiler module, which requests util.generalError to
// actually print the message

def CompilationError is public = Exception.refine "CompilationError"
def SyntaxError is public = CompilationError.refine "SyntaxError"
def ReuseError is public = CompilationError.refine "ReuseError"

method syntaxError(message:String, errLinenum:Number,
            errPosition:String, arr:String, suggestions:Collection) {
    // Used by various wrapper methods declared below.
    // The parameters mean:
    //   - message: The text of the error message.
    //   - errLinenum: The line number on which the error occurred.
    //   - errPosition: A string used to show the position of the error in the error message.
    //   - arr: The string used to draw an arrow showing the position of the error.
    //   - suggestions: A (possibly empty) list of suggestions to correct the error.

    def errorObj = object {
        def lineNum is public = errLinenum
        def position is public = errPosition
        def arrow is public = arr
        def sugg is public = suggestions
    }
    SyntaxError.raise (message) with (errorObj)
}

method syntaxError (message) atRange (r) {
    def more = if ((r.start.line < r.end.line) && {
        util.lines.at(r.start.line).endsWith "\{" .not
    }) then {
        "  This statement spans multiple lines; is that what you intended?"
    } else {
        ""
    }
    syntaxError (message ++ more) atRange (r) withSuggestions []
}
method syntaxError (message) atRange (r) withSuggestion (s) {
    syntaxError (message) atRange (r) withSuggestions [s]
}
method syntaxError (message) atRange (r) withSuggestions (s) {
    syntaxError (message)
          atRange (r.start.line, r.start.column, r.end.line, r.end.column)
          withSuggestions (s)
}

method syntaxError(message)atRange(errLinenum, startpos, endpos) {
    syntaxError(message)atRange(errLinenum, startpos, endpos)withSuggestions []
}

method syntaxError (message) atRange (sl, sp, el, ep) {
    syntaxError (message) atRange (sl, sp, el, ep) withSuggestions []
}

method syntaxError(message) atRange(errLinenum, startpos, endpos) withSuggestion(suggestion') {
    syntaxError(message) atRange(errLinenum, startpos, endpos) withSuggestions [suggestion']
}

method syntaxError(message) atRange(errLinenum, startpos, endpos) withSuggestions(suggestions) {
    syntaxError (message)
          atRange (errLinenum, startpos, errLinenum, endpos)
          withSuggestions (suggestions)
}

method syntaxError (message)
          atRange (startline, startpos, endline, endpos)
          withSuggestions (suggestions) {

    // this variant allows for range to start and end on different lines.
    def loc = if (startline == endline) then {
        if (startpos == endpos)
              then { startpos.asString }
              else { "{startpos}-{endpos}" }
    } else { "{startpos}-{endline}:{endpos}" }
    def arr = ("-" * (startpos-1)) ++ ("^" * (endpos - startpos + 1))
    syntaxError(message, startline, "{loc}", arr, suggestions)
}

method error (message) atRange (r) {
    error (message)
        atRange (r.start.line, r.start.column, r.end.line, r.end.column)
        withSuggestions []
}

method error (message)
          atRange (startline, startpos, endline, endpos)
          withSuggestions (suggestions) {

    // this variant allows for range to start and end on different lines.
    def loc = if (startline == endline) then {
        if (startpos == endpos)
              then { startpos.asString }
              else { "{startpos}-{endpos}" }
    } else { "{startpos}-{endline}:{endpos}" }
    def arr = ("-" * (startpos-1)) ++ ("^" * (endpos - startpos + 1))
    def errorObj = object {
        def lineNum is public = startline
        def position is public = loc
        def arrow is public = arr
        def sugg is public = suggestions
    }
    CompilationError.raise(message) with (errorObj)
}

method error(message) atRange(errLinenum, startpos, endpos) withSuggestions(suggestions) {
    error (message)
          atRange (errLinenum, startpos, errLinenum, endpos)
          withSuggestions (suggestions)
}

method error(message) atRange(errLinenum, startpos, endpos) {
    error (message) atRange(errLinenum, startpos, endpos) withSuggestions []
}

method syntaxError(message) atPosition(errLinenum, errpos) {
    syntaxError(message)atPosition(errLinenum, errpos)withSuggestions []
}

method error(message) atPosition(errLinenum, errpos) {
    error(message) atPosition(errLinenum, errpos) withSuggestions []
}

method syntaxError(message) atPosition(errLinenum, errpos) withSuggestion(suggestion') {
    syntaxError(message) atPosition(errLinenum, errpos) withSuggestions [suggestion']
}

method syntaxError(message)atPosition(errLinenum, errpos)withSuggestions(suggestions) {
    def arr = ("-" * (errpos-1)) ++ "^"
    syntaxError(message, errLinenum, "{errpos}", arr, suggestions)
}

method error(message) atPosition(errLinenum, errPosition)
        withSuggestions(suggestions) {
    def arr = "^"

    def errorObj = object {
        def lineNum is public = errLinenum
        def position is public = errPosition
        def arrow is public = arr
        def sugg is public = suggestions
    }
    CompilationError.raise (message) with (errorObj)
}

method error(message) {
    error(message) atPosition(0, "") withSuggestions []
}

method error(message) atLine(errLinenum) withSuggestions(suggestions) {
    def arr = if ((errLinenum > 0) && (errLinenum <= util.lines.size)) then {
        "^" * util.lines.at(errLinenum).size
    } else {
        "^"
    }
    def errorObj = object {
        def lineNum is public = errLinenum
        def position is public = ""
        def arrow is public = arr
        def sugg is public = suggestions
    }
    CompilationError.raise (message) with (errorObj)

}

method error(message)atLine(errLinenum) {
    error(message)atLine(errLinenum)withSuggestions []
}

method syntaxError(message)atLine(errLinenum) {
    syntaxError(message)atLine(errLinenum)withSuggestions []
}

method syntaxError(message) atLine(errLinenum) withSuggestion(suggestion') {
    syntaxError(message) atLine(errLinenum) withSuggestions [suggestion']
}

method syntaxError(message) atLine(errLinenum) withSuggestions(suggestions) {
    def arr = "^" * util.lines.at(errLinenum).size
    syntaxError(message, errLinenum, "", arr, suggestions)
}
