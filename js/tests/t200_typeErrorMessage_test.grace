def b = { n:Number, m:Number -> n + m }
try {
    def ans = b.apply("Hello", 4)
    print (ans)
} catch { ex:TypeError ->
    print "Type error in apply(_,_); error message is"
    print (ex.message)
} catch { ex:Exception ->
    print "Unexpected exception {ex}"
}
