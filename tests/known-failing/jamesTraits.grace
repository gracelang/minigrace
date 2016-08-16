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
    inherit catClass
    use catTrait
}

class fishCat {
    inherit fishClass
    use catTrait
}

class allTraits {
    use catTrait
    use fishTrait exclude move
}

class allTraits2 {
    use fishTrait exclude move
    use catTrait
}

//PPS: extra question for experts: if a syntatic class declaration is used to declare a trait,
//can that trait be “used” or must it be “inherited” ? 

class twoTraitsAndMove {
    use fishClass alias fishMove = move
    use catClass alias catMove = move
    method move {
        "{fishMove} {catMove}"
    }
}
class justInherits {
    inherit catClass
    method move { "young man's walk" }
}
class useClasses {
    use catClass
    use fishClass exclude move
}

//tests - choose one, the result in symmetric semantics is always the same
//adding an alias or a exclude clause to either import is needed to fix this 

print(catFish.move)
print(fishCat.move)
print(allTraits.move)
print(allTraits2.move)
print(twoTraitsAndMove.move)
print(justInherits)
print(useClasses.move)
