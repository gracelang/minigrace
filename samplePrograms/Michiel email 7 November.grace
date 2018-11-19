def t = 4 ;
def c = 8;
def o = self;
def aa = object {

    class a {
        def c = "aa";
        def t = 2;
        method f { c; };
    };
};

def bb = object {
    def c = "bb";
    class b {
        inherit aa.a;
        print(f);
        print(outer.c);
        print(self.c);
        print(o.c);
    }
}

bb.b;
