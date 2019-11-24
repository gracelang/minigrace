dialect "minitest"

var output      // used to detect side-effects

method tryOK -> Number {
    try {
        5
    } catch {e: ProgrammingError ->
        4
    }
}

method tryExceptional -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        4
    }
}

method tryReturnOK -> Number {
    try {
        return 5
    } catch {e: ProgrammingError ->
        return 4
    }
}

method tryReturnExceptional -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        return 4
    }
}

method tryOKFinally -> Number | String {
    try {
        5
    } catch {e: ProgrammingError ->
        "five"
    } finally {
        output := "OK"
    }
}

method tryExceptionalFinally -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        4
    } finally {
        output := "OK"
    }
}

method tryReturnOKFinally -> Number | String {
    try {
        return 5
    } catch {e: ProgrammingError ->
        return "four"
    } finally {
        output := "OK"
    }
}

method tryReturnExceptionalFinally -> Done | String {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        return "four"
    } finally {
        output := "OK"
    }
}

method tryOKFinallyReturns -> Number | String {
    try {
        5
    } catch {e: ProgrammingError ->
        "four"
    } finally {
        return "OK"
    }
}

method tryExceptionalFinallyReturns -> Number | String {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        4
    } finally {
        return "OK"
    }
}

method tryReturnOKFinallyReturns -> Number | String {
    try {
        return 5
    } catch {e: ProgrammingError ->
        return 4
    } finally {
        return "OK"
    }
}

method tryReturnExceptionalFinallyReturns -> Number | Done {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        return 4
    } finally {
        return "OK"
    }
}

testSuite "try...catch...finally" with {
    output := "none"
    test "no exception" by { assert (tryOK) shouldBe 5 }
    test "with exception" by { assert (tryExceptional) shouldBe 4 }
    test "with return" by { assert (tryReturnOK) shouldBe 5 }
    test "return in catch" by { assert (tryReturnExceptional) shouldBe 4 }
    test "tryOKFinally" by {
        assert (tryOKFinally) shouldBe 5
        assert (output) shouldBe "OK"
    }
    test "tryExceptionalFinally" by {
        assert (tryExceptionalFinally) shouldBe 4
        assert (output) shouldBe "OK"
    }
    test "tryReturnOKFinally" by {
        assert (tryReturnOKFinally) shouldBe 5
        assert (output) shouldBe "OK"
    }
    test "tryReturnExceptionalFinally" by {
        assert (tryReturnExceptionalFinally) shouldBe "four"
        assert (output) shouldBe "OK"
    }
    test "tryOKFinallyReturns" by {
        assert (tryOKFinallyReturns) shouldBe "OK"
        assert (output) shouldBe "none"
    }
    test "tryExceptionalFinallyReturns" by {
        assert (tryExceptionalFinallyReturns) shouldBe "OK"
        assert (output) shouldBe "none"
    }
    test "tryReturnOKFinallyReturns" by {
        assert (tryReturnOKFinallyReturns) shouldBe "OK"
        assert (output) shouldBe "none"
    }
    test "tryReturnExceptionalFinallyReturns" by {
        assert (tryReturnExceptionalFinallyReturns) shouldBe "OK"
        assert (output) shouldBe "none"
    }
}
exit
