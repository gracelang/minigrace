def testObj = object {
    def a is public = "OK"
    def b is public = true
    def a is public = "nok OK"     // should be an error
}

print(testObj.a)
