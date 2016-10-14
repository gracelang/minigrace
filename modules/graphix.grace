import "createJsGraphicsWrapper" as gr

class shape {
    var color is public := "black"
    var fill is public := false
    var location is public := 0@0
    var myStage
    var jsShapeObject is public
    var visible'

    method colored(c) {
        color := c
        self
    }

    method filled(f) {
        fill := f
        self
    }

    method at(l) {
        location := l
        self
    }

    method moveBy(xDiff,yDiff) {
        def currentX = location.x
        def currentY = location.y
        location := (currentX + xDiff)@(currentY + yDiff)
        jsShapeObject.setLocation(location)
        jsShapeObject.move(location.x, location.y)
        myStage.update
    }

    method drawAt(p) {
        location := p
        draw
    }

    method visible := (v) {
        visible' := v
        jsShapeObject.setVisible(v)
        myStage.update
    }

    method contains(point) {
        jsShapeObject.hitTest(point.x, point.y)
    }

    method mouseLocation {
        jsShapeObject.mouseLocation
    }

    method onClick := (block) {
        jsShapeObject.addClickListener(jsShapeObject, block)
        myStage.update
    }
    method onClickDo(block) {
        jsShapeObject.addClickListener(jsShapeObject, block)
        myStage.update
        self
    }

    method onMouseUp := (block) {
        jsShapeObject.addMouseUpListener(jsShapeObject, block)
    }
    method onMouseUpDo(block) {
        jsShapeObject.addMouseUpListener(jsShapeObject, block)
        self
    }

    method onMouseDown := (block) {
        jsShapeObject.addMouseDownListener(jsShapeObject, block)
    }
    method onMouseDownDo(block) {
        jsShapeObject.addMouseDownListener(jsShapeObject, block)
        self
    }

    method onPressMove := (block) {
        jsShapeObject.addPressMoveListener(jsShapeObject, block)
    }

    method onPressMoveDo(block) {
        jsShapeObject.addPressMoveListener(jsShapeObject, block)
        self
    }

    method onMouseOver := (block) {
        myStage.enableMouseOver(20)
        jsShapeObject.addMouseOverListener(jsShapeObject, block)
    }

    method onMouseOverDo(block) {
        myStage.enableMouseOver(20)
        jsShapeObject.addMouseOverListener(jsShapeObject, block)
        self
    }

    method shapeDraw is confidential { abstract }

    method draw {
        clear
        visible := true
        jsShapeObject.setLocation(location)
        if (fill) then {
            jsShapeObject.beginFill(color)
        } else {
            jsShapeObject.beginStroke(color)
        }
        shapeDraw
        myStage.add(jsShapeObject)
        myStage.update
        self
    }

    method clear {
        myStage.removeChild(jsShapeObject)
        jsShapeObject.clear
        myStage.update
    }

    method tween {
        object {
            var jsTween := gr.tween(jsShapeObject, myStage)
            method toX(x) {
                jsTween.toX(x)
            }

            method wait(time) {
                jsTween.wait(time)
            }
        }
    }
}

class create(canvasWidth, canvasHeight) {
    var shapes := emptyList
    var inputs := emptyList
    var stage := gr.stage(canvasHeight, canvasWidth)
    var timeoutIsSet := false

    method asString {
        "aGraphixCanvas({canvasWidth}×{canvasHeight})"
    }

    method drawall {
        for (shapes) do {x -> x.draw}
    }
    method play(sound) {
        native "js" code ‹
              createjs.Sound.play(var_sound._value);
        ›
    }
    method onStageMouseDown := (block) {
        stage.addStageDownListener(block)
    }
    method onMouseDownDo(block) {
        stage.addStageDownListener(block)
        self
    }

    method onStageMouseUp := (block) {
        stage.addStageUpListener(block)
    }
    method onMouseUpDo(block) {
        stage.addStageUpListener(block)
        self
    }

    method onMouseExit := (block) {
        stage.addMouseExitListener(block)
    }
    method onMouseExitDo(block) {
        stage.addMouseExitListener(block)
        self
    }

    method onStageMouseMove := (block) {
        stage.addStageMouseMoveListener(block)
    }
    method onMouseMoveDo(block) {
        stage.addStageMouseMoveListener(block)
        self
    }

    method mouseLocation {
        stage.mouseLocation
    }

    method clear {
        stage.removeAllChildren
        stage.removeAllEventListeners
        stage.createClearButton
        stage.update
    }

    method timedEvent(block, time) {
        // decprecated; use after(time) do(block)
        stage.setTimeout(block, time, stage)
    }
    method after(time) do(block) {
        stage.setTimeout(block, time, stage)
    }

    method clearTimedEvent {
        stage.clearTimeout
    }

    method tickEvent(block, freq) {
        // deprecated; use every(interval) do(block)
        stage.setTicker(block, freq, stage)
    }
    method every(interval) do(block) {
        stage.setTicker(block, 1000/interval, stage)
    }

