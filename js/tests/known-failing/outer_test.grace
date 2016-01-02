#pragma NativePrelude

def SubobjectResponsibility = ProgrammingError.refine "SubobjectResponsibility"

method abstract {
    // repeated in StandardPrelude
    SubobjectResponsibility.raise "abstract method not overriden by subobject"
}

def collFact = object {
    method asString { "object collFact" }
    method trait<T> {
        object {
            method withAll'(elts) -> Unknown { abstract }
            method empty' -> Unknown { self.withAll( [] ) }
        }
    }
}


class collectionFactory.trait<T> {
    method withAll(elts) -> Unknown { abstract }
    method empty -> Unknown { self.withAll( [] ) }
}

collFact.trait.withAll'( [1, 2, 3] )

collectionFactory.trait.withAll( [1, 2, 3] )
