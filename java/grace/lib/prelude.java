package grace.lib;

import grace.lang.*;

public final class prelude extends GraceObject {

  public GraceNothing while$do(GraceObject self, GraceObject w, GraceObject d) {
    while (((GraceBoolean) w.invoke("apply")).value) {
      d.invoke("apply");
    }

    return nothing;
  }

  public GraceNothing for$do(GraceObject self, GraceObject f, GraceObject d) {
    for (GraceObject item : f) {
      d.invoke("apply", item);
    }

    return nothing;
  }

}
