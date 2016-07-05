#!/usr/bin/python3
# Script to generate js/unicodedata.js from UnicodeData.txt and NameAliases.txt,
# which can be found at http://www.unicode.org/Public/UCD/latest/ucd/
# By Michael Homer, modified by Andrew Black

import os

data = []
print("Reading UnicodeData.txt...")
with open("UnicodeData.txt") as fp:
    for line in fp:
        data.append(line.strip().split(";"))

data[-4:] = []
# removes the last 4 items from the array

categories = set()
bidirectionals = set()

codepoints = []
last = None
foo = set()
print("Processing data...")
for c in data:
    num = eval("0x" + c[0])
    if num >= 0x10000:
        break
    if c[2] not in categories:
        categories.add(c[2])
    if c[2][0] not in categories:
        categories.add(c[2][0])
    if c[4] not in bidirectionals:
        bidirectionals.add(c[4])
    if num == 9:
        c[1] = '<TAB>'
    while len(codepoints) < num:
        cp = hex(len(codepoints))[2:]
        if len(cp) < 4:
            cp = '0' * (4-len(cp)) + cp
        foo.add(cp)
        nxt = [cp, "<A CHARACTER>"]
        nxt.extend(last[2:])
        codepoints.append(nxt)
        last = nxt
    codepoints.append(c)
    foo.add(c[0])
    last = c

with open("NameAliases.txt") as fp:
    for line in fp:
        if line.startswith('#'):
            continue
        line = line.strip()
        if not line:
            continue
        row = line.split(";")
        num = eval("0x" + row[0])
        if num >= 0x20000:
            break
        if row[2] != 'control':
            continue
        if codepoints[num]:
            cp = codepoints[num]
            cp[1] = row[1]


fp = open("js/unicodedata.js", "w")
fp.write("""
unicodedata = {};
""")

categories = list(categories)
cats = dict()
for i in range(len(categories)):
    cats[categories[i]] = i

bidirectionals = list(bidirectionals)
bidis = dict()
for i in range(len(bidirectionals)):
    bidis[bidirectionals[i]] = i

print("Generating names map...")
fp.write("unicodedata.names = {\n")
for cp in codepoints:
    if cp[1] == '<A CHARACTER>':
        continue
    if cp[1] == '<control>':
        continue
    if 'Surrogate' in cp[1]:
        continue
    num = eval("0x" + cp[0])
    char = chr(num)
    # " or \ or U+2028 LINE SEPARATOR
    if (char == "\"" or char == "\\" or num == 8232 or num == 0x2029):
        char = "\\" + char
    if num >= 0x202a and num <= 0x202e: # LTR modifiers
        continue
    if cp[2].startswith("C"):
        if num >= 0x10000:
            continue
        char = "\\u" + cp[0]
    fp.write("\"" + char + "\":\"" + cp[1] + "\",\n")
fp.write("};\n")

fp.write("unicodedata.categories = {};\n")
i = 1
for c in categories:
    print("Generating category " + c + " {}/{}...".format(i, len(categories)))
    i = i + 1
    fp.write("unicodedata.categories." + c + " = [")
    start = -1
    end = -1
    for cp in codepoints:
        if (cp[2] == c or cp[2][0] == c) and start == -1:
            start = eval("0x" + cp[0])
        elif start != -1 and cp[2] != c and cp[2][0] != c:
            end = eval("0x" + cp[0]) - 1
            if start == end:
                fp.write(str(start) + ", ")
            else:
                fp.write("[{}, {}], ".format(start, end))
            start = -1
    fp.write("];\n")

print("Writing postlude ...")
fp.write("""
unicode = {};
unicode.name = function(s) {
    function charCode() {
        var code = s.charCodeAt(0);
        var hi, low;
        if (0xD800 <= code && code <= 0xDBFF) {
            // char is a 2-byte sequence, starting with a high surrogate
            hi = code;
            low = s.charCodeAt(1);
            if (isNaN(low)) {
                throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
            }
            return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
        }
        return code;
    };
    if (typeof s === "number")
        s = String.fromCodePoint(s);
    if (unicodedata.names[s])
         return unicodedata.names[s];
    return "UNICODE CHARACTER " + charCode().toString(16);
};

unicode.inCategory = function(s, c) {
    var table = unicodedata.categories[c];
    var o = s;
    if (typeof o == "string")
         o = s.charCodeAt(0);
    for (var i=0; i<table.length; i++) {
        var e = table[i];
        if (typeof e == "number") {
            if (e == o)
                return true;
        } else {
            if (e[0] <= o && e[1] >= o)
                return true;
        }
    }
    return false;
};

unicode.category = function(s) {
    var o = s;
    if (typeof o == "string")
        o = s.charCodeAt(0);
    for (catName in unicodedata.categories) {
        if ((catName.length === 2) && unicodedata.categories.hasOwnProperty(catName)) {
            if (unicode.inCategory(o, catName)) {
                return catName;
            }
        }
    }
    for (catName in unicodedata.categories) {
        if ((catName.length === 1) && unicodedata.categories.hasOwnProperty(catName)) {
            if (unicode.inCategory(o, catName)) {
                return catName;
            }
        }
    }
    return false;
}

// for node:
if (typeof global !== "undefined") {
    global.unicode = unicode;
};
""")
