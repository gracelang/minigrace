factory method nameTrait(n) {
    method asString { "my name is {n}" }
}

factory method boxNamed(n) {
    inherits nameTrait(n)
}

print(nameTrait("Joe"))
print(boxNamed("Alice"))
