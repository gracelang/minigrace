trait a {
    method map { 
        object {
            method asString { "a map" }
        }
    }
}

method m {
    object {
        use a
    }
}

print "m.map = {m.map}"
print "a.map = {a.map}"
