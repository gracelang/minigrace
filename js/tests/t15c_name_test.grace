dialect "standard"
import "mirror" as m
import "unicode" as u
import "collections" as collections

print "Hello, world!"
print "Built-in: EnvironmentException = {EnvironmentException}"
print "Standard: BasePattern = {BasePattern}"
print "Library module: unicode = {u}"
print "Library module: mirror = {m}"
print "Collections: (factory) list = {collections.list}"
print "StdPrel: 5@6 = {5@6}"
print "StdPrel: Object = {Object}"
print "StdPrel: Type = {Type}"

def wombat = object {
    method foo { "foo" }
    method asString { "a custom object" }
}
print (wombat.asString)
print (wombat.asDebugString)

class koala {
    method bar { "bar" }
}
print (koala.asString)
print (koala.asDebugString)

def african = object {
    class elephant {
        method bar { "bar" }
    }
}
print (african.elephant.asString)
print (african.elephant.asDebugString)
