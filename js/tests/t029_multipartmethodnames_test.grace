method foo(a)bar(b) {
    print(a + b)
}
foo(3)bar(5)

def x = object {
    var value := 4
    method valueBetween (lower) and (upper) {
        (self.value >= lower) && (self.value <= upper)
    }
}
method sumOf(a,b)isSumOf(c,d) {
    (a + b) == (c + d)
}

print(x.valueBetween(3)and(5))
print(x.valueBetween (1) and (3))
print(sumOf(3,4)isSumOf(2,5))
