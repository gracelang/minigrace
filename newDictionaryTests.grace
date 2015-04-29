import "gUnit" as gU
import "newCollections" as collections

type Dictionary<K, T> = collections.Dictionary<K, T>
type Enumerable<T> = collections.Enumerable<T>

def dictionary = collections.dictionary
def set = collections.set
def sequence = collections.sequence

def dictionaryTest = object {
    factory method forMethod(m) {
        inherits gU.testCaseNamed(m)
        def oneToFive = dictionary.with("one"::1, "two"::2, "three"::3, 
            "four"::4, "five"::5)
        def evens = dictionary.with("two"::2, "four"::4, "six"::6, "eight"::8)
        def empty = dictionary.empty
        
        
        method testDictionaryTypeCollection {
            assert (oneToFive) hasType (Collection<Binding<String,Number>>)
        }
        method testDictionaryTypeDictionary {
            assert (oneToFive) hasType (Dictionary<String,Number>)
        }
        method testDictionaryTypeNotTypeWithWombat {
            deny (oneToFive) hasType (Dictionary<String,Number> & type { wombat })
        }

        method testDictionarySize {
            assert(oneToFive.size) shouldBe 5
            assert(empty.size) shouldBe 0
            assert(evens.size) shouldBe 4
        }

        method testDictionarySizeAfterRemove {
            oneToFive.removeKey "one"
            deny(oneToFive.containsKey "one") description "\"one\" still present"
            oneToFive.removeKey "two"
            oneToFive.removeKey "three"
            assert(oneToFive.size) shouldBe 2
        }
        
        method testDictionaryContentsAfterMultipleRemove {
            oneToFive.removeKey("one", "two", "three")
            assert(oneToFive.size) shouldBe 2
            deny(oneToFive.containsKey "one") description "\"one\" still present"
            deny(oneToFive.containsKey "two") description "\"two\" still present"
            deny(oneToFive.containsKey "three") description "\"three\" still present"
            assert(oneToFive.containsKey "four")
            assert(oneToFive.containsKey "five")
        }
        
        method testAsString {
            def dict2 = dictionary.with("one"::1, "two"::2)
            def dStr = dict2.asString
            assert((dStr == "dict⟬one::1, two::2⟭").orElse{dStr == "dict⟬two::2, one::1⟭"})
                description "\"{dStr}\" should be \"dict⟬one::1, two::2⟭\""
        }
        
        method testAsStringEmpty {
            assert(empty.asString) shouldBe "dict⟬⟭"
        }

        method testDictionaryEmptyDo {
            empty.do {each -> failBecause "emptySet.do did with {each}"}
            assert (true)   // so that there is always an assert
        }

        method testDictionaryEqualityEmpty {
            assert(empty == dictionary.empty)
            deny(empty != dictionary.empty)
        }
        method testDictionaryInequalityEmpty {
            deny(empty == dictionary.with("one"::1)) 
                description "empty dictionary equals dictionary with \"one\"::1"
            assert(empty != dictionary.with("two"::2))
                description "empty dictionary equals dictionary with \"two\"::2"
            deny(empty == 3)
            deny(empty == evens)
        }
        method testDictionaryInequalityFive {
            evens.at "ten" put 10
            assert(evens.size == oneToFive.size) description "evens.size should be 5"
            deny(oneToFive == evens)
            assert(oneToFive != evens)
        }
        method testDictionaryEqualityFive {
            assert(oneToFive == dictionary.with("one"::1, "two"::2, "three"::3,
                "four"::4, "five"::5))
        }
        method testDictionaryKeysAndValuesDo {
            def accum = dictionary.empty
            var n := 1
            oneToFive.keysAndValuesDo { k, v ->
                accum.at(k)put(v)
                assert (accum.size) shouldBe (n)
                n := n + 1
            }
            assert(accum) shouldBe (oneToFive)
        }
        method testDictionaryEmptyBindingsIterator {
            deny (empty.bindings.iterator.hasNext) 
                description "the empty bindings iterator has elements"
        }
        method testDictionaryEvensBindingsIterator {
            def ei = evens.bindings.iterator
            assert (evens.size == 4) description "evens doesn't contain 4 elements!"
            assert (ei.hasNext) description "the evens iterator has no elements"
            def copyDict = dictionary.with(ei.next, ei.next, ei.next, ei.next)
            deny (ei.hasNext) description "the evens iterator has more than 4 elements"
            assert (copyDict) shouldBe (evens)
        }
        method testDictionaryAdd {
            assert (empty.at "nine" put(9)) 
                shouldBe (dictionary.with("nine"::9))
            assert (evens.at "ten" put(10).values.onto(set)) 
                shouldBe (set.with(2, 4, 6, 8, 10))
        }
        method testDictionaryRemoveKeyTwo {
            assert (evens.removeKey "two".values.onto(set)) shouldBe (set.with(4, 6, 8))
            assert (evens.values.onto(set)) shouldBe (set.with(4, 6, 8))
        }
        method testDictionaryRemoveValue4 {
            assert (evens.size == 4) description "evens doesn't contain 4 elements"
            evens.removeValue(4)
            assert (evens.size == 3) 
                description "after removing 4, 3 elements should remain"
            assert (evens.containsKey "two") description "Can't find key \"two\""
            assert (evens.containsKey "six") description "Can't find key \"six\""
            assert (evens.containsKey "eight") description "Can't find key \"eight\""
            deny (evens.containsKey "four") description "Found key \"four\""
            assert (evens.removeValue(4).values.onto(set)) shouldBe (set.with(2, 6, 8))
            assert (evens.values.onto(set)) shouldBe (set.with(2, 6, 8))
            assert (evens.keys.onto(set)) shouldBe (set.with("two", "six", "eight"))
        }
        method testDictionaryRemoveMultiple {
            evens.removeValue(4, 6, 8)
            assert (evens) shouldBe (dictionary.at"two"put(2))
        }
        method testDictionaryRemove5 {
            assert {evens.removeKey(5)} shouldRaise (NoSuchObject)
        }
        method testDictionaryRemoveKeyFive {
            assert {evens.removeKey("Five")} shouldRaise (NoSuchObject)
        }
        method testDictionaryChaining {        
            oneToFive.at "eleven" put(11).at "twelve" put(12).at "thirteen" put(13)
            assert (oneToFive.values.onto(set)) shouldBe (set.with(1, 2, 3, 4, 5, 11, 12, 13))
        }
        method testDictionaryPushAndExpand {
            evens.removeKey "two"
            evens.removeKey "four"
            evens.removeKey "six"
            evens.at "ten" put(10)
            evens.at "twelve" put(12)
            evens.at "fourteen" put(14)
            evens.at "sixteen" put(16)
            evens.at "eighteen" put(18)
            evens.at "twenty" put(20)
            assert (evens.values.onto(set)) 
                shouldBe (set.with(8, 10, 12, 14, 16, 18, 20))
        }

        method testDictionaryFold {
            assert(oneToFive.fold{a, each -> a + each}startingWith(5))shouldBe(20)
            assert(evens.fold{a, each -> a + each}startingWith(0))shouldBe(20)        
            assert(empty.fold{a, each -> a + each}startingWith(17))shouldBe(17)
        }
        
        method testDictionaryDoSeparatedBy {
            var s := ""
            evens.removeValue(2, 4)
            evens.do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
            assert ((s == "6, 8") || (s == "8, 6")) 
                description "{s} should be \"8, 6\" or \"6, 8\""
        }

        method testDictionaryDoSeparatedByEmpty {
            var s := "nothing"
            empty.do { failBecause "do did when list is empty" }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }
        
        method testDictionaryDoSeparatedBySingleton {
            var s := "nothing"
            set.with(1).do { each -> assert(each)shouldBe(1) } 
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testDictionaryAsStringNonEmpty {
            evens.removeValue(6, 8)
            assert ((evens.asString == "dict⟬two::2, four::4⟭") ||
                        (evens.asString == "dict⟬four::4, two::2⟭"))
                        description "evens.asString = {evens.asString}"
        }

        method testDictionaryAsStringEmpty {
            assert (empty.asString) shouldBe ("dict⟬⟭")
        }

        method testDictionaryMapEmpty {
            assert (empty.map{x -> x * x}.onto(set)) shouldBe (set.empty)
        }
        
        method testDictionaryMapEvens {
            assert(evens.map{x -> x + 1}.onto(set)) shouldBe (set.with(3, 5, 7, 9))
        }

        method testDictionaryMapEvensInto {
            assert(evens.map{x -> x + 10}.into(set.withAll(evens)))
                shouldBe (set.with(2, 4, 6, 8, 12, 14, 16, 18))
        }

        method testDictionaryFilterNone {
            assert(oneToFive.filter{x -> false}.isEmpty)
        }
        
        method testDictionaryFilterEmpty {
            assert(empty.filter{x -> (x % 2) == 1}.isEmpty)
        }

        method testDictionaryFilterOdd {
            assert(oneToFive.filter{x -> (x % 2) == 1}.onto(set))
                shouldBe (set.with(1, 3, 5))
        }
        
        method testDictionaryMapAndFilter {
            assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1}.asSet)
                shouldBe (set.with(11, 13, 15))
        }
        method testDictionaryBindings {
            assert(oneToFive.bindings.onto(set)) shouldBe (
                set.with("one"::1, "two"::2, "three"::3, "four"::4, "five"::5))
        }
        method testDictionaryKeys {
            assert(oneToFive.keys.onto(set)) shouldBe (
                set.with("one", "two", "three", "four", "five") )
        }
        method testDictionaryValues {
            assert(oneToFive.values.onto(set)) shouldBe (
                set.with(1, 2, 3, 4, 5) )
        }
        
        method testDictionaryCopy {
            def evensCopy = evens.copy
            evens.removeKey("two")
            evens.removeValue(4)
            assert (evens.size) shouldBe 2
            assert (evensCopy) shouldBe 
                (dictionary.with("two"::2, "four"::4, "six"::6, "eight"::8))
        }
        
        method testDictionaryAsDictionary {
            assert(evens.asDictionary) shouldBe (evens)
        }
        
        method testDictionaryValuesEmpty {
            def vs = empty.values
            assert(vs.isEmpty)
            assert(vs) shouldBe (sequence.empty)
        }
        method testDictionaryKeysEmpty {
            assert(empty.keys) shouldBe (sequence.empty)
        }
        method testDictionaryValuesSingle {
            assert(dictionary.with("one"::1).values) shouldBe
                (sequence.with 1)
        }
        method testDictionaryKeysSingle {
            assert(dictionary.with("one"::1).keys) shouldBe
                (sequence.with "one")
        }
        method testDictionaryBindingsEvens {
            assert(evens.bindings.asSet) shouldBe
                (set.with("two"::2, "four"::4, "six"::6, "eight"::8))
        }
        method testDictionarySortedOnValues {
            assert(evens.bindings.sortedBy{b1, b2 -> b1.value.compare(b2.value)})
                shouldBe (sequence.with("two"::2, "four"::4, "six"::6, "eight"::8))
        }
        method testDictionarySortedOnKeys {
            assert(evens.bindings.sortedBy{b1, b2 -> b1.key.compare(b2.key)})
                shouldBe (sequence.with("eight"::8, "four"::4, "six"::6, "two"::2))
        }
    }
}

def dictTests = gU.testSuite.fromTestMethodsIn(dictionaryTest)
dictTests.runAndPrintResults
