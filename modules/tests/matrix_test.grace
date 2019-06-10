dialect "minitest"
import "matrix" as matrix

method matrix⟦T⟧(r,c) { return matrix.matrix⟦T⟧(r,c) }
method Matrix⟦T⟧ { return matrix.Matrix⟦T⟧ }
method MatrixDimensionsError { return matrix.MatrixDimensionsError }

testSuiteNamed "matrix" with {
    def zeros = matrix⟦Number⟧(4, 3).zeros
    def ascending = matrix⟦Number⟧(3, 3).values([1, 2, 3, 4, 5, 6, 7, 8, 9])
    def letters = matrix⟦String⟧(2, 4).rows([ ["a", "b", "c", "d" ], ["e", "f", "g", "h"] ])
    def empty = matrix.empty
    
    test "Type Collection" by {
        assert (zeros) hasType (Collection⟦Number⟧)
        assert (ascending) hasType (Collection⟦Number⟧)
        assert (letters) hasType (Collection⟦String⟧)
    }
    
    test "Type Dictionary" by {
        assert (zeros) hasType (Matrix⟦Number⟧)
        assert (ascending) hasType (Matrix⟦Number⟧)
        assert (letters) hasType (Matrix⟦String⟧)
    }
    
    test "Not Type With Wombat" by {
        deny (zeros) hasType (Dictionary⟦String,Number⟧ & interface { wombat })
    }
    
    test "With" by {
        assert (matrix.with(1)) shouldBe (matrix(1,1).rows([ [1] ]))
    }
    
    test "WithAll" by {
        assert (matrix(3,1).withAll([1, 2, 3])) shouldBe (matrix(3,1).rows([ [1, 2, 3] ]))
        assert {matrix(3,2).withAll([1, 2, 3])} shouldRaise (MatrixDimensionsError)
    }
    
    test "FromColumns" by {
        assert (matrix(3,3).columns([ [1, 4, 7], [2, 5, 8], [3, 6, 9] ])) shouldBe (ascending)
        assert {matrix(2,3).columns([ [1, 2], [3, 4] ]) } shouldRaise (MatrixDimensionsError)
    }
    
    test "FromRows" by {
        assert (matrix(4,3).rows([ [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0] ])) shouldBe (zeros)
        assert {matrix(2,3).rows([ [1, 2], [3, 4] ]) } shouldRaise (MatrixDimensionsError)
    }
    
    test "Size" by {
        assert(zeros.size) shouldBe 12
        assert(ascending.size) shouldBe 9
    }
    
    test "NumRows" by {
        assert (zeros.numRows) shouldBe 4
        assert (ascending.numRows) shouldBe 3
        assert (letters.numRows) shouldBe 2
    }
    
    test "NumColumns" by {
        assert (zeros.numColumns) shouldBe 3
        assert (ascending.numColumns) shouldBe 3
        assert (letters.numColumns) shouldBe 4
    }
    
    test "At" by {
        assert ( zeros.atRow(1) column(1) ) shouldBe 0
        assert ( ascending.atRow(3) column(1) ) shouldBe 7
        assert { zeros.atRow(0) column(0) } shouldRaise (BoundsError)
    }
    
    test "AtXPutY" by {
        assert ( (zeros.atRow(3) column(2) put 9).atRow(3) column(2) ) shouldBe 9    
        assert ( (ascending.atRow(3) column(3) put 9).atRow(3) column(3) ) shouldBe 9
        assert ( letters.atRow(1) column (2) put "z") shouldBe 
            ( matrix(2, 4).rows([ ["a", "z", "c", "d" ], ["e", "f", "g", "h"] ]) )
        assert { letters.atRow(1) column (2) put 2 } shouldRaise (TypeError)
    }
    
    test "Row" by {
        assert (ascending.row(2)) shouldBe [4, 5, 6]
        assert (letters.row(1)) shouldBe ["a", "b", "c", "d"]
    }
    
    test "Column" by {
        assert (ascending.column(2)) shouldBe [2, 5, 8]
        assert (letters.column(4)) shouldBe ["d", "h"]
    }
    
    test "Rows" by {
        assert (ascending.rows) shouldBe ([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ])
        assert (letters.rows) shouldBe ([ ["a", "b", "c", "d" ], ["e", "f", "g", "h"] ])
    }
    
    test "Columns" by {
        assert (ascending.columns) shouldBe ([ [1, 4, 7], [2, 5, 8], [3, 6, 9] ])
        assert (letters.columns) shouldBe ([ ["a", "e"], ["b", "f"], ["c", "g"], ["d", "h"] ])
    }
    
    test "Plus" by {
        assert (ascending + matrix(3,3).zeros) shouldBe (ascending)
        assert (ascending + matrix(3,3).value(1)) 
            shouldBe (matrix(3,3).values([2, 3, 4, 5, 6, 7, 8, 9, 10]))
        assert {ascending + zeros} shouldRaise (MatrixDimensionsError)
        assert {ascending + 3} shouldRaise (TypeError)
        assert {3 + ascending } shouldRaise (TypeError)
    }
    
    test "Minus" by {
        assert (ascending - matrix(3,3).zeros) shouldBe (ascending)
        assert (ascending - matrix(3,3).value(1)) 
            shouldBe (matrix(3,3).values([0, 1, 2, 3, 4, 5, 6, 7, 8]))
        assert {ascending - zeros} shouldRaise (MatrixDimensionsError)
        assert {ascending - 3} shouldRaise (TypeError)
        assert {3 - ascending } shouldRaise (TypeError)
    }
    
    test "* with matrix" by {
        assert (ascending * matrix(3,3).zeros) shouldBe (matrix(3,3).zeros)
        assert (ascending * matrix(3,3).value(1)) shouldBe (ascending)
        assert {ascending * zeros} shouldRaise (MatrixDimensionsError)
    }
    
    test "* with scalar" by {
        assert (ascending * 2) shouldBe (matrix⟦Number⟧(3,3).values([2, 4, 6, 8, 10, 12, 14, 16, 18]))
        assert (2 * ascending) shouldBe (matrix⟦Number⟧(3,3).values([2, 4, 6, 8, 10, 12, 14, 16, 18]))
        assert (letters * 2) shouldBe (matrix⟦String⟧(2,4).rows([ ["aa", "bb", "cc", "dd" ], ["ee", "ff", "gg", "hh"] ]))
        assert (2 * letters) shouldBe (matrix⟦String⟧(2,4).rows([ ["aa", "bb", "cc", "dd" ], ["ee", "ff", "gg", "hh"] ]))
    }
    
    test "DivideBy with matrix" by {
        assert (ascending / matrix(3,3).value(1)) shouldBe (ascending)
        assert (ascending / matrix(3,3).value(2)) shouldBe
            (matrix(3,3).values ([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]))
        assert {ascending / zeros} shouldRaise (MatrixDimensionsError)
    }
    
    test "DivideBy with scalar" by {
        assert (ascending / 2) shouldBe (matrix⟦Number⟧(3,3).values([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]))
        assert {2 / ascending} shouldRaise (TypeError)
    }
    
    test "Iterator" by {
        def it = ascending.iterator
        assert (it.hasNext)
        assert (it.next) shouldBe 1
        assert (it.next) shouldBe 2
        assert (it.next) shouldBe 3
    }
    
    test "Do" by {
        var accum := []
        var n := 1
        ascending.do { v ->
            accum := accum ++ [v]
            assert (accum.size) shouldBe (n)
            n := n + 1
        }
        assert(accum) shouldBe (ascending >> list)
    }
    
    test "EmptyDo" by {
        empty.do {each -> failBecause "set.empty.do did with {each}"}
        assert (true)   // so that there is always an assert
    }
    
    test "Equality Empty" by {
        assert(empty == matrix(0,0).zeros) description "two empty matrices are not =="
        deny(empty ≠ matrix(0,0).zeros) description "two empty matrices are ≠"
    }
    
    test "Inequality Empty" by {
        deny(empty == matrix(1,1).value(1))
            description "empty matrix equals 1x1 matrix with value 1"
        assert(empty != matrix(1,1).value(2))
            description "empty matrix equals 1x1 matrix with value 2"
        deny(empty == 3) description "the empty matrix is equal to 3"
        assert (empty) shouldntBe (ascending)
    }
    
    test "Inequality Ascending" by {
        deny(ascending == zeros)
        assert(ascending != zeros)
    }
    
    test "Empty Iterator" by {
        deny (empty.iterator.hasNext)
            description "the empty bindings iterator has elements"
    }
    
    test "Chaining" by {
        zeros.atRow(1) column(1) put(1).atRow(1) column(2) put(2).atRow(1) column(3) put(3)
        assert (zeros.values >> set) shouldBe (set [0, 3, 1, 2])
    }
    
    test "asString" by {
        assert (ascending.asString) shouldBe "matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
        assert (zeros.asString) shouldBe "matrix [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]"        
    }
    
    test "AsStringEmpty" by {
        assert(empty.asString) shouldBe "matrix []"
    }
    
    test "++" by {
        assert (ascending ++ [10, 11, 12]) shouldBe 
            (matrix(4,3).values([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
        assert {ascending ++ [10, 11, 12, 13]} shouldRaise (MatrixDimensionsError)
        assert {empty ++ [1, 2, 3]} shouldRaise (MatrixDimensionsError)
    }
    
    test "transpose" by {
        assert (zeros.transpose.numRows) shouldBe 3
        assert (zeros.transpose.numColumns) shouldBe 4
        assert (ascending.transpose) shouldBe (matrix(3,3).rows([ [1, 4, 7], [2, 5, 8], [3, 6, 9] ]))
    }
    
    test "matrixMultiplication" by {
        def m1 = matrix(2,3).rows([ [1, 2, 3], [4, 5, 6] ])
        def m2 = matrix(3,2).rows([ [7, 8], [9, 10], [11, 12] ])
        assert (m1.times(m2)) shouldBe (matrix(2,2).rows([ [58, 64], [139, 154] ]))
        assert { zeros.times(ascending) } shouldRaise ( MatrixDimensionsError )
    }
    
    test "reshape" by {
        assert ( ascending.reshapeWithNumRows(1) numColumns(9) )
            shouldBe (matrix(1,9).rows([ [1, 2, 3, 4, 5, 6, 7, 8, 9] ]))
        assert { zeros.reshapeWithNumRows(3) numColumns(3) } shouldRaise ( MatrixDimensionsError )
    }
    
    test "reshapeWithAdditionalValues" by {
        assert ( ascending.reshapeWithNumRows(3) numColumns(4) additionalValues( [10, 11, 12] ) )
            shouldBe (matrix(3,4).rows([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ]))
        assert ( empty.reshapeWithNumRows(1) numColumns(3) additionalValues([1, 2, 3])) 
            shouldBe (matrix(1,3).rows([ [1, 2, 3] ]))
        assert { zeros.reshapeWithNumRows(4) numColumns(4) additionalValues([0, 0, 0]) } 
            shouldRaise ( MatrixDimensionsError )
    }
    
    test "addRow" by {
        assert ( zeros.addRow([0, 0, 0]) at(1).numRows ) shouldBe 5
        assert ( ascending.addRow([10, 11, 12]) at(4) ) shouldBe 
            (matrix(4,3).rows([ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ]))
        assert { zeros.addRow([0, 0, 0, 0]) at (2) } shouldRaise ( MatrixDimensionsError )
    }
    
    test "deleteRow" by {
        assert ( zeros.deleteRow(4).numRows ) shouldBe 3
        assert ( ascending.deleteRow(2) ) shouldBe (matrix(2,3).rows([ [1, 2, 3], [7, 8, 9] ]))
        assert { zeros.deleteRow(4) } shouldRaise ( BoundsError )
    }
    
    test "addColumn" by {
        assert ( zeros.addColumn([0, 0, 0, 0]) at(1).numColumns ) shouldBe 4
        assert ( ascending.addColumn([10, 11, 12]) at(4) ) shouldBe 
            (matrix(3,4).rows([ [1, 2, 3, 10], [4, 5, 6, 11], [7, 8, 9, 12] ]))
        assert { zeros.addColumn([0, 0, 0]) at (2) } shouldRaise ( MatrixDimensionsError )
    }
    
    test "deleteColumn" by {
        assert ( zeros.deleteColumn(2).numColumns ) shouldBe 2
        assert ( ascending.deleteColumn(2) ) shouldBe (matrix(3,2).rows([ [1, 3], [4, 6], [7, 9] ]))
        assert { zeros.deleteColumn(3) } shouldRaise ( BoundsError )
    }
    
    test "replaceRow" by {
        assert ( zeros.replaceRowAt(1) with([1, 1, 1]).numRows ) shouldBe 4
        assert ( ascending.replaceRowAt(2) with ([10, 11, 12]) ) shouldBe 
            (matrix(3,3).rows([ [1, 2, 3], [10, 11, 12] , [7, 8, 9] ]))
        // test that generic collection works (doesn't need indexing)
        assert ( zeros.replaceRowAt(1) with( set[2, 3, 4]).numRows ) shouldBe 4
        assert { zeros.replaceRowAt(2) with([0, 0, 0, 0]) } shouldRaise ( MatrixDimensionsError )
    }
    
    test "replaceColumn" by {
        assert ( zeros.replaceColumnAt(1) with([1, 1, 1, 1]).numColumns ) shouldBe 3
        assert ( ascending.replaceColumnAt(2) with ([10, 11, 12]) ) shouldBe 
            (matrix(3,3).rows([ [1, 10, 3], [4, 11, 6] , [7, 12, 9] ]))
        // test that generic collection works (doesn't need indexing)
        assert ( zeros.replaceColumnAt(1) with( set[2, 3, 4, 5]).numRows ) shouldBe 4
        assert { zeros.replaceColumnAt(2) with([0, 0, 0, 0, 0]) } shouldRaise ( MatrixDimensionsError )
    }
    
    test "copy" by {
        def ascendingCopy = ascending.copy
        assert ( ascendingCopy == ascending)
        ascendingCopy.atRow(1) column(1) put (5)
        deny ( ascendingCopy == ascending )
    }
}