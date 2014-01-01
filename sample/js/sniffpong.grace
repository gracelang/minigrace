dialect "sniff"
background ("black")

object {
    inherits circle
    colour := "yellow"
    radius := 10
    jumpTo (centre)
    turn (random (60) + 15)
    whenever {x < 10} do {
        background ("red")
        stop
    }
    whenever {x > (canvasWidth - 10)} do {
        background ("green")
        stop
    }
    whenever {touchingEdge} do {
        bounce
    }
    whenever {touching (myPaddle)} do {
        bounceOff (myPaddle)
    }
    whenever {touching (computerPaddle)} do {
        bounceOff (computerPaddle)
    }
    always {
        forward (4)
    }
}
def ball = Δ

object {
    inherits rectangle
    height := 40
    width := 20
    colour := "white"
    jumpTo (leftCentre.right(10))
    whenever {y < mouse.y} do {
        y := y + 6
    }
    whenever {y > mouse.y} do {
        y := y - 6
    }
}
def myPaddle = Δ

object {
    inherits rectangle
    height := 40
    width := 20
    colour := "white"
    jumpTo (rightCentre.left(10))
    whenever {y < ball.y} do {
        y := y + 2
    }
    whenever {y > ball.y} do {
        y := y - 2
    }
}
def computerPaddle = Δ

// chunks: 413px,12px 10px,8px 341px,54px 340px,520px
