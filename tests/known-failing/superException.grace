//This program ought to say:
//  e == false
//  caught Exception: it's not empty
//but actually says (with the C backend)
//  e == false
//  minigrace: Program superException exited with error 11.
//The exit 11 (a segmentation fault) occurs when the exception is raised

class emptyness {
    method size { abstract }
    // method isEmpty { { return size <= 0 }.apply }  this version is OK!
    method isEmpty { try {return size <= 0} catch {_ -> true} }
    // the return from inside the try is essential to cause the segfault.
}

class holder(val) {
    inherit emptyness
    method size { 1 }
    method value { val }
    // method isEmpty { size <= 0 }  isEmpty must be inherited to cause the segfault.
}

try {
    def e = holder(4).isEmpty
    print "e == {e}"
    Exception.raise "it's not empty"
} catch { 
    ex -> print "caught {ex}" 
}

