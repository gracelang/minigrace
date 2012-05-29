package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaInteger;

import java.util.ArrayList;

public class List extends Top {

  private final java.util.List<Obj> value = new ArrayList<Obj>();

  public List() {
    super(Egal.Value);
  }

  public List(Obj... items) {
    super(Egal.Value);

    for (Obj item : items) {
      value.add(item);
    }
  }

  // ==
  public Bool bin$61$61(Obj self, Obj o) {
    if (o instanceof List) {
      if (!value.equals(((List) o).value)) {
        return $false;
      }

      return (Bool) super.bin$61$61(self, o);
    }

    Obj $super = o.getSuper();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }

    return $false;
  }

  public Nothing push(Obj self, Obj item) {
    value.add(item);
    return nothing;
  }

  public Num size(Obj self) {
    return new Num(value.size());
  }

  public Obj pop(Obj self) {
    return value.remove(value.size() - 1);
  }

  public Obj at(Obj self, Obj index) {
    return value.get($javaInteger(index) - 1);
  }

  // []
  public Obj bin$91$93(Obj self, Obj index) {
    return value.get($javaInteger(index) - 1);
  }

  public Nothing at$put(Obj self, Obj index, Obj item) {
  	int i = $javaInteger(index) - 1;

    if (i == value.size()) {
      value.add(item);
    } else {
      value.set(i, item);
    }

    return nothing;
  }

  // []:=
  public Nothing $91$93$58$61(Obj self, Obj index, Obj item) {
    int i = $javaInteger(index) - 1;

    if (i == value.size()) {
      value.add(item);
    } else {
      value.set(i, item);
    }

    return nothing;
  }

  public Bool contains(Obj self, Obj item) {
    for (final Obj val : value) {
      if (val.equals(item)) {
        return Bool.$true;
      }
    }

    return Bool.$false;
  }

  public List indices(Obj self) {
    List list = new List();
    int length = value.size();
    for (int i = 1; i <= length; i++) {
      list.push(list, new Num(i));
    }

    return list;
  }

  public GraceListIterator iter(Obj self) {
    return new GraceListIterator();
  }

  public class GraceListIterator extends Obj {

    private int i = 0;

    public GraceListIterator() {
      super(Egal.Value);
    }

    public Obj next(Obj self) {
      return value.get(i++);
    }

    public Bool havemore(Obj self) {
      return $boolean(i < value.size());
    }

  }

  public Obj first(Obj self) {
    return value.get(0);
  }

  public Obj last(Obj self) {
    return value.get(value.size() - 1);
  }

  public Str asString(Obj self) {
  	if (value.size() == 0) {
  		return new Str("[]");
  	}
  	
    String out = "[" + value.size() + ": ";
    boolean first = true;
    for (Obj item : value) {
      out += (first ? "" : ", ") + item.invoke("asString");
      first = false;
    }

    return new Str(out + "]");
  }
  
  public Obj[] toArray() {
    return value.toArray(new Obj[value.size()]);
  }

}
