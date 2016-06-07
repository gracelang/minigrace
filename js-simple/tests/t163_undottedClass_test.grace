def x = 4
class m {
    method a { x }
    method b { x + 1 }
}

print(m.a)
print(m.b)

def klass = object {
    class new(y) {
        method a { y }
        method b { y + 1 }
    }
    method zero {
        self.new(0)
    }
}

def t = klass.zero

print(t.a)
print(t.b)

