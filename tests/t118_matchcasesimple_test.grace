type Pair = {
    left -> Number
    right -> Number
}
method tryMatch(o) {
    match(o)
        case { 1 -> "ONE" }
        case { _ : Number -> "NUMBER" }
        case { "hello" -> "HELLO" }
        case { x : String -> "STRING '{x}'" }
        case { p : Pair -> "PAIR ({p.left}, {p.right})" }
}

print(tryMatch 1)
print(tryMatch 2)
print(tryMatch "hello")
print(tryMatch "world")
print(tryMatch(
    object {
        def left is public = 1
        def right is public = 2
    })
)
