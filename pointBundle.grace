dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle
import "equalityBundle" as equalityBundle

use equalityBundle.open
use basicTypesBundle.open
use intrinsic.annotations

trait open {

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
        method prefix - { point2Dx (-x) y (-y) }
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
