class A.trait {
    method map { 
        object {
            method asString { "a map" }
        }
    }
}

method m {
    object {
        inherits A.trait
    }
}

print "m.map = {m.map}"
print "A.trait.map = {A.trait.map}"
