dialect "minitest"

def isRight':Boolean = true
def highwayLeft' = 10
def highwayRight' = 800
def carWidth' = 100
def carHeight' = 40
def y' = 50

def startPoint: Point = if (isRight') then {
    highwayLeft' - 2*carWidth'
} else {
    highwayRight' + 2*carWidth'
}@(y' - carHeight'/2)

class laneFillerCenterY(y: Number)
      laneEnds (highwayLeft: Number,highwayRight: Number)
      carURL (url:String) carSize (carWidth: Number, carHeight: Number)
      going (speed': Number)
      frog (froggy) goRight (isRight: Boolean)
      canvas (canvas) {
    var speed:Number

    if (isRight) then {
        speed := speed'
    } else {
        speed := -speed'
    }

    def startPoint: Point = if (isRight) then {
        highwayLeft - 2*carWidth
    } else {
        highwayRight + 2*carWidth
    }@(y - carHeight/2)
}

method returnsNumber(a, b) {
    if (a > b) then { 5 - 2 } else { 2 - 5 }
}

testSuite "if then else " with {
    test "result is a number" by {
        assert (returnsNumber(10, 1)) shouldBe 3
    }
}

exit
