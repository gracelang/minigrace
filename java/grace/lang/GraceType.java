package grace.lang;

import static grace.lang.GraceBoolean.$false;
import static grace.lang.GraceBoolean.$true;
import static grace.lang.GracePrelude.$list;
import static grace.lang.GracePrelude.$string;

import java.lang.reflect.Method;

public class GraceType extends GraceObject {

  private String[] methods;

  public GraceType(String... methods) {
    super(Egal.Value);
    this.methods = methods;
  }

  public GraceObject matches(GraceObject self, GraceObject o) {
    names: for (String name : methods) {
      GraceObject s = o;

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

  protected class MatchSucceeded extends GraceObject {

    private final GraceObject result;
    private final GraceObject bindings;

    public MatchSucceeded(GraceObject result, GraceObject bindings) {
      super(Egal.Value);
      inherits($true);

      this.result = result;
      this.bindings = bindings;
    }

    public GraceObject result(GraceObject self) {
      return result;
    }

    public GraceObject bindings(GraceObject self) {
      return bindings;
    }

    public GraceObject asString(GraceObject self) {
      return $string("SuccessfulMatch(result = " + result + ", bindings = "
          + bindings + ")");
    }

  }

  protected class MatchFailed extends GraceObject {

    private final GraceObject result;

    public MatchFailed(GraceObject result) {
      super(Egal.Value);
      inherits($false);

      this.result = result;
    }

    public GraceObject result(GraceObject self) {
      return result;
    }

  }

}
