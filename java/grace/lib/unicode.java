package grace.lib;

import grace.lang.*;

public final class unicode extends GraceObject {
	
	private static unicode $module;
	
	public static unicode $module() {
		return $module == null ? $module = new unicode() : $module;
	}
	
	private static boolean isStr(GraceObject str) {
		return str instanceof GraceString;
	}
	
	private static char c(GraceObject str) {
		return ((GraceString) str).value.charAt(0);
	}
	
	private static int i(GraceObject num) {
		return (int) ((GraceNumber) num).value;
	}
	
	public GraceString name(GraceObject self, GraceObject str) {
		return new GraceString("");
	}
	
	public GraceString category(GraceObject self, GraceObject str) {
		return new GraceString("");
	}
	
	public GraceNumber combining(GraceObject self, GraceObject str) {
		return new GraceNumber(0);
	}
	
	public GraceBoolean mirrored(GraceObject self, GraceObject str) {
		return Character.isMirrored(c(str)) ? $true : $false;
	}
	
	public GraceString bidirectional(GraceObject self, GraceObject str) {
		return new GraceString("");
	}
	
	public GraceBoolean iscategory(GraceObject self, GraceObject str,
	    GraceObject cat) {
		return $false;
	}
	
	public GraceBoolean isSeparator(GraceObject self, GraceObject str) {
		if (isStr(str)) {
			char c = c(str);
			if (c == '\n' || c == '\r') {
				return $false;
			}
			
			return Character.isWhitespace(c) ? $true : $false;
		}
		
		int i = i(str);
		if (i == 10 || i == 13) {
			return $false;
		}
		
		return Character.isWhitespace(i(str)) ? $true : $false;
	}
	
	public GraceBoolean isControl(GraceObject self, GraceObject str) {
		if (isStr(str)) {
			return Character.getType(c(str)) == Character.CONTROL ? $true : $false;
		}
		return Character.getType(i(str)) == Character.CONTROL ? $true : $false;
	}
	
	public GraceBoolean isLetter(GraceObject self, GraceObject str) {
		if (isStr(str)) {
			return Character.isLetter(c(str)) ? $true : $false;
		}
		return Character.isLetter(i(str)) ? $true : $false;
	}
	
	public GraceBoolean isNumber(GraceObject self, GraceObject str) {
		if (isStr(str)) {
			return Character.isDigit(c(str)) ? $true : $false;
		}
		return Character.isDigit(i(str)) ? $true : $false;
	}
	
	public GraceBoolean isSymbolMathematical(GraceObject self, GraceObject str) {
		if (isStr(str)) {
			return Character.getType(c(str)) == Character.MATH_SYMBOL ? $true : $false;
		}
		return Character.getType(i(str)) == Character.MATH_SYMBOL ? $true : $false;
	}
	
	public GraceString create(GraceObject self, GraceObject code) {
		return new GraceString(new String(
		    Character.toChars((int) ((GraceNumber) code).value)));
	}
	
}
