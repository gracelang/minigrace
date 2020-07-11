dialect "none"
// Adds soem definitions similar to the Logo dialect

import "standardBundle" as standardBundle
import "minitestBundle" as minitestBundle

use standardBundle.open
use minitestBundle.open

type Color = interface {
    r -> Number
    g -> Number
    b -> Number
}

class r(r)g(g)b(b) {
    method asString { "color r {r} g {g} b {b}" }
}

def red is public = r 255 g 0 b 0
method blue { r 0 g 0 b 255 }
var lineWidth is public := 1

method penWidth { lineWidth }
method penWidth:=(w) { lineWidth := w }

