dialect "minitest"
import "option" as opt

testSuiteNamed "option tests" with {
    def n = opt.none
    test "none isNone" by {
        assert (n.isNone) description "n isn't None"
    }
    test "none isEmpty" by {
        assert (n.isEmpty) description "n isn't Empty"
    }
    test "none isn't some" by {
        deny (n.isSome) description "none is Some!"
    }
    test "none has no value" by {
        assert {n.value} shouldRaise (opt.ValueError)
    }
    test "none.do does nothing" by {
        n.do { failBecause "none.do executes its block " }
        assert true
    }
    test "none ifSome … ifNone" by {
        n.ifSome { failBecause "none.ifSome executes the some block" }
          ifNone { assert true }
    }
    test "none ifNone … ifSome" by {
        n.ifNone { assert true }
          ifSome { failBecause "none.ifNone executes the some block" }
    }
    test "none ifSome" by {
        n.ifSome { failBecause "none.ifSome executes the some block" }
        assert true
    }
    test "none ifNone" by {
        var s := "Bad"
        n.ifNone { s := "OK" }
        assert (s) shouldBe "OK"
    }
    
    // Now the tests on a some
    def s = opt.some⟦String⟧ "yes"
    test "some isNone" by {
        deny (s.isNone) description "s is None"
    }
    test "some isEmpty" by {
        deny (s.isEmpty) description "s is Empty"
    }
    test "some isn't some" by {
        assert (s.isSome) description "some isn't Some!"
    }
    test "some has a value" by {
        assert (s.value) shouldBe "yes"
    }
    test "some.do does nothing" by {
        var flag := "Bad"
        s.do { value → flag := value }
        assert (flag) shouldBe "yes"
    }
    test "some ifSome … ifNone" by {
        s.ifSome { value → assert (value) shouldBe "yes" }
          ifNone { failBecause "some.ifNone executes the none block" }
    }
    test "some ifNone … ifSome" by {
        s.ifNone { failBecause "some.ifNone executes the none block" }
          ifSome { value → assert (value) shouldBe "yes" }
    }
    test "some ifNone" by {
        s.ifNone { failBecause "some.ifNone executes the none block" }
        assert true
    }
    test "some ifSome" by {
        var flag := "Bad"
        s.ifSome { value → flag := value }
        assert (flag) shouldBe "yes"
    }
}

