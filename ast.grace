var kwyj1 := 1
var kwyj2 := 2
import util

// This module contains pseudo-classes for all the AST nodes used
// in the parser. The module predates the existence of classes in the
// implementation, so they are written as object literals inside methods.
// Each node has a different signature according to its function, but the
// common interface is:
// dtype ASTNode {
//   kind -> String // Used for pseudo-instanceof tests.
//   register -> String // Used later on to hold the LLVM register of
//                      // the resulting object.
//   line -> Number // The source line the node came from.
//   pretty(n:Number) -> String // Pretty-print of node at depth n,
// }
// Most also contain "value", with varied dtypes, holding the main value
// in the node. Some contain other fields for their specific use: while has
// both a value (the condition) and a "body", for example. None of the nodes
// are particularly notable in any way.

method astfor(over, body') {
    object {
        def kind = "for"
        def value = over
        def body = body'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "For\n"
            s := s ++ spc ++ self.value.pretty(depth+1)
            s := s ++ "\n"
            s := s ++ spc ++ "Do:"
            s := s ++ "\n" ++ spc ++ "  " ++ self.body.pretty(depth + 1)
            s
        }
    }
}
method astwhile(cond, body') {
    object {
        def kind = "while"
        def value = cond
        def body = body'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "While\n"
            s := s ++ spc ++ self.value.pretty(depth+1)
            s := s ++ "\n"
            s := s ++ spc ++ "Do:"
            for (self.body) do { x ->
                s := s ++ "\n  "++ spc ++ x.pretty(depth+2)
            }
            s
        }
    }
}
method astif(cond, thenblock', elseblock') {
    object {
        def kind = "if"
        def value = cond
        def thenblock = thenblock'
        def elseblock = elseblock'
        var register := ""
        def line = util.linenum
        var handledIdentifiers := false
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "If\n"
            s := s ++ spc ++ self.value.pretty(depth+1)
            s := s ++ "\n"
            s := s ++ spc ++ "Then:"
            for (self.thenblock) do { ix ->
                s := s ++ "\n  "++ spc ++ ix.pretty(depth+2)
            }
            s := s ++ "\n"
            s := s ++ spc ++ "Else:"
            for (self.elseblock) do { ix ->
                s := s ++ "\n  "++ spc ++ ix.pretty(depth+2)
            }
            s
        }
    }
}
method astblock(params', body') {
    object {
        def kind = "block"
        def value = "block"
        def params = params'
        def body = body'
        def selfclosure = true
        var register := ""
        var matchingPattern := false
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Block\n"
            s := s ++ spc ++ "Parameters:"
            for (self.params) do { mx ->
                s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
            }
            s := s ++ "\n"
            s := s ++ spc ++ "Body:"
            for (self.body) do { mx ->
                s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
            }
            if (matchingPattern != false) then {
                s := s ++ "\n"
                s := s ++ spc ++ "Pattern:"
                s := s ++ "\n  "++ spc ++ matchingPattern.pretty(depth+2)
            }
            s
        }
    }
}
method astmatchcase(matchee, cases', elsecase') {
    object {
        def kind = "matchcase"
        def value = matchee
        def cases = cases'
        def elsecase = elsecase'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Match\n"
            s := s ++ spc ++ matchee.pretty(depth + 2)
            for (self.cases) do { mx ->
                s := s ++ "\n{spc}Case:\n{spc}  {mx.pretty(depth+2)}"
            }
            if (false != elsecase) then {
                s := s ++ "\n{spc}Else:\n{spc}  {elsecase.pretty(depth+2)}"
            }
            s
        }
    }
}
method astmethodtype(name', signature', rtype') {
    // [signature]
    //     [part1]
    //         name
    //         [params]
    //         vararg
    //     [part2]
    //         name
    //         [params]
    //         vararg
    //     ...
    //     [partn]
    //         ...
    object {
        def kind = "methodtype"
        def value = name'
        def signature = signature'
        def rtype = rtype'
        def line = util.linenum
        var register := ""
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "MethodType\n"
            s := "{s}{spc}Name: {value}\n"
            if (rtype /= false) then {
                s := "{s}{spc}Returns:\n  {spc}{rtype.value}\n"
            }
            s := s ++ spc ++ "Parameters:"
            // for (params) do { mx ->
            //     s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
            //     if (mx.dtype /= false) then {
            //         s := "{s} : {mx.dtype.value}"
            //     }
            // }
            s
        }
    }
}
method asttype(name', methods') {
    object {
        def kind = "type"
        def value = name'
        def methods = methods'
        def unionTypes = []
        def intersectionTypes = []
        def line = util.linenum
        var generics := []
        var nominal := false
        var register := ""
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Type\n"
            s := "{s}{spc}Name: {value}\n"
            if (unionTypes.size > 0) then {
                s := "{s}{spc}Union of:\n"
                for (unionTypes) do {ut->
                    s := "{s}{spc}  {ut.value}\n"
                }
            }
            if (intersectionTypes.size > 0) then {
                s := "{s}{spc}Intersection of:\n"
                for (intersectionTypes) do {it->
                    s := "{s}{spc}  {it.value}\n"
                }
            }
            s := s ++ spc ++ "Methods:"
            for (methods) do { mx ->
                s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
            }
            s := s ++ "\n"
            s
        }
    }
}
method astmethod(name', signature', body', dtype') {
    // [signature]
    //     [part1]
    //         name
    //         [params]
    //         vararg
    //     [part2]
    //         name
    //         [params]
    //         vararg
    //     ...
    //     [partn]
    //         ...
    object {
        def kind = "method"
        def value = name'
        def signature = signature'
        def body = body'
        var dtype := dtype'
        var varargs := false
        var selfclosure := false
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Method\n"
            s := s ++ spc ++ "Name: " ++ self.value.pretty(depth+1)
            s := s ++ "\n"
            s := s ++ spc ++ "Parameters:"
            for (self.params) do { mx ->
                s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
            }
            s := s ++ "\n"
            s := s ++ spc ++ "Body:"
            for (self.body) do { mx ->
                s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
            }
            s
        }
    }
}
method astcall(what, with') {
    // [with]
    //     [part1]
    //         param1
    //         param2
    //         vararg1
    //         vararg2
    //         ...
    //     [part2]
    //     ...
    //     [partn]
    object {
        def kind = "call"
        def value = what
        def with = with'
        var meth := false
        def line = 0 + util.linenum
        var register := ""
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Call\n"
            s := s ++ spc ++ "Method:\n"
            s := s ++ "  " ++ spc ++ self.value.pretty(depth+2)
            s := s ++ "\n"
            s := s ++ spc ++ "Parameters:"
            for (self.with) do { x ->
                s := s ++ "\n  "++ spc ++ x.pretty(depth+2)
            }
            s
        }
    }
}
method astclass(name', signature', body', superclass', constructor') {
    object {
        def kind = "class"
        def value = body'
        def name = name'
        def constructor = constructor'
        def signature = signature'
        var register := ""
        def line = util.linenum
        def superclass = superclass'
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Class(" ++ self.name.pretty(0) ++ ")"
            if (self.superclass /= false) then {
                s := s ++ "\n" ++ spc ++ "Superclass:"
                s := s ++ "\n  " ++ spc ++ self.superclass.pretty(depth + 2)
            }
            s := s ++ "\n" ++ spc ++ "Parameters:"
            for (self.params) do {x->
                s := s ++ "\n  " ++ spc ++ x.pretty(depth+2)
            }
            s := s ++ "\n" ++ spc ++ "Body:"
            for (self.value) do { x ->
                s := s ++ "\n  "++ spc ++ x.pretty(depth+2)
            }
            s
        }
    }
}
method astobject(body, superclass') {
    object {
        def kind = "object"
        def value = body
        var register := ""
        def line = util.linenum
        def superclass = superclass'
        var otype := false
        var classname := "object"
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Object"
            if (self.superclass /= false) then {
                s := s ++ "\n" ++ spc ++ "Superclass:"
                s := s ++ "\n  " ++ spc ++ self.superclass.pretty(depth + 1)
                s := s ++ "\n" ++ spc ++ "Body:"
                depth := depth + 1
            }
            for (self.value) do { x ->
                s := s ++ "\n"++ spc ++ x.pretty(depth+1)
            }
            s
        }
    }
}
method astarray(values) {
    object {
        def kind = "array"
        def value = values
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { ai ->
                spc := spc ++ "  "
            }
            var s := "Array"
            for (self.value) do { ax ->
                s := s ++ "\n"++ spc ++ ax.pretty(depth+1)
            }
            s
        }
    }
}
method astmember(what, in') {
    object {
        def kind = "member"
        var value := what
        def in = in'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Member(" ++ self.value ++ ")\n"
            s := s ++ spc ++ self.in.pretty(depth+1)
            s
        }
    }
}
method astgeneric(base, params') {
    object {
        def kind = "generic"
        def value = base
        def params = params'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var s := "Generic(" ++ self.value.value ++ "<"
            for (params) do {p->
                s := s ++ p.pretty(0)
                s := s ++ ","
            }
            s ++ ">)"
        }
    }
}
method astidentifier(n, dtype') {
    object {
        def kind = "identifier"
        var value := n
        var dtype := dtype'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            "Identifier(" ++ self.value ++ ")"
        }
    }
}
method astoctets(n) {
    object {
        def kind = "octets"
        def value = n
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            "Octets(" ++ self.value ++ ")"
        }
    }
}
method aststring(n) {
    object {
        def kind = "string"
        var value := n
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            "String(" ++ self.value ++ ")"
        }
    }
}
method astnum(n) {
    object {
        def kind = "num"
        def value = n
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            "Num(" ++ self.value ++ ")"
        }
    }
}
method astop(op, l, r) {
    object {
        def kind = "op"
        def value = op
        def left = l
        def right = r
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Op(" ++ self.value ++ ")"
            s := s ++ "\n"
            s := s ++ spc ++ self.left.pretty(depth + 1)
            s := s ++ "\n"
            s := s ++ spc ++ self.right.pretty(depth + 1)
            s
        }
    }
}
method astindex(expr, index') {
    object {
        def kind = "index"
        def value = expr
        def index = index'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Index"
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
            s := s ++ "\n"
            s := s ++ spc ++ self.index.pretty(depth + 1)
            s
        }
    }
}
method astbind(dest', val') {
    object {
        def kind = "bind"
        def dest = dest'
        def value = val'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Bind"
            s := s ++ "\n"
            s := s ++ spc ++ self.dest.pretty(depth + 1)
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
            s
        }
    }
}
method astdefdec(name', val, dtype') {
    object {
        def kind = "defdec"
        def name = name'
        def value = val
        var dtype := dtype'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "defdec"
            s := s ++ "\n"
            s := s ++ spc ++ self.name.pretty(depth)
            if (self.dtype) then {
                s := s ++ " : " ++ self.dtype.pretty(0)
            }
            if (false != self.value) then {
                s := s ++ "\n"
                s := s ++ spc ++ self.value.pretty(depth + 1)
            }
            s
        }
    }
}
method astvardec(name', val', dtype') {
    object {
        def kind = "vardec"
        def name = name'
        def value = val'
        var dtype := dtype'
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for ((0..depth)) do { i ->
                spc := spc ++ "  "
            }
            var s := "VarDec"
            s := s ++ "\n"
            s := s ++ spc ++ self.name.pretty(depth + 1)
            if (self.dtype) then {
                s := s ++ " : " ++ self.dtype.pretty(0)
            }
            if (false != self.value) then {
                s := s ++ "\n"
                s := s ++ spc ++ self.value.pretty(depth + 1)
            }
            s
        }
    }
}
method astimport(name) {
    object {
        def kind = "import"
        def value = name
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Import"
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
            s
        }
    }
}
method astreturn(expr) {
    object {
        def kind = "return"
        def value = expr
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Return"
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
            s
        }
    }
}
method astinherits(expr) {
    object {
        def kind = "inherits"
        def value = expr
        var register := ""
        def line = util.linenum
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "Inherits"
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
            s
        }
    }
}
