match ("success")
    case { "fail" -> print "FAIL" }
    case { "true" | "success" -> print "SUCCESS" }
    case { _ -> print "FAIL 2" }