    method clearTicker {
        stage.clearTicker
    }

    class addCircle {
        inherit shape
        var radius is public := 15
        jsShapeObject := gr.circle
        myStage:=stage
        method asString {
            "aCircle(radius={radius})"
        }

        method setRadius(r) {
            radius := r
            self
        }
        method shapeDraw is confidential {
            jsShapeObject.draw(radius)
        }
        shapes.add(self)
    }

    class addRectangle {
        inherit shape
        jsShapeObject := gr.rectangle
        var width is public := 15
        var height is public := 15
        myStage:=stage

        method asString {
            "aRectangle({width}×{height})"
        }

        method setHeight(h) {
            height := h
            self
        }

        method setWidth(w) {
            width := w
            self
        }

        method size { width@height }

        method size:= (p) {
            width := p.x
            height := p.y
        }

        method setSize(p) {
            width := p.x
            height := p.y
            self
        }

        method shapeDraw is confidential {
            jsShapeObject.draw(width, height)
        }

        shapes.add(self)
    }

    class addPolyStar {
        inherit shape

        var sz := 20
        var sides is public := 5
        var pointSize is public := 2
        var angle is public := -90

        jsShapeObject := gr.polyStar
        myStage:=stage

        method asString {
            "aPolyStar(size={size}, sides={sides})"
        }

        method setSize(s) {
            size := s
            self
        }

        method size:= (s) {
            match (s)
                  case { scalar:Number -> sz := scalar }
                  case { point:Point -> sz := (point.x + point.y)/2 }
                  case { _ -> ProgrammingError.raise "argument to polyStar.setSize should be a Number or a Point." }
        }

        method size { sz }

        method setSides(s) {
            sides := s
            self
        }

        method setPointSize(p) {
            pointSize := p
            self
        }

        method setAngle(a) {
            angle := a
            self
        }

        method shapeDraw is confidential {
            jsShapeObject.draw(size, sides, pointSize, angle)
        }
        shapes.add(self)
    }

    class addRoundRect {
        inherit shape
        var width is public := 15
        var height is public := 15
        var radius is public := 2
        jsShapeObject := gr.roundRect
        myStage:=stage

        method asString {
            "aRoundRect({width}×{height})"
        }

        method setHeight(h) {
            height := h
            self
        }

        method setWidth(w) {
            width := w
            self
        }

        method size { width@height }

        method size:= (p) {
            width := p.x
            height := p.y
        }

        method setSize(p) {
            width := p.x
            height := p.y
            self
        }

        method setRadius(r) {
            radius := r
            self
        }

        method shapeDraw is confidential {
            jsShapeObject.draw(width, height, radius)
        }
        shapes.add(self)
    }

    class addEllipse {
        inherit shape
        var width is public := 15
        var height is public := 15

        jsShapeObject := gr.ellipse
        myStage:=stage

        method asString {
            "anEllipse({width}×{height})"
        }

        method setWidth(w) {
            width := w
            self
        }

        method setHeight(h) {
            height := h
            self
        }

        method size { width@height }

        method size:= (p) {
            width := p.x
            height := p.y
        }

        method setSize(p) {
            width := p.x
            height := p.y
            self
        }

        method shapeDraw is confidential {
            jsShapeObject.draw(width, height)
        }
        shapes.add(self)
    }

    class addArc {
        inherit shape
        var radius is public := 15
        var startAngle is public := 0
        var endAngle is public := 180
        var anticlockwise is public := false

        jsShapeObject := gr.arc
        myStage:=stage

        method asString {
            def clock = if (anticlockwise) then {"⤿"} else {"⤾"}
            "anArc({clock} radius={radius}, start={startAngle}, end={endAngle})"
        }

        method setRadius(r) {
            radius := r
            self
        }
        method setStartAngle(a) {
            startAngle := a
            self
        }
        method setEndAngle(a) {
            endAngle := a
            self
        }

        method setAnticlockwise(a) {
            anticlockwise := a
            self
        }

        method shapeDraw is confidential {
            jsShapeObject.draw(radius, startAngle, endAngle, anticlockwise)
        }
        shapes.add(self)
    }

    class addText {
        var location is public := 0@0
        var color is public := "black"
        var jsText is public := 0
        var content is public := "Did you forget to set text.content?"
        var font is public := "12px Arial"

        method asString {
            "aText({content})"
        }
        method at(l) {
            location := l
            self
        }
        method colored(c) {
            color := c
            self
        }
        method setContent(c) {
            content := c
            self
        }
        method setFont(f) {
            font := f
            self
        }

        method height {
            jsText.height
        }

        method width {
            jsText.width
        }

        method draw {
            if (0 ≠ jsText) then {
                stage.removeChild(jsText);
            }
            jsText := gr.text
            jsText.setLocation(location)
            jsText.draw(content, font, color)
            stage.add(jsText)
            stage.update
            self
        }

