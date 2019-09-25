dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "errormessages" as errormessages


def classInheritsTwice = ‹
class a {
    method m(n) {print "in a"}
}

class b {
    method m1(p) {print "in b"}
}

class c {
    inherit a
       alias am(n) = m(n)
    inherit b
       alias bm(n) = m1(n)
    print "in c"

    method n {
        am(2)
        bm(3)
    }
}

c.n
›

def moduleInheritsTwice = ‹
inherit list[1]
inherit set[2]
print "initialized"
›
testSuiteNamed "double inheritance" with {
    test "two inherits in a class" by {
        assert {parser.parse(lexer.lexString(classInheritsTwice))}
              shouldRaise(errormessages.SyntaxError)
              mentioning "at most one 'inherit' statement is permitted"
    }
    test "two inherits in a module" by {
        assert {parser.parse(lexer.lexString(moduleInheritsTwice))}
              shouldRaise(errormessages.SyntaxError)
              mentioning "at most one 'inherit' statement is permitted"
    }
}

