type Option⟦T⟧ = type {
    value -> T
    do(action:Block1⟦T, Done⟧) -> Done
    isSome -> Boolean
    isNone -> Boolean
}
class some⟦T⟧(contents:T) -> Option {
    method value -> T { contents }
    method do(action:Block1⟦T, Done⟧) -> Done { action.apply(value) }
    method isSome -> Boolean { true }
    method isNone -> Boolean { false }
}
class none⟦T⟧ -> Option {
    method value -> T { ProgrammingError.raise "none has no value" }
    method do(action:Block1⟦T, Done⟧) -> Done { done }
    method isSome -> Boolean { false }
    method isNone -> Boolean { true }
}
    
