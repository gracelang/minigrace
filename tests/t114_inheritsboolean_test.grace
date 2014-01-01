
def x = object {
    inherits true
    method isAnX {
        self
    }
}

def y = object {
    inherits false
    method isAnX {
        false
    }
}

if (x) then {
    print "OK"
} else {
    print "Not OK; x inherits true and should be true."
}
if (y) then {
    print "Not OK; y inherits false and should be false."
} else {
    print "OK"
}
if (x.isAnX) then {
    print "OK"
} else {
    print "Not OK; x.isAnX should return a true value."
}
if (x == true) then {
    print "Not OK; x is not equal to true because of isAnX."
} else {
    print "OK"
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
