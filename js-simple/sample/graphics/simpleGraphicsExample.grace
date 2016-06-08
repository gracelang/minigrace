// Example use of the simplegraphics module
// This example should run on both the JavaScript- and GTK+-based
// implementations of that module.
import "simplegraphics" as g

g.initialise

for (1..50) do {i->
    g.drawLineFrom(i * 10, 0)to(i * 10, 250)in(g.white)
}
for (1..25) do {i->
    g.drawLineFrom(0, i * 10)to(500, i * 10)in(g.white)
}

for (0..620) do {i->
    // Normalise to 0-620 to 360 degrees for HSL
    def d = i / 1.72222
    g.drawSectorAt(250, 125)radius(100)from(i/100)to(i/100 + 0.1)
        in(g.Colour.h(d) s 100 l 50)
}
for (0..628) do {i->
    // Normalise 0-628 to 360 degrees for HSL
    def d = i / 1.74444
    g.drawArcAround(250, 125)radius(125)width(10)from(i/100)to(i/100 + 0.1)
        in(g.Colour.h(d) s 100 l 50)
}

g.fillCircle(250, 125) radius(25) with (g.black)

g.drawRect(240, 115, 20, 20)in(g.Colour.r 0 g 0 b 255)

g.write "Hello, world!" at(185, 130) size(20) in(g.white)
g.end
