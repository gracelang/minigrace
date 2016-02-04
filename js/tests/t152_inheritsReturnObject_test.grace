class A.TRAIT {
    method map { 
        object {
            method asString { "a map" }
        }
    }
}

method m {
    object {
        inherits A.TRAIT
    }
}

print "m.map = {m.map}"
print "A.trait.map = {A.TRAIT.map}"
