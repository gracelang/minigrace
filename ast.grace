#pragma DefaultVisibility=public
#pragma noTypeChecks
import "util" as util
import "mgcollections" as collections

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

method listMap(l, b)before(blkBefore)after(blkAfter) {
    def r = collections.list.new
    for (l) do {v->
        def replacement = v.map(b)before(blkBefore)after(blkAfter)
        r.push(replacement)
    }
    r
}
method maybeMap(n, b, before, after) {
    if (n != false) then {
        return n.map(b)before(before)after(after)
    }
    n
}

class baseNode.new {
    var register := ""
    var line := util.linenum
    var linePos := util.linepos
    var lineLength := 0
    
    method asString { "astNode {self.kind}" }
    method isWritable { true }
    method isReadable { true }
    method isPublic { true }
    method isConfidential { isPublic.not }
    method decType {
        if (self.dtype == false) then {
            return unknownType
        }
        return self.dtype
    }
}

class forNode.new(over, body') {
    inherits baseNode.new
    def kind = "for"
    def value = over
    def body = body'
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
    inherits baseNode.new
    def kind = "while"
    def value = cond
    def body = body'
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
    inherits baseNode.new
    def kind = "if"
    def value = cond
    def thenblock = thenblock'
    def elseblock = elseblock'
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        def v = self.value.map(blk)before(blkBefore)after(blkAfter)
        def tb = listMap(self.thenblock, blk)before(blkBefore)after(blkAfter)
        blkAfter.apply(self)
        blkBefore.apply(self)
        def eb = listMap(self.elseblock, blk)before(blkBefore)after(blkAfter)
        var n := ifNode.new(v, tb, eb)
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "block"
    def value = "block"
    def params = params'
    def body = body'
    def selfclosure = true
    var matchingPattern := false
    var extraRuntimeData := false
    for (params') do {p->
        p.accept(patternMarkVisitor)
    }
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blockNode.new(listMap(params, blk)before(blkBefore)after(blkAfter),
            listMap(body, blk)before(blkBefore)after(blkAfter))
        if (self.matchingPattern != false) then {
            n.matchingPattern := self.matchingPattern.map(blk)
                before(blkBefore)after(blkAfter)
        }
        n := blk.apply(n)
        n.extraRuntimeData := extraRuntimeData
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "catchcase"
    def value = block
    def cases = cases'
    def finally = finally'
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := catchCaseNode.new(value.map(blk)before(blkBefore)after(blkAfter),
            listMap(cases, blk)before(blkBefore)after(blkAfter),
            maybeMap(finally, blk, blkBefore, blkAfter))
        n.line := line
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "matchcase"
    def value = matchee
    def cases = cases'
    def elsecase = elsecase'
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        def newcases = listMap(cases, blk)before(blkBefore)after(blkAfter)
        var n := matchCaseNode.new(value.map(blk)before(blkBefore)after(blkAfter),
            newcases,
            maybeMap(elsecase, blk, blkBefore, blkAfter))
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "methodtype"
    def value = name'
    def signature = signature'
    def rtype = rtype'
    var generics := []
    def nameString:String is public = value
    method asString { "MethodType {value} -> {rtype}" }

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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var rt := false
        if (rtype != false) then {
            rt := rtype.map(blk)before(blkBefore)after(blkAfter)
        }
        var n := methodTypeNode.new(value, listMap(signature, blk)before(blkBefore)after(blkAfter),
            rt)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "MethodType\n"
        s := "{s}{spc}Name: {value}\n"
        if (rtype != false) then {
            s := "{s}{spc}Returns:\n  {spc}{rtype.pretty(depth + 2)}\n"
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
class typeLiteralNode.new(methods', types') {
    inherits baseNode.new
    def kind = "typeliteral"
    def methods = methods'
    def types = types'
    var generics := []
    var nominal := false
    var anonymous := true
    var value := "‹anon›"

    
    method name { value }
    method name:=(n:String) {
        value := n
        anonymous := false
    }
    method asString {
        "TypeLiteral: methods = {methods}, types = {types}"
    }
    method accept(visitor : ASTVisitor) {
        if (visitor.visitTypeLiteral(self)) then {
            for (self.methods) do { each ->
                each.accept(visitor)
            }
            for (self.types) do { each ->
                each.accept(visitor)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := typeLiteralNode.new(
            listMap(methods, blk)before(blkBefore)after(blkAfter),
            listMap(types, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        n.linePos := linePos
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Type literal\n"
        if (generics.size > 0) then {
            s := "{s}{spc}Generic parameters:\n"
            for (generics) do {ut->
                s := "{s}{spc}  {ut.value}\n"
            }
        }
        s := s ++ spc ++ "Types:"
        for (types) do { each ->
            s := s ++ "\n  "++ spc ++ each.pretty(depth+2)
        }
        s := s ++ "\n" ++ spc ++ "Methods:"
        for (methods) do { each ->
            s := s ++ "\n  "++ spc ++ each.pretty(depth+2)
        }
        s := s ++ "\n"
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "type"
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
        s := s ++ " = \{"
        for (self.methods) do { each ->
            s := s ++ "\n" ++ spc ++ "    " ++ each.toGrace(depth + 1)
        }
        for (self.types) do { each ->
            s := s ++ "\n" ++ spc ++ "    " ++ each.toGrace(depth + 1)
        }
        s ++ "\}"
    }
}

class typeDecNode.new(name', typeValue) {
    inherits baseNode.new
    def kind = "typedec"
    def name = name'
    def value = typeValue
    def nameString:String is public = name.value
    var annotations := collections.list.new
    var generics := collections.list.new
    
    method isConfidential {
        if (annotations.size == 0) then { return false }
        findAnnotation(self, "confidential")
    }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }


    method accept(visitor : ASTVisitor) {
        if (visitor.visitTypeDec(self)) then {
            value.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := typeDecNode.new(name, value.map(blk)before(blkBefore)after(blkAfter))
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n.generics := self.generics
        n.line := line
        n.linePos := linePos
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "TypeDec\n"
        s := s ++ spc ++ self.name.pretty(depth + 1) ++ "\n"
        if (generics.size > 0) then {
            s := "{s}{spc}Generic parameters:\n"
            for (generics) do {ut->
                s := "{s}{spc}  {ut.value}\n"
            }
        }
        s := s ++ spc ++ "Value:"
        s := s ++ value.pretty(depth+2)
        s := s ++ "\n"
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := ""
        s := "type {self.name}"
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
        s := s ++ " = " ++ value(toGrace(depth + 2))
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
    inherits baseNode.new
    def kind = "method"
    def value = name'
    def signature = signature'
    def body = body'
    var dtype := dtype'
    var varargs := false
    var generics := []
    var selfclosure := false
    def nameString:String is public = value.value
    def annotations = collections.list.new
    var properties := collections.map.new
    
    method isConfidential {
        if (annotations.size == 0) then { return false }
        findAnnotation(self, "confidential")
    }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }

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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var dt := false
        if (dtype != false) then {
            dt := dtype.map(blk)before(blkBefore)after(blkAfter)
        }
        var n := methodNode.new(name', signature, listMap(body, blk)before(blkBefore)after(blkAfter), dt)
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        for (listMap(generics, blk)before(blkBefore)after(blkAfter)) do {a->
            n.generics.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method eachParameter(blk) {
        for (signature) do {s->
            for (s.params) do {p->
                blk.apply(p)
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
        if (false != self.dtype) then {
            s := s ++ spc ++ "Returns:\n" ++ spc ++ "  "
            s := s ++ self.dtype.pretty(depth + 2) ++ "\n"
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
        var firstPart := true
        for (self.signature) do { part ->
            s := s ++ part.name
            if (firstPart.andAlso{generics != false}) then {
                s := s ++ "<"
                for (1..(generics.size - 1)) do {ix ->
                    s := s ++ generics.at(ix).toGrace(depth + 1)
                }
                s := s ++ generics.last.toGrace(depth + 1) ++ ">"
            }
            firstPart := false
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
    method asString { "Method {nameString}" }
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
    inherits baseNode.new
    def kind = "call"
    def value = what        // method being requested
    def with = with'        // arguments
    var generics := false
    var isPattern := false
    def nameString:String is public = what
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := callNode.new(value.map(blk)before(blkBefore)after(blkAfter),
            listMap(with, blk)before(blkBefore)after(blkAfter))
        if (generics != false) then {
            n.generics := listMap(generics, blk)before(blkBefore)after(blkAfter)
        }
        n.isPattern := isPattern
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Call\n"
        s := s ++ spc ++ "Method Name: {self.value.pretty(depth + 1)}"
        s := s ++ "\n"
        if (false != generics) then {
            s := s ++ spc ++ "  Generics:\n"
            for (generics) do {g->
                s := s ++ spc ++ "    " ++ g.pretty(depth + 2) ++ "\n"
            }
        }
        s := s ++ spc ++ "Arguments:"
        for (self.with) do { part ->
            s := s ++ "\n  " ++ spc ++ "Part: " ++ part.name
            for (part.args) do { arg ->
                s := s ++ "\n      " ++ spc ++ arg.pretty(depth + 2)
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
        var firstPart := true
        for (self.with) do { part ->
            s := s ++ part.name
            if (firstPart.andAlso{generics != false}) then {
                s := s ++ "<"
                for (1..(generics.size - 1)) do {ix ->
                    s := s ++ generics.at(ix).toGrace(depth + 1)
                }
                s := s ++ generics.last.toGrace(depth + 1) ++ ">"
            }
            firstPart := false
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
    method asString { "Call {what}" }
}
class classNode.new(name', signature', body', superclass', constructor', dtype') {
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
    inherits baseNode.new
    def kind = "class"
    def value = body'
    def name = name'
    def constructor = constructor'
    def signature = signature'
    var dtype := dtype'
    var generics := false
    def superclass = superclass'
    def annotations = collections.list.new
    def nameString:String = name.value
    var instanceMethods := collections.list.new
    var data := false
    
    method isPublic {
        // assume that classes are public by default
        if (annotations.size == 0) then { return true }
        findAnnotation(self, "confidential").not
    }
    method isWritable { false }
    method isReadable { isPublic }

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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := classNode.new(name.map(blk)before(blkBefore)after(blkAfter),
            listMap(signature, blk)before(blkBefore)after(blkAfter), listMap(value, blk)before(blkBefore)after(blkAfter),
            maybeMap(superclass, blk, blkBefore, blkAfter), constructor, dtype)
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Class\n"
        s := "{s}{spc}Name: {self.name.pretty(0)}"
        if (self.superclass != false) then {
            s := s ++ "\n" ++ spc ++ "Superclass:"
            s := s ++ "\n  " ++ spc ++ self.superclass.pretty(depth + 2)
        }
        s := s ++ "\n"
        s := "{s}{spc}Factory method: {constructor.pretty(0)}\n"
        if(false != dtype) then {
            s := "{s}{spc}Returns:\n  {spc}{dtype.pretty(depth + 2)}\n"
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
        if (false != generics) then {
            s := s ++ "\n" ++ spc ++ "Generics:"
            for (generics) do {g->
                s := s ++ "\n  {spc}{g.pretty(0)}"
            }
        }
        if (annotations.size > 0) then {
            s := s ++ "\n" ++ spc ++ "Annotations:"
            for (annotations) do {a->
                s := s ++ "\n  {spc}{a.pretty(depth + 2)}"
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
        if(false != dtype) then {
            s := "{s} -> {dtype.toGrace(depth + 1)}"
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
    inherits baseNode.new
    def kind = "object"
    def value = body
    def superclass = superclass'
    var otype := false
    var classname := "object"
    var data := false
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := objectNode.new(listMap(value,
        blk)before(blkBefore)after(blkAfter), maybeMap(superclass, blk,
        blkBefore, blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth') {
        var depth := depth'
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
    inherits baseNode.new
    def kind = "array"
    def value = values
    method accept(visitor : ASTVisitor) {
        if (visitor.visitArray(self)) then {
            for (self.value) do { ax ->
                ax.accept(visitor)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := arrayNode.new(listMap(value, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "member"
    var value := what
    def nameString:String is public = value
    def in = in'
    var generics := false

    method accept(visitor : ASTVisitor) {
        if (visitor.visitMember(self)) then {
            self.in.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := memberNode.new(value, in.map(blk)before(blkBefore)after(blkAfter))
        if (generics != false) then {
            n.generics := listMap(generics, blk)before(blkBefore)after(blkAfter)
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Member‹" ++ self.value ++ "›\n"
        s := s ++ spc ++ in.pretty(depth)
        if (false != generics) then {
            s := s ++ "\n" ++ spc ++ "  Generics:"
            for (generics) do {g->
                s := s ++ "\n" ++ spc ++ "    " ++ g.pretty(0)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        if (self.value.substringFrom(1)to(6) == "prefix") then {
            s := self.value.substringFrom(7)to(value.size)
            s := s ++ " " ++ self.in.toGrace(0)
        } else {
            s := self.in.toGrace(depth) ++ "." ++ self.value
        }
        if (false != generics) then {
            s := s ++ "<"
            for (1..(generics.size - 1)) do {ix ->
                s := s ++ generics.at(ix).toGrace(depth + 1)
            }
            s := s ++ generics.last.toGrace(depth + 1) ++ ">"
        }
        s
    }
    method asString { "Member‹{value}›" }
}
class genericNode.new(base, params') {
    inherits baseNode.new
    def kind = "generic"
    def value = base
    def params = params'
    method accept(visitor : ASTVisitor) {
        if (visitor.visitGeneric(self)) then {
            self.value.accept(visitor)
            for (self.params) do { p ->
                p.accept(visitor)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := genericNode.new(value.map(blk)before(blkBefore)after(blkAfter), listMap(params, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        self.toGrace(depth)
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
class identifierNode.new(name, dtype') {
    inherits baseNode.new
    def kind = "identifier"
    var value := name
    var wildcard := false
    var dtype := dtype'
    var isBindingOccurence := false
    var isAssigned := false
    var inRequest := false
    def nameString:String is public = name
    var generics := false
    method accept(visitor : ASTVisitor) {
        if (visitor.visitIdentifier(self)) then {
            if (self.dtype != false) then {
                self.dtype.accept(visitor)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        util.setPosition(line, linePos)
        var n := identifierNode.new(value, maybeMap(dtype, blk, blkBefore,
        blkAfter))
        n.wildcard := wildcard
        n.isBindingOccurence := isBindingOccurence
        n.isAssigned := isAssigned
        n.inRequest := inRequest
        n := blk.apply(n)
        n.line := line
        if (n.kind == "identifier") then {
            n.linePos := linePos
            n.wildcard := wildcard
            n.isBindingOccurence := isBindingOccurence
            n.isAssigned := isAssigned
            n.inRequest := inRequest
        }
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s
        if(self.wildcard) then {
            s := "WildcardIdentifier"
        } elseif {isBindingOccurence} then {
            s := "IdentifierBinding({value})"
        } else {
            s := self.asString
        }
        if (self.dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type: "
            s := s ++ self.dtype.pretty(depth + 2)
        }
        if (false != generics) then {
            s := s ++ "\n" ++ spc ++ "Generics:"
            for (generics) do {g->
                s := s ++ spc ++ "  " ++ g.pretty(depth + 2)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s
        if(self.wildcard) then {
            s := "_"
        } else {
            s := self.value
        }
        if (self.dtype != false) then {
            s := s ++ " : " ++ self.dtype.toGrace(depth + 1)
        }
        if (false != generics) then {
            s := s ++ "<"
            for (1..(generics.size - 1)) do {ix ->
                s := s ++ generics.at(ix).toGrace(depth + 1)
            }
            s := s ++ generics.last.toGrace(depth + 1) ++ ">"
        }
        s
    }

    method asString { 
        if (isBindingOccurence) then { "IdentifierBinding‹{value}›" }
                    else { "Identifier‹{value}›"
        }
    }
}

def typeType is public = identifierNode.new("Type", false)
def unknownType is public = identifierNode.new("Unknown", typeType)

class octetsNode.new(n) {
    inherits baseNode.new
    def kind = "octets"
    def value = n
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
class stringNode.new(v) {
    inherits baseNode.new
    def kind = "string"
    var value := v
    method accept(visitor : ASTVisitor) {
        visitor.visitString(self)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    method isBindingOccurence:=(aBool) -> Done {
        util.log_verbose "attempting to bind {pretty(0)} at line {line}"
    }
}
class numNode.new(val) {
    inherits baseNode.new
    def kind = "num"
    def value = val
    method accept(visitor : ASTVisitor) {
        visitor.visitNum(self)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        "Num(" ++ self.value ++ ")"
    }
    method toGrace(depth : Number) -> String {
        self.value.asString
    }
    method asString { "Number {value}" }
}
class opNode.new(op, l, r) {
    inherits baseNode.new
    def kind = "op"
    def value = op
    def left = l
    def right = r
    method accept(visitor : ASTVisitor) {
        if (visitor.visitOp(self)) then {
            self.left.accept(visitor)
            self.right.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := opNode.new(value, left.map(blk)before(blkBefore)after(blkAfter), right.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    // an expression in square brackets
    inherits baseNode.new
    def kind = "index"
    def value = expr
    def index = index'
    method accept(visitor : ASTVisitor) {
        if (visitor.visitIndex(self)) then {
            self.value.accept(visitor)
            self.index.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := indexNode.new(value.map(blk)before(blkBefore)after(blkAfter), index.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    // an assignment, or a setter method request
    inherits baseNode.new
    def kind = "bind"
    def dest = dest'
    def value = val'
    method accept(visitor : ASTVisitor) {
        if (visitor.visitBind(self)) then {
            self.dest.accept(visitor)
            self.value.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := bindNode.new(dest.map(blk)before(blkBefore)after(blkAfter), value.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "defdec"
    def name = name'
    def value = val
    var dtype := dtype'
    def nameString:String is public = name.value
    def annotations = collections.list.new
    var data := false
    var startToken := false
    method isPublic {
        // defs are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        findAnnotation(self, "readable")
    }
    method isWritable { false }
    method isReadable { isPublic }

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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := defDecNode.new(name, value.map(blk)before(blkBefore)after(blkAfter),
            maybeMap(dtype, blk, blkBefore, blkAfter))
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "DefDec"
        s := s ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth)
        if (dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type: " ++ self.dtype.pretty(depth + 2)
        }
        if (false != value) then {
            s := s ++ "\n" ++ spc ++ "Value: " ++ value.pretty(depth + 2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "def {self.name.toGrace(0)}"
        if (self.dtype.value != "Unknown") then {
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
    inherits baseNode.new
    def kind = "vardec"
    def name = name'
    def value = val'
    var dtype := dtype'
    def nameString:String is public = name.value
    def annotations = collections.list.new

    method isPublic {
        // vars are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        findAnnotation(self, "readable")
    }
    method isWritable {
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        if (findAnnotation(self, "writable")) then { return true }
        false
    }
    method isReadable {
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        if (findAnnotation(self, "readable")) then { return true }
        false
    }
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := varDecNode.new(name, maybeMap(value, blk,
                blkBefore, blkAfter),
            maybeMap(dtype, blk, blkBefore, blkAfter))
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
            s := s ++ "\n" ++ spc ++ "Type: "
            s := s ++ self.dtype.pretty(depth + 2)
        }
        if (false != self.value) then {
            s := s ++ "\n" ++ spc ++ "Value: "
            s := s ++ self.value.pretty(depth + 2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "var {self.name.toGrace(0)}"
        if (self.dtype.value != "Unknown") then {
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
    inherits baseNode.new
    def kind = "import"
    def value = name
    def path = path'
    def annotations = collections.list.new
    var dtype := false
    def linePos = 1
    def nameString:String is public = value
    
    method isPublic {
        // imports are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        findAnnotation(self, "readable")
    }
    method isWritable { false }
    method isReadable { isPublic }

    method accept(visitor : ASTVisitor) {
        visitor.visitImport(self)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
        if (self.annotations.size > 0) then {
            s := s ++ "{spc}Anotations: {self.annotations}\n"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        "import \"{self.path}\" as {self.value}"
    }
}
class dialectNode.new(path') {
    inherits baseNode.new
    def kind = "dialect"
    def value = path'
    method accept(visitor : ASTVisitor) {
        visitor.visitDialect(self)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Dialect"
        s := s ++ "\n"
        s := s ++ "{spc}Path: {self.value}\n"
        s
    }
    method toGrace(depth : Number) -> String {
        "dialect \"{self.value}\""
    }
}
class returnNode.new(expr) {
    inherits baseNode.new
    def kind = "return"
    def value = expr
    method accept(visitor : ASTVisitor) {
        if (visitor.visitReturn(self)) then {
            self.value.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := returnNode.new(value.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
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
    inherits baseNode.new
    def kind = "inherits"
    def value = expr
    def providedNames is public = list.empty
    method accept(visitor : ASTVisitor) {
        if (visitor.visitInherits(self)) then {
            self.value.accept(visitor)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := inheritsNode.new(value.map(blk)before(blkBefore)after(blkAfter))
        n.providedNames.addAll(providedNames)
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Inherits"
        s := s ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        if (providedNames.isEmpty.not) then {
            s := s ++ "\n Provided names: "
            s := s ++ spc ++ providedNames.asString
        }
        s
    }
    method toGrace(depth : Number) -> String {
        "inherits {self.value.toGrace(0)}"
    }
    method nameString { value.toGrace(0) }
    method asString { "Inherits {nameString}" }
}
class blankNode.new {
    inherits baseNode.new
    def kind = "blank"
    def value = "blank"
    method accept(visitor : ASTVisitor) {
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        self
    }
    method map(blk) {
        map(blk)before {} after {}
    }
    method pretty(depth) {
        "Blank"
    }
    method toGrace(depth : Number) -> String {
        ""
    }
}

class signaturePart.new(*values) {
    inherits baseNode.new
    def kind = "signaturepart"
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
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := signaturePart.new(name, listMap(params, blk)before(blkBefore)after(blkAfter), vararg)
        n := blk.apply(n)
        blkAfter.apply(n)
        n
    }
    method map(blk) {
        map(blk)before {} after {}
    }
}

method callWithPart {
    object {
        method new(*values) {
            object {
                inherits baseNode.new
                def kind = "callwithpart"
                var name := ""
                var args := []
                if (values.size > 0) then {
                    name := values[1]
                }
                if (values.size > 1) then {
                    args := values[2]
                }
                method map(blk)before(blkBefore)after(blkAfter) {
                    blkBefore.apply(self)
                    var n := callWithPart.new(name, listMap(args, blk)before(blkBefore)after(blkAfter))
                    n := blk.apply(n)
                    blkAfter.apply(n)
                    n
                }
                method map(blk) {
                    map(blk)before {} after {}
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
     visitTypeLiteral(o) -> Boolean
     visitTypeDec(o) -> Boolean
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
     visitDialect(o) -> Boolean
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
        method visitTypeDec(o) -> Boolean {
            true
        }
        method visitTypeLiteral(o) -> Boolean {
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
        method visitDialect(o) -> Boolean {
            true
        }
    }
}
def ast = self
def patternMarkVisitor = object {
    inherits ast.baseVisitor
    method visitCall(c) {
        c.isPattern := true
        true
    }
}

method findAnnotation(node, annName) {
    for (node.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso {
            ann.value == annName }) then {
            return object {
                inherits true
                def value is public = ann
            }
        }
    }
    false
}
