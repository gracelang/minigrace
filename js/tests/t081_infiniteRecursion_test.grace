dialect "minitest"

def TooMuchRecursion = ProgrammingError.refine "TooMuchRecursion"

method currentHand → List⟦String⟧ {
    return currentHand 
}

testSuite {
    test "stack overflow" by {
        assert {currentHand} shouldRaise (TooMuchRecursion)
    }
}
