dialect "minitest"

method unfinished { 
    // declaring this method should be fine
    ...
}

testSuite "gracelib tests" with {
    test "string multiply" by {
        assert ("hello " * 3) shouldBe "hello hello hello "
    }
    test "double dispatch number *" by {
        assert (3 * " world") shouldBe " world world world"
    }
    test "ellipsis" by {
        assert {unfinished} shouldRaise (ProgrammingError)
        assert {...} shouldRaise (ProgrammingError)
    }
}

method trymatch(e) {
    match (e) case {
        n: Number -> n+1
    } case {
        s: String -> "Got " ++ s
    }
}

testSuite "match case" with {
    test "number" by {
        assert(trymatch 4) shouldBe 5
    }
    test "string" by {
        assert(trymatch "beer") shouldBe "Got beer"
    }

    test "boolean" by {
        assert{trymatch (true)} shouldRaise (ProgrammingError)
    }
}

testSuite "for and" with {
    test "same size" by {
        def result = list.empty
        def a's = [1, 2, 3, 4, 5]
        def b's = ["one", "two", "three", "four", "five"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe
            [1::"one", 2::"two", 3::"three", 4::"four", 5::"five"]
    }
    
    test "first smaller" by {
        def result = list.empty
        def a's = [1, 2, 3]
        def b's = ["one", "two", "three", "four", "five"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe [1::"one", 2::"two", 3::"three"]
    }
    
    test "second smaller" by {
        def result = list.empty
        def a's = [1, 2, 3, 4, 5]
        def b's = ["one", "two", "three"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe [1::"one", 2::"two", 3::"three"]
    }
    
    test "first empty" by {
        def result = list.empty
        def a's = []
        def b's = ["one", "two", "three"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
    
    test "second empty" by {
        def result = list.empty
        def a's = [1, 2, 3, 4, 5]
        def b's = []
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
    
    test "both empty" by {
        def result = list.empty
        def a's = []
        def b's = []
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
}

class sc {
    method foo { "foo" }
    method bar { "bar" }
    method asString { "the superobject" }
}

class scp(arg) {
    method foo { arg }
    method bar { "bar" }
    method asString { "the superobject" }
}

class sub {
    inherit sc
        alias foo2 = foo
        exclude bar
        
    method baz { foo ++ " " ++ foo2 }
    method asString is override { "the subobject" }
    method foo is override { "override" }
    method bad { foo ++ self.bar }
}

class subp {
    inherit scp("not foo")
        alias foo2 = foo
        exclude bar
        
    method baz { foo ++ " " ++ foo2 }
    method asString is override { "the subobject" }
    method foo is override { "override" }
    method bad { foo ++ self.bar }
}

testSuite "inheritance modifiers" with {
    def o = sub
    test "access alias in o" by {
        assert {o.foo2} shouldRaise (NoSuchMethod) mentioning "confidential"
    }
    test "internal use of alias in o" by {
        assert (o.baz) shouldBe "override foo"
    }
    test "override o" by {
        assert (o.foo) shouldBe "override"
    }
    test "exclusion o" by {
        assert {o.bar} shouldRaise (NoSuchMethod) mentioning "no method bar"
    }
    test "used exclusion o" by {
        assert {o.bad} shouldRaise (NoSuchMethod) 
            mentioning "no method bar"
            and "Did you mean"
    }
    
    def p = subp
    test "access alias in p" by {
        assert {p.foo2} shouldRaise (NoSuchMethod) mentioning "confidential"
    }
    test "internal use of alias in p" by {
        assert (p.baz) shouldBe "override not foo"
    }
    test "override p" by {
        assert (p.foo) shouldBe "override"
    }
    test "exclusion p" by {
        assert {p.bar} shouldRaise (NoSuchMethod)
    }
    test "used exclusion p" by {
        assert {p.bad} shouldRaise (NoSuchMethod) 
            mentioning "no method bar"
            and "Did you mean"
    }
}

testSuite "collection factories" with {
    test "new list construction" by {
        def l = list [1, 2, 3]
        assert(l) hasType (List)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }
    
    test "collection withAll list construction" by {
        def l = list.withAll [1, 2, 3]
        assert(l) hasType (List)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }
    
    test "new sequence construction" by {
        def l = sequence [1, 2, 3]
        assert(l) hasType (Sequence)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }

    test "collection withAll sequence construction" by {
        def l = sequence.withAll [1, 2, 3]
        assert(l) hasType (Sequence)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }
    
    test "new set construction" by {
        def l = set [1, 2, 3]
        assert(l) hasType (Set)
        assert(l.size) shouldBe 3
        assert(l) shouldBe (set [1, 2, 3])
    }

    test "collection withAll set construction" by {
        def l = set.withAll [1, 2, 3]
        assert(l) hasType (Set)
        assert(l.size) shouldBe 3
        assert(l) shouldBe (set [1, 2, 3])
    }

    test "new dictionary construction" by {
        def l = dictionary ["one"::1, "two"::2, "three"::3]
        assert(l) hasType (Dictionary)
        assert(l.size) shouldBe 3
        assert(l.at "one") shouldBe 1
        assert(l.at "two") shouldBe 2
        assert(l.at "three") shouldBe 3
    }

    test "collection withAll dictionary construction" by {
        def l = dictionary.withAll ["one"::1, "two"::2, "three"::3]
        assert(l) hasType (Dictionary)
        assert(l.size) shouldBe 3
        assert(l.at "one") shouldBe 1
        assert(l.at "two") shouldBe 2
        assert(l.at "three") shouldBe 3
    }
}

class twoTraitsExcludeMove {
    use fishClass alias fishMove = move
        exclude move
    use catClass
        alias catMove = move
        exclude move
    method move {
        "{fishMove} {catMove}"
    }
}

class twoTraitsAndMove {
    use fishClass alias fishMove = move
    use catClass
        alias catMove = move
    method move {
        "{catMove} {fishMove}"
    }
}

trait catClass {
    method move { "walk" }
}
trait  fishClass { 
    method move { "swim" } 
}

class inhAndUseOverride {
    inherit fish
    use cat
    method move { "waddle" }
}
class inhAndUseCombine {
    inherit fish
        alias fishMove = move
        exclude breathe
    use cat
        alias catMove = move
    method move { "waddle, a combination of {fishMove} and {catMove}" }
}
class inhAndUseExcludeFishMove {
    inherit fish exclude move
    use cat
}
class inhAndUseExcludeCatMove {
    inherit fish
    use cat exclude move
}
trait preCat {
    method vocalize { "purr" }
}
trait preFish {
    method breathe { "bubble" }
}
trait cat {
    use preCat
    method move { "walk" }
}
trait fish {
    use preFish
    method move { "swim" }
}

testSuite "conflict resolution" with {
    test "composed method with exclusion" by {
        assert (twoTraitsExcludeMove.move) shouldBe "swim walk"
    }
    test "composed method without exclusion" by {
        assert (twoTraitsAndMove.move) shouldBe "walk swim"
    }
    test "composed method with override" by {
        assert (inhAndUseOverride.move) shouldBe "waddle"
    }
    test "composed method with inheritance exclusion" by {
        assert (inhAndUseExcludeFishMove.move) shouldBe "walk"
    }
    test "composed method with use exclusion" by {
        assert (inhAndUseExcludeCatMove.move) shouldBe "swim"
    }
    test "composed method with use exclusion nested trait" by {
        assert (inhAndUseExcludeCatMove.breathe) shouldBe "bubble"
        assert (inhAndUseExcludeCatMove.vocalize) shouldBe "purr"
    }
    test "aliases used for combination" by {
        assert (inhAndUseCombine.move) shouldBe "waddle, a combination of swim and walk"
        assert {inhAndUseCombine.breathe} shouldRaise (NoSuchMethod)
        assert (inhAndUseCombine.vocalize) shouldBe "purr"
    }
    test "aliases used for combination excludes breathe" by {
        assert {inhAndUseCombine.breathe} shouldRaise (NoSuchMethod)
    }
    test "aliases used for combination can vocalize" by {
        assert (inhAndUseCombine.vocalize) shouldBe "purr"
    }
}

trait top {
    method x { "x" }
    method y { "y" }
}

class bottom {
    use top 
        alias y = x
        alias x = y
    method publicX { x }
    method publicY { y }
}

class justY {
    use top 
        exclude x
        alias y = x
    method publicX { self.x }   
    method publicY { y }
}


testSuite "alias excluded" with {
    test "bottom.x is y" by {
        assert (bottom.publicX) shouldBe "y"
    }
    test "bottom.y is x" by {
        assert (bottom.publicY) shouldBe "x"
    }

    test "justY.y is x" by {
        assert (justY.publicY) shouldBe "x"
    }
    test "there is no x" by {
        assert {justY.publicX} shouldRaise (NoSuchMethod)
    }
}

testSuite "number methods" with {
    test "same hash" by {
        def n4041 = 4041
        def n4041a = 4041
        def n4041b = 4041
        def n4041c = 4041
        assert (n4041.hash == n4041a.hash)
            description "4041.hash = {4041.hash} but n4041a.hash = {n4041a.hash} "
        assert (n4041.hash == n4041b.hash)
            description "4041.hash = {4041.hash} but n4041b.hash = {n4041b.hash} "
        assert (n4041.hash == n4041c.hash)
            description "4041.hash = {4041.hash} but n4041c.hash = {n4041c.hash} "
    }

    test "NaN hash" by {
        def NaN = 0/0
        assert {NaN.hash} shouldRaise (RequestError)
    }

    test "Zero hash" by {
        assert ((-0.0).hash) shouldBe ((0.0).hash)
    }
    test "odd isEven" by {
        deny (234567891.isEven) description "234567891 is even"
    }
    test "even isEven" by {
        assert (234467892.isEven) description "234467892 isn't even"
    }
    test "negative odd isEven" by {
        deny ((-234567891).isEven) description "-234567891 is even"
    }
    test "negative even isEven" by {
        assert ((-234467892).isEven) description "-234467892 isn't even"
    }
    test "non-integer isEven" by {
        deny (12.5.isEven) description "12.5 is even"
    }
    test "negative non-integer isEven" by {
        deny ((-12.5).isEven) description "12.5 is even"
    }
    test "infinite isEven" by {
        deny (infinity.isEven) description "infinity is even"
    }
    test "negative infinity isEven" by {
        deny ((-infinity).isEven) description "-infinity is even"
    }
    test "NaN isEven" by {
        deny ((0/0).isEven) description "{0/0} is even"
    }
    test "odd isOdd" by {
        assert (234567891.isOdd) description "234567891 isn't odd"
    }
    test "even isOdd" by {
        deny (234467892.isOdd) description "234467892 is odd"
    }
    test "negative odd isOdd" by {
        assert ((-234567891).isOdd) description "-234567891 isn't odd"
    }
    test "negative even isOdd" by {
        deny ((-234467892).isOdd) description "-234467892 is odd"
    }
    test "non-integer isOdd" by {
        deny (12.5.isOdd) description "12.5 is odd"
    }
    test "negative non-integer isOdd" by {
        deny ((-12.5).isOdd) description "12.5 is odd"
    }
    test "infinite isOdd" by {
        deny (infinity.isOdd) description "infinity is odd"
    }
    test "negative infinity isOdd" by {
        deny ((-infinity).isOdd) description "-infinity is odd"
    }
    test "NaN isOdd" by {
        deny ((0/0).isOdd) description "{0/0} is odd"
    }
    test "isInteger" by {
        deny (12.00001.isInteger) description "12.00001 is an Integer"
        assert (23456789.isInteger) description "23456789 is not an Integer"
        assert ((2^62).isInteger) description "2^62 is not an Integer"
        deny (((2^48)+ 0.5).isInteger) description "2^48 + 0.5 is an Integer"
    }
    test "decimal digits 10" by {
        def n = 17.123456789012345678909
        assert (n.asStringDecimals 10) shouldBe "17.1234567890"
    }
    test "decimal digits 6 rounds" by {
        def n = 17.123456789012345678909
        assert (n.asStringDecimals 6) shouldBe "17.123457"  // should round
    }
    test "decimal digits 10 rounds" by {
        def n = 17.12345678999
        assert (n.asStringDecimals 10) shouldBe "17.1234567900"  // should round
    }
    test "decimal digits 14" by {
        def n = 17.123456789012345678909
        assert (n.asStringDecimals 14) shouldBe "17.12345678901234"
    }
    test "decimal digits 20" by {
        def n = 17.123456789
        def s = n.asStringDecimals 20
        assert (s.startsWith "17.12345678")
            description "{n.asDebugString} with 20 decimals is {s}"
        assert (s.size == (20 + 3))
            description "{n.asDebugString} with 20 decimals is {s}, which is of size {s.size}"
    }
    test "decimal digits 21" by {
        def n = 17.123456789
        assert { n.asStringDecimals 21 } shouldRaise (RequestError)
    }
}

exit
