import "gUnit" as gU

type SimpleType = Object & interface {
    simple -> String
    typeMeth -> Type
}

method noType(a1) { a1 + 1 }
method numType(n1:Number) { n1 + 2 }
method paramType⟦T⟧(x:T) { x.asString }
method typeIdentity⟦A⟧ { A }
method typeComparison⟦A,B⟧ {
    def Amethods = A.methodNames
    def Bmethods = B.methodNames
    def ActB = Amethods.isSuperset(Bmethods)
    def BctA = Bmethods.isSuperset(Amethods)
    if (ActB && BctA) then { "{A} and {B} are equal" }
        elseif {ActB} then { "{A} conforms to {B}" }
        elseif {BctA} then { "{B} conforms to {A}" }
        else { "{A} and {B} are incomparable" }
}

type X = interface {
    a -> X
    b -> Number
    c -> X
}

type Y = Object & X

type Z⟦P⟧ = interface {
    a -> X
    b -> String
    c -> Z⟦P⟧
}

def typeTest = object {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        method testMethodNoType {
            assert (noType 8) shouldBe 9
        }
        method testMethodNumber {
            assert (numType 7) shouldBe 9
        }
        method testMethodParametricNumber {
            assert (paramType⟦Number⟧ 5) shouldBe "5"
        }
        method testMethodParametricString {
            assert (paramType⟦String⟧ "foo") shouldBe "foo"
        }

        method testMethodNoTypeFail {
            assert {noType "foo"}
                shouldRaise (NoSuchMethod)
                mentioning "no method +(_)"
        }
        method testMethodNumberFail {
            assert {numType "foo"}
                shouldRaise (TypeError)
                mentioning "does not have type Number"
        }
        method testMethodParametricNumberFail {
            assert {paramType⟦Number⟧ "foo"}
                shouldRaise (TypeError)
                mentioning "does not have type T (= Number)"
        }
        method testMethodParametricStringFail {
            assert {paramType⟦String⟧ 5}
                shouldRaise (TypeError)
                mentioning "does not have type T (= String)"
        }
        method testTooManyTypeArguments {
            assert {paramType⟦String,Number⟧ "foo"}
                shouldRaise (RequestError)
                mentioning "requires 1 type argument, but was given 2"
        }
        method testOneTypeParameter {
            assert (typeIdentity⟦Boolean⟧) shouldBe (Boolean)
        }
        method testOneOmittedTypeParameter {
            assert (typeIdentity) shouldBe (Unknown)
        }
        method testTooFewTypeArguments {
            assert {typeComparison⟦String⟧}
                shouldRaise (RequestError)
                mentioning "requires 2 type arguments, but was given 1"
        }
        method testValuesOfTypeArguments {
            assert (typeIdentity⟦X⟧) shouldBe (X)
            assert (typeIdentity⟦Y⟧) shouldBe (Y)
        }
        method testAsStringOfSimpleType {
            assert (SimpleType.asString) shouldBe "type SimpleType"
        }
        method testNamesOfTypeArguments {
            assert (typeIdentity⟦X⟧.name) shouldBe "X"
            assert (typeIdentity⟦Y⟧.name) shouldBe "Y"
        }
        method testAsStringMethodsOfTypes {
            assert (typeIdentity⟦X⟧.asString) shouldBe "type X"
            assert (typeIdentity⟦Y⟧.asString) shouldBe "type Y"
        }
        method testTypeComparisonFirstConformsToSecond {
            assert (typeComparison⟦List,Collection⟧)
                shouldBe "type List conforms to type Collection"
        }
        method testTypeComparisonEqual {
            assert (typeComparison⟦List,List⟧)
                shouldBe "type List and type List are equal"
        }
        method testTypeComparisonIncomparable {
            assert (typeComparison⟦List,Boolean⟧)
                shouldBe "type List and type Boolean are incomparable"
        }
        method testTypeComparisonSecondConformsToFirst {
            assert (typeComparison⟦Sequence,Collection⟧)
                shouldBe "type Sequence conforms to type Collection"
        }
    }
}

def typeTests = gU.testSuite.fromTestMethodsIn(typeTest)
typeTests.runAndPrintResults

