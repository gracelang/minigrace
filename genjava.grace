import ast
import io
import sys
import unicode
import util


def obj = "GraceObject"
def blk = "GraceBlock"
def bln = "GraceBoolean"
def num = "GraceNumber"
def str = "GraceString"
def lst = "GraceList"
def ret = "GraceReturn"


def libs = ["io", "sys", "unicode"]

type ImmutableIndexedCollection = {
    [](_ : Number)
    at(_ : Number)
}

method compile(nodes: List, outFile, modName: String, runMode: String,
               buildType: String, libPath: String | Boolean) {
    if(runMode == "make") then {
        util.log_verbose("checking imports.")

        def imports = filter(nodes) with { node ->
            (node.kind == "import") && {
                def name = node.value.value

                io.exists("{name}.grace") && {
                    io.exists("{name}.java").not || {
                        io.newer("{name}.java", "{name}.grace").not
                    }
                }
            }
        }

        for(imports) do { node ->
            def name = node.value.value

            var cmd := "{sys.argv.first} --target java --make " ++
                    "{name}.grace --gracelib \"{util.gracelibPath}\""

            if(util.verbosity > 30) then {
                cmd := "{cmd} --verbose"
            }

            if(util.vtag) then {
                cmd := "{cmd} --vtag " ++ util.vtag
            }

            cmd := "{cmd} --noexec"

            if(io.system(cmd).not) then {
                util.syntax_error("failed processing import of {name}.")
            }
        }
    }

    compileModule(nodes, modName)
    util.outfile.close

    if(runMode == "make") then {
        util.log_verbose("compiling Java code.")

        def cmd = "javac -cp \".:{util.gracelibPath}\" {modName}.java"
        if(io.system(cmd).not) then {
            util.syntax_error("failed Java compilation of {modName}.")
        }
    }

    util.log_verbose("done.")

    if(buildType == "run") then {
        io.system("java -cp \".:{util.gracelibPath}\" {modName}")
    }
}

method compileModule(nodes: List, modName: String) {
    util.log_verbose("writing file.")

    def packages = []
    var name := ""
    for(modName) do { c ->
        if(c == "/") then {
            packages.push(name)
            name := ""
        } else {
            name := "{name}{c}"
        }
    }

    def scope = moduleScope

    // Top-level modules are in the default Java package.
    util.outfile.write(if(packages.size == 0) then { "" } else {
            scope.line("package {join(packages) separatedBy(".")}")
        } ++ scope.line("import grace.lang.*") ++
        scope.line("import grace.lib.*") ++
        scope.line("import java.lang.reflect.Method") ++

        // Each module is placed in a single class.
        scope.stmt(scope.module("public final class " ++
                "{name} extends {obj} \{", { scope' ->
            scope'.line("private static {name} $module") ++
                scope'.stmt(scope'.block("public static " ++
                        "{name} $module() \{", { scope'' ->
                    scope''.line("return $module == null ? $module = " ++
                        "new {name}() : $module")
                }, "\}")) ++

                scope'.line("private final {obj} self = this") ++

                // Methods appear as expected, and classes are objects assigned
                // to fields with an inner Java class to represent it.
                compileDeclarations(nodes, scope') ++

                // Top level code ends up in the module's constructor.
                scope'.stmt(scope'.block("private {name}() \{", { scope'' ->
                    scope''.line("final {obj} $outer = this") ++
                        compileExecution(nodes, scope'')
                }, "\}")) ++

                // Allows the module to be run from Java.
                scope'.stmt(scope'.block("public static void " ++
                        "main(String[] args) \{", { scope'' ->
                    scope''.line("grace.lib.sys.setArgs(args, \"{name}\")") ++
                        scope''.line("$module()")
                }, "\}"))
        }, "\}")))
}

method compileDeclarations(nodes: List, scope: Scope) -> String {
    join(kind("import") do { node ->
        scope.line(compileImportDecl(node, scope))
    }.kinds(["vardec", "defdec", "class"]) do { node ->
        def name = compileFieldName(node)
        if(scope.hasVariable(name).not) then {
            scope.addVariable(name)
            scope.line(compileField(node, scope)) ++
                if((scope.isModule & (node.kind == "class")) |
                        scope.isDecl) then {
                    scope.indent ++ compileGetter(node, scope) ++
                        if(node.kind == "vardec") then {
                            scope.indent ++ compileSetter(node, scope)
                        } else { "" }
            } else { "" }
        } else { "" }
    }.kind("method") do { node ->
        compileMethod(node, scope)
    }.kind("if") do { node ->
        compileDeclarations(node.thenblock, scope) ++
                compileDeclarations(node.elseblock, scope)
    }.kind("while") do { node ->
        compileDeclarations(node.body, scope)
    }.kind("for") do { node ->
        def params = node.body.params
        if(params.size == 0) then { "" } else {
            def param = [ast.astdefdec(params[1], void, void)]

            compileDeclarations(param, scope) ++
                compileDeclarations(node.body.body, scope)
        }
    }.in(nodes))
}

