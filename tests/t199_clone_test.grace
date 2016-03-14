import "ast" as ast
import "util" as util

util.setPosition(19, 5)
def wombat = ast.identifierNode.new("wombat", ast.unknownType)

print(wombat.pretty 0)

var wclone := clone(wombat)   // if this is a def, then it's treated as a fresh
// object by the GCT writer, and crashes because the method node is treated like a block.

print(wclone.pretty 0)

def wShallowCopy = wombat.shallowCopy

print(wclone.pretty 0)

def mappedClone = wclone.map { x, as -> x } ancestors(ast.ancestorChain.empty)

print(mappedClone.pretty 0)
