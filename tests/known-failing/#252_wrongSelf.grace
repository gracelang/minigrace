import "#252_wrongSelfRoom" as rooms

class room {
    def name = "Non-descript room."
    def description = "Nothing to see here. Move along."
}

def n = object {
    inherit rooms.room   // if we instead inherit the local 
                         // room, everything is OK
    method ==(other) { 
        isMe (other)  // self should be unnecessary.  But without it
                      // the target is compiled as outer.
    }
    method asString { "the northern room" }
}
print (n == n)  // should be true




