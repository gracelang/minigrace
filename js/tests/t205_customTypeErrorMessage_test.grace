type Custom = interface {
    +(_) → Custom
    -(_) → Custom
}
def b = { n:Custom, m:Number -> n + m }
try {
    def ans = b.apply("Hello", 4)
    print (ans)
} catch { ex:TypeError ->
    print "Type error in apply(_,_); error message is"
    print (ex.message)
} catch { ex:Exception ->
    print "Unexpected exception {ex}"
}
