import "mirrors" as mirror
def foo = object {
    method example (a)  { print "a = {a}" }
    method example (a1,a2) and (b1) {print "a1 = {a1}, a2 = {a2}, b1 = {b1}"}
    method noParams { print "no params" }
}

foo.example("a")
foo.example("a1", "a2")and("b1")
foo.noParams

method describe (methodMirror) {
    print "method {methodMirror.name} has {methodMirror.paramcounts} parameters."
}

def exampleMirror = mirror.reflect(foo).getMethod "example"
describe(exampleMirror)
def exampleAndMirror = mirror.reflect(foo).getMethod "example()and"
describe(exampleAndMirror)
def noParamsMirror = mirror.reflect(foo).getMethod "noParams"
describe(noParamsMirror)

print "\nrequests using `request`"

exampleMirror.request [ ["a"] ]
exampleAndMirror.request [ ["a1", "a2"], ["b1"] ]
noParamsMirror.request [ [] ]

print "\nrequests using `requestWithArgs`"

exampleMirror.requestWithArgs [1]
exampleAndMirror.requestWithArgs ["a1", "a2", "b1"]
noParamsMirror.requestWithArgs []

print "\ndone"
