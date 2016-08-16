dialect "dialect"
inherit prelude.methods

// This example implements most of the requireTypes dialect.
// It must be compiled as a dynamic module to be used.

fail "var declaration must have a static type"
    when { n : Var-> n.decType.value == "Unknown" }
fail "def declaration must have a static type"
    when { n : Def-> n.decType.value == "Unknown" }
fail "method must have a static return type"
    when { n : Method -> n.decType.value == "Unknown" }
fail "method parameters must have a static type"
    when { v : Method ->
        v.parametersDo {p->
            if (p.decType.value=="Unknown") then {
                fail("no type given in declaration"
                    ++ " of method parameter '{p.value}'")at(p)
            }
        }
        false
    }
fail "block parameters must have a static type"
    when {b: BlockLiteral -> 
       b.parametersDo {p->
            if (p.decType.value=="Unknown") then {
                fail("no type given in declaration"
                    ++ " of block parameter '{p.value}'")at(p)
            }
       }
       false
    }

method checker(l) is public {
    check(l)
}
