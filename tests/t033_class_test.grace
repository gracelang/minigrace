class Cat.new(namex : String) {
 def name : String = namex
 method purr {print("Purr") }
 method mew {print("Meow") }
}

var c := Cat.new("Macavity")

c.purr
c.mew
