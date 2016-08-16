var current is public, readable := false

method state(b : Block) is public {
    def st = object {
        method do is public {
            b.apply
        }
        def transitions is public = dictionary []
    }
    if (false == current) then {
        current := st
    }
    st
}

method in(src) on(input) goto(dest) is public {
    src.transitions.at(input) put(dest)
}
method in(src) on(input1) goto(dest1) on(input2) goto(dest2) is public {
    src.transitions.at(input1) put(dest1)
    src.transitions.at(input2) put(dest2)
}
method in(src) on(input1) goto(dest1) on(input2) goto(dest2)
    on(input3) goto(dest3) is public {
    src.transitions.at(input1) put(dest1)
    src.transitions.at(input2) put(dest2)
    src.transitions.at(input3) put(dest3)
}
method in(src) on(input1) goto(dest1) on(input2) goto(dest2)
    on(input3) goto(dest3) on(input4) goto(dest4) is public {
    src.transitions.at(input1) put(dest1)
    src.transitions.at(input2) put(dest2)
    src.transitions.at(input3) put(dest3)
    src.transitions.at(input4) put(dest4)
}

def FSMCrash = Exception.refine "FSMCrash"

method signal(input) is public {
    current := current.transitions.at(input) ifAbsent {
        FSMCrash.raise "no transition for {input}"
    }
}
