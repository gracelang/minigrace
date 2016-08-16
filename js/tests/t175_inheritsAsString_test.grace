class nameTrait(n) {
    method asString { "my name is {n}" }
}

class boxNamed(n) {
    inherit nameTrait(n)
}

print(nameTrait("Joe"))
print(boxNamed("Alice"))
