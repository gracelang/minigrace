import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

import "dom" as dom
import "math" as math


// ** Re-exports and helpers ***************************************************

// A random number from m to n, inclusive.
method randomNumberFrom(m : Number) to(n : Number) -> Number {
  ((n - m) * math.random) + m
}

// A random integer from m to n, inclusive.
method randomIntFrom(m : Number) to(n : Number) -> Number {
  (((n - m + 1) * math.random).truncate % (n - m + 1)) + m
}

// A rough approximation of the value of pi.
def pi: Number is public = 3.14159

type Point = StandardPrelude.Point

type Foreign = Unknown

type MatchResult = {
  result -> Object
  bindings -> List<Object>
}

type Pattern = {
  &(and : Pattern) -> Pattern
  |(or : Pattern) -> Pattern
  match(value : Object) -> MatchResult
}

type ExceptionKind = Pattern & type {
  raise(message : String) -> Done
  refine(name : String) -> ExceptionKind
  parent -> ExceptionKind
}

def SubobjectResponsibility : ExceptionKind =
  ProgrammingError.refine "Subobject Responsibility"

def document : Foreign = dom.document

type Action<R> = Block0<R>
type Function<T, R> = Block1<T,R>
type Function2<T, U, R> = Block2<T, U, R>
type Procedure<T> = Block1<T,Done>
type Procedure2<T, U> = Block2<T, U, Done>


// ** Types ********************************************************************

// The super-type of all components in a GUI.
type Component = {

  // The underlying DOM element of the component.
  element

  // The width of this component.
  width -> Number

  // The height of this component.
  height -> Number

  // Respond to a mouse click (press and release) in this component with the
  // given event.
  onMouseClickDo(f : MouseResponse) -> Done

  // Respond to a mouse press in this component with the given event.
  onMousePressDo(f : MouseResponse) -> Done

  // Respond to a mouse release in this component with the given event.
  onMouseReleaseDo(f : MouseResponse) -> Done

  // Respond to a mouse move in this component with the given event.
  onMouseMoveDo(f : MouseResponse) -> Done

  // Respond to a mouse drag (move during press) in this component with the
  // given event.
  onMouseDragDo(f : MouseResponse) -> Done

  // Respond to a mouse entering this component with the given event.
  onMouseEnterDo(f : MouseResponse) -> Done

  // Respond to a mouse exiting this component with the given event.
  onMouseExitDo(f : MouseResponse) -> Done

  // Respond to a key type (press and release) in this component with the given
  // event.
  onKeyTypeDo(f : KeyResponse) -> Done

  // Respond to a key press in this component with the given event.
  onKeyPressDo(f : KeyResponse) -> Done

  // Respond to a key release in this component with the given event.
  onKeyReleaseDo(f : KeyResponse) -> Done

  // Cause this component to dynamically fill up any empty space in the
  // direction of the container it is in.
  stretchToFill -> Done

  // Cause this component to not dynamically resize, and always retain its set
  // size.
  exactSize -> Done

}

// The type of components that contain other components.
type Container = Component & type {

  // The number of components inside this container.
  size -> Number

  // Retrieve the component at the given index.
  //at(index : Number) -> Component

  // Put the given component at the given index.
  at(index : Number) put(component : Component) -> Done

  // Add a component to the end of the container.
  append(component : Component) -> Done

  // Add a component to the start of the container.
  prepend(component : Component) -> Done

  // Perform an action for every component inside this container.
  //do(f : Procedure<Component>) -> Done

  // Arrange the contents of this container along the horizontal axis.
  // Components which exceed the width of the container will wrap around.
  arrangeHorizontal -> Done

  // Arrange the contents of this container along the vertical axis.
  // Components which exceed the height of the container will wrap around.
  arrangeVertical -> Done

}

// A standalone window which contains other components.
type Application = Container & type {

  // The title of the application window.
  windowTitle -> String
  windowTitle := (value : String) -> Done

  // Respond to a mouse click (press and release) in this component at the given
  // point.
  onMouseClick(mouse : Point)

  // Respond to a mouse press in this component at the given point.
  onMousePress(mouse : Point)

  // Respond to a mouse release in this component at the given point.
  onMouseRelease(mouse : Point)

  // Respond to a mouse move in this component at the given point.
  onMouseMove(mouse : Point)

  // Respond to a mouse drag (move during press) in this component at the given
  // point.
  onMouseDrag(mouse : Point)

  // Respond to a mouse entering this component at the given point.
  onMouseEnter(mouse : Point)

  // Respond to a mouse exiting this component at the given point.
  onMouseExit(mouse : Point)

}

// Objects that can be drawn on a canvas and moved around.
type Graphic = {

  // The location of this object from the top-left corner of the screen.
  location -> Point

  // The horizontal location of this object from the top-left corner of the
  // screen.
  x -> Number

  // The vertical location of this object from the top-left corner of the
  // screen.
  y -> Number

  // Add this object to the given canvas.
  addToCanvas(canvas : DrawingCanvas) -> Done

  // Remove this object from its canvas.
  removeFromCanvas -> Done

  // Whether this object is currently set to be visible on the canvas.
  isVisible -> Boolean

  // Set whether this object is currently visible on the canvas.
  visible := (value : Boolean) -> Done

  // Move this object to the given point on the canvas.
  moveTo(location : Point) -> Done

  // Move this object by the given distances on the canvas.
  moveBy(dx : Number, dy : Number) -> Done

  // Whether the given location is inside this object.
  contains(location : Point) -> Boolean

  // Whether any point in the given graphic is inside this object.
  overlaps(graphic : Graphic2D) -> Boolean

  // set the color of this object to c
  color:=(c:Color)->Done

  // return the color of this object
  color->Color

  // Send this object up one layer on the screen
  sendForward->Done

  // send this object down one layer on the screen
  sendBackward -> Done

  // send this object to the top layer on the screen
  sendToFront -> Done

  // send this object to the bottom layer on the screen
  sendToBack -> Done
}


