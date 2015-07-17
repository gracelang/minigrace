
method tryMatch(pattern, value) {
    if (pattern.match(value)) then {
        print "OK"
    } else {
        print "Not OK; {pattern} should have matched {value}"
    }
}

method tryNoMatch(pattern, value) {
    if (pattern.match(value)) then {
        print "Not OK; {pattern} should not have matched {value}"
    } else {
        print "OK"
    }
}

tryMatch(1,1)
tryNoMatch(1,2)
tryMatch("test", "test")
tryNoMatch("test", "wrong")
tryMatch(true, true)
tryNoMatch(true, false)
tryNoMatch(1, true)
tryNoMatch("test", true)
tryNoMatch(true, 2)
