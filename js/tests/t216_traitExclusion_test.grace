dialect "minitest"

trait a {
    method border { }
    method size { 3 }
}

trait b {
    method color { }
    method size { 2 }
}

class shape {
    use a 
        alias asize = size
    use b alias bsize = size exclude size
    method draw { }
    method publicBsize { bsize }
    method size { asize + bsize }
}

testSuite {
    test "alias is confidential" by {
        assert {shape.bsize} shouldRaise (NoSuchMethod)
    }
    
    test "exclude does not exclude its alias" by {
        assert (shape.publicBsize) shouldBe 2
    }
     
    test "2 + 2 = 5" by {
        assert (shape.size) shouldBe 5
    }
}

