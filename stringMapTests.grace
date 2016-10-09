import "gUnit" as gU
import "stringMap" as map
import "unicode" as unicode
import "math" as math
import "sys" as sys

def stringMapTest = object {
    class forMethod(meth) {
        inherit gU.testCaseNamed(meth)
        
        def m123 = map.new
        m123.put("one", 1).put("two", 2).put("three", 3)
        
        def m12 = map.new
        m12.put("one", 1).put("two", 2)

        method testSize3 {
            assert (m123.size) shouldBe 3
        }
        
        method testSize2 {
            assert (m12.size) shouldBe 2
        }

        method testAsString {
            def m12Str = m12.asString
            assert ((m12Str == "map.new [two::2, one::1]")  || (m12Str == "map.new [one::1, two::2]"))
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
        method testGetIfAbsentPresent {
            assert (m123.get "two" ifAbsent { failBecause "two is absent" }) shouldBe 2
        }
        method testGetIfAbsent {
            var absent := false
            assert (m123.get "foo" ifAbsent { absent := true ; "absent" }) shouldBe "absent"
        }
        method testContainsPresent {
            assert (m123.contains "two") description "m123 does not contain \"two\""
        }
        method testContainsAbsent {
            deny (m123.contains "foo") description "m123 contains \"foo\""
        }
        method testMany {
            def n = if (engine == "c") then { 1000 } else { 10000 }
            def keys = randomKeys(n);
            def m = map.new
            def startTime = sys.elapsedTime
            keys.keysAndValuesDo { i, k ->
                m.put(k, i)
            }
            keys.do { k ->
                def v = m.get(k)
                assert (keys.at(v) == k) description "wrong value found for {k}"
            }
            def duration = sys.elapsedTime - startTime
            print "In {engine}, elapsed time for {n} keys is {duration}s"
            print "{n - m.size} duplicate keys"
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
        method randomKeys(n) {
            def base = "A".ord
            def result = emptyList
            (1..n).do { ix ->
                var s := ""
                repeat 8 times {
                    def ch = (math.random * 26).truncated + base
                    s := s ++ unicode.create(ch)
                }
                result.add(s)
            }
            result
        }
        method testStringHash {
            def n = if (engine == "c") then { 500 } else { 10000 }
            def strings = randomKeys(n)
            def hashes = emptyDictionary
            var total := 0
            var minh := infinity
            var maxh := 0
            def startTime = sys.elapsedTime
            var p := 8
            while { p < (2 * n) } do { p := p * 2 }
            p := p + 13
            strings.do { s ->
                def h = s.hash
                if (h > maxh) then { maxh := h }
                if (h < minh) then { minh := h }
                def allStrings = hashes.at(h % p) ifAbsent {emptyList}
                hashes.at(h % p) put (allStrings.add(s))
            }
            def duration = sys.elapsedTime - startTime
            hashes.keysAndValuesDo { k, v -> 
                if (v.size > 1) then {
                    print "hash {k} shared by {v}"
                }
                total := total + v.size
            }
            assert (total) shouldBe (n)
            print "In {engine}, elapsed time for {n} hashes is {duration}s."
            print "Hash range is {minh}..{maxh}. {hashes.size} distinct mod {p} values."
        }
    }
}


def mapTests = gU.testSuite.fromTestMethodsIn(stringMapTest)
mapTests.name := "map tests"
mapTests.runAndPrintResults
