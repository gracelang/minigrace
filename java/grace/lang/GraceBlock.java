package grace.lang;

public abstract class GraceBlock extends GraceObject {
  
  public GraceBlock() {
    super(Egal.Closure);
  }
  
  public GraceBlock(GraceObject outer) {
    super(Egal.Closure, outer);
  }

  public abstract GraceObject apply(GraceObject self, GraceObject... params);

}
