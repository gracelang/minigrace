dialect "dialect"
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.new

// This example implements most of the StaticGrace dialect.
// It must be compiled as a dynamic module to be used.

fail "var declaration must have a static type"
    when { n : VarDec -> n.decType.value == "Dynamic" }
fail "def declaration must have a static type"
    when { n : DefDec -> n.decType.value == "Dynamic" }
fail "method must have a static return type"
    when { n : Method -> n.decType.value == "Dynamic" }
fail "method parameters must have a static type"
    when { v : Method ->
        v.eachParameter {p->
            if (p.decType.value=="Dynamic") then {
                fail("no type given to declaration"
                    ++ " of parameter '{p.value}'")at(p)
            }
        }
        true
    }

method checker(l) is public {
    check(l)
}
