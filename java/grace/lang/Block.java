package grace.lang;

public abstract class Block extends Value {
  
  public Block() {
    super(Egal.Closure);
  }
  
  public Block(Value outer) {
    super(Egal.Closure, outer);
  }

  public abstract Value apply(Value self, Value... params);

}
