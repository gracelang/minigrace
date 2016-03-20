dialect "minitest"

def empty = object {
    inherits Singleton.new
    method asString -> String {"empty"}
}

def full = Singleton.named "full"

type OptionNumber =  Number | empty | full

def items = list [6, 7, empty, 9, full]

def block1 = { x:OptionNumber ->
    match(x)
      case {n:Number -> "Number {n}"}
      case {y:empty -> "Singleton {y}"}
      case {z:full -> "Singleton {z}"}
      case {_ -> "should not happen"}
}

def block3 = {a:String, n, b:Boolean ->
    "this is the block body; arguments were {a}, {n} and {b}."
}

testSuite {
    test "number" by {
        assert(block1.apply 6) shouldBe "Number 6"
    }
    
    test "empty" by {
        assert(block1.apply(empty)) shouldBe "Singleton empty"
    }
    
    test "full" by {
        assert(block1.apply(full)) shouldBe "Singleton full"
    }
    
    test "type error" by {
        assert {block1.apply "hello"} shouldRaise (TypeError)
    }
    
    test "3 arguments good" by {
        assert(block3.apply("hi", 56, true)) shouldBe 
            "this is the block body; arguments were hi, 56 and true."
    }

    test "3 arguments, 3rd bad" by {
        assert {block3.apply("hi", 56, 42)} shouldRaise (TypeError)
    }

    test "3 arguments, 1st bad" by {
        assert {block3.apply(true, 56, true)} shouldRaise (TypeError)
    }
}


