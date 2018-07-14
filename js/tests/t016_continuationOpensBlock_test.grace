object {
    method fromGctLine (mstr : String) {
        var lst: Number := 1
        while {(mstr.at (lst) != ")") && (mstr.at (lst) != ",")
            && (mstr.at(lst) != "[[")} do {
            lst := lst + 1
        }
    }
}

// The formatting of this code is legal.  Line 5 is not a continuation line,
// but (part of) the body of the while condition.  The rule about an unmached
// left brace means that no separator is implied at the end of line 4.
// Line 6, the body of the while block, has the same indentation as the condition.
//
// Special code for block bodies in the parser was complaining
// that the body was not indented, because it was taking the indentation of
// the `{` to be that of line 5, not line 4.  This code has been removed.

print "OK"

// Here is a clearer vesion, formatted by the browser's reindent function.

object {
    method fromGctLine (mstr : String) {
        var lst: Number := 1
        while {
            (mstr.at (lst) != ")") && (mstr.at (lst) != ",")
                  && (mstr.at(lst) != "[[")
        } do {
            lst := lst + 1
        }
    }
}
