dialect "minitest"

testSuiteNamed "multi-parameter blocks" with {
    test "one parameter match" by {
        def blk = { (Number) -> "found a Number" }
        assert (blk.apply 2) shouldBe "found a Number"
    }
    test "one named parameter match" by {
        def blk = { n:Number -> "found the Number {n}" }
        assert (blk.apply 2) shouldBe "found the Number 2"
    }
    test "one parameter mis-match" by {
        def blk = { _:Number -> "found a Number" }
        assert {blk.apply "Hello"} shouldRaise (TypeError)
    }

    test "two parameters match" by {
        def blk = { (Number), s:String -> "found a Number and the string {s}" }
        assert (blk.apply(2, "Hi")) shouldBe "found a Number and the string Hi"
    }
    test "two named parameters match" by {
        def blk = { n:Number, 5 -> "found the Numbers {n} and 5" }
        assert (blk.apply(2, 5)) shouldBe "found the Numbers 2 and 5"
    }
    test "two parameters Type mis-match" by {
        def blk = { (Number), (String) -> "found a Number and a String" }
        assert {blk.apply("Hello", 007)} shouldRaise (TypeError)
    }
    test "two named parameters Value mis-match" by {
        def blk = { n:Number, 5 -> "found the Numbers {n} and 5" }
        assert {blk.apply(7, 19)} shouldRaise (RequestError)
    }
}
