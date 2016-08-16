
def x = object {
    inherit true
    method isAnX {
        self
    }
}

def y = object {
    inherit false
    method isAnX {
        false
    }
}

if (x) then {
    print "OK"
} else {
    print "Not OK; x inherit true and should be true."
}
if (y) then {
    print "Not OK; y inherit false and should be false."
} else {
    print "OK"
}
if (x.isAnX) then {
    print "OK"
} else {
    print "Not OK; x.isAnX should return a true value."
}
if (x == true) then {
    print "OK"
} else {
    print "OK; it doesn't matter that x has a method."
}
if (true == !y) then {
    print "OK"
} else {
    print "Not OK; !y should be true."
}
if (false == !x) then {
    print "OK"
} else {
    print "Not OK; !x should be false."
}
