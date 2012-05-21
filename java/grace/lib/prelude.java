package grace.lib;

import grace.lang.*;

public final class prelude extends Prelude {

  private static prelude $module;
  public static prelude $module() {
    return $module == null ? $module = new prelude() : $module;
  }
  
  private prelude() {}

  public Nothing while$do(Obj self, Obj w, Obj d) {
    while (((Bool) w.invoke("apply")).value) {
      d.invoke("apply");
    }

    return nothing;
  }

  public Nothing for$do(Obj self, Obj f, Obj d) {
    Obj iter = f.invoke("iter");
    while ($javaBoolean(iter.invoke("havemore"))) {
      d.invoke("apply", iter.invoke("next"));
    }

    return nothing;
  }

}
