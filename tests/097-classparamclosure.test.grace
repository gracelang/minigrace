class ConsGood.new(hd', tl') {
    def hd = hd'
    def tl = tl'
    def brand = "Cons"
    method extract {
        return ([hd', tl'])
    }
}

def a = ConsGood.new(3, 4)
def b = ConsGood.new(6, 7)
def ae = a.extract
print "{ae[1]} {ae[2]}"
def be = b.extract
print "{be[1]} {be[2]}"

