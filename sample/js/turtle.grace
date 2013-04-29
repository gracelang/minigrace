import "dom" as dom
import "mgcollections" as collections

def document = dom.document

// Activate the canvas tab if it isn't already
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
def blue = colour.r 0 g 0 b 255
def green = colour.r 0 g 255 b 0
def red = colour.r 255 g 0 b 0

var x := 150
var y := 225
var started := false
var maxActionsDrawn := -1

var turtleAngle := 0

// Each frame of the image is a step
def steps = collections.list.new
// Each discrete movement command is a stage
def stages = collections.list.new

def PI = 3.14159

method drawTurtle(angle) {
    def triangleSize = 30
    def x' = x + trig.sin(angle / 180 * PI) * triangleSize / 2
    def y' = y - trig.cos(angle / 180 * PI) * triangleSize / 2
    ctx.beginPath
    ctx.fillStyle := "rgb(0, 128, 0)"
    ctx.lineWidth := 3
    ctx.moveTo(x', y')
    ctx.lineTo(x' - trig.cos((angle - 60) / 180 * PI) * triangleSize,
              y' - trig.sin((angle - 60) / 180 * PI) * triangleSize)
    ctx.lineTo(x' + trig.cos((angle + 60) / 180 * PI) * triangleSize,
              y' + trig.sin((angle + 60) / 180 * PI) * triangleSize)
    ctx.lineTo(x', y')
    ctx.fill
    ctx.closePath
}
method move(dist, angle, lineCol, lineWidth) {
    // The entirety of this movement:
    stages.push {
        ctx.strokeStyle := "rgb({lineCol.r}, {lineCol.g}, {lineCol.b})"
        ctx.lineWidth := lineWidth
        def y' = trig.cos(angle / 180 * PI) * dist
        def x' = trig.sin(angle / 180 * PI) * dist
        ctx.beginPath
        ctx.moveTo(x, y)
        y := y - y'
        x := x + x'
        ctx.lineTo(x,y)
        ctx.stroke
        ctx.closePath
    }
    def stageN = stages.size - 1
    // Just the rotation:
    steps.push {
        for (1..stageN) do {j->
            stages.at(j).apply
        }
        turtleAngle := angle
    }
    // One frame for each unit of distance
    for (1..dist) do {i->
        steps.push {
            // Draw all previous stages (not this one) before
            // this frame's delta.
            for (1..stageN) do {j->
                stages.at(j).apply
            }
            def y' = trig.cos(angle / 180 * PI) * i
            def x' = trig.sin(angle / 180 * PI) * i
            ctx.beginPath
            ctx.strokeStyle := "rgb({lineCol.r}, {lineCol.g}, {lineCol.b})"
            ctx.lineWidth := lineWidth
            ctx.moveTo(x, y)
            y := y - y'
            x := x + x'
            ctx.lineTo(x, y)
            ctx.stroke
            ctx.closePath
        }
    }
}
method start {
    // Iterate through the frames of the image and draw them,
    // each separated in time by 10ms. dom.for()waiting()do
    // uses setTimeout internally so it runs asynchronously.
    dom.for(steps) waiting 10 do {step->
        ctx.fillStyle := "white"
        ctx.fillRect(0, 0, 500, 250)
        x := 150
        y := 225
        step.apply
        drawTurtle(turtleAngle)
    }
}

