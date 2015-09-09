#pragma PrimitiveLists
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
method t037_areturner(a) {
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
method t051_foo(a,b,*c) {
    out(a)
    out(b)
    for (c) do {v->
        out "In c: {v}"
    }
}
method t051_bar(a)baz(b,*c) {
    out(a)
    out(b)
    for (c) do {v->
        out "In c: {v}"
    }
}
method t054_foo {
    6
}
method t061A062_truemeth {
    out "Ran truemeth"
    true
}
method t061A062_falsemeth {
    out "Ran falsemeth"
    false
}
method t079_test(a : String) -> String | Number {
    return a
}
method t096_objcreator(x, y) {
    object {
        method extract {
            [x, y]
        }
    }
}
method t099_test'(a') {
    return a'
}
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
    factory method forMethod(m) {
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
            } elseif (true) then {
                out("OK 1 elseif")
            }
            if (true.not) then {
                out("Fail 2 then")
            } elseif (true && false) then {
                out("Fail 2 elseif1")
            } elseif (false || true) then {
                out("OK 2 elseif2")
            }
            if (false && false) then {
                out("Fail 3 then")
            } elseif (false || false) then {
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
            }
            var y := object {
                var v := 1
            }
            deny(x == y) description "object x = object y"
            assert(x == x) description "object x ≠ object x"
            deny("17" == 17) description "\"17\" = 17"
            deny(17 == "17") description "17 = \"17\""
        }
        
        method test_020_inequality {
            out(1 != 1)
            out(1 != 2)
            out (2 != (1 + 1))
            out(true != false)
            out(true != true)
            out(false != true)
            out(false != false)
            out("Hello" != "world")
            out("Hello" != "Hello")
            var x := object {
                var v := 1
            }
            var y := object {
                var v := 1
            }
            out(x != y)
            out(x != x)
            
            assert(str)shouldBe("false\ntrue\nfalse\ntrue\nfalse\ntrue\nfalse\ntrue\nfalse\ntrue\nfalse\n")
        }

        method test_027_unicodewhitespace {
            // The next line is terminated by U+2028 LINE SEPARATOR, a legal character
            if (true) then {
                out("Here")
            }
            assert(str)shouldBe("Here\n")
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

        method test_033_class {
            class Cat.new(namex : String) {
             def name : String = namex
             method purr {out("Purr") }
             method mew {out("Meow") }
            }
            
            var c := Cat.new("Macavity")
            
            c.purr
            c.mew
            
            assert(str)shouldBe("Purr\nMeow\n")
        }

        method test_034_primechar {
            class Cat.new(name' : String) {
             def name : String = name'
             method purr {out("Purr") }
             method mew {out("Meow") }
            }
            
            var c := Cat.new("Macavity")
            
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

        method test_037_prefixop {
            var a := object {
                var value := true
                method prefix! {
                    self.value.not
                }
                method prefix!! {
                    "OK"
                }
            }
            
            out(!a)
            out(!(t037_areturner(a)))
            out(!!a)
            
            assert(str)shouldBe("false\nfalse\nOK\n")
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
            class A.new(v') {
                var v := v'
                method foo {
                    out "A's foo: {self.v}"
                }
                method baz {
                    out "A's baz"
                }
            }
            class B.new(x) {
                inherits A.new(x)
                method bar {
                    out "B's bar"
                }
                method baz {
                    out "B's baz"
                }
            }
            
            var b := B.new("ARGUMENT")
            b.foo
            b.bar
            b.baz
            
            assert(str)shouldBe("A's foo: ARGUMENT\nB's bar\nB's baz\n")
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


        method test_051_varargs {
            t051_foo(1,2,3,4,5)
            t051_bar("hello")baz("world", -1, 0, 1)
            
            assert(str)shouldBe("1\n2\nIn c: 3\nIn c: 4\nIn c: 5\nhello\nworld\nIn c: -1\nIn c: 0\nIn c: 1\n")
        }
        

        method test_054_baremethod {
            
            t054_foo
            out(t054_foo + 5)
            
            assert(str)shouldBe("11\n")
        }

        method test_057_outer {
            def x = object {
                method a {
                    2
                }
                method b {
                    object {
                        method foo {
                            outer.c
                        }
                    }
                }
                method c {
                    out "Hello"
                }
                method d {
                    object {
                        method test1 {
                            outer.a
                        }
                        method test2 {
                            outer.b.foo
                        }
                    }
                }
            }
            
            out(x.d.test1)
            x.d.test2
            
            assert(str)shouldBe("2\nHello\n")
        }

        method test_058_outerimplicit {
            def x = object {
                method a {
                    2
                }
                method c {
                    out "Hello"
                }
                method b {
                    object {
                        method foo {
                            c
                        }
                    }
                }
                method d {
                    object {
                        method test1 {
                            a
                        }
                        method test2 {
                            b.foo
                        }
                        method test3 {
                            object {
                                method bar {
                                    c
                                }
                            }
                        }
                    }
                }
            }
            
            out(x.d.test1)
            x.d.test2
            x.d.test3.bar
            
            assert(str)shouldBe("2\nHello\nHello\n")
        }
        method test_060_baremethodself {
            def b = object {
                var pp := 0
            }
            def a = object {
                def x = 3
                var y := 4
                var z := 0
                method test {
                    y := y + 1
                    out(x)
                    out(y)
                }
            }
            
            a.test
            
            assert(str)shouldBe("3\n5\n")
        }

        method test_061_shortcircuitand {
            
            out(true && {t061A062_truemeth} && {t061A062_truemeth})
            out(true && {t061A062_falsemeth} && {t061A062_truemeth})
            out(false && {t061A062_truemeth})
            
            assert(str)shouldBe("Ran truemeth\nRan truemeth\ntrue\nRan falsemeth\nfalse\nfalse\n")
        }

        method test_062_shortcirtuitor {
            
            out(true || {t061A062_truemeth} || {t061A062_truemeth})
            out(true || {t061A062_falsemeth} || {t061A062_truemeth})
            out(false || {t061A062_truemeth} || {t061A062_truemeth})
            out(false || {t061A062_falsemeth} || {t061A062_truemeth})
            out(false || {t061A062_falsemeth})
            
            assert(str)shouldBe("true\ntrue\nRan truemeth\ntrue\nRan falsemeth\nRan truemeth\ntrue\nRan falsemeth\nfalse\n")
        }

        method test_064_types1 {
            var x : String := "Hello"
            var y : String
            y := x
            y := x ++ " world"
            var a : Number := 3
            a := 5
            a := a * a
            var b : Boolean := true
            b := !b
            out(y)
            out(a)
            out(b)
            
            assert(str)shouldBe("Hello world\n25\nfalse\n")
        }

        method test_065_types2 {
            type X = {
                foo(s : String) -> String
            }
            
            var x : X := object {
                method foo(s : String) -> String {
                    s
                }
            }
            def y : String = x.foo("Hello")
            out(y)
            
            assert(str)shouldBe("Hello\n")
        }

        method test_073_uniontypes1 {
            var x : String | Number := "Hello"
            out(x)
            x := 5
            out(x)
            
            var s : String | Boolean | Number := x
            out(s)
            
            assert(str)shouldBe("Hello\n5\n5\n")
        }

        method test_074_uniontypesmeth {
            var x : Number | String := 3
            
            out(x.asString)
            
            assert(str)shouldBe("3\n")
        }

        method test_079_typesreturn {
            
            out(t079_test("Hello"))
            
            assert(str)shouldBe("Hello\n")
        }
        method test_083_structural3 {
            type A = {
                +(other : Number) -> A
                asString -> String
            }
            
            var a : A := 3
            a := a + 5
            out(a)
            
            assert(str)shouldBe("8\n")
        }

        method test_084_structural4 {
            
            type A = {
                test(a:A) -> A
            }
            type B = {
                test(b:B) -> B
            }
            
            var a : A := object {
                method test(x:A) -> A { x }
            }
            var b : B := object {
                method test(x:B) -> B { x }
            }
            a.test(a)
            b.test(b)
            a.test(b)
            b.test(a)
            a := b
            b := a
            out "OK"
            
            assert(str)shouldBe("OK\n")
        }

        method test_086_intersection {
            type A = {
                foo(arg:String) -> String
            }
            
            type B = {
                bar(arg : Number) -> Number
            }
            
            def ab : A & B = object {
                method foo(s:String) -> String {
                    s
                }
            
                method bar(n : Number) -> Number {
                    n
                }
            }
            out(ab.foo("Hello"))
            def a:A = ab
            def b : B = ab
            out(a.foo("World"))
            out(b.bar(73))
            
            assert(str)shouldBe("Hello\nWorld\n73\n")
        }

        method test_089_generic1 {
            type A<T> = {
                foo(_ : T) -> Number
                bar(_ : Number) -> T
            }
            
            var a : A<String> := object {
                method foo(x : String) -> Number { x.size }
                method bar(y : Number) -> String { "{y}" }
            }
            
            def b : A<Boolean> = object {
                method foo(x : Boolean) -> Number { 1 }
                method bar(y : Number) -> Boolean { y < 0 }
            }
            
            def c : A<String> = object {
                method foo(x : String) -> Number { x.size }
                method bar(y : Number) -> String { "{y}" }
            }
            
            a := c
            out(a.foo("Hello"))
            out(b.foo(true))
            
            assert(str)shouldBe("5\n1\n")
        }

        method test_096_paramclosure {
            def a = t096_objcreator(3, 4)
            def b = t096_objcreator(6, 7)
            def ae = a.extract
            out "{ae[1]} {ae[2]}"
            def be = b.extract
            out "{be[1]} {be[2]}"
            
            assert(str)shouldBe("3 4\n6 7\n")
        }

        method test_097_classparamclosure {
            class ConsGood.new(hd', tl') {
                def hd = hd'
                def tl = tl'
                def brand = "Cons"
                method extract {
                    return ([hd', tl'])
                }
            }
            
            def a = ConsGood.new(3, 4)
            def b = ConsGood.new(6, 7)
            def ae = a.extract
            out "{ae[1]} {ae[2]}"
            def be = b.extract
            out "{be[1]} {be[2]}"
            
            
            assert(str)shouldBe("3 4\n6 7\n")
        }

        method test_098_defobjouter {
            def ClassWithPrivate = object {
              method new {
                 return (
                    object {// Private parts
                       var secret := 0
                       method incSecret { secret := secret + 1 }
                       def inner is public = object {
                          method getSecret { secret }
                          method tick { incSecret }
                          def NAME = "inner"
                       }
                       def NAME = "ANON"
                     }
                ).inner
              }
              def NAME = "ClassWithPrivate"
            }
            def x1 = ClassWithPrivate.new
            out (x1.getSecret)
            x1.tick
            out (x1.getSecret)
            def x2 = ClassWithPrivate.new
            x2.tick
            x2.tick
            x2.tick
            x2.tick
            x2.tick
            out (x2.getSecret)
            out (x1.getSecret)
            x1.tick
            out (x1.getSecret)
            x1.tick
            out (x1.getSecret)
            assert (str) shouldBe "0\n1\n5\n1\n2\n3\n"
        }

        method test_099_apostrophe {
            var x' := 1
            def y' = 2
            x' := y'
            
            out(x')
            out(y')
            out(t099_test'(x'))
            
            x' := object {
                method t' {
                    return "OK"
                }
            }
            
            out("{x'.t'}")
            
            assert(str)shouldBe("2\n2\n2\nOK\n")
        }
        method test_100_squarebracket {
            def aString = "test"
            
            out(aString[1])
            out(aString[2])
            out(aString[3].size)
            
            assert(str)shouldBe("t\ne\n1\n")
        }

        method test_101_super {
            class A.new(v') {
                var v := v'
                method foo {
                    out "A's foo: {self.v}"
                }
                method baz {
                    out "A's baz"
                }
            }
            class B.new(x) {
                inherits A.new(x)
                method bar {
                    out "B's bar"
                }
                method baz {
                    out "B's baz invokes..."
                    super.baz
                }
            }
            class C.new(y) {
                inherits B.new(y)
                method baz {
                    out "C's baz invokes..."
                    super.baz
                }
            }
            
            var b := C.new("ARGUMENT")
            b.foo
            b.bar
            b.baz
            
            assert(str)shouldBe("A's foo: ARGUMENT\nB's bar\nC's baz invokes...\nB's baz invokes...\nA's baz\n")
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

        method test_103_inherits2 {
            class A.new {
                method foo {
                    "world"
                }
            }
            
            class B.new {
                inherits A.new
                method bar {
                    out "hello {foo}"
                }
            }
            
            class C.new {
                inherits B.new
                method quux {
                    out "X"
                    bar
                }
            }
            
            object {
                inherits A.new
            }
            
            def x = B.new
            x.bar
            type T = {
                foo
                quux
            }
            def y : T = C.new
            y.quux
            
            
            assert(str)shouldBe("hello world\nX\nhello world\n")
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
            class X.new(y) {
                out(y)
                object {
                    out(y)
                }
            }
            
            X.new(5)
            
            
            assert(str)shouldBe("5\n5\n")
        }

        method test_107_downcall {
            
            class A.new {
              method a {
                b
              }
              method b {
                out("A")
              }
            }
            
            class B.new {
              inherits A.new
              method b {
                out("B")
              }
            }
            
            B.new.a
            
            assert(str)shouldBe("B\n")
        }

        method test_108_classouter {
            
            class A.new {
              method b {
                t108_a
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
            class aCat.named(name') {
                def name = name'
                method describe {
                    out "A cat called {name}"
                }
            }
            
            def myCat = aCat.named "Timothy"
            def yourCat = aCat.named "Gregory"
            myCat.describe
            yourCat.describe
            
            assert(str)shouldBe("A cat called Timothy\nA cat called Gregory\n")
        }

        method test_113_mpmnconstructor {
            
            class aCat.named(aName) coloured (aColour) {
                def colour = aColour
                def name = aName
                var miceEaten := 0
                method describe {
                    out "{name} is a {colour} cat"
                }
            }
            
            def myCat = aCat.named "Timothy" coloured ("black")
            def yourCat = aCat.named "Gregory" coloured ("tortoiseshell")
            
            myCat.describe
            yourCat.describe
            
            assert(str)shouldBe("Timothy is a black cat\nGregory is a tortoiseshell cat\n")
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

        method test_125_multivarargs {
            type X = {
                bar(a, *b)baz(c, *d)
            }
            
            var x : X := object {
                method bar(a, *b)baz(c, *d) {
                    out(a)
                    for (b) do { v ->
                        out "In b: {v}"
                    }
                    out(c)
                    for (d) do { v ->
                        out "In d: {v}"
                    }
                }
            }
            x.bar("hello", 17, 42)baz("world", -1, 0, 1)
            
            class Foo.with(a, *b)varargs(c, *d) {
                method bar {
                    out(a)
                    for (b) do { e ->
                        out("In b: {e}")
                    }
                    out(c)
                    for (d) do { e ->
                        out("In d: {e}")
                    }
                }
            }
            var y := Foo.with("one", "two", "three")varargs("four", "five", "six")
            y.bar
            
            assert(str)shouldBe("hello\nIn b: 17\nIn b: 42\nworld\nIn d: -1\nIn d: 0\nIn d: 1\none\nIn b: two\nIn b: three\nfour\nIn d: five\nIn d: six\n")
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
            assert {t129_foo(y)} shouldRaise (NoSuchMethod)  // y.bar is confidential
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
                e : NoSuchMethod -> out "OK; Caught an error."
            }
            
            try {
                Exception.raise "OK"
            } catch {
                e : Error -> out "Failed; caught Exception as Error."
            } catch {
                e : Exception -> out "{e.message}; Caught a manual exception."
            }
            
            assert(str)shouldBe("OK; Caught an error.\nOK; Caught a manual exception.\n")
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
            def l = []
            l.push(1)
            l.push(2)
            l.push(3)
            l.push(4)
            out(l)
            l.do { each -> out(each) }
            assert (str) shouldBe "[1, 2, 3, 4]\n1\n2\n3\n4\n"
        }

    }
}

def graceLangTest = gU.testSuite.fromTestMethodsIn(aGraceLangTest)
def tests = gU.testSuite.with(graceLangTest)
tests.runAndPrintResults


