package grace.lang;

public abstract class Block extends Value {
  
  public Block() {
    super(Egal.Closure);
  }
  
  public Block(Value outer) {
    super(Egal.Closure, outer);
  }
  
  public Block(Value outer, Value closure) {
  	super(Egal.Closure, outer, closure);
  }

  public abstract Value apply(Value self, Value... params);

}
