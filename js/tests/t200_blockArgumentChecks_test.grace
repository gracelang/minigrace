dialect "minitest"

type Custom = interface {
    +(_) → Custom
    -(_) → Custom
}

type Join = Custom & ExceptionKind

type Variant = Custom | ExceptionKind

type Meet = Custom + ExceptionKind

testSuite "type error messages" with {

    def nss = { a:Number, b:String, c:String ->
        "GOT 3: {a}, {b}, and {c}"
    }

    test "block argument with wrong type" by {
        assert {
            def b = { n:Number, m:Number -> n + m }
            b.apply("Hello", 4)
        } shouldRaise (TypeError)
              mentioning "argument 1 to block.apply(_,_) does not have type Number"
              and "missing methods %(_), +(_), -(_), ..(_), /(_), @(_), ^(_), abs, acos, asStringDecimals(_), asin, atan, ceiling"
    }
    
    test "cutom type is a type" by {
        assert (Custom.isType) description "isType method on Custom answers {Custom.isType}"
    }
    
    test "Built-in type is a type" by {
        assert (Number.isType) description "isType method on Number answers {Number.isType}"
    }
    
    test "Join type is a type" by {        
        assert (Join.isType) description "isType method on Join answers {Join.isType}"
    }
      
    test "Variant type is a type" by {        
        assert (Variant.isType) description "isType method on Variant answers {Variant.isType}"
    }
      
    test "Meet type is a type" by {        
        assert (Meet.isType) description "isType method on Meet answers {Meet.isType}"
    }
       
    test "block argument with custom type" by {
        assert {
            def b = { n:Custom, m:Number -> n + m }
            b.apply("Hello", 4)
        } shouldRaise (TypeError)
              mentioning "argument 1 to block.apply(_,_) does not have type Custom"
              and "missing methods +(_) and -(_)"
    }

    test "block with correctly-typed arguments" by {
        assert (nss.apply(123, "hi", "lo")) shouldBe "GOT 3: 123, hi, and lo"
    }

    test "block requires a string but given a number" by {
        assert { nss.apply(123, "hi", 789) } shouldRaise (TypeError)
              mentioning "argument 3 to block.apply(_,_,_) does not have type String"
              and "missing methods"
    }
}

testSuite "wrong number of arguments to a block" with {
    test "two arguments" by {
        assert ({ a, b -> "GOT 2: {a} and {b}"}.apply(345, 321))
              shouldBe "GOT 2: 345 and 321"
    }
    test "three arguments" by {
        assert ({ a, b, c -> "GOT 3: {a}, {b}, and {c}"}.apply(123, 456, 789))
              shouldBe "GOT 3: 123, 456, and 789"
    }
    test "three args provided where 2 required" by {
        assert { { a, b -> "GOT 2 " ++ a ++ b }.apply(123, 456, 789) }
              shouldRaise (NoSuchMethod)
              mentioning "requires 2 arguments but given 3"
    }
    test "three args provided where 1 required" by {
        assert { { a -> "GOT 1: " ++ a }.apply(123, 456, 789) }
              shouldRaise (ProgrammingError)
              mentioning "requires 1 argument but given 3"
    }
    test "three args provided where 4 required" by {
        assert { { a, b, c, d -> "GOT4 " ++ a ++ b ++ c ++ d }.apply(123, 456, 789) } shouldRaise (ProgrammingError)
              mentioning "requires 4 arguments but given 3"
    }
}
exit
