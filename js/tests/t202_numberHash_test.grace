dialect "minitest"

testSuite {
    test "same hash" by {
        def n4041 = 4041
        def rubbish = "Greetings"
        def n4041a = 4041
        def n4041b = 4041
        def rubbish' = "Greetings"
        def n4041c = 4041
        assert (n4041.hash == n4041a.hash)
            description "4041.hash = {4041.hash} but n4041a.hash = {n4041a.hash} "
        assert (n4041.hash == n4041b.hash)
            description "4041.hash = {4041.hash} but n4041b.hash = {n4041b.hash} "
        assert (n4041.hash == n4041c.hash)
            description "4041.hash = {4041.hash} but n4041c.hash = {n4041c.hash} "
    }

    test "NaN hash" by {
        def NaN = 0/0
        assert {NaN.hash} shouldRaise (RequestError)
    }

    test "Zero hash" by {
        assert ((-0.0).hash) shouldBe ((0.0).hash)
    }
}
