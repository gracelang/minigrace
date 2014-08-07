class Cat.new(name' : String) {
 def name : String = name'
 method purr {print("Purr") }
 method mew {print("Meow") }
}

var c := Cat.new("Macavity")

c.purr
c.mew
