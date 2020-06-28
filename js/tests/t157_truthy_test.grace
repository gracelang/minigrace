dialect "minispec"

def truthy = object {
    use equality
    use BasePattern
    method ifTrue(action) { action.apply }
    method ifFalse(action) { done }
    method ifTrue(action)ifFalse(_) { action.apply }
    method ifFalse(_)ifTrue(action) { action.apply }
    method asString { "not a Boolean, but behaves like true" }
    method hash { true.hash }
    method == (other) {
        match (other)
            case {b:Boolean -> b}
            else { false }
    }
    method not { falsy }
    method prefix ! { falsy }
    method &&(other) {
        match (other)
            case {tv:Boolean -> tv }
            case {block:Procedure0 -> block.apply}
    }
    method ||(other) { self }
    method matches(o) { self == o }

}
def falsy = object {
    use equality
    use BasePattern
    method ifFalse(action) { action.apply }
    method ifTrue(action) { done }
    method ifFalse(action)ifTrue(_) { action.apply }
    method ifTrue(_)ifFalse(action) { action.apply }
    method asString { "not a Boolean, but behaves like false" }
    method hash { false.hash }
    method == (other) {
        match (other)
            case {b:Boolean -> b.not}
            else { false }
    }
    method not { truthy }
    method prefix ! { truthy }
    method &&(other) { self }
    method ||(other) {
        match (other)
            case {tv:Boolean -> tv }
            case {block:Procedure0 -> block.apply}
    }
    method matches(o) { self == o }
}

method pass { assert(true) }

describe "alternative truth values" with {
    specify "type of truthy" by {
        expect (truthy) toHaveType (Boolean)
        expect (truthy) toHaveType (Pattern)
    }
    specify "type of falsy" by {
        expect (falsy) toHaveType (Boolean)
        expect (falsy) toHaveType (Pattern)
    }
    specify "if truthy happens" by {
        if (truthy) then {
            pass
        } else {
            failAndSay "truthy took the else branch"
        }
    }
    specify "if falsy happens" by {
        if (falsy) then {
            failAndSay "falsy took the then branch"
        } else {
            pass
        }
    }
    specify "and" by {
       expect (falsy && true) toBe false
       expect (falsy && false) toBe false
       expect (truthy && true) toBe true
       expect (truthy && false) toBe false
       expect (false && truthy) toBe false
       expect (false && falsy) toBe false
       expect (true && truthy) toBe true
       expect (true && falsy) toBe false
    }
    specify "or" by {
       expect (falsy || true) toBe true
       expect (falsy || false) toBe false
       expect (truthy || true) toBe true
       expect (truthy || false) toBe true
       expect (false || truthy) toBe true
       expect (false || falsy) toBe false
       expect (true || truthy) toBe true
       expect (true || falsy) toBe true
    }
    specify "equality" by {
       expect (falsy == true) toBe false
       expect (falsy == false) toBe true
       expect (truthy == true) toBe true
       expect (truthy == false) toBe false
       expect (false == truthy) toBe false
       expect (false == falsy) toBe true
       expect (true == truthy) toBe true
       expect (true == falsy) toBe false
    }
}

exit
