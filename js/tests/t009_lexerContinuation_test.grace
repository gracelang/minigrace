dialect "minitest"
import "lexer" as lexer
import "errormessages" as errormessages

method assert (tokens1) hasSameTokensAs (tokens2) {
    var message := ""
    if (tokens1.size ≠ tokens2.size) then {
        message := "first token stream has size {tokens1.size} but second stream has size {tokens2.size}\n"
    }
    var t1 := tokens1.first
    var t2 := tokens2.first
    def sz = min(tokens1.size, tokens2.size)
    (1..sz).do { ix →
        if (token(t1)isSameAs(t2).not) then {
            message := message ++ "streams differ at element {ix}:\n{t1}\n{t2}\n"
        }
        t1 := t1.next
        t2 := t2.next
    }
    assert (message.isEmpty) description (message)
}

method token(t1)isSameAs(t2) {
    (t1.value == t2.value) && (t1.kind == t2.kind)
}

testSuite {
    test "confuse continuation with block start 1" by {
        def l1 = lexer.lexString ‹if ((ann.kind == "identifier") && {
    ann.value == annName }) then {
    return 17
}›  // l1, line 2 is not a continuation line, since it starts a block
        def l2 = lexer.lexString ‹if ((ann.kind == "identifier") && { ann.value == annName }) then {
    return 17
}›
        self assert (l1) hasSameTokensAs (l2)
    }

    test "confuse continuation with block start 2" by {
        def l1 = lexer.lexString ‹if ((ann.kind == "identifier") && {
            ann.value == annName }
) then {
    return 17
}›
        def l2 = lexer.lexString ‹if ((ann.kind == "identifier") && { ann.value == annName }) then {
    return 17
}›
        self assert (l1) hasSameTokensAs (l2)
    }

    test "confuse continuation with block start 3" by {
        def l1 = lexer.lexString ‹method findAnnotation(node, annName) {
    for (node.annotations) do {ann->
        if ((ann.kind == "identifier") && {
            ann.value == annName }) then {
            return object {
                inherit true
                def value is public = ann
            }
        }
    }
    false
}›
        def l2 = lexer.lexString ‹method findAnnotation(node, annName) {
    for (node.annotations) do {ann->
        if ((ann.kind == "identifier") && { ann.value == annName }) then {
            return object {
                inherit true
                def value is public = ann
            }
        }
    }
    false
}›
        self assert (l1) hasSameTokensAs (l2)
    }

    test "badly-indented def" by {
        // the end of the then block does not return to the correct indentation
        def m = ‹method test {
    def rnm = if (opSym == "+") then { "sum"
                } else { "opresult"
                }
}›
        assert {lexer.lexString(m)}
            shouldRaise (errormessages.SyntaxError)
            mentioning "this is not the body of a block"
    }

    test "well-indented def" by {
        // the end of the then block is at the same indentation as the start
        def m = ‹method test(opSym) {
    def rnm = if (opSym == "+") then { "sum"
    } else { "opresult"
    }
}›
        assert (lexer.lexString(m).first.isKeyword)
            description "code lexed, but first token was not a keyword"
    }
}
