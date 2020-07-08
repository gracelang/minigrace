dialect "staticTypes"

type Foo = interface {
    bar(a : Number) -> String
}

def o = object {
    method bar(a:Number) is confidential -> String {
    // remove the 'is confidential' to let this pass the type checker.
        takesFoo(self)
        return "bar"
    }
    method asString {
        "an object with a bar method"
    }
}

method takesFoo(foo:Foo) -> Done {
    print(foo)
}

print(o.bar(3))
