dialect "minitest"

trait t1 {
    method x(size:Number) { "method x" }
    method y(name:String) { "method y arg {name}" }
}

class c1 {
    use t1 alias w(name) = y(name) exclude x(_)
    method w'(kind) { w(kind) }
    method name { "should not be a shadowing error" }
}

// y(name) in the alias clause used to cause a crash.  y(_) works fine.
// The w(name) is ok, because w is being declared.

testSuite {
    test "alias w works" by {
        assert (c1.w' "w") shouldBe "method y arg w"
    }
    test "alias w is confidential" by {
        assert {c1.w "w"} shouldRaise (NoSuchMethod) mentioning "confidential"
    }
}
