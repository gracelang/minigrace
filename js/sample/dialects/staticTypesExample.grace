dialect "staticTypes"

type Foo = {
    bar(a : Number) -> String
}

def o = object {
    method bar(a:Number) -> String is confidential {
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
