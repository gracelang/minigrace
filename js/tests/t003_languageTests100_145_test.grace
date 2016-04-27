import "gUnit" as gU

var str := ""
method out(s) {
    str := str ++ s ++ "\n"
}

// space for methods

method t108_a {
  out("out")
}
method t116_tryMatch(pattern, obj) {
    if (pattern.match(obj)) then {
        out "OK"
    } else {
        out "Not OK; {obj} should have matched"
    }
}
method t116_tryNoMatch(pattern, obj) {
    if (pattern.match(obj)) then {
        out "Not OK; {obj} should not have matched"
    } else {
        out "OK"
    }
}
method t117_tryMatch(pattern, value) {
    if (pattern.match(value)) then {
        out "OK"
    } else {
        out "Not OK; {pattern} should have matched {value}"
    }
}
method t117_tryNoMatch(pattern, value) {
    if (pattern.match(value)) then {
        out "Not OK; {pattern} should not have matched {value}"
    } else {
        out "OK"
    }
}
type Pair = {
    left -> Number
    right -> Number
}
method t118_tryMatch(o) {
    match(o)
        case { 1 -> "ONE" }
        case { _ : Number -> "NUMBER" }
        case { "hello" -> "HELLO" }
        case { x : String -> "STRING '{x}'" }
}
var t120_theBlock
method t120_bar(n) {
    if (n == 4) then {
        t120_theBlock := { return "YE" }
    }
    if (n == 0) then {
        return "NO"
    }
    if (n == 1) then {
        t120_theBlock.apply
    }
    "{t120_bar(n - 1)}{n}"
}
def t123_a = 1
method t123_tryMatch(x) {
    match(x)
        case { y : String -> out "STRING" }
        case { (t123_a) -> out "ONE" }
        case { y : Number -> out "FALLTHROUGH {y}" }
}
method t124_tryMatch(x) {
    match(x)
        case { y : String -> out "STRING" }
        case { 2 -> out "TWO" }
        case { y -> out "FALLTHROUGH {y}" }
}
method t129_foo(x : type { bar -> String }) {
    out(x.bar)
}

var t136_count := 0
method t136_foo(x) {
    try (x)
        catch { e : Exception -> out "Failed; no exception was raised." }
        finally { out "OK." ; t136_count := t136_count + 1}
}
method t136_bar(x) {
    try { t136_foo(x) }
        finally { out "OK." ; t136_count := t136_count + 2 }
}
method t136_baz {
    try {
        t136_bar { return 1 }
    } finally {
        out "OK."
        t136_count := t136_count + 4
    }
}
method t137_parent {
    object {
        def x is readable = foo
        method foo { 1 }
        method bar { 0 }
    }
}
method t137_child {
    object {
        inherits t137_parent
        method bar { 3 }
    }
}
def t137_a = object {
    inherits t137_parent
    method foo { 2 }
}
def t137_c = object {
    inherits t137_child
}
def t139_a = object {
    method new {
        object {
            print(outer)
        }
    }
    method asString { "a" }
}
def t142_x = object {
    method y -> String { "ok" }
}

//  *****************************
//  **   start of test suite   **
//  *****************************


