// Logo-like dialect
// This dialect provides turtle graphics, embedded in Grace syntax but
// using only statements of what should happen. The turtle module
// handles the actual drawing and user interface.
import "turtle" as turtle
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.new

def red = turtle.red
def green = turtle.green
def blue = turtle.blue
def black = turtle.black

var lineWidth := 1
var lineColor := black

method forward(dist) {
    turtle.move(dist, lineColor, lineWidth)
}
method turnRight(ang) {
    turtle.turnRight(ang)
}
method turnLeft(ang) {
    turtle.turnLeft(ang)
}
method penUp {
    turtle.penUp
}
method penDown {
    turtle.penDown
}

method atModuleEnd(mod) {
    turtle.start
}

