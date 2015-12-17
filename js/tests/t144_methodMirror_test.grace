import "mirrors" as mirror
def foo = object {
    method example (a)  { print "a = {a}" }
    method example (a1,a2) and (b1) {print "a1 = {a1}, a2 = {a2}, b1 = {b1}"}
    method noParams { print "no params" }
    method variableArity(*a) { print "method variableArity requested with {a.size} arguments" }
    method variable(a1, a2, *as) and (b) and (*c) { 
        print "method variable()and()and requested with [{2 + as.size}, {1}, {c.size}] arguments"
        print "a1 = {a1}, a2 = {a2}, as = {as}, b = {b}, c = {c}"
    }
}

foo.example("a")
foo.example("a1", "a2")and("b1")
foo.noParams
foo.variableArity(1, 2, 3, 4)
foo.variable(1, 2, 3, 4) and "ho" and (1,2,3,4,5,6)

method describe (methodMirror) {
    print "method {methodMirror.name} has {methodMirror.paramcounts} parameters and {methodMirror.isVariableArity} variable arity parameter lists"
}

def exampleMirror = mirror.reflect(foo).getMethod "example"
describe(exampleMirror)
def exampleAndMirror = mirror.reflect(foo).getMethod "example()and"
describe(exampleAndMirror)
def noParamsMirror = mirror.reflect(foo).getMethod "noParams"
describe(noParamsMirror)
def vaMirror = mirror.reflect(foo).getMethod "variableArity"
describe(vaMirror)
def vaAndAndMirror = mirror.reflect(foo).getMethod "variable()and()and"
describe(vaAndAndMirror)

print "\nrequests using `request`"

exampleMirror.request(sequence.with(sequence.with "a"))
exampleAndMirror.request(sequence.with(sequence.with ("a1", "a2"), sequence.with("b1")))
noParamsMirror.request(sequence.with(sequence.empty))
vaMirror.request(sequence.with(sequence.with(1,2,3,4)))
vaMirror.request(sequence.with(sequence.with("hi")))
vaMirror.request(sequence.with(sequence.empty))
vaAndAndMirror.request(sequence.with(sequence.with(1,2,3,4),sequence.with("ho"),sequence.with(1,2,3,4,5,6)))

print "\nrequests using `requestWithArgs`"

exampleMirror.requestWithArgs( ["a"] )
exampleAndMirror.requestWithArgs( ["a1", "a2", "b1"] )
noParamsMirror.requestWithArgs( [] )
vaMirror.requestWithArgs( [1,2,3,4] )
vaMirror.requestWithArgs( ["hi"] )
vaMirror.requestWithArgs( [] )
// vaAndAndMirror.requestWithArgs([ 1,2,3,4, "ho", 1,2,3,4,5,6 ])
// will raise ProgrammingError

print "\ndone"
