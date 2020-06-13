dialect "minitest"

method describe(obj) {
    // call the describe function from gracelib.js

    native "js" code ‹result = new GraceString(describe(var_obj));›
}

def works = object {
    method asString { "a working object" }
}

def broken = object {
    method asString {
        Exception.raise "this asString method is broken"
    }
}

def indirectlyBroken = object {
    // even though describe takes care not to call `request`, the `asString`
    // method of this object will do so.

    method asString {
        "an indirectly broken asString method, calling {self.missingHelper}"
    }
}

class graceObject { }

def noAsString = object {
    inherit graceObject exclude asString
}

testSuite "describe is safe" with {

    test "describe works" by {
        assert (describe(works)) shouldBe
            "works a working object (defined in module t017_describe_test, line 9)"
    }
    test "describe done" by {
        assert (describe(done)) shouldBe "done (defined in module built-in library)"
    }
    test "describe broken" by {
        assert (describe(broken)) shouldBe
            "broken object (without working asString method, defined in module t017_describe_test, line 13)"
    }
    test "describe indirectlyBroken" by {
        assert (describe(indirectlyBroken)) shouldBe
            "indirectlyBroken object (without working asString method, defined in module t017_describe_test, line 19)"
    }
    test "describe noAsString" by {
        assert (describe(noAsString)) shouldBe
            "a noAsString (defined in module t017_describe_test, line 30)"
    }
}

exit
