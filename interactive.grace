#pragma DefaultVisibility=public
import "mgcollections" as collections
import "mirrors" as mirrors
import "repl" as repl
import "ast" as ast
import "sys" as sys
import "io" as io
import "util" as util
import "lexer" as lexer
import "parser" as parser
import "identifierresolution" as identifierresolution

class replObj.new(kind', val', *env') {
    def kind = kind'
    var val := val'
    var env := collections.map.new
    if (env'.size > 0) then {
        env := env'.first
    }
    var usedvars := []
    var name := ""
    var classobj := replClass.new
    var superobj := false
}

class replClass.new {
    def kind = "replclass"
    var methods := collections.map.new
}

class evalVisitor.new {
    inherits ast.baseVisitor
    def ReturnException = Exception.refine "ReturnException"

    // Top-level interpreter object. Everything that is not in an explicit
    // object goes into here.
    var _curobj := replObj.new("replobj", ast.objectNode.new([], false))
    _curobj.name := "__obj0"
    _curobj.env.put("self", _curobj)
    _curobj.env.put("__obj0", _curobj)
    var _env := _curobj.env

    var _classes := collections.map.new

    // Since visitor methods can't return values this field is needed to hold
    // the actual results of a node evaluation. These results have to be
    // replObj instances.
    var _result

    var objc := 2
    var blockc := 0

    // Set to 'true' when counting variables inside a method so the nodes don't
    // get executed.
    var noexec := false

    var usedvars := []
    var inblock := false
    var _curmeth := ""

    repl.registerVisitor(self)

    method getResult {
        _result
    }

    method resolve(val) {
        def result = match(val)
            case { v : {kind} ->
                if ((v.kind == "replvar") || (v.kind == "replobj") ||
                    (v.kind == "replblock")) then {
                    val
                } elseif (v.kind == "identifier") then {
                    resolveidentifier(val)
                } else {
                    val.accept(self)
                    _result
                }
            }
            case { _ -> replObj.new("replvar", val) }

        return result
    }

    method resolveidentifier(v) {
        if (v.value == "true") then {
            return replObj.new("replvar", true)
        } elseif (v.value == "false") then {
            return replObj.new("replvar", false)
        } elseif (v.value == "done") then {
            return replObj.new("replvar", done)
        } else {
            // _env may not be the current object env, for example in closures
            if (_env.contains(v.value)) then {
                return _env.get(v.value)
            } else {
                return findvar(v.value, _curobj)
            }
        }
    }

    method findvar(v, o) {
        var curobj := o
        while {!curobj.env.contains(v) && (curobj.superobj != false)} do {
            curobj := curobj.superobj
        }
        if (curobj.env.contains(v)) then {
            return curobj.env.get(v)
        } else {
            return false
        }
    }

    method findmethod(m, o) {
        var curobj := o
        while {!curobj.classobj.methods.contains(m) &&
               (curobj.superobj != false)} do {
            curobj := curobj.superobj
        }
        if (curobj.classobj.methods.contains(m)) then {
            return curobj.classobj.methods.get(m)
        } else {
            return false
        }
    }

    method createnativeobject(o) {
        // Creates a native object with function pointers to the trampoline()
        // function in repl.c which dispatches calls to the actual interactive
        // methods.
        var numFields := 1
        var numMethods := 0
        var pos := 1

        numMethods := o.classobj.methods.size
        if (o.kind == "replobj") then {
            for (o.val.value) do { e ->
                if (e.kind == "defdec") then {
                    numMethods := numMethods + 1
                } elseif (e.kind == "vardec") then {
                    numMethods := numMethods + 2
                }
            }
        }

        var no := repl.createobject(numMethods, numFields)

        for (o.classobj.methods) do { m ->
            var mval := o.classobj.methods.get(m)
            repl.addmethod(no, o.name, mval.val.value.value, pos)
            pos := pos + 1
        }
        if (o.kind == "replobj") then {
            for (o.val.value) do { e ->
                if (e.kind == "defdec") then {
                    repl.addmethod(no, o.name, e.name.value, pos)
                    pos := pos + 1
                } elseif (e.kind == "vardec") then {
                    repl.addmethod(no, o.name, e.name.value, pos)
                    pos := pos + 1
                    repl.addmethod(no, o.name, e.name.value ++ ":=", pos)
                    pos := pos + 1
                }
            }
        }

        return no
    }

