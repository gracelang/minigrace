dialect "standard"
import "gUnit" as gU

trait bindingTest {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        method testStringification {
            assert ((2::4).asString) shouldBe "2::4"
        }
        method testBindingEquality {
            assert ((2::4) == (2::4)) description "2::4 is not equal to itself!"
        }
        method testBindingInequalityValue {
            deny ((2::4) == (2::5)) description "2::4 is equal to 2::5!"
        }
        method testBindingInequalityKey {
            deny ((2::4) == (1::4)) description "2::4 is equal to 1::4!"
        }
        method testBindingInequalityKind {
            deny ((2::4) == "two") description "2::4 is equal to \"two\""
        }
        method testExtractFields {
            def b = "one"::1
            assert (b.key) shouldBe "one"
            assert (b.value) shouldBe 1
        }
    }
}
