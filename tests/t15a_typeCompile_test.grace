def a = 7
type A = { a -> String
    b -> Number }

def objA = object {
    method foo {
        print(a)
        print(A)
    }
}

objA.foo
