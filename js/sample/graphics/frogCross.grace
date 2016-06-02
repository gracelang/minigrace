dialect "rtobjectdraw"
import "animation" as animator

type Frog = {
    overlaps(other:Graphic2D) -> Boolean
    kill -> Done
    reincarnate -> Done
    hopToward(point: Point) -> Done
    isAlive -> Boolean
}


type Animated = {
    start -> Done
}

class frogAtX(highwayCenterX:Number)  below(highwayBottom:Number)
      laneWidth(laneWidth:Number) on(canvas:DrawingCanvas) -> Frog {
    def frogWidth: Number = 83
    def frogHeight: Number = 48
    def frogSpacing: Number = (laneWidth - frogHeight)/2  // confidential
    def startPoint: Point =
          highwayCenterX @ (highwayBottom + frogSpacing)

    def frogImage:Graphic2D = drawableImage.at(startPoint)size(frogWidth,frogHeight)
            url("http://www.cs.pomona.edu/~kim/CSC051GF14/Images/froggy.png")
            on(canvas)

    def hopDistance:Number = laneWidth

    var isAlive:Boolean is readable := true

    var ouch: Text
    method overlaps(other:Graphic2D) -> Boolean {
        frogImage.overlaps(other)
    }

    method kill->Done {
        isAlive := false
        ouch := text.at((canvas.width/2-50) @ (canvas.height - 20))
              with ("OUCH!") on (canvas)
        ouch.color := red
        ouch.fontSize := 32
    }

    method reincarnate->Done {
        isAlive := true
        ouch.removeFromCanvas
        frogImage.moveBy(startPoint.x-frogImage.x, startPoint.y-frogImage.y)
    }

    method hopToward(point: Point) -> Done {
        if (point.x < frogImage.x) then {
            frogImage.moveBy(-hopDistance, 0)
        } elseif (point.x > (frogImage.x + frogImage.width)) then {
            frogImage.moveBy(hopDistance, 0)
        } elseif (point.y < frogImage.y) then {
            frogImage.moveBy(0, -hopDistance)
        } elseif (point.y > (frogImage.y + frogImage.height)) then {
            frogImage.moveBy(0, hopDistance)
        } // Else clicked on the image.  Don't move.
    }
}


class vehicleStartAt(startPt: Point)
      image(carURL:String)
      going (speed:Number)
      carSize(carWidth: Number,carHeight: Number)
      laneEnds(laneLeft:Number,laneRight:Number)
      frog(theFrog:Frog)
      on (canvas:DrawingCanvas) -> Animated {
    def pauseTime: Number = 30

    method start -> Done {
        def vehicleImage:Graphic2D =
              drawableImage.at(startPt)size(carWidth,carHeight)
                url(carURL)
                on(canvas)
        vehicleImage.visible := false
        vehicleImage.visible := true
        animator.while{vehicleImage.x < laneRight} pausing (pauseTime) do {
            vehicleImage.moveBy(speed*pauseTime,0)
            if(theFrog.isAlive && theFrog.overlaps(vehicleImage)) then {
                theFrog.kill
            }
        } finally {
            vehicleImage.removeFromCanvas
        }
    }
}

