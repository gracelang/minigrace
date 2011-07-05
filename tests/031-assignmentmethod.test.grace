var a := object {
    method field:=(val) {
        print("assigned " ++ val ++ " to field")
    }
}

a.field := 3
