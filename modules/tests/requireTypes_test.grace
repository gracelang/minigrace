dialect "requireTypes"

def x:Number = 3
def y:String = "Hello"
match(x)
    case { 3 -> print "It's 3" }
    else { print "It's some other number" }

print "Done"

