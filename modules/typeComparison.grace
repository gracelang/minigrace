#pragma noTypeChecks
import "mirrors" as mirror

method methodsIn(DesiredType) missingFrom (value) -> String {
    def vMethods = mirror.reflect(value).methodNames
    def tMethods = DesiredType.methodNames
    def missing = list.withAll((tMethods -- vMethods).filter{m ->
        (! m.contains "$")}).sort
    def n = missing.size
    if (n == 0) then {
        ProgrammingError.raise "{value.asDebugString} seems to have all the methods of {DesiredType}"
    }
    var s := ""
    missing.keysAndValuesDo { ix, each ->
        s := s ++ each
        if (ix == (n - 1)) then {
            if (n > 2) then {
                s := s ++ ", and "      // Oxford comma
            } else {
                s := s ++ " and "
            }
        } elseif { ix < n } then {
            s := s ++ ", "
        }
    }
    return s
}
method protocolOf(value) notCoveredBy (Q:Type) -> String  {
    def vMethods = set.withAll(mirror.reflect(value).methodNames)
    def qMethods = set.withAll(Q.methodNames)
    def missing = list.withAll((vMethods -- qMethods).filter{m ->
        (! m.contains "$")}).sort
    def n = missing.size
    if (n == 0) then { return "" }
    var s := ""
    missing.keysAndValuesDo { ix, each ->
        s := s ++ each
        if (ix == (n - 1)) then {
            if (n > 2) then {
                s := s ++ ", and "      // Oxford comma
            } else {
                s := s ++ " and "
            }
        } elseif { ix < n } then {
            s := s ++ ", "
        }
    }
    return s
}

method canonical(name) -> String {
    def left1 = name.indexOf "(" ifAbsent { return name }
    var cName := ""
    var ch
    def nameI = name.iterator
    while { nameI.hasNext } do {
        ch := nameI.next
        cName := cName ++ ch
        if (ch == "(") then {
            ch := nameI.next
            if (ch.startsWithDigit.not) then {
                RequestError.raise "malformed numeric method name {name}"
            }
            var n := ch.asNumber
            while {
                ch := nameI.next
                ch.startsWithDigit
            } do {
                n := (n * 10) + ch.asNumber
            }
            cName := cName ++ "_" ++ (",_" * (n-1)) ++ ")"
            if (ch ≠ ")") then { RequestError.raise "malformed numeric method name {name}" }
        }
    }
    cName
}
