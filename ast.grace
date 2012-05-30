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

class forNode.new(over, body') {
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
class whileNode.new(cond, body') {
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
class ifNode.new(cond, thenblock', elseblock') {
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
class blockNode.new(params', body') {
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
class matchCaseNode.new(matchee, cases', elsecase') {
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
class methodTypeNode.new(name', signature', rtype') {
    // [signature]
    //     object {
    //         name := ""
    //         params := []
    //         vararg := false/identifier
    //     }
    //     object {
    //         name := ""
    //         params := []
    //         vararg := false/identifier
    //     }
    //     ...
    //     object {
    //         ...
    //     }
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
        s := "{s}{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}Part: {part.name}"
            s := "{s}\n    {spc}Parameters:"
            for (part.params) do { p ->
                s := "{s}\n      {spc}{p.pretty(depth + 4)}"
                if (p.dtype != false) then {
                    s := "{s} : {p.dtype.value}"
                }
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        s
    }
}
class typeNode.new(name', methods') {
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
class methodNode.new(name', signature', body', dtype') {
    // [signature]
    //     object {
    //         name := ""
    //         params := []
    //         vararg := false/identifier
    //     }
    //     object {
    //         name := ""
    //         params := []
    //         vararg := false/identifier
    //     }
    //     ...
    //     object {
    //         ...
    //     }
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
        s := "{s}{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}Part: {part.name}"
            s := "{s}\n    {spc}Parameters:"
            for (part.params) do { p ->
                s := "{s}\n      {spc}{p.pretty(depth + 4)}"
                if (p.dtype != false) then {
                    s := "{s} : {p.dtype.value}"
                }
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        s := s ++ "\n"
        s := s ++ spc ++ "Body:"
        for (self.body) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
        }
        s
    }
}
class callNode.new(what, with') {
    // [with]
    //     object {
    //         name := ""
    //         args := []
    //     }
    //     object {
    //         name := ""
    //         args := []
    //     }
    //     ...
    //     object {
    //         ...
    //     }
    def kind = "call"
    def value = what
    def with = with'
    def line = 0 + util.linenum
    var register := ""
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Call\n"
        s := s ++ spc ++ "Method: {self.value.pretty(depth + 1)}"
        s := s ++ "\n"
        s := s ++ spc ++ "Arguments:"
        for (self.with) do { part ->
            s := s ++ "\n  " ++ spc ++ "Part: " ++ part.name
            for (part.args) do { arg ->
                s := s ++ "\n    " ++ spc ++ arg.pretty(depth + 3)
            }
        }
        s
    }
}
class classNode.new(name', signature', body', superclass', constructor') {
    // [signature]
    //     object {
    //         name := ""
    //         params := []
    //         vararg := false/identifier
    //     }
    //     object {
    //         name := ""
    //         params := []
    //         vararg := false/identifier
    //     }
    //     ...
    //     object {
    //         ...
    //     }
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
        s := s ++ "\n"
        s := "{s}{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}Part: {part.name}"
            s := "{s}\n    {spc}Parameters:"
            for (part.params) do { p ->
                s := "{s}\n      {spc}{p.pretty(depth + 4)}"
                if (p.dtype != false) then {
                    s := "{s} : {p.dtype.value}"
                }
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        s := s ++ "\n" ++ spc ++ "Body:"
        for (self.value) do { x ->
            s := s ++ "\n  "++ spc ++ x.pretty(depth+2)
        }
        s
    }
}
class objectNode.new(body, superclass') {
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
class arrayNode.new(values) {
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
class memberNode.new(what, in') {
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
class genericNode.new(base, params') {
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
class identifierNode.new(n, dtype') {
    def kind = "identifier"
    var value := n
    var dtype := dtype'
    var register := ""
    def line = util.linenum
    method pretty(depth) {
        "Identifier(" ++ self.value ++ ")"
    }
}
class octetsNode.new(n) {
    def kind = "octets"
    def value = n
    var register := ""
    def line = util.linenum
    method pretty(depth) {
        "Octets(" ++ self.value ++ ")"
    }
}
class stringNode.new(n) {
    def kind = "string"
    var value := n
    var register := ""
    def line = util.linenum
    method pretty(depth) {
        "String(" ++ self.value ++ ")"
    }
}
class numNode.new(n) {
    def kind = "num"
    def value = n
    var register := ""
    def line = util.linenum
    method pretty(depth) {
        "Num(" ++ self.value ++ ")"
    }
}
class opNode.new(op, l, r) {
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
class indexNode.new(expr, index') {
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
class bindNode.new(dest', val') {
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
class defDecNode.new(name', val, dtype') {
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
class varDecNode.new(name', val', dtype') {
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
class importNode.new(name) {
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
class returnNode.new(expr) {
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
class inheritsNode.new(expr) {
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

method signaturePart {
    object {
        method new(*values) {
            object {
                var name := ""
                var params := []
                var vararg := false
                if (values.size > 0) then {
                    name := values[1]
                }
                if (values.size > 1) then {
                    params := values[2]
                }
                if (values.size > 2) then {
                    vararg := values[3]
                }
            }
        }
    }
}

// class signaturePart.new(*values) {
//     var name := ""
//     var params := []
//     var vararg := false
//     if (values.size > 0) then {
//         name := values[1]
//     }
//     if (values.size > 1) then {
//         params := values[2]
//     }
//     if (values.size > 2) then {
//         vararg := values[3]
//     }
// }

method callWithPart {
    object {
        method new(*values) {
            object {
                var name := ""
                var args := []
                if (values.size > 0) then {
                    name := values[1]
                }
                if (values.size > 1) then {
                    args := values[2]
                }
            }
        }
    }
}
