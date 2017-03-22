dialect "gradualTypes"
var y: Number
var x: Number | String

x := 3 + 7

print(x)

type A = {
    m → Number
}

type B = {
    s → String
}

def o: A | B = object {
//    method m → Number {77}
    method s → String {"hello"}
}

def os: String = match(o) 
    case {oa: A → "a"}
    case {ob: B → "b"}
    
print(os)
