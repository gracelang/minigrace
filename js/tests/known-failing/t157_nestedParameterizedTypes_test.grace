type A⟦T⟧ = {
   m(x:T) → Done 
}

class a⟦T⟧(arg) → A⟦T⟧ {
   method m(x:T) → Done { print (x) }
   method asString { "an a({arg})" }
   print "T is {T}"
}
type C⟦X⟧ = Collection⟦X⟧
print(Collection)
print(Collection⟦Number⟧)
a ⟦String, Number⟧ "what"
def lst: A⟦A⟦Number⟧⟧ = a⟦A⟦Number⟧⟧ "double"
print (lst)
lst.m "greeting"    /// the argument to m is declared as a Number, but is not checked.
