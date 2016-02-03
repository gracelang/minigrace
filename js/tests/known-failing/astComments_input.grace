//Pre-comment def x
def x = 10
//Post-comment def x
var y := 47
//Post-comment var y

var z := 42
//Post-comment var z

def w = 10
//Post-comment def w
var q

//Pre-comment one type Person after blank
//Pre-comment two type Person
type Person = {
//Post-comment type Person

    //pre-comment for methodtype name
    name -> String //sameline comment for methodtype name
    //post-comment for methodtype name
    //post-comment for methodtype name
    age -> Number
}
//post-Comment on typeDec person
method m -> Done { //post-comment (sameline) method m
    //post-comment one method m
    //post-comment two method m
    print "hello"
    //Comment on request of print (should not be captured)
}

//pre-comment one class person
//pre-comment two class person
class person(name', age') -> Person {
   // post-comment on class person
   def name:String is public = name'
   // post-comment on def name'
   def age:Number is public = age'
}