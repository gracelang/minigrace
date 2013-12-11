#include "unicodedata.h"
#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

// unicode.c defines a Grace module "unicode", which can be compiled either
// to LLVM bitcode (called unicode.gco) and linked statically, or to
// native code (called unicode.gso) and linked dynamically. In either case
// it is imported with "import unicode" and thereafter available as "unicode".
// The module contains these methods:
//   category(char : String) -> String
//   bidirectional(char : String) -> String
//   combining(char : String) -> Number
//   mirrored(char : String) -> Boolean
//   name(char : String) -> String
//   iscategory(char : String, category : String) -> Boolean
//   isSeparator(char : String) -> Boolean
//   isControl(char : String) -> Boolean
//   isLetter(char : String) -> Boolean
//   isNumber(char : String) -> Boolean
//   isSymbolMathematical(char : String) -> Boolean
//   create(codepoint : Number) -> String
// These all return or test the corresponding Unicode property, or in the
// case of create return a String consisting of the character with the given
// codepoint.
//
// The character database is in unicodedata.h, which was automatically
// generated from the UnicodeData.txt file available from unicode.org. The
// data in that file is structured as a simple lookup table for codepoints
// below 0x20000 (the Basic Multilingual Plane and the Supplementary
// Multilingual Plane), compiled into the executable.

// The necessary headers for interacting with the rest of the system
// (should be an actual header)
#include "gracelib.h"

extern ClassData Number;

// Intern module
Object unicode_module = NULL;

// Return a Grace String containing the Unicode name of the first
// character in the String argument (e.g.,
// "LATIN SMALL LETTER A WITH DIARESIS").
Object unicode_name(Object self, int nparts, int *argcv,
         Object *args, int flags) {
    Object o = callmethod(args[0], "ord", 0, NULL, NULL);
    int v = integerfromAny(o);
    const char *name = Unicode_Names[v];
    return alloc_String(name);
}
// Return a Grace string containing the Unicode category of the first
// character in the String argument (e.g., "Nd").
Object unicode_category(Object self, int nparts, int *argcv,
         Object *args, int flags) {
    Object o = callmethod(args[0], "ord", 0, NULL, 0);
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    return alloc_String(Unicode_Categories[cindex]);
}
// Return a Grace Number containing the Unicode combining class of
// the first character in the String argument (e.g. 10).
Object unicode_combining(Object self, int nparts, int *argcv,
         Object *args, int flags) {
    Object o = callmethod(args[0], "ord", 0, NULL, NULL);
    int v = integerfromAny(o);
    int cval = UnicodeRecords[v].combining;
    return alloc_Float64(cval);
}
// Return a Grace Boolean indicating whether the first character in
// the argument String is marked as mirrored in the Unicode database.
Object unicode_mirrored(Object self, int nparts, int *argcv,
         Object *args, int flags) {
    Object o = callmethod(args[0], "ord", 0, NULL, NULL);
    int v = integerfromAny(o);
    int cval = UnicodeRecords[v].mirrored;
    return alloc_Boolean(cval == 'Y');
}
// Return a Grace String indicating the bidirectionality of the first
// character in the argument String as provided in the Unicode.
Object unicode_bidirectional(Object self, int nparts, int *argcv,
         Object *args, int flags) {
    Object o = callmethod(args[0], "ord", 0, NULL, NULL);
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].bidirectional;
    return alloc_String(Unicode_Bidirectionals[cindex]);
}
// Return a Grace Boolean indicating whether the first character of the first
// argument String is in the Unicode category given by the second. The second
// can be either one or two characters in length, testing for either a broad
// category (like "N") or a specific one (like "Nd").
Object unicode_iscategory(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object o = args[0];
    char *classname = o->class->name;
    if (strcmp(classname, "String") == 0
            || strcmp(classname, "ConcatString") == 0)
        o = callmethod(args[0], "ord", 0, NULL, NULL);
    Object co = args[1];
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    char *dt = grcstring(co);
    Object ret = alloc_Boolean(0);
    if (strlen(dt) == 1) {
        if (cat[0] == dt[0])
            ret = alloc_Boolean(1);
    }
    if (strcmp(cat, dt) == 0)
        ret = alloc_Boolean(1);
    return ret;
}
// Return a Grace Boolean indicating whether the argument is a separator.
Object unicode_isSeparator(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object o = args[0];
    if (strcmp(args[0]->class->name, "String") == 0) {
        o = callmethod(args[0], "ord", 0, NULL, 0);
    }
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    return alloc_Boolean(cat[0] == 'Z');
}
// Return a Grace Boolean indicating whether the argument is a control
// character.
Object unicode_isControl(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object o = args[0];
    if (strcmp(args[0]->class->name, "String") == 0) {
        o = callmethod(args[0], "ord", 0, NULL, 0);
    }
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    return alloc_Boolean(cat[0] == 'C');
}
// Return a Grace Boolean indicating whether the argument is a letter.
Object unicode_isLetter(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object o = args[0];
    if (strcmp(args[0]->class->name, "String") == 0) {
        o = callmethod(args[0], "ord", 0, NULL, 0);
    }
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    return alloc_Boolean(cat[0] == 'L');
}
// Return a Grace Boolean indicating whether the argument is a Number.
Object unicode_isNumber(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object o = args[0];
    if (strcmp(args[0]->class->name, "String") == 0) {
        o = callmethod(args[0], "ord", 0, NULL, 0);
    }
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    return alloc_Boolean(cat[0] == 'N');
}
// Return a Grace Boolean indicating whether the argument is a
// Symbol, Mathematical.
Object unicode_isSymbolMathematical(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object o = args[0];
    if (strcmp(args[0]->class->name, "String") == 0) {
        o = callmethod(args[0], "ord", 0, NULL, 0);
    }
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    return alloc_Boolean(strcmp(cat, "Sm") == 0);
}
// Return a Grace string of length 1 containing the codepoint given by
// the Number argument. Strings are stored in UTF-8, so the function
// constructs a buffer and fills it with the appropriate bytes, then
// calls the String constructur with it.
Object unicode_create(Object self, int nparts, int *argcv,
         Object *args, int flags) {
    Object o = args[0];
    int cp = integerfromAny(o);
    char buf[5];
    int i;
    int tmp;
    for (i=0; i<5; i++)
        buf[i] = 0;
    if (cp < 128)
         buf[0] = cp;
    else if (cp < 0x0800) {
        buf[0] = 0xc0;
        buf[1] = 0x80;
        tmp = cp >> 6;
        tmp &= 0x1f;
        buf[0] |= tmp;
        tmp = cp & 0x3f;
        buf[1] |= tmp;
    } else if (cp < 0x10000) {
        buf[0] = 0xe0;
        buf[1] = 0x80;
        buf[2] = 0x80;
        tmp = cp >> 12;
        tmp &= 0xf;
        buf[0] |= tmp;
        tmp = cp >> 6;
        tmp &= 0x3f;
        buf[1] |= tmp;
        tmp = cp & 0x3f;
        buf[2] |= tmp;
    } else if (cp < 0x10FFFF) {
        buf[0] = 0xf0;
        buf[1] = 0x80;
        buf[2] = 0x80;
        buf[3] = 0x80;
        tmp = cp >> 16;
        tmp &= 0x7;
        buf[0] |= tmp;
        tmp = cp >> 12;
        tmp &= 0x3f;
        buf[1] |= tmp;
        tmp = cp >> 6;
        tmp &= 0x3f;
        buf[2] |= tmp;
        tmp = cp & 0x3f;
        buf[3] |= tmp;
    }
    return alloc_String((char*)buf);
}