    method visitFor(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def over = resolve(node.value)

        def myblockc = blockc
        blockc := blockc + 1

        def block = node.body
        visitBlock(block)
        _env.put("__block{myblockc}", _result)
        def id = ast.memberNode.new("apply",
                                ast.identifierNode.new("__block{myblockc}",
                                                   false))

        for (over.val) do { v' ->
            var v := resolve(v')
            var paraml := []
            if (block.params.size > 0) then {
                var param := block.params[1]
                _env.put(param.value, v)
                paraml := [param]
            }
            def callnode = ast.callNode.new(id, [ast.callWithPart.new(id.value, paraml)])
            visitCall(callnode)
        }

        return false
    }

    method visitWhile(node) -> Boolean {
        if (noexec) then {
            return true
        }
        def condblockc = blockc
        blockc := blockc + 1
        def bodyblockc = blockc
        blockc := blockc + 1

        def condblock = node.value
        visitBlock(condblock)
        _env.put("__block{condblockc}", _result)
        def condid = ast.memberNode.new("apply",
                                    ast.identifierNode.new("__block{condblockc}",
                                                       false))
        def condcallnode = ast.callNode.new(condid, [ast.callWithPart.new(condid.value)])
        visitCall(condcallnode)
        var cond := _result

        def bodyblock = node.body
        visitBlock(bodyblock)
        _env.put("__block{bodyblockc}", _result)
        def bodyid = ast.memberNode.new("apply",
                                    ast.identifierNode.new("__block{bodyblockc}",
                                                       false))
        def bodycallnode = ast.callNode.new(bodyid, [ast.callWithPart.new(bodyid.value)])

        while {cond.val} do {
            visitCall(bodycallnode)
            visitCall(condcallnode)
            cond := _result
        }

        return false
    }

    method visitIf(node) -> Boolean {
        if (noexec) then {
            return true
        }
        def cond = resolve(node.value)

        if (cond.val) then {
            for (node.thenblock) do { s ->
                s.accept(self)
            }
        } else {
            for (node.elseblock) do { s ->
                s.accept(self)
            }
        }

        return false
    }

    method visitBlock(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def blockobj = replObj.new("replblock", node, _env)

        def myblockc = blockc
        blockc := blockc + 1

        blockobj.name := "__block{myblockc}"
        _env.put("__block{myblockc}", blockobj)

        def curobjold = _curobj
        _curobj := blockobj

        def inblockold = inblock
        inblock := true

        def id = ast.identifierNode.new("apply", false)
        var applymeth := ast.methodNode.new(
                             id,
                             [ast.signaturePart.new(id, node.params)],
                             node.body,
                             false)
        applymeth.selfclosure := true
        applymeth.accept(self)

        inblock := inblockold

        _curobj := curobjold

        _result := blockobj
        return false
    }

    method visitMatchCase(node) -> Boolean { true }
    method visitCatchCase(node) -> Boolean { true }
    method visitMethodType(node) -> Boolean { true }
    method visitType(node) -> Boolean { true }

    method visitMethod(node) -> Boolean {
        def name = node.value.value

        var curmethold
        if (!inblock) then {
            curmethold := _curmeth
            _curmeth := name
        }
        var noexecold := noexec
        noexec := true
        var usedvarsold := usedvars
        usedvars := []

        for (node.body) do { s ->
            s.accept(self)
        }

        if (node.selfclosure) then {
            usedvars.push("self")
        }

        for (usedvars) do { v ->
            if (v != "self") then {
                if (!usedvarsold.contains(v)) then {
                    usedvarsold.push(v)
                }
            }
        }

        if (!noexecold) then {
            def entry = replObj.new("method", node)
            entry.usedvars := usedvars
            _curobj.classobj.methods.put(name, entry)

            // if the current object is the main repl object, add the node to
            // its body in case it needs to be turned into a native object
            if (_curobj.name == "__obj0") then {
                _curobj.val.value.push(node)
            }
        }

        usedvars := usedvarsold
        noexec := noexecold

        if (!inblock) then {
            _curmeth := curmethold
        }

        _result := true
        return false
    }

    method visitCall(node) -> Boolean {
        if (noexec) then {
            return true
        }
        def name = node.value.value
        def in = node.value.in

        if ((name == "print") &&
           (in.kind == "identifier") &&
           (in.value == "prelude")) then {
            // print()
            var parts := []
            for (node.with) do { part ->
                var args := []
                for (part.args) do { a ->
                    args.push(resolve(a))
                }
                parts.push(args)
            }

            // Currently this only works for the first argument to a print()
            // call since it can't be called with a list via reflection.
            def arg = parts[1][1]
            if (findmethod("asString", arg) != false) then {
                def methobj = findmethod("asString", arg)
                def meth = methobj.val
                def curobjold = _curobj
                _curobj := arg

                var methenv := collections.map.new
                for (methobj.usedvars) do { v ->
                    if (arg.env.contains(v)) then {
                        methenv.put(v, arg.env.get(v))
                    }
                }

                def outerenv = _env
                _env := methenv

                for (meth.body) do { s ->
                    s.accept(self)
                }

                _env := outerenv
                _curobj := curobjold

                _result := replObj.new("replvar", print(_result.val))
            } else {
                _result := replObj.new("replvar", print(arg.val))
            }
        } elseif ((name == "for()do") &&
                  (in.kind == "identifier") &&
                  (in.value == "prelude")) then {
            // for()do
            def cond = node.with[1].args[1]
            def body = node.with[2].args[1]
            def fornode = ast.forNode.new(cond, body)
            visitFor(fornode)
        } elseif ((name == "while()do") &&
                  (in.kind == "identifier") &&
                  (in.value == "prelude")) then {
            // while()do
            def cond = node.with[1].args[1]
            def body = node.with[2].args[1]
            def whilenode = ast.whileNode.new(cond, body)
            visitWhile(whilenode)
        } elseif ((name == "minigrace") &&
                  (in.kind == "identifier") &&
                  (in.value == "prelude")) then {
            // minigrace object
            _result := replObj.new("replvar", minigrace)
        } else {
            // non-builtin method
            var inobj := resolve(in)
            def namelen = name.size
            if ((false == inobj.val) && (name == "&&")) then {
                // short-circuit '&&'
                _result := inobj
            } elseif ((true == inobj.val) && (name == "||")) then {
                // short-circuit '||'
                _result := inobj
            } elseif (findmethod(name, inobj) != false) then {
                // interactive method
                def methobj = findmethod(name, inobj)
                def meth = methobj.val

                // get the needed variable values from the object that the
                // method is called on
                var methenv := collections.map.new
                for (methobj.usedvars) do { v ->
                    if (inobj.env.contains(v)) then {
                        methenv.put(v, inobj.env.get(v))
                    }
                }

                // copy argument values into the method environment
                for (meth.signature.indices) do { partnr ->
                    var part := meth.signature[partnr]
                    for (part.params.indices) do { paramnr ->
                        var param := part.params[paramnr]
                        var arg := node.with[partnr].args[paramnr]
                        methenv.put(param.value, resolve(arg))
                    }
                    if (part.vararg != false) then {
                        var vararg := []
                        var callpart := node.with[partnr]
                        var nparams := part.params.size
                        var nargs := callpart.args.size
                        for ((nparams + 1)..nargs) do { argnr ->
                            var arg := callpart.args[argnr]
                            vararg.push(resolve(arg))
                        }
                        methenv.put(part.vararg.value, replObj.new("replvar", vararg))
                    }
                }

                def curobjold = _curobj
                _curobj := inobj
                def outerenv = _env
                _env := methenv

                // non-local returns: don't catch returns in the "apply"
                // methods of blocks so the enclosing method returns instead
                var raiseagain := false
                if (meth.selfclosure) then {
                    for (meth.body) do { s ->
                        s.accept(self)
                    }
                } else {
                    catch {
                        for (meth.body) do { s ->
                            s.accept(self)
                        }
                    } case {
                        e : ReturnException ->
                            if (e.message != name) then {
                                raiseagain := e.message
                            }
                    }
                }

                _env := outerenv
                _curobj := curobjold

                if (raiseagain != false) then {
                    ReturnException.raise(raiseagain)
                }
            } elseif (findvar(name, inobj) != false) then {
                // this call is actually a variable access, so just return the
                // value
                _result := findvar(name, inobj)
            } elseif ((name[namelen - 1] == ":") && (name[namelen] == "=") &&
                      (findvar(name.substringFrom(1)to(namelen - 2), inobj) != false)) then {
                // variable assignment (bind)
                def o = findvar(name.substringFrom(1)to(namelen - 2), inobj)
                def newvar = resolve(node.with[1].args[1])
                o.val      := newvar.val
                o.env      := newvar.env
                o.name     := newvar.name
                o.classobj := newvar.classobj
                o.superobj := newvar.superobj
                _result := o
            } else {
                // compiled/native method
                var parts := []
                for (node.with) do { part ->
                    var args := []
                    for (part.args) do { arg ->
                        def argobj = resolve(arg)
                        var no
                        // Equality tests have to be handled differently since a
                        // newly created native object would always be different
                        // from the object to compare to.
                        if ((argobj.kind == "replobj") &&
                            (name != "==") && (name != "!=")) then {
                            no := createnativeobject(argobj)
                        } elseif (argobj.kind == "replblock") then {
                            if ((name == "&&") || (name == "||")) then {
                                // If this is a boolean call then explicitly
                                // apply block parameters that were used for
                                // short-circuiting
                                def myblockc = blockc
                                blockc := blockc + 1
                                _env.put("__block{myblockc}", argobj)
                                def id = ast.memberNode.new(
                                             "apply",
                                             ast.identifierNode.new("__block{myblockc}",
                                                                    false)
                                         )
                                def callnode = ast.callNode.new(
                                                   id,
                                                   [ast.callWithPart.new(id.value)]
                                               )
                                visitCall(callnode)
                                no := _result.val
                            } else {
                                no := createnativeobject(argobj)
                            }
                        } else {
                            no := argobj.val
                        }
                        args.push(no)
                    }
                    parts.push(args)
                }

                var ret := mirrors.reflect(inobj.val).getMethod(name).request(parts)
                _result := replObj.new("replvar", ret)
            }
        }

        return false
    }

    method visitClass(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def entry = replClass.new
        _classes.put(node.name.value, entry)

        def obj = ast.objectNode.new(node.value, node.superclass)
        obj.classname := node.name.value
        var newmeth := ast.methodNode.new(node.constructor, node.signature, [obj], false)
        var cobj := ast.objectNode.new([newmeth], false)
        var con := ast.defDecNode.new(node.name, cobj, false)
        con.accept(self)

        _result := true
        return false
    }

    method visitObject(node) -> Boolean {
        if (noexec) then {
            return true
        }

        var noexecold := noexec
        noexec := true
        var usedvarsold := usedvars
        usedvars := []

        for (node.value) do { s ->
            s.accept(self)
        }

        for (usedvars) do { v ->
            if ((v != "self") && (v != "outer")) then {
                if (!usedvarsold.contains(v)) then {
                    usedvarsold.push(v)
                }
            }
        }

        var objenv := collections.map.new
        for (usedvars) do { v ->
            if (_env.contains(v)) then {
                objenv.put(v, _env.get(v))
            }
        }

        var myobjc := objc
        objc := objc + 1

        def entry = replObj.new("replobj", node, objenv)
        entry.name := "__obj{myobjc}"
        _env.put("__obj{myobjc}", entry)
        objenv.put("self", entry)
        // self reference for compiled methods
        objenv.put("__obj{myobjc}", entry)
        objenv.put("outer", _curobj.env.get("self"))

        usedvars := usedvarsold
        noexec := noexecold

        if (node.classname != "object") then {
            entry.classobj := _classes.get(node.classname)
        }

        var curobjold := _curobj
        _curobj := entry
        var envold := _env
        _env := objenv

        for (node.value) do { s ->
            s.accept(self)
        }

        _env := envold
        _curobj := curobjold

        _result := entry
        return false
    }

    method visitArray(node) -> Boolean {
        if (noexec) then {
            return true
        }

        var res := []

        for (node.value) do { v ->
            def rv = resolve(v)
            res.push(rv)
        }

        _result := replObj.new("replvar", res)

        return false
    }

    method visitMember(node) -> Boolean {
        if (noexec) then {
            usedvars.push(node.value)
            return true
        }

        // this is actually a call
        var callnode := ast.callNode.new(node, [ast.callWithPart.new(node.value)])
        visitCall(callnode)

        return false
    }

    method visitGeneric(node) -> Boolean { true }

    method visitIdentifier(node) -> Boolean {
        if (noexec) then {
            usedvars.push(node.value)
            return true
        }

        _result := resolve(node)

        return false
    }

    method visitOctets(node) -> Boolean { true }

    method visitString(node) -> Boolean {
        if (noexec) then {
            return true
        }

        _result := replObj.new("replvar", node.value)

        return false
    }

    method visitNum(node) -> Boolean {
        if (noexec) then {
            return true
        }

        _result := replObj.new("replvar", node.value.asNumber)

        return false
    }

    method visitOp(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def op = node.value
        def membernode = ast.memberNode.new(op, node.left)
        def callnode = ast.callNode.new(membernode, [ast.callWithPart.new(op, [node.right])])
        visitCall(callnode)

        return false
    }

    method visitIndex(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def value = resolve(node.value).val
        def index = resolve(node.index).val

        _result := replObj.new("replvar", value[index])

        return false
    }

    method visitBind(node) -> Boolean {
        if (noexec) then {
            return true
        }

        // Transform the bind operation into a method call, so things like
        // overridden methods and binds on native objects can be handled
        // transparently by the visitCall() method.
        var membernode
        if (node.dest.kind == "member") then {
            membernode := ast.memberNode.new("{node.dest.value}:=",
                                             node.dest.in)
        } else {
            membernode := ast.memberNode.new("{node.dest.value}:=",
                              ast.identifierNode.new("self", false)
                          )
        }
        def callnode = ast.callNode.new(membernode,
                                        [ast.callWithPart.new(
                                             "{node.dest.value}:=",
                                             [node.value]
                                        )]
                       )
        visitCall(callnode)

        return false
    }

    method visitDefDec(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def name  = node.name.value
        def value = resolve(node.value)

        _env.put(name, value)

        // if the current object is the main repl object, add the node to its
        // body in case it needs to be turned into a native object
        if (_curobj.name == "__obj0") then {
            _curobj.val.value.push(node)
        }

        _result := value

        return false
    }

    method visitVarDec(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def name  = node.name.value
        def value = resolve(node.value)

        _env.put(name, value)

        // if the current object is the main repl object, add the node to its
        // body in case it needs to be turned into a native object
        if (_curobj.name == "__obj0") then {
            _curobj.val.value.push(node)
        }

        _result := value

        return false
    }

    method visitImport(node) -> Boolean {
        if (noexec) then {
            return true
        }

        def name = node.value
        def path = node.path
        def mod = mirrors.loadDynamicModule(path)
        def o = replObj.new("replvar", mod)
        _env.put(name, o)

        _result := o

        return false
    }

    method visitReturn(node) -> Boolean {
        if (noexec) then {
            // Save the method scope the return belongs to to allow non-local
            // returns from blocks.
            // Using node.register is really ugly, but it's not really used for
            // anything anymore ...
            if (_curmeth != "") then {
                node.register := _curmeth
            }
            return true
        }

        def value = resolve(node.value)

        _result := value

        ReturnException.raise(node.register)

        return false
    }

    method visitInherits(node) -> Boolean {
        if (noexec) then {
            return true
        }

        var superobj := resolve(node.value)
        _curobj.superobj := superobj
        _curobj.env.put("super", superobj)

        _result := superobj

        return false
    }
}

var nparens := 0
var nbraces := 0
var nsquares := 0

method iscontinued {
    return (nparens != 0) || (nbraces != 0) || (nsquares != 0)
}

method startRepl {
    var cont := true
    var tcenv := collections.map.new
    var visitor := evalVisitor.new
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
                    for (toks) do {t->
                        util.lines.push("lines unavailable in interpreter")
                    }
                    var vals := parser.parse(toks)
                    if (!io.input.isatty && (util.errno != 0)) then {
                        sys.exit(util.errno)
                    } elseif (util.errno == 0) then {
                        // TODO - this used to pass tcenv into identifier
                        // resolution, but doesn't now. Things seem to work.
                        vals := identifierresolution.resolve(vals)
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
                                    if (done != res) then {
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
