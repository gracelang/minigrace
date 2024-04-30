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
testSuite "double inheritance" with {
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

once class feather(n) {
    use identityEquality
    method asString { "a boxed {n} ({self.hash})" }
    method value { n }
}

testSuite "once class" with {
    test "creation" by {
        def f1 = feather 1
        def f2 = feather 2
        assert (f1.value) shouldBe 1
        assert (f2.value) shouldBe 2
        assert (f1) shouldntBe (f2)
    }


    test "identity" by {
        def f1 = feather 34
        def f2 = feather 34
        assert (f1.value) shouldBe 34
        assert (f2.value) shouldBe 34
        assert (f1) shouldBe (f2)
    }
}

testSuite "point tests" with {
    def p = 11@13
    def q = 4@3

    test "string conversion" by {
        assert(p.asString) shouldBe "(11@13)"
    }

    test "type conformity" by {
        assert(p) hasType (Point)
    }

    test "components" by {
        assert(p.x) shouldBe 11
        assert(p.y) shouldBe 13
    }

    test "equality" by {
        assert(p) shouldBe(11@13)
        assert (p) shouldntBe (11@0)
        assert (p) shouldntBe (0@13)
    }

    test "addition" by {
        assert (p+q) shouldBe (15@16)
    }
    test "point + number" by {
        assert (p+4) shouldBe (15@17)
    }
    test "number + point" by {
        assert (4+p) shouldBe (15@17)
    }
    test "subtraction" by {
        assert (p-q) shouldBe (7@10)
    }
    test "point - number" by {
        assert (p-4) shouldBe (7@9)
    }
    test "number - point" by {
        assert (15-p) shouldBe (4@2)
    }
    test "prefix minus" by {
        assert (-p) shouldBe ((-11)@(-13))
    }
    test "multiply by number" by {
        assert (p*2) shouldBe (22@26)
    }
    test "number * point" by {
        assert (2*p) shouldBe (22@26)
    }
    test "divide" by {
        assert (p/2) shouldBe (5.5@6.5)
    }
    test "number / point" by {
        assert (12/q) shouldBe (3@4)
    }
    test "length" by {
        assert (p.length) shouldEqual 17.02938 within (10^(-5))
    }
    test "distance to" by {
        assert (p.distanceTo(q)) shouldBe ((p-q).length)
    }

    test "norm" by {
        assert (q.norm) shouldBe ((4/5)@(3/5))
    }

    test "dot product" by {
        assert (p ⋅ q) shouldBe (83)
        assert (p.dot(q)) shouldBe (83)
    }
}

def TooMuchRecursion = ProgrammingError.refine "TooMuchRecursion"

method currentHand → List⟦String⟧ {
    return currentHand
}

testSuite "stack overflow" with {
    test "stack overflow" by {
        assert {currentHand} shouldRaise (TooMuchRecursion)
    }
}

var a := object {
    use equality
    def x is public = "test"
    method ==(other) { x == other.x }
    method asString { "a" }
}
var c := object {
    use identityEquality
    var x is readable := "test"
    method asString { "c" }
}
var d := object {
    def x is public = "test"
    def y = "hello"
    method ==(other) { isMe(other) }
    method asString { "d" }
}

type EType = interface {x -> String; z -> String}

var e := object {
    use equality
    def x = "test"
    def z = "hello"
    method ==(other) {
        EType.matches(other) && { x == other.x } && { z == other.z }
    }
    method asString { "e" }
}
var f := object {
    def x is public = "hello"
    method asString { "f" }
}
var g := object {
    use identityEquality
    def x is public = "test"
    method z { "hello" }
    method asString { "g" }
}
method hmaker {
    def word = "hello"
    object {
        def x is public = "test"
        method z { word }
        method ==(other) { isMe(other) }
        method asString { "an h" }
    }
}
class testHello {
    use identityEquality
    def x = "test"
    method z { g ; "hello" }
}
var i := testHello
var j := object {
    inherit testHello
    method asString { "j" }
}

testSuite "equality and identity" with {
    test "identical" by { assert(a == a) }
    test "has x" by { assert(a == c) }
    test "c different a" by { assert(c != a) }
    test "string ==" by { assert(c.x == d.x) }
    test "different by inheritance" by { deny(j == i) }
    test "identical again" by { assert(a == c) }
    test "reverse different again" by { deny(c == a) }
    test "a == d" by { assert(a == d) }
    test "not d == a" by { deny(d == a) }
    test "d different e" by { deny(d == e) }
    test "not a == f" by { deny(a == f) }
    test "e == g" by { assert(e == g) }
    test "not g == e" by { deny(g == e) }
    test "a ≠ f" by { assert(a ≠ f) }
    test "not e ≠ g" by { deny(e ≠ g) }
    test "g ≠ e" by { assert(g ≠ e) }
    test "e == hmaker" by { assert(e == hmaker) }
    test "hmaker == hmaker" by { deny(hmaker == hmaker) }
    test "g.hash == g.hash" by { assert (g.hash) shouldBe (g.hash) }
    test "c.hash == c.hash" by { assert (c.hash) shouldBe (c.hash) }
    test "c.hash ≠ g.hash" by { assert (c.hash) shouldntBe (g.hash) }
}

method tryUnaryNumericPatterns(x) {
    match(x)
          case {>40 → "greater than 40"}
          case {≥30 & ¬ >40 → "greater than or equal to 30"}
          case {==17 -> "equal to 17"}
          case {≤18 & ¬ ==17 → "less than or equal to 18"}
          case {<20 & ¬ ≤18 -> "less than a score"}
}

testSuite "unary comparison patterns" with {
    test ">Number asString method" by {
        assert ((> 40).asString) shouldBe "a predicate pattern"
    }
    test "> pattern" by {
        assert (tryUnaryNumericPatterns 42) shouldBe "greater than 40"
    }
    test "≥ pattern exact" by {
        assert (tryUnaryNumericPatterns 30) shouldBe "greater than or equal to 30"
    }
    test "≥ pattern exceeds" by {
        assert (tryUnaryNumericPatterns 32) shouldBe "greater than or equal to 30"
    }
    test "< pattern" by {
        assert (tryUnaryNumericPatterns 19.5) shouldBe "less than a score"
    }
    test "≤ pattern exact" by {
        assert (tryUnaryNumericPatterns 18) shouldBe "less than or equal to 18"
    }
    test "≤ pattern exceeds" by {
        assert (tryUnaryNumericPatterns 17.5) shouldBe "less than or equal to 18"
    }
    test "= pattern exact" by {
        assert (tryUnaryNumericPatterns 17) shouldBe "equal to 17"
    }
}

testSuite "multi-parameter blocks" with {
    test "one parameter match" by {
        def blk = { (Number) -> "found a Number" }
        assert (blk.apply 2) shouldBe "found a Number"
    }
    test "one named parameter match" by {
        def blk = { n:Number -> "found the Number {n}" }
        assert (blk.apply 2) shouldBe "found the Number 2"
    }
    test "one parameter mis-match" by {
        def blk = { _:Number -> "found a Number" }
        assert {blk.apply "Hello"} shouldRaise (TypeError)
    }
    test "two parameters match" by {
        def blk = { (Number), s:String -> "found a Number and the string {s}" }
        assert (blk.apply(2, "Hi")) shouldBe "found a Number and the string Hi"
    }
    test "two named parameters match" by {
        def blk = { n:Number, ==5 -> "found the Numbers {n} and 5" }
        assert (blk.apply(2, 5)) shouldBe "found the Numbers 2 and 5"
    }
    test "two parameters Type mis-match" by {
        def blk = { (Number), (String) -> "found a Number and a String" }
        assert {blk.apply("Hello", 007)} shouldRaise (TypeError)
    }
    test "two named parameters Value mis-match" by {
        def blk = { n:Number, ==5 -> "found the Numbers {n} and 5" }
        assert {blk.apply(7, 19)} shouldRaise (RequestError)
            mentioning "argument 2 (19)" and "does not match"
    }
}

testSuite "once methods with type params" with {
    def t =  object {
        method x { ... }
        method typeDependent[[K]] {
            return K
        }
        var executed is public := false
        once method onceTypeDependent[[K]] {
            executed := true
            return K
        }
    }
    test "parameter transmission" by {
        assert (t.typeDependent[[Number]]) shouldBe (Number)
    }

    test "default type parameter" by {
        assert (t.typeDependent) shouldBe (Unknown)
    }
    test "repeat argument to once" by {
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        assert (t.executed) description "once method did not execute"
        t.executed := false
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        deny (t.executed) description "once method executed twice"
    }
    test "distinct arguments to once" by {
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        assert (t.executed) description "once method did not execute for Number"
        t.executed := false
        assert (t.onceTypeDependent[[String]]) shouldBe (String)
        assert (t.executed) description "once method did not execute for String"
        t.executed := false
        assert (t.onceTypeDependent[[String]]) shouldBe (String)
        deny (t.executed) description "once method executed twice for String"
        assert (t.onceTypeDependent[[Number]]) shouldBe (Number)
        deny (t.executed) description "once method executed twice for Number"
    }
    test "actual and default type arguments" by {
        assert (t.onceTypeDependent) shouldBe (Unknown)
        assert (t.executed) description "once method did not execute for Unknown"
        t.executed := false
        assert (t.onceTypeDependent[[String]]) shouldBe (String)
        assert (t.executed) description "once method did not execute for String"
    }
    test "repeated requests of default argument" by {
        assert (t.onceTypeDependent) shouldBe (Unknown)
        assert (t.executed) description "once method did not execute"
        t.executed := false
        assert (t.onceTypeDependent[[Unknown]]) shouldBe (Unknown)
        deny (t.executed) description "once method executed twice for Unknown"
        assert (t.onceTypeDependent) shouldBe (Unknown)
        deny (t.executed) description "once method a second time for Unknown"
    }
}

exit
