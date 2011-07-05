class Cat { name' : String ->
 const name : String := name'
 method purr() {print("Purr") }
 method mew() {print("Meow") }
}

var c : Cat := Cat.new("Macavity")

c.purr()
c.mew()
