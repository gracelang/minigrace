package grace.lang;

public abstract class Block extends Top {
  
  public Block() {
    super(Egal.Closure);
  }
  
  public Block(Obj outer) {
    super(Egal.Closure, outer);
  }
  
  public Block(Obj outer, Obj closure) {
  	super(Egal.Closure, outer, closure);
  }

  public abstract Obj apply(Obj self, Obj... params);

}
