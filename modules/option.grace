type Option⟦T⟧ = type {
    value -> T
    do(action:Block1⟦T, Done⟧) -> Done
    isEmpty -> Boolean
    isSome -> Boolean
    isNone -> Boolean
    ifSome⟦U⟧ (sAction:Block1⟦T, U⟧) ifNone (nAction:Block0⟦U⟧) -> U
    ifNone⟦U⟧ (nAction:Block0⟦U⟧) ifSome (sAction:Block1⟦T, U⟧) -> U
    ifSome (sAction:Block1⟦T, Done⟧) -> Done
    ifNone (nAction:Block0⟦Done⟧) -> Done
}
class some⟦T⟧(contents:T) -> Option {
    method value -> T { contents }
    method do(action:Block1⟦T, Done⟧) -> Done { action.apply(value) }
    method isEmpty -> Boolean { false }
    method isSome -> Boolean { true }
    method isNone -> Boolean { false }
    method ifSome⟦U⟧ (sAction:Block1⟦T, U⟧) ifNone (nAction:Block0⟦U⟧) -> U {
        sAction.apply(contents)
    }
    method ifNone⟦U⟧ (nAction:Block0⟦U⟧) ifSome (sAction:Block1⟦T, U⟧) -> U {
        sAction.apply(contents)
    }
    method ifSome (sAction:Block1⟦T, Done⟧) -> Done {
        sAction.apply(contents)
        done
    }
    method ifNone (nAction:Block0⟦Done⟧) -> Done { done }
}
class none⟦T⟧ -> Option {
    method value -> T { ProgrammingError.raise "none has no value" }
    method do(action:Block1⟦T, Done⟧) -> Done { done }
    method isEmpty -> Boolean { true }
    method isSome -> Boolean { false }
    method isNone -> Boolean { true }
    method ifSome⟦U⟧ (sAction:Block1⟦T, U⟧) ifNone (nAction:Block0⟦U⟧) -> U {
        nAction.apply
    }
    method ifNone⟦U⟧ (nAction:Block0⟦U⟧) ifSome (sAction:Block1⟦T, U⟧) -> U {
        nAction.apply
    }
    method ifSome (sAction:Block1⟦T, Done⟧) -> Done { done }
    method ifNone (nAction:Block0⟦Done⟧) -> Done {
        nAction.apply
        done
    }
}
