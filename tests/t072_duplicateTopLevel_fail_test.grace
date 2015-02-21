method a { print "OK" }
method b {}
method a { print "not OK" }     // should be an error

a

