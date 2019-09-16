type Position = interface {
    line -> Number
    column -> Number
    > (other) -> Boolean
    ≥ (other) -> Boolean
    == (other) -> Boolean
    < (other) -> Boolean
    ≤ (other) -> Boolean
}
type Range = interface {
    start -> Position
    end -> Position
}
class line (l:Number) column (c:Number) -> Position {
    use equality
    def line is public = l
    def column is public = c
    method > (other:Position) -> Boolean {
        if (line > other.line) then { return true }
        if (line < other.line) then { return false }
        (column > other.column)
    }
    method ≥ (other:Position) -> Boolean {
        if (line > other.line) then { return true }
        if (line < other.line) then { return false }
        (column ≥ other.column)
    }
    method == (other:Position) -> Boolean {
        (line == other.line) && (column == other.column)
    }
    method hash -> Number {
        hashCombine(line.hash, column.hash)
    }
    method ≤ (other:Position) -> Boolean {
        (other > self).not
    }
    method < (other:Position) -> Boolean {
        (other ≥ self).not
    }
    method asString { "{line}:{column}" }
}
class start (s:Position) end (e:Position) -> Range {
    use equality
    def start is public = s
    def end is public = e
    method asString {
        if (start.line == end.line) then {
            "{start}-{end.column}"
        } elseif { end.line == noPosition } then {
            start.asString
        } else {
            "{start}-{end}"
        }
    }
    method == (other) {
        (start == other.start) && (end == other.end)
    }
    method hash -> Number {
        hashCombine(start.hash, end.hash)
    }
}
def noPosition is public = line 0 column 0
def emptyRange is public = start (noPosition) end (noPosition)
