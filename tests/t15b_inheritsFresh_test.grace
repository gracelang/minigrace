import "gUnit" as gUnit
class tryInheritance.constru {
    inherit gUnit.testRecordFor "foobar" message "nonesense"
    method myname {
        name
    }
}

def o = tryInheritance.constru
print (o.myname)
