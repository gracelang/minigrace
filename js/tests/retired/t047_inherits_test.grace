class A.new(v') {
    var v := v'
    method foo {
        print "A's foo: {self.v}"
    }
    method baz {
        print "A's baz"
    }
}
class B.new(x) {
    inherits A.new(x)
    method bar {
        print "B's bar"
    }
    method baz {
        print "B's baz"
    }
}

var b := B.new("ARGUMENT")
b.foo
b.bar
b.baz
