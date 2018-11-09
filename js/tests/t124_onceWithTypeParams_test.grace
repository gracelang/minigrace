dialect "minitest"

testSuite {
    def t =  object {
        method x { ... }
        method typeDependent[[K]] {
            return K
        }
        var executed is public := false
        once method onceTypeDependent[[K]] {
            executed := true
            return K
        }
    }
    test "parameter transmission" by {
        assert (t.typeDependent[[Number]]) shouldBe (Number)
    }

    test "default type parameter" by {
        assert (t.typeDependent) shouldBe (Unknown)
    }
    test "repeat argument to once" by {
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        assert (t.executed) description "once method did not execute"
        t.executed := false
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        deny (t.executed) description "once method executed twice"
    }
    test "distinct arguments to once" by {
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        assert (t.executed) description "once method did not execute for Number"
        t.executed := false
        assert (t.onceTypeDependent[[String]]) shouldBe (String)
        assert (t.executed) description "once method did not execute for String"
        t.executed := false
        assert (t.onceTypeDependent[[String]]) shouldBe (String)
        deny (t.executed) description "once method executed twice for String"
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        deny (t.executed) description "once method executed twice for Number"
    }
    test "actual and default type arguments" by {
        assert (t.onceTypeDependent) shouldBe (Unknown)
        assert (t.executed) description "once method did not execute for Unknown"
        t.executed := false
        assert (t.onceTypeDependent[[String]]) shouldBe (String)
        assert (t.executed) description "once method did not execute for String"
    }
    test "repeated requests of default argument" by {
        assert (t.onceTypeDependent) shouldBe (Unknown)
        assert (t.executed) description "once method did not execute"
        t.executed := false
        assert (t.onceTypeDependent[[Unknown]]) shouldBe (Unknown)
        deny (t.executed) description "once method executed twice for Unknown"
        assert (t.onceTypeDependent) shouldBe (Unknown)
        deny (t.executed) description "once method a second time for Unknown"
    }
}
