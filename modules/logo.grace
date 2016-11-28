// Logo-like dialect
// This dialect provides turtle graphics, embedded in Grace syntax but
// using only statements of what should happen. The turtle module
// handles the actual drawing and user interface.
import "turtle" as turtle
inherit prelude.methods

type Point = prelude.Point

def red is public = turtle.red
def green is public = turtle.green
def blue is public = turtle.blue
def black is public = turtle.black
def yellow is public = turtle.r 255 g 255 b 0
def white is public = turtle.r 255 g 255 b 255
def magenta is public = turtle.r 255 g 0 b 255
def cyan is public = turtle.r 0 g 255 b 255
def sienna is public = turtle.r 160 g 82 b 45

method r (r) g (g) b (b) {
    turtle.r(r)g(g)b(b)
}

var lineWidth is public := 1
var lineColor is public := black

method penWidth {
    lineWidth
}
method penWidth:=(w) {
    lineWidth := w
}
method penColor {
    lineColor
}
method penColor:=(c) {
    lineColor := c
}
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
method speed:=(sp) {
    if (sp >= 1) then {
        turtle.speed := sp.floor
    }
}
method position { turtle.turtlePosition }
method angle { turtle.turtleAngle }

method createCanvas(size:Point) {
    // Creates a canvas in a pop-up window
     turtle.useCanvas(size)
}
def thisDialect is public = object {
    method atEnd(mod) {
        turtle.start
    }
}
