class aCat.named(name') {
    def name = name'
    method describe {
        print "A cat called {name}"
    }
}

def myCat = aCat.named "Timothy"
def yourCat = aCat.named "Gregory"
myCat.describe
yourCat.describe
