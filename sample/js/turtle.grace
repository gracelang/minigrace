import "dom" as dom
import "mgcollections" as collections

def document = dom.document
def ts = document.getElementById("tab")
for (0..(ts.options.length-1)) do {i->
    if (ts.options.item(i).value == "canvas_tab") then {
        ts.selectedIndex := i
        dom.window.tabswitch
    }
}

def canvas = document.getElementById("standard-canvas")
def ctx = canvas.getContext("2d")
ctx.lineWidth := 1
ctx.fillStyle := "white"
ctx.fillRect(0, 0, 500, 250)
ctx.strokeStyle := "black"
ctx.rect(0, 0, 500, 250)
ctx.stroke

def trig = dom.window.Math

class colour.r(r')g(g')b(b') {
    def r is readable = r'
    def g is readable = g'
    def b is readable = b'
}
def black = colour.r 0 g 0 b 0
def blue = colour.r 0 g 0 b 1
def green = colour.r 0 g 1 b 0
def red = colour.r 1 g 0 b 0

var x := 150
var y := 225
var started := false
var maxActionsDrawn := -1

def actions = collections.list.new
var da
var turtleAngle := 0

def PI = 3.14159
method modifyXY(dist, angle) {
    def y' = trig.cos(angle / 180 * PI) * dist
    def x' = trig.sin(angle / 180 * PI) * dist
    y := y - y'
    x := x + x'
}

method drawTurtle(angle) {
    def triangleSize = 30
    ctx.beginPath
    ctx.fillStyle := "rgb(0, 128, 0)"
    ctx.lineWidth := 3
    ctx.moveTo(x, y)
    ctx.lineTo(x - trig.cos((angle - 60) / 180 * PI) * triangleSize,
              y - trig.sin((angle - 60) / 180 * PI) * triangleSize)
    ctx.lineTo(x + trig.cos((angle + 60) / 180 * PI) * triangleSize,
              y + trig.sin((angle + 60) / 180 * PI) * triangleSize)
    ctx.lineTo(x, y)
    ctx.fill
    ctx.closePath
}
method move(dist, angle, lineCol, lineWidth) {
    ctx.fillStyle := "rgb({lineCol.r}, {lineCol.g}, {lineCol.b})"
    ctx.lineWidth := lineWidth
    ctx.moveTo(x, y)
    modifyXY(dist, angle)
    ctx.lineTo(x, y)
    ctx.stroke
    turtleAngle := angle
}
method start {
    drawTurtle(turtleAngle)
}

