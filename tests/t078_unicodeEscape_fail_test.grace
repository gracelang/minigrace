def s1 = "String with a malformed unicode escape \u009x in it"
// \u must be followed by exactly 4 hex digits
print (s1)
