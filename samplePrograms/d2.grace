dialect "dialect"
import "mirrors" as m

inherit prelude.methods

print "\nMethods of {self}:"
def methodList = self.list.withAll(m.reflect(self).methodNames).sorted
print ("{methodList.size}: {methodList}")

print "\nMethods of `self.methods`}:"
def mMethodList = self.list.withAll(m.reflect(self.methods).methodNames).sorted
print ("{mMethodList.size}: {mMethodList}")
