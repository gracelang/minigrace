import "ast" as ast
import "standardGraceClass" as sgc

inherit sgc.standardGrace

def CheckerFailure = prelude.Exception.refine "CheckerFailure"

def staticVisitor = object {
    inherit ast.baseVisitor
    method asString {
        "the requireTypes visitor"
    }

    method visitDefDec(v) -> Boolean is public {
        if (false == v.dtype) then {
            CheckerFailure.raise ("no type given to declaration"
                ++ " of def '{v.name.value}'") with (v.name)
        }
        true
    }
    method visitVarDec(v) -> Boolean is public {
        if (false == v.dtype) then {
            CheckerFailure.raise ("no type given to declaration"
                ++ " of var '{v.name.value}'") with (v.name)
        }
        true
    }
    method visitMethod(v) -> Boolean is public {
        for (v.signature) do {p ->
            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {
                CheckerFailure.raise ("no type given to declaration"
                    ++ " of parameter '{p.value}'") with (p)
            }
        }
        if (false == v.dtype) then {
            CheckerFailure.raise ("no return type given to declaration"
                ++ " of method '{v.value.value}'") with (v.value)
        }
        true
    }
    method visitBlock(v) -> Boolean is public {
        for (v.params) do {p ->
            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {
                CheckerFailure.raise ("no type given to declaration"
                    ++ " of block parameter '{p.value}'") with (p)
            }
        }
        true
    }
}
method checker(values) is public {
    print "starting checker"
    for (values) do {v->
        v.accept(staticVisitor)
    }
}

def thisDialect is public = object {
    method parseChecker (moduleObj) { checker (moduleObj.body) }
}
