trait t1 {
    method x(size:Number) { ... }
    method y(name:String) { ... }
}

class c1 {
    use t1 alias w(name) = y(name) exclude x(_)
    method w(kind) { ... }
}

// y(name) in the alias clause causes a crash.  y(_) works fine.  The v(name) is
// ok, because w is being declared.