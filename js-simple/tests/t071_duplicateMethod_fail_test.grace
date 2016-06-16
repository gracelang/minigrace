def testObj = object {
    method a { print "OK" }
    method b {}
    method a {}     // should be an error
}

print(testObj.a)