// Find and return the character named by the String argument. Uses a
// binary search over the Unicode_Lookups array of codepoints, which
// is ordered lexicographically by name.
Object unicode_lookup(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *target = grcstring(args[0]);
    unsigned int bot = 0;
    unsigned int top = Unicode_Lookups_Size;
    while (bot <= top) {
        unsigned int mid = bot + (top - bot) / 2;
        unsigned int codepoint = Unicode_Lookups[mid];
        const char *name = Unicode_Names[codepoint];
        int c = strcmp(target, name);
        if (c == 0) {
            Object cp = alloc_Float64(codepoint);
            int argcv2[] = {1};
            return unicode_create(self, 1, argcv2, &cp, 0);
        }
        if (bot == mid) {
            bot++;
            continue;
        } else if (bot == top)
            break;
        if (c < 0) {
            top = mid;
        } else {
            bot = mid;
        }
    }
    return alloc_done();
}

#define UNICODEPATTERN_CODEPOINT 1
#define UNICODEPATTERN_CLASS 2
#define UNICODEPATTERN_CODEPOINT_NOT 3
#define UNICODEPATTERN_CLASS_NOT 4
struct UnicodePatternElement {
    int type;
    union {
        int codepoint;
        char class[3];
    } data;
};
struct UnicodePattern {
    OBJECT_HEADER;
    int size;
    struct UnicodePatternElement elements[];
};
ClassData UnicodePattern;