method compileExecution(nodes: List, scope: Scope) -> String {
    def k = kind("import") do { node ->
        scope.stmt(compileImportExec(node, scope))
    }.kind("return") do { node ->
        k.stop
        scope.line(compileReturn(node, scope))
    }.kind("vardec") do { node ->
        if(node.value /= false) then {
            scope.line(compileBindDecl(node, scope))
        } else { false }
    }.kind("defdec") do { node ->
        scope.line(compileBindDecl(node, scope))
    }.kind("bind") do { node ->
        scope.line(compileBind(node, scope))
    }.kind("if") do { node ->
        scope.line(compileIf(node, scope))
    }.kind("member") do { node ->
        scope.line(compileMember(node, scope))
    }.kind("call") do { node ->
        scope.line(compileCall(node, scope))
    }.kind("op") do { node ->
        scope.line(compileOp(node, scope))
    }.kind("class") do { node ->
        compileClass(node, scope)
    }.kind("object") do { node ->
        scope.line(compileObject(node, scope))
    }.kind("matchcase") do { node ->
        scope.stmt(compileMatch(node, scope))
    }.else { node ->
        if([ "method","type", "inherits"].contains(node.kind).not) then {
            util.log_verbose("Unknown statement: {node.kind}")
            scope.stmt("/* {node.kind} */")
        } else {
            ""
        }
    }

    join(k.in(nodes))
}

method compileExpression(node, scope: Scope) -> String {
    if(node.kind == "identifier") then {
        compileIdentifier(node, scope)
    } elseif(node.kind == "num") then {
        compileNumber(node, scope)
    } elseif(node.kind == "string") then {
        compileString(node, scope)
    } elseif(node.kind == "bind") then {
        "({compileBind(node, scope)})"
    } elseif(node.kind == "member") then {
        compileMember(node, scope)
    } elseif(node.kind == "call") then {
        compileCall(node, scope)
    } elseif(node.kind == "if") then {
        compileTernary(node, scope)
    } elseif(node.kind == "index") then {
        compileIndex(node, scope)
    } elseif(node.kind == "op") then {
        compileOp(node, scope)
    } elseif(node.kind == "array") then {
        compileArray(node, scope)
    } elseif(node.kind == "block") then {
        compileBlock(node, scope)
    } elseif(node.kind == "object") then {
        compileObject(node, scope)
    } elseif(node.kind == "matchcase") then {
        compileMatch(node, scope)
    } elseif(node.kind == "generic") then {
        compileIdentifier(node.value, scope)
    } elseif(node.kind == "literal") then {
        node.value
    } else {
        util.log_verbose("Unknown expression: {node.kind}")
        "/* {node.kind} */ $void"
    }
}

method compileImportDecl(node, scope: Scope) -> String {
    def name = escape(node.value.value)

    "private {obj} {name}"
}

method compileImportExec(node, scope: Scope) -> String {
    def name = escape(node.value.value)
    def expr = "{name}.class.getMethod(\"$module\").invoke(null);"

    "try \{ {name} = ({obj}) {expr} \} catch (Exception e) \{\}"
}

// Compiles an unassigned field based on the given AST node.
// It is unassigned because the nature of fields is declarative, so in order to
// have the assignment appear in the right place it must be in the execution.
// Note the `def`s aren't final in order to accomodate for this.
method compileField(node, scope: Scope) -> String {
    def acc = if(scope.isModule | scope.isDecl)
        then { "private " } else { "" }
    
    "{acc}{obj} {compileFieldName(node)}"
}

// Compiles an accessor method with the same name as the given AST node.
// Simply returns the current value of the node's field.
method compileGetter(node, scope: Scope) -> String {
    def name = compileFieldName(node)
    
    scope.block("public {obj} {name}() \{", { scope' ->
        scope'.line("return {name}")
    }, "\}\n")
}

method compileSetter(node, scope: Scope) -> String {
    def name = compileFieldName(node)
    
    scope.block("public {obj} {name}$58$61" ++
            "({obj} $) \{", { scope' ->
        scope'.line("this.{name} = $") ++
            scope'.line("return $void")
    }, "\}\n")
}

