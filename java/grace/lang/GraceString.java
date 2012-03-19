package grace.lang;

public class GraceString extends GraceObject {
  
  public final String value;

  public GraceString(String value) {
    this.value = value;
  }

  private static String str(GraceObject obj) {
    return ((GraceString) obj).value;
  }

  private static int i(GraceObject obj) {
    return (int) ((GraceNumber) obj).value;
  }

  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return GraceBoolean.evaluate(o instanceof GraceString &&
        value.equals(str(o)));
  }

  // ++
  public GraceObject bin$43$43(GraceObject other) {
    return new GraceString(value + str(other.asString()));
  }

  public GraceObject at(GraceObject index) {
    int i = i(index) - 1;
    return new GraceString(value.substring(i, i + 1));
  }

  // []
  public GraceObject bin$91$93(GraceObject index) {
    int i = i(index) - 1;
    return new GraceString(value.substring(i, i + 1));
  }

  public GraceObject size() {
    return new GraceNumber(value.length());
  }

  public GraceObject replace$with(GraceObject what, GraceObject with) {
    return new GraceString(value.replace(str(what), str(with)));
  }

  public GraceObject subvalueFrom$to(GraceObject from, GraceObject to) {
    return new GraceString(value.substring(i(from), i(to)));
  }

  public GraceObject ord() {
    return new GraceNumber(value.codePointAt(0));
  }

  public GraceObject asString() {
    return this;
  }

  public GraceObject indices() {
    GraceList list = new GraceList();
    int length = value.length();
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
      char[] cs = { value.charAt(i++) };
      return new GraceString(new String(cs));
    }

    public GraceObject havemore() {
      return GraceBoolean.evaluate(i < value.length());
    }

  }

}
