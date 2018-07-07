import "ast" as ast
import "mirrors" as mirror
import "unicode" as unicode
import "typeComparison" as tc
    // TODO: make the gracelib version of canonicalName
    // available as a method
import "nospec" as minispec
inherit minispec.methods
    exclude list
    exclude list(_)
    exclude dictionary
    exclude dictionary(_)
    exclude sequence
    exclude sequence(_)
    exclude set
    exclude set(_)

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

class sequence⟦T⟧ {
    inherit prelude.clone(prelude.emptySequence)
    method withAll(elements) {
        prelude.collections.sequence⟦T⟧.withAll(elements)
    }
}
method sequence⟦T⟧(a) {
    prelude.collections.sequence⟦T⟧.withAll [a]
}
method sequence⟦T⟧(a, b) {
    prelude.collections.sequence⟦T⟧.withAll [a, b]
}
method sequence⟦T⟧(a, b, c) {
    prelude.collections.sequence⟦T⟧.withAll [a, b, c]
}
method sequence⟦T⟧(a, b, c, d) {
    prelude.collections.sequence⟦T⟧.withAll [a, b, c, d]
}

method set⟦T⟧ {
    prelude.collections.set⟦T⟧.empty
}
method set⟦T⟧(a) {
    prelude.collections.set⟦T⟧.withAll [a]
}
method set⟦T⟧(a, b) {
    prelude.collections.set⟦T⟧.withAll [a, b]
}
method set⟦T⟧(a, b, c) {
    prelude.collections.set⟦T⟧.withAll [a, b, c]
}
method set⟦T⟧(a, b, c, d) {
    prelude.collections.set⟦T⟧.withAll [a, b, c, d]
}

method dictionary⟦T⟧ {
    prelude.collections.dictionary⟦T⟧.empty
}
method dictionary⟦T⟧(a) {
    prelude.collections.dictionary⟦T⟧.withAll [a]
}
method dictionary⟦T⟧(a, b) {
    prelude.collections.dictionary⟦T⟧.withAll [a, b]
}
method dictionary⟦T⟧(a, b, c) {
    prelude.collections.dictionary⟦T⟧.withAll [a, b, c]
}
method dictionary⟦T⟧(a, b, c, d) {
    prelude.collections.dictionary⟦T⟧.withAll [a, b, c, d]
}

def selfImage = mirror.reflect(self)

selfImage.whenNoMethodDo { name, args ->
    if (isName (name) requesting "list") then {
        prelude.collections.list.withAll (args)
    } elseif {isName (name) requesting "sequence"} then {
        prelude.collections.sequence.withAll (args)
    } elseif {isName (name) requesting "set"} then {
        prelude.collections.set.withAll (args)
    } elseif {isName (name) requesting "dictionary"} then {
        prelude.collections.dictionary.withAll (args)
    } else {
        def cName = tc.canonical(name)
        NoSuchMethod.raise "no method {cName} on {self}."
    }
}

method isName (numericName) requesting (soughtName) is confidential {
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
              "for a list, use list(_, _, ... )") with (v)
        false
    }
    method visitVarDec(v) -> Boolean {
        def name = v.nameString
        if (false == v.dtype) then {
            DialectError.raise "no type given to var '{v.nameString}'"
                with (v.name)
        }
        if (unicode.inCategory(name, "Lu")) then {
            DialectError.raise("by convention, variables start " ++
                "with a lower-case letter") with (v.name)
        }
        true
    }
    method visitDefDec(v) -> Boolean {
        def name = v.nameString
        if (unicode.inCategory(name, "Lu")) then {
            DialectError.raise("by convention, constants start " ++
                "with a lower-case letter") with (v.name)
        }
        true
    }
    method visitMethod(v) -> Boolean {
        if (false == v.comments) then {
            def headerEnd = if (false == v.dtype) then {
                v.signature.last.end
            } else {
                v.dtype.end
            }
            def loc = ast.start(v.start) end (headerEnd)
            DialectError.raise "purpose statement missing from method '{v.canonicalName}'"
                with (loc)
        }
        def commentString = v.comments.value
        def lowerCommentString = commentString.asLower
        v.parametersDo { p ->
            if (p.wildcard.not) then {
                def pn = p.nameString
                if (false == p.dtype) then {
                    DialectError.raise "no type given to parameter '{pn}'"
                        with (p)
                }
                if (unicode.inCategory(pn, "Lu")) then {
                    DialectError.raise("by convention, parameters start " ++
                          "with a lower-case letter") with (p)
                }
                if (commentString.contains(pn).not) then {
                    DialectError.raise "purpose statement does not describe parameter '{pn}'"
                        with (v.comments)
                }
            }
        }
        def mn1 = v.signature.first.name
        if (unicode.inCategory(mn1, "Lu")) then {
            DialectError.raise("by convention, method names start " ++
                "with a lower-case letter") with (v.signature.first)
        }
        if (v.isClass) then { return true }
        if (false == v.dtype) then {
            DialectError.raise "no return type given to method '{v.canonicalName}'" 
                with (ast.start(v.start)
                            end(v.signature.last.end))
        } elseif {(v.dtype.nameString ≠ "Done") && {
              ((lowerCommentString.contains "returns") || (lowerCommentString.contains "answers")).not} } then {
            DialectError.raise ("purpose statement of method '{v.canonicalName}" ++
                "does not describe what it returns") with (v.comments)
        }
            
        true
    }
    method visitBlock(v) -> Boolean {
        for (v.params) do {p ->
            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {
                DialectError.raise "no type given to block parameter '{p.nameString}'"
                    with (p)
            }
            if (unicode.inCategory(p.nameString, "Lu")) then {
                DialectError.raise("by convention, parameters start " ++
                      "with a lower-case letter") with (p)
            }
        }
        true
    }
    method visitTypeDec(v) -> Boolean {
        def ns = v.nameString
        if (unicode.inCategory(ns, "Lu").not) then {
            DialectError.raise("by convention, type names start " ++
                  "with an upper-case letter") with (v.name)
        }
        true
    }
}

def thisDialect is public = object {
    method parseChecker (moduleObj) {
        moduleObj.accept(bsVisitor)
    }
}
