import "./t162_testDialect_test" as irrelevant
// t162 uses DIALECT minitest, which imports gUnit
import "gUnit" as gU
// so this import MUST be compiled as a dynamic import
def t = gU.testSuite.withAll []
t.runAndPrintResults
