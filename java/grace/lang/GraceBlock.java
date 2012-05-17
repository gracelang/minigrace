package grace.lang;

public abstract class GraceBlock extends GraceObject {
  
  public GraceBlock(final GraceObject outer) {
    super(outer);
  }

  public abstract GraceObject apply(GraceObject self, GraceObject... params);

}
