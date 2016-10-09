dialect "minitest"

// Authored by Lydia Simmons & Andrew P. Black

def MaxtixDimensionError = ProgrammingError.refine "matrix has wrong dimension"

class rows(rowCount:Number) columns(columnCount:Number) with (values:Iterable) {
    // Creates a new matrix initializes it with values by row, top to bottom
    // If there are insufficient values, the final value is repeated.
    // If values is empty
    def rows = emptyList
    def valueIter = values.iterator
    if (valueIter.hasNext.not) then { RequestError.raise 
        "at least one initial value must be supplied to `rows(_)columns(_)with(_)`"
    }
    var nextValue := valueIter.next
    (1..rowCount).do { rowNum ->
        rows.at(rowNum) put (emptyList)
        (1..columnCount).do { columnNum ->
            rows.at(rowNum).at(columnNum) put (nextValue)
            if (valueIter.hasNext) then { nextValue := valueIter.next }
        }
    }
    
    method + (other) {
        //Returns the sum of this matrix and other
        def sum = rows(rowCount) columns(columnCount) with [0]
        (1..rowCount).do { i ->
            (1..columnCount).do { j ->
                sum.at(i, j) put (rows.at(i).at(j) + other.at(i,j))
            }
        }
        sum
    }
    
    method - (other) {
        //Returns the difference of this matrix and other
        def diff = rows(rowCount) columns(columnCount) with [0]
        (1..rowCount).do { i ->
            (1..columnCount).do { j ->
                diff.at(i, j) put (rows.at(i).at(j) - other.at(i,j))
            }
        }
        diff
    }
    
    method reversePlusNumber (n) {
        // implements n + self
        def sum = rows(rowCount) columns(columnCount) with [0]
        (1..rowCount).do { i ->
            (1..columnCount).do { j ->
                sum.at(i, j) put (n + rows.at(i).at(j))
            }
        }
    }
    
    method * (other) {
        // Returns this matrix * other (another matrix) as a new object
        match (other)   
            case { n:Number -> self.reverseTimesNumber(n) }
            case { _ -> other.reverseTimesMatrix(self) }
            // to use doible-dispatch, we would need to add a
            // reverseTimesMatrix method to numbers
    }
    
    method reverseTimesMatrix (m) {
        // returns m * self as a new object
        if (m.numColumns ≠ self.numRows) then {
            MaxtixDimensionError.raise "in multiply"
        }
        def product = rows(m.numRows) columns(self.numColumns) with [0]
        var dotProduct
        (1..m.numRows).do { i ->
            (1..self.numColumns).do { j ->
                dotProduct := 0
                (1..numRows).do { k ->
                    dotProduct := dotProduct + m.at(i,k) * rows.at(k).at(j)
                }
                product.at(i, j) put(dotProduct)
            }
        }
        product
    }
    
    method reverseTimesNumber(n:Number) {
        //Returns this n * matrix as a new object
        def product = rows(rowCount) columns(columnCount) with [0]
        (1..rowCount).do { i ->
            (1..columnCount).do { j ->
                product.at(i, j) put (n * rows.at(i).at(j))
            }
        }
        product
    }
    
    method numRows {
        rowCount
    }
    
    method numColumns {
        columnCount
    }
    
    method at(i,j) {
        rows.at(i).at(j)
    }
    
    method row(m) {
        // returns the n_th row of this matrix
        rows.at(m).copy
    }
    
    method column(n) {
        // returns the m_th column of this matrix
        list((1..rowCount).map { m -> self.at(m, n) })
    }
    
    method at(i,j) put (val) {
        rows.at(i).at(j) put (val)
    }
    
    method asString {
        //Entries in a row are separated by two spaces; rows are separated by a \n
        var out := ""
        rows.do { r ->
            r.do { entry ->  out := out ++ entry  } separatedBy {out := out ++ "  "}
        } separatedBy { out := out ++ "\n" }
        out
    }
}
    

    
