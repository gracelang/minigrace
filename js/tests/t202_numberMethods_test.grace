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
}
