dialect "standard"

// a dummy bundle for testing gcts, inspired by objectdraw

trait open {
    class drawingCanvasSize (dimension': Point) {
        // class representing a window panel that manages graphics on screen
        // The window containing the canvas has dimensions width' x height'

        def width is public = dimension'.x
        def height = dimension'.y

        method size -> Point {width@height}

        var theGraphics := list [ ]   // all the objects on this canvas

        var redraw: Boolean:= false

        method notifyRedraw -> Done {
            // tels this canvas that it needs to be redrawn
            redraw:= true
        }

        // redraws the canvas and its contents regularly as needed
        method startDrawing -> Done {
            if (redraw) then {
                print (theGraphics)
            }
        }

        method children -> Collection {     // not fresh
            theGraphics
        }

        method clear -> Done {
        // remove all items from canvas
            theGraphics.clear
            notifyRedraw
        }

        method add (d) -> Done {
        // Add new item d to canvas
            theGraphics.push(d)
            notifyRedraw
        }

    }

    class graphicApplicationSize (theDimension':Point) {
        // Create window with dimensions theDimension', with canvas
        // installed, and that responds to mouse actions

        def canvas is public = drawingCanvasSize (theDimension')

        method onMouseClick (pt: Point) -> Done {}
        // Method to handle mouse click at pt

        method onMousePress (pt: Point) -> Done {}
        // Method to handle mouse press at pt

        method onMouseRelease (pt: Point) -> Done {}
        // Method to handle mouse release at pt

        method startGraphics -> Done {
            canvas.startDrawing
        }
    }
}
