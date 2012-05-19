package grace.lang;

import static grace.lang.GraceBoolean.$false;
import static grace.lang.GraceNothing.nothing;
import static grace.lang.GracePrelude.$boolean;
import static grace.lang.GracePrelude.$javaInteger;

import java.util.ArrayList;
import java.util.List;

public class GraceList extends GraceObject {

  private final List<GraceObject> value = new ArrayList<GraceObject>();

  public GraceList() {
    super(Egal.Value);
  }

  public GraceList(GraceObject... items) {
    super(Egal.Value);

    for (GraceObject item : items) {
      value.add(item);
    }
  }

  // ==
  public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
    if (o instanceof GraceList) {
      return $boolean(value.equals(((GraceList) o).value));
    }
    
    GraceObject $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }
    
    return $false;
  }

  public GraceNothing push(GraceObject self, GraceObject item) {
    value.add(item);
    return nothing;
  }

  public GraceNumber size(GraceObject self) {
    return new GraceNumber(value.size());
  }

  public GraceObject pop(GraceObject self) {
    return value.remove(value.size() - 1);
  }

  public GraceObject at(GraceObject self, GraceObject index) {
    return value.get($javaInteger(index));
  }

  // []
  public GraceObject bin$91$93(GraceObject self, GraceObject index) {
    return value.get($javaInteger(index) - 1);
  }

  public GraceNothing at$put(GraceObject self, GraceObject index,
      GraceObject item) {
    value.add($javaInteger(index), item);
    return nothing;
  }

  // []:=
  public GraceNothing $91$93$58$61(GraceObject self, GraceObject index,
      GraceObject item) {
    int i = $javaInteger(index) - 1;

    if (i == value.size()) {
      value.add(item);
    } else {
      value.set(i, item);
    }

    return nothing;
  }

  public GraceBoolean contains(GraceObject self, GraceObject item) {
    for (final GraceObject val : value) {
      if (val.equals(item)) {
        return GraceBoolean.$true;
      }
    }

    return GraceBoolean.$false;
  }

  public GraceList indices(GraceObject self) {
    GraceList list = new GraceList();
    int length = value.size();
    for (int i = 0; i < length; i++) {
      list.push(list, new GraceNumber(i));
    }

    return list;
  }

  public GraceListIterator iter(GraceObject self) {
    return new GraceListIterator();
  }

  public class GraceListIterator extends GraceObject {

    private int i = 0;

    public GraceListIterator() {
      super(Egal.Value);
    }

    public GraceObject next(GraceObject self) {
      return value.get(i++);
    }

    public GraceBoolean havemore(GraceObject self) {
      return $boolean(i < value.size());
    }

  }

  public GraceObject first(GraceObject self) {
    return value.get(0);
  }

  public GraceObject last(GraceObject self) {
    return value.get(value.size() - 1);
  }

  public GraceString asString(GraceObject self) {
    String out = "[" + value.size() + ": ";
    boolean first = true;
    for (GraceObject item : value) {
      out += (first ? "" : ", ") + item.asString(item);
      first = false;
    }

    return new GraceString(out + "]");
  }

}
