dialect "minitest"

testSuite {
    def obj = object {
        method sum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11
        }
        method returnSum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            sum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)     // self request
        }
        def innerObj is public = object {
            method returnSum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
                sum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)     // outer request
            }
        }
        method new(a1, a2, a3, a4, a5, a6, a7, a8) {
            assert (sum(a1, a2, a3, a4, a5, a6, a7, a8, 0, 0, 0)) shouldBe 36
            object { }
        }
    }

    test "11 arg other request" by {
        assert (obj.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)) shouldBe 66
    }
    test "11 arg outer reuest" by {
        assert (obj.innerObj.returnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)) shouldBe 66
    }
    test "11 arg self request" by {
        assert (obj.returnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)) shouldBe 66
    }
    test "inherits from 11 arg request" by {
        def sub = object {
            inherit obj.new(1, 2, 3, 4, 5, 6, 7, 8)
        }
        assert (sub.asString) shouldBe "a sub"
    }
}