testSuiteNamed "sequence tests" with {
    def empty = opt.none
    def evens = opt.some 2
    
    test "empty option has type Sequence" by {
        assert (empty) hasType (Sequence)
    }
    test "evens has type Sequence⟦Number⟧" by {
        assert (evens) hasType (Sequence⟦Number⟧)
    }
    test "testFiltered Option TypeEnumerable" by {
        def witness =  opt.some⟦Number⟧ 3.filter{x -> true}
        assert (witness) hasType (Enumerable⟦Number⟧)
    }
    test "test Option not type with wombat" by {
        def witness =  opt.some ⟦Number⟧ 1
        deny (witness) hasType (Sequence⟦Number⟧ & type { wombat })
    }
    test "test Option sizes" by {
        assert(empty.size) shouldBe 0
        assert(evens.size) shouldBe 1
    }

    test "test Option EmptyDo" by {
        empty.do {each -> failBecause "empty empty.do did with {each}"}
        assert(true)
    }

    test "test Option Equality empty" by {
        assert(empty == opt.none) description "empty  Option  ≠ itself!"
        assert(empty == emptyList) description "empty  Option  ≠ empty list"
    }

    test "test Option InequalityEmpty" by {
        deny (empty == opt.some 1)
        assert (empty ≠ opt.some 1)
        deny (empty == 3)
        deny (empty == evens)
    }

    test "test Option Inequality 2" by {
        deny (evens ≠ opt.some 2)
        assert (evens != opt.some 1)
    }

    test "test Option Equality 2" by {
        assert (evens == opt.some 2) description "even ≠ some 2"
        deny(evens == opt.some 1) description "even == some 1"
    }

    test "test Option evens do" by {
        evens.do { each ->
            assert (each) shouldBe 2
        }
    }
    test "test Option Contains" by {
        assert (evens.contains(2)) description "evens does not contain 2"
        deny (evens.contains(0)) description "oneToFive contains 0"
        deny (evens.contains(6)) description "oneToFive contains 6"
    }

    test "test Option First" by {
        assert{empty.first} shouldRaise (BoundsError)
        assert(evens.first) shouldBe 2
    }

    test "test Option At" by {
        def naN = "fff".asNumber
        assert {empty.at 1 } shouldRaise (BoundsError)
        assert (evens.at 1 ) shouldBe 2
        assert {evens.at 4 } shouldRaise (BoundsError)
        assert {evens.at 2} shouldRaise (BoundsError)
        assert {evens.at(naN)} shouldRaise (BoundsError)
    }

    test "test Option Ordinals" by {
        assert {empty.first} shouldRaise (BoundsError)
        assert (evens.first) shouldBe 2
        assert {evens.second} shouldRaise (BoundsError)
    }

    test "test empty ++ oneToFive" by {
        def oneToFive = 1..5
        assert(empty ++ oneToFive) shouldBe (oneToFive)
        assert(oneToFive ++ empty) shouldBe (oneToFive)
    }

    test "test Option ConcatWithNonEmpty" by {
        def oneToFive = 1..5
        assert(oneToFive ++ evens) shouldBe( sequence [1, 2, 3, 4, 5, 2])
        assert(evens ++ oneToFive) shouldBe( sequence [2, 1, 2, 3, 4, 5])
    }

    test "test Option Fold" by {
        assert(opt.some 4.fold {a, each -> a + each} startingWith 0) shouldBe 4
    }
    
    test "test Option doSeparatedBy empty" by {
        var s := "nothing"
        empty.do { failBecause "do did when Option is empty" }
            separatedBy { s := "kilroy" }
        assert (s) shouldBe ("nothing")
    }

    test "test Option doSeparatedBy some" by {
        var s := "nothing"
        opt.some(1).do { each -> assert(each)shouldBe(1) }
            separatedBy { s := "kilroy" }
        assert (s) shouldBe ("nothing")
    }

    test "test Option KeysAndValuesDo" by {
        def accum = emptyDictionary
        var n := 1
        evens.keysAndValuesDo { k, v ->
            accum.at(k)put(v)
            assert (accum.size) shouldBe (n)
            n := n + 1
        }
        assert(accum) shouldBe (dictionary [1::2])
    }

    test "test Option ReversedEvens" by {
        assert (evens.reversed) shouldBe ( opt.some(2) )
        assert (evens.reversed.reversed) shouldBe (evens)
    }

    test "test Option ReversedEmpty" by {
        assert (empty.reversed) shouldBe (empty)
    }

    test "test Option asString NonEmpty" by {
        assert (evens.asString) shouldBe ("some(2)")
    }

    test "test Option asString Empty" by {
        assert (empty.asString) shouldBe ("none")
    }

    test "test Option Map Empty" by {
        assert (empty.map{x -> x * x}.into (emptyList)) shouldBe (emptyList)
    }

    test "test Option Map Evens" by {
        assert(evens.map{x -> x + 1}.into (emptyList)) shouldBe (list [3])
    }

    test "test Option Filter Evens" by {
        deny(evens.filter{x -> false}.iterator.hasNext)
    }
    
    test "test Option Filter None" by {
        deny(empty.filter{x -> false}.iterator.hasNext)
        deny(empty.filter{x -> true}.iterator.hasNext)
    }

    test "test Option Filter Even" by {
        assert(evens.filter{x -> (x % 2) == 0}.into (emptyList))
            shouldBe (list [2])
    }

    test "test even Filter Odd" by {
        assert(evens.filter{x -> (x % 2) == 1}.into (emptyList))
            shouldBe (list [])
    }

    test "test Option MapAndFilter" by {
        assert(evens.map{x -> x + 10}.filter{x -> (x % 2) == 0}.into (emptyList))
            shouldBe (list [12])
    }
    test "test Option ToSetDuplicates" by {
        def theSet = set( evens )
        assert (theSet) shouldBe (set [2])
        assert (theSet) hasType (Set)
    }
    test "test Option Iterator Empty" by {
        deny (empty.iterator.hasNext)
            description "empty iterator has an element"
    }
    test "test Option Iterator to List" by {
        def accum = emptyList
        def iter =  evens.iterator
        while {iter.hasNext} do { accum.add(iter.next) }
        assert (accum) shouldBe (list [2])
    }
    test "test Option asDictionary" by {
        assert(evens.asDictionary) shouldBe
            (dictionary [1::2])
    }
    test "test Option LazyConcat" by {
        def s0 = evens.filter{x -> (x % 2) == 1}
        def s2 = evens.filter{x -> true}
        assert(s0 ++ s2) shouldBe ( opt.some⟦Number⟧ 2)
    }
    test "test Option ExplicitLazyConcat" by {
        def oneToTwo =  collections.lazyConcatenation(opt.some 1, opt.some 2)
        assert (oneToTwo) shouldBe (1..2)
    }
    test "test Option MultipleConcat onto some" by {
        def oneToSix =  (2..6).fold {acc, next → acc ++ opt.some(next)} startingWith (opt.some⟦Number⟧ 1)
        assert (oneToSix) shouldBe (1..6)
    }
    test "test Option MultipleConcat onto none" by {
        def oneToSix =  (1..6).fold {acc, next → acc ++ opt.some(next)} startingWith (opt.none⟦Number⟧)
        assert (oneToSix) shouldBe (1..6)
    }
    test "Option even indexOf found " by {
        assert (evens.indexOf 2) shouldBe 1
    }
    test "Option even indexOf not found " by {
        assert {evens.indexOf 3} shouldRaise (NoSuchObject)
    }
    test "Option even indexOf found with ifAbsent" by {
        assert (evens.indexOf 2 ifAbsent {failBecause "ifAbsent block was executed"}) shouldBe 1
    }
    test "Option even indexOf not found with ifAbsent" by {
        assert (evens.indexOf 3 ifAbsent { "OK" }) shouldBe "OK"
    }
}
    
