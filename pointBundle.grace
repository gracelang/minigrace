dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle
import "equalityBundle" as equalityBundle

use equalityBundle.open
use basicTypesBundle.open

trait open {
    type Point =  EqualityObject & interface {

        x -> Number
        // the x-coordinates of self

        y -> Number
        // the y-coordinate of self

        == (other:outer.Object) -> Boolean
        // true if other is a Point with the same x and y coordinates as self.

        + (other:Point|Number) -> Point
        // if other is a Point, returns the Point that is the vector sum of self
        // and other, i.e. (self.x+other.x) @ (self.y+other.y).  If other is a Number,
        // returns the point (self.x+other) @ (self.y+other)

        - (other:Point|Number) -> Point
        // if other is a Point, returns the Point that is the vector difference of
        // self and other, i.e. (self.x-other.x) @ (self.y-other.y). If other is a
        // Number, returns the point (self.x-other) @ (self.y-other)


        prefix- -> Point
        // the negation of self

        * (factor:Number) -> Point
        // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)

        / (factor:Number) -> Point
        // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)

        length -> Number
        // distance from self to the origin

        distanceTo(other:Point) -> Number
        // distance from self to other

        dot (other:Point) -> Number
        ⋅ (other:Point) -> Number
        // dot product of self and other

        norm -> Point
        // the unit vector (vecor of length 1) in same direction as self

        reverseTimesNumber(_) → Point       // for double-dispatch
        reverseDivideNumber(_) → Point
        reversePlusNumber(_) → Point
        reverseMinusNumber(_) → Point
    }

    class point2Dx (x') y (y') {
        use equality
        def x is readable = x'
        def y is readable = y'
        method asString { "({x}@{y})" }
        method asDebugString { self.asString }
        method distanceTo(other:Point) {
            (((x - other.x)^2) + ((y - other.y)^2)).sqrt
        }
        method -(other) {
            match(other)
                case { o:Point -> point2Dx (x - o.x) y (y - o.y) }
                case { n:Number -> point2Dx (x - n) y (y - n) }
                else { other.reverseMinusPoint(self) }
        }
        method +(other) {
            match(other)
                case { o:Point -> point2Dx (x + o.x) y (y + o.y) }
                case { n:Number -> point2Dx (x + n) y (y + n) }
                else { other.reversePlusPoint(self) }
        }
        method /(other:Number) { point2Dx (x / other) y (y / other) }
        method *(other:Number) { point2Dx (x * other) y (y * other) }
        method length { ((x^2) + (y^2)).sqrt }
        method ==(other) {
            match (other)
                case { o:Point -> (x == o.x) && (y == o.y) }
                else { false }
        }
        method prefix- { point2Dx (-x) y (-y) }
        method dot (other:Point) -> Number {
            // dot product
            (x * other.x) + (y * other.y)
        }
        method ⋅ (other:Point) -> Number {
            // dot product
            (x * other.x) + (y * other.y)
        }
        method reverseTimesNumber(n) { point2Dx (n * x) y (n * y) }
        method reversePlusNumber(n) { point2Dx (n + x) y (n + y) }
        method reverseDivideNumber(n) { point2Dx (n / x) y (n / y) }
        method reverseMinusNumber(n) { point2Dx (n - x) y (n - y) }
        method norm { self / self.length }
        method hash { intrinsic.hashCombine(x.hash, y.hash) }
    }
}
