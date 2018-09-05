dialect "minitest"

type A⟦T⟧ = {
   m(x:T) → Done
   theTypeArg → Type
}

class a⟦T⟧(arg) → A⟦T⟧ {
   method m(x:T) → Done { print (x) }
   method theTypeArg { T }
}

def ana: A⟦A⟦Number⟧⟧ = a⟦A⟦Number⟧⟧ "double"
testSuite {

    test "type arguments are passed" by {
        assert ((a⟦String⟧ "foo").theTypeArg) shouldBe (String)
    }

    test "generic type annotation on a method" by {
        assert {ana.m "greeting"}
            shouldRaise (TypeError)
            mentioning "argument to request of `m(_)` does not have type"
                // the argument to m is declared as a T = A⟦Number⟧
    }
}
