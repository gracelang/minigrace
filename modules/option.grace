dialect "standard"
import "collections" as collections

type Option⟦T⟧ = Collection⟦T⟧ & interface {
    value → T
    valueIfEmpty⟦U⟧ (eValue:Function0⟦U⟧) → T | U
    iterator → Iterator
    isFull → Boolean
    isEmpty → Boolean
    ifFull⟦U⟧ (fAction:Function1⟦T, U⟧) ifEmpty (eAction:Function0⟦U⟧) → U
    ifEmpty⟦U⟧ (eAction:Function0⟦U⟧) ifFull (fAction:Function1⟦T, U⟧) → U
    ifFull (fAction:Function1⟦T, Done⟧) → Done
    ifEmpty (eAction:Function0⟦Done⟧) → Done
}

def ValueError is public = ProgrammingError.refine "ValueError"

trait optionAsCollection⟦T⟧ {
    method value → T is required
    method do(_) → Done is required
    method size → Number is required
    method first → T is required
    method sizeIfUnknown(_) → Number { size }
    method do (action) separatedBy (_) { do(action) }
    method sorted → Option⟦T⟧ { self }
    method sortedBy(_) → Option⟦T⟧ { self }
    method values → Option⟦T⟧ { self }
    method second -> T { BoundsError.raise "attemp to use second on {self}." }
    method third -> T { BoundsError.raise "attemp to use third on {self}." }
    method fourth -> T { BoundsError.raise "attemp to use fourth on {self}." }
    method fifth -> T { BoundsError.raise "attemp to use fifth on {self}." }
    method last -> T { first }
    method reversed → Option⟦T⟧ { self }
    method >>(target) { target << self }
    method <<(source) { self ++ source }
}
class full⟦T⟧(contents:T) → Option {
    use optionAsCollection⟦T⟧
    use equality
    def value is public = contents
    method valueIfEmpty(_) { value }
    method asString { "option.full({value})" }
    method first { value }
    method do(action:Function1⟦T, Done⟧) → Done { action.apply(value) }
    method keysAndValuesDo(action:Function2⟦Number,T,Object⟧) -> Done { action.apply(1, value) }
    method contains(v) { value == v }
    method includes(predicate) { predicate.apply(value) }
    method indices { sequence [1] }
    method keys { sequence [1] }
    method ==(other) {
        match (other) 
            case {c:Collection → (c.size == 1) && {c.first == value} }
            else {false}
    }
    class iterator {
        var hasNext is readable := true
        method asString { "iterator over {self}" }
        method next {
            if (hasNext) then { 
                hasNext := false
                value
            } else {            
                IteratorExhausted.raise "{self} contains just one value."
            }
        }
    }        
    method isEmpty → Boolean { false }
    method size → Number { 1 }
    method sizeIfUnknown(action) { 1 }
    method at(ix) { 
        if (ix == 1) then { 
            value 
        } else { 
            BoundsError.raise "attemp to use index {ix} on {self}."
        }
    }
    method at(ix) ifAbsent(action) {
        if (ix == 1) then {
            value
        } else {
            action.apply
        }
    }
    method isFull → Boolean { true }
    method ifFull⟦U⟧ (fAction:Function1⟦T, U⟧) ifEmpty (eAction:Function0⟦U⟧) → U {
        fAction.apply(value)
    }
    method ifEmpty⟦U⟧ (eAction:Function0⟦U⟧) ifFull (fAction:Function1⟦T, U⟧) → U {
        fAction.apply(value)
    }
    method ifFull (fAction:Function1⟦T, Done⟧) → Done {
        fAction.apply(value)
        done
    }
    method ifEmpty (eAction:Function0⟦Done⟧) → Done { done }
    method indexOf⟦W⟧ (sought:T) ifAbsent (action:Function0⟦W⟧) -> W { 
        if (value == sought) then { 1 }
            else { action.apply }
    }
    method indexOf(sought:T) -> Number { 
        if (value == sought) then { 1 }
            else { NoSuchObject.raise "collection does not contain {sought}" }
    }
    method ++(other: Collection⟦T⟧) -> Collection⟦T⟧ { 
        collections.lazyConcatenation(self, other)
    }
    method fold(binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) -> T {
        binaryFunction.apply(initial, value)
    }
    method map⟦U⟧(function:Function1⟦T, U⟧) -> Option⟦U⟧ {
        full(function.apply(value))
    }
    method filter(condition:Function1⟦T,Boolean⟧) -> Collection⟦T⟧ {
        if (condition.apply(value)) then { self } else { empty⟦T⟧ }
    }
}
class empty⟦T⟧ → Option {
    use optionAsCollection⟦T⟧
    use equality
    method asString { "option.empty" }
    method value → T { ValueError.raise "{self} has no value." }
    method valueIfEmpty(eValue:Function0) { eValue.apply }
    method first { BoundsError.raise "attemp to use first on {self}." }
    method do(action:Function1⟦T, Done⟧) → Done { done }
    method keysAndValuesDo(action:Function2⟦Number,T,Object⟧) -> Done { done }
    method contains(_) { false }
    method includes(_) { false }
    method indices { [] }
    method keys { [] }
    method ==(other) {
        match (other) 
            case {c:Collection → c.isEmpty}
            else {false}
    }
    class iterator {
        method hasNext { false }
        method asString { "iterator over {self}" }
        method next { IteratorExhausted.raise "{self} contains no values." }
    }
    method isEmpty → Boolean { true }
    method size → Number { 0 }
    method sizeIfUnknown(action) { 0 }
    method at(ix) { 
        BoundsError.raise "attemp to use index {ix} on {self}."
    }
    method at(ix) ifAbsent(action) {
        action.apply
    }
    method isFull → Boolean { false }
    method ifFull⟦U⟧ (fAction:Function1⟦T, U⟧) ifEmpty (eAction:Function0⟦U⟧) → U {
        eAction.apply
    }
    method ifEmpty⟦U⟧ (eAction:Function0⟦U⟧) ifFull (fAction:Function1⟦T, U⟧) → U {
        eAction.apply
    }
    method ifFull (fAction:Function1⟦T, Done⟧) → Done { done }
    method ifEmpty (eAction:Function0⟦Done⟧) → Done {
        eAction.apply
        done
    }
    method indexOf⟦W⟧ (elem:T) ifAbsent (action:Function0⟦W⟧) -> W { action.apply }
    method indexOf(sought:T) -> Number { NoSuchObject.raise "collection does not contain {sought}" }
    method ++(other: Collection⟦T⟧) -> Collection⟦T⟧ { other }
    method fold (binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) -> T {
        initial
    }
    method map⟦U⟧ (function:Function1⟦T, U⟧) -> Option⟦U⟧ { empty⟦U⟧ }
    method filter (condition:Function1⟦T,Boolean⟧) -> Collection⟦T⟧ { self }
}
