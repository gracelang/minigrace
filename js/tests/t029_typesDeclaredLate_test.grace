// A test for https://github.com/gracelang/minigrace/issues/273
// The type MethodType is referenced in the initialization of scope
// before the declaration of MtehodType

def scope is public = object {
    // keep track of each kind of expression separately
    def variables is public = list.with "variable"
    def methods is public = list ⟦MethodType⟧.with "method"
    def types is public = list ⟦MethodType⟧.with "type"
    print "scope done"
}

type MethodType = interface {
    name → String
    ...
}

// Until commit f671a6a5a8f0378498e1e1f9db3e294d920a1377, a similar
// problem existed inside objects, because types in objects
// were not being compiled as methods.  

def anotherScope is public = object {
    // keep track of each kind of expression separately
    def objects is public = list⟦ObjectType⟧.empty
    def types is public = list ⟦MethodType⟧.with "type"
    type ObjectType = interface {
        methods → List⟦MethodType⟧
    }
    print "anotherScope done"
}