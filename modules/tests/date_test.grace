dialect "minitest"
import "date" as date

testSuite {
    def example = date.fromString "26 March 2016, 13:51:25"

    test "year" by { assert (example.year) shouldBe 2016 }
    test "month" by { assert (example.month) shouldBe 3 }
    test "day" by { assert (example.day) shouldBe 7 }  //day of week — Saturday
    test "date" by { assert (example.date) shouldBe 26 }
    test "hour" by { assert (example.hour) shouldBe 13 }
    test "minute" by { assert (example.minute) shouldBe 51 }
    test "second" by { assert (example.second) shouldBe 25 }
    test "ISO String" by {
        assert (example.asIsoString) shouldBe "2016-03-26T20:51:25.000Z"
    }
    test "addition" by {
        def twoDays = date.days 2
        def oneHour = date.hours 1
        def later = example + twoDays + oneHour
        assert (later.date) shouldBe 28
        assert (later.hour) shouldBe 14
        assert (later.minute) shouldBe 51
        assert (later.second) shouldBe 25
    }
}

