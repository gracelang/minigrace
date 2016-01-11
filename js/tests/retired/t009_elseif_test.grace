if (false) then {
    print("Fail 1 then")
} elseif {true} then {
    print("OK 1 elseif")
}
if (true.not) then {
    print("Fail 2 then")
} elseif {true && false} then {
    print("Fail 2 elseif1")
} elseif {false || true} then {
    print("OK 2 elseif2")
}
if (false && false) then {
    print("Fail 3 then")
} elseif {false || false} then {
    print("Fail 3 elseif")
} else {
    print("OK 3 else")
}
