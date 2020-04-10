// This should fail to compile because `labeled.ofElementType(_)labeled(_)`,
// which is inherited in class buttonWithLabel, isn't fresh.
// But it doesn't: it compiles OK and fails at execution time with
//     ProgrammingError on line 34 of t145_deepinherits_fail_test: 
//     attempting to inherit from 'ofElementType(_)labeled(_)' on a labeled. 
//     This is not a fresh method. 
// when the inheritance is attempted.  See minigrace issue #164

// Replacing the definition of `ofElementType(_)labeled(_)` with the
// commented-out class will let this program run, but that's not the point!

def labeled = object {
    class fromElement(element') {
        method labelElement is confidential {
            self.element
        }
    }

    class ofElementType(elementType : String) {
        inherit fromElement("some element")
        var label := "foo"
    }

    method ofElementType(elementType : String) labeled(label' : String) {
        def result = ofElementType(elementType)
        result.label := label'
        self
    }
//    class ofElementType(elementType : String) labeled(label' : String) {
//        inherit ofElementType(elementType)
//        self.label := label'
//    }
}

class buttonWithLabel(label' : String) {
    inherit labeled.ofElementType("button") labeled(label')

    method asString {
        "a button labeled: {self.label}"
    }
}

def b = buttonWithLabel "bar"
print(b)
