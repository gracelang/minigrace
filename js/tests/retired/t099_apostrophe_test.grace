var x' := 1
def y' = 2
x' := y'

method test'(a') {
    return a'
}

print(x')
print(y')
print(test'(x'))

x' := object {
    method t' {
        return "OK"
    }
}

print("{x'.t'}")
