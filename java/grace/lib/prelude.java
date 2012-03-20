package grace.lib;

import grace.lang.*;

public final class prelude extends GraceObject {

  public GraceObject while$do(GraceObject w, GraceObject d) {
    while (((GraceBoolean) w.invoke("apply")).value) {
      d.invoke("apply");
    }

    return GraceVoid.value;
  }

  public GraceObject for$do(GraceObject f, GraceObject d) {
    for (GraceObject item : f) {
      d.invoke("apply", item);
    }

    return GraceVoid.value;
  }

}
