dialect "objectdraw"
// 4 6 8 10  4 6 8 20  4 6 6 30  4 6 8 40  4 6 8 50
inherit graphicApplication.size (400,400)
    text.at(20@20) with "Press this window" on (canvas)

method onMousePress (pt) {
    text.at (180@200) with "I'm touched" on (canvas)
}

method onMouseRelease (pt) {
    canvas.clear
}

startGraphics
