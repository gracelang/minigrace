import "mirrors" as mirror
import "newCollections" as nc

method compareType(DesiredType) and (value) -> String {
    var s
    def vMethods = mirror.reflect(value).methodNames
    def tMethods = DesiredType.methodNames
    def missing = tMethods -- vMethods
    if (missing.size == 0) then {
        s := "{value} has all the methods of {DesiredType}"
    } else {
        s := "{value} is missing "
        missing.do { each -> s := s ++ each } 
            separatedBy { s := s ++ ", " }
    }
    var extra := (vMethods -- tMethods)
    print "extra methods: {extra}"
    extra := extra.filter{m -> ! m.endsWith "()object"}

    if (extra.size == 0) then {
        s := s ++ "\n{value} has no extra methods beyond {DesiredType}"
    } else {
        s := s ++ "\n{value} has extra methods "
        extra.do { each -> s := s ++ each }
            separatedBy { s := s ++ ", " }
    }
    return s
}


def s1 = nc.sequence.with(4)
def s2 = s1.filter{ x -> true }
def l1 = nc.list.with(2)

print(compareType(nc.Sequence) and (s1))
print(compareType(nc.LazySequence) and (s2))
print(compareType(nc.List) and(l1))
