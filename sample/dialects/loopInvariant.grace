// Loop invariant dialect

inherit prelude.methods

def InvariantFailure = Exception.refine "InvariantFailure"

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
    while (c) do {
        if (! inv.apply) then {
            InvariantFailure.raise "Loop invariant not satisfied."
        }
        blk.apply
    }
    if (! inv.apply) then {
        InvariantFailure.raise "Loop invariant not satisfied."
    }
}

// use e.g.:
//  var sum: Number  := 0
//  for (data) invariant { sum >= 0 } do { item : Number ->
//      sum := sum + item
//  }
