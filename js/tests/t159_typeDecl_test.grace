dialect "standard"
import "mirror" as m

type A = {a(n:Number) -> Number}
type B = interface {b(s:String) -> String}
type A' = A
type B' = B
type C = {c -> Done }
type AB = A & B
type ABC = A & B & C
type ABC' = A | B | C

method showType(T) {
    print "{T} has methods {T.methodNames >> sequence}"
}

showType(A)
showType(B)
showType(A')
showType(B')
showType(AB)

def seq = sequence [2, 3, 4]
match (seq)
    case { l:List -> print "{l} is a list — but shouldn't be!" }
    case { s:Sequence -> print "{s} is a sequence" }
    else { print "we should never get here" }

def sm = m.reflect(seq).methodNames >> set
print "The following list methods are not in sequence:"
def missing = (List.methodNames >> set) -- sm
(missing >> list).sort.do {
    each -> print "    {each}"
}