class laneFillerCenterY(y: Number)
      laneEnds (highwayLeft: Number,highwayRight: Number)
      carURL (url:String) carSize (carWidth: Number, carHeight: Number)
      going (speed': Number)
      frog (froggy:Frog) goRight (isRight: Boolean)
      canvas (canvas: DrawingCanvas) -> Animated {
    var speed:Number

    if (isRight) then {
        speed := speed'
    } else {
        speed := -speed'
    }

    def startPoint: Point = (highwayLeft-2*carWidth)@(y-carHeight/2)

    def maxVehicles: Number = 40

          // helper method to generate random gap between cars
    method randGapGenerator -> Number is confidential {
        randomIntFrom(3 * carWidth / speed') to (5 * carWidth / speed')
    }

    method start -> Done {
        var count: Number := 0
        animator.while {count < maxVehicles} pauseVarying {randGapGenerator} do {
            def newVehicle: Animated = vehicleStartAt(startPoint) image(url)
                  going (speed)
                  carSize (carWidth,carHeight)
                  laneEnds (highwayLeft,highwayRight)
                  frog(froggy) on (canvas)
            newVehicle.start
            count := count + 1
        }
    }
}

def froggerGame: GraphicApplication = object {
    inherits graphicApplication.size(800, 600)

    // Constants defining the sizes of the background components.
    def highwayLength:Number = canvas.width
    def laneWidth:Number = 100
    def numLanes:Number = 4
    def highwayWidth:Number = laneWidth * numLanes
    def lineWidth:Number = laneWidth / 10

    // Constants defining the locations of the background components
    def highwayLeft:Number = 0
    def highwayRight:Number = highwayLeft + highwayLength
    def highwayTop:Number = 100
    def highwayBottom:Number = highwayTop + highwayWidth

    // Constants describing the lines on the highway
    def lineSpacing:Number = lineWidth / 2
    def dashLength:Number = laneWidth / 3
    def dashSpacing:Number = dashLength / 2

    // size of car images
    def carWidth: Number = 100
    def carHeight: Number = 40

    // start code for building highway image
    filledRect.at(highwayLeft @ highwayTop)
          size(highwayLength, highwayWidth) on(canvas)

    var whichLine:Number := 1

    while {whichLine < numLanes} do {
        if (whichLine == (numLanes / 2)) then {
            // The middle line is a no passing line
            drawNoPassingLine((highwayTop + (whichLine * laneWidth))
                  - ((lineSpacing / 2) + lineWidth))
        } else {
            drawPassingLine((highwayTop + (whichLine * laneWidth))
                  - (lineWidth / 2))
        }
        whichLine := whichLine + 1
    }

    method drawNoPassingLine(y:Number)-> Done {
        def topLaneStart:Point = highwayLeft @ y
        // Draw the solid dividing lines
        def topLine:Graphic = filledRect.at(topLaneStart)
              size( highwayLength, lineWidth) on (canvas)
        topLine.color := yellow

        def bottomLaneStart:Point = topLaneStart+ (0 @ (lineWidth + lineSpacing))
        def bottomLine:Graphic = filledRect.at(bottomLaneStart)
              size(highwayLength, lineWidth) on (canvas)
        bottomLine.color:=yellow
    }

    method drawPassingLine(y:Number)-> Done {
        var x:Number := highwayLeft
        var dash:Graphic

        while {x < highwayRight} do {
            // Draw the next dash
            dash := filledRect.at(x @ y) size (dashLength, lineWidth) on (canvas)
            dash.color := white
            x := x + dashLength + dashSpacing
        }
    }

    // The frog that tries to jump across the road.
    def theFrog:Frog = fromAtX (highwayLength/2) below (highwayBottom)
          laneWidth (laneWidth) on (canvas)

    print "WELCOME TO FROGGER!"
    print "Click to guide the Frog across the street"

    def carPauseTime: Number = 30

    // set up numLanes lanes
    for(1..numLanes) do {lane ->
        def laneSpeed = randomNumberFrom(0.033)to(0.1)
        def randInt: Number = randomIntFrom(1)to(2)
        def url:String = if (randInt == 1) then {
            "http://www.cs.pomona.edu/~kim/CSC051GF14/Images/jeep_right.png"
        } else {
            "http://www.cs.pomona.edu/~kim/CSC051GF14/Images/taxi_right.png"
        }
        def nextLane: Animated =
            laneFillerCenterY(highwayTop + lane * laneWidth - carHeight)
              laneEnds(highwayLeft,highwayRight)
              carURL (url)
              carSize (carWidth, carHeight)
              going (laneSpeed)
              frog (theFrog) goRight (true)
              canvas (canvas)
        nextLane.start
    }

    method onMouseClick(mousePoint:Point) -> Done {
        // Move the frog when mouse is clicked.
        if (theFrog.isAlive) then {
            theFrog.hopToward(mousePoint)
        } elseif { mousePoint.y > highwayBottom } then {
            theFrog.reincarnate
        }
    }
    startGraphics
}
