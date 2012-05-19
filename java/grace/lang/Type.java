package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Bool.$true;
import static grace.lang.Prelude.$list;
import static grace.lang.Prelude.$string;

import java.lang.reflect.Method;

public class Type extends Value {

  private String[] methods;

  public Type(String... methods) {
    super(Egal.Value);
    this.methods = methods;
  }

  public Value matches(Value self, Value o) {
    names: for (String name : methods) {
      Value s = o;

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

      return new MatchFailed(o);
    }

    return new MatchSucceeded(o, $list());
  }

  protected class MatchSucceeded extends Value {

    private final Value result;
    private final Value bindings;

    public MatchSucceeded(Value result, Value bindings) {
      super(Egal.Value);
      inherits($true);

      this.result = result;
      this.bindings = bindings;
    }

    public Value result(Value self) {
      return result;
    }

    public Value bindings(Value self) {
      return bindings;
    }

    public Value asString(Value self) {
      return $string("SuccessfulMatch(result = " + result + ", bindings = "
          + bindings + ")");
    }

  }

  protected class MatchFailed extends Value {

    private final Value result;

    public MatchFailed(Value result) {
      super(Egal.Value);
      inherits($false);

      this.result = result;
    }

    public Value result(Value self) {
      return result;
    }

  }

}
