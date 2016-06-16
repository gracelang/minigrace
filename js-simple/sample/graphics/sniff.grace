import "dom" as dom
import "math" as math

inherits prelude.methods

var document
var canvas
var backingCanvas
var backingContext
var mouseDownListener
var mouseMoveListener

def trig = dom.window.Math
def π = math.π

var stopRunning := false
var initialised := false
var backgroundColour := "white"
def registeredObjects = prelude.list []
def stepBlocks = prelude.list []

var canvasWidth
var canvasHeight

def left = "left"
def right = "right"
def top = "top"
def bottom = "bottom"

var centre
var leftCentre
var rightCentre

var above
var Δ

class x(x')y(y') {
    def x is public = x'
    def y is public = y'
    method left(dx) { x(x - dx)y(y) }
    method right(dx) { x(x + dx)y(y) }
    method up(dy) { x(x)y(y - dy) }
    method down(dy) { x(x)y(y + dy) }
}
class drawable {
    initialise
    registeredObjects.push(self)
    above := self
    Δ := self
    def alwaysBlocks = prelude.list []
    var x is readable := canvasWidth / 2
    var y is readable := canvasHeight / 2
    var destX := x
    var destY := y
    var angle := 180
    method step {
        for (alwaysBlocks) do {b->
            b.apply
        }
        tick
    }
    method tick {}
    method draw(ctx) {}
    method moveTo(p) {
        destX := p.x
        destY := p.y
    }
    method jumpTo(p) {
        x := p.x
        y := p.y
        destX := x
        destY := y
    }
    method isPointOver(p) { false }
    method mousedown {}
    method always(b) {
        alwaysBlocks.push(b)
    }
    method whenever(cond)do(b) {
        always {
            if (cond.apply) then {
                b.apply
            }
        }
    }
    method forward(dist) {
        def y' = trig.cos(angle / 180 * π) * dist
        def x' = trig.sin(angle / 180 * π) * dist
        x := x + x'
        y := y + y'
    }
    method normaliseAngle {
        while {angle < 0} do {
            angle := angle + 360
        }
        while {angle > 360} do {
            angle := angle - 360
        }
    }
    method turn(degrees) {
        angle := angle + degrees
        normaliseAngle
    }
    method touchingEdge {
        if (isPointOver(x(x)y(0))) then {
            return true
        }
        if (isPointOver(x(x)y(canvasHeight))) then {
            return true
        }
        if (isPointOver(x(0)y(y))) then {
            return true
        }
        if (isPointOver(x(canvasWidth)y(y))) then {
            return true
        }
        return false
    }
    method bounce {
        var dx := 0
        var dy := 0
        if (isPointOver(x(x)y(0))) then {
            bounceFrom(top)
        }
        if (isPointOver(x(x)y(canvasHeight))) then {
            bounceFrom(bottom)
        }
        if (isPointOver(x(0)y(y))) then {
            bounceFrom(left)
        }
        if (isPointOver(x(canvasWidth)y(y))) then {
            bounceFrom(right)
        }
        while { touchingEdge } do {
            forward 1
        }
    }
    method bounceFrom(dir) {
        if (dir == "left") then {
            angle := 360 - angle
        }
        if (dir == "right") then {
            angle := 360 - angle
        }
        if (dir == "top") then {
            angle := 180 - angle
        }
        if (dir == "bottom") then {
            angle := 180 - angle
        }
        normaliseAngle
        forward 2
    }
    method bounceOff(other) {
        if (x > other.x) then {
            bounceFrom(left)
        }
        if (x < other.x) then {
            bounceFrom(right)
        }
        while { touching(other) } do {
            forward 1
        }
    }
    method touching(other) {
        other.isPointOver(x(x)y(y))
    }
    method face(other) {
        if ((other.x != x) || (other.y != y)) then {
            angle := trig.atan2(other.x - x, other.y - y) * 180 / π
        }
        normaliseAngle
    }
    method stamp {
        draw(backingCanvas.getContext("2d"))
    }
}

method rectangle {
    object {
        inherits drawable
        var width := 100
        var height := 50
        var colour := "blue"
        method draw(ctx) {
            ctx.fillStyle := colour
            ctx.fillRect(x - width / 2, y - height / 2, width, height)
        }
        method isPointOver(p) {
            if (p.x < (x - width / 2)) then {
                return false
            }
            if (p.x > (x + width / 2)) then {
                return false
            }
            if (p.y < (y - height / 2)) then {
                return false
            }
            if (p.y > (y + height / 2)) then {
                return false
            }
            return true
        }
    }
}

