dialect "standard"
class testClass {
    def s is public = singleton "hi there"
    type t = interface { a(_) -> Done }
    print "during initialization, s = \"{s}\" and t = {t}"
}

def to = testClass
print (to.s)
print (to.t)
