#define _POSIX_C_SOURCE 200809L
#define _XOPEN_SOURCE 700
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#include "gracelib.h"
#include "definitions.h"

extern char (*callstack)[256];
extern struct StackFrameObject **frame_stack;
extern struct ClosureEnvObject **closure_stack;
extern int calldepth;
extern ClassData Number;
extern ClassData String;
extern ClassData ConcatString;
Method *findmethodsimple(Object self, const char *name);

struct DebuggerCommand {
    const char *name;
    const char *desc;
    void (*func)(char *);
    struct DebuggerCommand *next;
};

static int framedepth;
static int lowestframe;
static struct StackFrameObject *frame;
static struct ClosureEnvObject *closure;
static struct DebuggerCommand *commands;

void printobjshort(Object o) {
    if (o->class == Number) {
        printf("\t%f", *((double *)o->data));
    } else if (o->class == String || o->class == ConcatString) {
        char *s = grcstring(o);
        int l = strlen(s);
        if (l <= 16) {
            printf("\t\"%s\"", s);
        } else {
            char buf[17];
            strncpy(buf, s, 16);
            buf[16] = '\0';
            printf("\t\"%s...\" (%i more bytes)", buf, l - 16);
        }
    } else {
        printf("<%p>", o);
    }
}

void printframe(struct StackFrameObject *f) {
    int i = 1;
    printf("%s\n", f->name);
    while (f->names[i]) {
        printf("  %2i: %s\t%s", i, f->names[i], f->slots[i]->class->name);
        printobjshort(f->slots[i]);
        puts("");
        i++;
    }
    printf("  %i elements.\n", i - 1);
}

const char *findnamefromframe(struct StackFrameObject *f, Object *ptr) {
    if (!f)
        return NULL;
    if (ptr < (Object *)f)
        return NULL;
    Object *p = &f->slots[0];
    int i = 0;
    while (p && p != ptr)
        p++, i++;
    if (p == ptr)
        return f->names[i];
    return NULL;
}

const char *findnamefromclosure(int idx) {
    Object *ptr = closure->data[idx];
    struct StackFrameObject *f = (struct StackFrameObject *)closure->frame;
    const char *name = findnamefromframe(f, ptr);
    while (!name && f) {
        f = (struct StackFrameObject *)f->parent;
        name = findnamefromframe(f, ptr);
    }
    return name ? name : "???";
}

void printclosure() {
    printf("%s\n", closure->name);
    for (int i=0; i<closure->size; i++) {
        printf("  %2i: %s\t%s", i + 1, findnamefromclosure(i),
                (*(closure->data[i]))->class->name);
        printobjshort(*(closure->data[i]));
        puts("");
        i++;
    }
    printf("  %i elements.\n", closure->size);
}

Object getaframeelement(struct StackFrameObject *f, char *name) {
    int i = 0;
    while (f->names[i]) {
        if (strcmp(f->names[i], name) == 0)
            return f->slots[i];
        i++;
    }
    return NULL;
}

Object getframeelement(char *name) {
    return getaframeelement(frame, name);
}

Object getclosureelement(char *name) {
    struct StackFrameObject *f = (struct StackFrameObject *)closure->frame;
    while (f) {
        Object o = getaframeelement(f, name);
        if (o)
            return o;
        f = f->parent;
    }
    return NULL;
}

Object getnamedelement(char *name) {
    Object o = getframeelement(name);
    if (o == NULL && closure) {
        o = getclosureelement(name);
    }
    return o;
}

int countframenames() {
    int i = 1;
    while (frame->names[i]) {
        i++;
    }
    return i - 1;
}

int countclosurenames() {
    if (closure)
        return closure->size;
    return 0;
}

static void changeframe() {
    frame = frame_stack[framedepth];
    closure = closure_stack[framedepth];
    printf("In frame %s. There are %i higher and %i lower frames.\n",
            frame->name, framedepth + 1, lowestframe - framedepth);
    printf("  %s\n", callstack[framedepth]);
    printf("Scope has %i local names and %i closure names.\n",
            countframenames(), countclosurenames());
}

static void upcmd(char *rest) {
    if (framedepth == -1) {
        printf("Already at topmost frame.\n");
        return;
    }
    framedepth--;
    changeframe();
}

static void downcmd(char *rest) {
    if (framedepth == calldepth) {
        printf("Already at bottommost frame.\n");
        return;
    }
    framedepth++;
    changeframe();
}

