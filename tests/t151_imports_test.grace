import "mgcollections" as mgc
import "math" as math
import "mirrors" as mi
def mm = mi.reflect(math)
print "math's methods are: "
for (mm.methods) do { each ->
    print "    {each.name}"
}
print "sqrt(16) = {math.sqrt(16)}"
print "sin(90°) = {math.sin(3.1415926535897932/2)}"
print "sin(0) = {math.sin(0)}"
