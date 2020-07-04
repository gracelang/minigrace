dialect "minitest"
import "basic" as basic
use basic.open

testSuite {
    test "canonical abc" by {
        assert(canonicalName "abc") shouldBe "abc"
    }
    test "canonical abc(3)" by {
        assert(canonicalName "abc(3)") shouldBe "abc(_,_,_)"
    }

    test "canonical abc(3)efg(1)" by {
        assert(canonicalName "abc(3)efg(1)") shouldBe "abc(_,_,_)efg(_)"
    }
    test "numeric abc" by {
        assert(numericName "abc") shouldBe "abc"
    }
    test "numeric abc(3)" by {
        assert(numericName "abc(_,_,_)") shouldBe "abc(3)"
    }
    test "numeric abc(3)efg(1)" by {
        assert(numericName "abc(_,_,_)efg(_)") shouldBe "abc(3)efg(1)"
    }
}

exit
