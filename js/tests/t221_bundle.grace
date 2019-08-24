trait open {

   method CheckerFailure { Exception.refine "CheckerFailure" }

   trait thisDialect {
       method parseChecker (moduleObj) {
          CheckerFailure.raise "dummy error"
       }
   }

}
