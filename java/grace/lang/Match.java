package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Bool.$true;
import static grace.lang.Prelude.$list;
import static grace.lang.Prelude.$string;

public abstract class Match extends Obj {

  protected final Obj result;

  public Match(Obj result, Bool inherits) {
    super(Egal.Value);
    inherits(inherits);

    this.result = result;
  }

  public Obj result(Obj self) {
    return result;
  }

  public static class MatchSucceeded extends Match {

    private final Obj bindings;
    
    public MatchSucceeded(Obj result) {
      this(result, $list());
    }

    public MatchSucceeded(Obj result, Obj bindings) {
      super(result, $true);
      this.bindings = bindings;
    }

    public Obj bindings(Obj self) {
      return bindings;
    }

    public Str asString(Obj self) {
      return $string("SuccessfulMatch(result = " + result + ", bindings ="
          + bindings + ")");
    }

  }
  
  public static class MatchFailed extends Match {
    
    public MatchFailed(Obj result) {
      super(result, $false);
    }
    
    public Str asString(Obj self) {
      return $string("FailedMatch(result = " + result + ")");
    }
    
  }

}
