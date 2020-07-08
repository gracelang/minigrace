type Foo = interface {
    bar
    baz
}
def x = object {
    def bar = 1
    def baz = 2
}
def y = object {
    def baz = 2
}
if (Foo.matches(x)) then {
    print "OK"
} else {
    print "Not OK; x conforms to type Foo"
}
if (Foo.matches(y)) then {
    print "Not OK; y does not conform to type Foo"
} else {
    print "OK"
}
