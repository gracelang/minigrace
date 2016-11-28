#pragma ExtendedLineups
import "dom" as dom
import "sys" as sys

// These are vars to allow updating them only when "start" runs
var document
var canvas
var ctx
var theWindow
var canvasElement
var useCanvas

class r(r')g(g')b(b') {
    def r is readable = r'
    def g is readable = g'
    def b is readable = b'
}
def black is public = r 0 g 0 b 0
def blue is public = r 0 g 0 b 255
def green is public = r 0 g 255 b 0
def red is public = r 255 g 0 b 0

var x
var y
var started := false
var maxActionsDrawn := -1
var delay := 1
var usePopup := false
var windowHeight := 700
var windowWidth := 850

var speed is public := 1

var turtleAngle is readable := 0

method turtlePosition {
    initialise
    x@y
}

// Each frame of the image is a step
def steps = []

method drawTurtle(angle) {
    initialise
    def mctx = canvas.getContext "2d"
    def triangleSize = 30
    def x' = x + (angle / 180 * π).sin * triangleSize / 2
    def y' = y - (angle / 180 * π).cos * triangleSize / 2
    mctx.beginPath
    mctx.fillStyle := "rgb(0, 128, 0)"
    mctx.lineWidth := 3
    mctx.moveTo(x', y')
    mctx.lineTo(x' - ((angle - 75) / 180 * π).cos * triangleSize,
          y' - ((angle - 75) / 180 * π).sin * triangleSize)
    mctx.lineTo(x' + ((angle + 75) / 180 * π).cos * triangleSize,
          y' + ((angle + 75) / 180 * π).sin * triangleSize)
    mctx.lineTo(x', y')
    mctx.fill
    mctx.closePath
}

var backingCanvas
var drawingEnabled := true

method move(dist, lineCol, lineWidth) {
    initialise
    def angle = turtleAngle
    def y' = (angle / 180 * π).cos * dist
    def x' = (angle / 180 * π).sin * dist
    def startX = x
    def startY = y
    def startAngle = turtleAngle
    y := y - y'
    x := x + x'
    def mctx = canvas.getContext("2d")
    // One frame for each unit of distance
    for (1..dist.floor) do {i->
        if ((i % speed) == 0) then {
            steps.push {
                def y'' = (angle / 180 * π).cos * i
                def x'' = (angle / 180 * π).sin * i
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
    }
    steps.push {
        def y'' = (angle / 180 * π).cos * dist
        def x'' = (angle / 180 * π).sin * dist
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
        if ((i % speed) == 0) then {
            steps.push {
                x := startX
                y := startY
                turtleAngle := (startAngle + i) % 360
            }
        }
    }
    steps.push {
        x := startX
        y := startY
        turtleAngle := (startAngle + ang) % 360
    }
    turtleAngle := (turtleAngle + ang) % 360
}
method turnLeft(ang) {
    initialise
    def startX = x
    def startY = y
    def startAngle = turtleAngle
    for (0..ang.floor) do { i ->
        if ((i % speed) == 0) then {
            steps.push {
                x := startX
                y := startY
                turtleAngle := (startAngle - i) % 360
            }
        }
    }
    steps.push {
        x := startX
        y := startY
        turtleAngle := (startAngle - ang) % 360
    }
    turtleAngle := (turtleAngle - ang) % 360
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

    def tab = document.getElementById "tab_canvas"
    if (dom.noObject != tab) then {
        tab.click
    }
    initialised := true

    // Get the canvas: if the user requested a pop-up, use one
    if (usePopup) then {
        createPopupWindow
    } else {
        // Look for the canvas in the embedded web editor
        canvas := document.getElementById "standard-canvas"

        // Look for the canvas in the web IDE
        if (dom.noObject == canvas) then {
            canvas := document.getElementById "graphics"
        }

        // If these are not found, use a seperate window
        if (dom.noObject == canvas) then {
            createPopupWindow
        }
    }

    ctx := canvas.getContext("2d")
    ctx.lineWidth := 1
    ctx.fillStyle := "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle := "black"
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.stroke

    //Put the cursor in the center
    x := canvas.width/2;
    y := canvas.height/2;
}

method createPopupWindow {
    // create a pop-up window with a canvas for graphics
    theWindow := dom.window.open("", "", "width={windowWidth}+50, height={windowHeight}+50")

    // check to make sure window is open
    if (prelude.inBrowser && (dom.noObject == theWindow)) then {
        print "Failed to open the graphics window.\nIs your browser blocking pop-ups?"
        sys.exit(1)
    }

    // set the window attributes
    canvasElement := document.createElement "canvas"
    canvasElement.width := windowWidth
    canvasElement.height := windowHeight
    canvasElement.style.alignSelf:= "center"
    theWindow.document.body.appendChild(canvasElement)
    theWindow.document.title := "Logo Graphics"

    // register the window
    if (dom.doesObject(dom.window) haveProperty "graceRegisterWindow") then {
        dom.window.graceRegisterWindow(theWindow)
    }
    // set the canvas
    canvas := canvasElement
}

method start {
    initialise
    // Iterate through the frames of the image and draw them,
    // each separated in time by 10ms. dom.for()waiting()do
    // uses setTimeout internally so it runs asynchronously.
    backingCanvas := dom.document.createElement "canvas"
    backingCanvas.height := canvas.height
    backingCanvas.width := canvas.width
    ctx := backingCanvas.getContext "2d"
    def mctx = canvas.getContext "2d"
    dom.for (steps) waiting (delay) do { step ->
        mctx.fillStyle := "white"
        mctx.fillRect(0, 0, canvas.width, canvas.height)
        step.apply
        mctx.drawImage(backingCanvas, 0, 0)
        drawTurtle(turtleAngle)
    }
}

method useCanvas(size:Point) {
    // API for Logo to signal popup use
    usePopup := true
    windowWidth := size.x
    windowHeight := size.y
}
