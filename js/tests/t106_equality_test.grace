// This no longer tests egal, since egal has been abandonned.
// it now tests equality and idenity.

var a := object {
    def x = "test"
}
var b := object {
    def x = "test"
}
var c := object {
    var x is readable := "test"
}
var d := object {
    def x is public = "test"
    def y = "hello"
}
var e := object {
    def x = "test"
    def z = "hello"
}
var f := object {
    def x = "hello"
}
var g := object {
    def x = "test"
    method z { "hello" }
}
method hmaker {
    def word = "hello"
    object {
        def x = "test"
        method z { word }
    }
}
factory method testHello {
    def x = "test"
    method z { g ; "hello" }
}
var i := testHello
var j := object {
    inherits testHello
}

print(a==a)     // true
print(a==b)     // false
print(a!=b)     // true
print(a==b)     // false
print(c.x==d.x) // true — string ==
print(j==i)     // false
print(a==c)     // false
print(c==a)     // false
print(a==d)     // false
print(d==a)     // false
print(d==e)     // false
print(a==f)     // false
print(e==g)     // false
print(g==e)     // false
print(hmaker==hmaker)     // false
