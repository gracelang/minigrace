dialect "fsm"


def startState = state { print "Starting" }
def runState = state { print "Running" }
def endState = state { print "Done" }

in(startState) on("A") goto(runState)
in(runState)
  on("A") goto(runState)
  on("B") goto(endState)

method process(ch : String) {
  current.do
  signal(ch)
}

process "A"
process "A"
process "A"
process "B"
// The FSM should crash and report an error at this point:
//process "X"
