dialect "minitest"
import "mirror" as mirror
import "unixFilePath" as filePath


var simpleVar := "initial value"
            // if these declarations are in an inner object, readVar
            // will not be compiled as a simple accessor

once method readVar {
    simpleVar   // in an inner obejct, simpleVar will be a reader method,
                // so that it can be overridden
}
method setSimpleVar(nu) {
    simpleVar := nu
}

class produceT {
    def nums = 1..10
    var executed is public := false
    var threeVar := 3

    once method sum {
        executed := true
        nums.fold{a, b -> a + b} startingWith 0
    }
    once method tabulate(a, b, c) {
        executed := true
        return a * b * c
    }
    once method concatenate(a, b, c) {
        executed := true
        return "" ++ a ++ b ++ c
    }
    method three -> String {
        threeVar
    }
    method numberId (n:Number) { n }
}

testSuiteNamed "once methods and accessor methods" with {
    def t1 = produceT
    test "sum of 1..10 is 55" by {
        assert (t1.sum) shouldBe 55
        assert (t1.executed)
    }

    test "sum executes once" by {
        def t2 = produceT
        assert (t2.sum) shouldBe 55
        assert (t2.executed) description "t2.sum didn't execute the first time"
        t2.executed := false
        assert (t2.sum) shouldBe 55
        deny (t2.executed) description "t2.sum executed again"
    }

    test "exceptions are not memoized" by {
        def o = object {
            def nums = 1..10
            var exceptional is public := true
            var executed is public := false
            once method sum {
                executed := true
                if (exceptional) then { Exception.raise "sum raised an exception" }
                nums.fold{a, b -> a + b} startingWith 0
            }
        }
        assert {o.sum} shouldRaise (Exception) mentioning "sum raised an exception"
        assert (o.executed) description "o.sum didn't execute when it raised an exception"
        o.executed := false
        o.exceptional := false
        assert (o.sum) shouldBe 55
        assert (o.executed) description "o.sum didn't execute when it returned 55"
        o.executed := false
        assert (o.sum) shouldBe 55
        deny (o.executed) description "o.sum executed again"
    }

    test "3 parameter method" by {
        assert (t1.tabulate(1, 2, 3)) shouldBe 6
        assert (t1.tabulate(3, 3, 2)) shouldBe 18
        assert (t1.executed) description "t1.tabulate didn't execute"
        t1.executed := false
        assert (t1.tabulate(1, 2, 3)) shouldBe 6
        deny (t1.executed) description "t1 executed for tabulate(1, 2, 3)"
        assert (t1.tabulate(3, 3, 2)) shouldBe 18
        deny (t1.executed) description "t1 executed for tabulate(3, 3, 2)"
    }

    test "3 parameter non-commutative method" by {
        assert (t1.concatenate(1, 2, 3)) shouldBe "123"
        assert (t1.executed) description "t1.concatenate(3, 2, 1) didn't execute"
        t1.executed := false
        assert (t1.concatenate(3, 2, 1)) shouldBe "321"
        assert (t1.executed) description "t1.concatenate(3, 2, 1) didn't execute"
        t1.executed := false
        assert (t1.concatenate(3, 2, 1)) shouldBe "321"
        deny (t1.executed) description "t1.concatenate(3, 2, 1) wasn't cached"
    }

    test "accessors check types when provided" by {
        assert {t1.three} shouldRaise (TypeError)
    }

    test "once methods memoize accessors" by {
        assert (readVar) shouldBe "initial value"
        setSimpleVar ("new value")
        assert (readVar) shouldBe "initial value"    //  readVar memoized the old answer
    }

    test "argument type check is performed" by {
        assert {t1.numberId "wrong"} shouldRaise (TypeError)
              mentioning "argument to request of `numberId(_)`"
    }
}

trait ab {
    method a { "a" }
    method b { "b" }
}

trait ac {
    method a is required
    method c { "c" }
}

class speedClass {
    var speed is public := 0
}

class velocity {
    inherit speedClass
    var direction is public
}

