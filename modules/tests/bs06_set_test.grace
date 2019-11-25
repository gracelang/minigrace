dialect "beginningStudent"
print "dialect is {outer}"

var tl:Set[[Number]] := set.empty
print(tl)

tl := set(1)
print(tl)

var t2:Set := set(1, 2)
var t3:Set := set(1, 2, 3)
var t4:Set := set(1, 2, 3, 4)
var t5:Set := set(1, 2, 3, 4, 5)
var t6:Set := set(1, 2, 3, 4, 5, 6)

describe "sets" with {
    specify "t2 ∩ {3} ≡ t3" by {
        expect (t2.add(3)) toBe (t3)
    }
    specify "t3 ∩ {4} ≡ t4" by {
        expect (t3.add(4)) toBe (t4)
    }
    specify "t4 ⊃ t3" by {
        expect (t4.isSuperset(t3)) toBe true
    }
    specify "t4 ⊂ t5" by {
        expect (t4.isSubset(t5)) toBe true
    }
    specify "t5 ⊂ t6" by {
        expect (t5.isSubset(t6)) toBe true
    }
    specify "that t3 is a set" by {
        expect (t3) toHaveType (Set)
    }
    specify "that t4 is a set" by {
        expect (t4) toHaveType (Set)
    }
    specify "that t5 is a set" by {
        expect (t3) toHaveType (Set)
    }
    specify "that t6 is a set" by {
        expect (t6) toHaveType (Set)
    }
}
