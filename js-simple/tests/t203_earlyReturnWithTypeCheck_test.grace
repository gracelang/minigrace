var l: List<Number> := list [1, 3]

// The point of this test is to see if doing a type-check on the method
// argument xs disrupts the early-return logic.   The global variable
// invocationCount needs to be cached and incremented at the very start
// of a method, or else the value cached by callmethod and the value
// cached by the method itself will be out of step.

method isLegal (xs:List<Number>) -> Boolean {
    for (xs) do {x:Number ->
        if ((x % 2) == 1) then {
            return false
        }
    }
    true
}

print(isLegal(l))
