// Rules for writing JS native code
// Access ‹param› by writing var_‹param›
// Access ‹field› by writing this.data.‹field›
// set result by assigning to ‹result›
// return returns from the method


factory method list<T> {
    inherits collections.collectionFactory.trait

    factory method withAll(a:Collection<T>) -> List<T> {
        inherits collections.indexable.trait<T>
        var jsArray := native "js" code ‹var result = [];›
        a.do { each ->
            native "js" code ‹this.data.jsArray.push(var_each);›
        }
        

        method boundsCheck(n) is confidential {
            native "js" code ‹var ix = var_n._value;
if ((ix < 1) || (ix > this.data.jsArray.length)) {
    var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
    callmethod(var_BoundsError,"raise", [1], new GraceString(msg));
}›
            if ((n < 1) || (n > size)) then {
                BoundsError.raise "index {n} out of bounds 1..{size}" 
            }
        }
        

        method size {
            native "js" code ‹return new GraceNum(this.data.jsArray.length)›
            sz
        }
        

        method at(n) {
            native "js" code ‹var ix = var_n._value;
if ((ix < 1) || (ix > this.data.jsArray.length)) {
    var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
    callmethod(var_BoundsError, "raise", [1], new GraceString(msg));
}
return this.data.jsArray[ix - 1];›
            boundsCheck(n)
            inner.at(n-1)
        }
        

        method [](n) {
            native "js" code ‹var ix = var_n._value;
if ((ix < 1) || (ix > this.data.jsArray.length)) {
    var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
    callmethod(var_BoundsError, "raise", [1], new GraceString(msg));
}
return this.data.jsArray[ix - 1];›
            boundsCheck(n)
            inner.at(n-1)
        }
        

        method at(n)put(x) {
            native "js" code ‹var  ix = var_n._value;
if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
    var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
    callmethod(var_BoundsError, "raise", [1], new GraceString(msg));
}
this.data.jsArray[ix-1] = var_x;
return this;›
            if (n == (size+1)) then {
                addLast(x)
            } else {
                boundsCheck(n)
                inner.at(n-1)put(x)
            }
            self
        }
        method []:=(n, x) {
            native "js" code ‹var ix = var_n._value;
if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
    var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
    callmethod(var_BoundsError,"raise", [1], new GraceString(msg));
}
this.data.jsArray[ix-1] = var_x;
return this;›
            if (n == (size+1)) then {
                push(x)
            } else {
                boundsCheck(n)
                inner.at(n-1)put(x)
            }
            done
        }
        method add(*x) {
            if (x.size == 1) then {
                native "js" code ‹var v = callmethod(x, "first", [0]);
this.data.jsArray.push(v);
return this;›
            addAll(x)
        }
        method addAll(l) {
            if ((size + l.size) > inner.size) then {
                expandTo(max(size + l.size, size * 2))
            }
            for (l) do {each ->
                inner.at(size)put(each)
                size := size + 1
            }
            self
        }
        method push(x) {
            if (size == inner.size) then { expandTo(inner.size * 2) }
            inner.at(size)put(x)
            size := size + 1
            self
        }
        method addLast(*x) { addAll(x) }    // compatibility
        method removeLast {
            def result = inner.at(size - 1)
            size := size - 1
            result
        }
        method addAllFirst(l) {
            def increase = l.size
            if ((size + increase) > inner.size) then {
                expandTo(max(size + increase, size * 2))
            }
            for (range.from(size-1)downTo(0)) do {i->
                inner.at(i+increase)put(inner.at(i))
            }
            var insertionIndex := 0
            for (l) do {each ->
                inner.at(insertionIndex)put(each)
                insertionIndex := insertionIndex + 1
            }
            size := size + increase
            self
        }
        method addFirst(*l) { addAllFirst(l) }
        method removeFirst {
            removeAt(1)
        }
        method removeAt(n) {
            boundsCheck(n)
            def removed = inner.at(n-1)
            for (n..(size-1)) do {i->
                inner.at(i-1)put(inner.at(i))
            }
            size := size - 1
            return removed
        }
        method remove(*v:T) {
            removeAll(v)
        }
        method remove(*v:T) ifAbsent(action:Block0<Done>) {
            removeAll(v) ifAbsent (action)
        }
        method removeAll(vs: Collection<T>) {
            removeAll(vs) ifAbsent { NoSuchObject.raise "object not in list" }
        }
        method removeAll(vs: Collection<T>) ifAbsent(action:Block0<Done>)  {
            for (vs) do { each -> 
                def ix = indexOf(each) ifAbsent {return action.apply}
                removeAt(ix)
            }
            self
        }
        method pop { removeLast }
        method ++(o) {
            def l = list.withAll(self)
            l.addAll(o)
        }
        method asString {
            var s := "["
            for (0..(size-1)) do {i->
                s := s ++ inner.at(i).asString
                if (i < (size-1)) then { s := s ++ "," }
            }
            s ++ "]"
        }
        method extend(l) { addAll(l); done }    // compatibility
        method contains(element) {
            do { each -> if (each == element) then { return true } }
            return false
        }
        method do(block1) {
            var i := 0
            while {i < size} do { 
                block1.apply(inner.at(i))
                i := i + 1
            }
        }
        method ==(other) {
            match (other)
                case {o:Sequence ->
                    if (self.size != o.size) then {return false}
                    self.indices.do { ix ->
                        if (self.at(ix) != o.at(ix)) then {
                            return false
                        }
                    }
                    return true
                } 
                case {_ ->
                    return false
                }
        }
        method iterator {
            object {
                inherits iterable.trait
                var idx := 1
                method asDebugString { "{asString}⟪{idx}⟫" }
                method asString { "aListIterator" }
                method havemore { idx <= size }
                method hasNext { idx <= size }
                method next {
                    if (idx > size) then { Exhausted.raise "on list" }
                    def ret = at(idx)
                    idx := idx + 1
                    ret
                }
            }
        }
        method values {
            self.iterator
        }
        method keys {
            self.indices.iterator
        }
        method keysAndValuesDo(block2) {
            var i := 0
            while {i < size} do { 
                block2.apply(i+1, inner.at(i))
                i := i + 1
            }
        }
        method expandTo(newSize) is confidential {
            def newInner = _prelude.PrimitiveArray.new(newSize)
            for (0..(size-1)) do {i->
                newInner.at(i)put(inner.at(i))
            }
            inner := newInner
        }
        method sortBy(sortBlock:Block2) {
            inner.sortInitial(size) by(sortBlock)
            self
        }
        method sort {
            sortBy { l, r ->
                if (l == r) then {0} 
                    elseif (l < r) then {-1} 
                    else {1}
            }
        }
        method copySortedBy(sortBlock:Block2) {
            copy.sortBy(sortBlock:Block2)
        }
        method copySorted {
            copy.sort
        }
        method copy {
            outer.withAll(self)
        }
    }
}

        

    }
}


def lst = list.with(2, 3, 5, 7)
print "lst[1] = {lst.at(1)}"
print "lst[2] = {lst.at(2)}"
print "lst[3] = {lst.at(3)}"
print "lst[4] = {lst.at(4)}"

