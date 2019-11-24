dialect "minitest"
import "option" as option
import "collections" as collections

testSuiteNamed "option tests" with {
    def e = option.empty
    test "type of empty" by {
        assert (e) hasType (option.Option)
    }
    test "empty isEmpty" by {
        assert (e.isEmpty) description "empty isn't empty"
    }
    test "empty isn't full" by {
        deny (e.isFull) description "empty is full!"
    }
    test "empty has no value" by {
        assert {e.value} shouldRaise (option.ValueError)
    }
    test "empty valueIfEmpty" by {
        assert (e.valueIfEmpty { 42 }) shouldBe 42
    }
    test "empty.do does nothing" by {
        e.do { _ → failBecause "empty.do executes its block " }
        assert true
    }
    test "empty ifFull … ifEmpty" by {
        e.ifFull { _ → failBecause "empty.ifFull executes the full block" }
          ifEmpty { assert true }
    }
    test "empty ifEmpty … ifFull" by {
        e.ifEmpty { assert true }
          ifFull { _ → failBecause "empty.ifEmpty executes the full block" }
    }
    test "empty ifFull" by {
        e.ifFull { _ → failBecause "empty.ifFull executes the full block" }
        assert true
    }
    test "empty ifEmpty" by {
        var f := "Bad"
        e.ifEmpty { f := "OK" }
        assert (f) shouldBe "OK"
    }
    
    // Now the tests on a full
    def f = option.full⟦String⟧ "yes"
    test "type of full" by {
        assert (f) hasType (option.Option)
    }
    test "full isn't Empty" by {
        deny (f.isEmpty) description "f is Empty"
    }
    test "full is full" by {
        assert (f.isFull) description "full isn't full!"
    }
    test "full has a value" by {
        assert (f.value) shouldBe "yes"
    }
    test "full valueIfEmpty" by {
        assert (f.valueIfEmpty { 42 }) shouldBe "yes"
    }
    test "full.do does nothing" by {
        var flag := "Bad"
        f.do { value → flag := value }
        assert (flag) shouldBe "yes"
    }
    test "full ifFull … ifEmpty" by {
        f.ifFull { value → assert (value) shouldBe "yes" }
          ifEmpty { failBecause "full.ifEmpty executes the empty block" }
    }
    test "full ifEmpty … ifFull" by {
        f.ifEmpty { failBecause "full.ifEmpty executes the empty block" }
          ifFull { value → assert (value) shouldBe "yes" }
    }
    test "full ifEmpty" by {
        f.ifEmpty { failBecause "full.ifEmpty executes the empty block" }
        assert true
    }
    test "full ifFull" by {
        var flag := "Bad"
        f.ifFull { value → flag := value }
        assert (flag) shouldBe "yes"
    }
}

