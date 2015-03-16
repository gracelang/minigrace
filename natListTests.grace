import "gUnit" as gU
import "bList" as list

def listTest = object {
  class forMethod(m) {
    inherits gU.testCaseNamed(m)

    def oneToFive = list.with(1, 2, 3, 4, 5)
    def evens = list.with(2, 4, 6, 8)
    def empty = list.empty


    method testListSize {
        assert(oneToFive.size) shouldBe 5
        assert(empty.size) shouldBe 0
        assert(evens.size) shouldBe 4
    }
    
    method testListEmptyDo {
        empty.do {each -> failBecause "emptyList.do did with {each}"}
    }
    
    method testListEqualityEmpty {
        assert(empty == list.empty)
        assert(empty == "")
    }
    
    method testListInequalityEmpty {
        deny(empty == list.with(1))
        assert(empty != list.with(1))
        deny(empty == 3)
        deny(empty == evens)
    }
    
    method testListInequalityFive {
        deny(oneToFive == list.with(1, 2, 3, 4, 6))
        assert(oneToFive != list.with(1, 2, 3, 4, 6))
    }

    method testListEqualityFive {
        def isEqual = (oneToFive == list.with(1, 2, 3, 4, 5))
        assert(isEqual)
        deny(oneToFive != list.with(1, 2, 3, 4, 5))
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
        assert{empty.first} shouldRaise (coll.boundsError)
        assert(evens.first) shouldBe (2)
        assert(oneToFive.first) shouldBe (1)
    }
    
    method testListAt {
        assert {empty.at(1)} shouldRaise (coll.boundsError)
        assert (oneToFive.at(1)) shouldBe (1)
        assert (oneToFive[1]) shouldBe (1)
        assert (oneToFive.at(5)) shouldBe (5)
        assert (evens.at(4)) shouldBe (8)
        assert {evens.at(5)} shouldRaise (coll.boundsError)
    }
    method testListAtPut {
        assert {empty.at(1)put(99)} shouldRaise (coll.boundsError)
        oneToFive.at(1) put (11)
        assert (oneToFive.at(1)) shouldBe (11)
        oneToFive.at(2) put (12)
        assert (oneToFive[2]) shouldBe (12)
        assert (oneToFive.at(3)) shouldBe (3)
        assert {evens.at(5)put(10)} shouldRaise (coll.boundsError)
    }
    method testListAddLast {
        assert (empty.addLast(9)) shouldBe (list.with(9))
        assert (evens.addLast(10)) shouldBe (list.with(2, 4, 6, 8, 10))
    }
    method testAddAll {
        evens.addAll(oneToFive)
        assert (evens) shouldBe (list.with(2, 4, 6, 8, 1, 2, 3, 4, 5))
    }
    method testListAdd {
        assert (empty.add(9)) shouldBe (list.with(9))
        assert (evens.add(10)) shouldBe (list.with(2, 4, 6, 8, 10))
    }
    method testListRemoveAtEmpty {
        assert {empty.removeAt(1)} shouldRaise (coll.boundsError)
    }
    method testListRemoveAt1 {
        assert (evens.removeAt(1)) shouldBe (2)
        assert (evens) shouldBe (list.with(4, 6, 8))
    }
    method testListRemoveAt2 {
        assert (evens.removeAt(2)) shouldBe (4)
        assert (evens) shouldBe (list.with(2, 6, 8))
    }
    method testListRemoveAt3 {
        assert (evens.removeAt(3)) shouldBe (6)
        assert (evens) shouldBe (list.with(2, 4, 8))
    }
    method testListRemoveAt4 {
        assert (evens.removeAt(4)) shouldBe (8)
        assert (evens) shouldBe (list.with(2, 4, 6))
    }
    method testListRemoveAt5 {
        assert {evens.removeAt(5)} shouldRaise (coll.boundsError)
    }
    method testListAddFirst {
        assert (evens.addFirst(0)) shouldBe (list.with(0, 2, 4, 6, 8))
        assert (evens.size) shouldBe (5)
        assert (evens.first) shouldBe (0)
        assert (evens.second) shouldBe (2)
    }
    method testListAddFirstMultiple {
        assert (evens.addFirst(-4, -2, 0)) shouldBe (list.with(-4, -2, 0, 2, 4, 6, 8))
        assert (evens.size) shouldBe 7
        assert (evens.first) shouldBe (-4)
        assert (evens.last) shouldBe 8
        assert (evens.at(3)) shouldBe 0
    }
    method testListRemoveFirst {
        def removed = oneToFive.removeFirst
        assert (removed) shouldBe (1)
        assert (oneToFive.size) shouldBe (4)
        assert (oneToFive) shouldBe (list.with(2, 3, 4, 5))
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
        assert (evens) shouldBe (list.with(2, 4, 6, 8, 10, 12, 14, 16, 18, 20))
    }
    
    method testListConcatWithEmpty {
        assert(empty ++ oneToFive)shouldBe(oneToFive)        
        assert(oneToFive ++ empty)shouldBe(oneToFive)
    }
    
    method testListConcatWithNonEmpty {
        assert(oneToFive ++ evens) shouldBe(list.with(1, 2, 3, 4, 5, 2, 4, 6, 8))
        assert(evens ++ oneToFive) shouldBe(list.with(2, 4, 6, 8, 1, 2, 3, 4, 5))
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
        list.with(1).do { each -> assert(each)shouldBe(1) } 
            separatedBy { s := "kilroy" }
        assert (s) shouldBe ("nothing")
    }
     
    method testListAsStringNonEmpty {
        assert (evens.asString) shouldBe ("list<2,4,6,8>")
    }
         
    method testListAsStringEmpty {
        assert (empty.asString) shouldBe ("list<>")
    }
    
    method testListMapEmpty {
        assert (empty.map{x -> x * x}.onto(list)) shouldBe (list.empty)
    }
    
    method testListMapEvens {
        assert(evens.map{x -> x + 1}.onto(list)) shouldBe (list.with(3, 5, 7, 9))
    }
    
    method testListMapEvensInto {
        assert(evens.map{x -> x + 10}.into(list.withAll(evens)))
            shouldBe (list.with(2, 4, 6, 8, 12, 14, 16, 18))
    }

    method testListFilterNone {
        deny(oneToFive.filter{x -> false}.havemore)
    }
    
    method testListFilterEmpty {
        deny(empty.filter{x -> (x % 2) == 1}.havemore)
    }

    method testListFilterOdd {
        assert(oneToFive.filter{x -> (x % 2) == 1}.onto(list))
            shouldBe (list.with(1, 3, 5))
    }
    
    method testListMapAndFilter {
        assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1}.onto(list))
            shouldBe (list.with(11, 13, 15))
    }
  }
}


def listTests = gU.testSuite.fromTestMethodsIn(listTest)
listTests.debugAndPrintResults

//listTest.forMethod("testMapAndFilter").debugAndPrintResults



