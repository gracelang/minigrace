dialect "minitest"

import "unixFilePath" as fp
import "sys" as sys

testSuite {
    test "split two colon" by {
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
    test "from String" by {
        def p = fp.fromString "/usr/local/lib/grace"
        assert (p.directory) shouldBe "/usr/local/lib/"
        assert (p.base) shouldBe "grace"
        assert (p.extension) shouldBe ""
    }
    test "directory never empty" by {
        def p = fp.fromString "foo.grace"
        assert (p.directory) shouldBe "./"
        assert (p.base) shouldBe "foo"
        assert (p.extension) shouldBe ".grace"
    }
    test "from String with extension" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".grace"
    }
    test "building" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".grace"
    }
    test "extension modification" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.extension) shouldBe ".grace"
        p.setExtension "js"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".js"
    }
    test "directory modification" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.extension) shouldBe ".grace"
        p.setDirectory "/users/black/"
        assert (p.directory) shouldBe "/users/black/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".grace"
    }
    test "base modification" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.extension) shouldBe ".grace"
        p.setBase "minigrace"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "minigrace"
        assert (p.extension) shouldBe ".grace"
    }
    test "as string" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        assert (p.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
    }
    test "equality" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        def q = fp.withDirectory "/usr/local/lib/grace/"
                    .setBase "compiler" .setExtension "grace"
        assert (p.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
        assert (q.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
        assert (p) shouldBe (q)
        assert (q) shouldBe (p)
        assert (p.hash) shouldBe (q.hash)
    }
    test "inequality" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        def q = fp.withDirectory "/usr/lib/grace/"
                    .setBase "compiler" .setExtension "grace"
        assert (p.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
        assert (q.asString) shouldBe "/usr/lib/grace/compiler.grace"
        assert (p) shouldntBe (q)
        assert (q) shouldntBe (p)
        assert (p.hash) shouldntBe (q.hash)
    }
    test "absolute file name" by {
        def p = fp.filePath
                .setBase "t030_unixFilePath_test"
                .setExtension "grace"
        def cwd = sys.cwd
        if (cwd.endsWith "minigrace/") then {
            // make test work when run from minigrace/ as well as from tests/
            p.directory := "js/tests/"
        }
        assert (p.exists) description "{p} does not exist"
        def q = p.absolute
        assert (q.exists) description "{q} does not exist"
        assert (q.asString.startsWith(cwd))
            description "q.asString is {q}; it does not start with {cwd}"
        assert (q.directory.endsWith "/") description "{q} does not end with a \"/\""
    }
}
