package grace.lang;

import java.lang.reflect.Method;

public class GraceType extends GraceObject {
  
	private String[] methods;
	
  public GraceType(String... methods) {
    this.methods = methods;
  }
  
  public GraceObject matches(GraceObject o) {
  	names: for (String name : methods) {
  		GraceObject s = o;
  		
  		while (s != null) {
  			Method[] methods;
  			
  			try {
  				methods = s.getClass().getDeclaredMethods();
  			} catch (SecurityException scx) {
  				throw new RuntimeException("Unable to retrieve method list");
  			}
  			
  			for (Method method : methods) {
  				if (method.getName().equals(name)) {
  					continue names;
  				}
  			}
  			
  			s = s.$super;
  		}
  		
  		return new MatchFailed(o);
  	}
  
  	return new MatchSucceeded(o, $list());
  }
  
  private class MatchSucceeded extends GraceObject {
  	
  	private final GraceObject result;
  	private final GraceObject bindings;
  	
  	public MatchSucceeded(GraceObject result, GraceObject bindings) {
  		super($true, true);
  		
  		this.result = result;
  		this.bindings = bindings;
  	}
  	
  	@SuppressWarnings("unused")
		public GraceObject result() {
  		return result;
  	}
  	
  	@SuppressWarnings("unused")
		public GraceObject bindings() {
  		return bindings;
  	}
  	
  	public GraceObject asString() {
  		return $str("SuccessfulMatch(result = " + result +
  				", bindings = " + bindings + ")");
  	}
  	
  }
  
  private class MatchFailed extends GraceObject {
  	
  	private final GraceObject result;
  	
  	public MatchFailed(GraceObject result) {
  		super($false, true);
  		
  		this.result = result;
  	}
  	
  	@SuppressWarnings("unused")
		public GraceObject result() {
  		return result;
  	}
  	
  }

}
