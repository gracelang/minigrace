import "gUnit" as gU

class stringTest.forMethod(m) {
    inherits gU.testCaseNamed(m)
    def vowels = "aeiouy"
    def morevowels = "aeiouyàáâäæãåāèéêëēėęîïíīįìôöòóœøōõûüùúūÿ"
    def consonants = "bcçćčdfghjklmnpqrstvwxz"  // note: ß  missing!
    def digits = "0123456789"
    def empty = ""

    method testLetterPositive {
        assert ("a12".startsWithLetter)
    }
    
    method testLetterAccentedPositive {
        assert ("éfg".startsWithLetter) description "\"éfg\" does not start with a letter!"
    }
    method testLetterNegative {
        deny ("012".startsWithLetter)
    }
    
    method testDigitPositive {
        assert ("1ab".startsWithDigit)
    }
    
    method testDigitNegative {
        deny ("abc".startsWithDigit)
    }

    method testSpacePositive {
        assert (" abc".startsWithSpace)
    }

    method testSpaceNegative {
        deny ("abc".startsWithSpace)
        deny ("\tabc".startsWithSpace)
    }
    
    method testAtIn {
        assert (vowels.at 1) shouldBe "a"
        assert (vowels.at 6) shouldBe "y"
    }
    method testAtTooBig {
        assert {vowels.at 7} shouldRaise (BoundsError)
    }
    method testAtTooSmall {
        assert {vowels.at 0} shouldRaise (BoundsError)
    }
    method testIndexOfIfAbsent {
        assert (vowels.indexOf("iou") ifAbsent{"absent"}) shouldBe 3
        assert (vowels.indexOf("y") ifAbsent{"absent"}) shouldBe (vowels.size)
        assert (morevowels.indexOf("ÿ") ifAbsent{"absent"}) shouldBe (morevowels.size)
        assert (consonants.indexOf "w") shouldBe (consonants.size - 2)
        assert {vowels.indexOf("w") ifAbsent {NoSuchObject.raise "not found"} }
            shouldRaise (NoSuchObject)
        assert (vowels.indexOf("w") ifAbsent {"absent"}) shouldBe("absent")
    }
    method testIndexOf {
        assert (vowels.indexOf "iou") shouldBe 3
        assert (vowels.indexOf "y") shouldBe (vowels.size)
        assert (morevowels.indexOf "ÿ") shouldBe (morevowels.size)
        assert (consonants.indexOf "w") shouldBe (consonants.size - 2)
        assert (vowels.indexOf "w") shouldBe 0
        assert (vowels.indexOf "aeixaeixaeix") shouldBe 0
    }
    method testIndexOfMultiple {
        def vowels2 = vowels * 2
        assert (vowels2.indexOf("iou")) shouldBe 3
        assert (vowels2.indexOf("y") ifAbsent{"absent"}) shouldBe (vowels.size)
        assert {morevowels.indexOf("w") ifAbsent {NoSuchObject.raise "not found"} }
            shouldRaise (NoSuchObject)
        assert (vowels2.indexOf("w") ifAbsent {"absent"}) shouldBe("absent")
    }
    method testIndexOfStartingAtIfAbsent {
        def vowels4 = vowels * 4
        assert (vowels4.indexOf "iou" startingAt 0 ifAbsent { 0 }) shouldBe 3
        assert (vowels4.indexOf "iou" startingAt 4 ifAbsent { 0 }) shouldBe 9
        assert (vowels4.indexOf "iou" startingAt 10 ifAbsent { 0 }) shouldBe 15
        assert (vowels4.indexOf "iou" startingAt 16 ifAbsent { 0 }) shouldBe 21
        assert {vowels4.indexOf "iou" startingAt 22 ifAbsent {
            ProgrammingError.raise "not found" 
        }} shouldRaise (ProgrammingError)
    }
    method testIndexOfStartingAt {
        def vowels4 = vowels * 4
        assert (vowels4.indexOf "iou" startingAt 0) shouldBe 3
        assert (vowels4.indexOf "iou" startingAt 4) shouldBe 9
        assert (vowels4.indexOf "iou" startingAt 10) shouldBe 15
        assert (vowels4.indexOf "iou" startingAt 16) shouldBe 21
        assert (vowels4.indexOf "iou" startingAt 22) shouldBe 0
    }
    method testLastIndexOfStartingAt {
        def vowels4 = vowels * 4
        assert (vowels4.lastIndexOf "iou" startingAt 8 ifAbsent { 0 }) shouldBe 3
        assert (vowels4.lastIndexOf "iou" startingAt 14 ifAbsent { 0 }) shouldBe 9
        assert (vowels4.lastIndexOf "iou" startingAt 20 ifAbsent { 0 }) shouldBe 15
        assert (vowels4.lastIndexOf "iou" startingAt 24 ifAbsent { 0 }) shouldBe 21
        assert (vowels4.lastIndexOf "iou" startingAt 99 ifAbsent { 0 }) shouldBe 21
    }
    method testIndexOfEmpty {
        assert (vowels.indexOf(empty)) shouldBe 1
        assert (empty.indexOf(empty) ifAbsent {"absent"}) shouldBe 1
        assert (empty.indexOf "w" ifAbsent {"absent"}) shouldBe "absent"
    }
    method testLastIndexOf {
        assert (vowels.lastIndexOf("iou") ifAbsent {done}) shouldBe 3
        assert (vowels.lastIndexOf("y") ifAbsent {done}) shouldBe (vowels.size)
        assert {vowels.lastIndexOf("w") ifAbsent {NoSuchObject.raise "not found"} }
            shouldRaise (NoSuchObject)
        assert (vowels.lastIndexOf "w" ifAbsent {"absent"}) shouldBe("absent")
    }
    method testLastIndexOfMultiple {
        def vowels2 = vowels * 2
        assert (vowels2.lastIndexOf("iou") ifAbsent {0}) shouldBe (3 + vowels.size)
        assert (vowels2.lastIndexOf("y") ifAbsent {0}) shouldBe (vowels.size * 2)
        assert {vowels2.lastIndexOf("w") ifAbsent {NoSuchObject.raise "not found"} }
            shouldRaise (NoSuchObject)
        assert (vowels2.lastIndexOf("w") ifAbsent {0}) shouldBe(0)
    }
    method testLastIndexOfEmpty {
        assert (vowels.lastIndexOf(empty) ifAbsent {"absent"}) shouldBe (vowels.size + 1)
        assert (empty.lastIndexOf(empty) ifAbsent {"absent"}) shouldBe 1
        assert (empty.lastIndexOf "w" ifAbsent {"absent"}) shouldBe "absent"
    }
    method testAsUpper {
        assert (vowels.asUpper) shouldBe "AEIOUY"
        assert (morevowels.asUpper) shouldBe "AEIOUYÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÎÏÍĪĮÌÔÖÒÓŒØŌÕÛÜÙÚŪŸ"
        assert (consonants.asUpper) shouldBe "BCÇĆČDFGHJKLMNPQRSTVWXZ"
        assert (digits.asUpper) shouldBe (digits)
        assert (empty.asUpper) shouldBe (empty)
    }
    method testAsLower {
        assert ("AEIOUY".asLower) shouldBe (vowels)
        assert ("AEIOUYÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÎÏÍĪĮÌÔÖÒÓŒØŌÕÛÜÙÚŪŸ".asLower) shouldBe (morevowels)
        assert ("BCÇĆČDFGHJKLMNPQRSTVWXZ".asLower) shouldBe (consonants)
        assert (digits.asLower) shouldBe (digits)
        assert (empty.asUpper) shouldBe (empty)
    }
    method testUpperLowerRoundTrip { 
        assert ("a".asUpper.asLower) shouldBe "a"
        assert ("e".asUpper.asLower) shouldBe "e"
        assert ("i".asUpper.asLower) shouldBe "i"
        assert ("o".asUpper.asLower) shouldBe "o"
        assert ("u".asUpper.asLower) shouldBe "u"
        assert ("y".asUpper.asLower) shouldBe "y"
        assert ("à".asUpper.asLower) shouldBe "à"
        assert ("á".asUpper.asLower) shouldBe "á"
        assert ("â".asUpper.asLower) shouldBe "â"
        assert ("ä".asUpper.asLower) shouldBe "ä"
        assert ("æ".asUpper.asLower) shouldBe "æ"
        assert ("ã".asUpper.asLower) shouldBe "ã"
        assert ("å".asUpper.asLower) shouldBe "å"
        assert ("ā".asUpper.asLower) shouldBe "ā"
        assert ("è".asUpper.asLower) shouldBe "è"
        assert ("é".asUpper.asLower) shouldBe "é"
        assert ("ê".asUpper.asLower) shouldBe "ê"
        assert ("ë".asUpper.asLower) shouldBe "ë"
        assert ("ē".asUpper.asLower) shouldBe "ē"
        assert ("ė".asUpper.asLower) shouldBe "ė"
        assert ("ę".asUpper.asLower) shouldBe "ę"
        assert ("î".asUpper.asLower) shouldBe "î"
        assert ("ï".asUpper.asLower) shouldBe "ï"
        assert ("í".asUpper.asLower) shouldBe "í"
        assert ("ī".asUpper.asLower) shouldBe "ī"
        assert ("į".asUpper.asLower) shouldBe "į"
        assert ("ì".asUpper.asLower) shouldBe "ì"
        assert ("ô".asUpper.asLower) shouldBe "ô"
        assert ("ö".asUpper.asLower) shouldBe "ö"
        assert ("ò".asUpper.asLower) shouldBe "ò"
        assert ("ó".asUpper.asLower) shouldBe "ó"
        assert ("œ".asUpper.asLower) shouldBe "œ"
        assert ("ø".asUpper.asLower) shouldBe "ø"
        assert ("ō".asUpper.asLower) shouldBe "ō"
        assert ("õ".asUpper.asLower) shouldBe "õ"
        assert ("û".asUpper.asLower) shouldBe "û"
        assert ("ü".asUpper.asLower) shouldBe "ü"
        assert ("ù".asUpper.asLower) shouldBe "ù"
        assert ("ú".asUpper.asLower) shouldBe "ú"
        assert ("ū".asUpper.asLower) shouldBe "ū"
        assert ("ÿ".asUpper.asLower) shouldBe "ÿ"
    }
    method testCapitalize {
        assert ("a pig in a PoKemoN".capitalized) shouldBe "A Pig In A PoKemoN"
    }
    method testFirst {
        assert (vowels.first) shouldBe "a"
    }
    method testSecond {
        assert (vowels.second) shouldBe "e"
    }
    method testThird {
        assert (vowels.third) shouldBe "i"
    }
    method testFourth {
        assert (vowels.fourth) shouldBe "o"
    }
    method testFifth {
        assert (vowels.fifth) shouldBe "u"
    }
    method testLast {
        assert (vowels.last) shouldBe "y"
    }
    method testFirstofEmpty {
        assert {empty.first} shouldRaise (BoundsError)
    }
    method testContainsPositive {
        assert (vowels.contains "a")
    }
    method testContainsNegative {
        deny (vowels.contains "w")
    }
    method testContainsEmpty {
        deny (empty.contains "a")
    }
    method testDo {
        var s := ""
        vowels.do { ch -> s := s ++ ch }
        assert (s) shouldBe (vowels)
    }
    method testKeysAndValuesDo {
        var s := ""
        var n := 0
        vowels.keysAndValuesDo { ix, ch -> s := s ++ ch ; n := n + ix }
        assert (s) shouldBe (vowels)
        assert (n) shouldBe (vowels.size * (vowels.size + 1) / 2)
    }
    method testSubstringFromNormal {
        assert (consonants.substringFrom 2 to 7) shouldBe "cçćčdf"
        assert ((consonants.substringFrom 2 to 7).size) shouldBe (7 - 2 + 1)
    }
    method testSubstringFromOverflow {
        assert (vowels.substringFrom 2 to 99) shouldBe "eiouy"
        assert (vowels.substringFrom 1 to 17) shouldBe (vowels)
    }
    method testSubstringSizeNormal {
        assert (consonants.substringFrom 2 size 6) shouldBe "cçćčdf"
        assert ((consonants.substringFrom 2 size 6).size) shouldBe 6
    }
    method testSubstringSizeOverflow {
        assert (vowels.substringFrom 2 size 99) shouldBe "eiouy"
        assert (vowels.substringFrom 1 size 17) shouldBe (vowels)
    }
    method testSubstringFromSizeEmpty {
        assert (consonants.substringFrom 3 size 0) shouldBe (empty)
        assert (consonants.substringFrom(consonants.size+1) size 0) 
            shouldBe (empty)
    }
    method testSubstringFromZeroStart {
        assert {consonants.substringFrom 0 size 0}
            shouldRaise (BoundsError)
    }
    method testSubstringNegativeStart {
        assert {consonants.substringFrom (-1) size 10}
            shouldRaise (BoundsError)
    }
    method testSubstringFromToEmpty {
        def ffl = "abcde"
        assert (ffl.substringFrom 3 to 3) shouldBe "c"
        assert (ffl.substringFrom 3 to 2) shouldBe (empty)
        assert (ffl.substringFrom 6 to 16)
            shouldBe (empty)
        assert {ffl.substringFrom 7 to 6}
            shouldRaise (BoundsError)
    }
    method testTimesNumber {
        def in = "abc"
        var out := "abcabc"
        assert (in * 0) shouldBe (empty)
        assert (in * 1) shouldBe (in)
        assert (in * 2) shouldBe (out)
        for (3..63) do { n -> 
            out := out ++ in
            assert ((in * n) == out) description "string * n fails for n = {n}"
        }
    }
    method testReplaceWith {
        def input = "abc and the blocks spelled \"abc\" all over again: abc"
        def output = "wxyz and the blocks spelled \"wxyz\" all over again: wxyz"
        assert (input.replace "abc" with "wxyz") shouldBe (output)
    }
    method testNumberTimes {
        def in = "abc"
        var out := "abcabc"
        assert (0 * in) shouldBe (empty)
        assert (1 * in) shouldBe (in)
        assert (2 * in) shouldBe (out)
    }
    method testMap {
        assert(vowels.map { ch -> ch.ord })
            shouldBe (sequence [97, 101, 105, 111, 117, 121]) 
    }
    method testFilter {
        assert(vowels.filter { ch -> ch < "j" }) shouldBe "aei"
    }
    method testFold {
        assert(vowels.fold { acc, ch -> acc ++ ch } startingWith "<")
            shouldBe ("<" ++ vowels)
    }
}

gU.testSuite.fromTestMethodsIn(stringTest).runAndPrintResults
