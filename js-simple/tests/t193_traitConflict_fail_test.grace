trait catTrait {
    method move { "walk" } 
}
trait fishTrait {
    method move { "swim" } 
}
class allTraits {
    use catTrait
    use fishTrait
}

print(allTraits.move)
