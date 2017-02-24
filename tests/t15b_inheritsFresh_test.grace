import "gUnit" as gUnit
class tryInheritance {
    inherit gUnit.testRecordFor "foobar" message "nonesense"
    method myname {
        name
    }
}

def o = tryInheritance
print (o.myname)
