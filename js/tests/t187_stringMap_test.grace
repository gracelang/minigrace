import "gUnit" as gU
import "stringMap" as map
import "unicode" as unicode
import "random" as random
import "sys" as sys


def charBase = "a".ord

def stringMapTest = object {
    class forMethod(meth) {
        inherit gU.testCaseNamed(meth)
        
        var m123
        var m12
        
        method setup {
            m123 := map.new
            m123.put("one", 1).put("two", 2).put("three", 3)
            m12 := map.new
            m12.put("one", 1).put("two", 2)
        }

        method testSize3 {
            assert (m123.size) shouldBe 3
        }
        
        method testSize2 {
            assert (m12.size) shouldBe 2
        }

        method testAsString {
            def m12Str = m12.asString
            assert ((m12Str == "map.new[two::2, one::1]")  || (m12Str == "map.new[one::1, two::2]"))
                description "m12.asString == {m12Str}"
        }
        method testBindings {
            def m123List = m123.bindings
            assert (m123List.size) shouldBe 3
            assert (m123List.contains("one"::1)) 
                description "{m123List} does not contain \"one\"::1"
            assert (m123List.contains("two"::2))
                description "{m123List} does not contain \"two\"::2"
            assert (m123List.contains("three"::3))
                description "{m123List} does not contain \"three\"::3"
        }
        method testGetPresent {
            assert (m123.get "two") shouldBe 2
        }
        method testGetAbsent {
            assert {m123.get "foo"} shouldRaise (NoSuchObject)
        }
        method testGetPresentValueOf {
            // valueOf is a property of the JavaScript object prototype
            m123.put("valueOf", 19)
            assert (m123.get "valueOf") shouldBe 19
        }
        method testGetIfAbsentAbsentValueOf {
            var absent := false
            assert (m123.get "valueOf" ifAbsent { absent := true ; "absent" }) 
                shouldBe "absent"
            assert (absent) description "variable `absent` not set"
        }
        method testGetAbsentValueOf {
            assert {m123.get "valueOf"} shouldRaise (NoSuchObject)
        }
        method testGetIfAbsentPresent {
            assert (m123.get "two" ifAbsent { failBecause "two is absent" }) 
                shouldBe 2
        }
        method testGetIfAbsent {
            var absent := false
            assert (m123.get "foo" ifAbsent { absent := true ; "absent" }) 
                shouldBe "absent"
            assert (absent) description "variable `absent` not set"
        }
        method testContainsPresent {
            assert (m123.contains "two") description "m123 does not contain \"two\""
        }
        method testContainsAbsent {
            deny (m123.contains "foo") description "m123 contains \"foo\""
        }
        method testMany {
            def n = if (engine == "c") then { 1000 } else { 10000 }
            def keys = randomStrings(n);
            def m = map.new
            def startTime = sys.elapsedTime
            keys.keysAndValuesDo { i, k ->
                m.put(k, i)
            }
            keys.do { k ->
                def v = m.get(k)
                assert (keys.at(v) == k) description "wrong value found for {k}"
            }
//            def duration = sys.elapsedTime - startTime
//            print "stringMap with {n} keys in {engine}:"
//            print "    elapsed time to create and check is {duration}s"
//            print "    {n - m.size} duplicate keys."
        }
        method testDo {
            var sum := 0
            m123.do { val -> sum := sum + val }
            assert (sum) shouldBe 6
        }
        method testKeysDo {
            def keys = emptySet
            m123.keysDo { k -> keys.add(k) }
            assert (keys) shouldBe (set ["one", "two", "three"])
        }
        method testKeyAndValuesDo {
            def pairs = emptySet
            m123.keysAndValuesDo { k, v -> pairs.add (k::v) }
            assert (pairs) shouldBe (set ["one"::1, "two"::2, "three"::3])
        }
        method randomStrings(n) {
            def result = emptyList
            (1..n).do { ix ->
                if ((ix % 100) == 0) then {
                    result.add(shortRandomString)
                } else {
                    result.add(longerRandomString)
                }
            }
//            print "Sample of random strings:"
//            for (1..100) do { ix -> print "    {result.at(ix)}" }
            result
        }
        method randomChar {
            unicode.create((random.integerIn 0 to 25) + charBase)
        }

        method shortRandomString {
            def base = "a".ord
            def singleCharFraction = 1/10
            if (random.between0And1 < singleCharFraction) then {
                randomChar
            } else {
                randomChar ++ randomChar
            }
        }
        method longerRandomString {
            def base = "a".ord
            var s := ""
            repeat (random.integerIn 3 to 12) times {
                s := s ++ randomChar
            }
            s
        }
    }
}


def mapTests = gU.testSuite.fromTestMethodsIn(stringMapTest)
mapTests.name := "map tests"
mapTests.runAndPrintResults
