// This module defines a 2-dimensional matrix datatype

import "collectionsPrelude" as cp

type Matrix⟦T⟧ = Collection⟦T⟧ & interface {
    size -> Number 
    // returns the number of values in the matrix
    numRows → Number
    // returns the number of rows in the matrix
    numColumns → Number 
    // returns the number of columns in the matrix
    atRow(r:Number) column(c:Number) put (v:T) → Matrix 
    // adds the value 'v' at row r, column c
    // raises BoundsError if index at r,c does not exist
    atRow(r:Number) column(c:Number) → T 
    // returns the value at row r, column c
    // raises BoundsError if index at r,c does not exist
    atRow(r:Number) column(c:Number) ifAbsent(action:Procedure0) → T 
    // returns the value at row r, column c
    // executes 'action' if index at r,c does not exist
    row(r:Number) → Collection⟦T⟧ 
    // returns the row at the specified index as a collection
    // raises BoundsError if index r does not exist
    column(c:Number) → Collection⟦T⟧
    // returns the column at the specified index as a collection
    // raises BoundsError if index c does not exist
    rows → Enumerable⟦Enumerable⟦T⟧⟧ 
    // returns an enumerable collection over the rows of the matrix
    columns → Enumerable⟦Enumerable⟦T⟧⟧ 
    // returns an enumerable collection over the columns of the matrix
    values → Enumerable⟦T⟧
    // returns an enumerable collection over the values of the matrix
    +(other:Matrix⟦T⟧) → Matrix⟦T⟧ 
    // returns the value-wise sum of two matrices
    // raises MatrixDimensionError if the dimensions of 'other' don't match the dimesions of 'self'
    -(other:Matrix⟦T⟧) → Matrix⟦T⟧ 
    // returns the value-wise difference of two matrices
    // raises MatrixDimensionError if the dimensions of 'other' don't match the dimesions of 'self'
    *(other) → Matrix⟦T⟧
    // returns the value-wise product if the argument is a matrix
    // returns the product of the value mapped to all values in the matrix if the argument is a scalar
    // raises MatrixDimensionError if the dimensions of 'other' don't match the dimesions of 'self'
    /(other) → Matrix⟦T⟧
    // returns the value-wise quotient if the argument is a matrix
    // returns the quotient of the value mapped to all values in the matrix if the argument is a scalar
    // raises MatrixDimensionError if the dimensions of 'other' don't match the dimesions of 'self'
    transpose → Matrix⟦T⟧
    // return the transpose of the matrix
    times(other:Matrix⟦T⟧) → Matrix⟦T⟧
    // returns the matrix product of the two matrices
    // raises MatrixDimensionError if the dimensions of 'other' are not compatible with the dimensions of 'self'
    reshapeWithNumRows(rs:Number) numColumns(cs:Number) → Matrix⟦T⟧
    // redefines the number of rows and columns in the matrix, if compatible with the number of values
    // raises MatrixDimensionError if the product of the new dimensions is not equal to the size of the values list
    reshapeWithNumRows(rs:Number) numColumns(cs:Number) 
        additionalValues(vs:Collection⟦T⟧) → Matrix⟦T⟧
    // redefines the number of rows and columns in the matrix, 
    // raises MatrixDimensionError if the product of the new dimensions 
    //   is not equal to the size of the values list plus the size of the additional values
    addRow(row:Collection⟦T⟧) at(index:Number) → Matrix⟦T⟧
    // adds a row to the matrix at the specified index
    // raises MatrixDimensionError if the length of the row is not equal to the number of rows in the matrix
    deleteRow(r:Number) → Matrix⟦T⟧
    // removes the row at the specified index from the matrix
    // raises BoundsError if the index r is not within the number of rows in the matrix
    addColumn(column:Collection⟦T⟧) at(index:Number) → Matrix⟦T⟧
    // adds a column to the matrix at the specified index
    // raises MatrixDimensionError if the length of the column is not equal to the number of columns in the matrix
    deleteColumn(c:Number) → Matrix⟦T⟧
    // removes the column at the specified index from the matrix
    // raises BoundsError if the index c is not within the number of columns in the matrix
    replaceRowAt(index:Number) with(row:Collection⟦T⟧) → Matrix⟦T⟧
    // replaces the row at the specified index with the given collection
    // raises MatrixDimensionError if the length of the row is not equal to the number of rows in the matrix
    // raises BoundsError if the index r is not within the number of rows in the matrix
    replaceColumnAt(index:Number) with(column:Collection⟦T⟧) → Matrix⟦T⟧
    // replaces the column at the specified index with the given collection
    // raises MatrixDimensionError if the length of the column is not equal to the number of columnss in the matrix
    // raises BoundsError if the index c is not within the number of columns in the matrix
    copy → Matrix⟦T⟧
    // returns a new matrix instance with the same values and dimensions as self
}

