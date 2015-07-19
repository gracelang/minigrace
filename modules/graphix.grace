import "createJsGraphicsWrapper" as gr

factory method shape {
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

  method onMouseUp := (block) {
    jsShapeObject.addMouseUpListener(jsShapeObject, block)
  }
  
  method onMouseDown := (block) {
    jsShapeObject.addMouseDownListener(jsShapeObject, block)
  }
  
  method onPressMove := (block) {
    jsShapeObject.addPressMoveListener(jsShapeObject, block)
  }
  
  method onMouseOver := (block) {
    myStage.enableMouseOver(20)
    jsShapeObject.addMouseOverListener(jsShapeObject, block)
  }
  
  method shapeDraw {} // abstract method
  method draw {
    clearDuplicate
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
  
  method clearDuplicate is confidential{
    myStage.removeChild(jsShapeObject)
    jsShapeObject.clear
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

factory method create(canvasHeight, canvasWidth) {
  var shapes := list.empty
  var inputs := list.empty
  var stage := gr.stage(canvasHeight, canvasWidth)
  var timeoutIsSet := false
  
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
  
  method onStageMouseUp := (block) {
    stage.addStageUpListener(block)
  }
  
  method onMouseExit := (block) {
    stage.addMouseExitListener(block)
  }
  
  method onStageMouseMove := (block) {
    stage.addStageMouseMoveListener(block)
  }
  
  method mouseLocation {
    stage.mouseLocation
  }
  
  method clear {
    stage.removeAllChildren
    stage.removeAllEventListeners
    stage.update
  }
  
  method timedEvent(block, time) {
    stage.setTimeout(block, time, stage)
  }
  
  method clearTimedEvent {
    stage.clearTimeout
  }
  
  method tickEvent(block, freq) {
    stage.setTicker(block, freq, stage)
  }
  
  method clearTicker {
    stage.clearTicker
  }
  
  method addCircle {
    def circle = object {
      inherits shape
      var radius is public := 15
      jsShapeObject := gr.circle
      myStage:=stage
      
      method setRadius(r) {
        radius := r
        self
      }
      method shapeDraw is confidential {
        jsShapeObject.draw(radius)
      }
    }
    shapes.add(circle)
    circle
  }
  
  method addRect {
      
    def rect = object {
      inherits shape
      jsShapeObject := gr.rect
      var height is public := 15
      var width is public := 15
      myStage:=stage
      
      method setHeight(h) { 
        height := h 
        self
      }
      method setWidth(w) { 
        width := w 
        self
      }
      method shapeDraw is confidential {
        jsShapeObject.draw(height, width)
      }
    }
    
    shapes.add(rect)
    rect
  }
  method addPolyStar {
    def polyStar = object {
      inherits shape
      
      var size is public := 20
      var sides is public := 5
      var pointSize is public := 2
      var angle is public := -90
      
      jsShapeObject := gr.polyStar
      myStage:=stage
      method setSize(s) {
        size := s 
        self
      }
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
    }
    shapes.add(polyStar)
    polyStar
  }
  method addRoundRect {
    
    def roundRect = object {
      inherits shape
      var height is public := 15
      var width is public := 15
      var radius is public := 15
      jsShapeObject := gr.roundRect
      myStage:=stage
      method setHeight(h) {
        height := h
        self
      }
      method setWidth(w) {
        width := w
        self
      }
      method setRadius(r) {
        radius := r
        self
      }
      method shapeDraw is confidential {
        jsShapeObject.draw(width, height, radius)
      }
    }
    shapes.add(roundRect)
    roundRect
  }
  
  method addEllipse {
    
    def ellipse = object {
      inherits shape
      var height is public := 15
      var width is public := 15
      
      jsShapeObject := gr.ellipse
      myStage:=stage
      method setWidth(w) {
        width := w
        self
      }
      method setHeight(h) {
        height := h
        self
      }
      method shapeDraw is confidential {
        jsShapeObject.draw(width, height)
      }
    }
    shapes.add(ellipse)
    ellipse
  }
    
  method addArc {
    def arc = object {
      inherits shape
      var radius is public := 15
      var startAngle is public := 0
      var endAngle is public := 180
      var anticlockwise is public := false
      
      jsShapeObject := gr.arc
      myStage:=stage
      
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
    }
    shapes.add(arc)
    arc
  }
  
  method addText {
    
    def text = object {
      var location is public := 0@0
      var color is public := "black"
      var jsText is public := 0
      var content is public := "Did you forget to set text.content?"
      var font is public := "12px Arial"
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
      method click:=(block) {
        stage.addListener(jsText, block)
      }
      
      method getHeight {
        jsText.getHeight
      }
      
      method getWidth {
        jsText.getWidth
      }
      
      method draw {
        if(jsText != 0) then {
          stage.removeChild(jsText);
        }
        jsText := gr.text
        jsText.setLocation(location)
        jsText.draw(content, font, color)
        stage.add(jsText)
        stage.update
      }
    }
    shapes.add(text)
    text
  }
    
  method addLine {
    def line = object {
      inherits shape
      var start is public := 0@0
      var end is public := 50@50
      
      jsShapeObject := gr.line
      myStage := stage
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
    }
    shapes.add(line)
    line
  }
    
  method addCustomShape {
    def customShape = object {
      inherits shape
      jsShapeObject := gr.customShape
      myStage := stage
      var width is public := 10 
      var height is public := 10
      
      method shapeDraw is confidential {
        jsShapeObject.draw(color, color)
      }
      
      method addPoint(p) {
        jsShapeObject.addPoint(p)
        self
      }
      
    }
    shapes.add(customShape);
    customShape
  }
  
  method addButton {
    def button = object {
      inherits shape
      var width is public := 40
      var height is public := 20
      var buttonShape is public := addRect
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
      
      method colored(c) {
        color := c
        self
      }
      
      method draw {
        if(!textObjChanged) then {
          textObj.setContent(buttonText)
        }
        textObj.draw
        
        var textWidth := textObj.getWidth
        var textHeight := textObj.getHeight
        
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
    button
  }
    
  method addInputBox {
    def input = object {
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
        if(jsInputObject != 0) then {
          jsInputObject.onSubmit(jsInputObject, block)
        }
        submitBlock := block
        self
      }
      
      method destroy {
        jsInputObject.destroy
      }
    }
    inputs.add(input)
    input
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
