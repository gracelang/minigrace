#pragma DefaultVisibility=public
def util = platform.util
def mgcollections = platform.mgcollections
def mirrors = platform.mirrors

def collections = mgcollections

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
    method accept(visitor : ASTVisitor) {
        if (visitor.visitFor(self)) then {
            self.value.accept(visitor)
            self.body.accept(visitor)
        }
    }
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "for ({self.value.toGrace(0)}) do "
        s := s ++ self.body.toGrace(depth)
        s
    }
}
class whileNode.new(cond, body') {
    def kind = "while"
    def value = cond
    def body = body'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitWhile(self)) then {
            self.value.accept(visitor)
            for (self.body) do { x ->
                x.accept(visitor)
            }
        }
    }
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "while \{{self.value.toGrace(depth + 1)}\} do \{"
        for (self.body) do { x ->
            s := s ++ "\n" ++ spc ++ "    " ++ x.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
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
    method accept(visitor : ASTVisitor) {
        if (visitor.visitIf(self)) then {
            self.value.accept(visitor)
            for (self.thenblock) do { ix ->
                ix.accept(visitor)
            }
            for (self.elseblock) do { ix ->
                ix.accept(visitor)
            }
        }
    }
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "if ({self.value.toGrace(0)}) then \{"
        for (self.thenblock) do { ix ->
            s := s ++ "\n" ++ spc ++ "    " ++ ix.toGrace(depth + 1)
        }
        if (self.elseblock.size > 0) then {
            s := s ++ "\n" ++ spc ++ "\} else \{"
            for (self.elseblock) do { ix ->
                s := s ++ "\n" ++ spc ++ "    " ++ ix.toGrace(depth + 1)
            }
        }
        s := s ++ "\n" ++ spc ++ "\}"
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
    method accept(visitor : ASTVisitor) {
        if (visitor.visitBlock(self)) then {
            for (self.params) do { mx ->
                mx.accept(visitor)
            }
            for (self.body) do { mx ->
                mx.accept(visitor)
            }
            if (self.matchingPattern != false) then {
                self.matchingPattern.accept(visitor)
            }
        }
    }
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
        if (self.matchingPattern != false) then {
            s := s ++ "\n"
            s := s ++ spc ++ "Pattern:"
            s := s ++ "\n  "++ spc ++ self.matchingPattern.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "\{"
        if (self.params.size > 0) then {
            s := s ++ " "
            for (self.params.indices) do { i ->
                var p := self.params[i]
                if (self.matchingPattern != false) then {
                    s := s ++ "(" ++ p.toGrace(0) ++ ")"
                } else {
                    s := s ++ p.toGrace(0)
                }
                if (i < self.params.size) then {
                    s := s ++ ", "
                } else {
                    s := s ++ " ->"
                }
            }
        }
        for (self.body) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
}
class catchCaseNode.new(block, cases', finally') {
    def kind = "catchcase"
    def value = block
    def cases = cases'
    def finally = finally'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitCatchCase(self)) then {
            self.value.accept(visitor)
            for (self.cases) do { mx ->
                mx.accept(visitor)
            }
            if (self.finally != false) then {
                self.finally.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Catch\n"
        s := s ++ spc ++ value.pretty(depth + 2)
        for (self.cases) do { mx ->
            s := s ++ "\n{spc}Case:\n{spc}  {mx.pretty(depth+2)}"
        }
        if (false != self.finally) then {
            s := s ++ "\n{spc}Finally:\n{spc}  {self.finally.pretty(depth+2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "catch " ++ self.value.toGrace(0) ++ " "
        for (self.cases) do { case ->
            s := s ++ "\n" ++ spc ++ "    " ++ "case " ++ case.toGrace(depth + 2)
        }
        if (self.finally != false) then {
            s := s ++ "\n" ++ spc ++ "    " ++ "finally " ++ self.finally.toGrace(depth + 2)
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
    method accept(visitor : ASTVisitor) {
        if (visitor.visitMatchCase(self)) then {
            self.value.accept(visitor)
            for (self.cases) do { mx ->
                mx.accept(visitor)
            }
            if (self.elsecase != false) then {
                self.elsecase.accept(visitor)
            }
        }
    }
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
        if (false != self.elsecase) then {
            s := s ++ "\n{spc}Else:\n{spc}  {self.elsecase.pretty(depth+2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "match(" ++ self.value.toGrace(0) ++ ")"
        for (self.cases) do { case ->
            s := s ++ "\n" ++ spc ++ "    " ++ "case " ++ case.toGrace(depth + 2)
        }
        if (self.elsecase != false) then {
            s := s ++ "\n" ++ spc ++ "    " ++ "else " ++ self.elsecase.toGrace(depth + 2)
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
    method accept(visitor : ASTVisitor) {
        if (visitor.visitMethodType(self)) then {
            if (self.rtype != false) then {
                self.rtype.accept(visitor)
            }
            for (self.signature) do { part ->
                for (part.params) do { p ->
                    p.accept(visitor)
                }
                if (part.vararg != false) then {
                    part.vararg.accept(visitor)
                }
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "MethodType\n"
        s := "{s}{spc}Name: {value}\n"
        if (rtype != false) then {
            s := "{s}{spc}Returns:\n  {spc}{rtype.value}\n"
        }
        s := "{s}{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}Part: {part.name}"
            s := "{s}\n    {spc}Parameters:"
            for (part.params) do { p ->
                s := "{s}\n      {spc}{p.pretty(depth + 4)}"
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        for (self.signature) do { part ->
            s := s ++ part.name
            if ((part.params.size > 0) || (part.vararg != false)) then {
                s := s ++ "("
                for (part.params.indices) do { pnr ->
                    var p := part.params[pnr]
                    s := s ++ p.toGrace(depth + 1)
                    if ((pnr < part.params.size) || (part.vararg != false)) then {
                        s := s ++ ", "
                    }
                }
                if (part.vararg != false) then {
                    s := s ++ "*" ++ part.vararg.value
                }
                s := s ++ ")"
            }
        }
        if (self.rtype != false) then {
            s := s ++ " -> " ++ self.rtype.toGrace(depth + 1)
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
    var anonymous := false
    var register := ""
    method accept(visitor : ASTVisitor) {
        if (visitor.visitType(self)) then {
            if (self.unionTypes.size > 0) then {
                for (self.unionTypes) do { ut ->
                    ut.accept(visitor)
                }
            }
            if (self.intersectionTypes.size > 0) then {
                for (self.intersectionTypes) do { it ->
                    it.accept(visitor)
                }
            }
            for (self.methods) do { mx ->
                mx.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Type\n"
        s := "{s}{spc}Name: {value}\n"
        if (generics.size > 0) then {
            s := "{s}{spc}Generic parameters:\n"
            for (generics) do {ut->
                s := "{s}{spc}  {ut.value}\n"
            }
        }
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := ""
        def isanon = self.value.substringFrom(2)to(6) == "Anon_"
        def isadhoc = (self.value.substringFrom(1)to(6) == "Union<") ||
                      (self.value.substringFrom(1)to(13) == "Intersection<")
        if (!isanon && !isadhoc) then {
            s := "type {self.value}"
            if (self.generics.size > 0) then {
                s := s ++ "<"
                for (self.generics.indices) do { i ->
                    s := s ++ self.generics[i].value
                    if (i < self.generics.size) then {
                        s := s ++ ", "
                    }
                }
                s := s ++ ">"
            }
            s := s ++ " = "
        }
        if (!isadhoc && (self.unionTypes.size == 0) &&
            (self.intersectionTypes.size == 0)) then {
            s := s ++ "\{"
        }
        // TODO: what about e.g. "(A & B) | C"?
        if (self.unionTypes.size > 0) then {
            for (self.unionTypes.indices) do { i ->
                s := s ++ self.unionTypes[i].toGrace(0)
                if (i < self.unionTypes.size) then {
                    s := s ++ " | "
                }
            }
        } elseif (self.intersectionTypes.size > 0) then {
            for (self.intersectionTypes.indices) do { i ->
                s := s ++ self.intersectionTypes[i].toGrace(0)
                if (i < self.intersectionTypes.size) then {
                    s := s ++ " & "
                }
            }
        }
        for (self.methods) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        if (!isadhoc && (self.unionTypes.size == 0) &&
            (self.intersectionTypes.size == 0)) then {
            s := s ++ "\n" ++ spc ++ "\}"
        }
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
    var generics := []
    var selfclosure := false
    var register := ""
    def line = util.linenum
    def annotations = collections.list.new
    method accept(visitor : ASTVisitor) {
        if (visitor.visitMethod(self)) then {
            self.value.accept(visitor)
            if (self.dtype != false) then {
                self.dtype.accept(visitor)
            }
            for (self.signature) do { part ->
                for (part.params) do { p ->
                    p.accept(visitor)
                }
                if (part.vararg != false) then {
                    part.vararg.accept(visitor)
                }
            }
            for (self.body) do { mx ->
                mx.accept(visitor)
            }
        }
    }
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
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        s := s ++ "\n"
        if (false != generics) then {
            s := "{s}{spc}Generics:"
            for (generics) do {g->
                s := "{s}\n{spc}  {g.pretty(0)}"
            }
            s := s ++ "\n"
        }
        if (annotations.size > 0) then {
            s := "{s}{spc}Annotations:"
            for (annotations) do {an->
                s := "{s}\n{spc}  {an.pretty(depth + 2)}"
            }
            s := s ++ "\n"
        }
        s := s ++ spc ++ "Body:"
        for (self.body) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "method "
        for (self.signature) do { part ->
            s := s ++ part.name
            if ((part.params.size > 0) || (part.vararg != false)) then {
                s := s ++ "("
                for (part.params.indices) do { pnr ->
                    var p := part.params[pnr]
                    s := s ++ p.toGrace(depth + 1)
                    if ((pnr < part.params.size) || (part.vararg != false)) then {
                        s := s ++ ", "
                    }
                }
                if (part.vararg != false) then {
                    s := s ++ "*" ++ part.vararg.value
                }
                s := s ++ ")"
            }
        }
        if (self.dtype != false) then {
            s := s ++ " -> {self.dtype.toGrace(0)}"
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.reduce("", { a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) })
        }
        s := s ++ " \{"
        for (self.body) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
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
    var generics := false
    method accept(visitor : ASTVisitor) {
        if (visitor.visitCall(self)) then {
            self.value.accept(visitor)
            for (self.with) do { part ->
                for (part.args) do { arg ->
                    arg.accept(visitor)
                }
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Call\n"
        s := s ++ spc ++ "Method: {self.value.pretty(depth + 1)}"
        s := s ++ "\n"
        if (false != generics) then {
            s := s ++ spc ++ "  Generics:\n"
            for (generics) do {g->
                s := s ++ spc ++ "    " ++ g.pretty(0) ++ "\n"
            }
        }
        s := s ++ spc ++ "Arguments:"
        for (self.with) do { part ->
            s := s ++ "\n  " ++ spc ++ "Part: " ++ part.name
            for (part.args) do { arg ->
                s := s ++ "\n    " ++ spc ++ arg.pretty(depth + 3)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := ""
        // only the last member is the method call we need to handle
        if (self.value.kind == "member") then {
            var member := self.value
            if (member.value.substringFrom(1)to(6) == "prefix") then {
                s := member.value.substringFrom(7)to(member.value.size)
                return s ++ member.in.toGrace(0)
            }
            s := member.in.toGrace(0) ++ "."
        }
        for (self.with) do { part ->
            s := s ++ part.name
            if (part.args.size > 0) then {
                s := s ++ "("
                for (part.args.indices) do { anr ->
                    var arg := part.args[anr]
                    s := s ++ arg.toGrace(depth + 1)
                    if (anr < part.args.size) then {
                        s := s ++ ", "
                    }
                }
                s := s ++ ")"
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
    var generics := false
    var register := ""
    def line = util.linenum
    def superclass = superclass'
    method accept(visitor : ASTVisitor) {
        if (visitor.visitClass(self)) then {
            self.name.accept(visitor)
            self.constructor.accept(visitor)
            if (self.superclass != false) then {
                self.superclass.accept(visitor)
            }
            for (self.signature) do { part ->
                for (part.params) do { p ->
                    p.accept(visitor)
                }
                if (part.vararg != false) then {
                    part.vararg.accept(visitor)
                }
            }
            for (self.value) do { x ->
                x.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Class(" ++ self.name.pretty(0) ++ ")"
        if (self.superclass != false) then {
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
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        if (false != generics) then {
            s := s ++ "\n" ++ spc ++ "Generics:"
            for (generics) do {g->
                s := s ++ "\n  {spc}{g.pretty(0)}"
            }
        }
        s := s ++ "\n" ++ spc ++ "Body:"
        for (self.value) do { x ->
            s := s ++ "\n  "++ spc ++ x.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "class {self.name.toGrace(0)}"
        if (self.name.kind != "generic") then {
            // TODO generics + new-style constructors aren't possible at the moment
            s := s ++ "."
            for (self.signature) do { part ->
                s := s ++ part.name
                if ((part.params.size > 0) || (part.vararg != false)) then {
                    s := s ++ "("
                    for (part.params.indices) do { pnr ->
                        var p := part.params[pnr]
                        s := s ++ p.toGrace(depth + 1)
                        if ((pnr < part.params.size) || (part.vararg != false)) then {
                            s := s ++ ", "
                        }
                    }
                    if (part.vararg != false) then {
                        s := s ++ "*" ++ part.vararg.value
                    }
                    s := s ++ ")"
                }
            }
        }
        s := s ++ " \{"
        for (self.value) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
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
    method accept(visitor : ASTVisitor) {
        if (visitor.visitObject(self)) then {
            if (self.superclass != false) then {
                self.superclass.accept(visitor)
            }
            for (self.value) do { x ->
                x.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Object"
        if (self.superclass != false) then {
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "object \{"
        for (self.value) do { x ->
            s := s ++ "\n" ++ spc ++ "    " ++ x.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
}
class arrayNode.new(values) {
    def kind = "array"
    def value = values
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitArray(self)) then {
            for (self.value) do { ax ->
                ax.accept(visitor)
            }
        }
    }
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
    method toGrace(depth : Number) -> String {
        var s := "["
        for (self.value.indices) do { i ->
            s := s ++ self.value[i].toGrace(0)
            if (i < self.value.size) then {
                s := s ++ ", "
            }
        }
        s := s ++ "]"
        s
    }
}
class memberNode.new(what, in') {
    def kind = "member"
    var value := what
    def in = in'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitMember(self)) then {
            self.in.accept(visitor)
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Member(" ++ self.value ++ ")\n"
        s := s ++ spc ++ self.in.pretty(depth+1)
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        if (self.value.substringFrom(1)to(6) == "prefix") then {
            s := self.value.substringFrom(7)to(self.value.size)
            s := s ++ " " ++ self.in.toGrace(0)
        } else {
            s := self.in.toGrace(depth) ++ "." ++ self.value
        }
        s
    }
}
class genericNode.new(base, params') {
    def kind = "generic"
    def value = base
    def params = params'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitGeneric(self)) then {
            self.value.accept(visitor)
            for (self.params) do { p ->
                p.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var s := "Generic(" ++ self.value.value ++ "<"
        for (params) do {p->
            s := s ++ p.pretty(0)
            s := s ++ ","
        }
        s ++ ">)"
    }
    method toGrace(depth : Number) -> String {
        var s := self.value.value ++ "<"
        for (self.params.indices) do { i ->
            s := s ++ self.params[i].toGrace(0)
            if (i < self.params.size) then {
                s := s ++ ", "
            }
        }
        s := s ++ ">"
        s
    }
}
class identifierNode.new(n, dtype') {
    def kind = "identifier"
    var value := n
    var dtype := dtype'
    var register := ""
    def line = util.linenum
    def linePos = util.linepos
    method accept(visitor : ASTVisitor) {
        if (visitor.visitIdentifier(self)) then {
            if (self.dtype != false) then {
                self.dtype.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Identifier(" ++ self.value ++ ")"
        if (self.dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type:"
            s := s ++ "\n" ++ spc ++ "  " ++ self.dtype.pretty(depth + 2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := self.value
        if (self.dtype != false) then {
            s := s ++ " : " ++ self.dtype.toGrace(depth + 1)
        }
        s
    }
}
class octetsNode.new(n) {
    def kind = "octets"
    def value = n
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        visitor.visitOctets(self)
    }
    method pretty(depth) {
        "Octets(" ++ self.value ++ ")"
    }
    method toGrace(depth : Number) -> String {
        self.value
    }
}
class stringNode.new(n) {
    def kind = "string"
    var value := n
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        visitor.visitString(self)
    }
    method pretty(depth) {
        "String(" ++ self.value ++ ")"
    }
    method toGrace(depth : Number) -> String {
        var s := "\""
        for (self.value) do { c ->
            // TODO: what escapes are missing?
            if (c == "\n") then {
                s := s ++ "\\n"
            } elseif (c == "\t") then {
                s := s ++ "\\t"
            } elseif (c == "\"") then {
                s := s ++ "\\\""
            } elseif (c == "\\") then {
                s := s ++ "\\\\"
            } else {
                s := s ++ c
            }
        }
        s := s ++ "\""
        s
    }
}
class numNode.new(n) {
    def kind = "num"
    def value = n
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        visitor.visitNum(self)
    }
    method pretty(depth) {
        "Num(" ++ self.value ++ ")"
    }
    method toGrace(depth : Number) -> String {
        self.value.asString
    }
}
class opNode.new(op, l, r) {
    def kind = "op"
    def value = op
    def left = l
    def right = r
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitOp(self)) then {
            self.left.accept(visitor)
            self.right.accept(visitor)
        }
    }
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
    method toGrace(depth : Number) -> String {
        var s := ""
        if ((self.left.kind == "op") && (self.left.value != self.value)) then {
            s := "(" ++ self.left.toGrace(0) ++ ")"
        } else {
            s := self.left.toGrace(0)
        }
        if (self.value == "..") then {
            s := s ++ self.value
        } else {
            s := s ++ " " ++ self.value ++ " "
        }
        if ((self.right.kind == "op") && (self.right.value != self.value)) then {
            s := s ++ "(" ++ self.right.toGrace(0) ++ ")"
        } else {
            s := s ++ self.right.toGrace(0)
        }
        s
    }
}
class indexNode.new(expr, index') {
    def kind = "index"
    def value = expr
    def index = index'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitIndex(self)) then {
            self.value.accept(visitor)
            self.index.accept(visitor)
        }
    }
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := self.value.toGrace(depth + 1)
        s := s ++ "[" ++ self.index.toGrace(depth + 1) ++ "]"
        s
    }
}
class bindNode.new(dest', val') {
    def kind = "bind"
    def dest = dest'
    def value = val'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitBind(self)) then {
            self.dest.accept(visitor)
            self.value.accept(visitor)
        }
    }
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
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := self.dest.toGrace(depth + 1)
        s := s ++ " := " ++ self.value.toGrace(depth + 1)
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
    def annotations = collections.list.new
    method accept(visitor : ASTVisitor) {
        if (visitor.visitDefDec(self)) then {
            self.name.accept(visitor)
            if (self.dtype != false) then {
                self.dtype.accept(visitor)
            }
            if (self.value != false) then {
                self.value.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "defdec"
        s := s ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth)
        if (self.dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type:"
            s := s ++ "\n" ++ spc ++ "  " ++ self.dtype.pretty(depth + 2)
        }
        if (false != self.value) then {
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "def {self.name.toGrace(0)}"
        if (self.dtype.value != "Dynamic") then {
            s := s ++ " : " ++ self.dtype.toGrace(0)
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.reduce("", { a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) })
        }
        if (self.value != false) then {
            s := s ++ " = " ++ self.value.toGrace(depth)
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
    def annotations = collections.list.new
    method accept(visitor : ASTVisitor) {
        if (visitor.visitVarDec(self)) then {
            self.name.accept(visitor)
            if (self.dtype != false) then {
                self.dtype.accept(visitor)
            }
            if (self.value != false) then {
                self.value.accept(visitor)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for ((0..depth)) do { i ->
            spc := spc ++ "  "
        }
        var s := "VarDec"
        s := s ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth + 1)
        if (self.dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type:"
            s := s ++ "\n" ++ spc ++ "  " ++ self.dtype.pretty(depth + 2)
        }
        if (false != self.value) then {
            s := s ++ "\n"
            s := s ++ spc ++ self.value.pretty(depth + 1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "var {self.name.toGrace(0)}"
        if (self.dtype.value != "Dynamic") then {
            s := s ++ " : " ++ self.dtype.toGrace(0)
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.reduce("", { a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) })
        }
        if (self.value != false) then {
            s := s ++ " := " ++ self.value.toGrace(depth)
        }
        s
    }
}
class importNode.new(path', name) {
    def kind = "import"
    def value = name
    def path = path'
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        visitor.visitImport(self)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Import"
        s := s ++ "\n"
        s := s ++ "{spc}Path: {self.path}\n"
        s := s ++ "{spc}Identifier: {self.value}\n"
        s
    }
    method toGrace(depth : Number) -> String {
        "import \"{self.path}\" as {self.value}"
    }
}
class returnNode.new(expr) {
    def kind = "return"
    def value = expr
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitReturn(self)) then {
            self.value.accept(visitor)
        }
    }
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
    method toGrace(depth : Number) -> String {
        "return " ++ self.value.toGrace(depth)
    }
}
class inheritsNode.new(expr) {
    def kind = "inherits"
    def value = expr
    var register := ""
    def line = util.linenum
    method accept(visitor : ASTVisitor) {
        if (visitor.visitInherits(self)) then {
            self.value.accept(visitor)
        }
    }
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
    method toGrace(depth : Number) -> String {
        "inherits {self.value.toGrace(0)}"
    }
}

method signaturePart {
    object {
        method new(*values) {
            object {
                var name := ""
                var params := []
                var vararg := false
                var generics := []
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

type ASTVisitor = {
     visitFor(o) -> Boolean
     visitWhile(o) -> Boolean
     visitIf(o) -> Boolean
     visitBlock(o) -> Boolean
     visitMatchCase(o) -> Boolean
     visitCatchCase(o) -> Boolean
     visitMethodType(o) -> Boolean
     visitType(o) -> Boolean
     visitMethod(o) -> Boolean
     visitCall(o) -> Boolean
     visitClass(o) -> Boolean
     visitObject(o) -> Boolean
     visitArray(o) -> Boolean
     visitMember(o) -> Boolean
     visitGeneric(o) -> Boolean
     visitIdentifier(o) -> Boolean
     visitOctets(o) -> Boolean
     visitString(o) -> Boolean
     visitNum(o) -> Boolean
     visitOp(o) -> Boolean
     visitIndex(o) -> Boolean
     visitBind(o) -> Boolean
     visitDefDec(o) -> Boolean
     visitVarDec(o) -> Boolean
     visitImport(o) -> Boolean
     visitReturn(o) -> Boolean
     visitInherits(o) -> Boolean
}
method baseVisitor -> ASTVisitor {
    object {
        method visitFor(o) -> Boolean {
            true
        }
        method visitWhile(o) -> Boolean {
            true
        }
        method visitIf(o) -> Boolean {
            true
        }
        method visitBlock(o) -> Boolean {
            true
        }
        method visitMatchCase(o) -> Boolean {
            true
        }
        method visitCatchCase(o) -> Boolean {
            true
        }
        method visitMethodType(o) -> Boolean {
            true
        }
        method visitType(o) -> Boolean {
            true
        }
        method visitMethod(o) -> Boolean {
            true
        }
        method visitCall(o) -> Boolean {
            true
        }
        method visitClass(o) -> Boolean {
            true
        }
        method visitObject(o) -> Boolean {
            true
        }
        method visitArray(o) -> Boolean {
            true
        }
        method visitMember(o) -> Boolean {
            true
        }
        method visitGeneric(o) -> Boolean {
            true
        }
        method visitIdentifier(o) -> Boolean {
            true
        }
        method visitOctets(o) -> Boolean {
            true
        }
        method visitString(o) -> Boolean {
            true
        }
        method visitNum(o) -> Boolean {
            true
        }
        method visitOp(o) -> Boolean {
            true
        }
        method visitIndex(o) -> Boolean {
            true
        }
        method visitBind(o) -> Boolean {
            true
        }
        method visitDefDec(o) -> Boolean {
            true
        }
        method visitVarDec(o) -> Boolean {
            true
        }
        method visitImport(o) -> Boolean {
            true
        }
        method visitReturn(o) -> Boolean {
            true
        }
        method visitInherits(o) -> Boolean {
            true
        }
    }
}

class evalVisitor.new(env) {
    var _result

    var _env := env

    method getResult {
        _result
    }

    method resolve(v, *e) {
        if (v.kind == "identifier") then {
            if (v.value == "true") then {
                return true
            } elseif (v.value == "false") then {
                return false
            } else {
                if (e.size != 0) then {
                    return e[1].get(v.value)
                } else {
                    return _env.get(v.value)
                }
            }
        } else {
            v.accept(self)
            return _result
        }
    }


    method visitFor(node) -> Boolean {
        def over = resolve(node.value)

        for (over) do { val ->
            // TODO: remove parameter from env after end of loop
            def param = node.body.params[1]
            _env.put(param.value, val)
            def id = memberNode.new("apply", node.body)
            def callnode = callNode.new(id, [callWithPart.new(id.value, [param])])
            visitCall(callnode)
        }
    }

    method visitWhile(node) -> Boolean {
        def condid = memberNode.new("apply", node.value)
        def condcallnode = callNode.new(condid, [callWithPart.new(condid.value)])
        visitCall(condcallnode)
        var cond := _result

        while {cond} do {
            def bodyid = memberNode.new("apply", node.body)
            def bodycallnode = callNode.new(bodyid, [callWithPart.new(bodyid.value)])
            visitCall(bodycallnode)
            visitCall(condcallnode)
            cond := _result
        }
    }

    method visitIf(node) -> Boolean {
        def cond = resolve(node.value)

        if (cond) then {
            for (node.thenblock) do { s ->
                s.accept(self)
            }
        } else {
            for (node.elseblock) do { s ->
                s.accept(self)
            }
        }
    }

    method visitBlock(node) -> Boolean {
        _result := node
        return false
    }

    method visitMatchCase(node) -> Boolean { true }
    method visitMethodType(node) -> Boolean { true }
    method visitType(node) -> Boolean { true }

    method visitMethod(node) -> Boolean {
        def name = node.value.value
        def entry = object {
            def localenv = HashMap.new
            def meth = node
        }
        _env.put(name, entry)
        _result := true
        return false
    }

    method visitCall(node) -> Boolean {
        def name = node.value.value
        def member = node.value

        if (_env.contains(name) && (member.kind == "member") && (member.in.value == "self")) then {
            // interactively defined method
            def meth = _env.get(name).meth
            def outerenv = _env
            _env := outerenv.get(name).localenv

            for (meth.signature.indices) do { partnr ->
                var part := meth.signature[partnr]
                for (part.params.indices) do { paramnr ->
                    var param := part.params[paramnr]
                    var arg := node.with[partnr].args[paramnr]
                    _env.put(param.value, resolve(arg, outerenv))
                }
                if (part.vararg != false) then {
                    var vararg := []
                    var callpart := node.with[partnr]
                    var nparams := part.params.size
                    var nargs := callpart.args.size
                    for ((nparams + 1)..nargs) do { argnr ->
                        var arg := callpart.args[argnr]
                        vararg.push(resolve(arg, outerenv))
                    }
                    _env.put(part.vararg.value, vararg)
                }
            }

            for (meth.body) do { s ->
                s.accept(self)
            }

            _env := outerenv
        } elseif (name == "for()do") then {
            def cond = node.with[1].args[1]
            def body = node.with[2].args[1]
            def fornode = forNode.new(cond, body)
            visitFor(fornode)
        } elseif (name == "while()do") then {
            def cond = node.with[1].args[1]
            def body = node.with[2].args[1]
            def whilenode = whileNode.new(cond, body)
            visitWhile(whilenode)
        } elseif (name == "minigrace") then {
            _result := minigrace
        } elseif (name == "print") then {
            var parts := []
            for (node.with) do { part ->
                var args := []
                for (part.args) do { arg ->
                    args.push(resolve(arg))
                }
                parts.push(args)
            }

            // _result := callmethod(name, parts)
            // TODO: other parts
            _result := print(parts[1][1])
        } elseif ((name == "apply") && (resolve(member.in).kind == "block")) then {
            def block = resolve(member.in)
            for (node.with[1].args.indices) do { argnr ->
                def arg = node.with[1].args[argnr]
                def blockparam = block.params[argnr].value
                _env.put(blockparam, resolve(arg))
            }
            for (block.body) do { s ->
                s.accept(self)
            }
        } else { // compiled method
            var parts := []
            for (node.with) do { part ->
                var args := []
                for (part.args) do { arg ->
                    args.push(resolve(arg))
                }
                parts.push(args)
            }

            // _result := callmethod(name, parts)
            _result := mirrors.reflect(resolve(member.in)).getMethod(name).request(parts)
        }

        return false
    }

    method visitClass(node) -> Boolean { true }
    method visitObject(node) -> Boolean { true }

    method visitArray(node) -> Boolean {
        var res := []

        for (node.value) do { v ->
            res.push(resolve(v))
        }

        _result := res

        return false
    }

    method visitMember(node) -> Boolean {
        var callnode := callNode.new(node, [callWithPart.new(node.value)])
        visitCall(callnode)
        return false
    }

    method visitGeneric(node) -> Boolean { true }

    method visitIdentifier(node) -> Boolean {
        _result := resolve(node)
        return false
    }

    method visitOctets(node) -> Boolean { true }

    method visitString(node) -> Boolean {
        _result := node.value
        return false
    }

    method visitNum(node) -> Boolean {
        _result := node.value.asNumber
        return false
    }

    method visitOp(node) -> Boolean {
        var left := resolve(node.left)
        var right := resolve(node.right)

        _result := match(node.value)
            case { "+"  -> left +  right }
            case { "*"  -> left *  right }
            case { "-"  -> left -  right }
            case { "/"  -> left /  right }
            case { "%"  -> left %  right }
            case { "==" -> left == right }
            case { "!=" -> left != right }
            case { "++" -> left ++ right }
            case { "<"  -> left <  right }
            case { "<=" -> left <= right }
            case { ">"  -> left >  right }
            case { ">=" -> left >= right }
            case { ".." -> left .. right }
            case { "&"  -> left &  right }
            case { "|"  -> left |  right }
            case { "&&" -> left && right }
            case { "||" -> left || right }

        return false
    }

    method visitIndex(node) -> Boolean {
        def value = resolve(node.value)
        def index = resolve(node.index)

        _result := value[index]

        return false
    }

    method visitBind(node) -> Boolean {
        def dest = node.dest.value
        def value = resolve(node.value)

        _env.put(dest, value)

        _result := value

        return false
    }

    method visitDefDec(node) -> Boolean {
        def name  = node.name.value
        def value = resolve(node.value)
        // node.dtype.accept(self)
        // def dtype = _result

        _env.put(name, value)

        _result := value

        return false
    }

    method visitVarDec(node) -> Boolean {
        def name  = node.name.value
        def value = resolve(node.value)
        // node.dtype.accept(self)
        // def dtype = _result

        _env.put(name, value)

        _result := value

        return false
    }

    method visitImport(node) -> Boolean {
        def name = node.value.value
        def mod = mirrors.loadDynamicModule(name)
        _env.put(name, mod)

        _result := mod

        return false
    }

    method visitReturn(node) -> Boolean {
        def value = resolve(node.value)

        _result := value

        return false
    }

    method visitInherits(node) -> Boolean { true }
}
