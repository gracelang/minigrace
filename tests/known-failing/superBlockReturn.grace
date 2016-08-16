class equalityTest {
    method ==(other) {
        { print "    about to return false"
          return false
        }.apply
        // It's essential that the return be from inside a block
    }
}


method values {
    object {
        inherit equalityTest
// To reveal the issue, it's important that the == method requests == on super.
        method ==(other) {
            print "requesting super =="
            def result = (super == other)
            print "done requesting super =="
            return result
        }
    }
}


def l1 = values
def l2 = values

print "l1 equals l2: {l1 == l2}"

