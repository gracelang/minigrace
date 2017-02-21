dialect "staticTypes"

type A = {
    p(n:Number) -> Number
}

def z: A = object {
    method p(n:Number) -> Number {n}
}

method d(aa:Number) → A {z}
