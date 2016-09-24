dialect "minitest"
var log := ""

method doStuffFirst(n) {
    log := log ++ "stuff "
    object {
        def local = n
        method asString { "a doStuff({local}) object " }
        log := log ++ asString
    }
}

method subobj(m) {
    object {
        inherit doStuffFirst(m+1) alias oldAsString = asString
        method asString { "a subobj({m}) " }
        log := log ++ asString
    }
}

testSuite {
    print "running testSuite"

    test "single initialization" by {
        log := ""

        doStuffFirst(1)
        assert (log) shouldBe "stuff a doStuff(1) object "
    }

    test "inheritance initialization" by {
        log := ""
        subobj(1)
        assert (log) shouldBe "stuff a subobj(2) "
    }
}
