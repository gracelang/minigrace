type Option⟦T⟧ = Collection⟦T⟧ & type {
    value → T
    iterator → Iterator
    isSome → Boolean
    isNone → Boolean
    ifSome⟦U⟧ (sAction:Block1⟦T, U⟧) ifNone (nAction:Block0⟦U⟧) → U
    ifNone⟦U⟧ (nAction:Block0⟦U⟧) ifSome (sAction:Block1⟦T, U⟧) → U
    ifSome (sAction:Block1⟦T, Done⟧) → Done
    ifNone (nAction:Block0⟦Done⟧) → Done
}

def ValueError is public = ProgrammingError.refine "ValueError"

trait optionAsCollection⟦T⟧ {
    method value → T { required }
    method do(_) → Done { required }
    method size → Number { required }
    method first → T { required }
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
}
class some⟦T⟧(contents:T) → Option {
    use optionAsCollection⟦T⟧
    def value is public = contents
    method asString { "some({value})" }
    method first { value }
    method do(action:Block1⟦T, Done⟧) → Done { action.apply(value) }
    method keysAndValuesDo(action:Block2⟦Number,T,Object⟧) -> Done { action.apply(1, value) }
    method contains(v) { value == v }
    method indices { sequence [1] }
    method keys { sequence [1] }
    method into (other) { other.add(value) }
    method ==(other) {
        match (other) 
            case {c:Collection → (c.size == 1) && {c.first == value} }
            case {_ → false}
    }
    class iterator {
        var hasNext is readable := true
        method asString { "iterator over some({value})" }
        method next {
            if (hasNext) then { 
                hasNext := false
                value
            } else {            
                IteratorExhausted.raise "option some contains just one value."
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
    method isSome → Boolean { true }
    method isNone → Boolean { false }
    method ifSome⟦U⟧ (sAction:Block1⟦T, U⟧) ifNone (nAction:Block0⟦U⟧) → U {
        sAction.apply(value)
    }
    method ifNone⟦U⟧ (nAction:Block0⟦U⟧) ifSome (sAction:Block1⟦T, U⟧) → U {
        sAction.apply(value)
    }
    method ifSome (sAction:Block1⟦T, Done⟧) → Done {
        sAction.apply(value)
        done
    }
    method ifNone (nAction:Block0⟦Done⟧) → Done { done }
    method indexOf⟦W⟧ (sought:T) ifAbsent (action:Block0⟦W⟧) -> W { 
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
    method fold(binaryFunction:Block2⟦T, T, T⟧) startingWith(initial:T) -> T {
        binaryFunction.apply(initial, value)
    }
    method map⟦U⟧(function:Block1⟦T, U⟧) -> Option⟦U⟧ {
        some(function.apply(value))
    }
    method filter(condition:Block1⟦T,Boolean⟧) -> Collection⟦T⟧ {
        if (condition.apply(value)) then { self } else { none⟦T⟧ }
    }
    method asDictionary { dictionary [1::value] }
}
class none⟦T⟧ → Option {
    use optionAsCollection⟦T⟧
    method asString { "none" }
    method value → T { ValueError.raise "option.none has no value." }
    method first { BoundsError.raise "attemp to use first on {self}." }
    method do(action:Block1⟦T, Done⟧) → Done { done }
    method keysAndValuesDo(action:Block2⟦Number,T,Object⟧) -> Done { done }
    method contains(_) { false }
    method indices { emptySequence }
    method keys { emptySequence }
    method into (other) { other }
    method ==(other) {
        match (other) 
            case {c:Collection → c.isEmpty}
            case {_ → false}
    }
    class iterator {
        method hasNext { false }
        method asString { "iterator over none" }
        method next { IteratorExhausted.raise "option none contains no values." }
    }
    method isEmpty → Boolean { true }
    method size → Number { 0 }
    method sizeIfUnknown(action) { 0 }
    method at(ix) { 
        BoundsError.raise "attemp to use index {ix} on {self}."
    } 
    method isSome → Boolean { false }
    method isNone → Boolean { true }
    method ifSome⟦U⟧ (sAction:Block1⟦T, U⟧) ifNone (nAction:Block0⟦U⟧) → U {
        nAction.apply
    }
    method ifNone⟦U⟧ (nAction:Block0⟦U⟧) ifSome (sAction:Block1⟦T, U⟧) → U {
        nAction.apply
    }
    method ifSome (sAction:Block1⟦T, Done⟧) → Done { done }
    method ifNone (nAction:Block0⟦Done⟧) → Done {
        nAction.apply
        done
    }
    method indexOf⟦W⟧ (elem:T) ifAbsent (action:Block0⟦W⟧) -> W { action.apply }
    method indexOf(sought:T) -> Number { NoSuchObject.raise "collection does not contain {sought}" }
    method ++(other: Collection⟦T⟧) -> Collection⟦T⟧ { other }
    method fold (binaryFunction:Block2⟦T, T, T⟧) startingWith(initial:T) -> T {
        initial
    }
    method map⟦U⟧ (function:Block1⟦T, U⟧) -> Option⟦U⟧ { none⟦U⟧ }
    method filter (condition:Block1⟦T,Boolean⟧) -> Collection⟦T⟧ { self }
    method asDictionary { emptyDictionary }
}
