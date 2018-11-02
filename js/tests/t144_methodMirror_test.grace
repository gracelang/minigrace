import "mirrors" as mirror
def foo = object {
    method example (a)  { print "a = {a}" }
    method example (a1,a2) and (b1) {print "a1 = {a1}, a2 = {a2}, b1 = {b1}"}
    method noParams { print "no params" }
    method notInherited is confidential { "not requestable from outside" }
}

foo.example("a")
foo.example("a1", "a2")and("b1")
foo.noParams

method describe (methodMirror) {
    var s := ""
    s := s ++ if (methodMirror.isConfidential) then
                { "Confidential" }  else { "" }
    s := s ++ if (methodMirror.isPublic) then
                { "Public" } else { "" }
    s := s ++ " method {methodMirror.name} has {methodMirror.numberOfParams} parameters"
    print(s)
}

def fooMirror = mirror.reflect(foo)
def exampleMirror = fooMirror.onMethod "example(_)"
print "got exampleMirror"
describe(exampleMirror)
def exampleAndMirror = fooMirror.onMethod "example(_,_)and(_)"
describe(exampleAndMirror)
def noParamsMirror = fooMirror.onMethod "noParams"
describe(noParamsMirror)
def notInhMirror = fooMirror.onMethod "notInherited"
describe(notInhMirror)

print "\nrequests using `requestWithArgs`"

exampleMirror.requestWithArgs [1]
exampleAndMirror.requestWithArgs ["a1", "a2", "b1"]
noParamsMirror.requestWithArgs []

print "\ndone"
