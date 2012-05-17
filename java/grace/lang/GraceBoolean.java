package grace.lang;

public class GraceBoolean extends GraceObject {
	
	public static final GraceBoolean graceTrue = new GraceBoolean(true);
	public static final GraceBoolean graceFalse = new GraceBoolean(false);
	
	public static GraceBoolean evaluate(boolean value) {
		return value ? graceTrue : graceFalse;
	}
	
	public static boolean evaluate(GraceObject value) {
		return value.invoke("ifTrue$else", new GraceBlock(null) {
			
			public GraceObject apply(GraceObject self, GraceObject... params) {
				return graceTrue;
			}
			
		}, new GraceBlock(null) {
			
			public GraceObject apply(GraceObject self, GraceObject... params) {
				return graceFalse;
			}
			
		}) == graceTrue;
	}
	
	
	public boolean value;
	
	private GraceBoolean(boolean value) {
		this.value = value;
	}
	
	public GraceBoolean not(GraceObject self) {
		return value ? graceFalse : graceTrue;
	}
	
	// !
	public GraceBoolean prefix$33(GraceObject self) {
		return value ? graceFalse : graceTrue;
	}
	
	// &
	public GraceBoolean bin$38(GraceObject self, GraceObject other) {
		return value && evaluate(other) ? graceTrue : graceFalse;
	}
	
	// |
	public GraceBoolean bin$124(GraceObject self, GraceObject other) {
		return value || evaluate(other) ? graceTrue : graceFalse;
	}
	
	// &&
	public GraceObject bin$38$38(GraceObject self, GraceObject other) {
		try {
			return value ? other.invoke("apply") : graceFalse;
		} catch (RuntimeException rex) {
			return bin$124(self, other);
		}
	}
	
	// ||
	public GraceObject bin$124$124(GraceObject self, GraceObject other) {
		try {
			return value ? graceTrue : other.invoke("apply");
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
