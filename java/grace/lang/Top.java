package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Bool.$true;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaBoolean;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.HashSet;
import java.util.Set;

public class Top extends Obj {
	
	public Top() {
		super();
	}
	
	public Top(Egal egal) {
		super(egal);
	}
	
	public Top(Obj closure) {
		super(closure);
	}
	
	public Top(Obj outer, Obj closure) {
		super(outer, closure);
	}
	
	public Top(Egal egal, Obj closure) {
		super(egal, closure);
	}
	
	public Top(Egal egal, Obj outer, Obj closure) {
		super(egal, outer, closure);
	}
	
	// ==
	public Obj bin$61$61(Obj self, Obj o) {
		Egal egal = self.$egal();
		if (egal != o.$egal()) {
			return $false;
		}
		
		if (egal == Egal.Pointer) {
			return $boolean(self == o);
		}
		
		if (self.getClass().equals(o.getClass())
		    && self.getClosure() == o.getClosure()) {
			Obj $super = self.getSuper();
			Obj other = o.getSuper();
			
			while (true) {
				if ($super != other) {
					break;
				}
				
				if ($super == nothing) {
					return $true;
				}
				
				$super = $super.getSuper();
				other = other.getSuper();
			}
		}
		
		switch (egal) {
		case Pointer:
			return $boolean(self == o);
		case Closure:
			return $boolean(equal(self, o) && equalClosure(self, o));
		case Value:
		default:
			return $boolean(equal(self, o));
		}
	}
	
	private boolean equal(Obj self, Obj other) {
		return equal(self, other, new HashSet<String>(), true);
	}
	
	private boolean equal(Obj s, Obj o, Set<String> visited, boolean again) {
		Obj self = s;
		while (!self.getClass().equals(Top.class)) {
			Field[] selfFields = getFields(self);
			
			field: for (Field field : selfFields) {
				String name = field.getName();
				Method getter;
				if (visited.contains(name)
				    || (getter = getGetterMethod(self, field)) == null) {
					continue;
				}
				
				Obj value = getFieldValue(self, getter);
				Obj other = o;
				while (!other.getClass().equals(Top.class)) {
					Field[] otherFields = getFields(other);
					
					for (Field ofield : otherFields) {
						if (ofield.getName().equals(name)) {
							Method ogetter = getGetterMethod(other, ofield);
							if (ogetter == null) {
								return false;
							}
							
							Obj ovalue = getFieldValue(other, ogetter);
							if (!$javaBoolean(value.invoke("bin$61$61", ovalue))) {
								return false;
							}
							
							visited.add(name);
							continue field;
						}
					}
					
					other = other.getSuper();
				}
				
				return false;
			}
			
			self = self.getSuper();
		}
		
		if (again) {
			return equal(o, s, visited, false);
		}
		
		return true;
	}
	
	private boolean equalClosure(Obj self, Obj other) {
		return equalClosure(self, other, new HashSet<String>(), true);
	}
	
	private boolean
	    equalClosure(Obj s, Obj o, Set<String> visited, boolean again) {
		Obj self = s;
		while (!self.getClass().equals(Top.class)) {
			Method[] selfMethods = getMethods(self);
			
			method: for (Method method : selfMethods) {
				String name = method.getName();
				if (!Modifier.isPublic(method.getModifiers()) || visited.contains(name)) {
					continue;
				}
				
				Obj other = o;
				while (!other.getClass().equals(Top.class)) {
					Method[] otherMethods = getMethods(other);
					
					for (Method omethod : otherMethods) {
						if (omethod.getName().equals(name)) {
							if (!(method.equals(omethod) && self.getClosure() == other
							    .getClosure())) {
								return false;
							}
							
							visited.add(name);
							continue method;
						}
					}
					
					other = other.getSuper();
				}
				
				return false;
			}
			
			self = self.getSuper();
		}
		
		if (again) {
			return equalClosure(o, s, visited, false);
		}
		
		return true;
	}
	
	// !=
	public Obj bin$33$61(Obj self, Obj o) {
		return self.invoke("bin$61$61", o).invoke("not");
	}
	
	// /=
	public Obj bin$47$61(Obj self, Obj o) {
		return self.invoke("bin$61$61", o).invoke("not");
	}
	
	public Obj asString(Obj self) {
		return new Str(super.toString());
	}
	
	public String toString() {
		return invoke("asString").toString();
	}
	
	public boolean equals(Object o) {
		if (o instanceof Obj) {
			return ((Bool) bin$61$61(this, (Obj) o)).value;
		}
		
		return false;
	}
	
}
