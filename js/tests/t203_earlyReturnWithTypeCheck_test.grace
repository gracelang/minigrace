dialect "minitest"

var l: List⟦Number⟧ := list [1, 3]

// The point of this test is to see if doing a type-check on the method
// argument xs disrupts the early-return logic.   The global variable
// invocationCount needs to be cached and incremented at the very start
// of a method, or else the value cached by callmethod and the value
// cached by the method itself will be out of step.

method allEven (xs:List⟦Number⟧) -> Boolean {
    for (xs) do {x:Number ->
        if (x.isOdd) then {
            return false
        }
    }
    true
}

testSuite "early returns" with {
    test "no early return" by {
        assert (allEven (list << [2, 4]) )
    }
    test "with early return" by {
        deny (allEven (list << [1, 3]) )
    }
    test "wrong type" by {
        assert {allEven [1, 2, 3]} shouldRaise (TypeError)
              mentioning "does not have type List"
    }
}

exit
