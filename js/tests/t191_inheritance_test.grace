class simpleExpressions {
    class con(n) {
        method asString { "con {n}" }
    }
}
class monadicExpressions {
    class con(n) {
        inherits simpleExpressions.con(n)
    }
}
class outputEvaluation {
    class con(n) {
        inherits monadicExpressions.con(n)
    }
}

print(simpleExpressions.con 23)
print(monadicExpressions.con 23)
print(outputEvaluation.con 23)

