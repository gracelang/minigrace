def x = object {
    method y -> String { "ok" }
}

if (type { y -> String }.match(x)) then {
    print(x.y)
}

match(x)
    case { z : type { y -> String} -> print(z.y) }

