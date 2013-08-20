dialect "logo"

def length = 150
def diagonal = length * 1.414
lineWidth := 2
square(length)
turnRight(45)
lineColor := blue
forward(diagonal)
turnLeft(90)
lineColor := red
forward(diagonal / 2)
turnLeft(90)
forward(diagonal / 2)
turnLeft(90)
lineColor := blue
forward(diagonal)

method square(len) {
    for(1..4) do {
        forward(len)
        turnRight(90)
    }
}
