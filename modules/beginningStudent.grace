import "ast" as ast
import "mirrors" as mirror
import "typeComparison" as tc
    // TODO: make the gracelib version of canonicalName
    // available as a method
inherit prelude.methods
    exclude list
    exclude list(_)

def DialectError = prelude.Exception.refine "DialectError"

method list⟦T⟧ {
    prelude.collections.list⟦T⟧.empty
}
method list⟦T⟧(a) {
    prelude.collections.list⟦T⟧.withAll [a]
}
method list⟦T⟧(a, b) {
    prelude.collections.list⟦T⟧.withAll [a, b]
}
method list⟦T⟧(a, b, c) {
    prelude.collections.list⟦T⟧.withAll [a, b, c]
}
method list⟦T⟧(a, b, c, d) {
    prelude.collections.list⟦T⟧.withAll [a, b, c, d]
}

def selfImage = mirror.reflect(self)

selfImage.whenNoMethodDo { name, args ->
    if (isName (name) requesting "list") then {
        prelude.collections.list.withAll (args)
    } else {
        def cName = tc.canonical(name)
        NoSuchMethod.raise "no method {cName} on {self}."
    }
}

method isName (numericName) requesting (soughtName) {
    if (numericName.startsWith(soughtName).not) then { return false }
    var ix := soughtName.size + 1
    if ( numericName.at(ix) ≠ "(" ) then { return false }
    while {
        ix := ix + 1
        numericName.at(ix).startsWithDigit
    } do { }
    ix == numericName.size
}

def bsVisitor = object {
    inherit ast.baseVisitor
    method asString {
        "the beginningStudent visitor"
    }

    method visitArray(v) -> Boolean {
        DialectError.raise("square brackets are not used in this dialect; " ++
              "for a list, use list(_,_, ... )") with (v)
        false
    }
    method visitVarDec(v) -> Boolean {
        if (false == v.dtype) then {
            DialectError.raise "no type given to var '{v.nameString}'"
                with (v.name)
        }
        true
    }
    method visitMethod(v) -> Boolean {
        if (false == v.comments) then {
            DialectError.raise "purpose statement missing from method '{v.canonicalName}'"
                with (v.value)
        }
        def commentString = v.comments.value
        v.parametersDo { p ->
            if (p.wildcard.not) then {
                def pn = p.nameString
                if (false == p.dtype) then {
                    DialectError.raise "no type given to parameter '{pn}'"
                        with (p)
                }
                if (commentString.contains(pn).not) then {
                    DialectError.raise "purpose statement does not describe parameter '{pn}'"
                        with (v.comments)
                }
            }
        }
        if (false == v.dtype) then {
            DialectError.raise "no return type given to method '{v.canonicalName}'" 
                with (v.value)
        } elseif {(v.dtype.nameString ≠ "Done") && {
              ((commentString.contains "returns") || (commentString.contains "answers")).not} } then {
            DialectError.raise ("purpose statement of method '{v.canonicalName}" ++
                "does not describe its return value.") with (v.comments)
        }
            
        true
    }
    method visitBlock(v) -> Boolean {
        for (v.params) do {p ->
            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {
                DialectError.raise "no type given to block parameter '{p.nameString}'"
                    with (p)
            }
        }
        true
    }
}

def thisDialect is public = object {
    method parseChecker (moduleObj) {
        moduleObj.accept(bsVisitor)
    }
}
