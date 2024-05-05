dialect "minitest"
import "mirror" as mirror

method abcd (a:Number, b:String, c:List) -> Dictionary { ... }
method aBcd (a:Number, b, c:List) -> Dictionary { ... }
method ABCd (a, b, c) -> Dictionary { ... }
method abcD (a:Number, b:String, c:List) { ... }
method ABCD (a, b, c) { ... }

method abcd_1⟦T⟧ (a:T, b:String, c:List) -> Dictionary { ... }
method aBcd_2⟦T, U⟧ (a:T, b, c:U) -> Dictionary { ... }
method ABCd_1⟦R⟧ (a, b, c) -> R { ... }
method abcd_3⟦T, U, R⟧ (a:T, b:U | R, c:T) -> (T & U) | R { ... }
method ABCD_1⟦T, U⟧ (a, b, c) { ... }

type Unique = interface { unique(arg:Unique) -> Unique }

def mm = mirror.reflect(self)

testSuite "method parameter types" with {
    test "all fixed parameter names" by {
        def abcd_M = mm.onMethod "abcd(_,_,_)";
        assert (abcd_M.paramNames) shouldBe ["a", "b", "c"]
    }

    test "all fixed parameter types" by {
        def abcd_M = mm.onMethod "abcd(_,_,_)"
        assert (abcd_M.paramTypes) shouldBe [Number, String, List]
    }
    test "all fixed parameter result" by {
        def abcd_M = mm.onMethod "abcd(_,_,_)"
        assert (abcd_M.returnType) shouldBe (Dictionary)
    }
    test "one unknown parameter type" by {
        def aBcd_M = mm.onMethod "aBcd(_,_,_)"
        assert (aBcd_M.paramTypes) shouldBe [Number, Unknown, List]
    }
    test "three unknown parameter types" by {
        def ABCd_M = mm.onMethod "ABCd(_,_,_)"
        assert (ABCd_M.paramTypes) shouldBe [Unknown, Unknown, Unknown]
    }
    test "unknown result" by {
        def abcD_M = mm.onMethod "abcD(_,_,_)"
        assert (abcD_M.returnType) shouldBe (Unknown)
    }
    test "one type parameter name" by {
        def abcd_1_M = mm.onMethod "abcd_1(_,_,_)"
        assert (abcd_1_M.typeParamNames) shouldBe ["T"]
    }
    test "one parametric type" by {
        def abcd_1_M = mm.onMethod "abcd_1(_,_,_)"
        assert (abcd_1_M.paramTypes.apply(Unique)) shouldBe [Unique, String, List]
    }
    test "one parametric type fixed result" by {
        def abcd_1_M = mm.onMethod "abcd_1(_,_,_)"
        assert (abcd_1_M.returnType.apply(Unique)) shouldBe (Dictionary)
    }
    test "two parametric types" by {
        def aBcd_2_M = mm.onMethod "aBcd_2(_,_,_)"
        assert (aBcd_2_M.paramTypes.apply(Unique, Number)) shouldBe [Unique, Unknown, Number]
    }
    test "two parametric types with bad arg 1" by {
        def aBcd_2_M = mm.onMethod "aBcd_2(_,_,_)"
        assert {aBcd_2_M.paramTypes.apply(17, Number)} shouldRaise (RequestError)
            mentioning "argument 1"
    }
    test "two parametric types produce fixed result" by {
        def aBcd_2_M = mm.onMethod "aBcd_2(_,_,_)"
        assert (aBcd_2_M.returnType.apply(Unique, Number)) shouldBe (Dictionary)
    }
    test "two parametric types with bad arg 2" by {
        def aBcd_2_M = mm.onMethod "aBcd_2(_,_,_)"
        assert {aBcd_2_M.paramTypes.apply(Unique, "Hello")} shouldRaise (RequestError)
            mentioning "argument 2"
    }
    test "one parametric type parametric result" by {
        def ABCd_1_M = mm.onMethod "ABCd_1(_,_,_)"
        assert (ABCd_1_M.returnType.apply(Unique)) shouldBe (Unique)
    }
}

exit
