dialect "standard"
import "gUnit" as gU
import "bindingTest" as bindingTest
import "sequenceTest" as sequenceTest
import "listTest" as listTest
import "setTest" as setTest
import "rangeTest" as rangeTest
import "dictionaryTest" as dictionaryTest
import "lazyEnumTest" as lazyEnumTest

def bindingTests = gU.testSuite.fromTestMethodsIn(bindingTest.bindingTest)
bindingTests.runAndPrintResults

def sequenceTests = gU.testSuite.fromTestMethodsIn(sequenceTest.sequenceTest)
sequenceTests.runAndPrintResults

def listTests = gU.testSuite.fromTestMethodsIn(listTest.listTest)
listTests.runAndPrintResults

def setTests = gU.testSuite.fromTestMethodsIn(setTest.setTest)
setTests.runAndPrintResults

def rangeTests = gU.testSuite.fromTestMethodsIn(rangeTest.rangeTest)
rangeTests.runAndPrintResults

def dictTests = gU.testSuite.fromTestMethodsIn(dictionaryTest.dictionaryTest)
dictTests.runAndPrintResults

def lazyEnumTests = gU.testSuite.fromTestMethodsIn(lazyEnumTest.lazyEnumTest)
lazyEnumTests.runAndPrintResults

gU.exit
