package grace.lang;

import java.util.List;
import java.util.ArrayList;

public class GraceList extends GraceObject {
  
  private final List<GraceObject> value = new ArrayList<GraceObject>();

  private static int i(GraceObject obj) {
    return (int) ((GraceNumber) obj).value;
  }

  public GraceList() {}

  public GraceList(GraceObject... items) {
    for (GraceObject item : items) {
      value.add(item);
    }
  }


  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return GraceBoolean.evaluate(o instanceof GraceList &&
        value.equals(((GraceList) o).value));
  }

  public GraceObject push(GraceObject item) {
    value.add(item);

    return GraceVoid.value;
  }

  public GraceObject size() {
    return new GraceNumber(value.size());
  }

  public GraceObject pop() {
    return value.remove(value.size() - 1);
  }

  public GraceObject at(GraceObject index) {
    return value.get(i(index));
  }

  // []
  public GraceObject bin$91$93(GraceObject index) {
    return value.get(i(index) - 1);
  }

  public GraceObject at$put(GraceObject index, GraceObject item) {
    value.add(i(index), item);

    return GraceVoid.value;
  }

  // []:=
  public GraceObject $91$93$58$61(GraceObject index, GraceObject item) {
    int i = i(index) - 1;

    if (i == value.size()) {
      value.add(item);
    } else {
      value.set(i, item);
    }

    return GraceVoid.value;
  }

  public GraceObject contains(GraceObject item) {
    for (final GraceObject val : value) {
      if (val.equals(item)) {
        return GraceBoolean.graceTrue;
      }
    }

    return GraceBoolean.graceFalse;
  }

  public GraceObject indices() {
    GraceList list = new GraceList();
    int length = value.size();
    for (int i = 0; i < length; i++) {
      list.push(new GraceNumber(i));
    }

    return list;
  }

  public GraceObject iter() {
    return new Iterator();
  }

  public class Iterator extends GraceObject {
    
    private int i = 0;

    public GraceObject next() {
      return value.get(i++);
    }

    public GraceObject havemore() {
      return GraceBoolean.evaluate(i < value.size());
    }

  }

  public GraceObject first() {
    return value.get(0);
  }

  public GraceObject last() {
    return value.get(value.size() - 1);
  }

  public GraceObject asString() {
    String out = "[" + value.size() + ": ";
    boolean first = true;
    for (GraceObject item : value) {
      out += (first ? "" : ", ") + item.asString();
      first = false;
    }

    return new GraceString(out + "]");
  }

}
