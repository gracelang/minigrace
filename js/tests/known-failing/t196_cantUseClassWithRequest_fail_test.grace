class cat {
    method move { "walk" }
    print "A cat was created"   // makes this not a trait.
}
class dancingCat { 
    use cat        // this should fail, because cat is not a trait.
    method move {  "dance" }
}
