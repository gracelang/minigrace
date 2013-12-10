
catch {
    var x := 1
    x.nonExistentMethod
} case {
    e : Error -> print "OK; Caught an error."
}

catch {
    Exception.raise "OK"
} case {
    e : Error -> print "Failed; caught Exception as Error."
} case {
    e : Exception -> print "{e.message}; Caught a manual exception."
}
