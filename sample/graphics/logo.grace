// Logo-like dialect
// This dialect provides turtle graphics, embedded in Grace syntax but
// using only statements of what should happen. The turtle module
// handles the actual drawing and user interface.
import "turtle" as turtle
import "StandardPrelude" as StandardPrelude

def dialectParent is parent = StandardPrelude

def red = turtle.red
def green = turtle.green
def blue = turtle.blue
def black = turtle.black

var lineWidth := 1
var lineColor := black
var angle := 0

method forward(dist) {
    turtle.move(dist, angle, lineColor, lineWidth)
}
method turnRight(ang) {
    angle := angle + ang
}
method turnLeft(ang) {
    angle := angle - ang
}

method atModuleEnd(mod) {
    turtle.start
}

