//  The minigrace parser doesn't understand continuation lines correctly.
//  It parses line 17 as a continuation of line 10, but lines 18 and 19 are
//  parsed as separate requests of url() and on().  Line 20 is flagged as being
//  at the wrong indentation.

import "objectdraw" as od

class atX(highwayCenterX:Number)   below(highwayBottom:Number)
      laneWidth(laneWidth:Number) on(canvas:od.DrawingCanvas) {
    def frogHeight = 40
    def frogWidth = 50
    def frogSpacing: Number = (laneWidth - frogHeight) / 2  // confidential
    def startPoint: Point =
          highwayCenterX @ (highwayBottom + frogSpacing)

    def frogImage:od.Graphic2D =
          od.drawableImage.at(startPoint)size(frogWidth,frogHeight)
          url("http://www.cs.pomona.edu/~kim/CSC051GF14/Images/froggy.png")
          on(canvas)
    def hopDistance:Number = laneWidth

    var isAlive:Boolean is readable := true
}
