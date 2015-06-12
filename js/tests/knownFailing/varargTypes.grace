~/method v(*s:String)w(n:Number) {
  print "s.size = {s.size}, n = {n}"
}

v()w(17)      // this works
v("Hello")w(17)   // this gives: TypeError at line 6 of varargTypes: expected type for argument n (1) of v()w.
v("Hello", "there")w(17)   // as does this
