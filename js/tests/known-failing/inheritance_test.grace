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

def oc23 = outputEvaluation.con 23
def mc23 = monadicExpressions.con 23
print(oc23)
print(mc23)
