var a := object {
    var value := true
    method prefix! {
        self.value.not
    }
    method prefix!! {
        "OK"
    }
}
method areturner {
    a
}
print(!a)
print(!(areturner))
print(!!a)
