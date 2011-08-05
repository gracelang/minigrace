import io
import sys
import unicode
import util
import lexer
import ast
import parser
import genllvm
import genjs
import buildinfo

util.parseargs

var tokens := lexer.lexinput
if (util.target == "lex") then {
    // Print the lexed tokens and quit.
    for (tokens) do { v ->
        print(v.kind ++ ": " ++ v.value)
        if (util.verbosity > 30) then {
            print("  [line: {v.line} position: {v.linePos} indent: {v.indent}]")
        }
    }
    sys.exit(0)
}
var values := parser.parse(tokens)

if (util.target == "parse") then {
    // Parse mode pretty-prints the source's AST and quits.
    for (values) do { v ->
        print(v.pretty(0))
    }
    sys.exit(0)
}

// Perform the actual compilation
if (util.target == "llvm") then {
    genllvm.compile(values, util.outfile, util.modname, util.runmode,
        util.buildtype, util.gracelibPath)
} elseif ((util.target == "js") | (util.target == "ecmascript")) then {
    genjs.compile(values, util.outfile, util.modname, util.runmode,
        util.buildtype, util.gracelibPath)
} else {
    io.error.write("minigrace: no such target '" ++ util.target ++ "'")
    sys.exit(1)
}
