type A<T> = {
    foo(_ : T) -> Number
    bar(_ : Number) -> T
}

class Test<T> {
    var tval : T
    method foo(x : T) -> Number {
        2
    }
    method bar(y : Number) -> T {
        tval
    }
}

def t : A<String> = Test<String>.new
print(t.foo("test"))
