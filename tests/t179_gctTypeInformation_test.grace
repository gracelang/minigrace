import "lexer" as lexer
import "parser" as parser
import "util" as util
import "xmodule" as xmodule

def input = list.with(
    "def x = 100",
    "method m \{",
    "    print(47)",
    "\}",
    "type A = B<T> | other.C | other.U<T> | type \{",
    "    m1(n:Number) -> Number",
    "    m2(n:Number) -> Done",
    "\}",
    "type D = Collection<T> & F & G",
    "type H<T> = type \{",
    "    m3(x:T) -> T",
    "\}",
    "type Z = type \{",
    "    m4(x:Y) -> Y",
    "\} & type \{",
    "    m5(x:Z) -> Z",
    "\}"
)

util.lines := input
def tokens = lexer.new.lexinput(input)
def nodes = parser.parse(tokens)

xmodule.writeGCT("test179")fromValues(nodes)modules(list.empty)
def gct = xmodule.parseGCT("test179")
def gctText = xmodule.gctAsString(gct)

print (gctText)