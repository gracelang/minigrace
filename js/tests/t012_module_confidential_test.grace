import "minitest" as mt
import "gUnit" as gu

mt.testSuite {
    mt.test "confidential var assignment" by {
        mt.assert {mt.errorsToBeRerun := true} shouldRaise (NoSuchMethod)
    }

    mt.test "confidential var read" by {
        mt.assert {mt.errorsToBeRerun} shouldRaise (NoSuchMethod)
    }

    mt.test "confidential def read" by {
        mt.assert {mt.nullBlock == mt.nullBlock} shouldRaise (NoSuchMethod)
    }

    mt.test "public var read" by {
        mt.assert (gu.numberOfErrorsToRerun == gu.numberOfErrorsToRerun)
    }

    mt.test "public var write" by {
        mt.assert {gu.numberOfErrorsToRerun := gu.numberOfErrorsToRerun}
            shouldntRaise (Exception)
    }
    mt.test "public def read" by {
        mt.assert (gu.testSuite.asString) shouldBe "a testSuite"
    }
}
