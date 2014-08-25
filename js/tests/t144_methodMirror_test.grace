import "mirrors" as mirror
def foo = object {
    method example (a) {}
    method example (a1,a2) and (b1) {print "a1 = {a1}, a2 = {a2}, b1 = {b1}"}
    method noParams {}
    method variableArity(* a) { print "method variableArity requested with {a.size} arguments" } 
    method variable(a1, a2, *as) and (b) and (*c) { 
        print "method variable()and()and requested with [{2 + as.size}, {1}, {c.size}] arguments"
        print "a1 = {a1.asDebugString}, a2 = {a2.asDebugString}, as = {as.asDebugString}, b = {b.asDebugString}, c = {c.asDebugString}"
    }
}

foo.example(1,2)and(3)

method describe (methodMirror) {
    print "method {methodMirror.name} has {methodMirror.paramcounts} parameters and {methodMirror.isVariableArity} variable arity parameter lists"
}

describe(mirror.reflect(foo).getMethod("example"))
describe(mirror.reflect(foo).getMethod("example()and"))
describe(mirror.reflect(foo).getMethod("noParams"))
describe(mirror.reflect(foo).getMethod("variableArity"))
describe(mirror.reflect(foo).getMethod("variable()and()and"))

def vaMirror = mirror.reflect(foo).getMethod("variableArity")
describe(vaMirror)

foo.example(1,2)and "ho"

foo.variableArity(1,2,3,4)
foo.variableArity("hi")
foo.variableArity()
foo.variable (1,2,3,4) and "ho" and (1,2,3,4,5,6)

print "starting reflective request sequence"

vaMirror.request(sequence.with(sequence.with(1,2,3,4)))
vaMirror.request(sequence.with(sequence.with("hi")))
vaMirror.request(sequence.with(sequence.empty))

def mixedMirror = mirror.reflect(foo).getMethod("variable()and()and")
mixedMirror.request(sequence.with(sequence.with(1,2,3,4),sequence.with("ho"),sequence.with(1,2,3,4,5,6)))
print "done"
