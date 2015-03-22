#!/usr/bin/python
# Script to generate js/unicodedata.js from UnicodeData.txt and NameAliases.txt,
# which can be found at http://www.unicode.org/Public/UCD/latest/ucd/
# By Michael Homer, modified by Andrew P. Black

import os

data = []
with open("UnicodeData.txt") as fp:
    for line in fp:
        data.append(line.strip().split(";"))

data[-4:] = []

categories = set()
bidirectionals = set()

codepoints = []
last = None
foo = set()
for c in data:
    num = eval("0x" + c[0])
    if num >= 0x20000:
        break
    if c[2] not in categories:
        categories.add(c[2])
    if c[4] not in bidirectionals:
        bidirectionals.add(c[4])
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
    if c[0] in foo:
        print "ERROR: already have", c
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


fp = open("unicodedata.h", "w")
fp.write("""
typedef struct {
    const unsigned char category;
    const unsigned char combining;
    const unsigned char bidirectional;
    const unsigned char mirrored;
} UnicodeRecord;
""")

categories = list(categories)
cats = dict()
for i in range(len(categories)):
    cats[categories[i]] = i

bidirectionals = list(bidirectionals)
bidis = dict()
for i in range(len(bidirectionals)):
    bidis[bidirectionals[i]] = i

fp.write("const char *Unicode_Categories[] = {\n")
for cat in categories:
    fp.write("  \"" + cat + "\",\n")
fp.write("  0\n")
fp.write("};\n")

fp.write("const char *Unicode_Bidirectionals[] = {\n")
for bd in bidirectionals:
    fp.write("  \"" + bd + "\",\n")
fp.write("  0\n")
fp.write("};\n")

fp.write("const UnicodeRecord UnicodeRecords[] = {\n")
for cp in codepoints:
    fp.write("{")
    fp.write(str(cats[cp[2]]))
    fp.write(", ")
    fp.write(cp[3])
    fp.write(", ")
    fp.write(str(bidis[cp[4]]))
    fp.write(", ")
    fp.write("89" if cp[9] == "Y" else "78")
    fp.write("},\n")
fp.write("};\n")

fp.write("const char *Unicode_Names[] = {\n")
for cp in codepoints:
    fp.write("\"" + cp[1] + "\",\n")
fp.write("};\n")

fp.write("const int Unicode_Lookups[] = {\n")
out = 0
tot = 0
skip = 0
for cp in sorted(codepoints, key=lambda x: x[1]):
    if cp[1] == "<A CHARACTER>":
        skip = skip + 1
        continue
    fp.write("0x" + cp[0] + ",")
    out = out + 1
    tot = tot + 1
    if out == 10:
        fp.write("\n")
        out = 0
fp.write("};\n")
fp.write("const unsigned int Unicode_Lookups_Size = " + str(tot) + ";\n")
