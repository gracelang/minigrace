// defines positions, and ranges, in the source

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
    rangeString -> String
    rangeLongString -> String
    lineRangeString -> String
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
    method asString { rangeString }
    method == (other) {
        (start == other.start) && (end == other.end)
    }
    method hash -> Number {
        hashCombine(start.hash, end.hash)
    }
    method rangeLongString {
        // returns a range string such as "line 17 column 5" ,
        // "line 17 columns 5 to 25", or "line 17 column 5 to line 22 column 10"
        if ((start == end) || (end == noPosition)) then {
            "line {start.line} column {start.column}"
        } elseif { end.line == start.line } then {
            "line {start.line}, columns {start.column}-{end.column}"
        } else {
            "line {start.line} column {start.column} to line " ++
                    "{end.line} column {end.column}"
        }
    }
    method rangeString {
        // returns a range string such as "17:5" , "17:5-25" or "17:5–22:10"
        if ((start == end) || (end == noPosition)) then {
            start.asString
        } elseif { end.line == start.line } then {
            "{start}-{end.column}"
        } else {
            "{start}-{end}"
        }
    }
    method lineRangeString {
        // returns a line range such as "line 17", or "lines 17–21"
        if ((start.line == end.line) || (end == noPosition)) then {
            "line {start.line}"
        } else {
            "lines {start.line}-{end.line}"
        }
    }
}
def noPosition is public = line 0 column 0
def emptyRange is public = start (noPosition) end (noPosition)
