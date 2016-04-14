print(true)
print(false)
print(true || false)
print(true && false)
var log = ""
method executed {
    log := log ++ "*"
}
print(false && {executed; true})
print(true || {executed; false})

print(true && {executed; true})
print(false || {executed; false})

print "log is {log}"
