package grace.lang;

public class GraceBoolean extends GraceObject {
  
  public static final GraceBoolean graceTrue  = new GraceBoolean(true);
  public static final GraceBoolean graceFalse = new GraceBoolean(false);

  public static GraceBoolean evaluate(boolean value) {
    return value ? graceTrue : graceFalse;
  }

  public boolean value;

  private GraceBoolean(boolean value) {
    this.value = value;
  }

  private static boolean bool(GraceObject obj) {
    return obj.invoke("ifTrue$else", new GraceBlock(null) {
      public GraceObject apply(GraceObject... params) {
        return graceTrue;
      }
    }, new GraceBlock(null) {
      public GraceObject apply(GraceObject... params) {
        return graceFalse;
      }
    }) == graceTrue;
  }

  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return value ? o : o.invoke("not");
  }

  public GraceObject not() {
    return this == graceTrue ? graceFalse : graceTrue;
  }

  // !
  public GraceObject prefix$33() {
    return this == graceTrue ? graceFalse : graceTrue;
  }

  // &
  public GraceObject bin$38(GraceObject other) {
    return value && bool(other) ? graceTrue : graceFalse;
  }

  // |
  public GraceObject bin$124(GraceObject other) {
    return value || bool(other) ? graceTrue : graceFalse;
  }

  // &&
  public GraceObject bin$38$38(GraceObject other) {
    return value ? other.invoke("apply") : graceFalse;
  }

  // ||
  public GraceObject bin$124$124(GraceObject other) {
    return value ? graceTrue : other.invoke("apply");
  }

  public GraceObject ifTrue(GraceObject block) {
    return value ? block.invoke("apply") : GraceVoid.value;
  }

  public GraceObject ifFalse(GraceObject block) {
    return value ? GraceVoid.value : block.invoke("apply");
  }

  public GraceObject ifTrue$else(GraceObject a, GraceObject b) {
    return (value ? a : b).invoke("apply");
  }

  public GraceObject asString() {
    return new GraceString("" + value);
  }

}
