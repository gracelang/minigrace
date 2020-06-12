import "gUnit" as gu
import "naming" as mut
import "scope" as scope

def nameTests = object {
  class forMethod(m) {
    inherit gU.testCaseNamed(m)

    method testAssignmentMethodDecl {
        def result = successfulNameResolution ‹import "gUnit" as gu
method numberOfErrorsToRerun := (n) {
    gu.numberOfErrorsToRerun := n
}›
        assert (result.scope.lookup "numberOfErrorsToRerun:=(_)".isMethod)
    }
    method badNameResolution (aString) {
        // try parsing aString.  The parse should succeed, but the
        // name resolution should fail.
        var result := successfulParse (aString)
        assert {
            result := mut.buildScopesVisitor.newAccept (result)
            result := mut.reuseVisitor.newAccept (result)
            result.checkParentLinks
        } shouldRaise (CompilationError)
        return result
    }
    method test127_inheritsFromDef_fail {
        failingNameResolution ‹def singluarObject = object {
    def foo is public = "OK"
    method bar { "OK" }
}

object {
    inherit singluarObject
    print(foo)
    print(bar)
}

›
    }
    method testBlockWith2Params {
        def moduleNode = successfulNameResolution "\{ first, second -> wombat \}"
        def blockNode = moduleNode.body.first
        assert (blockNode.scope.isBlockScope)
        assert (blockNode.scope.definesLocally "first")
        assert (blockNode.scope.definesLocally "second")
    }
    method testInheritsFromExplicitOuter {
        failingNameResolution ‹class a {
    method x {
        object {
            method a {}
            method b {}
        }
    }

    class b {
        inherit outer.x
            // outer.x might be overriden by a subobject of a
        method c { a }
    }
}›
    }
    method successfulNameResolution (aString) {
        // try parsing aString as a startSymbol.  Fail
        // iff the parse fails, or if the result is not a module Node
        var result := parser.parse (lexer.lexString(aString))
        assert (result.isModule) description "result of parse is not a module"
        result := mut.buildScopesVisitor.acceptNode (result)
        result := mut.GraceReuseVisitor.newAccept (result)
        result.checkParentLinks
        return result
    }
    method testOnceMethod {
        var defn
        def result = successfulNameResolution ‹def inner = list.with(1, 2, 3)
once method size { inner.size }
›
        assert (result.scope.isModuleScope)
        assert (result.scope.defines "size")
        defn := result.items.first
        assert (defn) isA "DefDeclaration"
        defn := result.items.second
        assert (defn) isA "MethodDeclaration"
        assert (defn.isOnceMethod) description "`size` is not a once method in parser tree"
        assert (result.scope.lookupLocally "size" ifAbsent {
            return fail "size is not defined"
        }.isOnceMethod) description "size is not a once method in symbol table"
    }
    method test071_duplicateMethod_fail {
        failingNameResolution ‹def testObj = object {
    method a { print "OK" }
    method b {}
    method a {}     // should be an error
}

print(testObj.a)
›
    }
    method testMethodWith2Params {
        def result = successfulNameResolution ‹def testObj = object {
    method sum(x, y:Number)  { print (x + y) }
}

print(testObj.a(3, 4))
›
        assert (result.scope.isModuleScope)
        assert (result.scope.defines "testObj")
        def defn = result.items.first
        assert (defn) isA "DefDeclaration"
        assert (defn.initializer) isA "ObjectConstructor"
        assert (defn.initializer.scope.defines "sum(_,_)")
    }
    method test196_cantUseClassWithRequest_fail {
        failingNameResolution ‹class cat {
    method move { "walk" }
    print "A cat was created"   // makes this not a trait.
}
class dancingCat {
    use cat        // this should fail, because cat is not a trait.
    method move {  "dance" }
}
›
    }
    method testNoShadowingType {
        successfulNameResolution ‹
type Collection⟦T⟧ = interface {
    do(_:Procedure1⟦T⟧) -> Done
}
method do(_) {  ... }   // this declaration of do(_) has no effect on the use of do(_) in the interface.
›
    }
    method testDuplicateMethodWithArg {
        failingNameResolution ‹def testObj = object {
    method a(x)  { print "OK" }
    method b(y)  {}
    method a(w)  {}     // should be an error
}

print(testObj.a)
›
    }
    method testVarVisibilities {
        def result = successfulNameResolution ‹var inner := list.with(1, 2, 3)
var publicInner is public := list.empty
var readableInner is readable := list.with("a", "b", "c")
var writableInner is writable := list.empty
›
        def scope = result.scope
        assert (scope.isModuleScope)
        assert "inner" in (scope) isAnnotated [ "confidential" ]  andNot [ "readable", "writable", "public" ]
        assert "publicInner" in (scope) isAnnotated [ "public", "readable", "writable" ]  andNot [ "confidential" ]
        assert "readableInner" in (scope) isAnnotated [ "readable" ]  andNot [ "writable", "confidential", "public" ]
        assert "writableInner" in (scope) isAnnotated [ "writable" ]  andNot [ "readable", "confidential", "public" ]
    }
    method testWritableDef {
        failingNameResolution ‹def testObj is writable = 3
›
    }
    method test010_classParamDefClash_fail {
        failingNameResolution ‹class test(x:Number) {
      def x: Number = 2
      print(x)
}
›
    }
    method testMarkerMethod {
        def result = successfulNameResolution ‹method size is abstract, confidential
›
        assert (result.scope.isModuleScope)
        assert (result.scope.defines "size")
        assert (result.scope.lookupLocally "size" ifAbsent {
            return fail "size is not defined"
        }.isMarker) description "size is not a marker definition"
        def defn = result.items.first
        assert (defn) isA "MethodDeclaration"
        assert (defn.annotationNames.includes "abstract") description "size is not annotated with required"
        assert (defn.annotationNames.includes "confidential") description "size is not annotated with confidential"
    }
    method assert (aName) in (aScope) isAnnotated (visibilities) andNot (nonVisibilities) {
        def variable = aScope.lookupLocally (aName) ifAbsent {
            fail "{aName} is not in scope"
        }
        assert (variable) hasType (scope.Variable)
        def variableM = mirror.reflect(variable)
        visibilities.do { each →
            def methodName = "is" ++ each.capitalized
            assert (variableM.request(methodName)) description (aName ++ " is not " ++ each )
        }
        nonVisibilities.do { each →
            def methodName = "is" ++ each.capitalized
            deny (variableM.request(methodName)) description (aName ++ " is " ++ each )
        }
    }
    method testAmbiguous_a_fail {
        failingNameResolution ‹class a {
    method x {
        object {
            method a {}
            method b {}
        }
    }

    class b {
        use outer.outer.a.x
            // this uniquly defines x, without the possibility of overriding
        method c { a }
				// this `a` is ambiguous: are we refering to the inherited `a`, or outer.outer.a ?
    }
}›
    }
    method test052_shadowimport_fail {
        failingNameResolution ‹import "io" as io

def io = 1
›
    }
    method testWritablemethod {
        failingNameResolution ‹method testmeth is writable { 3 }
›
    }
    method test055_shadowtop_fail {
        failingNameResolution ‹var x := 1
var x := 2
›
    }
    method test195_traitWithRequest_fail {
        failingNameResolution ‹trait catClass {
    method move { "walk" }
    print "A cat was created"   // makes this not a trait.
}
›
    }
    method testMarkerDef {
        def result = successfulNameResolution ‹def final is annotation
›
        assert (result.scope.isModuleScope)
        assert (result.scope.defines "final")
        assert (result.scope.lookupLocally "final" ifAbsent {
            return fail "final is not defined"
        }.isMarker) description "final is not a marker definition"
        def defn = result.items.first
        assert (defn) isA "DefDeclaration"
        assert (defn.annotationNames) equals (OrderedCollection.with "annotation")
    }
    method test011_classParamMethodClash_fail {
        failingNameResolution ‹class test⟦W⟧(x:W) {
    method x⟦T⟧ {2}
    print(x)
}
test(7)
(1..10).do { n -> print(n) }
›
    }
    method testInheritsFromModule {
        successfulNameResolution ‹class a {
    method x {
        object {
            method m {}
            method n {}
        }
    }

    class b {
        use outer.outer.a.x
            // this uniquly defines x, without the possibility of overriding
        method c { m }
    }
}›
    }
    method test050_underscore_fail {
        failingNameResolution ‹var _ := 3
print(_)
›
    }
    method test070_duplicateDef_fail {
        failingNameResolution ‹def testObj = object {
    def a is public = "OK"
    def b is public = true
    def a is public = "nok OK"     // should be an error
}

print(testObj.a)
›
    }
    method testDefVisibilities {
        def result = successfulNameResolution ‹def inner = list.with(1, 2, 3)
def publicInner is public = list.empty
def readableInner is readable = list.with("a", "b", "c")
›
        def scope = result.scope
        assert (scope.isModuleScope)
        assert "inner" in (scope) isAnnotated [ "confidential" ]  andNot [ "readable", "writable", "public" ]
        assert "publicInner" in (scope) isAnnotated [ "public", "readable" ]  andNot [ "writable", "confidential" ]
        assert "readableInner" in (scope) isAnnotated [ "public", "readable" ]  andNot [ "writable", "confidential" ]
    }
    method testSimpleDef {
        def result = successfulNameResolution ‹def testObj = 3
testObj
›
        assert (result.scope.isModuleScope)
        assert (result.scope.defines "testObj")
        def defn = result.items.first
        assert (defn) isA "DefDeclaration"
        def ref = result.items.second
        assert (ref) isA "Identifier"
    }
    method test069_shadowparam_fail {
        failingNameResolution ‹method test(x) {
    for (1..5) do {x->
        print(x)
    }
}
›
    }
    method testAssignmentMethodForVar {
        def result = successfulNameResolution ‹var numberOfErrorsToRerun
›
        assert (result.scope.lookup "numberOfErrorsToRerun:=(_)".isImplicitMethod)
    }
    method test066_shadowblock_fail {
        failingNameResolution ‹def x = 1

for (1..5) do { x -> print(x) }
›
    }
    method testTopLevelReturn {
        failingNameResolution ‹if (1 == 2) then { return }
›
    }
    method test056_shadowmeth_fail {
        failingNameResolution ‹def x = 1
method test(x) {

}
›
    }
    method expectedFailures {
        return [ ]
    }
    method test193_traitConflict_fail {
        failingNameResolution ‹trait catTrait {
    method move { "walk" }
}
trait fishTrait {
    method move { "swim" }
}
class allTraits {
    use catTrait
    use fishTrait
}

print(allTraits.move)
›
    }
    method testMethodVisibilities {
        def result = successfulNameResolution ‹method inner {...}
method publicInner is public { ... }
method readableInner is readable { ... }
method confidentialMethod is confidential { ... }
›
        def scope = result.scope
        assert (scope.isModuleScope)
        assert "inner" in (scope) isAnnotated [ "public", "readable" ]  andNot [ "confidential", "writable" ]
        assert "publicInner" in (scope) isAnnotated [ "public", "readable" ]  andNot [ "confidential", "writable" ]
        assert "readableInner" in (scope) isAnnotated [ "readable", "public" ]  andNot [ "writable", "confidential" ]
        assert "confidentialMethod" in (scope) isAnnotated [ "confidential" ]  andNot [ "readable", "writable", "public" ]
    }
    method testRequiredMethod {
        def result = successfulNameResolution ‹method size is required
›
        assert (result.scope.isModuleScope)
        assert (result.scope.defines "size")
        assert (result.scope.lookupLocally "size" ifAbsent {
            return fail "size is not defined"
        }.isMarker) description "size is not a marker definition"
        def defn = result.items.first
        assert (defn) isA "MethodDeclaration"
        assert (defn.annotationNames.includes "required") description "size is not annotated with required"
    }
    method testShadowingTypeParameterFail {
        failingNameResolution ‹
type Collection⟦T⟧ = interface {
    do(_:Procedure1⟦T⟧) -> Done
}
var T    // this declaration of T makes the use of T as a type parameter illegal.
›
    }
    method test072_duplicateTopLevel_fail {
        failingNameResolution ‹method a { print "OK" }
method b {}
method a { print "not OK" }     // should be an error

a

›
    }
    method testInheritsFromOuter {
        failingNameResolution ‹class a {
    method x {
        object {
            method a {}
            method b {}
        }
    }

    class b {
        inherit x
            // this implicitly means outer.x, which a subobject of a might override
        method c { a }
    }
}›
    }
  }
}
