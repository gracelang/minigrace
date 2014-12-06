def a = 1

method tryMatch(x) {
    match(x)
        case { y : String -> print "STRING {y}" }
        case { (a) -> print "ONE" }
        case { y : Number -> print "FALLTHROUGH {y}" }
}

tryMatch 2
tryMatch 1
tryMatch "Hello"
