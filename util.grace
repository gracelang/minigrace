#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "buildinfo" as buildinfo
import "mgcollections" as mgcollections

var __compilerRevision := false
var verbosityv := 30
var outfilev := io.output
var infilev := io.input
var modnamev := "stdin_minigrace"
var runmodev := "make"
var buildtypev := "run"
var interactivev := false
var gracelibPathv := false
var linenumv := 1
var lineposv := 1
var vtagv := false
var noexecv := false
var targetv := "c"
var versionNumber := "0.0.8"
var extensionsv := mgcollections.map.new
var recurse := true
var dynamicModule := false
var importDynamic := false
var jobs := 2
var cLines := []
var lines := []

var errno := 0

method runOnNew(b)else(e) {
    if ((__compilerRevision != "d5f6522d5c5e3f5b1f40d77502a66954955d0e5a")
        && (__compilerRevision != false)) then {
        b.apply
    } else {
        e.apply
    }
}

method parseargs {
    var argv := sys.argv
    var toStdout := false
    if (argv.size > 1) then {
        var indices := argv.indices
        var arg
        var skip := true
        for (indices) do { ai->
            arg := argv.at(ai)
            if (arg.at(1) == "-") then {
                match(arg)
                    case { "-o" ->
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: -o requires argument.\n")
                            sys.exit(1)
                        }
                        outfilev := io.open(argv.at(ai + 1), "w")
                        skip := true
                    } case { "--verbose" ->
                        verbosityv := 40
                    } case { "--help" ->
                        printhelp
                    } case { "--vtag" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --vtag requires argument.\n")
                            sys.exit(1)
                        }
                        vtagv := argv.at(ai + 1)
                    } case { "--make" ->
                        runmodev := "make"
                        buildtypev := "bc"
                    } case { "--no-recurse" ->
                        recurse := false
                    } case { "--dynamic-module" ->
                        dynamicModule := true
                        runmodev := "make"
                        noexecv := true
                        buildtypev := "bc"
                    } case { "--import-dynamic" ->
                        importDynamic := true
                    } case { "--run" ->
                        buildtypev := "run"
                        runmodev := "make"
                    } case { "--source" ->
                        buildtypev := "source"
                        runmodev := "build"
                    } case { "--native" ->
                        buildtypev := "native"
                    } case { "--interactive" ->
                        interactivev := true
                    } case { "--noexec" ->
                        noexecv := true
                    } case { "--yesexec" ->
                        noexecv := false
                    } case { "--stdout" ->
                        toStdout := true
                    } case { "-" ->
                        toStdout := true
                    } case { "--module" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --module requires argument.\n")
                            sys.exit(1)
                        }
                        modnamev := argv.at(ai + 1)
                    } case { "--gracelib" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --gracelib requires argument.\n")
                            sys.exit(1)
                        }
                        gracelibPathv := argv.at(ai + 1)
                    } case { "--target" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --target requires argument.\n")
                            sys.exit(1)
                        }
                        targetv := argv.at(ai + 1)
                    } case { "-j" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: -j requires argument.\n")
                            sys.exit(1)
                        }
                        jobs := argv.at(ai + 1).asNumber
                    } case { "--version" ->
                        print("minigrace "
                            ++ "{versionNumber}.{buildinfo.gitgeneration}")
                        print("git revision " ++ buildinfo.gitrevision)
                        print("<http://ecs.vuw.ac.nz/~mwh/minigrace/>")
                        sys.exit(0)
                    } case { "--help" ->
                        print "Usage: minigrace <file>.grace"
                        print "See the documentation for more options."
                        sys.exit(0)
                    } case { _ ->
                        if (arg.at(2) == "X") then {
                            var ext := arg.substringFrom(3)to(arg.size)
                            processExtension(ext)
                        } else {
                            io.error.write("minigrace: invalid "
                                ++ "argument {arg}.\n")
                            sys.exit(1)
                        }
                    }
            } else {
                if (skip) then {
                    skip := false
                } else {
                    var filename := arg
                    infilev := io.open(filename, "r")
                    if (modnamev == "stdin_minigrace") then {
                        var accum := ""
                        modnamev := ""
                        for (filename) do { c->
                            if (c == ".") then {
                                modnamev := accum
                            }
                            accum := accum ++ c
                        }
                    }
                }
            }
        }
    }
    if ((outfilev == io.output) && {!toStdout}) then {
        outfilev := match(targetv)
            case { "c" -> io.open(modnamev ++ ".c", "w") }
            case { "js" -> io.open(modnamev ++ ".js", "w") }
            case { _ -> io.output }
    }
    if (gracelibPathv == false) then {
        if (io.exists(sys.execPath ++ "/../lib/minigrace/gracelib.o")) then {
            gracelibPathv := sys.execPath ++ "/../lib/minigrace"
        } else {
            gracelibPathv := sys.execPath
        }
    }
    if (infilev == io.input) then {
        if (infilev.isatty) then {
            print("minigrace {versionNumber}.{buildinfo.gitgeneration} / "
                ++ buildinfo.gitrevision)
            print "Copyright (C) 2011-2013 Michael Homer"
            print("This is free software with ABSOLUTELY NO WARRANTY. "
                ++ "Say minigrace.w for details.")
            print ""
            if (interactivev.not) then {
                print "Enter a program and press Ctrl-D to execute it."
                print ""
            }
        }
    }
}

