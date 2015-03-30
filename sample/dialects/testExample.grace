dialect "test"
import "collections" as collections

testSuite {
    def l = collections.list.with(1, 3, 5, 2, 4)

    test "list size after an add is 6" by { l.push(6); assert (l.size()) shouldBe (6) }

    test "list size originally was 5" by { assert (l.size()) shouldBe (5) }
}
