import "gUnit" as gUnit is public
class tryInheritance {
    inherit gUnit.testRecordFor "foobar" message "nonesense"
    method myname {
        name
    }
}

def o = tryInheritance
print (o.myname)
