class x(m:Number) {
    method **⟦T⟧ (n:T) -> T {
        // multiplies
        n * m
    }
    method >>⟦T⟧ (n:T) -> Type {
        // returns T
        T
    }

}


print(x(3) ** 2)               // ==> 6
print(x(3) **⟦Number⟧ 2)        // ==> 6
print(x(3) **⟦String⟧ "ho ")    // ==> "ho ho ho"
print(x(3) >> 2)               // ==> type Unknown
print(x(3) >>⟦Number⟧ 2)        // ==> type Number
print(x(3) >>⟦String⟧ "ho ")    // ==> type String
