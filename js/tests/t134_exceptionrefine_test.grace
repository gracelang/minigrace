
def MyException = Exception.refine "MyException"
print "OK; Refined an exception."

try {
    MyException.raise "OK"
} catch {
    e : MyException -> print "{e.message}; Caught a refined exception."
}

def MySubException = MyException.refine "MySubException"
def MySubException2 = MyException.refine "MySubException"
print "OK; Refined sub-exceptions."

try {
    MyException.raise "OK"
} catch {
    e : MyException ->
        print "{e.message}; Caught a refined exception with super-exception."
} catch {
    e : MySubException ->
        print "Failed; Did not catch a refined exception as super-exception."
}
