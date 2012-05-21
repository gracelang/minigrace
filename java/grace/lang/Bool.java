package grace.lang;

import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$javaBoolean;

public class Bool extends Value {

  public static final Bool $true = new Bool(true);
  public static final Bool $false = new Bool(false);

  public boolean value;

  private Bool(boolean value) {
    super(Egal.Value);
    
    this.value = value;
  }

  public Bool not(Value self) {
    return value ? $false : $true;
  }
  
  // ==
  public Bool bin$61$61(Value self, Value o) {
  	if ($javaBoolean(o) != value) {
  		return $false;
  	}
  	
  	return (Bool) super.bin$61$61(self, o);
  }

  // !
  public Bool prefix$33(Value self) {
    return value ? $false : $true;
  }

  // &
  public Bool bin$38(Value self, Value other) {
    return value && $javaBoolean(other) ? $true : $false;
  }

  // |
  public Bool bin$124(Value self, Value other) {
    return value || $javaBoolean(other) ? $true : $false;
  }

  // &&
  public Value bin$38$38(Value self, Value other) {
    try {
      return value ? other.invoke("apply") : $false;
    } catch (RuntimeException rex) {
    	System.out.println(rex.getMessage());
      return bin$124(self, other);
    }
  }

  // ||
  public Value bin$124$124(Value self, Value other) {
    try {
      return value ? $true : other.invoke("apply");
    } catch (RuntimeException rex) {
      return bin$124(self, other);
    }
  }

  public Value ifTrue(Value self, Value block) {
    return value ? block.invoke("apply") : nothing;
  }

  public Value ifFalse(Value self, Value block) {
    return value ? nothing : block.invoke("apply");
  }

  public Value
      ifTrue$else(Value self, Value a, Value b) {
    return (value ? a : b).invoke("apply");
  }

  public Str asString(Value self) {
    return new Str(Boolean.toString(value));
  }

}
