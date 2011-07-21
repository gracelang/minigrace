def a = object {
 method succeeded { return true }
}
if (a.succeeded) then {
    print("OK")
} else {
    print("Not OK")
}
