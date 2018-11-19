type A⟦T⟧ = {
    foo(_ : T) → Number
    bar(_ : Number) → T
}

var a : A⟦String⟧ := object {
    method foo(x : String) → Number {
         x.size
    }
    method bar(y : Number) → Number {
         foo "{y}".asString
    }
}

def b : A⟦Boolean⟧ = object {
    method foo(x : Boolean) → Number { 1 }
    method bar(y : Number) → Boolean { y < 0 }
}

def c : A⟦String⟧ = object {
    method foo(x : String) → Number { x.size }
    method bar(y : Number) → String { "{y}" }
}

// a := c
print(a.bar 3)
print(b.foo(true))
