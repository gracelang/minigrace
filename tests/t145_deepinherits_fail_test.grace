def labeled = object {
  factory method fromElement(element') {
    method labelElement is confidential {
      self.element
    }
  }

  factory method ofElementType(elementType : String) {
    inherits fromElement("some element")
    var label := "foo"
  }

  factory method ofElementType(elementType : String) labeled(label' : String) {
    inherits ofElementType(elementType)
    self.label := label'
  }
}

class button.labeled(label' : String) {
  inherits labeled.ofElementType("button") labeled(label')

  method asString {
    "a button labeled: {self.label}"
  }
}

def b = button.labeled "bar"
print(b)
