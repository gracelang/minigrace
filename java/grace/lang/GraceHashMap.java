package grace.lang;

import static grace.lang.GraceBoolean.$false;
import static grace.lang.GraceNothing.nothing;
import static grace.lang.GracePrelude.$boolean;
import static grace.lang.GracePrelude.$javaBoolean;

import java.util.HashMap;
import java.util.Map;

public class GraceHashMap extends GraceObject {

  private final Map<GraceObject, GraceObject> value =
      new HashMap<GraceObject, GraceObject>();
  
  public GraceHashMap() {
    super(Egal.Value);
  }

  // ==
  public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
    if (o instanceof GraceHashMap) {
      return $boolean(value.equals(((GraceHashMap) o).value));
    }
    
    GraceObject $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }
    
    return $false;
  }

  public GraceObject get(GraceObject self, GraceObject key) {
    key = getKey(key);

    if (key == null) {
      return nothing;
    }

    return value.get(key);
  }

  public GraceNothing put(GraceObject self, GraceObject key, GraceObject item) {
    GraceObject other = getKey(key);

    if (other != null) {
      value.remove(other);
    }

    value.put(key, item);

    return nothing;
  }

  public GraceBoolean contains(GraceObject self, GraceObject key) {
    return $boolean(getKey(key) != null);
  }

  private GraceObject getKey(GraceObject eq) {
    for (GraceObject key : value.keySet()) {
      if ($javaBoolean(key.bin$61$61(key, eq))) {
        return key;
      }
    }

    return null;
  }

  public GraceString asString(GraceObject self) {
    String out = "[{";
    boolean first = true;
    for (GraceObject key : value.keySet()) {
      out +=
          (first ? "" : ", ") + key.asString(key) + ": "
              + value.get(key).asString(key);
      first = false;
    }

    return new GraceString(out + "}]");
  }

}
