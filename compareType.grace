import "mirrors" as mirror
import "newCollections" as nc

method compareType(DesiredType:Type) and (value) -> String {
    var s
    def vMethods = nc.set.withAll(mirror.reflect(value).methodNames)
    def tMethods = nc.set.withAll(DesiredType.methodNames)
    def missing = tMethods -- vMethods
    if (missing.size == 0) then {
        s := "{value.asDebugString} has all the methods of {DesiredType}"
    } else {
        s := "{value.asDebugString} is missing "
        missing.do { each -> s := s ++ each } 
            separatedBy { s := s ++ ", " }
    }
    var extra := (vMethods -- tMethods)
    extra := extra.filter{m -> (! m.endsWith "()object") && (m != "outer")}.asSet
    if (extra.size == 0) then {
        s := s ++ "\n{value.asDebugString} has no extra methods beyond {DesiredType}"
    } else {
        s := s ++ "\n{value.asDebugString} has extra methods "
        extra.do { each -> s := s ++ each }
            separatedBy { s := s ++ ", " }
    }
    return s
}


def s1 = nc.sequence.with(4)
def s2 = s1.filter{ x -> true }
def l1 = nc.list.with(2)
def st = nc.set.with("a", "b")
def d1 = nc.dictionary.with("one"::1, "two"::2, "three"::3)

print(compareType(nc.Sequence) and (s1))
print(compareType(nc.Enumerable) and (s2))
print(compareType(nc.List) and(l1))
print(compareType(nc.Set) and(st))
print(compareType(nc.Sequence) and (nc.range.from 1 to 10))
print(compareType(nc.Dictionary) and (d1))
