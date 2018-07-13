object {
    method fromGctLine (mstr : String) {
        var lst: Number := 1
        while {(mstr.at (lst) != ")") && (mstr.at (lst) != ",")
            && (mstr.at(lst) != "[[")} do {
            lst := lst + 1
        }
    }
}

// The formatting of this code is OK.  Line 6, the body of the 
// while block, is indented more than the continued line that contains
// the opening `{` —  logical line 4-5
//
// However, special code for block bodies in the parser was complaining 
// that the body was not indented, because it was taking the indentation of
// the `} to be that of line 5, not line 4.  This code has been removed.

print "OK"
