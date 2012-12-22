import "ast" as ast
import "mgcollections" as collections
import "StandardPrelude" as StandardPrelude

def standardPrelude is parent = StandardPrelude

def patterns = collections.list.new
def bannedIdentifiers = collections.set.new
def CheckerFailure = Exception.refine "CheckerFailure"

method visitWithPatterns(o) {
    for (patterns) do {pat->
        if (pat.pattern.match(o)) then {
            CheckerFailure.raiseWith(pat.message, object {
                def line is public, readable = o.line
                def linePos is public, readable = 1
            })
        }
    }
}

def patternVisitor = object {
    inherits ast.baseVisitor

    method visitFor(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitWhile(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitIf(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitBlock(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitMatchCase(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitCatchCase(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitMethodType(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitType(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitMethod(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitCall(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitClass(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitObject(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitArray(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitMember(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitGeneric(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitIdentifier(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitOctets(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitString(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitNum(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitOp(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitIndex(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitBind(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitDefDec(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitVarDec(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitImport(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitReturn(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitInherits(o) -> Boolean is public {
        visitWithPatterns(o)
    }
    method visitDialect(o) -> Boolean is public {
        visitWithPatterns(o)
    }
}

method fail(msg)when(pat) {
    patterns.push(object {
        def pattern is public, readable = pat
        def message is public, readable = msg
    })
}

def Block' is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "block") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Type' is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "type") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Method is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "method") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Call is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "call") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Class is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "class") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Object is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "object") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Member is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "member") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Identifier is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "identifier") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Op is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "op") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Index is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "index") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Bind is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "bind") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def DefDec is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "defdec") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def VarDec is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "vardec") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Import is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "import") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Return is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "return") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}
def Inherits is public, readable = object {
    inherits BasicPattern.new
    method match(o) is public {
        if (o.kind == "inherits") then {
            return SuccessfulMatch.new(o, [])
        }
        return FailedMatch.new(o)
    }
}

method prohibit(ident) {
    bannedIdentifiers.add(ident)
}

patterns.push(object {
    def pattern is public, readable = {
        o : Identifier -> if (bannedIdentifiers.contains(o.value)) then {
            CheckerFailure.raiseWith("\"{o.value}\" is not a valid identifier "
                ++ "in this dialect", o)
        }
    }
    // This can't actually come up:
    def message is public, readable = "used banned identifier"
})

method check(l) {
    for (l) do {n->
        n.accept(patternVisitor)
    }
}
