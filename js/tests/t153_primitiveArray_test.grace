def a = primitiveArray.new(4)
print(a)
print(a.asDebugString)
a.at 2 put 1
print(a.at(2))
a.at 1 put "Hello"
a.at 3 put "is \"foo\\bar\" a word?"
a.at(0) put (true)
print(a)
print(a.asDebugString)
print "a.size = {a.size}"
