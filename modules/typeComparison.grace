#pragma noTypeChecks
import "mirrors" as mirror

method methodsIn(DesiredType) missingFrom (value) -> String {
    def vMethods = mirror.reflect(value).methodNames
    def tMethods = DesiredType.methodNames
    def missing = list(tMethods -- vMethods).sort
    if (missing.size == 0) then {
        ProgrammingError.raise "{value.asDebugString} seems to have all the methods of {DesiredType}"
    } else {
        var s := ""
        missing.do { each -> s := s ++ each }
            separatedBy { s := s ++ ", " }
        s
    }
}
method protocolOf(value) notCoveredBy (Q:Type) -> String  {
    var s := ""
    def vMethods = set(mirror.reflect(value).methodNames)
    def qMethods = set(Q.methodNames)
    def missing = list((vMethods -- qMethods).filter{m ->
        (! m.contains "$") && (m != "outer")}).sort
    if (missing.isEmpty.not) then {
        s := ""
        missing.do { each -> s := s ++ each }
            separatedBy { s := s ++ ", " }
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
