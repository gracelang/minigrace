method foo(a)bar(b) {
    print(a + b)
}
foo(3)bar(5)

const a := object {
    var value := 4
    method valueBetween (lower) and (upper) {
        (self.value >= lower) & (self.value <= upper)
    }
}

print(a.valueBetween(3)and(5))
print(a.valueBetween (1) and (3))