trait choiceOfUnits {
    method direction is required
    method direction:=(nu) is required
    method directionInDegrees { direction * 180 / π }
    method directionInDegrees:= (d) { direction := d / 180 * π }
    method directionInRadians { direction }
    method directionInRadians:=(nu) { direction := nu }
}

class convenientVelocity {
    inherit velocity        // supplies both direction and direction:=(_)
    use choiceOfUnits
}


class brokenVelocity {
    inherit speedClass      // does not supply direction or direction:=(_)
    use choiceOfUnits
}

class abac {
    use ab
    use ac
}

class acab {
    use ac
    use ab
}

testSuiteNamed "required methods" with {
    test "required method does not override inherited method" by {
        def v0 = convenientVelocity
        v0.speed := 10
        v0.directionInDegrees := 90
        assert (v0.directionInDegrees) shouldBe 90
        assert (v0.directionInRadians) shouldEqual 1.570796 within (10^(-6))
    }
    test "required method not supplied rasies exception" by {
        def v1 = brokenVelocity
        v1.speed := 10
        assert { v1.directionInDegrees := 90 }
            shouldRaise (ProgrammingError) mentioning "required method direction:=(_)"
        assert { v1.direction }
            shouldRaise (ProgrammingError) mentioning "not supplied"
    }
    test "ab + ac has a" by {
        def o = abac
        assert (o.a) shouldBe "a"
        assert (o.b) shouldBe "b"
        assert (o.c) shouldBe "c"
    }
    test "ac + ab has a" by {
        def o = acab
        assert (o.a) shouldBe "a"
        assert (o.b) shouldBe "b"
        assert (o.c) shouldBe "c"
    }
}

type A⟦T⟧ = {
   m(x:T) → Done
   theTypeArg → Type
}

class a⟦T⟧(arg) → A⟦T⟧ {
   method m(x:T) → Done { print (x) }
   method theTypeArg { T }
}

def ana: A⟦A⟦Number⟧⟧ = a⟦A⟦Number⟧⟧ "double"

testSuiteNamed "nested parameterized types" with {

    test "type arguments are passed" by {
        assert ((a⟦String⟧ "foo").theTypeArg) shouldBe (String)
    }

    test "generic type annotation on a method" by {
        assert {ana.m "greeting"}
            shouldRaise (TypeError)
            mentioning "argument to request of `m(_)`"
            and "does not have type T"
                // the argument to m is declared as a T = A⟦Number⟧
    }
}

method hook { abstract }

testSuiteNamed "reuse from dialect" with {

    test "request abstract method" by {
        assert {hook} shouldRaise (SubobjectResponsibility)
    }
    
    def v1 = singleton
    def v2 = singleton
    
    test "singleton equals itself" by {
        assert (v1 == v1) description "singleton ≠ itself!"
    }

    test "singleton matches itself" by {
        assert (v1.matches(v1)) description "singleton doesn't match itself!"
    }
    
    test "singleton not equal other" by {
        deny (v1 == v2) description "singleton == other!"
    }

    test "singleton doesn't match itself" by {
        deny (v1.matches(v2)) description "singleton matches other!"
    }

    def n1 = singleton "n1"
    def n2 = singleton "n2"
    
    test "named singleton equals itself" by {
        assert (n1 == n1) description "singleton ≠ itself!"
    }

    test "named singleton matches itself" by {
        assert (n1.matches(n1)) description "named singleton doesn't match itself!"
    }
    
    test "named singleton not equal other" by {
        deny (n1 == n2) description "named singleton == other!"
    }

    test "named singleton doesn't match itself" by {
        deny (n1.matches(n2)) description "named singleton matches other!"
    }
    
    test "named singleton asString" by {
        assert (n1.asString) shouldBe "n1"
    }

    test "named singleton asDebugString" by {
        assert (n1.asDebugString) shouldBe "n1"
    }
    
    test "Do-While once" by {
        var v := 4
        def accum = list.empty
        do { accum.addLast(v) ; v := v - 1 } while { false }
        assert (accum) shouldBe (list [4])
    }   

    test "Do-While many" by {
        var v := 4
        def accum = list.empty
        do { accum.addLast(v) ; v := v - 1 } while { accum.size < 4}
        assert (accum) shouldBe (list [4, 3, 2, 1])
    }

}