        method clear {
            stage.removeChild(jsText)
            stage.update
        }
        shapes.add(self)
    }

    class addLine {
        inherit shape
        var start is public := 0@0
        var end is public := 50@50

        jsShapeObject := gr.line
        myStage := stage

        method asString {
            "aLine(start={start}, end={end})"
        }
        method setStart(s) {
            start := s
            self
        }
        method setEnd(e) {
            end := e
            self
        }
        method shapeDraw is confidential {
            jsShapeObject.draw(start, end)
        }
        shapes.add(self)
        self
    }

    class addCustomShape {
        inherit shape
        jsShapeObject := gr.customShape
        myStage := stage

        method asString {
            "aCustomShape({width}×{height})"
        }
        var width is public := 10
        var height is public := 10

        method shapeDraw is confidential {
            jsShapeObject.draw(color, color)
        }

        method addPoint(p) {
            jsShapeObject.addPoint(p)
            self
        }
        shapes.add(self);
    }

    class addButton {
        inherit shape
        var width is public := 40
        var height is public := 20
        var buttonShape is public := addRectangle
        var buttonText is public := "button"
        var textObj is public := addText
        var location is public := 0@0
        var color is public := "#F5F5F5"
        var shapeChanged := false
        var textObjChanged := false

        myStage := stage
        buttonShape.filled(true)
        jsShapeObject := gr.container
        stage.add(jsShapeObject)

        method asString {
            "aButton({width}×{height})"
        }

        method setShape(s) {
            shapeChanged := true
            buttonShape := s
            self
        }

        method setText(t) {
            buttonText := t
            self
        }

        method setTextObj(t) {
            textObjChanged := true
            textObj := t
            self
        }

        method setWidth(w) {
            width := w
            self
        }

        method setHeight(h) {
            height := h
            self
        }

        method size { width@height }

        method size:= (p) {
            width := p.x
            height := p.y
        }

        method setSize(p) {
            width := p.x
            height := p.y
            self
        }

        method colored(c) {
            color := c
            self
        }

        method draw {
            if(!textObjChanged) then {
                textObj.setContent(buttonText)
            }
            textObj.draw

            var textWidth := textObj.width
            var textHeight := textObj.height

            if(!shapeChanged) then {
                buttonShape.setWidth(width).setHeight(height).colored(color)
                var x := (width/2) - (textWidth / 2)
                var y := (height/2) - (textHeight / 2)
                textObj.location := x@y
                textObj.draw
            }
            buttonShape.draw

            jsShapeObject.add(buttonShape.jsShapeObject)
            jsShapeObject.add(textObj.jsText)
            jsShapeObject.setLocation(location)
            stage.update
            self
        }
    }

    class addInputBox {
        var width is public := 50
        var height is public := 20
        var location is public := 0@0
        var fontSize is public := 14
        var fontFamily is public := "Arial"
        var fontColor is public := "black"
        var backgroundColor is public := "white"
        var borderColor is public := "black"
        var jsInputObject := 0
        var submitBlock := {}

        method asString {
            "anInputBox({width}×{height})"
        }
        method value {
            jsInputObject.value
        }

        method value := (val) {
            jsInputObject.value := val
        }

        method setWidth(w) {
            width := w
            self
        }

        method setHeight(h) {
            height := h
            self
        }

        method size { width@height }

        method size:= (p) {
            width := p.x
            height := p.y
        }

        method setSize(p) {
            width := p.x
            height := p.y
            self
        }

        method at(l) {
            location := l
            self
        }

        method setFontSize(f) {
            fontSize := f
            self
        }

        method setFontFamily(f) {
            fontFamily := f
            self
        }

        method setBackgroundColor(c) {
            backgroundColor := c
            self
        }

        method setBorderColor(c) {
            borderColor := c
            self
        }

        method draw {
            jsInputObject := gr.inputBox(stage)
            jsInputObject.location := location
            jsInputObject.width := width
            jsInputObject.height := height
            jsInputObject.fontSize := fontSize
            jsInputObject.fontFamily := fontFamily
            jsInputObject.fontColor := fontColor
            jsInputObject.backgroundColor := backgroundColor
            jsInputObject.borderColor := borderColor
            jsInputObject.onSubmit(jsInputObject,submitBlock)
            jsInputObject.draw
            self
        }

        method focus {
            jsInputObject.focus
        }

        method onSubmitDo(block) {
            if (0 ≠ jsInputObject) then {
                jsInputObject.onSubmit(jsInputObject, block)
            }
            submitBlock := block
            self
        }

        method destroy {
            jsInputObject.destroy
        }
        inputs.add(self)
    }
}

method convertStrToNum(str) {
    native "js" code ‹
          var str = var_str._value;
          return new GraceNum(str);
    ›
}

method roundTo(num, digits) {
    native "js" code ‹
          var digits = var_digits._value;
          var num = var_num._value.toFixed(digits);
          return new GraceNum(num);
    ›
}
