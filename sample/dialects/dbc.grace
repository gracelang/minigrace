def InvariantFailure = ProgrammingError.refine "InvariantFailure"
def IllegalArguments = ProgrammingError.refine "IllegalArguments"

type Predicate = { apply -> Boolean } 

method assert( condition : Predicate ) {
    if (!condition.apply) then { InvariantFailure.raise }
}

method assume( condition : Predicate ) {
    if (!condition.apply) then { InvariantFailure.raise }
}

method require (precondition:Predicate)
       do (body:Block)
       ensure (postcondition:Predicate) {
    print "RDE"
    if (!precondition.apply) then {
        print "preX"
        InvariantFailure.raise "Precondition Failure"
    }
    var result 
    try {
        print "body"
        result := body.apply
        print "ydob"
    } catch { _ -> 
        print "ux"
        InvariantFailure.raise "Unexpected Exception"
    } finally {
        print "fin"
        if (!postcondition.apply(result)) then {
            print "postX"
            InvariantFailure.raise "Postcondition Failure"
        }
    }
    print "RES"
    return result 
}


method for(it)invariant(inv)do(blk) {
    for (it) do {i->
        if (! inv.apply) then {
            InvariantFailure.raise "Loop invariant not satisfied."
        }
        blk.apply(i)
    }
    if (! inv.apply) then {
        InvariantFailure.raise "Loop invariant not satisfied."
    }
}

method while(c)invariant(inv)do(blk) {
    while (c) do {i->
        if (! inv.apply) then {
            InvariantFailure.raise "Loop invariant not satisfied."
        }
        blk.apply(i)
    }
    if (! inv.apply) then {
        InvariantFailure.raise "Loop invariant not satisfied."
    }
}


method loop (body : Block) 
       invariant (invariant : Block)
       until (condition : Block) 
       variant (variant :Block) { 

    if (!invariant.apply) then {
        InvariantFailure.raise "loop invariant failed before loop"
    }
    var variantValue := variant.apply
    while {!condition.apply} do {
        body.apply
        if (!invariant.apply) then {
           InvariantFailure.raise "Loop invariant failed in loop"
        }
        def variantValue' = variant.apply
        if (variantValue' < 0) then {
           InvariantFailure.raise "Loop variant has gone negative"
        }
        if ((variantValue - variantValue') < 1) then {
           InvariantFailure.raise "Loop variant decreased by less than one" ++
                    "(from {variantValue} to {variantValue'})"}
        variantValue := variantValue' 
    }
}
