def thisDialect is public = object {
    method parseChecker(moduleNode) { print "{moduleNode} parse check"}
    method astChecker(moduleNode) { print "{moduleNode} ast check"}
    method atStart(moduleName) { print "{moduleName} start"}
    method atEnd(moduleObj) { print "{moduleObj} end"}
}
