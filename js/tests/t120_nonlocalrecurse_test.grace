
var theBlock

method bar(n) {
    if (n == 4) then {
        theBlock := { return "YE" }
    }
    if (n == 0) then {
        return "NO"
    }
    if (n == 1) then {
        theBlock.apply
    }
    "{bar(n - 1)}{n}"
}

print(bar(5))
