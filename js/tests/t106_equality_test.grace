dialect "minitest"
// This no longer tests egal, since egal has been abandonned.
// it now tests equality and idenity.

var a := object {
    def x is public = "test"
    method ==(other) { x == other.x }
}
var c := object {
    var x is readable := "test"
    method ==(other) { isMe(other) }
}
var d := object {
    def x is public = "test"
    def y = "hello"
    method ==(other) { isMe(other) }
}

type EType = type {x -> String; z -> String}

var e := object {
    def x = "test"
    def z = "hello"
    method ==(other) {
        EType.match(other) && { x == other.x } && { z == other.z }
    }
}
var f := object {
    def x is public = "hello"
}
var g := object {
    def x is public = "test"
    method z { "hello" }
    method ==(other) { isMe(other) }
}
method hmaker {
    def word = "hello"
    object {
        def x is public = "test"
        method z { word }
        method ==(other) { isMe(other) }
    }
}
class testHello {
    def x = "test"
    method z { g ; "hello" }
    method ==(other) { isMe(other) }
}
var i := testHello
var j := object {
    inherits testHello
}

testSuite {
    test "identical" by { assert(a == a) }
    test "has x" by { assert(a == c) }
    test "different" by { assert(c != a) }
    test "string ==" by { assert(c.x == d.x) }
    test "different by inheritance" by { deny(j == i) }
    test "identical again" by { assert(a == c) }
    test "reverse different again" by { deny(c == a) }
    test "a == d" by { assert(a == d) }
    test "d diferent a" by { deny(d == a) }
    test "d different e" by { deny(d == e) }
    test "a == f" by { deny(a == f) }
    test "e == g" by { assert(e == g) }
    test "g == e" by { deny(g == e) }
    test "e == hmaker" by { assert(e == hmaker) }
    test "hmaker == hmaker" by { deny(hmaker == hmaker) }
}
