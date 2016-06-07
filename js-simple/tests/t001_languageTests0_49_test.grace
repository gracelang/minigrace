import "gUnit" as gU

var str := ""
method out(s) {
    str := str ++ s ++ "\n"
}

// space for methods

method t13_foo {
    out("OK 1")
}
method t13_bar(x) {
    out("OK " ++ x)
}
method t029_foo(a)bar(b) {
    out(a + b)
}
method t029_sumOf(a,b)isSumOf(c,d) {
    (a + b) == (c + d)
}
method t037_identity(a) {
    a
}
method t039_concatStrings(a)and(b) {
    a ++ b
}
method t040_assertValue(v) andThen (trueBlock) otherwise (falseBlock) {
    if (v) then {
        trueBlock.apply
    } else {
        falseBlock.apply
    }
}
method t042_test(n) {
    out(n);
}
method t044_runFirst(a)second(b)third(c) {
    a.apply
    b.apply
    c.apply
}
method t048_blockrun(bk) {
    bk.apply
    return 100
}
method t048_foo {
    var a := { return 6 }
    out "here"
    a.apply
    out "not here"
}
method t048_baz {
    var a := { return 13 }
    t048_blockrun(a)
    return 9
}
var t048_vals := [1, 5, 6, 3, 12, 9, 7, 15, 13]
method t048_bar(n) {
    for (t048_vals) do { v->
        if (v > n) then {
            return v
        }
    }
    return 0
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

        method test_001_print {
            out("Hello, world.")
            
            assert(str)shouldBe("Hello, world.\n")
        }

        method test_002_concat {
            out("Hello " ++ "world.")
            out("Line " ++ 2)
            out(3 ++ "rd line")
            
            assert(str)shouldBe("Hello world.\nLine 2\n3rd line\n")
        }

        method test_003_arithmetic {
            out(2 - 1)
            out(1 + 1)
            out(6 / 2)
            out(2 * 2)
            out(15 % 10)
            out(3 ^ 4)
            out(4 ^ 0.5)
            
            assert(str)shouldBe("1\n2\n3\n4\n5\n81\n2\n")
        }

        method test_004_var {
            var x := "Hello"
            out(x)
            x := x ++ " world."
            out(x)
            var y := 3
            out(y)
            y := y + 1
            out(y)
            
            assert(str)shouldBe("Hello\nHello world.\n3\n4\n")
        }

        method test_005_boolean {
            out(true)
            out(false)
            out(true || false)
            out(true && false)
            
            assert(str)shouldBe("true\nfalse\ntrue\nfalse\n")
            str := ""

            assert(false && {out "*"; true}) shouldBe (false)
            assert(true || {out "*"; false}) shouldBe (true)
            assert(str) shouldBe ""

            assert(true && {out "*"; true}) shouldBe (true)
            assert(false || {out "*"; false}) shouldBe (false)
            assert(str) shouldBe "*\n*\n"
        }

        method test_006_dotcall {
            out(true.not)
            var x := false
            out(x.not)
            out(x.not.not)
            x := x.not
            out(x && false.not)
            
            assert(str)shouldBe("false\ntrue\nfalse\ntrue\n")
        }

        method test_007_precedence {
            var x := 4
            out(x / 2 - 1)
            out(x - 2 / 1)
            out(2 * 1 + 4 / x)
            out((x * (6 - 2) - x) /3)
            out(x - 0 + 1)
            out(x * 3 / 2)
            
            assert(str)shouldBe("1\n2\n3\n4\n5\n6\n")
        }

        method test_008_if {
            if (true) then {
                out("OK 1 then")
            } else {
                out("Fail 1 then")
            }
            if (false) then {
                out("Fail 2 else")
            } else {
                out("OK 2 else")
            }
            
            assert(str)shouldBe("OK 1 then\nOK 2 else\n")
        }

        method test_009_elseif {
            if (false) then {
                out("Fail 1 then")
            } elseif {true} then {
                out("OK 1 elseif")
            }
            if (true.not) then {
                out("Fail 2 then")
            } elseif {true && false} then {
                out("Fail 2 elseif1")
            } elseif {false || true} then {
                out("OK 2 elseif2")
            }
            if (false && false) then {
                out("Fail 3 then")
            } elseif {false || false} then {
                out("Fail 3 elseif")
            } else {
                out("OK 3 else")
            }
            
            assert(str)shouldBe("OK 1 elseif\nOK 2 elseif2\nOK 3 else\n")
        }

        method test_010_while {
            var x := 1
            while {x < 5} do {
                out(x)
                x := x + 1
            }
            out("Last: " ++ x)
            
            assert(str)shouldBe("1\n2\n3\n4\nLast: 5\n")
        }

        method test_011_range {
            var x := 0..5
            out("OK")
            
            assert(str)shouldBe("OK\n")
        }

        method test_012_for {
            for (1..5) do { v ->
                out(v)
            }
            
            assert(str)shouldBe("1\n2\n3\n4\n5\n")
        }

        method test_013_method {
            t13_foo
            t13_bar(2)
            t13_bar(3)
            
            assert(str)shouldBe("OK 1\nOK 2\nOK 3\n")
        }

        method test_014_objectvar {
            var x := object {
                var v is public := 1
            }
            assert (x.v) shouldBe 1
        }
        

        method test_015_objectdef {
            var x := object {
                def c is public = "Hello"
            }
            assert (x.c) shouldBe "Hello"
        }

        method test_016_objectmeth {
            var x := object {
                method foo {
                    out("Hello")
                }
            }
            x.foo
            x := object {
                method bar {
                    "World"
                }
            }
            out(x.bar)
            
            assert(str)shouldBe("Hello\nWorld\n")
        }

        method test_017_publicVarAssign {
            var x := object {
                var val is public := 1
            }
            assert (x.val) shouldBe 1
            x.val := 2
            assert (x.val) shouldBe 2
        }

        method test_018_objectself {
            var x := object {
                var val := 1
                method foo {
                    out(self.val)
                    self.val := self.val + 1
                }
            }
            x.foo
            x.foo
            x.foo
            
            assert(str)shouldBe("1\n2\n3\n")
        }

        method test_019_equality {
            assert(1 == 1) description "1 ≠ 1"
            deny(1 == 2) description "1 = 2"
            assert(2 == (1 + 1)) description "2 ≠ (1 + 1)"
            deny(true == false) description "true = false"
            assert(true == true) description "true ≠ true"
            deny(false == true) description "false = true"
            assert(false == false) description "false ≠ false"
            deny("Hello" == "world") description "Hello = world"
            assert("Hello" == "Hello") description "Hello ≠ Hello"
            var x := object {
                var v := 1
                method ==(other) { self.isMe(other) }
            }
            var y := object {
                var v := 1
            }
            deny(x == y) description "object x = object y"
            assert(x == x) description "object x ≠ object x"
            deny("17" == 17) description "\"17\" = 17"
            deny(17 == "17") description "17 = \"17\""
            def NaN = 0/0
            deny(NaN == NaN) description "NaN == NaN"
        }
        
        method test_020_inequality {
            deny(1 != 1) description "1 ≠ 1"
            assert(1 != 2) description "1 = 2"
            deny(2 != (1 + 1)) description "2 ≠ (1 + 1)"
            assert(true != false) description "true = false"
            deny(true != true) description "true ≠ true"
            assert(false != true) description "false = true"
            deny(false != false) description "false ≠ false"
            assert("Hello" != "world") description "Hello = world"
            deny("Hello" != "Hello") description "Hello ≠ Hello"
            var x := object {
                var v := 1
                method ==(other) { self.isMe(other) }
            }
            var y := object {
                var v := 1
            }
            assert(x != y) description "object x = object y"
            deny(x != x) description "object x ≠ object x"
            assert("17" != 17) description "\"17\" = 17"
            assert(17 != "17") description "17 = \"17\""
            def NaN = 0/0
            assert(NaN != NaN) description "NaN == NaN"
        }

        
        method h021_identity (x) { x }
        method h021_sum (x) and (y) { x + y }

        method test_021_request_num {
            assert(h021_identity 67) shouldBe (67)
            assert(h021_sum 6 and 4) shouldBe (10)
        }
        
        method h022_concat(l) { l.fold{acc, each -> acc ++ each} startingWith "" }

        method test_022_request_list {
            assert(h022_concat ["hello", " ", "world"]) shouldBe "hello world"
        }
        
        method h023_sum (x) and (y) {
            var sum := 0
            x.do { each -> sum := sum + each }
            y.do { each -> sum := sum + each }
            sum
        }
        
        method test_023_request_two_lists {
            assert (h023_sum [1, 2] and [3, 4]) shouldBe 10
        }

        method test_028_stringescape {
            var x := "test\"quotes\"hello\"\"world"
            out(x)
            out("And a new\nline")
            out("Some \\backslashes \\now")
            out("\tTabs\there")
            
            assert(str)shouldBe("test\"quotes\"hello\"\"world\nAnd a new\nline\nSome \\backslashes \\now\n\tTabs\there\n")
        }

        method test_029_multipartmethodnames {
            t029_foo(3)bar(5)
            
            def x = object {
                var value := 4
                method valueBetween (lower) and (upper) {
                    (self.value >= lower) && (self.value <= upper)
                }
            }
            
            out(x.valueBetween(3)and(5))
            out(x.valueBetween (1) and (3))
            out(t029_sumOf(3,4)isSumOf(2,5))
            
            assert(str)shouldBe("8\ntrue\nfalse\ntrue\n")
        }
        
        method test_030_operatoroverload {
            var factoryObj
            
            factoryObj := object {
                method create(n) {
                    object {
                        var value is public := n
                        method +(other) {
                            factoryObj.create(self.value + other.value)
                        }
                        method asString {
                            self.value.asString
                        }
                    }
                }
            }
            
            var a := factoryObj.create(3)
            var b := factoryObj.create(4)
            out(a)
            out(b)
            out(a + b)
            
            assert(str)shouldBe("3\n4\n7\n")
        }

        method test_031_assignmentmethod {
            var a := object {
                method field:=(val) {
                    out("assigned " ++ val ++ " to field")
                }
            }
            
            a.field := 3
            
            assert(str)shouldBe("assigned 3 to field\n")
        }

        method test_032_interpolation {
            for (0..5) do { i->
                out("Value of i: {i}")
            }
            
            assert(str)shouldBe("Value of i: 0\nValue of i: 1\nValue of i: 2\nValue of i: 3\nValue of i: 4\nValue of i: 5\n")
        }
        
        class cat(namex : String) {
            def name : String = namex
            method purr {out("Purr") }
            method mew {out("Meow") }
        }

        method test_033_class {
            var c := cat "Macavity"
            
            c.purr
            c.mew
            
            assert(str)shouldBe("Purr\nMeow\n")
        }

        method test_035_noparenmethoddec {
            def a = object {
                method succeeded { return true }
            }
            if (a.succeeded) then {
                out("OK")
            } else {
                out("Not OK")
            }
            
            assert(str)shouldBe("OK\n")
        }
        
        method test_036_operatorChars {
            def a = object {
                method -&|:$#\%^@?*/+!~ (other) { "OK" }
                method \ (other) { "backslash" }
                method # (other) { "#" }
                method % (other) { "%" }
                method ~?! (other) { "~?!" }
                method /\ (other) { "and" }
                method \/ (other) { "or" }
            }
            assert (a -&|:$#\%^@?*/+!~ 3) shouldBe "OK"
            assert (a \ 4) shouldBe "backslash"
            assert (a # 4) shouldBe "#"
            assert (a % 5) shouldBe "%"
            assert (a ~?! 6) shouldBe "~?!"
            assert (a /\ 4) shouldBe "and"
            assert (a \/ 5) shouldBe "or"
        }

        method test_037_prefixop {
            def a = object {
                method prefix! {
                    false
                }
                method prefix!! {
                    "OK"
                }
            }

            assert (!a) shouldBe (false)
            assert (!(t037_identity(a))) shouldBe (false)
            assert (!(!a)) shouldBe (true)
            assert (!!a) shouldBe "OK"
        }

        method test_038_stringarg {
            out "Hello, world!"
            
            assert(str)shouldBe("Hello, world!\n")
        }

        method test_039_stringmixfixarg {
            out(t039_concatStrings "Hello, " and "world!")
            assert(str)shouldBe("Hello, world!\n")
        }
        
        method test_040_mixfixindent {
            t040_assertValue(true)
                andThen { out "It's true!" }
                otherwise { out "It's false!" }
            t040_assertValue(false)
                andThen { out "This one's true!" }
                otherwise { out "This one's false!" }
            
            assert(str)shouldBe("It's true!\nThis one's false!\n")
        }

        method test_041_boolnumarg {
            out true
            out 1.4
            out "done"
            
            assert(str)shouldBe("true\n1.4\ndone\n")
        }

        method test_042_semicolons {
            var i := 3 ; i := i * 3 ;
            out(i);
            t042_test("Hello")
            
            assert(str)shouldBe("9\nHello\n")
        }

        method test_043_multiparamblock {
            { a, b -> out ("GOT1 " ++ a)}.apply(345,321)
            { a, b, c -> out ("GOT2 " ++ a ++ b ++ c)}.apply(123,456,789)
            out("done")
            
            assert(str)shouldBe("GOT1 345\nGOT2 123456789\ndone\n")
        }

        method test_044_mixfixblocks {

            t044_runFirst {
                out "First"
            } second {
                out "Second"
            } third {
                out "Third"
            }
            
            assert(str)shouldBe("First\nSecond\nThird\n")
        }

        method test_045_operatorcontinuation {
            var a := object {
                method &(other) {
                    out("Called & with {other}")
                    return "wrong!"
                }
                method prefix& {
                    out "Called prefix&"
                }
                method asString {
                    "right object"
                }
            }
            
            a & 1
            var b := a
            & a
            out("got {b}")
            var c := a
                & a
            out("not {c}")
            
            assert(str)shouldBe("Called & with 1\nCalled prefix&\ngot right object\nCalled & with right object\nnot wrong!\n")
        }

        method test_046_printinterp {
            var x := "world"
            out "Hello {x}!"
            
            assert(str)shouldBe("Hello world!\n")
        }

        method test_047_inherits {
            def obj47 = object {
                class a(v') {
                    var v := v'
                    method foo {
                        out "a's foo: {self.v}"
                    }
                    method baz {
                        out "a's baz"
                    }
                }
                class b(x) {
                    inherits a(x)
                    method bar {
                        out "b's bar"
                    }
                    method baz {
                        out "b's baz"
                    }
                }
            }
            
            var b := obj47.b "ARGUMENT"
            b.foo
            b.bar
            b.baz
            
            assert(str)shouldBe("a's foo: ARGUMENT\nb's bar\nb's baz\n")
        }

        method test_048_blockreturn {
            
            var b := t048_foo
            out(b)
            out(t048_baz)
            
            out(t048_bar(10))
            out(t048_bar(20))
            out(t048_bar(5))
            
            assert(str)shouldBe("here\n6\n13\n12\n0\n6\n")
        }

        method test_049_underscore {
            var a := { _, _ -> "OK" }
            out(a.apply(5, 6))
            assert(str)shouldBe("OK\n")
        }
    }
}

def graceLangTest = gU.testSuite.fromTestMethodsIn(aGraceLangTest) named "t001"
graceLangTest.runAndPrintResults


