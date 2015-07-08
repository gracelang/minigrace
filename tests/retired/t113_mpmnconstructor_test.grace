
class aCat.named(aName) coloured (aColour) {
    def colour = aColour
    def name = aName
    var miceEaten := 0
    method describe {
        print "{name} is a {colour} cat"
    }
}

def myCat = aCat.named "Timothy" coloured ("black")
def yourCat = aCat.named "Gregory" coloured ("tortoiseshell")

myCat.describe
yourCat.describe
