var a := object {
    def contents is public = [1, 2, 3]
    method field:=(val) {
        print("assigned " ++ val ++ " to field")
    }
    
    method []:=(index, newVal) {
        print "assigned {newVal} to element {index}"
        contents.at (index) put (newVal)
    }
    
    field := 7
    self[2] := 20

}

a.field := 3
a[1] := 10
print(a.contents)