type MatrixFactory⟦T⟧ = interface {
    zeros → Matrix⟦Number⟧
    // a matrix with the specified dimensions where all values are equal to 0
    
    rows(rows: Collection⟦Collection⟦T⟧⟧) → Matrix⟦T⟧
    // a matrix with the specified collection as rows
    // throws an error if the rows are not all the same length
    
    columns(columns: Collection⟦Collection⟦T⟧⟧) → Matrix⟦T⟧
    // a matrix with the specified collection as columns
    // throws an error if the columns are not all the same length
    
    value(v:T) → Matrix⟦T⟧
    // a matrix with the specified dimensions where all values are equal to v
    // (more general case of zeros)

    values(vs: Collection⟦T⟧) → Matrix⟦T⟧
    // a matrix with the specified dimensions where the values are given by vs
    // throws an error if vs.size ≠ rows * columns
}

def MatrixDimensionsError is public = ProgrammingError.refine "MatrixDimensionsError"

type ComparableToMatrix⟦T⟧ = interface {
    numRows → Number
    numColumns → Number
    atRow(r:Number) column(c:Number) ifAbsent(_) → T
}

type ImplementsTimesOperator⟦K⟧ = interface {
    *(other) → K
}

method dot(v1: Collection, v2: Collection) {
    var dotProduct := 0
    def iteratorV1 = v1.iterator
    def iteratorV2 = v2.iterator
    
    while { iteratorV1.hasNext && iteratorV2.hasNext } do {
        dotProduct := dotProduct + (iteratorV1.next * iteratorV2.next)
    }
    dotProduct
}

method collectionOfSize(size) withValue(v) is confidential {
    var l := []
    repeat (size) times { l := l ++ [v] }
    l
}

class lazyZipperSequence⟦T⟧ (source1: Collection⟦Collection⟦T⟧⟧, source2: Collection⟦T⟧) {
    // takes a collection of collections (source1) and adds a value from the given 
    //  collection (source2) to the end of each collection 
    // example: lazyZipperSequence([ [1], [2] ], [3, 4]) = ([ [1, 3], [2, 4] ])    
    use cp.enumerable⟦Collection⟦T⟧⟧    
    if (source1.size ≠ source2.size) then { TypeError.raise "must be same size" }
    method iterator {
        object {
            def iterator1 = source1.iterator
            def iterator2 = source2.iterator
            
            method asString { "a zipper iterator over {iterator1} and {iterator2}" }
            method hasNext { iterator1.hasNext }
            method next { cp.lazyConcatenation(iterator1.next, [iterator2.next]) }
        }
    }
    method size { source1.size }
    method isEmpty { (source1.size == 0) && (source2.size == 0) }
    method asDebugString { "a lazy sequence zippering over {source1} and {source2}" }
}

method mapColumnsToRows(columns: Collection⟦Collection⟧) {
    if (columns.size == 0) then { return [] }
    columns.fold{ rs, c → lazyZipperSequence(rs, c) } startingWith( collectionOfSize(columns.first.size) withValue([]) )
}

method empty is public { matrix(0, 0).values([]) }

method with⟦T⟧(x:T) → Matrix⟦T⟧ is public { matrix⟦T⟧(1,1).value(x) }
        
class matrix⟦T⟧(rs, cs) → MatrixFactory⟦T⟧ {
    method asString { "the matrix factory" }   
    
    method withAll(a: Collection⟦T⟧) -> Matrix⟦T⟧ { values(a) }
    
