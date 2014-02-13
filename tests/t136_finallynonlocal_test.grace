
var count := 0

method foo(x) {
    try (x)
        catch { e : Exception -> print "Failed; no exception was raised." }
        finally { print "OK." ; count := count + 1}
}

method bar(x) {
    try { foo(x) }
        finally { print "OK." ; count := count + 2 }
}

method baz {
    try {
        bar { return 1 }
    } finally {
        print "OK."
        count := count + 4
    }
}

baz

match (count)
    case { 7 -> print "OK; all finallies ran." }
    case { 6 -> print "Failed; inner finally did not run." }
    case { 5 -> print "Failed; middle finally did not run." }
    case { 4 -> print "Failed; only outer finally ran." }
    case { 3 -> print "Failed; outer finally did not run." }
    case { 2 -> print "Failed; only middle finally ran." }
    case { 1 -> print "Failed; only inner finally ran." }
    case { 0 -> print "Failed; no finally blocks ran." }
    case { _ -> print "Failed; something is very broken." }
