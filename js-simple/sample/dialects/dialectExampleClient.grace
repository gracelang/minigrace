dialect "dialectExample"
inherits prelude.methods

var a : Number := 23


method x(y:Number)-> Number {
    return y
}
print "{(x(2))}"