testSuiteNamed "sequence tests" with {
    def empty = option.empty
    def evens = option.full 2
    
    test "empty option has type Sequence" by {
        assert (empty) hasType (Sequence)
    }
    test "evens has type Sequence⟦Number⟧" by {
        assert (evens) hasType (Sequence⟦Number⟧)
    }
    test "testFiltered Option TypeEnumerable" by {
        def witness =  option.full⟦Number⟧ 3.filter{x → true}
        assert (witness) hasType (Enumerable⟦Number⟧)
    }
    test "test Option not type with wombat" by {
        def witness =  option.full ⟦Number⟧ 1
        deny (witness) hasType (Sequence⟦Number⟧ & interface { wombat })
    }
    test "test Option sizes" by {
        assert(empty.size) shouldBe 0
        assert(evens.size) shouldBe 1
    }
    test "test Option Empty do" by {
        empty.do {each → failBecause "empty empty.do did with {each}"}
        assert(true)
    }

    test "test Option Equality empty" by {
        assert(empty == option.empty) description "empty  Option ≠ itself!"
        assert(empty == list.empty) description "empty  Option ≠ empty list"
    }

    test "test Option Inequality Empty" by {
        deny (empty == option.full 1)
        assert (empty ≠ option.full 1)
        deny (empty == 3)
        deny (empty == evens)
    }

    test "test Option Inequality 2" by {
        deny (evens ≠ option.full 2)
        assert (evens != option.full 1)
    }

    test "test Option Equality 2" by {
        assert (evens == option.full 2) description "even ≠ full 2"
        deny(evens == option.full 1) description "even == full 1"
    }

    test "test Option evens do" by {
        evens.do { each →
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
        assert(option.full 4.fold {a, each → a + each} startingWith 0) shouldBe 4
    }
    
    test "test Option doSeparatedBy empty" by {
        var f := "nothing"
        empty.do { _ → failBecause "do did when Option is empty" }
            separatedBy { f := "kilroy" }
        assert (f) shouldBe ("nothing")
    }

    test "test Option doSeparatedBy full" by {
        var f := "nothing"
        option.full(1).do { each → assert(each)shouldBe(1) }
            separatedBy { f := "kilroy" }
        assert (f) shouldBe ("nothing")
    }

    test "test Option KeysAndValuesDo" by {
        def accum = dictionary.empty
        var e := 1
        evens.keysAndValuesDo { k, v →
            accum.at(k)put(v)
            assert (accum.size) shouldBe (e)
            e := e + 1
        }
        assert(accum) shouldBe (dictionary [1::2])
    }

    test "test Option ReversedEvens" by {
        assert (evens.reversed) shouldBe ( option.full(2) )
        assert (evens.reversed.reversed) shouldBe (evens)
    }

    test "test Option ReversedEmpty" by {
        assert (empty.reversed) shouldBe (empty)
    }

    test "test Option asString NonEmpty" by {
        assert (evens.asString) shouldBe ("option.full(2)")
    }

    test "test Option asString Empty" by {
        assert (empty.asString) shouldBe ("option.empty")
    }

    test "test Option Map Empty" by {
        assert (empty.map{x → x * x} >> list) shouldBe (list.empty)
    }

    test "test Option Map Evens" by {
        assert(evens.map{x → x + 1} >> list) shouldBe (list [3])
    }

    test "test Option Filter Evens" by {
        deny(evens.filter{x → false}.iterator.hasNext)
    }
    
    test "test Option Filter Empty" by {
        deny(empty.filter{x → false}.iterator.hasNext)
        deny(empty.filter{x → true}.iterator.hasNext)
    }

    test "test Option Filter Even" by {
        assert(evens.filter{x → (x % 2) == 0} >> list)
            shouldBe (list [2])
    }

    test "test even Filter Odd" by {
        assert(evens.filter{x → (x % 2) == 1} >> list)
            shouldBe (list [])
    }

    test "test Option MapAndFilter" by {
        assert(evens.map{x → x + 10}.filter{x → (x % 2) == 0} >> list)
            shouldBe (list [12])
    }
    test "test Option ToSetDuplicates" by {
        def theSet = set.withAll( evens )
        assert (theSet) shouldBe (set [2])
        assert (theSet) hasType (Set)
    }
    test "test Option Iterator Empty" by {
        deny (empty.iterator.hasNext)
            description "empty iterator has an element"
    }
    test "test Option Iterator to List" by {
        def accum = list.empty
        def iter =  evens.iterator
        while {iter.hasNext} do { accum.add(iter.next) }
        assert (accum) shouldBe (list [2])
    }
    test "test Option LazyConcat" by {
        def s0 = evens.filter{x → (x % 2) == 1}
        def s2 = evens.filter{x → true}
        assert(s0 ++ s2) shouldBe ( option.full⟦Number⟧ 2)
    }
    test "test Option ExplicitLazyConcat" by {
        def oneToTwo =  collections.lazyConcatenation(option.full 1, option.full 2)
        assert (oneToTwo) shouldBe (1..2)
    }
    test "test Option MultipleConcat onto full" by {
        def oneToSix =  (2..6).fold {acc, next → acc ++ option.full(next)} startingWith (option.full⟦Number⟧ 1)
        assert (oneToSix) shouldBe (1..6)
    }
    test "test Option MultipleConcat onto empty" by {
        def oneToSix =  (1..6).fold {acc, next → acc ++ option.full(next)} startingWith (option.empty⟦Number⟧)
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
    
