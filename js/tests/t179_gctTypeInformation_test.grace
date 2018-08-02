import "lexer" as lexer
import "parser" as parser
import "util" as util
import "xmodule" as xmodule

def input = list [
    "var x: Number is writable := 100",
    "def xx: Number is readable = 3",
    "method m(y: Number) -> Done \{",
    "    print(47+y)",
    "\}",
    "method n(a) -> Number is confidential \{3\}",
    "type A = B⟦T⟧ | other.C | other.U⟦T⟧ | interface \{",
    "    m1(n:Number) -> Number",
    "    m2(n:Number) -> Done",
    "\}",
    "type D = Dictionary⟦K, T⟧ & F & G",
    "type H⟦T⟧ = interface \{",
    "    m3(x:T) -> T",
    "\}",
    "type Z = interface \{",
    "    m4(x:Y) -> Y",
    "\} & interface \{",
    "    m5(x:Z) -> Z",
    "\}"
]


util.lines.addAll(input)
def tokens = lexer.lexInputLines
def module = parser.parse(tokens)
module.name := "test_179_output"
util.extensions.put("gctfile", true)
util.outDir := "./"
xmodule.writeGctForModule(module)
def gct = xmodule.parseGCT("test_179_output")
def gctText = xmodule.gctAsString(gct)

print (gctText)
