class simpleExpressions {
    class con(n) {
        method asString { "con {n}" }
    }
}
class monadicExpressions {
    class con(n) {
        inherit simpleExpressions.con(n)
    }
}
class outputEvaluation {
    class con(n) {
        inherit monadicExpressions.con(n)
    }
}

print(simpleExpressions.con 23)
print(monadicExpressions.con 23)
print(outputEvaluation.con 23)

