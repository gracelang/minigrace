import "gUnit" as gU
import "natList" as natList

def list = natList.list

class listTest.forMethod(m) {
    inherit gU.testCaseNamed(m)
    
    var oneToFive
    var evens
    var empty

    method setup {
        oneToFive := list [1, 2, 3, 4, 5]
        evens := list [2, 4, 6, 8]
        empty := list.empty
    }

    method testListSize {
        assert(oneToFive.size) shouldBe 5
        assert(empty.size) shouldBe 0
        assert(evens.size) shouldBe 4
    }
    
    method testListEmptyDo {
        empty.do {each -> failBecause "emptyList.do did with {each}"}
        assert (true)
    }
    
    method testListEqualityEmpty {
        assert(empty == list.empty) description "empty list ≠ itself!"
        assert(empty == sequence.empty) description "empty list ≠ empty sequence"
    }
    
    method testListInequalityEmpty {
        deny(empty == list [1])
        assert(empty != list [1])
        deny(empty == 3)
        deny(empty == evens)
    }
    
    method testListInequalityFive {
        deny(oneToFive == list [1, 2, 3, 4, 6])
        assert(oneToFive != list [1, 2, 3, 4, 6])
    }

    method testListEqualityFive {
        def isEqual = (oneToFive == list [1, 2, 3, 4, 5])
        assert(isEqual)
        deny(oneToFive != list [1, 2, 3, 4, 5])
    }

    method testListOneToFiveDo {
        var element := 1
        oneToFive.do { each -> 
            assert (each) shouldBe (element)
            element := element + 1
        }
    }
    method testListContains {
        assert (oneToFive.contains(1)) description "oneToFive does not contain 1"
        assert (oneToFive.contains(5)) description "oneToFive does not contain 5"
        deny (oneToFive.contains(0)) description "oneToFive contains 0"
        deny (oneToFive.contains(6)) description "oneToFive contains 6"
    }
    
    method testListFirst {
        assert{empty.first} shouldRaise (BoundsError)
        assert(evens.first) shouldBe (2)
        assert(oneToFive.first) shouldBe (1)
    }
    
    method testListAt {
        assert {empty.at(1)} shouldRaise (BoundsError)
        assert (oneToFive.at(1)) shouldBe (1)
        assert (oneToFive.at(1)) shouldBe (1)
        assert (oneToFive.at(5)) shouldBe (5)
        assert (evens.at(4)) shouldBe (8)
        assert {evens.at(5)} shouldRaise (BoundsError)
    }

    method testListOrdinals {
        assert {empty.first} shouldRaise (BoundsError)
        assert (oneToFive.first) shouldBe (1)
        assert (oneToFive.second) shouldBe (2)
        assert (oneToFive.third) shouldBe (3)
        assert (evens.fourth) shouldBe (8)
        assert {evens.fifth} shouldRaise (BoundsError)
    }

    method testListAtPut {
        oneToFive.at(1) put (11)
        assert (oneToFive.at(1)) shouldBe (11)
        oneToFive.at(2) put (12)
        assert (oneToFive.at(2)) shouldBe (12)
        assert (oneToFive.at(3)) shouldBe (3)
        assert {evens.at 6 put 10} shouldRaise (BoundsError)
        assert {evens.at 0 put 0} shouldRaise (BoundsError)
    }
    
    method testListAtPutExtend {
        assert (empty.at 1 put 99) shouldBe (list.with 99)
        oneToFive.at(6) put 6
        assert (oneToFive.at 6) shouldBe 6
        oneToFive.at(7) put 7
        assert (oneToFive.at(7)) shouldBe 7
        assert (oneToFive) shouldBe (1..7)
    }
    
