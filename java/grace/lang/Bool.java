package grace.lang;

import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$javaBoolean;
import static grace.lang.Prelude.$list;

public class Bool extends Top {

  public static final Bool $true = new Bool(true);
  public static final Bool $false = new Bool(false);

  public boolean value;

  private Bool(boolean value) {
    super(Egal.Value);
    
    this.value = value;
  }

  public Bool not(Obj self) {
    return value ? $false : $true;
  }
  
  // ==
  public Bool bin$61$61(Obj self, Obj o) {
  	if ($javaBoolean(o) != value) {
  		return $false;
  	}
  	
  	return (Bool) super.bin$61$61(self, o);
  }

  // !
  public Bool prefix$33(Obj self) {
    return value ? $false : $true;
  }

  // &
  public Bool bin$38(Obj self, Obj other) {
    return value && $javaBoolean(other) ? $true : $false;
  }

  // |
  public Bool bin$124(Obj self, Obj other) {
    return value || $javaBoolean(other) ? $true : $false;
  }

  // &&
  public Obj bin$38$38(Obj self, Obj other) {
    try {
      return value ? other.invoke("apply") : $false;
    } catch (RuntimeException rex) {
    	System.out.println(rex.getMessage());
      return bin$124(self, other);
    }
  }

  // ||
  public Obj bin$124$124(Obj self, Obj other) {
    try {
      return value ? $true : other.invoke("apply");
    } catch (RuntimeException rex) {
      return bin$124(self, other);
    }
  }

  public Obj ifTrue(Obj self, Obj block) {
    return value ? block.invoke("apply") : nothing;
  }

  public Obj ifFalse(Obj self, Obj block) {
    return value ? nothing : block.invoke("apply");
  }

  public Obj
      ifTrue$else(Obj self, Obj a, Obj b) {
    return (value ? a : b).invoke("apply");
  }

  public Str asString(Obj self) {
    return new Str(Boolean.toString(value));
  }
  
  public Obj match(Obj self, Obj against) {
    Obj match = Types.Boolean.match(Types.Boolean, against);
    if (!$javaBoolean(match)) {
      return match;
    }
    
    if ($javaBoolean(against) == value) {
      return new Type.MatchSucceeded(against, $list(against));
    }
    
    return new Type.MatchFailed(against);
  }

}