    method << (source) { values(source) }
    
    method zeros → Matrix⟦Number⟧ {
        value(0)
    }
    
    method rows(r: Collection⟦Collection⟦T⟧⟧) → Matrix⟦T⟧{
        values( r.fold{ r1, r2 → cp.lazyConcatenation(r1,r2) } startingWith([]) )
    }
    
    method columns(c: Collection⟦Collection⟦T⟧⟧) → Matrix⟦T⟧ {
        rows(mapColumnsToRows(c))
    }
    
    method value(v:T) → Matrix⟦T⟧ {
        values (collectionOfSize(rs*cs) withValue(v))
    }
    
    class values(vs: Collection⟦T⟧) → Matrix⟦T⟧ {
        use cp.collection⟦T⟧
        
        if ( (rs * cs) ≠ vs.size) then { MatrixDimensionsError.raise "dimensions {rs}x{cs} is not compatible with values of size {vs.size}" }
        var impl := vs >> list
        
        var numRows is public := rs
        var numColumns is public := cs
        
        method isRowValid(r) is confidential { (r > 0) && (r ≤ numRows) }
        method isColumnValid(c) is confidential { (c > 0) && (c ≤ numColumns) }
        
        method indexFromRow(r) column (c) ifOutOfBounds(action) is confidential {
            if ( (isRowValid(r) && isColumnValid(c)).not ) then {action.apply}
            (r - 1) * numColumns + c
        }
        
        method indexFromRow(r) column(c) is confidential {
            indexFromRow(r) column(c) ifOutOfBounds { BoundsError.raise "position {r}, {c} is out of bounds" }
        }
        
        method size { impl.size }
        
        method sizeIfUnknown { size }
        
        method atRow(r) column(c) put (v:T) {
            impl.at( indexFromRow(r) column(c) ) put (v)
            self
        }
        
        method atRow(r) column(c) {
            impl.at( indexFromRow(r) column(c) )
        }
        
        method atRow(r) column(c) ifAbsent(action) {
            impl.at( indexFromRow(r) column(c) ifOutOfBounds (action) )
        }
        
        method do(action) {
            impl.do { each → action.apply(each) }
        }
        
        method values → Enumerable⟦T⟧ { impl }
        
        method iterator { impl.iterator }
        
        method rows -> Enumerable⟦Enumerable⟦T⟧⟧ {
            def sourceMatrix = self
            object {
                use cp.enumerable⟦Enumerable⟦T⟧⟧
                class iterator {
                    var currentRow := 1
                    method hasNext { currentRow ≤ numRows }
                    method next { 
                        def r = currentRow
                        currentRow := currentRow + 1
                        sourceMatrix.row(r)
                    }
                    method asString {
                        "an iterator over rows of {sourceMatrix}"
                    }
                }
                def size is public = numRows
                method asDebugString {
                    "a lazy sequence over rows of {sourceMatrix}"
                }
            }
        }
        
        method columns -> Enumerable⟦Enumerable⟦T⟧⟧ {
            def sourceMatrix = self
            object {
                use cp.enumerable⟦Enumerable⟦T⟧⟧
                class iterator {
                    var currentColumn := 1
                    method hasNext { currentColumn ≤ numColumns }
                    method next { 
                        def c = currentColumn
                        currentColumn := currentColumn + 1
                        sourceMatrix.column(c)
                    }
                    method asString {
                        "an iterator over columns of {sourceMatrix}"
                    }
                }
                def size is public = numColumns
                method asDebugString {
                    "a lazy sequence over columns of {sourceMatrix}"
                }
            }
        }
        
        method row(r) {
            def sourceMatrix = self
            object {
                use cp.enumerable⟦T⟧
                class iterator {
                    var currentColumn := 1
                    method hasNext { currentColumn ≤ numColumns }
                    method next { 
                        def c = currentColumn
                        currentColumn := currentColumn + 1
                        sourceMatrix.atRow(r) column(c)
                    }
                    method asString {
                        "an iterator over row {r} of {sourceMatrix}"
                    }
                }
                def size is public = numColumns
                method asDebugString {
                    "a lazy sequence over row {r} of {sourceMatrix}"
                }
            }
        }
        