static void methodscmd(char *rest) {
    rest[strlen(rest)-1] = 0;
    Object o = getnamedelement(rest);
    if (!o) {
        printf("No such name '%s' in this scope.\n", rest);
        return;
    }
    printf("%s %s has these methods of its own:\n", o->class->name, rest);
    while (o) {
        ClassData c = o->class;
        for (int i=0; i<c->nummethods; i++) {
            char *vis = "public";
            char *extra = "method";
            if (o->flags & OFLAG_USEROBJ) {
                int mf = c->methods[i].flags;
                if (mf & MFLAG_CONFIDENTIAL)
                    vis = "confidential";
                else if (mf & MFLAG_PRIVATE)
                    vis = "lexical";
                if (mf & MFLAG_DEF)
                    extra = "def";
                else if (mf & MFLAG_REALSELFONLY)
                    extra = "var";
            }
            if (strcmp("outer", c->methods[i].name) != 0)
                printf("  %-20s - %s %s\n", c->methods[i].name, vis, extra);
        }
        if (o->flags & OFLAG_USEROBJ) {
            o = ((struct UserObject *)o)->super;
        } else
            o = NULL;
        if (o)
            printf("and inherits these methods from %s:\n", o->class->name);
    }
}

static void fieldcmd(char *rest) {
    char *oname = strtok(rest, " \n");
    Object o = getnamedelement(oname);
    if (!o) {
        printf("No such name '%s' in this scope.\n", rest);
        return;
    }
    char *fname = strtok(NULL, " \n");
    Method *m = findmethodsimple(o, fname);
    if (!m) {
        printf("No such method '%s' on '%s'.\n", fname, oname);
        return;
    }
    if (!(m->flags & MFLAG_REALSELFONLY)) {
        printf("Method '%s' is not a field.\n", fname);
        return;
    }
    Object r = callmethodself(o, fname, 0, NULL, NULL);
    m = findmethodsimple(r, "asDebugString");
    Object s;
    if (m)
        s = callmethod(r, "asDebugString", 0, NULL, NULL);
    else
        s = callmethod(r, "asString", 0, NULL, NULL);
    char *c = grcstring(s);
    printf("  %s.%s = %s\n", oname, fname, c);
}

static void showcmd(char *rest) {
    rest[strlen(rest) - 1] = 0;
    Object o = getnamedelement(rest);
    if (o == NULL) {
        printf("No such name '%s' in this scope.\n", rest);
        return;
    }
    Object s;
    Method *m = findmethodsimple(o, "asDebugString");
    if (m)
        s = callmethod(o, "asDebugString", 0, NULL, NULL);
    else
        s = callmethod(o, "asString", 0, NULL, NULL);
    char *c = grcstring(s);
    printf("  %s = %s\n", rest, c);
}

static void framecmd(char *rest) {
    printframe(frame);
}
 
static void closurecmd(char *rest) {
    printclosure();
}

static void help(char *rest) {
    struct DebuggerCommand *cmd = commands;
    while (cmd) {
        printf("%-10s %s\n", cmd->name, cmd->desc);
        cmd = cmd->next;
    }
}

static void addcommand(const char *name, const char *desc,void (*func)(char*)) {
    struct DebuggerCommand *cmd = malloc(sizeof(struct DebuggerCommand));
    cmd->name = name;
    cmd->desc = desc;
    cmd->func = func;
    cmd->next = commands;
    commands = cmd;
}

static void runcommand(char *str) {
    char *wd = strtok(str, " \n");
    char *rest = str + strlen(wd) + 1;
    struct DebuggerCommand *cmd = commands;
    while (cmd) {
        if (strcmp(cmd->name, wd) == 0) {
            cmd->func(rest);
            return;
        }
        cmd = cmd->next;
    }
    printf("No such command '%s'. Try 'help'.\n", wd);
}

int debugger() {
    addcommand("help", "List available commands", &help);
    addcommand("frame", "Show contents of current frame", &framecmd);
    addcommand("closure", "Show contents of current closure", &closurecmd);
    addcommand("show", "Show value of argument", &showcmd);
    addcommand("up", "Go up to caller frame", &upcmd);
    addcommand("down", "Go down to callee frame", &downcmd);
    addcommand("field", "Show value of field #2 on object #1", &fieldcmd);
    addcommand("methods", "List methods on argument", &methodscmd);
    for (framedepth=calldepth; framedepth>=-1; framedepth--)
        if (frame_stack[framedepth]) {
            frame = frame_stack[framedepth];
            break;
        }
    if (!frame)
        printf("No debugging frame information available.\n");
    else {
        lowestframe = framedepth;
        closure = closure_stack[framedepth];
        printf("Minigrace debugger\n");
        printf("Closest stack frame is for %s. There are %i higher frames.\n",
                frame->name, framedepth + 1);
        printf("  %s\n", callstack[framedepth]);
        printf("Scope has %i local names and %i closure names.\n",
                countframenames(), countclosurenames());
    }
    char *buf = malloc(128);
    size_t bsz = 128;
    printf(">>> ");
    while (getline(&buf, &bsz, stdin) != -1) {
        runcommand(buf);
        printf(">>> ");
    }
    printf("Bye.\n");
    exit(1);
}

