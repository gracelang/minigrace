// Rules for writing JS native code
// Access ‹param› by writing var_‹param›
// Access ‹field› by writing this.data.‹field›
// set result by assigning to ‹result›
// return returns from the method


class list⟦T⟧ {
    method empty -> List⟦T⟧  { self.withAll [ ] }

    class withAll(a:Iterable⟦T⟧) -> List⟦T⟧ {
        inherit collections.indexable.TRAIT⟦T⟧
        var sz := 0
        var jsArray := native "js" code ‹var result = [];›
        a.do { each ->
            native "js" code ‹this.data.jsArray.push(var_each);›
        }
        

        method boundsCheck(n) is confidential {
            native "js" code ‹var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError,"raise", [1], new GraceString(msg));
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
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];›
        }
        

        method at(n)put(x) {
            native "js" code ‹var  ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return this;›
        }

        method add(*x) {
            if (x.size == 1) then {
                native "js" code ‹var v = callmethod(var_x, "first", [0]);
                    this.data.jsArray.push(v);
                    return this;›
            }
            addAll(x)
        }

        method addAll(l) {
            for (l) do { each -> push(each) }
            self
        }

        method push(x) {
            native "js" code ‹this.data.jsArray.push(var_x);
                    return this;›
        }
        
        method addLast(*x) { addAll(x) }    // compatibility
        

        method removeLast {
            def result = self.at(size)
            native "js" code ‹if (this.data.jsArray.length = 0) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    } else return this.data.jsArray.pop();›
        }

        method addAllFirst(l) {
            var ix := l.size;
            while {ix > 0} do {
                def each = l.at(ix)
                ix := ix - 1
                native "js" code ‹this.data.jsArray.unshift(var_each);›
            }
            self
        }
        

        method addFirst(*l) { addAllFirst(l) }
        

        method removeFirst {
            removeAt(1)
        }
        

        method removeAt(n) {
            def removed = self.at(n)    // does the bounds check
            native "js" code ‹this.data.jsArray.splice(var_n._value - 1, 1);›
            return removed
        }
        

        method remove(*v:T) {
            removeAll(v)
        }
        

        method remove(*v:T) ifAbsent(action:Block0⟦Done⟧) {
            removeAll(v) ifAbsent (action)
        }
        

        method removeAll(vs: Collection⟦T⟧) {
            removeAll(vs) ifAbsent { NoSuchObject.raise "object not in list" }
        }
        

        method removeAll(vs: Collection⟦T⟧) ifAbsent(action:Block0⟦Done⟧)  {
            for (vs) do { each -> 
                def ix = self.indexOf(each) ifAbsent {return action.apply}
                removeAt(ix)
            }
            self
        }
        

        method pop { removeLast }

        method reversed {
            def result = list.empty
            do { each -> result.addFirst(each) }
            result
        }
        method reverse {
            var hiIx := size
            var loIx := 1
            while {loIx < hiIx} do {
                def hiVal = self.at(hiIx)
                self.at(hiIx) put (self.at(loIx))
                self.at(loIx) put (hiVal)
                hiIx := hiIx - 1
                loIx := loIx + 1
            }
            self
        }

        method ++(o) {
            def l = list(self)
            l.addAll(o)
        }
        

        method asString {
            var s := "["
            def curSize = self.size
            for (1..curSize) do { i ->
                s := s ++ at(i).asString
                if (i < curSize) then { s := s ++ "," }
            }
            s ++ "]"
        }
        
        method contains(element) {
            do { each -> if (each == element) then { return true } }
            return false
        }
        

        method do(block1) {
            var i := 1
            def curSize = self.size
            while {i <= curSize} do {
                block1.apply(self.at(i))
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
                inherit iterable.TRAIT
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
            def curSize = size
            var i := 1
            while {i <= size} do {
                block2.apply(i, self.at(i))
                i := i + 1
            }
        }

        method sortBy(sortBlock:Block2) {
            native "js" code ‹var compareFun = function compareFun(a, b) {
                      var res = callmethod(var_sortBlock, "apply", [2], a, b);
                      if (res.className == "number") return res._value;
                      throw new GraceExceptionPacket(TypeErrorObject,
                             new GraceString("sort block in list.sortBy method did not return a number"));
                  }
                  this.data.jsArray.sort(compareFun);›
            self
        }
        

        method sort {
            sortBy { l, r ->
                if (l == r) then {0} 
                    elseif {l < r} then {-1}
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
