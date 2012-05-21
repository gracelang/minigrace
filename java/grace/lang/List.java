package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaInteger;

import java.util.ArrayList;

public class List extends Value {

  private final java.util.List<Value> value = new ArrayList<Value>();

  public List() {
    super(Egal.Value);
  }

  public List(Value... items) {
    super(Egal.Value);

    for (Value item : items) {
      value.add(item);
    }
  }

  // ==
  public Bool bin$61$61(Value self, Value o) {
    if (o instanceof List) {
      if (!value.equals(((List) o).value)) {
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

  public Nothing push(Value self, Value item) {
    value.add(item);
    return nothing;
  }

  public Num size(Value self) {
    return new Num(value.size());
  }

  public Value pop(Value self) {
    return value.remove(value.size() - 1);
  }

  public Value at(Value self, Value index) {
    return value.get($javaInteger(index));
  }

  // []
  public Value bin$91$93(Value self, Value index) {
    return value.get($javaInteger(index) - 1);
  }

  public Nothing at$put(Value self, Value index,
      Value item) {
    value.add($javaInteger(index), item);
    return nothing;
  }

  // []:=
  public Nothing $91$93$58$61(Value self, Value index,
      Value item) {
    int i = $javaInteger(index) - 1;

    if (i == value.size()) {
      value.add(item);
    } else {
      value.set(i, item);
    }

    return nothing;
  }

  public Bool contains(Value self, Value item) {
    for (final Value val : value) {
      if (val.equals(item)) {
        return Bool.$true;
      }
    }

    return Bool.$false;
  }

  public List indices(Value self) {
    List list = new List();
    int length = value.size();
    for (int i = 0; i < length; i++) {
      list.push(list, new Num(i));
    }

    return list;
  }

  public GraceListIterator iter(Value self) {
    return new GraceListIterator();
  }

  public class GraceListIterator extends Value {

    private int i = 0;

    public GraceListIterator() {
      super(Egal.Value);
    }

    public Value next(Value self) {
      return value.get(i++);
    }

    public Bool havemore(Value self) {
      return $boolean(i < value.size());
    }

  }

  public Value first(Value self) {
    return value.get(0);
  }

  public Value last(Value self) {
    return value.get(value.size() - 1);
  }

  public Str asString(Value self) {
    String out = "[" + value.size() + ": ";
    boolean first = true;
    for (Value item : value) {
      out += (first ? "" : ", ") + item.asString(item);
      first = false;
    }

    return new Str(out + "]");
  }

}
