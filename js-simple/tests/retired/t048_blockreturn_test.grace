method blockrun(bk) {
    bk.apply
    return 100
}
method foo {
    var a := { return 6 }
    print "here"
    a.apply
    print "not here"
}
method baz {
    var a := { return 13 }
    blockrun(a)
    return 9
}

var b := foo
print(b)
print(baz)

var vals := [1, 5, 6, 3, 12, 9, 7, 15, 13]
method bar(n) {
    for (vals) do { v->
        if (v > n) then {
            return v
        }
    }
    return 0
}

print(bar(10))
print(bar(20))
print(bar(5))
