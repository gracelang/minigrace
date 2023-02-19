dialect "none"

import "ast" as ast
import "mirror" as mirror
import "unicode" as unicode
import "typeComparison" as tc
import "collections" as collections
import "standardBundle" as standardBundle
import "minispecBundle" as minispecBundle
import "regularExpression" as regex

use minispecBundle.open
use standardBundle.open
    exclude list(_)
    exclude dictionary(_)
    exclude sequence(_)
    exclude set(_)

method list⟦T⟧(a) {
    collections.list⟦T⟧.withAll [a]
}
method list⟦T⟧(a, b) {
    collections.list⟦T⟧.withAll [a, b]
}
method list⟦T⟧(a, b, c) {
    collections.list⟦T⟧.withAll [a, b, c]
}
method list⟦T⟧(a, b, c, d) {
    collections.list⟦T⟧.withAll [a, b, c, d]
}
method list⟦T⟧(a, b, c, d, e) {
    collections.list⟦T⟧.withAll [a, b, c, d, e]
}
method list⟦T⟧(a, b, c, d, e, f) {
    collections.list⟦T⟧.withAll [a, b, c, d, e, f]
}
method list⟦T⟧(a, b, c, d, e, f, g) {
    collections.list⟦T⟧.withAll [a, b, c, d, e, f, g]
}
method list⟦T⟧(a, b, c, d, e, f, g, h) {
    collections.list⟦T⟧.withAll [a, b, c, d, e, f, g, h]
}
method list⟦T⟧(a, b, c, d, e, f, g, h, i) {
    collections.list⟦T⟧.withAll [a, b, c, d, e, f, g, h, i]
}
method list⟦T⟧(a, b, c, d, e, f, g, h, i, j) {
    collections.list⟦T⟧.withAll [a, b, c, d, e, f, g, h, i, j]
}

method sequence⟦T⟧(a) {
    collections.sequence⟦T⟧.withAll [a]
}
method sequence⟦T⟧(a, b) {
    collections.sequence⟦T⟧.withAll [a, b]
}
method sequence⟦T⟧(a, b, c) {
    collections.sequence⟦T⟧.withAll [a, b, c]
}
method sequence⟦T⟧(a, b, c, d) {
    collections.sequence⟦T⟧.withAll [a, b, c, d]
}
method sequence⟦T⟧(a, b, c, d, e) {
    collections.sequence⟦T⟧.withAll [a, b, c, d, e]
}
method sequence⟦T⟧(a, b, c, d, e, f) {
    collections.sequence⟦T⟧.withAll [a, b, c, d, e, f]
}
method sequence⟦T⟧(a, b, c, d, e, f, g) {
    collections.sequence⟦T⟧.withAll [a, b, c, d, e, f, g]
}
method sequence⟦T⟧(a, b, c, d, e, f, g, h) {
    collections.sequence⟦T⟧.withAll [a, b, c, d, e, f, g, h]
}
method sequence⟦T⟧(a, b, c, d, e, f, g, h, i) {
    collections.sequence⟦T⟧.withAll [a, b, c, d, e, f, g, h, i]
}
method sequence⟦T⟧(a, b, c, d, e, f, g, h, i, j) {
    collections.sequence⟦T⟧.withAll [a, b, c, d, e, f, g, h, i, j]
}

method set⟦T⟧(a) {
    collections.set⟦T⟧.withAll [a]
}
method set⟦T⟧(a, b) {
    collections.set⟦T⟧.withAll [a, b]
}
method set⟦T⟧(a, b, c) {
    collections.set⟦T⟧.withAll [a, b, c]
}
method set⟦T⟧(a, b, c, d) {
    collections.set⟦T⟧.withAll [a, b, c, d]
}
method set⟦T⟧(a, b, c, d, e) {
    collections.set⟦T⟧.withAll [a, b, c, d, e]
}
method set⟦T⟧(a, b, c, d, e, f) {
    collections.set⟦T⟧.withAll [a, b, c, d, e, f]
}
method set⟦T⟧(a, b, c, d, e, f, g) {
    collections.set⟦T⟧.withAll [a, b, c, d, e, f, g]
}
method set⟦T⟧(a, b, c, d, e, f, g, h) {
    collections.set⟦T⟧.withAll [a, b, c, d, e, f, g, h]
}
method set⟦T⟧(a, b, c, d, e, f, g, h, i) {
    collections.set⟦T⟧.withAll [a, b, c, d, e, f, g, h, i]
}
method set⟦T⟧(a, b, c, d, e, f, g, h, i, j) {
    collections.set⟦T⟧.withAll [a, b, c, d, e, f, g, h, i, j]
}

method dictionary⟦T⟧(a) {
    collections.dictionary⟦T⟧.withAll [a]
}
method dictionary⟦T⟧(a, b) {
    collections.dictionary⟦T⟧.withAll [a, b]
}
method dictionary⟦T⟧(a, b, c) {
    collections.dictionary⟦T⟧.withAll [a, b, c]
}
method dictionary⟦T⟧(a, b, c, d) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d]
}
method dictionary⟦T⟧(a, b, c, d, e) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d, e]
}
method dictionary⟦T⟧(a, b, c, d, e, f) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d, e, f]
}
method dictionary⟦T⟧(a, b, c, d, e, f, g) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d, e, f, g]
}
method dictionary⟦T⟧(a, b, c, d, e, f, g, h) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d, e, f, g, h]
}
method dictionary⟦T⟧(a, b, c, d, e, f, g, h, i) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d, e, f, g, h, i]
}
method dictionary⟦T⟧(a, b, c, d, e, f, g, h, i, j) {
    collections.dictionary⟦T⟧.withAll [a, b, c, d, e, f, g, h, i, j]
}

def selfImage = mirror.reflect(self)

selfImage.whenNoMethodDo { name, args, receiver ->
    if (isName (name) requesting "list") then {
        collections.list.withAll (args)
    } elseif {isName (name) requesting "sequence"} then {
        collections.sequence.withAll (args)
    } elseif {isName (name) requesting "set"} then {
        collections.set.withAll (args)
    } elseif {isName (name) requesting "dictionary"} then {
        collections.dictionary.withAll (args)
    } else {
        self.NoSuchMethod.raise "no method {name} on {receiver}."
    }
}

method isName (canonicalName) requesting (soughtName) is confidential {
    if (canonicalName.startsWith(soughtName).not) then { return false }
    def re = regex.fromString (soughtName ++ ‹\(_(,_)*\)$›)
    re.matches(canonicalName)
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
                v.signatureParts.last.end
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
        def mn1 = v.signatureParts.first.name
        if (unicode.inCategory(mn1, "Lu")) then {
            DialectError.raise("by convention, method names start " ++
                "with a lower-case letter") with (v.signatureParts.first)
        }
        if (v.isClass) then { return true }
        if (false == v.dtype) then {
            DialectError.raise "no return type given to method '{v.canonicalName}'" 
                with (ast.start(v.start)
                            end(v.signatureParts.last.end))
        } elseif {
            (v.dtype.nameString ≠ "Done") && {
                ((lowerCommentString.contains "returns") || (lowerCommentString.contains "answers")).not
            }
        } then {
            DialectError.raise ("purpose statement of method '{v.canonicalName}" ++
                "does not describe what it returns") with (v.comments)
        }
        true
    }
    method visitBlock(v) -> Boolean {
        v.params.do { p ->
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
