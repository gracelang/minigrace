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

method tryOKFinally -> Number {
    try {
        5
    } catch {e: ProgrammingError ->
        4
    } finally {
        print "OK"
    }
}

method tryExceptionalFinally -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        4
    } finally {
        print "OK"
    }
}

method tryReturnOKFinally -> Number {
    try {
        return 5
    } catch {e: ProgrammingError ->
        return 4
    } finally {
        print "OK"
    }
}

method tryReturnExceptionalFinally -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        return 4
    } finally {
        print "OK"
    }
}

method tryOKFinallyReturns -> Number {
    try {
        5
    } catch {e: ProgrammingError ->
        4
    } finally {
        return "OK"
    }
}

method tryExceptionalFinallyReturns -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        4
    } finally {
        return "OK"
    }
}

method tryReturnOKFinallyReturns -> Number {
    try {
        return 5
    } catch {e: ProgrammingError ->
        return 4
    } finally {
        return "OK"
    }
}

method tryReturnExceptionalFinallyReturns -> Number {
    try {
        ProgrammingError.raise "an error occurred"
    } catch {e: ProgrammingError ->
        return 4
    } finally {
        return "OK"
    }
}


print "tryOK = {tryOK}"
print "tryExceptional = {tryExceptional}"
print "tryReturnOK = {tryReturnOK}"
print "tryReturnExceptional = {tryReturnExceptional}"

print "tryOKFinally = {tryOKFinally}"
print "tryExceptionalFinally = {tryExceptionalFinally}"
print "tryReturnOKFinally = {tryReturnOKFinally}"
print "tryReturnExceptionalFinally = {tryReturnExceptionalFinally}"

print "tryOKFinallyReturns = {tryOKFinallyReturns}"
print "tryExceptionalFinallyReturns = {tryExceptionalFinallyReturns}"
print "tryReturnOKFinallyReturns = {tryReturnOKFinallyReturns}"
print "tryReturnExceptionalFinallyReturns = {tryReturnExceptionalFinallyReturns}"
