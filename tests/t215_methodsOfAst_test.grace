import "mgcollections" as ast
import "mirrors" as m

def astReflection = m.reflect(ast)
def astMethods = list.withAll(astReflection.methods)
def astMethodNames = (astMethods.map { each -> each.name }).sort
print "ast module has methods {astMethodNames}"
