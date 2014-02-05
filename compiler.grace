#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "unicode" as unicode
import "util" as util
import "lexer" as lexer
import "ast" as ast
import "parser" as parser
import "genc" as genc
import "genjs" as genjs
import "genjson" as genjson
import "buildinfo" as buildinfo
import "mgcollections" as mgcollections
import "interactive" as interactive
import "identifierresolution" as identifierresolution
import "mirrors" as mirrors

util.parseargs

def targets = ["lex", "parse", "grace", "processed-ast",
    "imports", "c", "js"]

if (util.target == "help") then {
    print("Valid targets:")
    for (targets) do {t->
        print("  {t}")
    }
    sys.exit(0)
}

if (util.interactive) then {
    interactive.startRepl
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

// JSON wants to keep hold of the last token in the file
if (util.target == "json") then {
    if (tokens.size > 0) then {
        genjson.saveToken(tokens.last)
    }
}

var values := parser.parse(tokens)
if (util.extensions.contains("ClassWrap")) then {
    def vl = values
    values := []
    def inner = []
    for (vl) do { v->
        if ((v.kind == "import") || (v.kind == "dialect")) then {
            values.push(v)
        } else {
            inner.push(v)
        }
    }
    values.push(ast.methodNode.new(ast.identifierNode.new("new", false),
        [ast.signaturePart.new("new")],
        [ast.objectNode.new(inner, false)], false))
}

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
if (util.target == "c") then {
    genc.processImports(values)
}
if (util.target == "js") then {
    genjs.processDialect(values)
}
if (util.target == "json") then {
    genjs.processDialect(values)
}
if (util.extensions.contains("Plugin")) then {
    mirrors.loadDynamicModule(util.extensions.get("Plugin")).processAST(values)
}
values := identifierresolution.resolve(values)
if (util.target == "processed-ast") then {
    for (values) do { v ->
        print(v.pretty(0))
    }
    sys.exit(0)
}
if (util.target == "imports") then {
    def imps = mgcollections.set.new
    def vis = object {
        inherits ast.baseVisitor
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
    case { "json" ->
        genjson.generate(values, util.outfile)
    }
    case { _ ->
        io.error.write("minigrace: no such target '" ++ util.target ++ "'\n")
        sys.exit(1)
    }
