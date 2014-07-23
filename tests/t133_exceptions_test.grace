
try {
    var x := 1
    x.nonExistentMethod
} catch {
    e : NoSuchMethod -> print "OK; Caught an error."
}

try {
    Exception.raise "OK"
} catch {
    e : Error -> print "Failed; incorrectly caught Exception as Error."
} catch {
    e : Exception -> print "{e.message}; Caught a manual exception."
}
