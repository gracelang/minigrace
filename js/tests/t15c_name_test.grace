import "mirrors" as m
import "unicode" as u
print "Hello, world!"
print "Built-in: EnvironmentException = {EnvironmentException}"
print "StdPrel: BasicPattern = {BasicPattern}"
print "Built-in module: unicode = {u}"
print "Built-in module: mirrors = {m}"
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
