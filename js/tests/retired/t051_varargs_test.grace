method foo(a,b,*c) {
    print(a)
    print(b)
    for (c) do {v->
        print "In c: {v}"
    }
}

foo(1,2,3,4,5)

method bar(a)baz(b,*c) {
    print(a)
    print(b)
    for (c) do {v->
        print "In c: {v}"
    }
}
bar("hello")baz("world", -1, 0, 1)
