def ClassWithPrivate = object {
  method new {
     return (
        object {// Private parts
           var secret := 0
           method incSecret { secret := secret + 1 }
           def inner is public = object {
              method getSecret { secret }
              method tick { incSecret }
              def NAME = "inner"
           }
           def NAME = "ANON"
         }
    ).inner
  }
  def NAME = "ClassWithPrivate"
}
def x1 = ClassWithPrivate.new
print (x1.getSecret)
x1.tick
print (x1.getSecret)
def x2 = ClassWithPrivate.new
x2.tick
x2.tick
x2.tick
x2.tick
x2.tick
print (x2.getSecret)
print (x1.getSecret)
x1.tick
print (x1.getSecret)
x1.tick
print (x1.getSecret)
