var factory

factory := object {
    method create(n) {
        object {
            var value := n
            method +(other) {
                factory.create(self.value + other.value)
            }
            method asString {
                self.value.asString
            }
        }
    }
}

var a := factory.create(3)
var b := factory.create(4)
print(a)
print(b)
print(a + b)
