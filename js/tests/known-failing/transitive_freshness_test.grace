class mka(n: Number) {
    method m → String {"mka: calling m"}
    print "Creating mka"
}

method e(k: Number) {self.mka(k)}

class d(j: Number) {
    inherit outer.e(j)  // inherit mka is ok; the compiler doesn't know that this is the same
    method p → Number {
        print "calling p"
        self.m.size
    }
    print "creating d"
}

d(3)