method log_verbose(s) {
    if (verbosityv >= 40) then {
        var vtagw := ""
        if (false != vtagv) then {
            vtagw := "[" ++ vtagv ++ "]"
        }
        io.error.write("minigrace{vtagw}: {modnamev}: {sys.cputime}/"
            ++ "{sys.elapsed}: {s}\n")
    }
}

method outprint(s) {
    outfilev.write(s)
    outfilev.write("\n")
}

// Contains modified lines used as suggestions for error messages.
// When a line is added using one of the utility methods such as
// insert()afterToken()onLine(), the line is copied from util.lines to the
// internal lines array in the suggestion, and when a line that is already in
// the array is modified, the internal lines array is updated.
// There is no sorting of the order of the lines at any point, so
// lines must be added in ascending order.
class suggestion.new() {

    def lineNumbers is confidential = []
    def lines' is confidential = []

    // Methods that deal with inserting/replacing/deleting character positions
    // and ranges. These methods are usually called by lexing error messages
    // due to lack of access to tokens, and by insert/replace/delete methods
    // that operate on tokens.

    method replaceRange(start, end)with(s)onLine(lineNumber) {
        def line = getLine(lineNumber)
        if(start == 1) then {
            addLine(lineNumber, s ++ line.substringFrom(end + 1)to(line.size))
        } else {
            addLine(lineNumber, line.substringFrom(1)to(start - 1)
                ++ s ++ line.substringFrom(end + 1)to(line.size))
        }
    }

    method replaceChar(pos)with(s)onLine(lineNumber) {
        replaceRange(pos, pos)with(s)onLine(lineNumber)
    }

