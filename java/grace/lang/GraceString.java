package grace.lang;

import static grace.lang.GraceBoolean.$false;
import static grace.lang.GraceNothing.nothing;
import static grace.lang.GracePrelude.$boolean;
import static grace.lang.GracePrelude.$javaInteger;
import static grace.lang.GracePrelude.$javaString;

public class GraceString extends GraceObject {

  public final String value;

  public GraceString(String value) {
    super(Egal.Value);
    this.value = value;
  }

  // ==
  public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
    if (o instanceof GraceString) {
      return $boolean(value.equals(((GraceString) o).value));
    }

    GraceObject $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }

    return $false;
  }

  // ++
  public GraceString bin$43$43(GraceObject self, GraceObject other) {
    return new GraceString(value + $javaString(other.asString(other)));
  }

  public GraceString at(GraceObject self, GraceObject index) {
    int i = $javaInteger(index) - 1;
    return new GraceString(value.substring(i, i + 1));
  }

  // []
  public GraceString bin$91$93(GraceObject self, GraceObject index) {
    int i = $javaInteger(index) - 1;
    return new GraceString(value.substring(i, i + 1));
  }

  public GraceNumber size(GraceObject self) {
    return new GraceNumber(value.length());
  }

  public GraceString replace$with(GraceObject self, GraceObject what,
      GraceObject with) {
    return new GraceString(value.replace($javaString(what), $javaString(with)));
  }

  public GraceString substringFrom$to(GraceObject self, GraceObject from,
      GraceObject to) {
    int i = $javaInteger(to);
    if (i >= value.length()) {
      return new GraceString(value.substring($javaInteger(from) - 1));
    }
    return new GraceString(value.substring($javaInteger(from) - 1, i));
  }

  public GraceNumber ord(GraceObject self) {
    return new GraceNumber(value.codePointAt(0));
  }

  public GraceString asString(GraceObject self) {
    return this;
  }

  public GraceList indices(GraceObject self) {
    GraceList list = new GraceList();
    int length = value.length();
    for (int i = 0; i < length; i++) {
      list.push(list, new GraceNumber(i));
    }

    return list;
  }

  public GraceStringIterator iter(GraceObject self) {
    return new GraceStringIterator();
  }

  public class GraceStringIterator extends GraceObject {

    private int i = 0;
    
    private GraceStringIterator() {
      super(Egal.Pointer);
    }

    public GraceObject next(GraceObject self) {
      char[] cs = { value.charAt(i++) };
      return new GraceString(new String(cs));
    }

    public GraceBoolean havemore(GraceObject self) {
      return $boolean(i < value.length());
    }

  }

  public String toString() {
    return value;
  }

}
