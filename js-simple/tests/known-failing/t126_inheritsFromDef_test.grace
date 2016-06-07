#pragma ObjectInheritance

def singluarObject = object {
    def foo is public = "OK"
    method bar { "OK" }
}

object {
    inherits singluarObject
    print "The value answered by bar is"
    print(bar)
    print "The value answered by foo is"
    print(foo)
}

