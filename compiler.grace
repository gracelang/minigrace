#pragma DefaultVisibility=public
def io = platform.io
def sys = platform.sys
def unicode = platform.unicode
def util = platform.util
def lexer = platform.lexer
def ast = platform.ast
def parser = platform.parser
def typechecker = platform.typechecker
def genc = platform.genc
def genjs = platform.genjs
def buildinfo = platform.buildinfo
def subtype = platform.subtype
def mgcollections = platform.mgcollections

util.parseargs

def targets = ["lex", "parse", "grace", "processed-ast", "subtypematrix",
    "types", "imports", "c", "js", "grace"]

if (util.target == "help") then {
    print("Valid targets:")
    for (targets) do {t->
        print("  {t}")
    }
    sys.exit(0)
}

var nparens := 0
var nbraces := 0
var nsquares := 0

method iscontinued {
    return (nparens != 0) || (nbraces != 0) || (nsquares != 0)
}

if (util.interactive) then {
    var cont := true
    var tcenv := HashMap.new
    var visitor := ast.evalVisitor.new
    var ivalues := []
    var completeline := ""
    while { cont && !io.input.eof } do {
        if (nparens < 0) then {
            nparens := 0
        }
        if (nbraces < 0) then {
            nbraces := 0
        }
        if (nsquares < 0) then {
            nsquares := 0
        }
        if (io.input.isatty) then {
            if (iscontinued) then {
                io.output.write(". ")
            } else {
                io.output.write("> ")
            }
        }
        var line := io.input.getline
        if (iscontinued) then {
            completeline := completeline ++ "\n" ++ line
        } else {
            completeline := line
        }
        // check for unbalanced parens etc. to allow line continuations
        for (line) do { c ->
            if (c == "(") then {
                nparens := nparens + 1
            } elseif (c == ")") then {
                nparens := nparens - 1
            } elseif (c == "\{") then {
                nbraces := nbraces + 1
            } elseif (c == "\}") then {
                nbraces := nbraces - 1
            } elseif (c == "[") then {
                nsquares := nsquares + 1
            } elseif (c == "]") then {
                nsquares := nsquares - 1
            }
        }
        if (!iscontinued) then {
            if ((line == "q") || (line == "quit")) then {
                cont := false
            } elseif ((line[1] == "/") && (line[2] == "/")) then {
                // skip comments
            } else {
                util.errno := 0
                var toks := lexer.Lexer.new.lexinput(completeline)
                if (!io.input.isatty && (util.errno != 0)) then {
                    sys.exit(util.errno)
                } elseif (util.errno == 0) then {
                    var vals := parser.parse(toks)
                    if (!io.input.isatty && (util.errno != 0)) then {
                        sys.exit(util.errno)
                    } elseif (util.errno == 0) then {
                        vals := typechecker.typecheck(vals, tcenv)
                        if (!io.input.isatty && (util.errno != 0)) then {
                            sys.exit(util.errno)
                        } elseif (util.errno == 0) then {
                            for (vals) do { val ->
                                val.accept(visitor)
                                def result = visitor.getResult
                                if ((false != result) && (true != result)
                                    && (val.kind != "import"))
                                    then {
                                    def res = visitor.getResult.val
                                    if (nothing != res) then {
                                        if (io.output.isatty) then {
                                            print("=> {res}")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    sys.exit(util.errno)
}

var tokens := lexer.Lexer.new.lexfile(util.infile)
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
if (util.target == "types") then {
    for (subtype.types) do {t->
        print("{subtype.stringifyType(t)}:\n  {t.pretty(2)}")
    }
    sys.exit(0)
}
if (util.target == "imports") then {
    def imps = mgcollections.set.new
    def vis = object {
        inherits ast.baseVisitor
        method visitMember(o) -> Boolean {
            if ((o.in.kind == "identifier").andAlso
                {o.in.value == "platform"}) then {
                imps.add(o.value)
            }
            true
        }
        method visitImport(o) -> Boolean {
            imps.add(o.value.value)
        }
    }
    for (values) do {v->
        v.accept(vis)
    }
    for (imps) do {im->
        print(im)
    }
    sys.exit(0)
}

// Perform the actual compilation
match(util.target)
    case { "c" ->
        genc.compile(values, util.outfile, util.modname, util.runmode,
            util.buildtype)
    }
    case { "js" ->
        genjs.compile(values, util.outfile, util.modname, util.runmode,
            util.buildtype, util.gracelibPath)
    }
    case { _ ->
        io.error.write("minigrace: no such target '" ++ util.target ++ "'")
        sys.exit(1)
    }
