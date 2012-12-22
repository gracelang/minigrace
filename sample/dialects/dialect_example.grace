dialect "dialect"

// This example implements most of the StaticGrace dialect.
// It must be compiled as a dynamic module to be used.

fail "var declaration must have a static type"
    when { n : VarDec -> n.dtype.value == "Dynamic" }
fail "def declaration must have a static type"
    when { n : DefDec -> n.dtype.value == "Dynamic" }
fail "method must have a static return type"
    when { n : Method ->
        if ((false == n.dtype).orElse
            {n.dtype.value=="Dynamic"}) then {
            CheckerFailure.raiseWith("no return type given to declaration"
                ++ " of method '{n.value.value}'", n.value)
        }
    }
fail "method parameters must have a static type"
    when { v : Method ->
        for (v.signature) do {s->
            for (s.params) do {p->
                if ((false == p.dtype).orElse
                    {p.dtype.value=="Dynamic"}) then {
                    CheckerFailure.raiseWith("no type given to declaration"
                        ++ " of parameter '{p.value}'", p)
                }
            }
        }
    }

method checker(l) is public {
    check(l)
}
