import "dom" as dom

var document
var canvas
var ctx

def Colour = object {
    method r(r)g(g)b(b) {
        object {
            method asDomString {
                "rgb({r}, {g}, {b})"
            }
            method asString {
                asDomString
            }
        }
    }
    method h(h)s(s)l(l) {
        object {
            method asDomString {
                "hsl({h}, {s}%, {l}%)"
            }
            method asString {
                asDomString
            }
        }
    }
}
def Color = Colour

def Pi = 3.141592653589793

def white = Colour.r 255 g 255 b 255
def black = Colour.r 0 g 0 b 0

method initialise {
    document := dom.document
    document.getElementById("tab_canvas").click

    canvas := document.getElementById("standard-canvas")
    ctx := canvas.getContext("2d")
    ctx.lineWidth := 1
    ctx.fillStyle := "black"
    ctx.fillRect(0, 0, 500, 250)
}

method fillRect(x, y, w, h)with(col) {
    ctx.fillStyle := col.asDomString
    ctx.fillRect(x, y, w, h)
}

method fillCircle(x,y)radius(radius)with(col) {
    ctx.fillStyle := col.asDomString
    ctx.beginPath
    ctx.moveTo(x,y)
    ctx.arc(x, y, radius, 0, Pi * 2, true)
    ctx.fill
    ctx.closePath
}

method drawRect(x, y, w, h)in(col) {
    ctx.strokeStyle := col.asDomString
    ctx.beginPath
    ctx.rect(x,y,w,h)
    ctx.stroke
    ctx.closePath
}

method drawLineFrom(x,y)to(x', y')in(col) {
    ctx.strokeStyle := col.asDomString
    ctx.beginPath
    ctx.moveTo(x,y)
    ctx.lineTo(x', y')
    ctx.stroke
    ctx.closePath
}

method drawSectorAt(x,y)radius(radius)from(angle1)to(angle2)in(col) {
    ctx.beginPath
    ctx.fillStyle := col.asDomString
    ctx.moveTo(x,y)
    ctx.arc(x, y, radius, angle1, angle2)
    ctx.fill
    ctx.closePath
}
method drawArcAround(x,y) radius(radius) width(width) from(angle1) to(angle2) in(col) {
    ctx.beginPath
    ctx.fillStyle := col.asDomString
    ctx.arc(x, y, radius, angle1, angle2)
    ctx.arc(x, y, radius - width, angle2, angle1, true)
    ctx.fill
    ctx.closePath
}

method write(s) at(x,y) in(col) {
    ctx.font := "10pt sans-serif"
    ctx.fillStyle := col.asDomString
    ctx.fillText(s, x, y)
}
method write(s) at(x,y) size(size) in(col) {
    ctx.fillStyle := col.asDomString
    ctx.font := "{size}px sans-serif"
    ctx.beginPath
    ctx.fillText(s, x, y)
    ctx.fill
    ctx.closePath
}
method end {
    // No-op here
}
