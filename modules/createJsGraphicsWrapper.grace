class eventListener {
    var clickBlock := { }
    var mouseUpBlock := { }
    var mouseDownBlock := { }
    var pressMoveBlock := { }
    var mouseOverBlock := { }
    var mouseExitBlock := { }
    var mouseLocation' := 0@0

    method onClick(x, y) {
        mouseLocation' := x@y
        clickBlock.apply
    }

    method mouseLocation {
        mouseLocation'
    }

    method onClick:=(block) {
        clickBlock := block
    }

    method onMouseUp(x, y) {
        mouseLocation' := x@y
        mouseUpBlock.apply
    }

    method onMouseUp:=(block) {
        mouseUpBlock := block
    }

    method onMouseDown(x, y) {
        mouseLocation' := x@y
        mouseDownBlock.apply
    }

    method onMouseDown:=(block) {
        mouseDownBlock := block
    }

    method onMouseOver(x, y) {
        mouseLocation' := x@y
        mouseOverBlock.apply
    }

    method onMouseOver:=(block) {
        mouseOverBlock := block
    }

    method onPressMove(x, y) {
        mouseLocation' := x@y
        pressMoveBlock.apply
    }

    method onPressMove := (block) {
        pressMoveBlock := block
    }

    method onMouseExit {
        mouseExitBlock.apply
    }

    method onMouseExit := (block) {
        mouseExitBlock := block
    }

    method addMouseUpListener(obj, listener) {
        native "js" code ‹
              var obj = var_obj;
              obj.on("pressup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseUp(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addMouseDownListener(obj, listener) {
        native "js" code ‹
              var obj = var_obj;
              obj.on("pressup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseDown(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addMouseOverListener(obj, listener) {
        native "js" code ‹
              var obj = var_obj;
              obj.on("mouseover", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseOver(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addClickListener(obj, listener) {
        native "js" code ‹
              var shape = var_obj;
              shape.on("click", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onClick(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addPressMoveListener(obj, listener) {
        native "js" code ‹
              var shape = var_obj;
              shape.on("pressmove", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onPressMove(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addStageDownListener(stage, listener) {
        native "js" code ‹
              var_stage.on("stagemousedown", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseDown(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addStageUpListener(stage, listener) {
        native "js" code ‹
              var_stage.on("stagemouseup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseUp(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }

    method addMouseExitListener(stage, listener) {
        native "js" code ‹
              var_stage.on("mouseleave", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseExit", [0]);
            });
        });
        ›
    }

    method addStageMouseMoveListener(stage, listener) {
        native "js" code ‹
              var_stage.on("stagemousemove", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseOver(2)", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        ›
    }
}

class stage(width', height') {
    var mystage := new (width', height')
    createClearButton
    var createJsGraphics
    var stageListener := eventListener
    var timedEventBlock := { }
    var jsTimeout
    var tickerBlock := { }

    method new(width, height) {
        clearTimeout
        native "js" code ‹
              var width = var_width._value;
              var height = var_height._value;
              var size = "height=" + height.toString() + ",width=" + width.toString()
              var canvas = document.getElementById("graphics");
              var ctx = canvas.getContext("2d");
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.clearRect(0, 0, canvas.width, canvas,height);
              var stage = new createjs.Stage(canvas);
              createjs.Ticker.removeAllEventListeners();
              stage.enableDOMEvents(true);
              canvas.setAttribute('tabindex','0');
              canvas.focus();
              canvas = stage.canvas;
              this.stage = stage
              return stage;
        ›
    }

    method createClearButton {
        native "js" code ‹
              var stage = this.data.mystage;
              var container = new createjs.Container();
              var text = new createjs.Text("clear", "12px Arial", "black");
              text.x = 5;
              text.y = 3;
              function removeRecursively(c) {
                c.removeAllEventListeners();
                var subs = c.children;
                if (! subs) return;
                for (var ix = 0, len = subs.length; ix < len; ix++)
                    removeRecursively(subs[ix]);
                c.removeAllChildren();
              }
              container.x = stage.canvas.width - 35;
              var rect = new createjs.Shape();
              rect.graphics.beginFill("lightgrey").drawRect(0, 0, 35, 20);
              container.addChild(rect);
              container.addChild(text);
              container.addEventListener("click", function(event) {
                  removeRecursively(stage);
                  stage.enableDOMEvents(false);
                  stage.update();
                  callmethod(stage, "clearTimeout", [0]);
                  createjs.Ticker.removeAllEventListeners();
        });
        stage.addChild(container);
        stage.update();
        ›
    }

    method mouseLocation {
        stageListener.mouseLocation
    }

    method add(shape) {
        self.createJsGraphics := shape.createJsGraphics
        native "js" code ‹
              this.data.mystage.addChild(this.data.createJsGraphics);
        ›
    }
    method removeChild(shape) {
        self.createJsGraphics := shape.createJsGraphics
        native "js" code ‹
              this.data.mystage.removeChild(this.data.createJsGraphics);
        ›
    }
    method removeAllEventListeners {native "js" code ‹ this.data.mystage.removeAllEventListeners(); ›}
    method update {
        native "js" code ‹
              this.data.mystage.update();
        ›
    }

    method removeAllChildren {
        native "js" code ‹
              this.data.mystage.removeAllChildren();
        ›
    }

    method addStageDownListener(block) {
        stageListener.onMouseDown := block
        stageListener.addStageDownListener(mystage, stageListener)
    }

    method addStageUpListener(block) {
        stageListener.onMouseUp := block
        stageListener.addStageUpListener(mystage, stageListener)
    }

    method addMouseExitListener(block) {
        stageListener.onMouseExit := block
        stageListener.addMouseExitListener(mystage, stageListener)
    }

    method addStageMouseMoveListener(block) {
        stageListener.onMouseOver := block
        stageListener.addStageMouseMoveListener(mystage, stageListener)
    }

    method enableMouseOver(frequency) {
        native "js" code ‹
              var freq = var_frequency._value
              this.data.mystage.enableMouseOver(freq);
        ›
    }

    method timedEvent {
        timedEventBlock.apply
    }

    method tickEvent {
        tickerBlock.apply
    }

    method setTimeout(block, time, myStage) {
        timedEventBlock := block
        native "js" code ‹var t = setTimeout(function() {
            callmethod(var_myStage, "timedEvent", [0]);
        }, var_time._value);
        this.data.jsTimeout = t;›
    }

    method clearTimeout {
        native "js" code ‹
              var timeout = this.data.jsTimeout
              clearTimeout(timeout);
        ›
    }

    method setTicker(block, fps, myStage) {
        tickerBlock := block
        native "js" code ‹
              createjs.Ticker.on("tick", function(event) {
                  callmethod(var_myStage, "tickEvent", [0]);
        });
        createjs.Ticker.setFPS(var_fps._value);
              ›
    }

    method clearTicker {
        native "js" code ‹
              createjs.Ticker.removeAllEventListeners();
        ›
    }
}

class commonGraphics{
    var createJsGraphics is public
    var color
    var location :=0@0
    var listener is public := eventListener

    method mouseLocation {
        listener.mouseLocation
    }

    method addMouseUpListener(graphicsTypeObject, block) {
        listener.onMouseUp := block
        listener.addMouseUpListener(createJsGraphics, listener)
    }

    method addMouseDownListener(graphicsTypeObject, block) {
        listener.onMouseDown := block
        listener.addMouseDownListener(createJsGraphics, listener)
    }

    method addMouseOverListener(graphicsTypeObject, block) {
        listener.onMouseOver := block
        listener.addMouseOverListener(createJsGraphics, listener)
    }

    method addClickListener(graphicsTypeObject, block) {
        listener.onClick := block
        listener.addClickListener(createJsGraphics, listener)
    }

    method addPressMoveListener(graphicsTypeObject, block) {
        listener.onPressMove := block
        listener.addPressMoveListener(createJsGraphics, listener)
    }

    method setLocation(newLoc) {
        self.location := newLoc
    }

    method move(newX,newY) {
        native "js" code ‹
              this.data.createJsGraphics.x = var_newX._value;
              this.data.createJsGraphics.y = var_newY._value;
        ›
    }

    method setVisible(isVisible) {
        native "js" code ‹
              var isVisible = var_isVisible._value
              this.data.createJsGraphics.visible = isVisible;
        ›
    }

    method hitTest(x, y) {
        native "js" code ‹
              var x = var_x._value;
              var y = var_y._value;
              var shape = this.data.createJsGraphics;
              var pt = shape.globalToLocal(x, y);
              var hit = shape.hitTest(pt.x, pt.y);
              return new GraceBoolean(hit);
        ›
    }
}

class shape {
    inherit commonGraphics

    createJsGraphics := new

    method new {
        native "js" code ‹
              return new createjs.Shape();
        ›
    }

    method clear {
        native "js" code ‹
              this.data.createJsGraphics.graphics.clear();
        ›
    }
    method beginFill(color') {
        self.color := color'
        native "js" code ‹
              var color = this.data.color._value;
              this.data.createJsGraphics.graphics.beginFill(color);
        ›
    }
    method beginStroke(color') {
        self.color := color'
        native "js" code ‹
              var color = this.data.color._value;
              this.data.createJsGraphics.graphics.beginStroke(color);
        ›
    }
}

class container {
    inherit commonGraphics

    createJsGraphics := new
    method new {
        native "js" code ‹
              return new createjs.Container();
        ›
    }

    method add(anObject) {
        native "js" code ‹
              this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);
        ›
    }

    method setLocation(location) {
        native "js" code ‹
              this.data.createJsGraphics.x = var_location.data.x._value;
              this.data.createJsGraphics.y = var_location.data.y._value;
        ›
        self
    }
}

class circle {
    inherit shape
    var radius
    method draw(radius') {
        self.radius := radius'
        native "js" code ‹
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var radius = this.data.radius._value;

        this.data.createJsGraphics.graphics.drawCircle(x, y, radius);
        var circle = this.data.createJsGraphics;
        return circle;
        ›
    }
}

class rectangle {
    inherit shape
    var height
    var width
    method draw(w, h) {
        width := w
        height := h
        native "js" code ‹
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              this.data.createJsGraphics.graphics.drawRect(x, y, width, height);
        ›
    }
}

class polyStar {
    inherit shape
    var size is public := 20
    var sides is public := 5
    var pointSize is public := 2
    var angle is public := -90
    method draw(size', sides', pointSize', angle') {
        self.size := size'
        self.pointSize := pointSize'
        self.angle := angle'
        self.sides := sides'
        native "js" code ‹
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var size = this.data.size._value;
              var sides = this.data.sides._value;
              var pointSize = this.data.pointSize._value;
              var angle = this.data.angle._value;
              this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);
        ›
    }
}

class roundRect {
    inherit shape
    var height
    var width
    var radius is public := 15
    method draw(width', height', radius') {
        self.width := width'
        self.height := height'
        self.radius:= radius'

        native "js" code ‹
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              var radius = this.data.radius._value
              this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);
        ›
    }
}

class ellipse {
    inherit shape
    var height
    var width
    method draw(width', height') {
        self.height := height'
        self.width := width'
        native "js" code ‹
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);
        ›
    }
}

class arc {
    inherit shape
    var radius
    var startAngle
    var endAngle
    var anticlockwise

    method draw(radius', startAngle', endAngle', anticlockwise') {
        radius := radius'
        startAngle := startAngle'
        endAngle := endAngle'
        anticlockwise := anticlockwise'
        native "js" code ‹
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var radius = this.data.radius._value;
              var startAngle = this.data.startAngle._value;
              var endAngle = this.data.endAngle._value;
              startAngle = startAngle * Math.PI / 180;
              endAngle = endAngle * Math.PI / 180;
              var anticlockwise = this.data.anticlockwise._value

        this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        ›
    }
}

class text {
    inherit commonGraphics

    var content is public := "Did you forget to set text.content?"
    var font is public := "12px Arial"
    method new {
        return 0
    }
    // This is necessary so that Grace waits for the Javascript part of the
    // innerDraw to return before continuing
    method draw(content', font', color') {
        self.createJsGraphics := innerDraw(content', font', color')
    }

    method width {
        native "js" code ‹
              var b = this.data.createJsGraphics.getBounds();
              return new GraceNum(b.width)
        ›
    }

    method height {
        native "js" code ‹
              var b = this.data.createJsGraphics.getBounds();
              return new GraceNum(b.height)
        ›
    }

    method innerDraw(content', font', color') is confidential {
        self.color := color'
        self.content := content'
        self.font := font'

        native "js" code ‹
              var color = this.data.color._value;
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var content = this.data.content._value;
              var font = this.data.font._value;
              var text = new createjs.Text(content, font, color);
              text.x = x;
              text.y = y;
              return text;
        ›
    }
}

class line {
    inherit shape
    var start is public := 0@0
    var end is public := 50@50

    method draw(start', end'){
        self.location := start'
        self.start := start'
        self.end := end'
        native "js" code ‹
              var startX = this.data.start.data.x._value;
              var startY = this.data.start.data.y._value;
              var endX = this.data.end.data.x._value;
              var endY = this.data.end.data.y._value;
              this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);
        ›
    }
}

class customShape {
    inherit shape
    var points := emptyList
    var stroke;
    var current;
    var leftMost;
    var rightMost;
    var topMost;
    var bottomMost;

    method addPoint(p){
        calcBounds(p)
        points.add(p)
    }
    method calcBounds(p) is confidential {
        if(points.isEmpty) then {
            topMost := p.y
            bottomMost := p.y
            leftMost := p.x
            rightMost := p.x
        } else {
            if(p.x < leftMost) then { leftMost := p.x }
            if(p.x > rightMost) then { rightMost := p.x }
            if(p.y < topMost) then { topMost := p.y }
            if(p.y > bottomMost) then {bottomMost := p.y}
        }
    }
    method draw(stroke', fill'){
        if(points.size < 2) then { print("Not enough points in custom shape"); return }

        self.current := points.first
        self.stroke := stroke';
        self.color := fill';

        native "js" code ‹
              var color = this.data.color._value;
              var stroke = this.data.stroke._value;
              var startX = this.data.current.data.x._value;
              var startY = this.data.current.data.y._value;
              this.data.createJsGraphics.graphics.beginFill(color);
              this.data.createJsGraphics.graphics.beginStroke(stroke);
              this.data.createJsGraphics.graphics.moveTo(startX, startY);
        ›
        for(points) do {x ->
            current := x
            native "js" code ‹
                  var endX = this.data.current.data.x._value;
                  var endY = this.data.current.data.y._value;
                  this.data.createJsGraphics.graphics.lineTo(endX, endY);
            ›
        }
        native "js" code ‹
              this.data.createJsGraphics.graphics.closePath()
        ›
    }
}

class tween(jsGraphicsObj, myStage) {
    var jsTween
    native "js" code ‹var stage = var_myStage.data.mystage;
          createjs.Ticker.setFPS(60);
          createjs.Ticker.addEventListener("tick", stage);
          var shape = var_jsGraphicsObj.data.createJsGraphics;
          this.data.jsTween = createjs.Tween.get(shape, {override:true});›

    method toX(x) {
        native "js" code ‹var tween = this.data.jsTween;
              this.data.jsTween = tween.to({x:var_x._value}, 250);›
    }

    method wait(time) {
        native "js" code ‹var tween = this.data.jsTween;
              this.data.jsTween = tween.wait(var_time._value);›
    }
}

class inputBox(mystage) {
    var location is public
    var width is public
    var height is public
    var fontSize is public
    var fontFamily is public
    var fontColor is public
    var backgroundColor is public
    var borderColor is public
    var submitBlock := {}
    var input

    method value {
        native "js" code ‹
              var input = this.data.input;
              return new GraceString(input.value());
        ›
    }

    method value := (newval) {
        native "js" code ‹
              var newval = var_newval._value;
              var input = this.data.input;
              input.value(newval);
              input.focus();
        ›
    }

    method draw {
        native "js" code ‹
              var stage = var_mystage;
              var mycanvas = stage.stage.canvas;
              var input = new CanvasInput({
                  canvas: mycanvas,
                  x: this.data.location.data.x._value,
                  y: this.data.location.data.y._value,
                  width: this.data.width._value,
                  height: this.data.height._value,
                  fontSize: this.data.fontSize._value,
                  fontFamily: this.data.fontFamily._value,
                  fontColor: this.data.fontColor._value,
                  backgroundColor: this.data.backgroundColor._value,
                  borderColor: this.data.borderColor._value
        });
        input.focus();
        this.data.input = input;
        ›
        onSubmit(self, submitBlock)
    }

    method focus {
        native "js" code ‹
              var input = this.data.input;
              input.focus();
        ›
    }

    method destroy {
        native "js" code ‹
              var input = this.data.input;
              input.destroy();
        ›
    }

    method callSubmit {
        submitBlock.apply
    }

    method onSubmit(inputObj, block) {
        submitBlock := block
        native "js" code ‹
              if(this.data.input != null) {
                  var input = this.data.input;
                  input.onsubmit(function(event) {
                      minigrace.trapErrors(function() {
                          callmethod(var_inputObj, "callSubmit", [0])
                });
            });
        }
        ›
    }
}
