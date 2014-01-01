var x := object {
    method foo {
        print("Hello")
    }
}
x.foo
x := object {
    method bar {
        "World"
    }
}
print(x.bar)
