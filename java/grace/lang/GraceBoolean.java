package grace.lang;

import static grace.lang.GraceNothing.nothing;
import static grace.lang.GracePrelude.$javaBoolean;

public class GraceBoolean extends GraceObject {

  public static final GraceBoolean $true = new GraceBoolean(true);
  public static final GraceBoolean $false = new GraceBoolean(false);

  public boolean value;

  private GraceBoolean(boolean value) {
    super(Egal.Value);
    
    this.value = value;
  }

  public GraceBoolean not(GraceObject self) {
    return value ? $false : $true;
  }

  // !
  public GraceBoolean prefix$33(GraceObject self) {
    return value ? $false : $true;
  }

  // &
  public GraceBoolean bin$38(GraceObject self, GraceObject other) {
    return value && $javaBoolean(other) ? $true : $false;
  }

  // |
  public GraceBoolean bin$124(GraceObject self, GraceObject other) {
    return value || $javaBoolean(other) ? $true : $false;
  }

  // &&
  public GraceObject bin$38$38(GraceObject self, GraceObject other) {
    try {
      return value ? other.invoke("apply") : $false;
    } catch (RuntimeException rex) {
      return bin$124(self, other);
    }
  }

  // ||
  public GraceObject bin$124$124(GraceObject self, GraceObject other) {
    try {
      return value ? $true : other.invoke("apply");
    } catch (RuntimeException rex) {
      return bin$124(self, other);
    }
  }

  public GraceObject ifTrue(GraceObject self, GraceObject block) {
    return value ? block.invoke("apply") : nothing;
  }

  public GraceObject ifFalse(GraceObject self, GraceObject block) {
    return value ? nothing : block.invoke("apply");
  }

  public GraceObject
      ifTrue$else(GraceObject self, GraceObject a, GraceObject b) {
    return (value ? a : b).invoke("apply");
  }

  public GraceString asString(GraceObject self) {
    return new GraceString(Boolean.toString(value));
  }

}
