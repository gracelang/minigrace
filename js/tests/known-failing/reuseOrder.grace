def aHolder = object {
    def one = 1
    class a {
        print "outer.one = {outer.one}"
    }
}
aHolder.a

def bHolder = object {
    def two = 2
    class ab {
        inherit aHolder.a
        print "outer.two = {outer.two}"
    }
}
bHolder.ab

def cHolder = object {
    def three = 3
    class abc {
        inherit bHolder.ab
        print "outer.three = {outer.three}"
    }
}
cHolder.abc
