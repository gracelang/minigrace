dialect "minitest"
import "matrix" as matrix

def twoSquareMatrix = matrix.rows 2 columns 2 with [2,4,6,8]
def twoByFourMatrix = matrix.rows 2 columns 4 with [1,3,5,7,2,4,6,8]
def threeByTwoMatrix = matrix.rows 3 columns 2 with [-2,-3,5,6,0,1]

testSuiteNamed "creation" with {
    test "square" by {
        assert(twoSquareMatrix.asString == "2  4\n6  8")
    }
    test "rectangular" by {
        assert(twoByFourMatrix.asString == "1  3  5  7\n2  4  6  8")
    }
    test "Bad initialization" by {
        assert { matrix.rows 3 columns 2 with [ ] } shouldRaise (RequestError)
    }
}

testSuiteNamed "at" with {
    test "square" by {
        assert(twoSquareMatrix.at(2,2) == 8)
        assert(twoSquareMatrix.at(1,2) == 4)
    }
    test "rectangle" by {
        assert(twoByFourMatrix.at(1,3) == 5)
        assert(twoByFourMatrix.at(2,4) == 8)
    }
}

testSuiteNamed "add & subtract" with {
    test "2x2 add" by {
        assert((twoSquareMatrix + twoSquareMatrix).asString) shouldBe "4  8\n12  16"
    }
    test "2x2 subtract" by {
        assert((twoSquareMatrix - twoSquareMatrix).asString) shouldBe "0  0\n0  0"
    }
}

testSuiteNamed "multiply" with {
    test "square" by {
        assert((twoSquareMatrix*twoSquareMatrix).asString) shouldBe "28  40\n60  88"
    }
    test "square by rectangle" by {
        assert((twoSquareMatrix*twoByFourMatrix).asString) 
            shouldBe "10  22  34  46\n22  50  78  106"
    }
    test "rectangle by rectangle" by {
        assert((threeByTwoMatrix * twoByFourMatrix).asString) 
            shouldBe "-8  -18  -28  -38\n17  39  61  83\n2  4  6  8"
    }
}

testSuiteNamed "scalar multiply" with  {
    test "times square" by {
        assert((twoSquareMatrix * -1).asString) shouldBe "-2  -4\n-6  -8"
    }
    test "times zero" by {
        assert((twoByFourMatrix * 0).asString) shouldBe "0  0  0  0\n0  0  0  0"
    }
    test "times fraction" by {
        assert((twoSquareMatrix * 0.5).asString) shouldBe "1  2\n3  4"
    }
    test "square times" by {
        assert((-1 * twoSquareMatrix).asString) shouldBe "-2  -4\n-6  -8"
    }
    test "zero times" by {
        assert((0 * twoByFourMatrix).asString) shouldBe "0  0  0  0\n0  0  0  0"
    }
    test "fraction times" by {
        assert((0.5 * twoSquareMatrix).asString) shouldBe "1  2\n3  4"
    }
}
