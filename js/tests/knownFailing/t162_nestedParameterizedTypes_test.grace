type A<T> = {
   m(x:T)-> Done 
}

class a.new<T> -> A<T> {
   method m(x:T) -> Done {print (x)}
}

def lst: A<A<Number>> = a.new<A<Number>>
print (lst)
