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

if (util.interactive) then {
    var cont := true
    var tcenv := HashMap.new
    var replenv := HashMap.new
    var ivalues := []
    while { cont && !io.input.eof } do {
        io.output.write("> ")
        var line := io.input.getline
        print(line)
        if ((line == "q") || (line == "quit")) then {
            cont := false
        } else {
            // print(line)
            util.errno := 0
            var toks := lexer.Lexer.new.lexinput(line)
            // for (toks) do { v ->
            //     print(v.kind ++ ": " ++ v.value)
            //     if (util.verbosity > 30) then {
            //         print("  [line: {v.line} position: {v.linePos} indent: {v.indent}]")
            //     }
            // }
            if (util.errno == 0) then {
                var vals := parser.parse(toks)
                // for (vals) do { v ->
                //     print(v.pretty(0))
                // }
                if (util.errno == 0) then {
                    // if ((vals[1].kind == "identifier").andAlso {vals[1].value == "printenv"}) then {
                    //     print(replenv)
                    // }
                    vals := typechecker.typecheck(vals, tcenv)
                    // print(vals)
                    print("->-")
                    for (vals) do { v ->
                        print(v.pretty(0))
                    }
                    print("-<-")
                    // for (vals.indices) do { i ->
                    //     var o := vals.pop
                    //     ivalues.push(o)
                    // }
                    if (util.errno == 0) then {
                        def evalv = ast.evalVisitor.new(replenv)
                        for (vals) do { val ->
                            // if (val.kind == "identifier") then {
                            //     // special case for if only the name of a
                            //     // variable is entered
                            //     print(replenv.get(val.value))
                            // } else {
                            //     val.accept(evalv)
                            // }
                            val.accept(evalv)
                            print("=>", evalv.getResult)
                        }
                    }
                }
            }
        }
    }
    sys.exit(0)
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
