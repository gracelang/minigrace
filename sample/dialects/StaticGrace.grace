import "ast" as ast
import "StandardPrelude" as StandardPrelude

def standardPrelude is parent = StandardPrelude

def CheckerFailure = Exception.refine "CheckerFailure"
method checker(values) is public {
    def vis = object {
        inherits ast.baseVisitor
        method visitDefDec(v) is public {
            if ((false == v.dtype).orElse {v.dtype.value=="Dynamic"}) then {
                CheckerFailure.raiseWith("no type given to declaration"
                    ++ " of def '{v.name.value}'", v.name)
            }
        }
        method visitVarDec(v) is public {
            if ((false == v.dtype).orElse {v.dtype.value=="Dynamic"}) then {
                CheckerFailure.raiseWith("no type given to declaration"
                    ++ " of var '{v.name.value}'", v.name)
            }
        }
        method visitMethod(v) is public {
            for (v.signature) do {s->
                for (s.params) do {p->
                    if ((false == p.dtype).orElse
                        {p.dtype.value=="Dynamic"}) then {
                        CheckerFailure.raiseWith("no type given to declaration"
                            ++ " of parameter '{p.value}'", p)
                    }
                }
            }
            if ((false == v.dtype).orElse
                {v.dtype.value=="Dynamic"}) then {
                CheckerFailure.raiseWith("no return type given to declaration"
                    ++ " of method '{v.value.value}'", v.value)
            }
        }
        method visitBlock(v) is public {
            for (v.params) do {p->
                if ((false == p.dtype).orElse
                    {p.dtype.value=="Dynamic"}) then {
                    CheckerFailure.raiseWith("no type given to declaration"
                        ++ " of parameter '{p.value}'", p)
                }
            }
        }
    }
    for (values) do {v->
        v.accept(vis)
    }
}
