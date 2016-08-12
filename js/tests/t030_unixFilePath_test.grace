dialect "minitest"

import "unixFilePath" as fp

testSuite {
    test "split two" by {
        def p = "abd:def"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "split two colon suffix" by {
        def p = "abd:def:"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "split two colon prefix" by {
        def p = ":abd:def"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "split two with double colon" by {
        def p = "abd::def:"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
}
