method noType(a1) { a1 + 1 }
method numType(n1:Number) { n1 + 2 }
method new<T>(init:T) { init + 3 }

def t = new<Number>(5)
print "5 + 3 = {t}"
print "8+1 = {noType(8)}"
print "7 + 2 = {numType(7)}"

def s = new<String>(5)
