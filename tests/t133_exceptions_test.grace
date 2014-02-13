
try {
    var x := 1
    x.nonExistentMethod
} catch {
    e : Error -> print "OK; Caught an error."
}

try {
    Exception.raise "OK"
} catch {
    e : Error -> print "Failed; caught Exception as Error."
} catch {
    e : Exception -> print "{e.message}; Caught a manual exception."
}
