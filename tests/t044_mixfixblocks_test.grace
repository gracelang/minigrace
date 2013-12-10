method runFirst(a)second(b)third(c) {
    a.apply
    b.apply
    c.apply
}
runFirst {
    print "First"
} second {
    print "Second"
} third {
    print "Third"
}