        method column(c) {
            def sourceMatrix = self
            object {
                use cp.enumerable⟦T⟧
                class iterator {
                    var currentRow := 1
                    method hasNext { currentRow ≤ numRows }
                    method next { 
                        def r = currentRow
                        currentRow := currentRow + 1
                        sourceMatrix.atRow(r) column(c)
                    }
                    method asString {
                        "an iterator over column {c} of {sourceMatrix}"
                    }
                }
                def size is public = numRows
                method asDebugString {
                    "a lazy sequence over column {c} of {sourceMatrix}"
                }
            }
        }
        
        method applyScalarOperation(op) with (num) is confidential {
            matrix(self.numRows, self.numColumns).values(impl.map{each → op.apply(each, num)})
        }
        
        method applyMatrixOperation(op) with (other) is confidential {
            if ( (other.numRows ≠ self.numRows) || (other.numColumns ≠ self.numColumns) ) then {
                MatrixDimensionsError.raise "Dimensions of {other} are not compatible with dimensions of {self}"
            }
            
            def newMatrix = self.copy
            (1..numColumns).do { c →
                (1..numRows).do { r →
                    newMatrix.atRow(r) column(c) put (op.apply(newMatrix.atRow(r) column(c), other.atRow(r) column(c)))
                }
            }
            newMatrix  
        }
        
        method +(other : Matrix⟦T⟧) {
            // This operation only makes sense with another matrix as argument, not a scalar
            applyMatrixOperation{a, b → a+b} with (other) 
        }
        
        method -(other : Matrix⟦T⟧) {
            // This operation only makes sense with another matrix as argument, not a scalar
            applyMatrixOperation{a, b → a - b} with(other)
        }
        
        method *(other) {
            // This operation makes sense both with another matrix as argument, and with a scalar as argument
            // Since it is not possible to add a selfTimesMatrix method to the Number type, it is necessary
            //  to check the type of the argument
            if ( ComparableToMatrix.matches(other) ) then { applyMatrixOperation{a, b → a*b} with (other) 
            } elseif { ImplementsTimesOperator.matches(other) } then { applyScalarOperation{a, b → a*b} with(other) 
            } else { TypeError.raise "Type of {other} does not support operator *" }
        }
        
        method /(other) {
            // This operation makes sense both with another matrix as argument, and with a scalar as argument
            // Since it is not possible to add a selfTimesMatrix method to the Number type, it is necessary
            //  to check the type of the argument
            if ( ComparableToMatrix.matches(other) ) then { applyMatrixOperation{a, b → a/b} with (other) 
            } elseif { ImplementsTimesOperator.matches(other) } then { applyScalarOperation{a, b → a/b} with(other) 
            } else { TypeError.raise "Type of {other} does not support operator /" }
        }
        
        method transpose {
            matrix(self.numColumns, self.numRows).rows(self.columns)
        }
        
        method reverseTimesNumber(num) {
            self*num
        }
        
        method reverseDivideNumber(num) {
            TypeError.raise "Cannot divide a number by a matrix"
        }
        
        method reverseMinusNumber(num) {
            TypeError.raise "Cannot subtract a number from a matrix"
        }
        
        method reversePlusNumber(num) {
            TypeError.raise "Cannot add a number to a matrix"
        }
        
        method times(other) {
            // This method performs matrix multiplication, whereas the * operation performs value-wise multiplication
            if ( (other.numRows ≠ self.numColumns) || (other.numColumns ≠ self.numRows) ) then {
                MatrixDimensionsError.raise "Dimensions of {other} are not compatible with dimensions of {self}"
            }
            
            def newValues = list.empty
            self.rows.do { row →
                other.columns.do { col →
                    newValues.add(dot(row, col))
                }
            }
            matrix(self.numRows, other.numColumns).values(newValues)
        }
        
        method reshapeWithNumRows(newRs) numColumns(newCs) {
            if ( (newRs * newCs) ≠ impl.size) then { MatrixDimensionsError.raise "dimensions {newRs}x{newCs} are not compatible with values of size {vs.size}" }
            numRows := newRs
            numColumns := newCs
            self
        }
            
