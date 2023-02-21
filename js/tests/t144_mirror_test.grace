dialect "minispec"
import "mirror" as mirror

def foo = object {
    method == (other) { isMe(other) }
    method example (a)  { "a = {a}" }
    method example (a1,a2) and (b1) { "a1 = {a1}, a2 = {a2}, b1 = {b1}"}
    method noParams { "no params" }
    method notInherited is confidential { "not requestable from outside" }
    method withTypeParams⟦K, V⟧ (key:K) mapsTo (value:V) {
        "key {key} has {K} and value {value} has {V}"
    }
}

def fooMirror = mirror.reflect(foo)
def secondMirror = mirror.reflect(foo)
def differentMirror = mirror.reflect "foo"
def exampleMirror = fooMirror.onMethod "example(_)"
def exampleAndMirror = fooMirror.onMethod "example(_,_)and(_)"
def noParamsMirror = fooMirror.onMethod "noParams"
def notInhMirror = fooMirror.onMethod "notInherited"
def typeParmsMirror = fooMirror.onMethod "withTypeParams(_)mapsTo(_)"

describe "Mirror types and objects" with {
    specify "mirrors have exactly the type Mirror" by {
        expectType (mirror.Mirror) toExactlyDescribe (fooMirror)
    }

    specify "method mirrors have exactly the type MethodMirror" by {
        expectType (mirror.MethodMirror) toExactlyDescribe (exampleMirror)
    }
}

describe "mirror properties" with {
    specify "subject of mirror on object foo" by {
        expect (fooMirror.subject) toBe (foo)
    }
    specify "subject of mirror on string foo" by {
        expect (differentMirror.subject) toBe "foo"
    }
    specify "method names" by {
        expect (fooMirror.methodNames) toBe ["==(_)", "asDebugString",
            "asString", "example(_)", "example(_,_)and(_)",
            "noParams", "withTypeParams(_)mapsTo(_)" ]
    }
    specify "confidential method names" by {
        expect (fooMirror.confidentialMethodNames) toBe ["basicAsString",
            "isMe(_)", "myIdentityHash", "notInherited"]
    }
    specify "all method names" by {
        expect (fooMirror.allMethodNames) toBe ["==(_)", "asDebugString",
            "asString", "basicAsString",
            "example(_)", "example(_,_)and(_)", "isMe(_)", "myIdentityHash",
            "noParams", "notInherited", "withTypeParams(_)mapsTo(_)" ]
    }
    specify "ilk" by {
        expect (fooMirror.ilk) toBe "foo-t144_mirror_test-4"
        expect (differentMirror.ilk) toBe "string-built-in"
    }
    specify "definition data" by {
        expect (fooMirror.definitionModule) toBe "t144_mirror_test"
        expect (fooMirror.definitionLine) toBe 4
        expect (differentMirror.definitionModule) toBe "built-in library"
        expect (differentMirror.definitionLine) toBe 0
    }
}

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
        expect (exampleAndMirror.paramCounts) toBe [2, 1]
        expect (noParamsMirror.numberOfParams) toBe 0
        expect (notInhMirror.numberOfParams) toBe 0
        expect (typeParmsMirror.numberOfTypeParams) toBe 2
    }
    specify "parameter names" by {
        expect (typeParmsMirror.paramNames) toBe ["key", "value"]
        expect (typeParmsMirror.typeParamNames) toBe ["K", "V"]
        expect (exampleAndMirror.paramNames) toBe ["a1", "a2", "b1"]
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
    specify "request with type arguments" by {
        expect (typeParmsMirror.requestWithArgs ["one", 1, String, Number])
            toBe "key one has type String and value 1 has type Number"
    }
    specify "request without type arguments" by {
        expect (typeParmsMirror.requestWithArgs ["one", 1])
            toBe "key one has type Unknown and value 1 has type Unknown"
    }
    specify "request with wrong number of arguments" by {
        expect { typeParmsMirror.requestWithArgs ["one", 1, String] }
            toRaise (RequestError) mentioning "requires 2 arguments" and "given 3"
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

describe "no method hadler" with {
    specify "normal behaviour" by {
        expect {foo.nonMethod(1, 2)} toRaise (NoSuchMethod) mentioning "nonMethod(_,_)"
    }
    specify "handler behaviour" by {
        def bar = object { use identityEquality }
        def barMirror = mirror.reflect(bar)
        barMirror.whenNoMethodDo { name, args, subj ->
            expect (subj) toBe (bar)
            expect (args) toBe [1, 2]
            expect (name) toBe "nonMethod(_,_)"
            "success"
        }
        expect (bar.nonMethod(1, 2)) toBe "success"
    }
}

describe "utility methods" with {
    specify "number of parameters from numeric name" by {
        expect (mirror.numberOfParameters "isMe(1)") toBe 1
        expect (mirror.numberOfParameters "hash") toBe 0
        expect (mirror.numberOfParameters "example(2)and(1)") toBe 3
    }
    specify "isTheSame foo" by {
        expect (mirror.isTheSame(foo, foo)) toBe true
        expect (mirror.isTheSame(foo, "foo")) toBe false
    }
    specify "isTheSame string" by {
        expect (mirror.isTheSame("forty", "forty")) toBe true
        expect (mirror.isTheSame("fifty", "forty")) toBe false
    }
    specify "isTheSame number" by {
        expect (mirror.isTheSame(47, 47)) toBe true
        expect (mirror.isTheSame(47, 52)) toBe false
    }
    specify "isTheSame on object without equality" by {
        def o1 = object { }
        def o2 = object { }
        expect (mirror.isTheSame(o1, o1)) toBe true
        expect (mirror.isTheSame(o1, o2)) toBe false
    }
}

exit
