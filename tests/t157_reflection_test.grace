import "mirrors" as mi
import "gUnit" as gU
inherits gU.assertion.trait

def nm = mi.reflect(24)
//print "24's methods are: "
//print "     {nm.methodNames}"

def l = list.with(1,2,3)
def lm = mi.reflect(l)
//print "{l}'s methods are: "
//print "    {lm.methodNames}"

print "Object = {Object}"
print "Object has {Object.methodNames.size} typeMethods:"
self.assert (Object.methodNames) shouldBe (set.with("==","≠", "basicAsString", "!=", "asString", "::", "asDebugString"))
print "        \{==,≠,basicAsString,!=,asString,::,asDebugString\}"

def cm = mi.reflect(Collection)
//print "Collection's methods are: "
//print "    {cm.methodNames}"

//print "Collection's typeMethods are: "
//print "    {Collection.methodNames}"
//
//print "List's typeMethods are: "
//print "    {List.methodNames}"

print "List has {List.methodNames -- lm.methodNames} methods not understood by {l}"
//print "{l} has {lm.methodNames -- List.methodNames} not in List"