def aGraceLangTest = object {
    class forMethod(m) {
        inherits gU.testCaseNamed(m)

        method setup {
            str := ""
        }

        method test_100_squarebracket {
            def aString = "test"
            
            out(aString.at(1))
            out(aString.at(2))
            out(aString.at(3).size)
            
            assert(str)shouldBe("t\ne\n1\n")
        }

        method test_101_super {
            object {
                class aa(v') {
                    var v := v'
                    method foo {
                        out "A's foo: {self.v}"
                    }
                    method baz {
                        out "A's baz"
                    }
                }
                class bb(x) {
                    inherits aa(x)
                    method bar {
                        out "B's bar"
                    }
                    method baz {
                        out "B's baz invokes..."
                        super.baz
                    }
                }
                class cc(y) {
                    inherits bb(y)
                    method baz {
                        out "C's baz invokes..."
                        super.baz
                    }
                }
                
                var b := cc "ARGUMENT"
                b.foo
                b.bar
                b.baz
            
                assert(str)shouldBe("A's foo: ARGUMENT\nB's bar\nC's baz invokes...\nB's baz invokes...\nA's baz\n")
            }
        }

        method test_102_outersuper {
            def a = object {
                method new {
                    object {
                        method test {
                            outerA'smethod
                        }
                    }
                }
                method outerA'smethod {
                    out "Hello"
                }
            }
            def b = object {
                method new {
                    object {
                        inherits a.new
                        method test2 {
                            outerB'smethod
                        }
                    }
                }
                method outerB'smethod {
                    out "world"
                }
            }
            
            def ab = b.new
            ab.test
            ab.test2
            
            assert(str)shouldBe("Hello\nworld\n")
        }
        
        class a_103 {
            method foo { "world" }
        }
        
        class b_103 {
            inherits a_103
            method bar { "hello {foo}" }
        }
        
        class c_103 {
            inherits b_103
            method quux { "X " ++ bar }
        }
        
        class d_103 {
            inherits c_103
            method foo is override { "Nyssa" }
        }

        type T_103 = {
            foo -> String
            quux -> String
        }

        method test_103_inherits2 {
            def x = b_103
            assert (x.bar) shouldBe "hello world"
            def y:T_103 = c_103
            assert(y.quux) shouldBe "X hello world"
            def z:T_103 = d_103
            assert(z.quux) shouldBe "X hello Nyssa"
        }

        method test_104_objstatement {
            def a = object {
                var x := 1
                x := x + 2
                out(x)
                method foo {
                    out(x)
                }
                def b = object {
                    outer.foo
                }
            }
            
            
            assert(str)shouldBe("3\n3\n")
        }
        

        method test_105_classstatement {
            object {
                class x(y) {
                    out(y)
                    object {
                        out(y)
                    }
                }
                
                x(5)
                
                
                assert(str)shouldBe("5\n5\n")
            }
        }

        method test_107_downcall {
            object {
            
                class aa {
                  method a {
                    b
                  }
                  method b {
                    out("A")
                  }
                }
                
                class bb {
                  inherits aa
                  method b {
                    out("B")
                  }
                }
                
                bb.a
                
                assert(str)shouldBe("B\n")
            }
        }

        method test_108_classouter {
            
            def A = object {
                class new {
                    method b { t108_a }
                }
            }
            
            A.new.b
            
            assert(str)shouldBe("out\n")
        }

        method test_111_numericbase {
            out(1234)
            out(0x4d2)
            out(16x4d2)
            out(2x10011010010)
            out(8x2322)
            out(25x1o9)
            out(36xya)
            
            assert(str)shouldBe("1234\n1234\n1234\n1234\n1234\n1234\n1234\n")
        }

        method test_112_nonnewconstructor {
            def aCat = object {
                class named(name) {
                    method describe {
                        out "A cat called {name}"
                    }
                }
            }
            
            def myCat = aCat.named "Timothy"
            def yourCat = aCat.named "Gregory"
            myCat.describe
            yourCat.describe
            
            assert(str)shouldBe("A cat called Timothy\nA cat called Gregory\n")
        }

        method test_113_mpmnconstructor {
            object {
                class named(aName) coloured (aColour) {
                    def colour = aColour
                    def name = aName
                    var miceEaten := 0
                    method describe {
                        out "{name} is a {colour} cat"
                    }
                }
                
                def myCat = named "Timothy" coloured ("black")
                def yourCat = named "Gregory" coloured ("tortoiseshell")
                
                myCat.describe
                yourCat.describe
                
                assert(str)shouldBe("Timothy is a black cat\nGregory is a tortoiseshell cat\n")
            }
        }

        method test_114_inheritsboolean {
            
            def x = object {
                inherits true
                method isAnX {
                    self
                }
            }
            
            def y = object {
                inherits false
                method isAnX {
                    false
                }
            }
            
            if (x) then {
                out "OK"
            } else {
                out "Not OK; x inherits true and should be true."
            }
            if (y) then {
                out "Not OK; y inherits false and should be false."
            } else {
                out "OK"
            }
            if (x.isAnX) then {
                out "OK"
            } else {
                out "Not OK; x.isAnX should return a true value."
            }
            if (x == true) then {
                out "OK"
            } else {
                out "Not OK; two booleanish object are equal if they share the same prototype and underlying value"
            }
            if (true == !y) then {
                out "OK"
            } else {
                out "Not OK; !y should be true."
            }
            if (false == !x) then {
                out "OK"
            } else {
                out "Not OK; !x should be false."
            }
            
            assert(str)shouldBe("OK\nOK\nOK\nOK\nOK\nOK\n")
        }

        method test_115_typematch {
            type Foo = {
                bar
                baz
            }
            def x = object {
                def bar = 1
                def baz = 2
            }
            def y = object {
                def baz = 2
            }
            if (Foo.match(x)) then {
                out "OK"
            } else {
                out "Not OK; x conforms to type Foo"
            }
            if (Foo.match(y)) then {
                out "Not OK; y does not conform to type Foo"
            } else {
                out "OK"
            }
            
            assert(str)shouldBe("OK\nOK\n")
        }
        

        method test_116_builtintypematch {
            
            t116_tryMatch(String, "hello")
            t116_tryMatch(String, "hello" ++ "world")
            t116_tryNoMatch(String, 1)
            t116_tryMatch(Number, 1)
            t116_tryNoMatch(Number, "hello")
            t116_tryMatch(Boolean, true)
            t116_tryNoMatch(Boolean, 1)
            
            assert(str)shouldBe("OK\nOK\nOK\nOK\nOK\nOK\nOK\n")
        }

        method test_117_literalmatch {
            
            t117_tryMatch(1,1)
            t117_tryNoMatch(1,2)
            t117_tryMatch("test", "test")
            t117_tryNoMatch("test", "wrong")
            t117_tryMatch(true, true)
            t117_tryNoMatch(true, false)
            t117_tryNoMatch(1, true)
            t117_tryNoMatch("test", true)
            t117_tryNoMatch(true, 2)
            
            assert(str)shouldBe("OK\nOK\nOK\nOK\nOK\nOK\nOK\nOK\nOK\n")
        }

        method test_118_matchcasesimple {
            
            out(t118_tryMatch 1)
            out(t118_tryMatch 2)
            out(t118_tryMatch "hello")
            out(t118_tryMatch "world")
            
            assert(str)shouldBe("ONE\nNUMBER\nHELLO\nSTRING 'world'\n")
        }

        method test_120_nonlocalrecurse {            
            out(t120_bar(5))    
            assert(str)shouldBe("YE5\n")
        }

        method test_123_matchingblockparen {      
            t123_tryMatch 2
            t123_tryMatch 1
            
            assert(str)shouldBe("FALLTHROUGH 2\nONE\n")
        }

        method test_124_matchingbare {        
            t124_tryMatch 2
            t124_tryMatch 1
            
            assert(str)shouldBe("TWO\nFALLTHROUGH 1\n")
        }

        method test_129_anontype {
            def y = object {
                def bar is readable = "OK"
            }
            t129_foo(y)
            assert (str) shouldBe "OK\n"
        }
        
        method test_129_anontypeFail {
            def y = object {
                def bar = "OK\n"
            }
            assert {t129_foo(y)} shouldRaise (NoSuchMethod)
            // because y.bar is confidential
        }
        
        method test_131_anonintersection {
            type A = {
                bar -> String
            }
            
            type B = A & type {
                quux -> Number
            }
            
            def t131_context = object {
                method btaker(b : B) {
                    out "{b.bar}{b.quux}"
                }   
            }
            def t131_barAndQuux = object {
                def bar is readable = "YE"
                def quux is readable = "5"
            }
            t131_context.btaker(t131_barAndQuux)
            assert (str) shouldBe "YE5\n"
        }
        
        method test_131_anonintersectionFail {
            type A = {
                bar -> String
            }
            
            type B = A & type {
                quux -> Number
            }
            def t131_context = object {
                method btaker(b : B) {
                    out "{b.bar}{b.quux}"
                }   
            }
            def t131_noMethods = object {
                def bar = "YE"
                def quux = "5"
            }
            assert {t131_context.btaker(t131_noMethods)} shouldRaise(NoSuchMethod)
            // because object does not have right methods
        }
        
        method test_132_matchpatternop {
            match ("success")
                case { "fail" -> out "FAIL" }
                case { "true" | "success" -> out "SUCCESS" }
                case { _ -> out "FAIL 2" }
            
            assert(str)shouldBe("SUCCESS\n")
        }

        method test_133_exceptions {
            
            try {
                var x := 1
                x.nonExistentMethod
            } catch {
                e: ProgrammingError -> assert (e.exception) shouldBe (NoSuchMethod)
            }
            
            try {
                ProgrammingError.raise "OK"
            } catch {
                e: ProgrammingError -> assert (e.exception) shouldBe (ProgrammingError)
            } catch {
                e: Exception -> failBecause "ProgrammingError {e} caught as Exception"
            }
        }

        method test_134_exceptionrefine {
            
            def MyException = Exception.refine "MyException"
            out "OK; Refined an exception."
            
            try {
                MyException.raise "OK"
            } catch {
                e : MyException -> out "{e.message}; Caught a refined exception."
            }
            
            def MySubException = MyException.refine "MySubException"
            def MySubException2 = MyException.refine "MySubException"
            out "OK; Refined sub-exceptions."
            
            try {
                MyException.raise "OK"
            } catch {
                e : MyException ->
                    out "{e.message}; Caught a refined exception with super-exception."
            } catch {
                e : MySubException ->
                    out "Failed; Did not catch a refined exception as super-exception."
            }
            
            assert(str)shouldBe("OK; Refined an exception.\nOK; Caught a refined exception.\nOK; Refined sub-exceptions.\nOK; Caught a refined exception with super-exception.\n")
        }

        method test_135_finally {
            
            var count := 0
            try {
                out "OK; inside main block."
                Exception.raise "OK"
                out "Failed; exception did not terminate block."
            } catch {
                e : Exception ->
                    out "OK."
                    count := count + 1
            } finally {
                out "OK."
                count := count + 2
            }
            
            match (count)
                case { 3 -> out "OK; both exception handler and finally ran." }
                case { 2 -> out "Failed; exception handler did not run." }
                case { 1 -> out "Failed; finally block did not run." }
                case { 0 -> out "Failed; neither exception handler nor finally ran." }
                case { _ -> out "Failed; something is very broken." }
            
            
            assert(str)shouldBe("OK; inside main block.\nOK.\nOK.\nOK; both exception handler and finally ran.\n")
        }

        method test_136_finallynonlocal {
            t136_baz
            match (t136_count)
                case { 7 -> out "OK; all finallies ran." }
                case { 6 -> out "Failed; inner finally did not run." }
                case { 5 -> out "Failed; middle finally did not run." }
                case { 4 -> out "Failed; only outer finally ran." }
                case { 3 -> out "Failed; outer finally did not run." }
                case { 2 -> out "Failed; only middle finally ran." }
                case { 1 -> out "Failed; only inner finally ran." }
                case { 0 -> out "Failed; no finally blocks ran." }
                case { _ -> out "Failed; something is very broken." }
            
            assert(str)shouldBe("OK.\nOK.\nOK.\nOK; all finallies ran.\n")
        }

        method test_137_inheritance {
            out(t137_c.bar)
            out(t137_a.x)
            out(t137_c.x)
            assert (str) shouldBe "3\n2\n1\n"
        }
        
        method test_138_fractionalnum {
            out(1.0026)
            assert(str) shouldBe "1.0026\n"
        }

        method test_139_inheritsouter {
            def a = object {
                method new {
                    object {
                        out(outer)
                    }
                }
                method asString { "a" }
            }
            
            def context = object {
                method asString { "m" }
                a.new
                object {
                    inherits a.new
                    out(outer)
                }
            }
            assert (str) shouldBe "a\na\nm\n"
        }
        
        method test_142_anontypevalue {
            if (type { y -> String }.match(t142_x)) then {
                out(t142_x.y)
            }

            match(t142_x)
                case { z : type { y -> String} -> out(z.y) }
            assert (str) shouldBe "ok\nok\n"
        }
        
        method test_143_repeat {
            repeat 1 times { out "once" }
            repeat 4 times { out "four times" }
            repeat 0 times { out "this should not appear" }
            repeat (-2) times { out "this should not appear either" }
            assert (str) shouldBe "once\nfour times\nfour times\nfour times\nfour times\n"
        }
        
        method test_145_builtInListDo {
            def l = [1, 2, 3, 4]
            out(l)
            l.do { each -> out(each) }
            assert (str) shouldBe "[1, 2, 3, 4]\n1\n2\n3\n4\n"
        }

    }
}

def graceLangTest = gU.testSuite.fromTestMethodsIn(aGraceLangTest) named "t003"
graceLangTest.runAndPrintResults


