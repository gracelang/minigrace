def empty = object {
    inherits singleton.new
    method asString -> String {"empty"}
}

type OptionNumber =  Number | empty

def items = list.with(6, 7, empty, 9, "Hello")

items.do { x:OptionNumber ->
    match(x) 
      case {n:Number -> print(n)}
      case {y:empty -> print (y)}
      case {_ -> print "should not happen}
}