def empty = object {
    inherit singleton
    method asString -> String {"empty"}
}

def full = singleton "full"

type OptionNumber =  Number | empty | full

def items = list [6, 7, empty, 9, full]

def block1 = { x:OptionNumber ->
    match(x)
      case {n:Number -> "Number {n}"}
      case {y:empty -> "Singleton {y}"}
      case {z:full -> "Singleton {z}"}
      else {"should not happen"}
}

def block3 = {a:String, n, b:Boolean ->
    "this is the block body; arguments were {a}, {n} and {b}."
}

testSuiteNamed "singleton" with {
    test "number" by {
        assert(block1.apply 6) shouldBe "Number 6"
    }
    
    test "empty" by {
        assert(block1.apply(empty)) shouldBe "Singleton empty"
    }
    
    test "full" by {
        assert(block1.apply(full)) shouldBe "Singleton full"
    }
    
    test "type error" by {
        assert {block1.apply "hello"} shouldRaise (TypeError)
    }
    
    test "3 arguments good" by {
        assert(block3.apply("hi", 56, true)) shouldBe 
            "this is the block body; arguments were hi, 56 and true."
    }

    test "3 arguments, 3rd bad" by {
        assert {block3.apply("hi", 56, 42)} shouldRaise (TypeError)
    }

    test "3 arguments, 1st bad" by {
        assert {block3.apply(true, 56, true)} shouldRaise (TypeError)
    }
}

method hypotenuse(a, b) {
    def asq = a * a
    def hypsq = asq + bsq
    def bsq = b * b
    return hypsq.sqrt
}

testSuiteNamed "uninitialized" with {
    test "use variable bsq it is defined" by {
        assert {hypotenuse(3, 4)} shouldRaise (UninitializedVariable)
    }
}

class subFilePath {
    inherit filePath.filePath
    
    method direct {
        directory
    }
}

class dummyPrelude {
    inherit _prelude.methods
    
    method compareProtocols {
        def mSelf = mirror.reflect(self).methodNames --
                    self.set ["hook", "compareProtocols", "doIt(_)"]
        def mPrelude = mirror.reflect(_prelude).methodNames
        if (mPrelude == mSelf) then {
            true
        } else {
            def preludeExtras = mPrelude -- mSelf
            def selfExtras = mSelf -- mPrelude
            if (preludeExtras.isEmpty.not) then {
                print "prelude contains additional methods {self.list.withAll(preludeExtras).sort}\n"
            }
            if (selfExtras.isEmpty.not) then {
                print "dummyPrelude contains additional methods {self.list.withAll(selfExtras).sort}\n"
            }
            false
        }
    }
    
    method hook {
        self.abstract
    }
    
    method doIt(a) { hook }
}

testSuiteNamed "interit from external module" with {
    test "abstact" by {
        assert {dummyPrelude.hook} shouldRaise (SubobjectResponsibility)
    }
    
    test "prelude inheritance contains set(_)" by {
        def mDummyPrelude = mirror.reflect(dummyPrelude).methodNames
        assert (mDummyPrelude.contains "set(_)")
            description "method 'set(_)' missing from dummyPrelude"
    }
    test "prelude inheritance contains compareProtocols" by {
        def mDummyPrelude = mirror.reflect(dummyPrelude).methodNames
        assert (mDummyPrelude.contains "compareProtocols")
            description "method 'compareProtocols' missing from dummyPrelude"
    }
    test "prelude inheritance contains Sequence" by {
        def mDummyPrelude = mirror.reflect(dummyPrelude).methodNames
        assert (mDummyPrelude.contains "Sequence")
            description "type 'Sequence' missing from dummyPrelude"
    }

    test "firpath direct" by {
        def f = subFilePath.setDirectory "root/a" .setBase "file" .setExtension "grace"
        assert (f.asString) shouldBe "root/a/file.grace"
        assert (f.direct) shouldBe "root/a/"
    }
}

exit
