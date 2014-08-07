import "ast" as ast
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

def CheckerFailure = Exception.refine "CheckerFailure"
def staticVisitor = object {
    inherits ast.baseVisitor
    method visitDefDec(v) is public {
        if (v.decType.value=="Unknown") then {
            CheckerFailure.raiseWith("no type given to declaration"
                ++ " of def '{v.name.value}'", v.name)
        }
    }
    method visitVarDec(v) is public {
        if (v.decType.value=="Unknown") then {
            CheckerFailure.raiseWith("no type given to declaration"
                ++ " of var '{v.name.value}'", v.name)
        }
    }
    method visitMethod(v) is public {
        for (v.signature) do {s->
            for (s.params) do {p->
                if (p.decType.value=="Unknown") then {
                    CheckerFailure.raiseWith("no type given to declaration"
                        ++ " of parameter '{p.value}'", p)
                }
            }
        }
        if (v.decType.value=="Unknown") then {
            CheckerFailure.raiseWith("no return type given to declaration"
                ++ " of method '{v.value.value}'", v.value)
        }
    }
    method visitBlock(v) is public {
        for (v.params) do {p->
            if (p.decType.value=="Unknown") then {
                CheckerFailure.raiseWith("no type given to declaration"
                    ++ " of parameter '{p.value}'", p)
            }
        }
    }
}
method checker(values) is public {
    for (values) do {v->
        v.accept(staticVisitor)
    }
}