    method testListRemovePresent {
        assert (oneToFive.remove(3)) shouldBe (list [1, 2, 4, 5])
        assert (oneToFive) shouldBe (list [1, 2, 4, 5])
    }
    method testListRemoveMultiplePresent {
        assert (oneToFive.remove(1, 4, 5)) shouldBe (list [2, 3])
        assert (oneToFive) shouldBe (list [2, 3])
    }
    method testListRemoveAbsentExcpetion {
        assert {oneToFive.remove(1, 7, 5)} shouldRaise (NoSuchObject)
    }
    method testListRemoveAbsentActionBlock {
        assert (oneToFive.remove 9 ifAbsent {99}) shouldBe 99
    }
    method testListIndexOfPresent {
        assert (evens.indexOf 6) shouldBe 3
        assert (evens.indexOf 4 ifAbsent {"missing"}) shouldBe 2
    }
    method testListIndexOfAbsent {
        assert {evens.indexOf 3} shouldRaise (NoSuchObject)
        assert (evens.indexOf 5 ifAbsent {"missing"}) shouldBe "missing"
    }
    method testListAddLast {
        assert (empty.addLast(9)) shouldBe (list [9])
        assert (evens.addLast(10)) shouldBe (list [2, 4, 6, 8, 10])
    }
    method testAddAll {
        evens.addAll(oneToFive)
        assert (evens) shouldBe (list [2, 4, 6, 8, 1, 2, 3, 4, 5])
    }
    method testListAdd {
        assert (empty.add(9)) shouldBe (list [9])
        assert (evens.add(10)) shouldBe (list [2, 4, 6, 8, 10])
    }
    method testListRemoveAtEmpty {
        assert {empty.removeAt(1)} shouldRaise (BoundsError)
    }
    method testListRemoveAt1 {
        assert (evens.removeAt(1)) shouldBe (2)
        assert (evens) shouldBe (list [4, 6, 8])
    }
    method testListRemoveAt2 {
        assert (evens.removeAt(2)) shouldBe (4)
        assert (evens) shouldBe (list [2, 6, 8])
    }
    method testListRemoveAt3 {
        assert (evens.removeAt(3)) shouldBe (6)
        assert (evens) shouldBe (list [2, 4, 8])
    }
    method testListRemoveAt4 {
        assert (evens.removeAt(4)) shouldBe (8)
        assert (evens) shouldBe (list [2, 4, 6])
    }
    method testListRemoveAt5 {
        assert {evens.removeAt(5)} shouldRaise (BoundsError)
    }
    method testListAddFirst {
        assert (evens.addFirst(0)) shouldBe (list [0, 2, 4, 6, 8])
        assert (evens.size) shouldBe (5)
        assert (evens.first) shouldBe (0)
        assert (evens.second) shouldBe (2)
    }
    method testListAddFirstMultiple {
        assert (evens.addFirst(-4, -2, 0)) shouldBe (list [-4, -2, 0, 2, 4, 6, 8])
        assert (evens.size) shouldBe 7
        assert (evens.first) shouldBe (-4)
        assert (evens.second) shouldBe (-2)
        assert (evens.third) shouldBe 0
        assert (evens.fourth) shouldBe 2
        assert (evens.fifth) shouldBe 4
        assert (evens.last) shouldBe 8
        assert (evens.at(3)) shouldBe 0
    }
    method testListRemoveFirst {
        def removed = oneToFive.removeFirst
        assert (removed) shouldBe (1)
        assert (oneToFive.size) shouldBe (4)
        assert (oneToFive) shouldBe (list [2, 3, 4, 5])
    }
    method testListChaining {        
        oneToFive.at(1)put(11).at(2)put(12).at(3)put(13)
        assert(oneToFive.at(1))shouldBe(11)
        assert(oneToFive.at(2))shouldBe(12)
        assert(oneToFive.at(3))shouldBe(13)
    }
    method testListPushAndExpand {
        evens.push(10)
        evens.push(12)
        evens.push(14)
        evens.push(16)
        evens.push(18)
        evens.push(20)
        assert (evens) shouldBe (list [2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
    }

    method testListReversedOneToFive {
        def ofr = oneToFive.reversed
        assert (ofr) shouldBe (list [5, 4, 3, 2, 1])
        assert (oneToFive) shouldBe (list [1, 2, 3, 4, 5])
    }
    
    method testListReversedEvens {
        def er = evens.reversed
        assert (er) shouldBe (list [8, 6, 4, 2])
        assert (evens) shouldBe (list [2, 4, 6, 8])
        assert (er.reversed) shouldBe (evens)
    }
    
    method testListReversedEmpty {
        assert (empty.reversed) shouldBe (empty)
    }
    
    method testListReverseOneToFive {
        def ofr = oneToFive.reverse
        assert (identical(ofr, oneToFive)) description "reverse does not return self"
        assert (ofr) shouldBe (list [5, 4, 3, 2, 1])
        assert (oneToFive) shouldBe (list [5, 4, 3, 2, 1])
        oneToFive.reverse
        assert (oneToFive) shouldBe (list [1, 2, 3, 4, 5])
    }
    
    method testListReverseEvens {
        def er = evens.reverse
        assert (identical(er, evens)) description "reverse does not return self"
        assert (er) shouldBe (list [8, 6, 4, 2])
        assert (evens) shouldBe (list [8, 6, 4, 2])
        assert (er.reversed) shouldBe (list [2, 4, 6, 8])
    }
    
    method testListReverseEmpty {
        def er = empty.reverse
        assert (empty.reverse.size) shouldBe 0
    }

    method testListConcatWithEmpty {
        assert(empty ++ oneToFive)shouldBe(oneToFive)        
        assert(oneToFive ++ empty)shouldBe(oneToFive)
    }
    
    method testListConcatWithNonEmpty {
        assert(oneToFive ++ evens) shouldBe(list [1, 2, 3, 4, 5, 2, 4, 6, 8])
        assert(evens ++ oneToFive) shouldBe(list [2, 4, 6, 8, 1, 2, 3, 4, 5])
    }
    
    method testListIndicesAndKeys {
        def lst = oneToFive ++ evens
        def siz = oneToFive.size + evens.size
        assert (lst.indices) shouldBe (1..siz)
        assert (lst.indices) shouldBe (lst.keys.asSequence)
    }
    
    method testListFold {
        assert(oneToFive.fold{a, each -> a + each}startingWith(0))shouldBe(15)
        assert(evens.fold{a, each -> a + each}startingWith(0))shouldBe(20)        
        assert(empty.fold{a, each -> a + each}startingWith(17))shouldBe(17)
    }
    
    method testListDoSeparatedBy {
        var s := ""
        evens.do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
        assert (s) shouldBe ("2, 4, 6, 8")
    }
    
    method testListDoSeparatedByEmpty {
        var s := "nothing"
        empty.do { failBecause "do did when list is empty" }
            separatedBy { s := "kilroy" }
        assert (s) shouldBe ("nothing")
    }
    
    method testListDoSeparatedBySingleton {
        var s := "nothing"
        list [1].do { each -> assert(each)shouldBe(1) } 
            separatedBy { s := "kilroy" }
        assert (s) shouldBe ("nothing")
    }
    
    method testListKeysAndValuesDo {
        def accum = dictionary.empty
        var n := 1
        evens.keysAndValuesDo { k, v ->
            accum.at(k)put(v)
            assert (accum.size) shouldBe (n)
            n := n + 1
        }
        assert(accum) shouldBe (dictionary.with(1::2, 2::4, 3::6, 4::8))
    }
     
    method testListAsStringNonEmpty {
        assert (evens.asString) shouldBe ("[2,4,6,8]")
    }
         
    method testListAsStringEmpty {
        assert (empty.asString) shouldBe ("[]")
    }
    
    method testListMapEmpty {
        assert (empty.map{x -> x * x}.onto(list)) shouldBe (list.empty)
    }
    
    method testListMapEvens {
        assert(evens.map{x -> x + 1}.onto(list)) shouldBe (list [3, 5, 7, 9])
    }
    
    method testListMapEvensInto {
        assert(evens.map{x -> x + 10}.into(list.withAll(evens)))
            shouldBe (list [2, 4, 6, 8, 12, 14, 16, 18])
    }

    method testListFilterNone {
        deny(oneToFive.filter{x -> false}.havemore)
    }
    
    method testListFilterEmpty {
        deny(empty.filter{x -> (x % 2) == 1}.havemore)
    }

    method testListFilterOdd {
        assert(oneToFive.filter{x -> (x % 2) == 1}.onto(list))
            shouldBe (list [1, 3, 5])
    }
    
    method testListMapAndFilter {
        assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1}.onto(list))
            shouldBe (list [11, 13, 15])
    }

