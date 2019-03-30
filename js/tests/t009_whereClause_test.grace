type Hashable = interface {
    = (other:Object) → Boolean
    hash → Number
}

class set {
    method of⟦T where T <* Hashable⟧ → Set⟦T⟧ {
        collections.set.empty
    }
}

def newSet = set.of⟦Number⟧
newSet.add 1
newSet.add 2
newSet.remove 2
print(newSet)

