// This is a test of a module with a name that's not an id.
// It also tests that `self` is correctly bound at the
// top level, and in a top-level method, to the module
// object.  It also checks that outer from a nested
// object also refers to the module object.

use prelude.methods
    // the implementation of inheit in the C backend
    // replaces the object under construction by the
    // inherited object.  So this inherit statment
    // is here to check that self is still correctly
    // bound — which it is

method three { "three " }
method this { self }    // should print as moduleAsStringIsOverridden, but doesn't
def two = object  {
    method asString { "two " }
    method thisModule { this }  // compiles to outer.this
}
class count {
    method asString { "one " ++ two ++ three }
}
print(self)
print(two.thisModule)
print(count)
