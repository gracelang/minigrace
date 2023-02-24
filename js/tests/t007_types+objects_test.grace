dialect "minitest"
import "mirror" as mirror

type Crippled = Dictionary - interface { at(_) }

method expectType (t) toHaveMethod (name) {
    def m = mirror.reflect(t)
    assert (m.methodNames.contains(name)) description "type doesn't have {name} but has  {m.methods}"
}

type t = interface { wombat → Number }
type u = interface { wombat → Number ; kanga → String }
type w = u - t

testSuite "type-level operations" with {

    test "built-in (gracelib) type has ¬ operation" by {
        expectType (Number) toHaveMethod "prefix¬"
    }
    test "standard type has ¬ operation" by {
        expectType (Collection) toHaveMethod "prefix¬"
    }
    test "type literal has ¬ operation" by {
        expectType (t) toHaveMethod "prefix¬"
        expectType (u) toHaveMethod "prefix¬"
    }
    test "type subtraction has ¬ operaton" by {
        expectType (w) toHaveMethod "prefix¬"
        expectType (w) toHaveMethod "prefix¬"
    }
    test "type subtraction has type type" by {
        assert (w) hasType (Type)
    }
}

testSuite "standard types and objects" with {

    test "numbers have type Pattern" by {
        assert 3 hasType (Pattern)
    }
    test "negated type is a pattern" by {
        assert (¬ Dictionary) hasType (Pattern)
        assert (¬ Number) hasType (Pattern)
    }
    test "subtraction type is a type" by {
        assert (Crippled) hasType (Type)
    }
    test "negated subtraction type is a pattern" by {
        assert (¬ Crippled) hasType (Pattern)
    }
    test "Number describes numbers" by {
        assertType (Number) exactlyDescribes 3
    }
    test "strings have type Pattern" by {
        assert "test" hasType (Pattern)
    }
    test "String describes strings" by {
        assertType (String) exactlyDescribes "test"
    }
    test "Boolean describes booleans" by {
        assertType (Boolean) exactlyDescribes true
    }
    test "Sequence describes sequences" by {
        assertType (Sequence⟦Number⟧) exactlyDescribes [1, 2, 3]
    }
    test "> patterns have type Pattern" by {
        assert (>3) hasType (Pattern)
    }
    test "Pattern describes AndPattern" by {
        assertType (Pattern) exactlyDescribes (>3 & <10)
    }
    test "Pattern describes NotPatterns" by {
        assertType (Pattern) exactlyDescribes (¬ <3)
    }
    test "Pattern describes OrPattern" by {
        assertType (Pattern) exactlyDescribes (<3 | >10)
    }
    test "UninitializedVariable has type ExceptionKind" by {
        assert (UninitializedVariable) hasType (ExceptionKind)
    }
    test "UninitializedVariable has type Pattern" by {
        assert (UninitializedVariable) hasType (Pattern)
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
