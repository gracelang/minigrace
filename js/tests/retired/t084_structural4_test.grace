
type A = interface {
    test(a:A) -> A
}
type B = interface {
    test(b:B) -> B
}

var a : A := object {
    method test(x:A) -> A { x }
}
var b : B := object {
    method test(x:B) -> B { x }
}
a.test(a)
b.test(b)
a.test(b)
b.test(a)
a := b
b := a
print "OK"
