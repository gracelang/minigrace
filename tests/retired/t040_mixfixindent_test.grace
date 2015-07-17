method assertValue(v) andThen (trueBlock) otherwise (falseBlock) {
    if (v) then {
        trueBlock.apply
    } else {
        falseBlock.apply
    }
}

assertValue(true)
    andThen { print "It's true!" }
    otherwise { print "It's false!" }
assertValue(false)
    andThen { print "This one's true!" }
    otherwise { print "This one's false!" }
