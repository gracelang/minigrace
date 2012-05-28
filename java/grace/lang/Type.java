package grace.lang;

import static grace.lang.Prelude.$list;

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

      return new Match.MatchFailed(against);
    }

    return new Match.MatchSucceeded(against, $list());
  }

}