method circle {
    object {
        inherits drawable
        var radius := 25
        var colour := "green"
        method draw(ctx) {
            ctx.fillStyle := colour
            ctx.beginPath
            ctx.arc(x, y, radius, 0, 6.283)
            ctx.fill
        }
        method isPointOver(p) {
            def dx = (p.x - x)
            def dy = (p.y - y)
            def dist = (dx * dx + dy * dy) ^ 0.5
            if (dist <= radius) then {
                return true
            }
            return false
        }
    }
}

method image {
    object {
        inherits drawable
        var width := 64
        var height := 64
        def imgTag = dom.document.createElement("img")
        method url {
            imgTag.src
        }
        method url:=(s) {
            imgTag.src := s
        }
        method draw(ctx) {
            ctx.save
            ctx.translate(x, y)
            ctx.rotate(-(angle + 180) / 180 * π)
            ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)
            ctx.restore
        }
        method isPointOver(p) {
            // Rotate p and express it relative to (x, y), then just
            // check whether it's within the bounds of the rectangle.
            def c = trig.cos(-(angle + 180) / 180 * π)
            def s = trig.sin(-(angle + 180) / 180 * π)
            def rotatedX = c * (p.x - x) - s * (p.y - y)
            def rotatedY = s * (p.x - x) + c * (p.y - y)
            if (rotatedX < (-width / 2)) then {
                return false
            }
            if (rotatedX > (width / 2)) then {
                return false
            }
            if (rotatedY < (-height / 2)) then {
                return false
            }
            if (rotatedY > (height / 2)) then {
                return false
            }
            return true
        }
    }
}

method value(b) {
    object {
        inherits drawable
        var colour := "blue"
        var label := ""
        method draw(ctx) {
            ctx.fillStyle := colour
            ctx.font := "20px sans-serif"
            if (label != "") then {
                ctx.fillText("{label} {b.apply}", x, y)
            } else {
                ctx.fillText("{b.apply}", x, y)
            }
        }
    }
}

def mouse = object {
    var position is public := x(0)y(0)
    method x {
        position.x
    }
    method y {
        position.y
    }
    method location {
        position
    }
}

method clear {
    def ctx = backingCanvas.getContext("2d")
    ctx.fillStyle := backgroundColour
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}
method always(b) {
    stepBlocks.push(b)
}
method whenever(c)do(b) {
    stepBlocks.push({
        if (c.apply) then { b.apply }
    })
}
method initialise {
    if (initialised) then {
        return false
    }
    initialised := true
    document := dom.document
    canvas := document.getElementById("standard-canvas")
    canvasWidth := canvas.width
    canvasHeight := canvas.height
    centre := x(canvasWidth / 2)y(canvasHeight / 2)
    leftCentre := x(0)y(canvasHeight / 2)
    rightCentre := x(canvasWidth)y(canvasHeight / 2)
    mouse.position := centre
    // Save the listener functions so that we can remove them
    // later on.
    mouseMoveListener := { ev ->
        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight
        def y = (ev.clientY - canvas.offsetTop - 7) / canvas.offsetHeight * canvasHeight
        mouse.position := x(x)y(y)
    }
    canvas.addEventListener("mousemove", mouseMoveListener)
    mouseDownListener := { ev ->
        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight
        def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight
        if ((x > (canvasWidth - 20)) && (y < 20)) then {
            ev.preventDefault
            stop
        }
        def p = x(x)y(y)
        for (registeredObjects) do {obj->
            if (obj.isPointOver(p)) then {
                obj.mousedown
                ev.preventDefault
            }
        }
    }
    canvas.addEventListener("mousedown", mouseDownListener)
}
method background(col) {
    backgroundColour := col
}
method random(n) {
    (n * math.random).truncated
}
method randomPoint {
    x(canvasWidth / 10 + random(canvasWidth * 0.8))
        y(canvasHeight / 10 + random(canvasHeight * 0.8))
}
method start {
    initialise
    stopRunning := false
    backingCanvas := dom.document.createElement("canvas")
    backingCanvas.height := canvasHeight
    backingCanvas.width := canvasWidth
    backingContext := backingCanvas.getContext("2d")
    def mctx = canvas.getContext("2d")
    dom.while { !stopRunning } waiting 10 do {
        for (registeredObjects) do {obj->
            obj.step
        }
        for (stepBlocks) do {step->
            step.apply
        }
        mctx.fillStyle := backgroundColour
        mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        mctx.drawImage(backingCanvas, 0, 0)
        for (registeredObjects) do {obj->
            obj.draw(mctx)
        }
        mctx.fillStyle := "red"
        mctx.fillRect(canvasWidth - 20, 0, 20, 20)
    }
}
method stop {
    stopRunning := true
    canvas.removeEventListener("mousedown", mouseDownListener)
    canvas.removeEventListener("mousemove", mouseMoveListener)
}
method atModuleEnd(module) {
    start
}
