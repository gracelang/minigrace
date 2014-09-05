var testFactory

testFactory := object {
    method create(n) {
        object {
            var value is readable := n
            method +(other) {
                testFactory.create(self.value + other.value)
            }
            method asString {
                self.value.asString
            }
        }
    }
}

var a := testFactory.create(3)
var b := testFactory.create(4)
print(a)
print(b)
print(a + b)
