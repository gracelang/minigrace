class A.TRAIT {
    method map { 
        object {
            method asString { "a map" }
        }
    }
}

method m {
    object {
        inherit A.TRAIT
    }
}

print "m.map = {m.map}"
print "A.trait.map = {A.TRAIT.map}"
