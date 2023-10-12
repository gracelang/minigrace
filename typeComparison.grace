#pragma noTypeChecks
dialect "standard"
import "mirror" as mirror

method methodsIn(DesiredType) missingFrom (value) -> String {
    def vMethods = mirror.reflect(value).methodNames >> set
    def tMethods = DesiredType.methodNames >> set
    def missing = list.withAll(tMethods -- vMethods).sort
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
    def vMethods = mirror.reflect(value).methodNames >> set
    def qMethods = Q.methodNames >> set
    def missing = list.withAll(vMethods -- qMethods).sort
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
