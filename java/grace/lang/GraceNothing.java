package grace.lang;

public final class GraceNothing extends GraceObject {
  
  public static final GraceNothing nothing = new GraceNothing();

  private GraceNothing() {
    super(Egal.Value);
  }

}
