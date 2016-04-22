import "gUnit" as gU

var str := ""
method out(s) {
    str := str ++ s ++ "\n"
}

// space for methods

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

//  *****************************
//  **   start of test suite   **
//  *****************************


def aGraceLangTest = object {
    class forMethod(m) {
        inherits gU.testCaseNamed(m)

        method setup {
            str := ""
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
        
        method test_089_generic2 {
            type A⟦T⟧ = {
                foo(_ : T) -> Number
                bar(_ : Number) -> T
            }
            
            var a : A⟦String⟧ := object {
                method foo(x : String) -> Number { x.size }
                method bar(y : Number) -> String { "{y}" }
            }
            
            def b : A⟦Boolean⟧ = object {
                method foo(x : Boolean) -> Number { 1 }
                method bar(y : Number) -> Boolean { y < 0 }
            }
            
            def c : A⟦String⟧ = object {
                method foo(x : String) -> Number { x.size }
                method bar(y : Number) -> String { "{y}" }
            }
            
            a := c
            out(a.foo("Hello"))
            out(b.foo(true))
            
            assert(str)shouldBe("5\n1\n")
        }

        method test_089_generic3 {
            type A[[T]] = {
                foo(_ : T) -> Number
                bar(_ : Number) -> T
            }
            
            var a : A[[String]] := object {
                method foo(x : String) -> Number { x.size }
                method bar(y : Number) -> String { "{y}" }
            }
            
            def b : A[[Boolean]] = object {
                method foo(x : Boolean) -> Number { 1 }
                method bar(y : Number) -> Boolean { y < 0 }
            }
            
            def c : A[[String]] = object {
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
            out "{ae.first} {ae.second}"
            def be = b.extract
            out "{be.first} {be.second}"
            
            assert(str)shouldBe("3 4\n6 7\n")
        }
        
        class cons(hd', tl') {
            method hd { hd' }
            def tl is public = tl'
            method extract { [hd', tl'] }
        }

        method test_097_classparamclosure {
            def a = cons(3, 4)
            def b = cons(6, 7)
            def ae = a.extract
            def be = b.extract
            assert (ae) shouldBe [3, 4]
            assert (a.hd) shouldBe 3
            assert (a.tl) shouldBe 4
            assert (be) shouldBe [6, 7]
            assert (b.hd) shouldBe 6
            assert (b.tl) shouldBe 7
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
    }
}

def graceLangTest = gU.testSuite.fromTestMethodsIn(aGraceLangTest) named "t002"
graceLangTest.runAndPrintResults