    method deleteRange(start, end)onLine(lineNumber) {
        var start' := start
        def line = getLine(lineNumber)
        if((start' > 1) && (end == line.size)) then {
            // Check for removing the whole line, then remove the indent also.
            var indent := true
            for(1..(start'-1)) do { i ->
                if(line[i] != " ") then {
                    indent := false
                }
            }
            if(indent == true) then {
                start' := 1
            }
        }
        replaceRange(start', end)with("")onLine(lineNumber)
    }

    method deleteChar(pos)onLine(lineNumber) {
        replaceRange(pos, pos)with("")onLine(lineNumber)
    }

    method insert(s)atPosition(pos)onLine(lineNumber) {
        def line = getLine(lineNumber)
        if(pos == 1) then {
            addLine(lineNumber, s ++ line)
        } else {
            addLine(lineNumber, line.substringFrom(1)to(pos - 1) ++ s
                ++ line.substringFrom(pos)to(line.size))
        }
    }

    // Methods that deal with inserting/replacing/deleteing tokens or ranges of
    // tokens. These methods call the underlying methods that operate on
    // characters.

    method getTokenStart(token)includeLeadingSpace(includeLeading) {
        var start := token.linePos
        // Include leading whitespace.
        if(includeLeading == true) then {
            if((token.prev != false).andAlso({token.prev.line == token.line})) then {
                start := token.prev.linePos + token.prev.size
            }
        }
        // Include indentation if this is the only token on the line.
        if(token.linePos == (token.indent + 1)) then {
            if((token.next == false).orElse({token.next.line != token.line})) then {
                start := 1
            }
        }
        start
    }

    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {
        var end := token.linePos + token.size - 1
        // Include trailing space.
        if(includeTrailing == true) then {
            if((token.next != false).andAlso({token.next.line == token.line})) then {
                end := token.next.linePos - 1;
            } else {
                end := getLine(token.line).size
            }
        }
        end
    }

    method replaceToken(token)leading(replaceLeading)trailing(replaceTrailing)with(s) {
        def start = getTokenStart(token)includeLeadingSpace(replaceLeading)
        def end = getTokenEnd(token)includeTrailingSpace(replaceTrailing)
        replaceRange(start, end)with(s)onLine(token.line)
    }

    method replaceToken(token)with(s) {
        replaceToken(token)leading(false)trailing(false)with(s)
    }

    method replaceTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)with(s) {
        if(start == end) then {
            replaceToken(start)leading(replaceLeading)trailing(replaceTrailing)with(s)
        } else {
            // Get the ident and position now in case deleteTokenRange changes it.
            def insertPos = getTokenStart(start)includeLeadingSpace(replaceLeading)
            def indent = getLine(start.line).substringFrom(1)to(start.indent)
            deleteTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)
            // If delete token range deleted the indent, then add it back.
            if(getLine(start.line) == "") then {
                insert(indent ++ s)atPosition(insertPos)onLine(start.line)
            } else {
                insert(s)atPosition(insertPos)onLine(start.line)
            }
        }
    }

    method replaceTokenRange(start, end)with(s) {
        replaceTokenRange(start, end)leading(false)trailing(false)with(s)
    }

    // Deletes a token, and optionally leading and/or trailing spaces.
    method deleteToken(token)leading(deleteLeading)trailing(deleteTrailing) {
        def start = getTokenStart(token)includeLeadingSpace(deleteLeading)
        def end = getTokenEnd(token)includeTrailingSpace(deleteTrailing)
        deleteRange(start, end)onLine(token.line)
    }

    method deleteToken(token) {
        deleteToken(token)leading(false)trailing(false)
    }

    // Deletes a range of tokens, and optionally leading and/or trailing spaces.
    method deleteTokenRange(start, end)leading(deleteLeading)trailing(deleteTrailing) {
        if(start == end) then {
            deleteToken(start)leading(deleteLeading)trailing(deleteTrailing)
        } else {
            var line := start.line
            var startPos := getTokenStart(start)includeLeadingSpace(deleteLeading)
            var endPos := getTokenEnd(start)includeTrailingSpace(deleteTrailing)
            var tok := start.next
            while {tok != end} do {
                if(tok.line != line) then {
                    deleteRange(startPos, endPos)onLine(line)
                    line := tok.line
                    startPos := getTokenStart(tok)includeLeadingSpace(deleteLeading)
                }
                endPos := getTokenEnd(tok)includeTrailingSpace(deleteTrailing)
                tok := tok.next
            }
            if(end.line != line) then {
                deleteRange(startPos, endPos)onLine(line)
            }
            endPos := getTokenEnd(end)includeTrailingSpace(deleteTrailing)
            deleteRange(startPos, endPos)onLine(end.line)
        }
    }

    method deleteTokenRange(start, end) {
        deleteTokenRange(start, end)leading(false)trailing(false)
    }

    method deleteLine(lineNumber) {
        addLine(lineNumber, "")
    }

    method insert(s)afterToken(token)andTrailingSpace(afterTrailing) {
        def pos = getTokenEnd(token)includeTrailingSpace(afterTrailing) + 1
        insert(s)atPosition(pos)onLine(token.line)
    }

    method insert(s)afterToken(token) {
        insert(s)afterToken(token)andTrailingSpace(false)
    }

    method insert(s)beforeToken(token) {
        insert(s)atPosition(token.linePos)onLine(token.line)
    }

    // Insert a new line. This stores the line with the same number as the line it comes after.
    method insertNewLine(line)after(lineNumber) {
        addLine(lineNumber, line)
    }

    // Manually add a line to the suggestion. This will overwrite any previous
    // changes that may have been made to this line.
    method addLine(lineNumber, line) {
        var i := findLine(lineNumber)
        if(i != false) then {
            lines'.at(i)put(line)
        } else {
            // Add new lines to make the list big enough.
            lineNumbers.push(lineNumber)
            lines'.push(line)
            if(lines'.size > 1) then {
                // Re-order the list.
                i := lines'.size
                while {(i > 1).andAlso({lineNumber < lineNumbers[i - 1]})} do {
                    lineNumbers[i] := lineNumbers[i - 1]
                    lines'[i] := lines'[i - 1]
                    i := i - 1
                }
                lineNumbers[i] := lineNumber
                lines'[i] := line
            }
        }
    }

    // Internal method used to find the index of a line in the lines array.
    // Returns false if the line is not found.
    method findLine(lineNumber) is confidential {
        for(lineNumbers.indices) do { i ->
            if(lineNumbers[i] == lineNumber) then {
                return i
            }
        }
        false
    }

    // Internal method used to get the contents of a line so far.
    // If the line is not part of this suggestion then it gets the unmodified line.
    method getLine(lineNumber) is confidential {
        def i = findLine(lineNumber)
        if(i == false) then {
            lines[lineNumber]
        } else {
            lines'[i]
        }
    }

    method print() {
        for(1..lines'.size) do { i ->
            if((i > 1).andAlso {(lineNumbers[i] > (lineNumbers[i-1] + 1))}) then {
                var s := ""
                for(1..lineNumbers[i-1].asString.size) do {
                    s := s ++ " "
                }
                io.error.write("    {s}...\n")
            }
            // Handle insertion of new lines.
            if(lineNumbers[i].truncate != lineNumbers[i]) then {
                io.error.write(" *{lineNumbers[i].truncate}: {lines'[i]}\n")
            } else {
                io.error.write("  {lineNumbers[i]}: {lines'[i]}\n")
            }
        }
    }
}

method syntaxError(message)atRange(errlinenum, startpos, endpos) {
    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([])
}

method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestion(suggestion') {
    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([suggestion'])
}

method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    var loc := if(startpos == endpos) then {startpos.asString} else { "{startpos}-{endpos}" }
    io.error.write("{modnamev}.grace[{errlinenum}:{loc}]: Syntax error: {message}\n")
    if ((errlinenum > 1) && (lines.size > 1)) then {
        io.error.write("  {errlinenum - 1}: {lines.at(errlinenum - 1)}\n")
    }
    var arr := "----"
    for (2..(startpos + errlinenum.asString.size)) do {
        arr := arr ++ "-"
    }
    for (startpos..endpos) do {
        arr := arr ++ "^"
    }
    if (lines.size >= errlinenum) then {
        io.error.write("  {errlinenum}: {lines.at(errlinenum)}\n")
        io.error.write("{arr}\n")
    }
    if (errlinenum < lines.size) then {
        io.error.write("  {errlinenum + 1}: {lines.at(errlinenum + 1)}\n")
    }
    if (suggestions.size > 0) then {
        for(suggestions) do { s ->
            io.error.write("\nDid you mean:\n")
            s.print
        }
    }
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
}

method syntaxError(message)atPosition(errlinenum, errpos) {
    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([])
}

method syntaxError(message)atPosition(errlinenum, errpos)withSuggestion(suggestion') {
    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([suggestion'])
}

method syntaxError(message)atPosition(errlinenum, errpos)withSuggestions(suggestions) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace[{errlinenum}:({errpos})]: Syntax error: {message}\n")
    if ((errlinenum > 1) && (lines.size > 1)) then {
        io.error.write("  {errlinenum - 1}: {lines.at(errlinenum - 1)}\n")
    }
    var arr := "----"
    for (2..(errpos + errlinenum.asString.size)) do {
        arr := arr ++ "-"
    }
    arr := arr ++ "^"
    if (lines.size >= errlinenum) then {
        var line := lines.at(errlinenum)
        io.error.write("  {errlinenum}: {line.substringFrom(1)to(errpos-1)} {line.substringFrom(errpos)to(line.size)}\n")
        io.error.write("{arr}\n")
    }
    if (errlinenum < lines.size) then {
        io.error.write("  {errlinenum + 1}: {lines.at(errlinenum + 1)}\n")
    }
    if (suggestions.size > 0) then {
        for(suggestions) do { s ->
            io.error.write("\nDid you mean:\n")
            s.print
        }
    }
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
}

method syntaxError(message)atLine(errlinenum) {
    syntaxError(message)atLine(errlinenum)withSuggestions([])
}

method syntaxError(message)atLine(errlinenum)withSuggestion(suggestion') {
    syntaxError(message)atLine(errlinenum)withSuggestions([suggestion'])
}

method syntaxError(message)atLine(errlinenum)withSuggestions(suggestions) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace[{errlinenum}]: Syntax error: {message}\n")
    if ((errlinenum > 1) && (lines.size > 1)) then {
        io.error.write("  {errlinenum - 1}: {lines.at(errlinenum - 1)}\n")
    }
    var arr := "----"
    for (1..errlinenum.asString.size) do {
        arr := arr ++ "-"
    }
    for (1..lines.at(errlinenum).size) do {
        arr := arr ++ "^"
    }
    if (lines.size >= errlinenum) then {
        io.error.write("  {errlinenum}: {lines.at(errlinenum)}\n")
        io.error.write("{arr}\n")
    }
    if (errlinenum < lines.size) then {
        io.error.write("  {errlinenum + 1}: {lines.at(errlinenum + 1)}\n")
    }
    if (suggestions.size > 0) then {
        for(suggestions) do { s ->
            io.error.write("\nDid you mean:\n")
            s.print
        }
    }
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
}

method type_error(s) {
    if (extensionsv.contains("IgnoreTypes")) then {
        return true
    }
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: Type error: {s}")
    io.error.write("\n")
    io.error.write(lines.at(linenumv) ++ "\n")
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
}
method semantic_error(s) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write "{modnamev}.grace:{linenumv}:{lineposv}: Semantic error"
    if (s == "") then {
        io.error.write "\n"
        if (!interactivev) then {
            sys.exit(1)
        }
    }
    io.error.write ": {s}\n"
    if (linenumv > 1) then {
        if (lines.size > 0) then {
            io.error.write("  {linenumv - 1}: {lines.at(linenumv - 1)}\n")
        }
    }
    var arr := "----"
    for (2..(lineposv + linenumv.asString.size)) do {
        arr := arr ++ "-"
    }
    if (lines.size >= linenumv) then {
        io.error.write("  {linenumv}: {lines.at(linenumv)}\n{arr}^\n")
    }
    if (linenumv < lines.size) then {
        io.error.write("  {linenumv + 1}: {lines.at(linenumv + 1)}\n")
    }
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
}
method warning(s) {
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: warning: {s}")
    io.error.write("\n")
}

method verbosity {
    verbosityv
}
method outfile {
    outfilev
}
method infile {
    infilev
}
method modname {
    modnamev
}
method runmode {
    runmodev
}
method buildtype {
    buildtypev
}
method interactive {
    interactivev
}
method gracelibPath {
    gracelibPathv
}
method setline(l) {
    linenumv := l
}
method setPosition(l, p) {
    linenumv := l
    lineposv := p
}
method linenum {
    linenumv
}
method linepos {
    lineposv
}
method vtag {
    vtagv
}
method noexec {
    noexecv
}
method target {
    targetv
}
method engine {
    "native"
}
method extensions {
    extensionsv
}
method processExtension(ext) {
    var extn := ""
    var extv := true
    var seeneq := false
    for (ext) do {c->
        if (c == "=") then {
            seeneq := true
            extv := ""
        } else {
            if (!seeneq) then {
                extn := extn ++ c
            } else {
                extv := extv ++ c
            }
        }
    }
    extensionsv.put(extn, extv)
}
method printhelp {
    print "Usage: {sys.argv.at(1)} [OPTION]... [FILE]"
    print "Compile, process, or run a Grace source file or standard input."
    print ""
    print "Modes:"
    print "  --make           Compile FILE to a native executable"
    print "  --run            Compile FILE and execute the program [default]"
    print "  --source         Compile FILE to source, but no further"
    print "  --dynamic-module Compile FILE as a dynamic module (experimental!)"
    print "  --interactive    Launch interactive read-eval-print interpreter"
    print ""
    print "Options:"
    print "  --verbose        Give more detailed output"
    print "  --target TGT     Choose a non-default compilation target TGT"
    print "                   Use --target help to list supported targets."
    print "  -o OFILE         Output to OFILE instead of default"
    print "  -j N             Spawn at most N concurrent subprocesses"
    print "  --help           This text"
    print "  --module         Override default module name (derived from FILE)"
    print "  --no-recurse     Do not compile imported modules"
    print "  --stdout         Output to standard output rather than a file"
    print "  --version        Print version information"
    print ""
    print "By default, {sys.argv.at(1)} FILE will compile and execute FILE."
    print "More detailed usage information is in the <doc/usage> file in the source tree."
    sys.exit(0)
}
method debug(s) {

}
var hexdigits := "0123456789abcdef"
method hex(num) {
    var tmp := num
    var s := ""
    while {tmp > 0} do {
        var i := tmp % 16
        s := hexdigits.at(i + 1) ++ s
        tmp := tmp - i
        tmp := tmp / 16
    }
    s
}

method join(joiner, iterable) {
    def ind = iterable.indices
    def min = ind.first
    var s := ""
    for (ind) do {i->
        if (i != min) then {
            s := s ++ joiner
        }
        s := s ++ iterable.at(i)
    }
    s
}

method split(str, by) {
    def results = []
    def bylen = by.size
    var start := 1
    var i := 1
    def strlen = str.size
    while {i <= strlen} do {
        if (str.substringFrom(i)to(i+bylen-1) == by) then {
            results.push(str.substringFrom(start)to(i-1))
            start := i + bylen
        }
        i := i + 1
    }
    results.push(str.substringFrom(start)to(strlen))
    results
}
