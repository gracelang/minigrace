import "gUnit" as gUnit is public
class tryInheritance.constru {
    inherit gUnit.testRecordFor "foobar" message "nonesense"
    method myname {
        name
    }
}

def o = tryInheritance.constru
print (o.myname)
