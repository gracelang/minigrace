trait catTrait {
    method move { "walk" } 
}
trait fishTrait {
    method move { "swim" } 
}
class allTraits {
    uses catTrait
    uses fishTrait
}

print(allTraits.move)
