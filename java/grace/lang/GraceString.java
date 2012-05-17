package grace.lang;

public class GraceString extends GraceObject {
	
	public final String value;
	
	public GraceString(String value) {
		this.value = value;
	}
	
	private static String str(GraceObject obj) {
		return ((GraceString) obj).value;
	}
	
	private static int i(GraceObject obj) {
		return (int) ((GraceNumber) obj).value;
	}
	
	// ==
	public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
		return GraceBoolean.evaluate(o instanceof GraceString
		    && value.equals(str(o)));
	}
	
	// ++
	public GraceString bin$43$43(GraceObject self, GraceObject other) {
		return new GraceString(value + str(other.asString(other)));
	}
	
	public GraceString at(GraceObject self, GraceObject index) {
		int i = i(index) - 1;
		return new GraceString(value.substring(i, i + 1));
	}
	
	// []
	public GraceString bin$91$93(GraceObject self, GraceObject index) {
		int i = i(index) - 1;
		return new GraceString(value.substring(i, i + 1));
	}
	
	public GraceNumber size(GraceObject self) {
		return new GraceNumber(value.length());
	}
	
	public GraceString replace$with(GraceObject self, GraceObject what,
	    GraceObject with) {
		return new GraceString(value.replace(str(what), str(with)));
	}
	
	public GraceString substringFrom$to(GraceObject self, GraceObject from,
	    GraceObject to) {
		int i = i(to);
		if (i >= value.length()) {
			return new GraceString(value.substring(i(from) - 1));
		}
		return new GraceString(value.substring(i(from) - 1, i));
	}
	
	public GraceNumber ord(GraceObject self) {
		return new GraceNumber(value.codePointAt(0));
	}
	
	public GraceString asString(GraceObject self) {
		return this;
	}
	
	public GraceList indices(GraceObject self) {
		GraceList list = new GraceList();
		int length = value.length();
		for (int i = 0; i < length; i++) {
			list.push(list, new GraceNumber(i));
		}
		
		return list;
	}
	
	public GraceStringIterator iter(GraceObject self) {
		return new GraceStringIterator();
	}
	
	public class GraceStringIterator extends GraceObject {
		
		private int i = 0;
		
		public GraceObject next(GraceObject self) {
			char[] cs = { value.charAt(i++) };
			return new GraceString(new String(cs));
		}
		
		public GraceBoolean havemore(GraceObject self) {
			return GraceBoolean.evaluate(i < value.length());
		}
		
	}
	
	public String toString() {
		return value;
	}
	
}
