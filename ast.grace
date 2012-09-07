#pragma DefaultVisibility=public
def util = platform.util
def mgcollections = platform.mgcollections
def mirrors = platform.mirrors
def repl = platform.repl

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

class signaturePart.new(*values) {
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
    def ReturnException = Exception.refine "ReturnException"

    // Top-level interpreter object. Everything that is not in an explicit
    // object goes into here.
    var _curobj := replObj.new("replobj", objectNode.new([], false))
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
                if ((v.kind == "replvar") || (v.kind == "replobj")) then {
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

        for (o.val.value) do { e ->
            if (e.kind == "vardec") then {
                numMethods := numMethods + 1
            }
            numMethods := numMethods + 1
            numFields := numFields + 1
        }
        if (numFields == 3) then {
            numFields := 4
        }

        var no := repl.createobject(numMethods, numFields)

        for (o.val.value) do { e ->
            if (e.kind == "method") then {
                repl.addmethod(no, o.name, e.value.value, pos)
                pos := pos + 1
            } elseif (e.kind == "defdec") then {
                repl.addmethod(no, o.name, e.name.value, pos)
                pos := pos + 1
            } elseif (e.kind == "vardec") then {
                repl.addmethod(no, o.name, e.name.value, pos)
                pos := pos + 1
                repl.addmethod(no, o.name, e.name.value ++ ":=", pos)
                pos := pos + 1
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
        def id = memberNode.new("apply",
                                identifierNode.new("__block{myblockc}",
                                                   false))

        for (over.val) do { v ->
            v := resolve(v)
            var paraml := []
            if (block.params.size > 0) then {
                var param := block.params[1]
                _env.put(param.value, v)
                paraml := [param]
            }
            def callnode = callNode.new(id, [callWithPart.new(id.value, paraml)])
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
        def condid = memberNode.new("apply",
                                    identifierNode.new("__block{condblockc}",
                                                       false))
        def condcallnode = callNode.new(condid, [callWithPart.new(condid.value)])
        visitCall(condcallnode)
        var cond := _result

        def bodyblock = node.body
        visitBlock(bodyblock)
        _env.put("__block{bodyblockc}", _result)
        def bodyid = memberNode.new("apply",
                                    identifierNode.new("__block{bodyblockc}",
                                                       false))
        def bodycallnode = callNode.new(bodyid, [callWithPart.new(bodyid.value)])

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

        def blockobj = replObj.new("replvar", node, _env)
        blockobj.classobj := replClass.new
        def curobjold = _curobj
        _curobj := blockobj

        def inblockold = inblock
        inblock := true

        def id = identifierNode.new("_apply", false)
        var applymeth := methodNode.new(id,
                                        [signaturePart.new(id, node.params)],
                                        node.body,
                                        false)
        applymeth.selfclosure := true
        applymeth.accept(self)

        def id2 = identifierNode.new("apply", false)
        var applymeth2 := methodNode.new(id2,
                                         [signaturePart.new(id2, node.params)],
                                         node.body,
                                         false)
        applymeth2.selfclosure := true
        applymeth2.accept(self)

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

        if (name == "print") then {
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
            def fornode = forNode.new(cond, body)
            visitFor(fornode)
        } elseif ((name == "while()do") &&
                  (in.kind == "identifier") &&
                  (in.value == "prelude")) then {
            // while()do
            def cond = node.with[1].args[1]
            def body = node.with[2].args[1]
            def whilenode = whileNode.new(cond, body)
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
            if ((inobj.val == false) && (name == "&&")) then {
                // short-circuit '&&'
                _result := inobj
            } elseif ((inobj.val == true) && (name == "||")) then {
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
                // variable assignment
                def o = findvar(name.substringFrom(1)to(namelen - 2), inobj)
                def newvar = resolve(node.with[1].args[1])
                o.val := newvar.val
                _result := newvar
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
                        } else {
                            match(argobj.val)
                                case { _ : {kind} ->
                                    if (argobj.val.kind == "block") then {
                                        def myblockc = blockc
                                        blockc := blockc + 1
                                        _env.put("__block{myblockc}", argobj)
                                        def id = memberNode.new("apply",
                                                                identifierNode.new("__block{myblockc}",
                                                                                false))
                                        def callnode = callNode.new(id, [callWithPart.new(id.value)])
                                        visitCall(callnode)
                                        no := _result.val
                                    }
                                }
                                case { _ -> no := argobj.val }
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

        def obj = objectNode.new(node.value, node.superclass)
        obj.classname := node.name.value
        var newmeth := methodNode.new(node.constructor, node.signature, [obj], false)
        var cobj := objectNode.new([newmeth], false)
        var con := defDecNode.new(node.name, cobj, false)
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
        var callnode := callNode.new(node, [callWithPart.new(node.value)])
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
        def membernode = memberNode.new(op, node.left)
        def callnode = callNode.new(membernode, [callWithPart.new(op, [node.right])])
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

        var o
        if (node.dest.kind == "member") then {
            def in = resolve(node.dest.in)
            if (findmethod("{node.dest.value}:=", in) != false) then {
                def membernode = memberNode.new("{node.dest.value}:=",
                                                node.dest.in)
                def callnode = callNode.new(
                                   membernode,
                                   [callWithPart.new(
                                        "{node.dest.value}:=",
                                        [node.value]
                                   )]
                               )
                visitCall(callnode)
                return false
            }
            o := in.env.get(node.dest.value)
        } else {
            if (findmethod("{node.dest.value}:=",
                           _env.get("self")) != false) then {
                def membernode = memberNode.new("{node.dest.value}:=",
                                                identifierNode.new("self", false))
                def callnode = callNode.new(
                                   membernode,
                                   [callWithPart.new(
                                        "{node.dest.value}:=",
                                        [node.value]
                                   )]
                               )
                visitCall(callnode)
                return false
            }
            o := _env.get(node.dest.value)
        }
        def newobj = resolve(node.value)

        o.val      := newobj.val
        o.env      := newobj.env
        o.name     := newobj.name
        o.classobj := newobj.classobj
        o.superobj := newobj.superobj

        _result := o

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

        def name = node.value.value
        def mod = mirrors.loadDynamicModule(name)
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
