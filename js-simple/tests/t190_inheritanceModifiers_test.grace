dialect "minitest"

class sc {
    method foo { "foo" }
    method bar { "bar" }
    method asString { "the superobject" }
}

class scp(arg) {
    method foo { arg }
    method bar { "bar" }
    method asString { "the superobject" }
}

class sub {
    inherits sc
        alias foo2 = foo
        exclude bar
        
    method baz { foo ++ foo2 }
    method asString is override { "the subobject" }
    method foo is override { "override" }
    method bad { foo ++ bar }
}

class subp {
    inherits scp("not foo")
        alias foo2 = foo
        exclude bar
        
    method baz { foo ++ foo2 }
    method asString is override { "the subobject" }
    method foo is override { "override" }
    method bad { foo ++ bar }
}

testSuite {
    def o = sub
    test "alias o" by {
        assert (o.foo2) shouldBe "foo"
    }
    test "override o" by {
        assert (o.foo) shouldBe "override"
    }
    test "exclusion o" by {
        assert {o.bar} shouldRaise (NoSuchMethod)
    }
    test "used exclusion o" by {
        assert {o.bad} shouldRaise (NoSuchMethod)
    }
    
    def p = subp
    test "alias p" by {
        assert (p.foo2) shouldBe "not foo"
    }
    test "override p" by {
        assert (p.foo) shouldBe "override"
    }
    test "exclusion p" by {
        assert {p.bar} shouldRaise (NoSuchMethod)
    }
    test "used exclusion p" by {
        assert {p.bad} shouldRaise (NoSuchMethod)
    }
}
