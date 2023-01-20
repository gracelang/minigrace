dialect "minispec"
import "mirror" as mirror

def foo = object {
    method example (a)  { "a = {a}" }
    method example (a1,a2) and (b1) { "a1 = {a1}, a2 = {a2}, b1 = {b1}"}
    method noParams { "no params" }
    method notInherited is confidential { "not requestable from outside" }
}

def fooMirror = mirror.reflect(foo)
def exampleMirror = fooMirror.onMethod "example(_)"
def exampleAndMirror = fooMirror.onMethod "example(_,_)and(_)"
def noParamsMirror = fooMirror.onMethod "noParams"
def notInhMirror = fooMirror.onMethod "notInherited"

describe "method metadata" with {
    specify "visibility" by {
        expect (exampleMirror.isConfidential) toBe false
        expect (exampleMirror.isPublic) toBe true
        expect (noParamsMirror.isConfidential) toBe false
        expect (noParamsMirror.isPublic) toBe true
        expect (notInhMirror.isConfidential) toBe true
        expect (notInhMirror.isPublic) toBe false
    }
    specify "number of parameters" by {
        expect (exampleMirror.numberOfParams) toBe 1
        expect (exampleAndMirror.numberOfParams) toBe 3
        expect (noParamsMirror.numberOfParams) toBe 0
        expect (notInhMirror.numberOfParams) toBe 0
    }
}

describe "reflective requests with arguments" with {
    specify "request with single arg" by {

        expect (exampleMirror.requestWithArgs [1]) toBe "a = 1"
    }
    specify "request with three args" by {
        expect (exampleAndMirror.requestWithArgs ["a1", "a2", "b1"]) toBe "a1 = a1, a2 = a2, b1 = b1"
    }
    specify "request with zero args" by {
        expect (noParamsMirror.requestWithArgs []) toBe "no params"
    }
}

describe "mirror equality" with {
    specify "mirror == itself" by {
        expect (exampleMirror == exampleMirror) toBe true orSay "example mirror is not == to itself"
    }
    specify "mirror = another mirror on same method" by {
        def m1 = fooMirror.onMethod "example(_)"
        expect (exampleMirror == m1) toBe true orSay "example mirror is not == to another mirror on same method"
    }
    specify "mirror ≠ mirror on another method" by {
        expect (exampleMirror == exampleAndMirror) toBe false orSay "example mirror is == to exampleAndMirror"
    }
    specify "mirror ≠ mirror on another object" by {
        def m1 = mirror.reflect 1 .onMethod "+(_)"
        def m2 = mirror.reflect 2 .onMethod "+(_)"
        expect (m1 == m2) toBe false orSay "mirror on 1.+(_) is == mirror on 2.+(_)"
    }
}

exit
