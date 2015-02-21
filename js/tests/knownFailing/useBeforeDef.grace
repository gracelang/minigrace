type Complex = type {
    + (other:Complex) -> Complex
    * (other:Complex) -> Complex
}

class complex.real(r:Number)imaginary(i:Number) -> Complex {
    // declaring an instance variable to be readable automatically generates
    // a parameterless method with the same name returning the value of the variable
    def real:Number is public = r
    def imaginary: Number is public = i
    def j: Complex = complex.real 0 imaginary 1
    // methods with operator symbols don't need "." when applied
    method +(other:Complex) -> Complex {
        complex.real(real+other.real)imaginary(imaginary+other.imaginary)
    }

    method *(other:Complex) -> Complex {
        complex.real((real*other.real)-(imaginary*other.imaginary))
                imaginary((imaginary*other.real)+(real*other.imaginary))
    }


    method asString -> String {
        // asString creates a string representation.
        // An expression in curly brackets inside double quotes is converted to
        // a string and then inserted into the string being defined. Thus below,
        // the value of real is prepended to "+" which is prepended to the value
        //  of imaginary, which is finally prepended to "i".

        if(imaginary >= 0) then {
            "{real}+{imaginary}i"
        } else {
            "{real}{imaginary}i"
        }
    }
}

//def c1 = complex.real 4 imaginary 5
//def c2 = complex.real 2 imaginary 3
//print "c1 + c2 = {c1 + c2}"
//print "c1 * c2 = {c1 * c2}"

