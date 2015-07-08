
var count := 0
try {
    print "OK; inside main block."
    Exception.raise "OK"
    print "Failed; exception did not terminate block."
} catch {
    e : Exception ->
        print "OK."
        count := count + 1
} finally {
    print "OK."
    count := count + 2
}

match (count)
    case { 3 -> print "OK; both exception handler and finally ran." }
    case { 2 -> print "Failed; exception handler did not run." }
    case { 1 -> print "Failed; finally block did not run." }
    case { 0 -> print "Failed; neither exception handler nor finally ran." }
    case { _ -> print "Failed; something is very broken." }

