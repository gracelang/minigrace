
class A {
  method a {
    b
  }
  method b {
    print("A")
  }
}

class B {
  inherits A.new
  method b {
    print("B")
  }
}

B.new.a
