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
            method with'(*a:T) -> Unknown { self.withAll(a) }
            method empty' -> Unknown { self.with() }
        }
    }
}


class collectionFactory.trait<T> {
    method withAll(elts) -> Unknown { abstract }
    method with(*a:T) -> Unknown { self.withAll(a) }
    method empty -> Unknown { self.with() }
}

collFact.trait.with'(1, 2, 3)

collectionFactory.trait.with(1, 2, 3)
