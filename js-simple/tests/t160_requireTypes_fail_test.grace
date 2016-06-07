dialect "requireTypes"

def x:Number = 3
def y = "Hello"
match(x)
    case { 3 -> print "It's 3" }
    case { _ -> print "It's some other number" }

print "Done"

