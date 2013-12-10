method tryMatch(pattern, obj) {
    if (pattern.match(obj)) then {
        print "OK"
    } else {
        print "Not OK; {obj} should have matched"
    }
}
method tryNoMatch(pattern, obj) {
    if (pattern.match(obj)) then {
        print "Not OK; {obj} should not have matched"
    } else {
        print "OK"
    }
}

tryMatch(String, "hello")
tryMatch(String, "hello" ++ "world")
tryNoMatch(String, 1)
tryMatch(Number, 1)
tryNoMatch(Number, "hello")
tryMatch(Boolean, true)
tryNoMatch(Boolean, 1)
