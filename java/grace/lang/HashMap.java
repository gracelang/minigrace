package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaBoolean;

import java.util.Map;

public class HashMap extends Top {

  private final Map<Obj, Obj> value = new java.util.HashMap<Obj, Obj>();

  public HashMap() {
    super(Egal.Value);
  }

  // ==
  public Bool bin$61$61(Obj self, Obj o) {
    if (o instanceof HashMap) {
      if (!value.equals(((HashMap) o).value)) {
        return $false;
      }

      return (Bool) super.bin$61$61(self, o);
    }

    Obj $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }

    return $false;
  }

  public Obj get(Obj self, Obj key) {
    key = getKey(key);

    if (key == null) {
      return nothing;
    }

    return value.get(key);
  }

  public Nothing put(Obj self, Obj key, Obj item) {
    Obj other = getKey(key);

    if (other != null) {
      value.remove(other);
    }

    value.put(key, item);

    return nothing;
  }

  public Bool contains(Obj self, Obj key) {
    return $boolean(getKey(key) != null);
  }

  private Obj getKey(Obj eq) {
    for (Obj key : value.keySet()) {
      if ($javaBoolean(key.invoke("bin$61$61", eq))) {
        return key;
      }
    }

    return null;
  }

  public Str asString(Obj self) {
    String out = "[{";
    boolean first = true;
    for (Obj key : value.keySet()) {
      out +=
          (first ? "" : ", ") + key.invoke("asString") + ": "
              + value.get(key).invoke("asString");
      first = false;
    }

    return new Str(out + "}]");
  }

}
