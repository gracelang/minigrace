class catClass { 
    method move { "walk" } 
}
trait catTrait { 
    method move { "walk" } 
}
class fishClass { 
    method move { "swim" } 
}
class fishTrait { 
    method move { "swim" } 
}

class catFish {
    inherits catClass
    uses catTrait
}

class fishCat {
    inherits fishClass
    uses catTrait 
}

class allTraits {
    uses catTrait
    uses fishTrait exclude move
}

class allTraits2 {
    uses fishTrait exclude move
    uses catTrait
}

//PPS: extra question for experts: if a syntatic class declaration is used to declare a trait,
//can that trait be “used” or must it be “inherited” ? 

class twoTraitsAndMove {
    uses fishClass alias fishMove = move
    uses catClass alias catMove = move
    method move {
        "{fishMove} {catMove}"
    }
}
class justInherits {
    inherits catClass
    method move { "young man's walk" }
}
class usesClasses {
    uses catClass
    uses fishClass exclude move
}

//tests - choose one, the result in symmetric semantics is always the same
//adding an alias or a exclude clause to either import is needed to fix this 

print(catFish.move)
print(fishCat.move)
print(allTraits.move)
print(allTraits2.move)
print(twoTraitsAndMove.move)
print(justInherits)
print(usesClasses.move)
