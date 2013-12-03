dialect "structural"

type Foo = {
    bar(a : Number) -> String
}

object {
    method bar(a : Number) -> String is confidential {
        takesFoo(self)
        return "bar"
    }
}

method takesFoo(foo : Foo) -> Done {
    print(foo)
}

