dialect "minispec"

import "compiler" as compiler
import "ast" as ast
import "identifierresolution" as identifierresolution
import "errormessages" as errormessages

def SyntaxError = errormessages.SyntaxError

def input1 = ‹var w: Number is writable := 100
def xx: Number is readable = 3
def other = object {
    class create {
        method things(n:Number) { "thing "*n }
        method thong -> String { "thong" }
    }
    type C = interface { ca → Done }
    type U⟦W⟧ = Collection⟦W⟧
}
method m(y: Number) -> Done {
    print(47+y)
}
method n(a) -> Number is confidential {3}
type A = other.C | other.U⟦Number⟧ | interface {
    m1(n:Number) → Number
    m2(n:Number) -> Done
}
type D = Dictionary⟦String, Number⟧ & A & H⟦String⟧
type H⟦T⟧ = interface {
    m3(x:T) → T
}
type Z = interface {
    m4(x:D) -> A
} & interface {
    m5(x:Z) -> Z
}›


def resolvedModule1 = compiler.astFromString(input1)
def gct = identifierresolution.generateGctForModule(resolvedModule1)

method expect (gctDict) at (key) toIncludeEntryStartingWith (s) {
    def value = gctDict.at(key)
    expect (value.includes { each -> each.startsWith(s) })
        orSay ("gct entry \"{key}\" does not include an entry starting " ++
            "with \"{s}\"; it is\n{value}")
}

method expect (gctDict) at (key) notToIncludeEntryStartingWith (s) {
    def value = gctDict.at(key)
    expect (value.includes { each -> each.startsWith(s) }.not)
        orSay("gct entry \"{key}\" includes an entry starting " ++
            "with \"{s}\"")
}

describe "gct external representation" with {
    specify "gct def'd object" by {
        expect (gct) at "methods" toIncludeEntryStartingWith "other (def)"
    }
    specify "gct dialect" by {
        expect (gct.at "dialect") toBe ["standard"]
    }
    specify "gct fresh-methods of other" by {
        expect (gct) at "methods-of:other" toIncludeEntryStartingWith "create (fresh)"
    }
    specify "gct methods of other.create" by {
        expect (gct.at "methods-of:other.create") toBe [
              "asDebugString (fgo)", "asString (fgo)",
              "basicAsString (fgo)", "isMe(1) (fgo)",
              "myIdentityHash (fgo)", "things(1)", "thong"
        ]
    }
    specify "gct methods present" by {
        ["A", "D", "H", "Z", "m(1)", "xx", "w (var)"].do { m ->
            expect (gct) at "methods" toIncludeEntryStartingWith (m)
        }
    }
    specify "gct methods absent" by {
        expect (gct) at "methods" notToIncludeEntryStartingWith "w:=(1)"
        // this entry should not be in the gct; instead, such
        // a method can be inferred from the presence of w (var)
    }
    specify "gct method types" by {
        expect (gct.at "methodTypes") toBe [
            "m(y:Number) → Done", "w:=(_:Number) → Done", "xx → Number" ]
        // should include all public methods, including readers and writers,
        // but not confidential methods.  These are supposed to be _types_
    }
    specify "gct typedec A" by {
        expect (gct.at "typedec-of:A") toBe [
            ‹type A = other.C | other.U⟦Number⟧ | interface {
    m1(n:Number) → Number
    m2(n:Number) → Done}›
        ]
    }
    specify "gct typedec D" by {
        expect (gct.at "typedec-of:D") toBe [
            ‹type D = Dictionary⟦String, Number⟧ & A & H⟦String⟧›
        ]
    }
    specify "gct typedec of H" by {
        expect (gct.at "typedec-of:H") toBe [‹type H⟦T⟧ = interface {
        m3(x:T) → T}› ]
        // key can't be "typedec-of:H⟦T⟧", because we don't
        // yet know about the existence of parameter T
    }
    specify "gct typedec of Z" by {
        expect (gct.at "typedec-of:Z") toBe [
              ‹type Z = interface {
    m4(x:D) → A} & interface {
    m5(x:Z) → Z}›
        ]
    }
    specify "gct types" by {
        expect (gct.at "types") toBe ["A", "D", "H", "Z", "other.C", "other.U"]
    }
}

exit
