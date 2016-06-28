dialect "minitest"

testSuiteNamed "basic type tests" with {

    test "Binding Type" by {
        var b := 4::"four"
        assert (b) hasType (Binding)
    }
    test "String Type" by {
        var s := "first"
        assert(s) hasType (String)
    }
    test "ConcatString Type" by {
        var s := "first"
        s := "first" ++ "Second"
        assert(s) hasType (String)
    }
    test "Not String Type" by {
        var n := 7
        deny(n) hasType (String)
    }
    test "Number Type" by {
        var n := 7
        assert(n) hasType (Number)
    }
}