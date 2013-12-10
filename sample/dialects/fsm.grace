import "mgcollections" as collections

var current is public, readable := false

method state(b : Block) is public {
    def st = object {
        method do is public {
            b.apply
        }
        def transitions is public, readable = collections.map.new
    }
    if (false == current) then {
        current := st
    }
    st
}

method in(src) on(input) goto(dest) is public {
    src.transitions.put(input, dest)
}
method in(src) on(input1) goto(dest1) on(input2) goto(dest2) is public {
    src.transitions.put(input1, dest1)
    src.transitions.put(input2, dest2)
}
method in(src) on(input1) goto(dest1) on(input2) goto(dest2)
    on(input3) goto(dest3) is public {
    src.transitions.put(input1, dest1)
    src.transitions.put(input2, dest2)
    src.transitions.put(input3, dest3)
}
method in(src) on(input1) goto(dest1) on(input2) goto(dest2)
    on(input3) goto(dest3) on(input4) goto(dest4) is public {
    src.transitions.put(input1, dest1)
    src.transitions.put(input2, dest2)
    src.transitions.put(input3, dest3)
    src.transitions.put(input4, dest4)
}

def FSMCrash = Error.refine "FSMCrash"

method signal(input) is public {
    if (current.transitions.contains(input)) then {
        current := current.transitions.get(input)
    } else {
        FSMCrash.raise "no transition for {input}"
    }
}
