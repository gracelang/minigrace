import io
import sys
import unicode
import util
import lexer
import ast
import parser
import typechecker
import genllvm30
import genc
import genjava
import genjs
import buildinfo
import subtype

util.parseargs

def targets = ["lex", "parse", "processed-ast", "subtypematrix", "c", "js", "grace", "java"]

if (util.target == "help") then {
    print("Valid targets:")
    for (targets) do {t->
        print("  {t}")
    }
    sys.exit(0)
}

var tokens := lexer.Lexer.new.lexinput
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
if (util.target == "grace") then {
    for (values) do { v ->
        print(v.toGrace(0))
    }
    sys.exit(0)
}
values := typechecker.typecheck(values)
if (util.target == "processed-ast") then {
    for (values) do { v ->
        print(v.pretty(0))
    }
    sys.exit(0)
}
if (util.target == "subtypematrix") then {
    subtype.printMatrix
    sys.exit(0)
}

// Perform the actual compilation
if (util.target == "llvm30") then {
    genllvm30.compile(values, util.outfile, util.modname, util.runmode,
        util.buildtype, util.gracelibPath)
} elseif (util.target == "c") then {
    genc.compile(values, util.outfile, util.modname, util.runmode,
        util.buildtype)
} elseif ((util.target == "js") | (util.target == "ecmascript")) then {
    genjs.compile(values, util.outfile, util.modname, util.runmode,
        util.buildtype, util.gracelibPath)
} elseif (util.target == "java") then {
    genjava.compile(values, util.outfile, util.modname, util.runmode,
        util.buildtype, util.gracelibPath)
} else {
    io.error.write("minigrace: no such target '" ++ util.target ++ "'")
    sys.exit(1)
}
