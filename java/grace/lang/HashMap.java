package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaBoolean;

import java.util.Map;

public class HashMap extends Value {

  private final Map<Value, Value> value =
      new java.util.HashMap<Value, Value>();
  
  public HashMap() {
    super(Egal.Value);
  }

  // ==
  public Bool bin$61$61(Value self, Value o) {
    if (o instanceof HashMap) {
      if (!value.equals(((HashMap) o).value)) {
      	return $false;
      }
      
      return (Bool) super.bin$61$61(self, o);
    }
    
    Value $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }
    
    return $false;
  }

  public Value get(Value self, Value key) {
    key = getKey(key);

    if (key == null) {
      return nothing;
    }

    return value.get(key);
  }

  public Nothing put(Value self, Value key, Value item) {
    Value other = getKey(key);

    if (other != null) {
      value.remove(other);
    }

    value.put(key, item);

    return nothing;
  }

  public Bool contains(Value self, Value key) {
    return $boolean(getKey(key) != null);
  }

  private Value getKey(Value eq) {
    for (Value key : value.keySet()) {
      if ($javaBoolean(key.bin$61$61(key, eq))) {
        return key;
      }
    }

    return null;
  }

  public Str asString(Value self) {
    String out = "[{";
    boolean first = true;
    for (Value key : value.keySet()) {
      out +=
          (first ? "" : ", ") + key.asString(key) + ": "
              + value.get(key).asString(key);
      first = false;
    }

    return new Str(out + "}]");
  }

}
