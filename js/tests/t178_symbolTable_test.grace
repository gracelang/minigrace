dialect "minispec"

import "compiler" as compiler
import "ast" as ast
import "identifierresolution" as idRes
import "errormessages" as errormessages
import "xmodule" as xmodule

import "subtest/t178_gctTestDialect" as _
    // this import is here to force compilation of subtest/t178_gctTestDialect and
    // subtest/t178_gctTestDialect

numberOfErrorsToRerun := 0

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
def gct = idRes.generateGctForModule(resolvedModule1)

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

def bundleScope = idRes.newScopeKind "module"
xmodule.checkExternalModule ( ast.dialectNode.new "subtest/t178_gctTestBundle" )
    // finds the .js file
def bundleGct = xmodule.gctDictionaryFor "t178_gctTestBundle"
idRes.processGct(bundleGct, bundleScope)  // puts the gct information into the scope

describe "bundle gct imported to symbol table" with {
    specify "testDialect methods" by {
        expect (bundleScope.contains "open") orSay "`open` not a method of bundle"
    }
    specify "testDialect.open methods (using getScope)" by {
        def openScope = bundleScope.getScope "open"
        expect (openScope.contains "graphicApplicationSize(1)") orSay
            "`graphicApplicationSize(1)` is not a method of bundle.open"
    }
    specify "testDialect.open methods (using dotted name)" by {
        def openScope = bundleScope.scopeForDottedName "open"
        expect (openScope.contains "graphicApplicationSize(1)") orSay
            "`graphicApplicationSize(1)` is not a method of bundle.open"
    }
    specify "testDialect.open.graphicApplicationSize methods" by {
        def gaScope = bundleScope.scopeForDottedName "open.graphicApplicationSize(1)"
        expect (gaScope.contains "canvas") orSay
            "`canvas` is not a method of bundle.open.graphicApplicationSize(1)"
    }
}

def dialectScope = idRes.newScopeKind "dialect"
xmodule.checkExternalModule ( ast.dialectNode.new "subtest/t178_gctTestDialect" )
    // finds the .js file
def dialectGct = xmodule.gctDictionaryFor "t178_gctTestDialect"

describe "dialect gct" with {
    specify "dialect methods contains identityEquality" by {
        expect (dialectGct) at "methods" toIncludeEntryStartingWith "identityEquality"
    }
    specify "dialect methods contains graphicApplicationSize" by {
        expect (dialectGct) at "methods"
              toIncludeEntryStartingWith "graphicApplicationSize(1)"
    }
    specify "dialect gct has key `methods-of:graphicApplicationSize(1)`" by {
        expect (dialectGct.containsKey "methods-of:graphicApplicationSize(1)")
              orSay "no entry with key methods-of:graphicApplicationSize(1)"
    }
    specify "dialect gct at `methods-of:graphicApplicationSize(1)` has entry `canvas`" by {
        expect (dialectGct) at "methods-of:graphicApplicationSize(1)" toIncludeEntryStartingWith "canvas"
    }
}

idRes.processGct(dialectGct, dialectScope)  // puts the gct information into the scope

describe "dialect gct imported to symbol table" with {
    specify "testDialect exposes list method" by {
        expect (dialectScope.contains "list") orSay "`list` not a method of dialect"
    }
    specify "testDialect exposes drawingCanvasSize method" by {
        expect (dialectScope.contains "drawingCanvasSize(1)") orSay "`drawingCanvasSize(1)` not a method of dialect"
    }
    specify "testDialect exposes graphicApplicationSize method" by {
        expect (dialectScope.contains "graphicApplicationSize(1)") orSay "`graphicApplicationSize(1)` not a method of dialect"
    }
//    specify "testDialect.graphicApplicationSize methods (dotted)" by {
//        def gaScope = dialectScope.scopeForDottedName "graphicApplicationSize(1)"
//        expect (gaScope.contains "canvas") orSay
//              "`canvas` is not a method of dialect.graphicApplicationSize(1)"
//    }
//    specify "testDialect.graphicApplicationSize methods (getScope)" by {
//        def gaScope = dialectScope.getScope "graphicApplicationSize(1)"
//        expect (gaScope.contains "canvas") orSay
//            "`canvas` is not a method of dialect.graphicApplicationSize(1), which contains {gaScope.elementScopes.keys >> sequence}"
//    }
}
exit
