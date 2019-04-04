// A test for https://github.com/gracelang/minigrace/issues/273
// The type MethodType is referenced in the initialization of scope
// before the declaration of MtehodType

def scope is public = object {
    // keep track of each kind of expression separately
    def variables is public = list.with "variable"
    def methods is public = list ⟦MethodType⟧.with "method"
    def types is public = list ⟦MethodType⟧.with "type"
    print "done"
}

type MethodType = interface {
    name → String
    ...
}
