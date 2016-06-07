method truemeth {
    print "Ran truemeth"
    true
}
method falsemeth {
    print "Ran falsemeth"
    false
}

print(true && {truemeth} && {truemeth})
print(true && {falsemeth} && {truemeth})
print(false && {truemeth})
