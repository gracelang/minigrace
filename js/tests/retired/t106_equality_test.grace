dialect "minitest"
// This no longer tests egal, since egal has been abandonned.
// it now tests equality and idenity.

var a := object {
    use equality
    def x is public = "test"
    method ==(other) { x == other.x }
    method asString { "a" }
}
var c := object {
    use identityEquality
    var x is readable := "test"
    method asString { "c" }
}
var d := object {
    def x is public = "test"
    def y = "hello"
    method ==(other) { isMe(other) }
    method asString { "d" }
}

type EType = interface {x -> String; z -> String}

var e := object {
    use equality
    def x = "test"
    def z = "hello"
    method ==(other) {
        EType.matches(other) && { x == other.x } && { z == other.z }
    }
    method asString { "e" }
}
var f := object {
    def x is public = "hello"
    method asString { "f" }
}
var g := object {
    use identityEquality
    def x is public = "test"
    method z { "hello" }
    method asString { "g" }
}
method hmaker {
    def word = "hello"
    object {
        def x is public = "test"
        method z { word }
        method ==(other) { isMe(other) }
        method asString { "an h" }
    }
}
class testHello {
    use identityEquality
    def x = "test"
    method z { g ; "hello" }
}
var i := testHello
var j := object {
    inherit testHello
    method asString { "j" }
}

testSuite {
    test "identical" by { assert(a == a) }
    test "has x" by { assert(a == c) }
    test "c different a" by { assert(c != a) }
    test "string ==" by { assert(c.x == d.x) }
    test "different by inheritance" by { deny(j == i) }
    test "identical again" by { assert(a == c) }
    test "reverse different again" by { deny(c == a) }
    test "a == d" by { assert(a == d) }
    test "not d == a" by { deny(d == a) }
    test "d different e" by { deny(d == e) }
    test "not a == f" by { deny(a == f) }
    test "e == g" by { assert(e == g) }
    test "not g == e" by { deny(g == e) }
    test "a ≠ f" by { assert(a ≠ f) }
    test "not e ≠ g" by { deny(e ≠ g) }
    test "g ≠ e" by { assert(g ≠ e) }
    test "e == hmaker" by { assert(e == hmaker) }
    test "hmaker == hmaker" by { deny(hmaker == hmaker) }
    test "g.hash == g.hash" by { assert (g.hash) shouldBe (g.hash) }
    test "c.hash == c.hash" by { assert (c.hash) shouldBe (c.hash) }
    test "c.hash ≠ g.hash" by { assert (c.hash) shouldntBe (g.hash) }
}
