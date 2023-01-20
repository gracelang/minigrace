dialect "minispec"
import "mirror" as mirror

type t = interface { wombat → Number }
type u = interface { wombat → Number ; kanga → String }
type w = u - t

describe "type-level operations" with {
    specify "gracelib type has ¬ operation" by {
        expectType (Number) toHaveMethod "prefix¬"
    }
    specify "standard type has ¬ operation" by {
        expectType (Collection) toHaveMethod "prefix¬"
    }
    specify "type literal has ¬ operation" by {
        expectType (t) toHaveMethod "prefix¬"
        expectType (u) toHaveMethod "prefix¬"
    }
}

method expectType (t) toHaveMethod (name) {
    def m = mirror.reflect(t)
    expect (m.methods.contains(name)) toBe true orSay "type has methods {m.methods}"
}