// DrawingCanvas holding graphic objects
type DrawingCanvas = {

  // add d to canvas
  add(d:Graphic)->Done

  // remove d from window
  remove(d:Graphic)->Done

  draw -> Done

  // clear the canvas
  clear -> Done

  // Send d to top layer of graphics
  sendToFront(d:Graphic)->Done

  // send d to bottom layer of graphics
  sendToBack(d:Graphic)->Done

  // send d up one layer in graphics
  sendForward(d:Graphic)->Done

  // send d down one layer in graphics
  sendBackward(d:Graphic)->Done

  // return the current dimensions of the canvas
  width -> Number
  height -> Number

}

// Type of object that run a graphical application that draws
// objects on a screen and responds to mouse actions
type GraphicApplication = Application & type {
  // canvas holds graphic objects on screen
  canvas -> DrawingCanvas

  // must be invoked to create window and its contents
  // as well as prepare the window to handle mouse events
  startGraphics -> Done
}

// Two-dimensional objects that can also be resized
type Graphic2D = Graphic & type {
  // dimensions of object
  width->Number
  height->Number
  // Change dimensions of object
  setSize(width:Number,height:Number)->Done
  width:=(width:Number)->Done
  height:=(height:Number)->Done
}

// One-dimensional objects
type Line = Graphic & type {
  // start and end of line
  start -> Point
  end -> Point

  // set start and end of line
  start:=(start':Point) -> Done
  end:=(end':Point) -> Done
  setEndPoints(start':Point,end':Point) -> Done
}

// Text that can be drawn on a canvas.
type Text = Graphic & type {

   // return the contents displayed in the item
   contents -> String

   // reset the contents displayed to be s
   contents:=(s:String) -> Done

   // return width of text item (currently inaccurate)
   width -> Number

   // return size of the font used to display the contents
   fontSize -> Number

   // Set the size of the font used to display the contents
   fontSize:=(size:Number) -> Done

}

type TextBox = Component & type {

  // The text contents of the box.
  contents -> String
  contents := (value : String) -> Done

}

type Labelled = Component & type {

  // The label name.
  label -> String
  label := (value : String) -> Done

}

type Button = Labelled

type Input = Labelled & type {

  // Respond to this input gaining focus with the given event.
  onFocusDo(f : Response) -> Done

  // Respond to this input losing focus with the given event.
  onBlurDo(f : Response) -> Done

  // Respond to this input having its value changed.
  onChangeDo(f : Response) -> Done

}

type TextField = Input & type {

  // The contents of the text field.
  text -> String
  text := (value : String) -> Done

}

type NumberField = Input & type {

  // The contents of the number field.
  number -> String
  number := (value : String) -> Done

}


type Choice = Input & type {

  // The currently selected option.
    selected -> String

}

// ** Colors *******************************************************************

type Color = {

  // The red component of the color.
  red -> Number

  // The green component of the color.
  green -> Number

  // The blue component of the color.
  blue -> Number

}

def ColorOutOfRange : ExceptionKind =
  StandardPrelude.RuntimeError.refine "Color Out Of Range"

// Simple color class
class color.r(r' : Number) g(g' : Number) b(b' : Number) -> Color {
  if((r' < 0) || (r' > 255)) then {
    ColorOutOfRange.raise "red index {r'} out of bounds 0..255"
  }

  if((g' < 0) || (g' > 255)) then {
    ColorOutOfRange.raise "green index {g'} out of bounds 0..255"
  }

  if((b' < 0) || (b' > 255)) then {
    ColorOutOfRange.raise "blue index {b'} out of bounds 0..255"
  }

  def red:Number is public = r'
  def green:Number is public = g'
  def blue:Number is public = b'

  method asString -> String {
    "rgb({red}, {green}, {blue})"
  }
}

// Produce a random color.
method randomColor -> Color {
  color.r(randomIntFrom(0) to(255))
    g(randomIntFrom(0) to(255))
    b(randomIntFrom(0) to(255))
}


// ** Events *******************************************************************

type Event = {
  source -> Component
}

type MouseEvent = Event & type {
  at -> Point
}

type KeyEvent = Event & type {
  //character -> String
  code -> Number
  //modifiers -> Modifiers
}

type Response = Procedure<Event>

type MouseResponse = Procedure<MouseEvent>

type KeyResponse = Procedure<KeyEvent>

class event.source(source' : Component) -> Event {
  def source : Component is public = source'

  method asString -> String{
    "Event on {source}"
  }
}

class mouseEvent.source(source' : Component)
    event(event' : Foreign) -> MouseEvent {
  inherits event.source(source')
  def at : Point is public = event'.pageX @ event'.pageY

  method asString -> String {
    "Mouse event on {source} at {at}"
  }
}

class keyEvent.source(source' : Component)
    event(event' : Foreign) -> KeyEvent {
  inherits event.source(source')
  def code : Number is public = event'.which
  //def character is public = dom.window.String.fromCharCode(event'.which)

  method asString -> String {
    "Key event on {source} for {code}"
  }
}


// ** Internal factories *******************************************************

// where T <: Component
type ComponentFactory<T> = {

  // Build a component around an existing element.
  fromElement(element) -> T

  // Build a component around a new element of the given tag name.
  ofElementType(tagName : String) -> T

}

// The maximum amount of time a mouse can be pressed before being released in
// order for the event to be registered as a click.
def maxClickTime : Number = 200

def component : ComponentFactory<Component> = object {
  factory method fromElement(element') -> Component {
    def element is public = element'

    method width -> Number {
      element.width
    }

    method height -> Number {
      element.height
    }

    method on(event' : String)
        do(f : Procedure<Foreign>) -> Done is confidential {
      element.addEventListener(event', f)
      done
    }

    method on(kind : String)
        withPointDo(f : MouseResponse) -> Done is confidential {
      on(kind) do { event' ->
        f.apply(mouseEvent.source(self) event(event'))
      }
    }

    method onMouseClickDo(f : MouseResponse) -> Done {
      var lastDown : Foreign

      on "mousedown" do { event' : Foreign ->
        lastDown := event'.timeStamp
      }

      on "click" do { event' : Foreign ->
        if ((event'.timeStamp - lastDown) <= maxClickTime) then {
          f.apply(mouseEvent.source(self) event(event'))
        }
      }
    }

    method onMousePressDo(f : MouseResponse) -> Done {
      on "mousedown" withPointDo(f)
    }

    method onMouseReleaseDo(f : MouseResponse) -> Done {
      on "mouseup" withPointDo(f)
    }

    method onMouseMoveDo(f : MouseResponse) -> Done {
      on "mousemove" do { event' ->
        if (if(dom.doesObject(event') haveProperty("buttons")) then {
          event'.buttons == 0
        } else {
          event'.which == 0
        }) then {
          f.apply(mouseEvent.source(self) event(event'))
        }
      }
    }

    method onMouseDragDo(f : MouseResponse) -> Done {
      on "mousemove" do { event' ->
        if (if(dom.doesObject(event') haveProperty("buttons")) then {
          event'.buttons == 1
        } else {
          event'.which == 1
        }) then {
          f.apply(mouseEvent.source(self) event(event'))
        }
      }
    }

    method onMouseEnterDo(f : MouseResponse) -> Done {
      on "mouseover" do { event' ->
        def from = event'.relatedTarget

        if ((from == done).orElse { !element.contains(from) }) then {
          f.apply(mouseEvent.source(self) event(event'))
        }
      }
    }

    method onMouseExitDo(f : MouseResponse) -> Done {
      on "mouseout" do { event' ->
        def to = event'.relatedTarget

        if ((to == done).orElse { !element.contains(to) }) then {
          f.apply(mouseEvent.source(self) event(event'))
        }
      }
    }

    method on(kind : String)
        withKeyDo(f : KeyResponse) -> Done is confidential {
      on(kind) do { event' ->
        f.apply(keyEvent.source(self) event(event'))
      }
    }

    method onKeyPressDo(f : KeyResponse) -> Done {
      on "keydown" withKeyDo(f)
    }

    method onKeyReleaseDo(f : KeyResponse) -> Done {
      on "keyup" withKeyDo(f)
    }

    method onKeyTypeDo(f : KeyResponse) -> Done {
      on "keypress" withKeyDo(f)
    }

    method stretchToFill -> Done {
      element.style.flexGrow := 1
    }

    method exactSize -> Done {
      element.style.flexGrow := 0
    }
  }

  factory method ofElementType(tagName : String) -> Component {
    inherits fromElement(document.createElement(tagName))
  }
}

def container : ComponentFactory<Container> is public = object {
  factory method ofElementType(tagName : String) -> Component {
    inherits fromElement(document.createElement(tagName))
  }

  factory method fromElement(element') -> Container {
    inherits component.fromElement(element')

    method size -> Number {
      element.childElementCount
    }

    method isEmpty -> Boolean {
      size == 0
    }

    //method at(index : Number) -> Component {
      //if ((index < 1) || (index > size)) then {
        //collections.BoundsError.raiseForIndex(index)
      //}

      //component.fromElement(element.children.at(index - 1).component)
    //}

    method at(index : Number) put(aComponent : Component) -> Done {
      if ((index < 1) || (index > (size + 1))) then {
        BoundsError.raiseForIndex(index)
      }

      if (index == (size + 1)) then {
        element.appendChild(aComponent.element)
      } else {
        element.insertBefore(aComponent.element, element.at(index - 1))
      }

      done
    }

    method append(aComponent : Component) -> Done {
      element.appendChild(aComponent.element)
      done
    }

    method prepend(aComponent : Component) -> Done {
      if (isEmpty) then {
        element.appendChild(aComponent.element)
      } else {
        element.firstChild.insertBefore(aComponent.element)
      }

      done
    }

    //method do(f : Procedure<Component>) -> Done {
      //for (element.children) do { child ->
        //f.apply(child.component)
      //}
    //}

    //method fold<T>(f : Function2<T, Component, T>)
        //startingWith(initial : T) -> T {
      //var value : T := initial

      //for (element.children) do { child ->
        //value := f.apply(value, child)
      //}

      //value
    //}

    method flex -> Done is confidential {
      element.style.display := "inline-flex"
      element.style.flexFlow := "row wrap"
    }

    method arrangeHorizontal -> Done {
      flex
      element.style.flexDirection := "row"
    }

    method arrangeVertical -> Done {
      flex
      element.style.flexDirection := "column"
    }
  }
}

def input : ComponentFactory<Input> = object {
  factory method fromElement(element') -> Input {
    inherits component.fromElement(element')

    method onFocusDo(f : Response) -> Done {
      element.addEventListener("focus", { _ ->
        f.apply(event.source(self))
      })
    }

    method onBlurDo(f : Action) -> Done {
      element.addEventListener("blur", { _ ->
        f.apply(event.source(self))
      })
    }

    method onChangeDo(f : Action) -> Done {
      element.addEventListener("change", { _ ->
        f.apply(event.source(self))
      })
    }
  }

  factory method ofElementType(elementType : String) -> Input {
    inherits fromElement(document.createElement(elementType))
  }

  factory method ofType(inputType : String) -> Input {
    inherits ofElementType("input")

    self.element.setAttribute("type", inputType)
  }
}

def labeled : ComponentFactory<Labelled> = object {
  factory method fromElement(element') -> Labelled {
    inherits input.fromElement(element')

    method label -> String {
      self.element.textContent
    }

    method label := (value : String) -> Done {
      self.element.textContent := value
      done
    }
  }

  factory method ofElementType(elementType : String) -> Labelled {
    inherits fromElement(document.createElement(elementType))
  }

  factory method ofElementType(elementType : String)
      labeled(label' : String) -> Labelled {
    inherits ofElementType(elementType)

    self.label := label'
  }
}

class field.ofType(inputType : String) labeled(label' : String) -> Input {
  inherits input.ofType(inputType)

  method label -> String {
    self.element.placeholder
  }

  method label := (value : String) -> Done {
    self.element.placeholder := value
    done
  }

  label := label'
}


// ** External factories *******************************************************

class application.title(initialTitle : String)
    size(initialWidth : Number, initialHeight : Number) -> Application {
  inherits container.fromElement(document.createDocumentFragment)

  var isOpened : Boolean := false
  var theWindow : Foreign

  var theTitle : String := initialTitle
  var theWidth : Number := initialWidth
  var theHeight : Number := initialHeight

  def events : List<Event> = list.empty

  method element -> Foreign {
    if (isOpened) then {
      theWindow.document.body
    } else {
      super.element
    }
  }

  class eventLog.kind(kind' : String)
      response(response' : Procedure) is confidential {
    def kind : String is public = kind'
    def response : Procedure is public = response'
  }

  method on(kind : String)
      do(response : Procedure<Event>) -> Done is confidential {
    if (isOpened) then {
      theWindow.addEventListener(kind, response)
    } else {
      events.push(eventLog.kind(kind) response(response))
    }
  }

  method windowTitle -> String {
    if (isOpened) then {
      theWindow.title
    } else {
      theTitle
    }
  }

  method windowTitle := (value : String) -> Done {
    if (isOpened) then {
      theWindow.title := value
    } else {
      theTitle := value
    }
  }

  method width -> Number {
    if (isOpened) then {
      theWindow.width
    } else {
      theWidth
    }
  }

  method height -> Number {
    if (isOpened) then {
      theWindow.height
    } else {
      theHeight
    }
  }

  // The enter/exit events need to be redefined to account for the body element
  // not necessarily accounting for all of the space in the window. If we only
  // consider cases where relatedTarget is null, then it represents only enter
  // and exit of the whole window.

  method onMouseEnterDo(f : MouseResponse) -> Done {
    on "mouseover" do { event' ->
      def from = event'.relatedTarget

      if (from == done) then {
        f.apply(mouseEvent.source(self) event(event'))
      }
    }
  }

  method onMouseExitDo(f : MouseResponse) -> Done {
    on "mouseout" do { event' ->
      def to = event'.relatedTarget

      if (to == done) then {
        f.apply(mouseEvent.source(self) event(event'))
      }
    }
  }

  method onMouse(kind : String) do(bl : MouseResponse) -> Done is confidential {
    theWindow.addEventListener(kind, { evt ->
      bl.apply(evt.pageX @ evt.pageY)
    })
  }

  method startApplication -> Done {
    if (!isOpened) then {
      theWindow := dom.window.open("", "", "width={theWidth},height={theHeight}")
      theWindow.document.title := theTitle
      theWindow.document.body.appendChild(element)
      dom.window.graceRegisterWindow(theWindow)
      isOpened := true

      element.style.margin := "0px"
      arrangeHorizontal

      for (events) do { anEvent ->
        on(anEvent.kind) do(anEvent.response)
      }

      onMouseClickDo { event' ->
        onMouseClick(event'.at)
      }

      onMousePressDo { event' ->
        onMousePress(event'.at)
      }

      onMouseReleaseDo { event' ->
        onMouseRelease(event'.at)
      }

      onMouseMoveDo { event' ->
        onMouseMove(event'.at)
      }

      onMouseDragDo { event' ->
        onMouseDrag(event'.at)
      }

      onMouseEnterDo { event' ->
        onMouseEnter(event'.at)
      }

      onMouseExitDo { event' ->
        onMouseExit(event'.at)
      }
    }
  }

  method stopApplication  -> Done {
    if (isOpened) then {
      theWindow.close
    }
  }

  method onMouseClick(mouse : Point) -> Done {}

  method onMousePress(mouse : Point) -> Done {}

  method onMouseRelease(mouse : Point) -> Done {}

  method onMouseMove(mouse : Point) -> Done {}

  method onMouseDrag(mouse : Point) -> Done {}

  method onMouseEnter(mouse : Point) -> Done {}

  method onMouseExit(mouse : Point) -> Done {}

  method asString -> String {
    "Application with title \"{windowTitle.asString}\", width {width}, height {height}"
  }
}

// class representing objects that manage graphics on screen
class drawingCanvas.size(width' : Number, height' : Number) -> DrawingCanvas {
  inherits component.fromElement(document.createElement("canvas"))

  element.width := width'
  element.height := height'

  def theContext : Foreign = element.getContext("2d")
  theContext.lineWidth := 2

  method width -> Number {
    element.width
  }

  method height -> Number {
    element.height
  }

  // list of all objects on canvas (hidden or not)
  var theGraphics : List<Graphic> := list.empty

  method draw -> Done {
    theContext.clearRect(0, 0, width, height)

    for (theGraphics) do { aGraphic ->
      if (aGraphic.isVisible) then {
        aGraphic.draw(theContext)
      }
    }
  }

  // remove all items from canvas
  method clear -> Done {
    theGraphics := list.new
    draw
  }

  // Add new item d to canvas
  method add(d:Graphic) -> Done {
    theGraphics.add(d)
    draw
  }

  // remove m from items on canvas
  method remove(aGraphic : Graphic) -> Done{
    theGraphics.remove(aGraphic) ifAbsent {}
    draw
  }

  // send item d to front/top layer of canvas
  method sendToFront(aGraphic : Graphic) -> Done {
   remove(aGraphic)
   theGraphics.addLast(aGraphic)
   draw
  }

  // send item d to back/bottom layer of canvas
  method sendToBack(aGraphic : Graphic) -> Done {
    remove(aGraphic)
    theGraphics.addFirst(aGraphic)
    draw
  }

  // send item d one position higher on canvas
  method sendForward(aGraphic : Graphic) -> Done {
    def theIndex = theGraphics.indexOf(aGraphic)

    if (theIndex == theGraphics.size) then {
      return
    }

    remove(aGraphic)
    theGraphics.at(theIndex + 1) put(aGraphic)
    draw
  }

  // send item d one position lower on canvas
  method sendBackward(aGraphic : Graphic)->Done {
    def theIndex = theGraphics.indexOf(aGraphic)

    if (theIndex == 1) then {
      return
    }

    remove(aGraphic)
    theGraphics.at(theIndex - 1) put(aGraphic)
    draw
  }

  // debug method to print all objects on canvas
  method printObjects -> Done {
    for(theGraphics) do { aGraphic ->
      print(aGraphic)
    }
  }

  // string representation of canvas
  method asString -> String {
   "canvas: with {theGraphics.size} objects"
  }
}

// abstract class to be extended to create graphic application using mouse actions
class graphicApplication
    .size(theWidth' : Number, theHeight' : Number) -> GraphicApplication {
  inherits application.title("Simple graphics") size(theWidth', theHeight')

  def canvas : DrawingCanvas is public = drawingCanvas.size(theWidth, theHeight)
  append(canvas)

  var interval : Foreign
  var times : Number := 0

  method startGraphics -> Done {
    startApplication

    theWindow.document.documentElement.style.overflow := "hidden"

    interval := dom.window.setInterval({
      adjustToFit
    }, 50)
  }

  method adjustToFit -> Done {
    def body = theWindow.document.body

    theWindow.resizeTo(body.offsetWidth +
      (theWindow.outerWidth - theWindow.innerWidth),
      body.offsetHeight + (theWindow.outerHeight - theWindow.innerHeight))

    if (times == 9) then {
      dom.window.clearInterval(interval)
    }

    times := times + 1
  }
}

// predefined colors in objectdraw
def white:Color is public = color.r(255)g(255)b(255)
def black:Color is public = color.r(0)g(0)b(0)
def green:Color is public = color.r(0)g(255)b(0)
def red:Color is public = color.r(255)g(0)b(0)
def gray:Color is public = color.r(60)g(60)b(60)
def blue:Color is public = color.r(0)g(0)b(255)
def cyan:Color is public = color.r(0)g(255)b(255)
def magenta:Color is public = color.r(255)g(0)b(255)
def yellow:Color is public = color.r(255)g(255)b(0)
def neutral:Color is public = color.r(220)g(220)b(220)


// abstract superclass for drawable objects
class drawable.at(location':Point) on (canvas':DrawingCanvas) -> Graphic {

  // location of object on screen
  var location : Point is readable := location'

  // x coordinate of object
  method x -> Number {
    location.x
  }

  // y coordinate of object
  method y -> Number {
     location.y
  }

  // The canvas this object is part of
  var canvas : DrawingCanvas := canvas'

  // the color of this object
  var theColor : Color := black

  method color -> Color {theColor}

  method color:=(newColor:Color) -> Done {
    theColor := newColor
    setStateChanged
  }

  var theFrameColor:Color := black
  method frameColor -> Color { theFrameColor }
  method frameColor:=(newfColor:Color) -> Done {
    theFrameColor := newfColor
    setStateChanged
  }

  // Determine if object is shown on screen
  var isVisible:Boolean is readable := true

  method visible:=(b:Boolean) -> Done {
    isVisible := b
    setStateChanged
  }

  // Add this object to canvas c
  method addToCanvas(c:DrawingCanvas)->Done {
    removeFromCanvas
    canvas := c
    c.add(self)
    setStateChanged
  }

  // Remove this object from its canvas
  method removeFromCanvas->Done {
    canvas.remove(self)
    setStateChanged
  }

  // move this object to newLocn
  method moveTo(newLocn:Point)->Done{
    location := newLocn
    setStateChanged
  }

  // move this object dx to the right and dy down
  method moveBy(dx:Number,dy:Number)->Done{
    location := location+(dx@dy)
    setStateChanged
  }

  method contains(locn:Point) -> Boolean {
    SubobjectResponsibility.raise "contains not implemented for {self}"
  }

  method overlaps(otheObject:Graphic2D) -> Boolean {
    SubobjectResponsibility.raise "overlaps not implemented for {self}"
  }

  // Send this object up one layer on the screen
  method sendForward->Done{
    canvas.sendForward(self)
  }

  // send this object down one layer on the screen
  method sendBackward->Done{
    canvas.sendBackward(self)
  }

  // send this object to the top layer on the screen
  method sendToFront->Done{
    canvas.sendToFront(self)
  }

  // send this object to the bottom layer on the screen
  method sendToBack->Done{
    canvas.sendToBack(self)
  }

  // Tell the system that the screen needs to be repainted
  method setStateChanged->Done is confidential {
    canvas.draw
  }

  // Draw this object on the applet !! confidential
  method draw(ctx : Foreign) -> Done {
    SubobjectResponsibility.raise "draw not implemented for {self}"
  }

  // Return a string representation of the object
  method asString -> String {
    "Graphic object"
  }
}


// abstract class for two-dimensional objects
class drawable2D.at(location':Point)size(width':Number,height':Number)on(canvas':DrawingCanvas)
                      -> Graphic2D{
  inherits drawable.at(location')on(canvas')
  var theWidth:Number := width'
  method width -> Number {theWidth}
  var theHeight:Number := height'
  method height -> Number {theHeight}

  method contains(locn:Point)->Boolean{
    (x <= locn.x) && (locn.x <= (x + width))
         &&(y <= locn.y) && (locn.y <= (y + height))
  }

  method overlaps(other:Graphic2DFS)->Boolean{
    def itemleft = other.x
    def itemright = other.x + other.width
    def itemtop = other.y
    def itembottom = other.y+other.height
    def disjoint:Boolean = ((x+width) < itemleft) || (itemright < x)
                        || ((y+height) < itemtop) || (itembottom < y)
    return !disjoint
  }

  method asString -> String {
    "drawable2D object at ({x},{y}) "++
         "with height {height}, width {width}, and color {color}"
  }
}

// abstract class to be extended for 2 dimensional objects that can be
// resized.
class resizable2D.at(location':Point)size(width':Number,height':Number)
                   on(canvas':DrawingCanvas)  -> Graphic2D{
  inherits drawable2D.at(location')size(width',height')on(canvas')

  method width:=(w:Number) -> Done {
    theWidth := w
    setStateChanged
  }

  method height:=(h:Number) -> Done {
    theHeight := h
    setStateChanged
  }

  method setSize(w:Number,h:Number) -> Done{
    width := w
    height := h
  }

  method asString -> String {
    "Resizable2D object at ({x},{y}) "++
         "with height {height}, width {width}, and color {color}"
  }

}

// class to generate framed rectangle at (x',y') with size width' x height'
// created on canvas'
class framedRect.at(location':Point)size(width':Number,height':Number)
           on(canvas':DrawingCanvas) -> Graphic2D{
  inherits resizable2D.at(location')size(width',height')on(canvas')
  addToCanvas(canvas')

  method draw(ctx : Foreign) -> Done {
    ctx.save
    ctx.strokeStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.strokeRect(x, y, width, height)
    ctx.restore
  }

  method asString -> String {
    "FramedRect at ({x},{y}) "++
         "with height {height}, width {width}, and color {color}"
  }

}

// class to generate filled rectangle at (x',y') with size width' x height'
// created on canvas'
class filledRect.at(location':Point)size(width':Number,height':Number)
           on(canvas':DrawingCanvas) -> Graphic2D {
  inherits resizable2D.at(location')size(width',height')on(canvas')

  addToCanvas(canvas')

  method draw(ctx : Foreign) -> Done {
    ctx.save
    ctx.fillStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.fillRect(x, y, width, height)
    ctx.restore
  }

  method asString -> String {
    "FilledRect at ({x},{y}) "++
         "with height {height}, width {width}, and color {color}"
  }

}


// class to generate framed oval at (x',y') with size width' x height'
// created on canvas'
class framedOval.at(location':Point)size(width':Number,height':Number)
           on(canvas':DrawingCanvas) -> Graphic2D{
  inherits resizable2D.at(location')size(width',height')on(canvas')
  addToCanvas(canvas')

  method draw(ctx : Foreign)->Done {
    ctx.beginPath
    ctx.save
    ctx.translate(x+width/2,y+height/2)
    ctx.scale(width/2,height/2)
    ctx.arc(0,0,1,0,2*pi)
    ctx.restore
    ctx.save
    ctx.strokeStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.stroke
    ctx.restore
    ctx.closePath
  }

  method asString -> String {
    "FramedOval at ({x},{y}) "++
         "with height {height}, width {width}, and color {color}"
  }

}

// class to generate filled oval at (x',y') with size width' x height'
// created on canvas'
class filledOval.at(location':Point)size(width':Number,height':Number)
           on(canvas':DrawingCanvas) -> Graphic2D{
  inherits resizable2D.at(location')size(width',height')on(canvas')

  addToCanvas(canvas')

  method draw(ctx : Foreign)->Done {
    ctx.beginPath
    ctx.save
    ctx.translate(x+width/2,y+height/2)
    ctx.scale(width/2,height/2)
    ctx.arc(0,0,1,0,2*pi)
    ctx.restore
    ctx.save
    ctx.fillStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.fill
    ctx.restore
    ctx.closePath
  }

  method asString -> String {
    "FilledOval at ({x},{y}) "++
         "with height {height}, width {width}, and color {color}"
  }

}

// class to generate framed arc at (x',y') with size width' x height'
// from startAngle radians to endAngle radians created on canvas'
// Note that angle 0 is in direction of positive x axis and increases in
// angles go clockwise.
class framedArc.at(location':Point)size(width':Number,height':Number)
           from(startAngle:Number)to(endAngle:Number)on(canvas':DrawingCanvas) -> Graphic2D{
  inherits resizable2D.at(location')size(width',height')on(canvas')
  addToCanvas(canvas')

  method draw(ctx : Foreign)->Done {
    ctx.beginPath
    ctx.save
    ctx.translate(x+width/2,y+height/2)
    ctx.scale(width/2,height/2)
    if (startAngle <= endAngle) then {
       ctx.arc(0,0,1,(startAngle*pi)/180,(endAngle*pi)/180)
    } else {
       ctx.arc(0,0,1,(endAngle*pi)/180,(startAngle*pi)/180)
    }
    ctx.restore
    ctx.save
    ctx.strokeStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.stroke
    ctx.restore
    ctx.closePath
  }

  method asString -> String {
    "FramedArc at ({x},{y}) "++
         "with height {height}, width {width}, and color {color} going "++
         "from {startAngle} degrees to {endAngle} degrees"
  }

}


// class to generate filled arc at (x',y') with size width' x height'
// from startAngle degrees to endAngle degrees created on canvas'
// Note that angle 0 is in direction of positive x axis and increases in
// angles go clockwise.
class filledArc.at(location':Point)size(width':Number,height':Number)
           from(startAngle:Number)to(endAngle:Number)on(canvas':DrawingCanvas) -> Graphic2D{
  inherits resizable2D.at(location')size(width',height')on(canvas')
  addToCanvas(canvas')

  method draw(ctx : Foreign)->Done {
    ctx.beginPath
    ctx.save
    ctx.translate(x+width/2,y+height/2)
    ctx.scale(width/2,height/2)
    if (startAngle <= endAngle) then {
      ctx.arc(0,0,1,(startAngle*pi)/180,(endAngle*pi)/180)
    } else {
      ctx.arc(0,0,1,(endAngle*pi)/180,(startAngle*pi)/180)
    }
    ctx.restore
    ctx.save
    ctx.fillStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.fill
    ctx.save
    ctx.closePath
  }

  method asString -> String {
    "FilledArc at ({x},{y}) "++
         "with height {height}, width {width}, and color {color} going "++
         "from {startAngle} degrees to {endAngle} degrees"
  }

}

type DrawableImageFactory = {
  //at(location : Point) size(width : Number, height : Number)
    //file(fileName : String) on (canvas : DrawingCanvas) -> Graphic2D

  at(location : Point) size(width : Number, height : Number)
    url(url : String) on (canvas : DrawingCanvas) -> Graphic2D
}

// class to generate an image on canvas' at (x',y') with size width' x height'
// The image is taken from the file fileName and must be in "png" format.
// currently doesn't work, perhaps because can't find file.
def drawableImage : DrawableImageFactory = object {
//  factory method at(location' : Point)
//      size(width' : Number, height' : Number)
//      file(fileName : String)
//      on(canvas' : DrawingCanvas) -> Graphic2D {
//    inherits resizable2D.at(location')size(width',height')on(canvas')
//
//    if (!dom.window.graceHasFile(fileName)) then {
//      NoSuchFile.raise "The file '{fileName}' could not be found"
//    }
//
//    def theImage = dom.document.createElement("img")
//    theImage.src := dom.window.graceReadFile(fileName)
//
//    method draw(ctx : Foreign) -> Done {
//      ctx.drawImage(theImage, x, y, width, height)
//    }
//
//    method asString -> String {
//      "DrawableImage at ({x},{y}) "++
//           "with height {height}, width {width}, "++
//           "from file {fileName}"
//    }
//
//    addToCanvas(canvas')
//  }

  factory method at(location' : Point)
      size(width' : Number, height' : Number)
      url(url : String)
      on(canvas' : DrawingCanvas) -> Graphic2D {
    inherits resizable2D.at(location')size(width',height')on(canvas')

    var theImage := dom.document.createElement("img")
    theImage.src := url

    theImage.addEventListener("load", { _ ->
      addToCanvas(canvas')
    })

    method draw(ctx : Foreign) -> Done {
      ctx.drawImage(theImage, x, y, width, height)
    }

    method asString -> String {
      "DrawableImage at ({x},{y}) "++
           "with height {height}, width {width}, "++
           "from url {url}"
    }
  }
}

type LineFactory = {
  from(start':Point) to(end':Point) on(canvas':DrawingCanvas) -> Line

  from (pt: Point)
    length(len: Number)
    direction(radians: Number)
    on(canvas':DrawingCanvas) -> Line
}

def line = object {
  // Create a line from start' to end' on canvas'
  factory method from(start':Point)to(end':Point)on(canvas':DrawingCanvas) -> Line {
    inherits drawable.at(start')on(canvas')

    var theEnd: Point := end'

    // position of start of line (same as location)
    method start -> Point {
      location
    }

    // position of end of line
    method end -> Point {theEnd}

    addToCanvas(canvas')

    // set start and end of line
    method start:=(newStart:Point) -> Done {
      location := newStart
      setStateChanged
    }

    method end:=(newEnd:Point) -> Done {
      theEnd := newEnd
      setStateChanged
    }

    method setEndPoints(newStart:Point,newEnd:Point) -> Done {
      start := newStart
      end := newEnd
    }

    method draw(ctx : Foreign)->Done {
      ctx.save
      ctx.strokeStyle := "rgb({color.red}, {color.green}, {color.blue})"
      ctx.beginPath
      ctx.moveTo(location.x, location.y)
      ctx.lineTo(theEnd.x, theEnd.y)
      ctx.stroke
      ctx.restore
    }

    method moveBy(dx:Number,dy:Number) -> Done {
      location := location + (dx@dy)  //.translate(dx,dy)
      theEnd := theEnd + (dx@dy) //.translate(dx,dy)
      setStateChanged
    }

    method dist2(v:Point, w:Point) -> Number is confidential {
      math.pow(v.x - w.x, 2) + math.pow(v.y - w.y, 2)
    }

    method distToSegmentSquared(p:Point, v:Point, w:Point) -> Number
         is confidential {
      var l2:Number := dist2(v, w)
      if (l2 == 0) then { return dist2(p, v)}
      var t:Number := ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2
      if (t < 0) then {return dist2(p, v)}
      if (t > 1) then {return dist2(p, w)}
      dist2(p, ( (v.x + t * (w.x - v.x))@
                       (v.y + t * (w.y - v.y) )))
    }

    method distToSegment(p:Point, v:Point, w:Point) -> Number {
      math.sqrt(distToSegmentSquared(p, v, w))
    }

    method contains(pt:Point) -> Boolean {
      def tolerance: Number = 2  // say true if pt within tolerance of line
      distToSegment(pt,start,end) < tolerance
    }

    method asString -> String {
      "Line from {start} to {end} with color {color}"
    }
  }

  method from(pt: Point)
      length(len: Number)
      direction(radians: Number)
      on(canvas':DrawingCanvas) -> Line {
    def endpt: Point = pt+((len*math.cos(radians)) @ (-len*math.sin(radians)))

    object {
      inherits line.from(pt) to (endpt) on (canvas')
    }
  }
}

// class to generate text at location' on canvas' initially showing 
// contents'
class text.at(location':Point)
    with(contents':String)
    on(canvas':DrawingCanvas) -> Text {
  inherits drawable.at(location')on(canvas')

  var theContents:String := contents'
  var fsize:Number is readable := 10

  method width -> Number {
    theContents.size*fsize/2
  }

  method draw(ctx : Foreign) -> Done {
    ctx.save
    ctx.font := "{fontSize}pt sans-serif"
    ctx.fillStyle := "rgb({color.red}, {color.green}, {color.blue})"
    ctx.fillText(contents, location.x, location.y)
    ctx.restore
  }

  method contents -> String {
    theContents
  }

  method contents:=(newContents:String) -> Done {
    theContents := newContents
    setStateChanged
  }

  method fontSize:=(size':Number) -> Done {
    fsize := size'
    setStateChanged
  }

  method fontSize -> Number {
    fsize
  }

  method asString -> String {
    "Text at ({x},{y}) with value {contents} and color {color}"
  }

  addToCanvas(canvas')
}

class textBox.with(contents' : String) -> TextBox {
  inherits component.ofElementType("span")

  method contents -> String {
    self.element.textContent
  }

  method contents := (value : String) -> Done {
    self.element.textContent := value
    done
  }

  contents := contents'
}

class button.labeled(label' : String) -> Button {
  inherits labeled.ofElementType("button") labeled(label')
}

type FieldFactory = {
  labeled(label : String) -> Input

  unlabeled -> Input
}

def textField : FieldFactory is public = object {
  factory method labeled(label' : String) -> TextField {
    inherits field.ofType("text") labeled(label')

    method text -> String {
      self.element.value
    }

    method text := (value : String) -> Done {
      self.element.value := value
    }
  }

  factory method unlabeled -> TextField {
    inherits labeled ""
  }

  method asString -> String {
    "textField"
  }
}

def passwordField : FieldFactory is public = object {
  factory method labeled(label : String) -> Input {
    inherits textField.labeled(label)

    self.element.setAttribute("type", "password")
  }

  factory method unlabeled -> TextField {
    inherits labeled ""
  }

  method asString -> String {
    "passwordField"
  }
}

def numberField : FieldFactory is public = object {
  factory method labeled(label : String) -> Input {
    inherits field.ofType("number") labeled(label)

    method number -> Number {
      self.element.value.asNumber
    }

    method number := (value : Number) -> Done {
      self.element.value := value
    }
  }

  factory method unlabeled -> TextField {
    inherits labeled ""
  }

  method asString -> String {
    "numberField"
  }
}

class selectBox.options(options : Sequence<String>) -> Choice {
  inherits input.ofElementType("select")

  for (options) do { name : String ->
    def anOption : Foreign = document.createElement("option")
    anOption.value := name
    anOption.textContent := name
    self.element.appendChild(anOption)
  }

  method selected -> String {
    self.element.value
  }

  method select := (value : String) -> Done {
    self.element.value := value
  }
}