    method testListCopy {
        def evensCopy = evens.copy
        evens.removeFirst
        evens.removeFirst
        assert (evens.size) shouldBe 2
        assert (evensCopy) shouldBe (list [2, 4, 6, 8])
        assert (evensCopy.second) shouldBe 4
    }
    
    method testListToSequence1to5 {
        assert (oneToFive.asSequence) shouldBe (sequence.with(1, 2, 3, 4, 5))
        assert (oneToFive.asSequence) hasType (Sequence)
    }
    
    method testListToSequenceEmpty {
        assert (empty.asSequence) shouldBe (sequence.empty)
        assert (empty.asSequence) hasType (Sequence)
    }

    method testListToSet1to5 {
        assert (oneToFive.asSet) shouldBe (set [1, 2, 3, 4, 5])
        assert (oneToFive.asSet) hasType (Set)
    }
    
    method testListToSetEmpty {
        assert (empty.asSet) shouldBe (set.empty)
        assert (empty.asSet) hasType (Set)
    }
    method testListToSetDuplicates {
        def theSet = list [1,1,2,2,4].asSet
        assert (theSet) shouldBe (set [1, 2, 4])
        assert (theSet) hasType (Set)
    }
    method testListIteratorToSetEmpty {
        deny (empty.iterator.havemore)
            description "empty iterator has a next element"
        assert (empty.iterator.asSet) shouldBe (set.empty)
    }
    method testListIteratorToSetNonEmpty {
        assert (oneToFive.iterator.asSet) shouldBe (set [1, 2, 3, 4, 5])
    }
    method testListIteratorToSetDuplicates {
        assert (list [1,1,2,2,4].iterator.asSet) shouldBe (set [1, 2, 4])
    }
    method testListSort {
        def input = list [7, 6, 4, 1]
        def output = list [1, 4, 6, 7]
        assert (input.sort) shouldBe (output)
        assert (input) shouldBe (output)
    }
    method testListSortBlock {
        def input = list [6, 7, 4, 1]
        def output = list [7, 6, 4, 1]
        assert (input.sortBy{a, b -> b - a}) shouldBe (output)
        assert (input) shouldBe (output)
    }        
    method testListCopySorted {
        def input = list [7, 6, 4, 1]
        def output = list [1, 4, 6, 7]
        assert (input.copySorted) shouldBe (output)
        assert (input) shouldBe (list [7, 6, 4, 1])
    }
    method testListCopySortedBlock {
        def input = list [6, 7, 4, 1]
        def output = list [7, 6, 4, 1]
        assert (input.copySortedBy{a, b -> b-a}) shouldBe (output)
        assert (input) shouldBe (list [6, 7, 4, 1])
    }
    method testListAsDictionary {
        assert(evens.asDictionary) shouldBe
            (dictionary.with(1::2, 2::4, 3::6, 4::8))
    }
}

class typeTest.forMethod(m) {
    inherit gU.testCaseNamed(m)
    
    method testListTypeCollection {
        def witness = list<Number>.with(1, 2, 3, 4, 5, 6)
        assert (witness) hasType (Collection<Number>)
    }
    method testListTypeList {
        def witness = list<Number>.with(1, 2, 3, 4, 5, 6)
        assert (witness) hasType (List<Number>)
    }
    method testListTypeReifiedCollection {
        def witness = list<Number>.with(1, 2, 3, 4, 5, 6)
        assert (witness) hasType (ReifiedCollection<Number>)
    }
    method testListTypeNotTypeWithWombat {
        def witness = list<Number>.with(1, 2, 3, 4, 5, 6)
        deny (witness) hasType (List<Number> & type { wombat })
    }
}


def listTests = gU.testSuite.fromTestMethodsIn(listTest)
listTests.runAndPrintResults

def typeTests = gU.testSuite.fromTestMethodsIn(typeTest)
typeTests.runAndPrintResults

def allTests = listTests ++ typeTests
allTests.runAndPrintResults

//listTest.forMethod("testMapAndFilter").debugAndPrintResults