        method reshapeWithNumRows(newRs) numColumns(newCs) additionalValues(newVs) {
            if ( (newRs * newCs) ≠ (impl.size + newVs.size) ) then { MatrixDimensionsError.raise "dimensions {newRs}x{newCs} are not compatible with values of size {vs.size}" }
            impl.addAll(newVs)
            numRows := newRs
            numColumns := newCs
            self
        }
        
        method addRow(row) at(r) {
            if (row.size ≠ numColumns) then { MatrixDimensionsError.raise "row size must be equal to {numColumns}" }                
            if ( (r ≤ 0) || (r > (numRows + 1) ) ) then { BoundsError.raise "invalid row number {r}" }
            
            var index := indexFromRow(r) column(1) ifOutOfBounds { size }           
            row.do {each →
                impl.insert(each) at (index)
                index := index + 1
            }
            numRows := numRows + 1
            self
        }
        
        method deleteRow(r) {
            if ( (r ≤ 0) || (r > numRows) ) then { BoundsError.raise "row {r} does not exist" } 
            
            def index = indexFromRow(r) column(1)
            repeat (numColumns) times {
                impl.removeAt(index)
            }
            
            numRows := numRows - 1
            self
        }
        
        method addColumn(column) at(c) {
            if (column.size ≠ numRows) then { MatrixDimensionsError.raise "column size must be equal to {numRows}" }                
            if ( (c ≤ 0) || (c > (numColumns + 1) ) ) then { BoundsError.raise "invalid column number {c}" }
            
            var index := indexFromRow(1) column(c) ifOutOfBounds { numColumns + 1 }           
            column.do {each →
                impl.insert(each) at (index)
                index := index + numColumns + 1
            }
            numColumns := numColumns + 1
            self
        }
        
        method deleteColumn(c) {
            if ( (c ≤ 0) || (c > numColumns) ) then { BoundsError.raise "column {c} does not exist" } 
            
            var index := indexFromRow(1) column(c)
            repeat (numRows) times {
                impl.removeAt(index)
                index := index  + numColumns - 1
            }
            
            numColumns := numColumns - 1
            self
        }

        method replaceRowAt(r) with(row) {
            if (row.size ≠ numColumns) then { MatrixDimensionsError.raise "row size must be equal to {numColumns}" }                
            if ( (r ≤ 0) || (r > numRows ) ) then { BoundsError.raise "invalid row number {r}" }
        
            var c := 1
            row.do { each →
                self.atRow(r) column(c) put (each)
                c := c + 1
            }
            self
        }
        
        method replaceColumnAt(c) with(column) {
            if (column.size ≠ numRows) then { MatrixDimensionsError.raise "row size must be equal to {numRows}" }                
            if ( (c ≤ 0) || (c > numColumns ) ) then { BoundsError.raise "invalid row number {c}" }
            
            var r := 1
            column.do { each →
                self.atRow(r) column(c) put (each)
                r := r + 1
            }
            self
        }
        
        method ==(other) { 
            if ( ComparableToMatrix.matches(other).not ) then { return false }
            if ( (other.numRows ≠ self.numRows) || (other.numColumns ≠ self.numColumns) ) then { return false }
            
            (1..numColumns).do { c →
                (1..numRows).do { r →
                    def currentValue = self.atRow(r) column(c) ifAbsent { return false }
                    def otherValue = other.atRow(r) column(c) ifAbsent { return false }
                    if (currentValue ≠ otherValue) then { return false }
                }
            }
            
            return true
        }
        
        method copy {
            matrix(numRows, numColumns).values(impl)
        }
        
        method ≠ (other) { (self == other).not }
        
        method ++(other) {
            if ( (other.size % self.numColumns) ≠ 0) then { MatrixDimensionsError.raise "size of {other} is incompatible with dimensions {numRows}x{numColumns}" }
            matrix((impl.size + other.size) / self.numColumns, self.numColumns).values(cp.lazyConcatenation(impl, other.values))
        }
        
        method asString {
            var string := "matrix ["
            self.rows.do { each →
                string := string ++ each.asString
            } separatedBy { string := string ++ ", " }
            string ++ "]"
        }
    }
}