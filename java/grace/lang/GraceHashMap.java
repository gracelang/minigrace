package grace.lang;

import java.util.Map;
import java.util.HashMap;

public class GraceHashMap extends GraceObject {
	
	private final Map<GraceObject, GraceObject> value =
	    new HashMap<GraceObject, GraceObject>();
	
	// ==
	public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
		return GraceBoolean.evaluate(o instanceof GraceHashMap
		    && value.equals(((GraceHashMap) o).value));
	}
	
	public GraceObject get(GraceObject self, GraceObject key) {
		key = getKey(key);
		
		if (key == null) {
			return nothing;
		}
		
		return value.get(key);
	}
	
	public GraceNothing put(GraceObject self, GraceObject key, GraceObject item) {
		GraceObject other = getKey(key);
		
		if (other != null) {
			value.remove(other);
		}
		
		value.put(key, item);
		
		return nothing;
	}
	
	public GraceBoolean contains(GraceObject self, GraceObject key) {
		return GraceBoolean.evaluate(getKey(key) != null);
	}
	
	private GraceObject getKey(GraceObject eq) {
		for (GraceObject key : value.keySet()) {
			if (((GraceBoolean) key.invoke("bin$61$61", eq)).value) {
				return key;
			}
		}
		
		return null;
	}
	
	public GraceString asString(GraceObject self) {
		String out = "[{";
		boolean first = true;
		for (GraceObject key : value.keySet()) {
			out +=
			    (first ? "" : ", ") + key.asString(key) + ": "
			        + value.get(key).asString(key);
			first = false;
		}
		
		return new GraceString(out + "}]");
	}
	
}
