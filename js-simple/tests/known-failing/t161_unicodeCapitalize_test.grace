import "gUnit" as gU
import "unicode" as unicode

def stringTest = object {
    class forMethod(m) {
        inherits gU.testCaseNamed(m)
        
        def sharpS = "ß"
        def capitalSharpS = unicode.create(0x1E9E)
        def pileOfPoo = "💩"

        method testStringToUpperSS {
            assert (sharpS.asUpper) shouldBe (capitalSharpS)
        }
        
        method testStringSizeSS {
            assert (capitalSharpS.size) shouldBe 1
        }
        
        method testStringSizePile {
            assert (pileOfPoo.size) shouldBe 1
        }
    }
}

gU.testSuite.fromTestMethodsIn(stringTest).runAndPrintResults

// This fails because the underlying support for unicode in Javascript is 
// broken.  In particular,  .asUpper method in string turns "ß" into "SS" 
// rather than capital "ẞ", which has been part of the Unicode standard
// since 2008.
//
// A more serious problem is illustrated by pileOfPoo, which is not in the 
// Basic MultiCode Plane.  It's represeneted as 💩
// PILE OF POO
// Unicode: U+1F4A9 (U+D83D U+DCA9), UTF-8: F0 9F 92 A9
// i.e. 2 UTF-16 entities, which is what ECMASCRIPT's length property counts.
// Useful references: 
// Mathias Bynen "JavaScript has a Unicode problem" 
//      https://mathiasbynens.be/notes/javascript-unicode
// Wikipedia "Capital ẞ"
//      http://en.wikipedia.org/wiki/Capital_ẞ