// Compiles a field's name. Accounts for a generic declaration.
method compileFieldName(node) -> String {
    escape(if(node.name.kind == "generic") then {
        node.name.value.value
    } else {
        node.name.value
    })
}

method compileMethod(node, scope: Scope) -> String {
    def acc = if(scope.isModule | scope.isDecl) then { "public " } else { "" }
    def name = escape(node.value.value)
    def params = join(map(node.params) with { param ->
        "final {obj} _{escape(param.value)}"
    }) separatedBy(", ") ++ if(node.varargs) then {
        ", final {obj}... _"
    } else { "" }
    
    scope.stmt(scope.block("{acc}{obj} " ++
            "{name}({params}) \{", { scope' ->
        // This is a minor optimisation that should be subsumed by analysing
        // when a closure is required.
        if(node.body.size == 0) then {
            scope'.line("return $void")
        } else {
            scope'.line("final {obj} $outer = this") ++
                scope'.stmt(scope'.block("class $Return " ++
                        "extends {ret} \{", { scope'' ->
                    scope''.stmt(scope''.block("public $Return" ++
                            "({obj} value) \{", { scope''' ->
                        scope'''.line("super(value)")
                    }, "\}"))
                }, "\}")) ++
                scope'.stmt(scope'.block("try \{", { scope'' ->
                    scope''.line("return {compileParamClosure(node, scope'')}")
                }, scope'.block("\} catch ($Return $return) \{", { scope'' ->
                    scope''.line("return $return.value")
                }, "\}")))
        }
    }, "\}"))
}

