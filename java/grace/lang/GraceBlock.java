package grace.lang;

public abstract class GraceBlock extends GraceObject {
  
  public GraceBlock(final GraceObject outer) {
    super(outer, false);
  }

  public abstract GraceObject apply(GraceObject... params);

}
