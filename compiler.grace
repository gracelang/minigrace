dialect "standard"
import "ast" as ast
import "buildinfo" as buildinfo
import "genjs" as genjs
import "identifierresolution" as identifierresolution
import "errormessages" as errormessages
import "io" as io
import "lexer" as lexer
import "parser" as parser
import "sys" as sys
import "unicode" as unicode
import "util" as util
import "xmodule" as xmodule
import "mirror" as mirror

if (mirror.initialModuleName == "compiler") then { compileInputFile }

method compileInputFile {
    util.parseargs(buildinfo)

    util.log_verbose "starting compilation"

    try {
        var tokens := lexer.lexfile(util.infile)
        if (util.target == "lex") then {
            // Print the lexed tokens and quit.
            for (tokens) do { v ->
                def val = if ("\n" == v.value) then { "\\n" } else { v.value }
                if (util.verbosity > 30) then {
                    util.outprint "{v.kind}: {val}  [pos: {v.line}.{v.linePos} size: {v.size} indent: {v.indent}]"
                } else {
                    util.outprint "{v.kind}: {val}"
                }
            }
            util.outfile.close
            sys.exit(0)
        }

        var moduleObject := parser.parse(tokens)

        var values := moduleObject.value

        if (util.target == "parse") then {
            // Parse mode pretty-prints the parse tree and quits.
        //    util.log 60 verbose "target = parse, outfile = {util.outfile}."
            util.outprint(moduleObject.pretty(0))
        //    util.log 60 verbose "done writing {util.outfile}."
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

        if (util.target == "imports") then {
            def imps = set.empty
            def vis = object {
                inherit ast.baseVisitor
                method visitImport(o) -> Boolean {
                    imps.add(o.path)
                    false
                }
            }
            moduleObject.accept(vis)

            list.withAll(imps).sort.do { im ->
                util.outprint(im)
            }
            util.outfile.close
            sys.exit(0)
        }

        moduleObject := identifierresolution.resolve(moduleObject)

        // Perform the actual compilation
        match(util.target)
          case { "js" ->
            genjs.compile(moduleObject, util.outfile, util.buildtype, util.gracelibPath)
        } else {
            io.error.write("minigrace: no such target '" ++ util.target ++ "'\n")
            sys.exit(1)
        }
    } catch { se:errormessages.SyntaxError ->
        util.generalError("Syntax error: {se.message}", se.data.lineNum, se.data.position, se.data.arrow, se.data.sugg)
    } catch { se:errormessages.ReuseError ->
        util.generalError("Reuse error: {se.message}", se.data.lineNum, se.data.position, se.data.arrow, se.data.sugg)
    } catch { se:errormessages.CompilationError ->
        util.generalError("Compilation error: {se.message}", se.data.lineNum, se.data.position, se.data.arrow, se.data.sugg)
    }
}
////////////////////////////////////////////////////
//
// methods used when writing unit tests
//
////////////////////////////////////////////////////

method lexLines(input) {
    // input is a Collection of Strings, each representing a line
    // answers a linked list of tokens

    util.lines.clear
    util.lines.addAll(input)
    xmodule.externalModules.clear
    lexer.lexLines (input)
}

method lexString(inputString) { lexLines(inputString.split "\n") }

method parseLines(input) {
    // input is a Collection of Strings, each representing a line
    // answers the moduleNode at the top of the parse tree

    parser.parse (lexLines (input))
}

method parseString(inputString) { parseLines(inputString.split "\n") }

method astFromLines(input) {
    // input is a Collection of Strings, each representing a line
    // answers the moduleNode at the top of the AST
    identifierresolution.resolve (parseLines(input))
}

method astFromString(inputString) { astFromLines(inputString.split "\n") }
