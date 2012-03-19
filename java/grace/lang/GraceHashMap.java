package grace.lang;

import java.util.Map;
import java.util.HashMap;

public class GraceHashMap extends GraceObject {
  
  private final Map<GraceObject, GraceObject> value =
      new HashMap<GraceObject, GraceObject>();

  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return GraceBoolean.evaluate(o instanceof GraceHashMap &&
        value.equals(((GraceHashMap) o).value));
  }

  public GraceObject get(GraceObject key) {
    return value.get(getKey(key));
  }

  public GraceObject put(GraceObject key, GraceObject item) {
    value.put(key, item);

    return GraceVoid.value;
  }

  public GraceObject contains(GraceObject key) {
    return GraceBoolean.evaluate(getKey(key) != null);
  }

  private GraceObject getKey(final GraceObject eq) {
    for (final GraceObject key : value.keySet()) {
      if (key.equals(eq)) {
        return key;
      }
    }

    return null;
  }

  public GraceObject asString() {
    String out = "[{";
    boolean first = true;
    for (GraceObject key : value.keySet()) {
      out += (first ? "" : ", ") + key.asString() + ": " +
          value.get(key).asString();
      first = false;
    }

    return new GraceString(out + "]");
  }

}