Object UnicodePattern_match(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct UnicodePattern *pat = (struct UnicodePattern *)self;
    Object other = argv[0];
    Object o = argv[0];
    char *classname = o->class->name;
    if (strcmp(classname, "String") == 0
            || strcmp(classname, "ConcatString") == 0)
        o = callmethod(argv[0], "ord", 0, NULL, NULL);
    int v = integerfromAny(o);
    int cindex = UnicodeRecords[v].category;
    const char *cat = Unicode_Categories[cindex];
    int successful = 0;
    for (int j=0; j<pat->size; j++) {
        if (pat->elements[j].type == UNICODEPATTERN_CODEPOINT) {
            if (v == pat->elements[j].data.codepoint)
                successful = 1;
        } else if (pat->elements[j].type == UNICODEPATTERN_CLASS) {
            const char *needle = pat->elements[j].data.class;
            if (needle[0] == cat[0]) {
                if (!needle[1])
                    successful = 1;
                if (needle[1] == cat[1])
                    successful = 1;
            }
        } else if (pat->elements[j].type == UNICODEPATTERN_CODEPOINT_NOT) {
            if (v == pat->elements[j].data.codepoint)
                successful = 0;
        } else if (pat->elements[j].type == UNICODEPATTERN_CLASS_NOT) {
            const char *needle = pat->elements[j].data.class;
            if (needle[0] == cat[0]) {
                if (!needle[1])
                    successful = 0;
                if (needle[1] == cat[1])
                    successful = 0;
            }
        }
    }
    if (successful) {
        return alloc_SuccessfulMatch(argv[0], NULL);
    }
    return alloc_FailedMatch(other, NULL);
}

Object unicode_pattern_not(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    if (!UnicodePattern) {
        UnicodePattern = alloc_class("UnicodePattern", 1);
        add_Method(UnicodePattern, "match", &UnicodePattern_match);
    }
    int size = argcv[0];
    int size2 = argcv[1];
    Object me = alloc_obj(sizeof(struct UnicodePattern) - sizeof(struct Object)
            + sizeof(struct UnicodePatternElement) * (size + size2),
            UnicodePattern);
    struct UnicodePattern *pat = (struct UnicodePattern *)me;
    pat->size = size + size2;
    for (int j=0; j<size; j++) {
        Object o = args[j];
        if (o->class == Number) {
            pat->elements[j].type = UNICODEPATTERN_CODEPOINT;
            int n = integerfromAny(o);
            pat->elements[j].data.codepoint = n;
        } else {
            pat->elements[j].type = UNICODEPATTERN_CLASS;
            const char *cc = grcstring(o);
            char *bf = pat->elements[j].data.class;
            strcpy(bf, cc);
        }
    }
    for (int j=size; j<size+size2; j++) {
        Object o = args[j];
        if (o->class == Number) {
            pat->elements[j].type = UNICODEPATTERN_CODEPOINT_NOT;
            int n = integerfromAny(o);
            pat->elements[j].data.codepoint = n;
        } else {
            pat->elements[j].type = UNICODEPATTERN_CLASS_NOT;
            const char *cc = grcstring(o);
            char *bf = pat->elements[j].data.class;
            strcpy(bf, cc);
        }
    }
    return me;
}

Object unicode_pattern(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int argcv2[2];
    argcv2[0] = argcv[0];
    argcv2[1] = 0;
    return unicode_pattern_not(self, 2, argcv2, args, flags);
}

// Create and return a Grace object with all the above functions as methods.
Object module_unicode_init() {
    if (unicode_module != NULL)
        return unicode_module;
    ClassData c = alloc_class("Module<unicode>", 15);
    add_Method(c, "category", &unicode_category);
    add_Method(c, "bidirectional", &unicode_bidirectional);
    add_Method(c, "combining", &unicode_combining);
    add_Method(c, "mirrored", &unicode_mirrored);
    add_Method(c, "name", &unicode_name);
    add_Method(c, "create", &unicode_create);
    add_Method(c, "iscategory", &unicode_iscategory);
    add_Method(c, "isSeparator", &unicode_isSeparator);
    add_Method(c, "isControl", &unicode_isControl);
    add_Method(c, "isLetter", &unicode_isLetter);
    add_Method(c, "isNumber", &unicode_isNumber);
    add_Method(c, "isSymbolMathematical", &unicode_isSymbolMathematical);
    add_Method(c, "lookup", &unicode_lookup);
    add_Method(c, "pattern", &unicode_pattern);
    add_Method(c, "pattern()not", &unicode_pattern_not);
    Object o = alloc_newobj(0, c);
    unicode_module = o;
    gc_root(o);
    return o;
}
