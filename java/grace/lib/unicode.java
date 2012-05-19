package grace.lib;

import grace.lang.*;

public final class unicode extends Prelude {
	
	private static unicode $module;
	
	public static unicode $module() {
		return $module == null ? $module = new unicode() : $module;
	}
	
	private static boolean isStr(Value str) {
		return str instanceof Str;
	}
	
	private static char c(Value str) {
		return ((Str) str).value.charAt(0);
	}
	
	private static int i(Value num) {
		return (int) ((Num) num).value;
	}
	
	public Str name(Value self, Value str) {
		return $string("");
	}
	
	public Str category(Value self, Value str) {
		return $string("");
	}
	
	public Num combining(Value self, Value str) {
		return $number(0);
	}
	
	public Bool mirrored(Value self, Value str) {
		return Character.isMirrored(c(str)) ? $true : $false;
	}
	
	public Str bidirectional(Value self, Value str) {
		return $string("");
	}
	
	public Bool iscategory(Value self, Value str,
	    Value cat) {
		return $false;
	}
	
	public Bool isSeparator(Value self, Value str) {
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
	
	public Bool isControl(Value self, Value str) {
		if (isStr(str)) {
			return Character.getType(c(str)) == Character.CONTROL ? $true : $false;
		}
		return Character.getType(i(str)) == Character.CONTROL ? $true : $false;
	}
	
	public Bool isLetter(Value self, Value str) {
		if (isStr(str)) {
			return Character.isLetter(c(str)) ? $true : $false;
		}
		return Character.isLetter(i(str)) ? $true : $false;
	}
	
	public Bool isNum(Value self, Value str) {
		if (isStr(str)) {
			return Character.isDigit(c(str)) ? $true : $false;
		}
		return Character.isDigit(i(str)) ? $true : $false;
	}
	
	public Bool isSymbolMathematical(Value self, Value str) {
		if (isStr(str)) {
			return Character.getType(c(str)) == Character.MATH_SYMBOL ? $true : $false;
		}
		return Character.getType(i(str)) == Character.MATH_SYMBOL ? $true : $false;
	}
	
	public Str create(Value self, Value code) {
		return $string(new String(
		    Character.toChars((int) ((Num) code).value)));
	}
	
}
