type A = {
    foo(s : String) -> Number
}
def a : A = object {
    method foo(s : String) -> String {
        s
    }
}