method compileParamClosure(node, scope: Scope) -> String {
    def body = map(node.params) with { param ->
        def name = escape(param.value)

        ast.astvardec(ast.astidentifier(name, void),
                      ast.astidentifier("_{name}", void), void)
    }

    if((node.kind == "method") && { node.varargs }) then {
        def name = escape(node.vararg.value)

        body.push(ast.astvardec(ast.astidentifier(name, void),
                  ast.astarray([ast.astidentifier("_", void)]), void))
    }

    for(node.body) do { node' ->
        body.push(node')
    }

    compileClosure(body, scope)
}

method compileClosure(body: List, scope: Scope) -> String {
    scope.block("new {obj}() \{", { scope' ->
        compileDeclarations(body, scope') ++
            scope'.stmt(scope'.block("{obj} execute() \{", { scope'' ->
                join(compileExecution(forceReturn(body), scope''))
            }, "\}"))
    }, "\}.execute()")
}

// Safely turns the last expression of the given body into a return stmt.
method forceReturn(body: List) -> List {
    if(body.size == 0) then {
        return [generateReturn(literal("$void"))]
    }

    def last = body[body.size]

    if(last.kind /= "return") then {
        body[body.size] := generateReturn(last)
    }

    body
}

method generateReturn(node) {
    node := ast.astreturn(node)
    node.register := "generated"
    node
}


method compileReturn(node, scope: Scope) -> String {
    if(node.register == "generated") then {
        "return {compileExpression(node.value, scope)}"
    } else {
        "throw new $Return({compileExpression(node.value, scope)})"
    }
}

method compileBindDecl(node, scope: Scope) -> String {
    def name = compileFieldName(node)
    def value = compileExpression(node.value, scope)
    
    "{name} = {value}"
}

method compileBind(node, scope: Scope) -> String {
    def dest = node.dest
    def value = compileExpression(node.value, scope)

    if(dest.kind == "member") then {
        def name = dest.value
        def on = compileExpression(dest.in, scope)

        "{on}.invoke(\"{name}:=\", {value})"
    } elseif(dest.kind == "index") then {
        def on = compileExpression(dest.value, scope)
        def in = compileExpression(dest.index, scope)

        "{on}.invoke(\"[]:=\", {in}, {value})"
    } else {
        def name = compileExpression(dest, scope)

        "{name} = {value}"
    }
}

method compileIf(node, scope: Scope) -> String {
    def condition = compileExpression(node.value, scope)
    def then = compileBlock(ast.astblock([], node.thenblock), scope)

    if(node.elseblock.size > 0) then {
        def else = compileBlock(ast.astblock([], node.elseblock), scope)

        "({condition}).ifTrue$else({then}, {else})"
    } else {
        "({condition}).ifTrue({then})"
    }
}

method compileMember(node, scope: Scope) -> String {
    if(node.value == "outer") then {
        if((node.in.kind == "identifier") && {
            node.in.value == "self"
        }) then {
            "self.outer"
        } else {
            "{compileExpression(node.in, scope)}.outer"
        }
    } else {
        compileCall(ast.astcall(node, []), scope)
    }
}

method compileCall(node, scope: Scope) -> String {
    def name = escape(node.value.value)
    def args = map(node.with) with { a -> compileExpression(a, scope) }
    def rest = join(args) separatedBy(", ")

    if(node.value.kind == "member") then {
        def comma = if(args.size > 0) then { ", " } else { "" }
        def in = compileExpression(node.value.in, scope)

        "{in}.invoke(\"{name}\"{comma}{rest})"
    } else {
        "{name}({rest})"
    }
}

method compileClass(node, scope: Scope) -> String {
    def name = escape(if(node.name.kind == "generic") then {
        node.name.value.value
    } else {
        node.name.value
    })

    def params = join(map(node.params) with { param ->
        "final {obj} _{escape(param.value)}"
    }) separatedBy(", ")

    def constructor = escape(node.constructor.value)
    def body = [ast.astobject(node.value, void)]
    def meth = ast.astmethod(void, node.params, body, void)

    scope.line(scope.block("{name} = new {obj}($outer, false) \{", { scope' ->
        // This outer is a hack until the outer class problem is fixed.
        scope'.line("private final {obj} $outer = this") ++
        scope'.stmt(scope'.block("public {obj} {constructor}({params}) \{",
            { scope'' ->
                scope''.line("return {compileParamClosure(meth, scope'')}")
            }, "\}")) ++ makeInvoke(scope')
    }, "\}"))
}

method compileInherits(node, scope: Scope) -> String {
    compileExpression(node.value, scope)
}

method compileNumber(node, scope: Scope) -> String {
    "new {num}({node.value})"
}

method compileString(node, scope: Scope) -> String {
    def value = join(map(node.value
            .replace("\\") with("\\\\")
            .replace("\"") with("\\\"")
            .replace("\n") with("\\n")
            .replace("\r") with("\\r")) with { char ->
        def ord = char.ord

        if((ord < 31) | (ord > 126)) then {
            var hex := util.hex(ord)
            while { hex.size < 4 } do {
                hex := "0" ++ hex
            }

            "\\u" ++ hex
        } else {
            char
        }
    })

    "new {str}(\"{value}\")"
}

method compileIndex(node, scope: Scope) -> String {
    compileCall(ast.astcall(object {
        def kind = "member"
        def value = "[]"
        def in = node.value
    }, [node.index]), scope)
}

// A call to if as an expression.
method compileTernary(node, scope: Scope) -> String {
    def cond = compileExpression(node.value, scope)
    def then = compileBlockExpression(node.thenblock, scope)
    def else = compileBlockExpression(node.elseblock, scope)

    "({cond}).ifTrue$else({then}, {else})"
}

method compileOp(node, scope: Scope) -> String {
    def left = compileExpression(node.left, scope)
    def right = compileExpression(node.right, scope)

    "{left}.binop(\"{node.value}\", {right})"
}

method compileBlock(node, scope: Scope) -> String {
    def body = forceReturn(node.body)

    scope.block("new {blk}($outer) \{", { scope' ->
        join(map(node.params) with { p ->
            scope'.line("{obj} {escape(p.value)}")
        }) ++
            compileDeclarations(body, scope') ++
            scope'.stmt(scope'.block("public {obj} apply" ++
                    "({obj}... $params) \{", { scope'' ->
                join(map(node.params) with { p, i ->
                    scope''.line("{escape(p.value)} = $params[{i - 1}]")
                }) ++ compileExecution(body, scope'')
            }, "\}")) ++ makeInvoke(scope')
    }, "\}")
}

method compileArray(node, scope: Scope) -> String {
    def values = join(map(node.value) with { value ->
        compileExpression(value, scope)
    }) separatedBy(", ")

    "new {lst}({values})"
}

method compileObject(node, scope: Scope) -> String {
    def body = node.value
    def extends = if((body.size > 0) && {
        body[1].kind == "inherits"
    }) then {
        compileInherits(body[1], scope)
    } else {
        false
    }

    def args = if(extends == false) then {
        "$outer, false"
    } else {
        "{extends}, $outer"
    }

    scope.decl("new {obj}({args}) \{", { scope' ->
        compileSelf(scope') ++ compileDeclarations(node.value, scope') ++
            scope'.stmt(scope'.block("\{", { scope'' ->
                scope''.line("final {obj} $outer = this") ++
                    compileExecution(node.value, scope'')
            }, "\}")) ++ makeInvoke(scope')
    }, "\}")
}

method compileMatch(node, scope: Scope) -> String {
    def matchee = compileExpression(node.value, scope)
    def params = join(map(node.cases) with { case ->
        compileExpression(case, scope)
    }) separatedBy(", ")
    def else = if(node.elsecase /= false) then {
        compileExpression(node.elsecase, scope)
    } else { "null" }

    "$match({matchee}, {else}, {params})"
}

// A helper for condensing block expressions.
// Note that this may cause the block to be evaluated early,
// so it should only be used in cases where this will not occur.
method compileBlockExpression(block: List, scope: Scope) -> String {
    if((block.size == 1) && {
        block[1].kind /= "return"
    }) then {
        compileExpression(block[1], scope)
    } elseif(block.size > 0) then {
        def expr = ast.astblock([], block)
        compileExpression(ast.astmember("apply", expr), scope)
    } else {
        "$void"
    }
}

// Escapes invalid characters from an identifier and renames Java keywords.
// Also compiles self, super and outer to their correct references.
method compileIdentifier(node, scope: Scope) -> String {
    def name = node.value

    if(name == "self") then {
        return "self.getSelf()"
    }

    escape(name)
}

method compileSelf(scope: Scope) -> String {
    scope.line("private final {obj} self = this") ++
        scope.line("private final {obj} $super = getSuper()")
}

method makeInvoke(scope: Scope) -> String {
    scope.stmt(scope.block("protected Object invoke(Method method, " ++
            "Object[] args) throws Exception \{", { scope' ->
        scope'.line("return method.invoke(this, args)")
    }, "\}"))
}


// Compiler utilities.

// The scope handles indentation and variables. They contain a number of
// helpers for making compilation easier, including entering new scopes.
type Scope = {

    // The scope encompassing this one.
    up -> Scope

    // Whether the scope is in a module declaration.
    isModule -> Boolean

    // Whether the scope is in an object declaration.
    isDecl -> Boolean

    // Introduces a variable name into this scope.
    addVariable(name: String) -> Void

    // Evaluates whether a variable is in this scope.
    hasVariable(name: String) -> Boolean

    // Names and introduces a new temporary variable in this scope.
    newVariable(prefix: String) -> String

    // The current indent level of this scope.
    indent -> String

    // Indents inner and surrounds it with the left and right strings.
    // Helper for generating correct indentation.
    block(left: String, inner: Block, right: String) -> String

    // As for block, but sets isModule to true.
    module(left: String, inner: Block, right: String) -> String

    // As for block, but sets isDecl to true.
    decl(left: String, inner: Block, right: String) -> String

    // Adds an indent and a line break to the given line.
    stmt(string: String) -> String

    // Adds an indent, a semicolon and a line break to the given line.
    line(string: String) -> String

}

// This should be used to initialise a scope, and the rest should be generated
// by calling one of the 'enter' methods on the resulting scopes.
method moduleScope -> Scope {
    ScopeFactory.new(0, void, true, false)
}

class ScopeFactory { ind: Number, outer', module': Boolean, decl': Boolean ->
    
    def isModule = module'
    def isDecl = decl'
    def up = outer'

    def variables = []

    method addVariable(name: String) -> Void {
        if(variables.contains(name).not) then {
            variables.push(name)
        }
    }

    method hasVariable(name: String) -> Boolean {
        variables.contains(name)
    }

    method newVariable(prefix: String) -> String {
        var i := 1

        while { hasVariable(prefix ++ i) } do {
            i += 1
        }

        def name = prefix ++ i

        addVariable(name)

        name
    }

    def indentAmount: Number = ind

    var indent' := false
    method indent -> String {
        if(indent' == false) then {
            var string := ""
            var i := 0

            while {i < indentAmount} do {
                string := string ++ "  "
                i := i + 1
            }

            indent' := string
        }

        indent'
    }

    method block(left: String, inner: Block, right: String) -> String {
        def scope = ScopeFactory.new(indentAmount + 1, self, false, false)
        left ++ "\n" ++ inner.apply(scope) ++ indent ++ right
    }

    method module(left: String, inner: Block, right: String) -> String {
        def scope = ScopeFactory.new(indentAmount + 1, self, true, false)
        left ++ "\n" ++ inner.apply(scope) ++ indent ++ right
    }

    method decl(left: String, inner: Block, right: String) -> String {
        def scope = ScopeFactory.new(indentAmount + 1, self, false, true)
        left ++ "\n" ++ inner.apply(scope) ++ indent ++ right
    }

    method stmt(string: String) -> String {
        "{indent}{string}\n"
    }

    method line(string: String) -> String {
        "{indent}{string};\n"
    }

}


// The Kind class and methods are used to simplify the process of querying and
// responding to different AST node kinds.

method kind(kind': String) do(block: Block) {
    Kinds.new.kind(kind') do(block)
}

method kinds(kinds': List) do(block: Block) {
    Kinds.new.kinds(kinds') do(block)
}

class Kinds {

    def map = HashMap.new
    var elseBlock := false
    var stopped := false
    
    method kind(kind': String) do(block: Block) {
        map.put(kind', block)
        self
    }

    method kinds(kinds': List) do(block: Block) {
        for(kinds') do { kind' ->
            map.put(kind', block)
        }
        self
    }

    method else(block: Block) {
        elseBlock := block
        self
    }

    method in(nodes: List) -> List {
        def else' = elseBlock /= false

        map(if(else') then {nodes} else {
            filter(nodes) with { node -> map.contains(node.kind) }
        }) with { node ->
            if(stopped) then {
                false
            } elseif(map.contains(node.kind)) then {
                map.get(node.kind).apply(node)
            } else {
                elseBlock.apply(node)
            }
        } filter { node -> node /= false }
    }

    method stop {
        stopped := true
    }

}

def keywords = ["package", "import", "class", "this", "super", "null", "new",
                "void", "int", "float", "double", "boolean", "char", "byte",
                "public", "protected", "private", "static", "final", "extends",
                "if", "else", "for", "while", "do", "switch", "case",
                "default", "synchronized", "volatile", "return", "wait",
                "true", "false", obj, blk, bln, num, str, lst, ret]

method escape(ident: String) -> String {
    if(keywords.contains(ident)) then {
        return "$" ++ ident
    }

    // This is either an ignored identifier or generated by the compiler.
    if(ident[1] == "_") then {
        return ident
    }

    if(unicode.isLetter(ident[1])) then {
        def ignore = ["$", "_"]
        var inParens := false

        join(map(ident) with { c ->
            if(inParens) then {
                inParens := c /= ")"
                ""
            } elseif(c == "(") then {
                inParens := true
                "$"
            } elseif(c == "'") then {
                "_"
            } elseif(isValidIdentifierCharacter(c)) then {
                c
            } else {
                "${c.ord}"
            }
        })
    } else {
        "bin" ++ join(map(ident) with { c -> "${c.ord}" })
    }
}

method isValidIdentifierCharacter(c: String) -> Boolean {
    unicode.isLetter(c) | unicode.isNumber(c) | (c == "$") | (c == "_")
}

// Hack for adding direct Java literals into the AST.
method literal(value': String) {
    object {
        def value = value'
        def kind = "literal"
    }
}


// General utilities.

// Maps a list to a new one with the given block.
method map(list: ImmutableIndexedCollection) with(with: Block) -> List {
    def list' = []
    var i := 1
    for(list) do { e ->
        list'.push(with.apply(e, i))
        i := i + 1
    }

    list'
}

// Filters out elements from a list with the given block.
method filter(list: List) with(choice: Block) -> List {
    def list' = []
    for(list) do { e ->
        if(choice.apply(e)) then {
            list'.push(e)
        }
    }

    list'
}

// Maps a list to a new one with the given block and filter.
// More efficient but equivalent to filter(map(list) with(with)) with(filter).
method map(list: List) with(with: Block) filter(filter: Block) -> List {
    def list' = []
    var i := 1
    for(list) do { e ->
        def result = with.apply(e, i)
        if(filter.apply(result)) then {
            list'.push(result)
        }
        i := i + 1
    }

    list'
}

// Joins the elements of the given list together into a string.
method join(list: ImmutableIndexedCollection) -> String {
    join(list) separatedBy("")
}

// Joins the elements of the given list together into a string, with separator.
method join(list: ImmutableIndexedCollection) separatedBy(by: String) -> String {
    var once := false
    var string := ""
    for(list) do { val ->
        if(once) then {
            string := string ++ by
        }
        string := string ++ val
        once := true
    }

    string
}

// In-place concatenation of lists. Modifies and returns the first list.
method concat(list: List, *attach: List) -> List {
    for(attach) do { list' ->
        for(list') do { el ->
            list.push(el)
        }
    }

    list
}
