dialect "minitest"

testSuite "standard types and objects" with {

    test "numbers have type Number" by {
        assert 3 hasType (Number)
    }
    test "Number describes numbers" by {
        assertType (Number) describes 3
    }
    test "strings have type String" by {
        assert "test" hasType (String)
    }
    test "String describes strings" by {
        assertType (String) describes "test"
    }
    test "booleans have type Boolean" by {
        assert true hasType (Boolean)
    }
    test "Boolean describes booleans" by {
        assertType (Boolean) describes true
    }
    test "sequences have type Sequence" by {
        assert [1, 2] hasType (Sequence⟦Number⟧)
    }
    test "Sequence describes sequences" by {
        assertType (Sequence⟦Number⟧) describes [1, 2, 3]
    }
    test "> patterns have type Pattern" by {
        assert (>3) hasType (Pattern)
    }
    test "AndPatterns have type Pattern" by {
        assert (>3 & <10) hasType (Pattern)
    }
    test "Pattern describes AndPattern" by {
        assertType (Pattern) describes (>3 & <10)
    }
    test "UninitializedVariable has type ExceptionKind" by {
        assert (UninitializedVariable) hasType (ExceptionKind)
    }
    test "ExceptionKind describes UninitializedVariable" by {
        assertType (ExceptionKind) describes (UninitializedVariable)
    }
    test "exceptions haveType Exception" by {
        try {
            UninitializedVariable.raise "test"
        } catch {ex →
            assert (ex) hasType (ExceptionPacket)
        }
    }
    test "Exception describes exceptions" by {
        try {
            UninitializedVariable.raise "this is only a test"
        } catch {ex →
            assertType (ExceptionPacket) describes (ex)
        }
    }
    test "points have type Point" by {
        assert (1@2) hasType (Point)
    }
    test "Point describes points" by {
        assertType (Point) describes (1@2)
    }
    test "blocks have type FunctionN" by {
        assert {1} hasType (Function0⟦Number⟧)
        assert {a → 1} hasType (Function1⟦Unknown, Number⟧)
        assert {a, b → 1} hasType (Function2⟦Unknown, Unknown, Number⟧)
        assert {a, b, c → 1} hasType (Function3⟦Unknown, Unknown, Unknown Number⟧)
    }
    test "FunctionN describes blocks" by {
        assertType (Function0⟦Number⟧) describes {1}
        assertType (Function1⟦Unknown, Number⟧) describes {a → 1}
        assertType (Function2⟦Unknown, Unknown, Number⟧) describes {a, b → 1}
        assertType (Function3⟦Unknown, Unknown, Unknown Number⟧) describes {a, b, c → 1}
    }
}

method m {
    def q = object {
        method asString { "the object q" }
    }
    q
}

testSuite "object in method" with {
    test "m answers q" by {
        assert (m.asString) shouldBe "the object q"
    }
}

exit
