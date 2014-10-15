def empty = object {
    inherits Singleton.new
    method asString -> String {"empty"}
}

type OptionNumber =  Number | empty

def items = list.with(6, 7, empty, 9, "Hello")

items.do { x ->
    try {
        def tx : OptionNumber = x
        match(x) 
          case {n:Number -> print("Number {n}")}
          case {y:empty -> print (y)}
          case {_ -> print "should not happen"}
    } catch { ex:TypeError -> print "{ex.exception}: {ex.message}"
    }
}
