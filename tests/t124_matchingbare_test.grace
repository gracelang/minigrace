method tryMatch(x) {
    match(x)
        case { y : String -> print "STRING" }
        case { 2 -> print "TWO" }
        case { y -> print "FALLTHROUGH {y}" }
}

tryMatch 2
tryMatch 1

