
class A.new {
  method a {
    b
  }
  method b {
    print("A")
  }
}

class B.new {
  inherit A.new
  method b {
    print("B")
  }
}

B.new.a
