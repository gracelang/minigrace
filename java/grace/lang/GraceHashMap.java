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
    key = getKey(key);

    if (key == null) {
      return GraceVoid.value;
    }

    return value.get(key);
  }

  public GraceObject put(GraceObject key, GraceObject item) {
    if (key instanceof GraceString) {
      String value = ((GraceString) key).value;
      if (value.contains("=")) {
        System.out.println(value);
      }
    }

    GraceObject other = getKey(key);

    if (other != null) {
      value.remove(other);
    }

    value.put(key, item);

    return GraceVoid.value;
  }

  public GraceObject contains(GraceObject key) {
    return GraceBoolean.evaluate(getKey(key) != null);
  }

  private GraceObject getKey(GraceObject eq) {
    for (GraceObject key : value.keySet()) {
      if (((GraceBoolean) key.invoke("bin$61$61", eq)).value) {
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

    return new GraceString(out + "}]");
  }

}
