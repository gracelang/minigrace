type A = {
    foo(arg:String) -> String
}

type B = {
    bar(arg : Number) -> Number
}

def ab : A & B = object {
    method foo(s:String) -> String {
        s
    }

    method bar(n:Number) -> Number {
        n
    }
}
print(ab.foo("Hello"))
def a:A = ab
def b : B = ab
print(a.foo("World"))
print(b.bar(73))
