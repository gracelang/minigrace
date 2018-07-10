def x = object {
    method y -> String { "ok" }
}

if (interface { y -> String }.match(x)) then {
    print(x.y)
}

match(x)
    case { z : interface { y -> String} -> print(z.y) }

