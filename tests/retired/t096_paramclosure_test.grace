method objcreator(x, y) {
    object {
        method extract {
            [x, y]
        }
    }
}

def a = objcreator(3, 4)
def b = objcreator(6, 7)
def ae = a.extract
print "{ae[1]} {ae[2]}"
def be = b.extract
print "{be[1]} {be[2]}"

