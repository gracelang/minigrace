var x := object {
    var val := 1
    method foo {
        print(self.val)
        self.val := self.val + 1
    }
}
x.foo
x.foo
x.foo
