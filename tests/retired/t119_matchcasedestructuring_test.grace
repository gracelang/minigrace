type Pair = {
    left
    right
    extract
}
method tryMatch(o) {
    match(o)
        case { p : Pair(1, 2) -> print "The pair 1 and 2" }
        case { p : Pair(a : 5, b) -> print "Pair starting 5! ({a}, {b})" }
        case { p : Pair(a : Pair, b : Pair(c : 3, d)) ->
            print "Pair of pairs, second starting 3. {a} {b} {c} {d}" }
        case { p : Pair(a, b) -> print "({a}, {b}) from {p}" }
        case { p : Pair -> print "PAIR ({p.left}, {p.right})" }
}

class aPair.new(l, r) {
    def left is public = l
    def right is public = r
    def extract is public = [l, r]
    def asString is public = "aPair.new({l}, {r})"
}

tryMatch(aPair.new(1, 2))
tryMatch(aPair.new(3,4))
tryMatch(aPair.new(5,6))
tryMatch(aPair.new(7,8))
tryMatch(aPair.new(aPair.new(1, 2), aPair.new(3, 4)))
