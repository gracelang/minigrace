// A simple "Pong" game using the DOM module and canvas
// element.  The left paddle will follow the mouse over
// the canvas.
import "dom" as dom

def document = dom.document

// Activate the canvas tab if it isn't already
//  def ts = document.getElementById("output-select")
//  for (0..(ts.options.length-1)) do {i->
//      if (ts.options.item(i).value == "canvas") then {
//          ts.selectedIndex := i
//          dom.window.outputswitch
//      }
//  }
document.getElementById("tab_canvas").click

def canvas = dom.document.getElementById("standard-canvas")
def ctx = canvas.getContext("2d")

ctx.fillStyle := "black"
ctx.fillRect(0, 0, 500, 250)

def ball = object {
    var x is readable := 250
    var y is readable := 125
    var dx is readable := -1
    var dy := -0.75
    method draw {
        ctx.beginPath
        ctx.fillStyle := "white"
        ctx.fillRect(x-5, y-5, 10, 10)
    }
    method live {
        return (x > 0) && (x < 500)
    }
    method step {
        x := x + dx
        y := y + dy
        if (y <= 0) then {
            dy := -dy
        }
        if (y >= 250) then {
            dy := -dy
        }
        // Bouncing off user paddle
        if (x <= 15) then {
            if ((y < (paddle.y + 20)) && (y > (paddle.y - 20))) then {
                dx := -dx
            }
            // Sharp bounces from the corners
            if ((y < (paddle.y + 20)) && (y > (paddle.y + 10))) then {
                dy := dy + 0.5
            }
            if ((y < (paddle.y - 10)) && (y > (paddle.y - 20))) then {
                dy := dy - 0.5
            }
        }
        // Bouncing off computer paddle
        if (x >= 485) then {
            if ((y < (paddle2.y + 20)) && (y > (paddle2.y - 20))) then {
                dx := -dx
            }
            // Sharp bounces from the corners
            if ((y < (paddle.y + 20)) && (y > (paddle.y + 10))) then {
                dy := dy + 0.5
            }
            if ((y < (paddle.y - 10)) && (y > (paddle.y - 20))) then {
                dy := dy - 0.5
            }
        }
    }
}

// The user's paddle
def paddle = object {
    var y is readable := 125
    var mouseY is readable, writable := 125
    method step {
        if (mouseY < y) then {
            y := y - 2
        }
        if (mouseY > y) then {
            y := y + 2
        }
    }
    method draw {
        ctx.beginPath
        ctx.fillStyle := "white"
        ctx.fillRect(0, y - 20, 10, 40)
    }
}
// The computer's paddle
def paddle2 = object {
    var y is readable := 125
    var mouseY is readable, writable := 125
    method step {
        if (ball.dx < 0) then {
            // Move towards middle when ball going away
            // from us.
            if (y < 125) then {
                y := y + 2
            }
            if (y > 125) then {
                y := y - 2
            }
        } else {
            // Move towards ball when it's coming
            // towards us.
            if (y < ball.y) then {
                y := y + 2
            }
            if (y > ball.y) then {
                y := y - 2
            }
        }
    }
    method draw {
        ctx.beginPath
        ctx.fillStyle := "white"
        ctx.fillRect(490, y - 20, 10, 40)
    }
}

// Save the listener function so that we can remove it
// later on.
def mouseMoveListener = { ev -> paddle.mouseY :=
ev.clientY - canvas.offsetTop }
canvas.addEventListener("mousemove", mouseMoveListener)

// Waits 5ms betweeen each iteration of this loop
dom.while {ball.live} waiting 5 do {
    ball.step
    paddle.step
    paddle2.step
    ctx.fillStyle := "black"
    ctx.fillRect(0, 0, 500, 250)
    ball.draw
    paddle.draw
    paddle2.draw
}.then { // When the while loop terminates, run this block.
    canvas.removeEventListener("mousemove", mouseMoveListener)
    ctx.font := "50px sans-serif"
    ctx.textAlign := "center"
    ctx.textBaseline := "middle"
    if (ball.x < 250) then {
        ctx.fillText("You lose!", 250, 125)
    } else {
        ctx.fillText("You win!", 250, 125)
    }
}
