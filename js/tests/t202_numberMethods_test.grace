dialect "minitest"

testSuite {
    test "same hash" by {
        def n4041 = 4041
        def n4041a = 4041
        def n4041b = 4041
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

    test "isEven" by {
        assert (234567892.isEven) description "234567892 isn't even"
        deny (23446789.isEven) description "23446789 is even"
        deny (12.5.isEven) description "12.5 is even"
    }
    test "isOdd" by {
        assert (234567891.isOdd) description "234567891 isn't odd"
        deny (234467892.isOdd) description "234467892 is odd"
        deny (12.5.isOdd) description "12.5 is odd"
    }
    test "isInteger" by {
        deny (12.00001.isInteger) description "12.00001 is an Integer"
        assert (23456789.isInteger) description "23456789 is not an Integer"
        assert ((2^62).isInteger) description "2^62 is not an Integer"
        deny (((2^48)+ 0.5).isInteger) description "2^48 + 0.5 is an Integer"
    }
    test "decimal digits 10" by {
        def n = 17.123456789012345678909
        assert (n.asStringDecimals 10) shouldBe "17.1234567890"
    }
    test "decimal digits 6 rounds" by {
        def n = 17.123456789012345678909
        assert (n.asStringDecimals 6) shouldBe "17.123457"  // should round
    }
    test "decimal digits 10 rounds" by {
        def n = 17.12345678999
        assert (n.asStringDecimals 10) shouldBe "17.1234567900"  // should round
    }
    test "decimal digits 14" by {
        def n = 17.123456789012345678909
        assert (n.asStringDecimals 14) shouldBe "17.12345678901234"
    }
    test "decimal digits 20" by {
        def n = 17.123456789
        def s = n.asStringDecimals 20
        assert (s.startsWith "17.12345678")
            description "{n.asDebugString} with 20 decimals is {s}"
        assert (s.size == (20 + 3))
            description "{n.asDebugString} with 20 decimals is {s}, which is of size {s.size}"
    }
    test "decimal digits 21" by {
        def n = 17.123456789
        assert { n.asStringDecimals 21 } shouldRaise (RequestError)
    }
}
