dialect "minitest"
import "shasum" as sha

testSuiteNamed "sha256" with {
    test "The Way We Were" by {
        assert (sha.sha256OfFile "t202_sha256.in") shouldBe
              "0f47e6deaf903f25617ea7b9abddb3383947b9c43c47f86212eadaeac1d23553"
              // computed by "shasum -a256 js/tests/t202_sha256.in"
    }
    test "Non-existant file" by {
        assert {sha.sha256OfFile "giraffe_for_president"} shouldRaise
              (EnvironmentException) mentioning "does not exist"
    }
}
