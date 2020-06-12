dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle

use intrinsic.annotations
use basicTypesBundle.open

trait open {

    trait equality {
        method == (other) is required
        method hash is required    // should obey invariant (a == b) => (a.hash == b.hash)
        method ≠ (other)  { (self == other).not }
        method :: (obj) { binding.key (self) value (obj) }
        method matches (other) { self == other }
    }

    trait identityEquality {
        use equality
        method == (other) { self.isMe(other) }
        method hash { self.myIdentityHash }
    }

    class binding⟦K, T⟧ {
        method asString { "the binding factory" }

        class key(k)value(v) {
            use equality
            def key is public = k
            def value is public = v
            method asString { "{key}::{value}" }
            method asDebugString { "{key.asDebugString}::{value.asDebugString}" }
            method hash { intrinsic.hashCombine (key.hash, value.hash) }
            method == (other) {
                match (other)
                    case { o:Binding -> (key == o.key) && (value == o.value) }
                    else { false }
            }
        }
    }
}
