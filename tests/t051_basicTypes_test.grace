dialect "minitest"

testSuite {

    test "BinidingType" by {
        var b := 4::"four"
        assert (b) hasType (Binding)
    }
    test "StringType" by {
        var s := "first"
        assert(s) hasType (String)
    }
    test "ConcatStringType" by {
        var s := "first"
        s := "first" ++ "Second"
        assert(s) hasType (String)
    }
}