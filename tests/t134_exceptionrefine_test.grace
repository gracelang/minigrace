
def MyException = Exception.refine "MyException"
print "OK; Refined an exception."

catch {
    MyException.raise "OK"
} case {
    e : MyException -> print "{e.message}; Caught a refined exception."
}

def MySubException = MyException.refine "MySubException"
def MySubException2 = MyException.refine "MySubException"
print "OK; Refined sub-exceptions."

catch {
    MyException.raise "OK"
} case {
    e : MyException ->
        print "{e.message}; Caught a refined exception with super-exception."
} case {
    e : MySubException ->
        print "Failed; Did not catch a refined exception as super-exception."
}
