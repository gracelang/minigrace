def a = object {
    method new {
        object {
            method test {
                outerA'smethod
            }
        }
    }
    method outerA'smethod {
        print "Hello"
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
        print "world"
    }
}

def ab = b.new
ab.test
ab.test2
