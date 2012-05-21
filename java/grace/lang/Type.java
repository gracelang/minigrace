package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Bool.$true;
import static grace.lang.Prelude.$list;
import static grace.lang.Prelude.$string;

import java.lang.reflect.Method;

public class Type extends Obj {

  private String[] methods;

  public Type(String... methods) {
    super(Egal.Pointer);
    this.methods = methods;
  }

  public Obj match(Obj self, Obj against) {
    names: for (String name : methods) {
      Obj s = against;

      while (s != null) {
        Method[] methods;

        try {
          methods = s.getClass().getDeclaredMethods();
        } catch (SecurityException scx) {
          throw new RuntimeException("Unable to retrieve method list");
        }

        for (Method method : methods) {
          if (method.getName().equals(name)) {
            continue names;
          }
        }

        s = s.$super();
      }

      return new MatchFailed(against);
    }

    return new MatchSucceeded(against, $list(against));
  }

  protected static class MatchSucceeded extends Obj {

    private final Obj result;
    private final Obj bindings;

    public MatchSucceeded(Obj result, Obj bindings) {
      super(Egal.Value);
      inherits($true);

      this.result = result;
      this.bindings = bindings;
    }

    public Obj result(Obj self) {
      return result;
    }

    public Obj bindings(Obj self) {
      return bindings;
    }

    public Obj asString(Obj self) {
      return $string("SuccessfulMatch(result = " + result + ", bindings = "
          + bindings + ")");
    }

  }

  protected static class MatchFailed extends Obj {

    private final Obj result;

    public MatchFailed(Obj result) {
      super(Egal.Value);
      inherits($false);

      this.result = result;
    }

    public Obj result(Obj self) {
      return result;
    }

  }

}
