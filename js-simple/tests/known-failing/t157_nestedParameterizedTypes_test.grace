type A<T> = {
   m(x:T)-> Done 
}

class a<T> -> A<T> {
   method m(x:T) -> Done {print (x)}
   method asString { "an a" }
}

def lst: A<A<Number>> = a<A<Number>>
print (lst)
