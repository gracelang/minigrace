import "dom" as dom

// These are vars to allow updating them only when "start" runs
var document
var canvas
var ctx
var trig

class r(r')g(g')b(b') {
    def r is readable = r'
    def g is readable = g'
    def b is readable = b'
}
def black = r 0 g 0 b 0
def blue = r 0 g 0 b 255
def green = r 0 g 255 b 0
def red = r 255 g 0 b 0

var x := 150
var y := 225
var started := false
var maxActionsDrawn := -1
var delay := 1

var turtleAngle := 0

// Each frame of the image is a step
def steps = list []
// Each discrete movement command is a stage
def stages = list []

method drawTurtle(angle) {
    initialise
    def mctx = canvas.getContext("2d")
    def triangleSize = 30
    def x' = x + trig.sin(angle / 180 * π) * triangleSize / 2
    def y' = y - trig.cos(angle / 180 * π) * triangleSize / 2
    mctx.beginPath
    mctx.fillStyle := "rgb(0, 128, 0)"
    mctx.lineWidth := 3
    mctx.moveTo(x', y')
    mctx.lineTo(x' - trig.cos((angle - 75) / 180 * π) * triangleSize,
              y' - trig.sin((angle - 75) / 180 * π) * triangleSize)
    mctx.lineTo(x' + trig.cos((angle + 75) / 180 * π) * triangleSize,
              y' + trig.sin((angle + 75) / 180 * π) * triangleSize)
    mctx.lineTo(x', y')
    mctx.fill
    mctx.closePath
}

var backingCanvas
var drawingEnabled := true

method move(dist, lineCol, lineWidth) {
    initialise
    def angle = turtleAngle
    def y' = trig.cos(angle / 180 * π) * dist
    def x' = trig.sin(angle / 180 * π) * dist
    def startX = x
    def startY = y
    def startAngle = turtleAngle
    y := y - y'
    x := x + x'
    def stageN = stages.size - 1
    def mctx = canvas.getContext("2d")
    // One frame for each unit of distance
    for (1..dist.floor) do {i->
        steps.push {
            def y'' = trig.cos(angle / 180 * π) * i
            def x'' = trig.sin(angle / 180 * π) * i
            mctx.beginPath
            mctx.strokeStyle := "rgb({lineCol.r}, {lineCol.g}, {lineCol.b})"
            mctx.lineWidth := lineWidth
            mctx.moveTo(startX, startY)
            y := startY - y''
            x := startX + x''
            if (drawingEnabled) then {
                mctx.lineTo(x, y)
                mctx.stroke
            }
            turtleAngle := startAngle
        }
    }
    steps.push {
        def y'' = trig.cos(angle / 180 * π) * dist
        def x'' = trig.sin(angle / 180 * π) * dist
        ctx.beginPath
        ctx.strokeStyle := "rgb({lineCol.r}, {lineCol.g}, {lineCol.b})"
        ctx.lineWidth := lineWidth
        ctx.moveTo(startX, startY)
        y := startY - y''
        x := startX + x''
        if (drawingEnabled) then {
            ctx.lineTo(x, y)
            ctx.stroke
        }
        turtleAngle := startAngle
    }
}
method turnRight(ang) {
    initialise
    def startX = x
    def startY = y
    def startAngle = turtleAngle
    for (0..ang.floor) do {i->
        steps.push {
            x := startX
            y := startY
            turtleAngle := startAngle + i
        }
    }
    steps.push {
        x := startX
        y := startY
        turtleAngle := startAngle + ang
    }
    turtleAngle := turtleAngle + ang
}
method turnLeft(ang) {
    initialise
    def startX = x
    def startY = y
    def startAngle = turtleAngle
    for (0..ang.floor) do {i->
        steps.push {
            x := startX
            y := startY
            turtleAngle := startAngle - i
        }
    }
    steps.push {
        x := startX
        y := startY
        turtleAngle := startAngle - ang
    }
    turtleAngle := turtleAngle - ang
}
method penUp {
    initialise
    steps.push {
        drawingEnabled := false
    }
}
method penDown {
    initialise
    steps.push {
        drawingEnabled := true
    }
}
var initialised := false
method initialise {
    if (initialised) then {
        return false
    }
    document := dom.document
    // Activate the canvas tab if it isn't already
    //def ts = document.getElementById("tab")
    //for (0..(ts.options.length-1)) do {i->
    //    if (ts.options.item(i).value == "canvas_tab") then {
    //        ts.selectedIndex := i
    //        dom.window.tabswitch
    //    }
    //}
    document.getElementById("tab_canvas").click
    initialised := true
    trig := dom.window.Math
    canvas := document.getElementById("standard-canvas")
    ctx := canvas.getContext("2d")
    ctx.lineWidth := 1
    ctx.fillStyle := "white"
    ctx.fillRect(0, 0, 250, 250)
    ctx.strokeStyle := "black"
    ctx.rect(0, 0, 250, 250)
    ctx.stroke
}
method start {
    initialise
    // Iterate through the frames of the image and draw them,
    // each separated in time by 10ms. dom.for()waiting()do
    // uses setTimeout internally so it runs asynchronously.
    backingCanvas := dom.document.createElement("canvas")
    backingCanvas.height := 250
    backingCanvas.width := 500
    ctx := backingCanvas.getContext("2d")
    def mctx = canvas.getContext("2d")
    dom.for(steps) waiting(delay)do {step->
        mctx.fillStyle := "white"
        mctx.fillRect(0, 0, 500, 250)
        x := 150
        y := 225
        turtleAngle := 0
        step.apply
        mctx.drawImage(backingCanvas, 0, 0)
        drawTurtle(turtleAngle)
    }
}
