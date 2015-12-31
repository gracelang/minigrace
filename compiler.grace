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
import "buildinfo" as buildinfo
import "identifierresolution" as identifierresolution
import "mirrors" as mirrors

util.parseargs(buildinfo)

util.log_verbose "starting compilation"

var tokens := lexer.new.lexfile(util.infile)
if (util.target == "lex") then {
    // Print the lexed tokens and quit.
    for (tokens) do { v ->
        if (util.verbosity > 30) then {
            util.outprint "{v.kind}: {v.value}  [pos: {v.line}.{v.linePos} size: {v.size} indent: {v.indent}]"
        } else {
            util.outprint "{v.kind}: {v.value}"
        }
    }
    util.outfile.close
    sys.exit(0)
}

var moduleObject := parser.parse(tokens)
var values := moduleObject.values

if (util.target == "parse") then {
    // Parse mode pretty-prints the parse tree and quits.
    util.log 60 verbose "target = parse, outfile = {util.outfile}."
    util.outprint(moduleObject.pretty(0))
    util.log 60 verbose "done writing {util.outfile}."
    util.outfile.close
    sys.exit(0)
}
if (util.target == "grace") then {
    for (values) do { v ->
        util.outprint(v.toGrace(0))
    }
    util.outfile.close
    sys.exit(0)
}
if (util.target == "c") then {
    genc.processImports(values)
}
if (util.target == "js") then {
    genjs.processImports(values)
}
if (util.extensions.contains("Plugin")) then {
    mirrors.loadDynamicModule(util.extensions.get("Plugin")).processAST(values)
}
if (util.target == "imports") then {
    def imps = set.empty
    def vis = object {
        inherits ast.baseVisitor
        method visitImport(o) -> Boolean {
            imps.add(o.path)
            false
        }
    }
    for (values) do {v->
        v.accept(vis)
    }
    for (imps.asList.sort) do {im->
        util.outprint(im)
    }
    util.outfile.close
    sys.exit(0)
}
moduleObject := identifierresolution.resolve(moduleObject)
if ((util.target == "processed-ast") || (util.target == "ast")) then {
    util.outprint "====================================="
    util.outprint "module-level symbol table"
    util.outprint (moduleObject.scope.asStringWithParents)
    util.outprint "====================================="
    util.outprint(moduleObject.pretty(0))
    util.outfile.close
    sys.exit(0)
}

// Perform the actual compilation
match(util.target)
    case { "c" ->
        genc.compile(moduleObject, util.outfile, util.runmode,
            util.buildtype, buildinfo)
    }
    case { "js" ->
        genjs.compile(moduleObject, util.outfile, util.runmode,
            util.buildtype, util.gracelibPath)
    }
    case { _ ->
        io.error.write("minigrace: no such target '" ++ util.target ++ "'\n")
        sys.exit(1)
    }
