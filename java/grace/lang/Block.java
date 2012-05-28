package grace.lang;

import static grace.lang.Prelude.$javaBoolean;
import static grace.lang.Prelude.$javaInteger;
import static grace.lang.Prelude.$number;

public abstract class Block extends Top {
  
  private final int argCount;
  
  public Block(int argCount) {
    super(Egal.Closure);
    this.argCount = argCount;
  }
  
  public Block(int argCount, Obj outer) {
    super(Egal.Closure, outer);
    this.argCount = argCount;
  }
  
  public Block(int argCount, Obj outer, Obj closure) {
  	super(Egal.Closure, outer, closure);
  	this.argCount = argCount;
  }
  
  public Obj apply(Obj self, Obj... args) {
    Obj match = match(self, args);
    if ($javaBoolean(match)) {
      return match.invoke("result");
    }
    
    return match;
  }
  
  protected void check(Obj[] params) {
    if (params.length < argCount) {
      throw new RuntimeException("Insufficient arguments to block");
    }
  }
  
  public Obj match(Obj self, Obj... args) {
    check(args);
    
    return new Match.MatchSucceeded($apply(self, args));
  }
  
  protected Obj $match(Obj self, Obj pattern, Obj... args) {
    if (args.length == 0) {
      check(args);
    }
    
    Obj value = args[0];
    Obj match = pattern.invoke("match", value);
    if ($javaBoolean(match)) {
      Obj list = match.invoke("bindings");
      int size = $javaInteger(list.invoke("size"));
      args = new Obj[size];
      
      for (int i = 0; i < size; i++) {
        args[i] = list.binop("[]", $number(i + 1));
      }
      
      check(args);
      
      return new Match.MatchSucceeded($apply(self, args));
    }
    
    return new Match.MatchFailed(args[0]);
  }

  protected abstract Obj $apply(Obj self, Obj... args);

}
