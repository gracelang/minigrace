import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util

def input = list.with(
    "type Person = type \{",
    "  age -> Number",
    "  name -> String",
    "\}",
    "",
    "class person.new(name', age') \{",
    "  def name is public = name'",
    "  def age is public = age'",
    "  method getShoeSize \{",
    "    return ((name.size * name.size) + age)",
    "  }",
    "}"
)

util.lines := input
def tokens = lexer.new.lexinput(input)
def nodes = parser.parse(tokens)

for (nodes) do { n->
    print(n.pretty(0))
}