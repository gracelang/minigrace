dialect "minitest"
import "compiler" as compiler
import "errormessages" as errormessages
import "identifierresolution" as identifierresolution
import "util" as util


def twoDefsForNe = ‹
trait ne {
    method ≠(other) { (self == other ).not }
    method ==(other) is required
}

trait id {
    method ≠(o) { self.isMe(o).not }
}

class twoNeMethods {
    use ne
    use id
}
›

testSuiteNamed "trait conflict" with {
    test "two definitions of ≠" by {
        def tree = compiler.parseString(twoDefsForNe)
        assert {identifierresolution.resolve(tree)}
              shouldRaise(errormessages.CompilationError)
              matchedBy ‹trait conflict.*≠\(_\).* defined in ne and id›
    }
}

exit
