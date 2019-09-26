import "mirrors" as mirror

def bicycle = object {
    class parts(components:Collection) {
        // represents a collection of parts containing components
        use collections.enumerable exclude ++(_)  // this should be OK, but the compiler doesn't know what's in collections.enumerable
        def parts is public = components
        method do(action) { parts.do(action) }
        method iterator { components.iterator }
        method asString { "a bicycle.parts {components}" }
    }
}

def p = bicycle.parts []
def pm = mirror.reflect(p)
def pMethods = pm.methodNames
print "{p} has methods {(pMethods >> list).sort}"
print(p >> p)
