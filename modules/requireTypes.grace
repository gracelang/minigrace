dialect "none"
import "ast" as ast
import "standardBundle" as standardBundle

use standardBundle.open

def CheckerFailure = self.Exception.refine "CheckerFailure"

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
    method visitMethodDec(v) -> Boolean is public {
        v.signatureParts.do { p ->
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
        v.params.do { p ->
            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {
                CheckerFailure.raise ("no type given to declaration"
                    ++ " of block parameter '{p.value}'") with (p)
            }
        }
        true
    }
}

def thisDialect is public = object {
    method parseChecker (moduleObj) {
        moduleObj.accept(staticVisitor)
    }
}
