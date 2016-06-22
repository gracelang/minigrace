import "ast" as ast
import "parser" as parser
import "lexer" as lexer
import "io" as io
import "sys" as sys

def settings = object {
    var inputdir:String is public := ""
    var outputdir:String is public := ""
    var verbosity:Number is public := 0
    var publicOnly:Boolean is public := false
    def version:Number is public = 1.1
}

method parseArguments {
    def args = sys.argv
    if (args.size > 1) then {
        def indices = args.indices
        var skip := true
        for (indices) do { i ->
            def arg = args.at(i)
            if (arg.at(1)=="-") then {
                match (arg)
                    case { "-i" ->
                        if (args.size < (i+1)) then {
                            io.error.write "gracedoc: -i requires an argument.\n"
                            sys.exit(1)
                        }
                        skip := true
                        settings.inputdir := args.at(i+1)
                    } case { "-o" ->
                        if (args.size < (i+1)) then {
                            io.error.write "gracedoc: -o requires an argument.\n"
                            sys.exit(1)
                        }
                        skip := true
                        settings.outputdir := args.at(i+1)
                    } case { "-v" ->
                        if (args.size < (i+1)) then {
                            io.error.write "gracedoc: -v requires an argument.\n"
                            sys.exit(1)
                        }
                        skip := true
                        settings.verbosity := args.at(i+1).asNumber
                    } case { "--publiconly" ->
                        settings.publicOnly := true
                    } case { "--help" ->
                        print "Usage: {args.at(1)} -i <path> -o <path> [-v <level>] [--help] [--publiconly]"
                        print "  -i <path>      The directory to process (contains .grace files)"
                        print "  -o <path>      The directory to contain the generated HTML files"
                        print "  [-v <level>]   Optional. Level of detail in output (0 = none, 1 = some, 2 = all); default is 0"
                        print "  [--publiconly] Optional. If set, only public methods are documented and public "
                        print "                 variables are listed as methods. Default is off."
                        print "  [--help]       Optional. Print this usage information."
                    } case { _ ->
                        io.error.write "gracedoc: Invalid argument {arg}.\n"
                    }
            } else {
                if (skip == true) then {
                    skip := false
                } else {
                    io.error.write "gracedoc: Invalid argument {arg}. Arguments must start with a -.\n"
                    sys.exit(1)
                }
            }
        }
        if ((settings.inputdir=="") || (settings.outputdir=="")) then {
            io.error.write "gracedoc: Both the -i and -o arguments are required.\n"
            sys.exit(1)
        }
    } else {
        io.error.write "gracedoc: Both the -i and -o arguments are required.\n"
        sys.exit(1)
    }
}

type Section = type {
    html -> String
    isEmpty -> Boolean
    insert -> Done
}

class section.withTemplate(html')andCursorAt(idx) -> Section {
    var html:String is readable := html'
    var hasContent is readable := false
    var cursor:Number is confidential := idx
    var elts is public := dictionary []
    method addElement(n:String)withText(t:String) {
        hasContent := true
        elts.at(n)put(t)
    }
    method insert(t:String) {
        hasContent := true
        def begin = html.substringFrom(1)to(cursor)
        def end = html.substringFrom(cursor+1)to(html.size)
        html := "{begin}{t}{end}"
        cursor := cursor + t.size
    }
    method alphabetize {
        var alpha := elts.keys.sorted
        var numElts := 0
        for (alpha) do { k ->
            var rowClass
            if ((numElts % 2) == 0)
                then { rowClass := "row-even" }
                else { rowClass := "row-odd" }
            elts.at(k)put(elts.at(k).replace("class='placeholder'")
                                        with("class='{rowClass}'"))
            insert(elts.at(k))
            numElts := numElts + 1
        }
    }
}

method trim(c:String) -> String {
    var start := 1
    var end := c.size
    while { c.at(start) == " " } do { start := start + 1 }
    while { c.at(end) == " " } do { end := end - 1 }
    return c.substringFrom(start)to(end)
}

method indent(n:Number) -> String {
    //unrolled for optimization
    if (n==0) then { return "" }
    elseif (n==1) then { return "    " }
    elseif (n==2) then { return "        " }
    elseif (n==3) then { return "            " }
    elseif (n==4) then { return "                " }
    elseif (n==5) then { return "                    " }
    elseif (n==6) then { return "                        " }
    elseif (n==7) then { return "                            " }
    elseif (n==8) then { return "                                " }
    else { return "                                    "}
}

method autoindent(input) {
    def indentedtags = set ["link", "td", "meta", "style", "title",
        "table", "div", "tr", "th", "iframe", "script", "section", "h1", "h2",
        "h3", "h4", "h5", "h6", "ul", "li", "html", "body", "head", "hr" ]
    def samelineclosingtags = set ["a", "span", "td", "th", "li", "h1",
        "h2", "h3", "h4", "h5", "h6", "title", "script", "b", "i", "em",
        "strong"]
    var stack:Number := 0
    def inputSize = input.length
    var output := ""
    var char1
    var char2
    var cidx := 1
    var tagName
    while { cidx <= inputSize } do {
        tagName := ""
        char1 := input.at(cidx)
        char2 := input.at(cidx+1)
        if (char1=="<") then {
            if (char2!="/") then {
                //OPENING TAG
                var idx := cidx + 1
                while {(input.at(idx)!=" ") && (input.at(idx)!=">")} do {
                    tagName := tagName ++ input.at(idx)
                    idx := idx + 1
                }
                if (indentedtags.contains(tagName)) then {
                    if (tagName != "html") then {
                        output := output ++ "\n"
                    }
                    output := output ++ indent(stack)
                    stack := stack + 1
                }
            } else {
                //CLOSING TAG
                var idx := cidx + 2
                while {input.at(idx)!=">"} do {
                    tagName := tagName ++ input.at(idx)
                    idx := idx + 1
                }
                if (indentedtags.contains(tagName)) then {
                    stack := stack - 1
                    if (!samelineclosingtags.contains(tagName)) then {
                        output := output ++ "\n" ++ indent(stack)
                    }
                }
            }
        } elseif ((char1=="/") && (char2==">")) then {
            //ABBREVIATED CLOSING TAG
            stack := stack - 1
        }
        output := output ++ char1
        cidx := cidx + 1
    }
    return output
}

class directoryBuilderForFile(in) outTo (dir) as (pageType) {
    inherits ast.baseVisitor

    var isOnClassPage := false
    var isOnTypePage := false
    if (pageType=="class") then { isOnClassPage := true }
    elseif (pageType=="type") then { isOnTypePage := true }

    def pageName = if (in.endsWith(".grace").not) then { in }
                   else { in.substringFrom(0)to(in.size - 6) }
    def title = if (isOnTypePage) then { "Type: {pageName}" }
                elseif (isOnClassPage) then { "Class: {pageName}" }
                else { "Module: {pageName}" }

    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }

    method generate is public {
        var outfile
        if (!io.exists("{settings.outputdir}")) then { io.system("mkdir {settings.outputdir}") }
        if (!io.exists("{settings.outputdir}/{outdir}")) then { io.system("mkdir {settings.outputdir}/{outdir}") }
        if (!io.exists("{settings.outputdir}/{outdir}/classes")) then {
            io.system("mkdir {settings.outputdir}/{outdir}/classes")
        }
        if (!io.exists("{settings.outputdir}/{outdir}/types")) then {
            io.system("mkdir {settings.outputdir}/{outdir}/types")
        }
        if (isOnClassPage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/classes/{pageName}.html", "w")
        } elseif (isOnTypePage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/types/{pageName}.html", "w")
        } else {
            outfile := io.open("{settings.outputdir}/{outdir}/{pageName}.html", "w")
        }
        outfile.write("TEMPORARY")
        outfile.close

        if (!isOnClassPage && !isOnTypePage) then {
            // Rebuild the modules list with contents
            var out := "<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\n"
            out := out ++ "<!DOCTYPE html>\n<html>"
            out := out ++ "<head>"
            out := out ++ "<title>Modules | GraceDocs</title>"
            out := out ++ "<meta charset=\"UTF-8\" />"
            out := out ++ "<link rel=\"stylesheet\" href=\"gracedoc.css\">"
            out := out ++ "<script type='text/javascript' src=\"gracedoc.js\"></script>"
            out := out ++ "</head>"
            out := out ++ "<body>"
            out := out ++ "<div class='list-container'>"
            out := out ++ "<h5>Modules</h5><ul>"
            var modules := io.listdir(settings.outputdir)
            def modit = modules.iterator
            while {modit.hasNext} do {
                var mod := modit.next
                if ((mod.startsWith(".")==false) && (!mod.endsWith(".css")) && (!mod.endsWith(".js")) && (mod != "index.html") && (mod != "modules.html") && (mod != "404.html") && (mod != "inputs")) then {
                    out := out ++ "<li><span class='arrow-button-toggle' id='arrow-button-{mod}' onclick=\"toggleContents('{mod}');\">&#9654;</span><a href='{mod}/{mod}.html' target='mainFrame'>{mod}</a></li>"

                    out := out ++ "<div class='contents-list' id='contents-{mod}' style='display:none;'>"

                    out := out ++ "<h6>Types</h6><ul>"
                    var types := io.listdir("{settings.outputdir}/{mod}/types")
                    def typit = types.iterator
                    while {typit.hasNext} do {
                        var typ := typit.next
                        typ := typ.substringFrom(1)to(typ.size - 5)
                        if ((typ.startsWith(".")==false) && (typ != "contents.html")) then {
                            out := out ++ "<li><a href='{mod}/types/{typ}.html' target='mainFrame'>{typ}</a></li>"
                        }
                    }
                    out := out ++ "</ul>"

                    out := out ++ "<h6>Classes</h6><ul>"
                    var clss := io.listdir("{settings.outputdir}/{mod}/classes")
                    def clsit = clss.iterator
                    while {clsit.hasNext} do {
                        var cls := clsit.next
                        cls := cls.substringFrom(1)to(cls.size - 5)
                        if ((cls.startsWith(".")==false) && (cls != "contents.html")) then {
                            out := out ++ "<li><a href='{mod}/classes/{cls}.html' target='mainFrame'>{cls}</a></li>"
                        }
                    }
                    out := out ++ "</ul>"

                    out := out ++ "</div>"
                }
            }
            out := out ++ "</ul></div></body>"
            out := out ++ "</html>"
            var moduleslistfile := io.open("{settings.outputdir}/modules.html", "w")
            moduleslistfile.write(autoindent(out))
            moduleslistfile.close
        }
    }

    method visitTypeDec(o) -> Boolean {
        if (isOnTypePage == false) then {
            def typeVis = directoryBuilderForFile (o.name.value) outTo (outdir) as "type"
            o.accept(typeVis)
            typeVis.generate
            return false
        }
        return true
    }

    method visitMethod(m) -> Boolean {
        if (m.isClass.not) then { return false }
        if (isOnClassPage == false) then {
            def o = m.body.last
            if (o.superclass != false) then {
                o.superclass.accept(self)
            }
            def classVis = directoryBuilderForFile (o.name) outTo (outdir) as "class"
            o.accept(classVis)
            classVis.generate
            return false
        }
        return true
    }
}


class graceDocVisitor.createFrom(in) outTo (dir) as (pageType) {
    inherits ast.baseVisitor

    var isOnClassPage := false
    var isOnTypePage := false
    if (pageType=="class") then { isOnClassPage := true }
    elseif (pageType=="type") then { isOnTypePage := true }

    def pageName = if (in.endsWith(".grace").not) then { in }
                   else { in.substringFrom(0)to(in.size - 6) }
    def title = if (isOnTypePage) then { "Type: {pageName}" }
                elseif (isOnClassPage) then { "Class: {pageName}" }
                else { "Module: {pageName}" }
    var headerSection
    var methodsSection
    var typesSection
    var fieldsSection
    var classesSection
    var footerSection
    var methodtypesSection
    var topDescSection

    //debugging
    if (settings.verbosity > 1) then { print "On {title} - graceDocVisitor created... ({sys.elapsedTime})" }

    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }
    buildTemplate

    method getTypeLink(v:String) is confidential {
        def filename = "{v}.html"
        var out := "<a href='"
        //first, check current module's types directory for filename
        if (io.exists("{settings.outputdir}/{outdir}/types/{filename}")) then {
            if (isOnTypePage) then {
                out := out ++ "{filename}"
            } elseif (isOnClassPage) then {
                out := out ++ "../types/{filename}"
            } else {
                out := out ++ "types/{filename}"
            }
        //if not found, check imported module directories
        } elseif (io.exists("{settings.outputdir}/imported/types/{filename}")) then {
            if (isOnTypePage || isOnClassPage) then {
                out := out ++ "../../imported/types/{filename}"
            } else {
                out := out ++ "../imported/types/{filename}"
            }
        //if not found, check gracelib types
        } elseif (io.exists("{settings.outputdir}/gracelib/types/{filename}")) then {
            if (isOnTypePage || isOnClassPage) then {
                out := out ++ "../../gracelib/types/{filename}"
            } else {
                out := out ++ "../gracelib/types/{filename}"
            }
        } else {
            var dots := ""
            if (isOnClassPage || isOnTypePage) then {
                dots := "../../"
            } else {
                dots := "../"
            }
            out := out ++ "{dots}404.html"
        }
        out := out ++ "'>{v}</a>"
        return out
    }
    method getClassLink(c:String)show(rep:String){
      def filename = "{c}.html"
      var out := "<a href='"
      //first, check current module's class directory for filename
      if (io.exists("{settings.outputdir}/{outdir}/classes/{filename}")) then {
          if (isOnClassPage) then {
              out := out ++ "{filename}"
          } elseif (isOnTypePage) then {
              out := out ++ "../classes/{filename}"
          } else {
              out := out ++ "classes/{filename}"
          }
      //if not found, check imported module directories
      } elseif (io.exists("{settings.outputdir}/imported/classes/{filename}")) then {
          if (isOnTypePage || isOnClassPage) then {
              out := out ++ "../../imported/classes/{filename}"
          } else {
              out := out ++ "../imported/classes/{filename}"
          }
      //if not found, check gracelib classes
      } elseif (io.exists("{settings.outputdir}/gracelib/classes/{filename}")) then {
          if (isOnTypePage || isOnClassPage) then {
              out := out ++ "../../gracelib/classes/{filename}"
          } else {
              out := out ++ "../gracelib/classes/{filename}"
          }
      } else {
          var dots := ""
          if (isOnClassPage || isOnTypePage) then {
              dots := "../../"
          } else {
              dots := "../"
          }
          out := out ++ "{dots}404.html"
      }
      out := out ++ "'>{rep}</a>"
      return out
    }
    method getClassLink(c:String) is confidential {
        getClassLink(c)show(c)
    }

    method buildTemplate is confidential {
        var cursor := 0
        var out := "<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\n"
        out := out ++ "<!DOCTYPE html>\n<html>"
        out := out ++ "<head>"
        out := out ++ "<title>{title} | GraceDocs</title>"
        out := out ++ "<meta charset=\"UTF-8\" />"
        var cssDir
        if (isOnClassPage || isOnTypePage) then { cssDir := "../../gracedoc.css" }
        else { cssDir := "../gracedoc.css" }
        out := out ++ "<link rel=\"stylesheet\" href=\"{cssDir}\" />"
        out := out ++ "</head>"
        out := out ++ "<body>"
        out := out ++ "<div class='header'><span class='header-left'>{title}"
        cursor := out.size
        out := out ++ "</span><span class='header-right'>GraceDocs</span></div>"
        out := out ++ "<div class='container'>"
        headerSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "<section id='top-description'>"
        out := out ++ "<div class='top-box'>"
        cursor := out.size
        out := out ++ "</div>"
        out := out ++ "</section>"
        topDescSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "<section id='fields'>"
        out := out ++ "<h4>Fields</h4>"
        out := out ++ "<table>"
        out := out ++ "<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>"
        cursor := out.size
        out := out ++ "</table>"
        out := out ++ "</section>"
        fieldsSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "<section id='methodtypes'>"
        out := out ++ "<h4>Added methods</h4>"
        out := out ++ "<table>"
        out := out ++ "<tr><th>Method signature</th><th>Return type</th></tr>"
        cursor := out.size
        out := out ++ "</table>"
        out := out ++ "</section>"
        methodtypesSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "<section id='types'>"
        out := out ++ "<h4>Types</h4>"
        out := out ++ "<table>"
        out := out ++ "<tr><th>Type name</th></tr>"
        cursor := out.size
        out := out ++ "</table>"
        out := out ++ "</section>"
        typesSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "<section id='classes'>"
        out := out ++ "<h4>Classes</h4>"
        out := out ++ "<table>"
        out := out ++ "<tr><th>Class name & constructor</th></tr>"
        cursor := out.size
        out := out ++ "</table>"
        out := out ++ "</section>"
        classesSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "<section id='methods'>"
        out := out ++ "<h4>Methods</h4>"
        out := out ++ "<table>"
        out := out ++ "<tr><th>Method signature</th><th>Return type</th></tr>"
        cursor := out.size
        out := out ++ "</table>"
        out := out ++ "</section>"
        methodsSection := section.withTemplate(out)andCursorAt(cursor)

        cursor := 0
        out := "</div></body>"
        out := out ++ "</html>"
        footerSection := section.withTemplate(out)andCursorAt(cursor)
    }

    method build404 {
        var out := "<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\n"
        out := out ++ "<!DOCTYPE html>\n<html>"
        out := out ++ "<head><title>404 - Page not found | GraceDocs</title></head>"
        out := out ++ "<body><div id='message-404'>404 - Page not found</div></body>"
        out := out ++ "</html>"
        var file404 := io.open("{settings.outputdir}/404.html", "w")
        file404.write(autoindent(out))
        file404.close
    }

    method buildindex {
        var out := "<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\n"
        out := out ++ "<!DOCTYPE html>\n<html lang=\"en\">"
        out := out ++ "<head>"
        out := out ++ "<title>GraceDocs</title>"
        out := out ++ "<link rel=\"stylesheet\" href=\"graceDoc.css\">"
        out := out ++ "</head>"
        out := out ++ "<body>"
        out := out ++ "<iframe id=\"frame-sidebar\" src=\"modules.html\" name=\"moduleFrame\"></iframe>"
        out := out ++ "<iframe id=\"frame-main\" src=\"\" name=\"mainFrame\"></iframe>"
        out := out ++ "</body>"
        out := out ++ "</html>"
        var fileindex := io.open("{settings.outputdir}/index.html", "w")
        fileindex.write(autoindent(out))
        fileindex.close
    }

    method buildjs {
        var out := ‹function toggleContents(eltid) {
    var elt = document.getElementById('contents-'+eltid)
    var arrow = document.getElementById('arrow-button-'+eltid)
    if (elt.style.display == 'none') {
        elt.style.display = 'block';
        arrow.innerHTML = '&#9660';
    } else {
        elt.style.display = 'none';
        arrow.innerHTML = '&#9654';
    }
}›
        var filejs := io.open("{settings.outputdir}/gracedoc.js", "w")
        filejs.write(out)
        filejs.close
    }

    method buildcss {
        var out := ‹@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);

* {
    margin: 0px;
    padding: 0px;
}

body {
    font-size: 16px;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

a, a:visited {
    color: #00d;
}

.header {
    height: 50px;
    line-height: 50px;
    padding: 0px 20px;
    font-weight: bold;
    background-color: rgb(0,80,105);
    border-bottom: 2px solid #333;
    font-size: 20px;
    color: #fff;
}

.header-left {
    float: left;
}

.header-right {
    float: right;
}

.description {
    font-style: italic;
    font-size: 14px;
}

.container {
    padding: 20px;
}

section {
    border: 1px solid #079;
    border-radius: 0px;
}

section > h4 {
    margin: 0px;
    background-color: rgb(80,160,185);
    padding: 5px 10px;
}

section + section {
    margin-top: 20px;
}

table {
    margin: 0px;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

th {
    text-align: left;
    background: rgb(130,200,215);
    color: rgb(0,80,105);
    font-size: 10px;
    padding: 5px 10px;
    border-bottom: 1px solid #079;
}

td {
    padding: 10px;
    word-wrap: break-word;
}

.row-odd { background-color: #eeeeee; }
.row-odd + tr.description {
    background-color: #eeeeee;
}

.row-even { background-color: #ffffff; }
.row-even + tr.description {
    background-color: #ffffff;
}

tr.description > td {
    padding-top: 0px;
}
.code, code {
    font-family: Monaco, monospace;
}
.description {
    font-size: 14px;
    width: 50%;
}
.parameter-type {
    font-family: Monaco, monospace;
}
.type-name {
    font-family: Monaco, monospace;
    font-weight: bold;
}
.method-name {
    font-weight: bold;
}
.class-name {
    font-weight: bold;
}
.ancestor-name {
    font-weight: bold;
}
.identifier-name {
    font-family: Monaco, monospace;
    font-weight: bold;
}

/* MODULES LIST */

.list-container h5 {
    font-size: 16px;
    background-color: rgb(0,80,105);
    color: #ffffff;
    padding: 5px 10px;
}

.list-container h6 {
    font-size: 12px;
    margin: 0px;
    color: #000;
    padding: 0px 5px;
}

.list-container ul {
    padding: 5px 10px 10px 10px;
}
.list-container li {
    list-style-type: none;
}

iframe {
    border: none;
}

#frame-sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 20%;
    height: 100%;
}

#frame-main {
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
    height: 100%;
    border-left: 4px solid #bbb
}

.contents-list {
    background: #e0e8f0;
    padding: 10px 5px 5px 5px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 14px;
}

.arrow-button-toggle {
    font-family: monospace;
    font-size: 14px;
    color: rgb(0,0,105);
    cursor: pointer;
    width: 20px;
    display: inline-block;
}

.top-box {
    word-wrap: break-word;
    margin: 20px;
}

.top-box hr {
    margin: 10px 0;
    border: 1px solid #079;
}

.headline {
    font-size: 18px;
}

.quiet {
    color: #888;
    font-size: 14px;
}›
        var filecss := io.open("{settings.outputdir}/gracedoc.css", "w")
        filecss.write(out)
        filecss.close
    }

    method generate is public {
        if (settings.verbosity > 1) then { print "On {title} - starting to assemble HTML ({sys.elapsedTime})" }

        var outfile
        var output := ""
        if (isOnClassPage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/classes/{pageName}.html", "w")
        } elseif (isOnTypePage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/types/{pageName}.html", "w")
        } else {
            outfile := io.open("{settings.outputdir}/{outdir}/{pageName}.html", "w")
        }
        output := output ++ headerSection.html
        if (topDescSection.hasContent) then {
            output := output ++ topDescSection.html
        }
        if (fieldsSection.hasContent) then {
            fieldsSection.alphabetize
            output := output ++ fieldsSection.html
        }
        if (methodtypesSection.hasContent) then {
            methodtypesSection.alphabetize
            output := output ++ methodtypesSection.html
        }
        if (typesSection.hasContent) then {
            typesSection.alphabetize
            output := output ++ typesSection.html
        }
        if (classesSection.hasContent) then {
            classesSection.alphabetize
            output := output ++ classesSection.html
        }
        if (methodsSection.hasContent) then {
            methodsSection.alphabetize
            output := output ++ methodsSection.html
        }
        output := output ++ footerSection.html
        output := autoindent(output)
        outfile.write(output)
        outfile.close
        if (settings.verbosity > 1) then { print "On {title} - file written ({sys.elapsedTime})" }
    }

    method visitMethodType(o) -> Boolean {
        if (isOnTypePage) then {
            var t := "<tr class='placeholder'><td><code>"
            var n := ""
            for (o.signature) do { part ->
                t := t ++ "<span class='method-name'>" ++ part.name ++ "</span>"
                n := n ++ part.name
                if (part != o.signature.last) then { n := n ++ "()" }
                if (part.params.size > 0) then {
                    t := t ++ "("
                    for (part.params) do { param ->
                        if (param.dtype != false) then {
                            t := t ++ "<span class='parameter-name'>" ++ param.nameString ++ "</span>"
                            t := t ++ ":"
                            if (param.dtype.kind == "identifier") then {
                                t := t ++ getTypeLink(param.dtype.value)
                            } elseif (param.dtype.kind == "generic") then {
                                t := t ++ getTypeLink(param.dtype.value.value) ++ "&lt;"
                                param.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                                t := t ++ "&gt;"
                            }
                        } else {
                            t := t ++ "<span class='parameter-name'>" ++ param.nameString ++ "</span>"
                        }
                        if ((part.params.size > 1) && (param != part.params.last)) then {
                            t := t ++ ", "
                        }
                    }
                    t := t ++ ")"
                }
            }
            t := t ++ "</code></td>"
            t := t ++ "<td><code>"
            if (o.rtype != false) then {
                if (o.rtype.kind == "identifier") then {
                    t := t ++ getTypeLink(o.rtype.value)
                } elseif (o.rtype.kind == "generic") then {
                    t := t ++ getTypeLink(o.rtype.value.value) ++ "&lt;"
                    o.rtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                    t := t ++ "&gt;"
                }
            } else {
                t := t ++ "Done"
            }
            t := t ++ "</code></td></tr>"
            t := t ++ (formatComments(o) rowClass "description" colspan 2)
            methodtypesSection.addElement(n)withText(t)
            return false
        } else {
            return true
        }
    }

    method visitTypeDec(o) -> Boolean {
        if (isOnTypePage == false) then {
            var t := "<tr class='placeholder'>"
            def n = o.name.value
            t := t ++ "<td class='type-name'>{getTypeLink(o.name.value)}"
            if (false != o.typeParams) then {
                t := t ++ "&lt;"
                for (o.typeParams.params) do { g ->
                    t := t ++ g.nameString
                    if (g != o.typeParams.params.last) then { t := t ++ ", " }
                }
                t := t ++ "&gt;"
            }
            t := t ++ "</td></tr>"

            def typeVis = graceDocVisitor.createFrom("{o.name.value}")outTo("{outdir}")as("type")
            o.accept(typeVis)
            typeVis.generate
            t := t ++ formatComments(o) rowClass "description" colspan 1
            typesSection.addElement(n)withText(t)
            return false
        } else {
            var t := "<span class='headline'><b><code>{o.name.value}"
            if (false != o.typeParams) then {
                t := t ++ "&lt;"
                for (o.typeParams.params) do { g->
                    t := t ++ g.nameString
                    if (g != o.typeParams.params.last) then { t := t ++ ", " }
                }
                t := t ++ "&gt;"
            }
            t := t ++ "</b> = "
            var temp := ""
            var ops := list []
            var tps := list []
            var node := o.value

            if (node.kind == "op") then {
                while {node.kind == "op"} do {
                    ops.push(node.value)
                    if ((node.left.kind == "identifier") && (node.right.kind == "identifier")) then {
                        temp := "{getTypeLink(node.left.value)} {ops.pop} {getTypeLink(node.right.value)}"
                    } elseif (node.right.kind == "identifier") then {
                        tps.push(node.right.value)
                    } elseif (node.left.kind == "identifier") then {
                        temp := "{getTypeLink(node.left.value)} {ops.pop}"
                    } elseif (node.left.kind == "member") then {
                        temp := getTypeLink("{node.left.in.value}.{node.left.value}") ++ " {ops.pop}"
                    } elseif (node.right.kind == "member") then {
                        tps.push("{node.left.in.value}.{node.left.value}")
                    }
                    node := node.left
                }
                while {(tps.size > 0) && (ops.size > 0)} do {
                    def p = tps.pop
                    temp := "{temp} {ops.pop} {getTypeLink(p.value)}"
                }
                if (ops.size > 0) then {
                    temp := "{temp} {ops.pop}"
                }
                t := t ++ temp ++ " type "
                t := t ++ "\{ <span class='quiet'>...added methods below...</span> \}"
            } elseif (node.kind == "typeliteral") then {
                t := t ++ temp ++ " type "
                t := t ++ "\{ <span class='quiet'>...added methods below...</span> \}"
            } elseif (node.kind == "identifier") then {
                t := t ++ " " ++ getTypeLink(node.value)
                if (node.generics != false) then {
                    t := t ++ "&lt;"
                    for (node.generics) do { g->
                        t := t ++ g.value
                        if (g != node.generics.last) then { t := t ++ ", " }
                    }
                    t := t ++ "&gt;"
                }
            } elseif (node.kind == "member") then {
                t := t ++ getTypeLink("{node.in.value}.{node.value}")
                if (node.generics != false) then {
                    t := t ++ "&lt;"
                    for (node.generics) do { g->
                        t := t ++ g.value
                        if (g != node.generics.last) then { t := t ++ ", " }
                    }
                    t := t ++ "&gt;"
                }
            }
            t := t ++ "</code></span>"
            t := t ++ "<hr />"
            t := t ++ formatComments(o) rowClass "top-box-description" colspan 1
            topDescSection.insert(t)
            return true
        }
    }

    method visitMethod(o)up(anc) -> Boolean {

        if (settings.publicOnly && o.isConfidential) then { return false }
        if (o.isClass) then {
            return doClassMethod(o)up(anc)
        }
        var t := "<tr class='placeholder'><td><code>"
        t := t ++ "<span class='ancestor-name'>{buildDefChain(anc)}</span>"
        var n := ""
        for (o.signature) do { part ->
            t := t ++ "<span class='method-name'>" ++ part.name ++ "</span>"
            n := n ++ part.name
            if (part != o.signature.last) then { n := n ++ "()" }
            if (part.params.size > 0) then {
                t := t ++ "("
                for (part.params) do { param ->
                    if (param.dtype != false) then {
                        t := t ++ "<span class='parameter-name'>" ++ param.nameString ++ "</span>"

                        t := t ++ ":<span class='parameter-type'>"
                        if (param.dtype.kind == "identifier") then {
                            t := t ++ getTypeLink(param.dtype.value)
                        } elseif (param.dtype.kind == "generic") then {
                            t := t ++ getTypeLink(param.dtype.value.value) ++ "&lt;"
                            param.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                            t := t ++ "&gt;"
                        }
                        t := t ++ "</span>"
                        //t := t ++ ":<span class='parameter-type'>" ++ getTypeLink(param.dtype.value) ++ "</span>"
                    } else {
                        t := t ++ "<span class='parameter-name'>" ++ param.nameString ++ "</span>"
                    }
                    if ((part.params.size > 1) && (param != part.params.last)) then {
                        t := t ++ ", "
                    }
                }
                t := t ++ ")"
            }
        }
        t := t ++ "</code></td>"
        t := t ++ "<td><code>"
        if (o.dtype != false) then {
            t := t ++ getTypeLink(o.dtype.value)
        } else {
            t := t ++ getTypeLink("Done")
        }
        t := t ++ "</code></td></tr>"
        t := t ++ formatComments(o) rowClass "description" colspan 2
        methodsSection.addElement(buildDefChain(anc) ++ n)withText(t)
        return false
    }
    method buildDefChain(anc) -> String {
      var a := anc
      var s := ""
      while { a.isEmpty.not } do {
          if ("defdec" == a.parent.kind) then {
              s := (a.parent.nameString ++ "." ++ s)
          }
          elseif ("object" != a.parent.kind) then {
              return s
          }
          a := a.forebears
      }
      return s
    }
    method doClassMethod(m)up(anc) -> Boolean {
        def o = m.body.last

        if (isOnClassPage == false) then {
            var t := "<tr class='placeholder'>"
            def n = m.nameString
            t := t ++ "<td><code><span class='ancestor-name'>{buildDefChain(anc)}</span>"
            m.signature.do { part ->
                t := t ++ "<span class='method-name'>{getClassLink(n)show(part.name)}</span>"
                if (part.params.size > 0) then {
                    t := t ++ "("
                    for(part.params) do { param ->
                        if (param.dtype != false) then {
                            t := t ++ "<span class='parameter-name'>" ++ param.value ++ "</span>"
                            t := t ++ ":<span class='parameter-type'>" ++ getTypeLink(param.dtype.nameString) ++ "</span>"
                        } else {
                            t := t ++ "<span class='parameter-name'>" ++ param.value ++ "</span>"
                        }
                        if ((part.params.size > 1) && (param != part.params.last)) then {
                            t := t ++ ", "
                        }
                    }
                    t := t ++ ")"
                }
            }

            if (m.dtype != false) then {
                t := t ++ " -> "
                if (m.dtype.kind == "identifier") then {
                    t := t ++ getTypeLink(m.dtype.value)
                } elseif (m.dtype.kind == "generic") then {
                    t := t ++ getTypeLink(m.dtype.value.value) ++ "&lt;"
                    m.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                    t := t ++ "&gt;"
                }
            }
            t := t ++ "</code></td></tr>"

            if(o.superclass != false) then {
                o.superclass.accept(self)
            }

            def classVis = graceDocVisitor.createFrom(n) outTo (outdir) as "class"
            o.accept(classVis)
            classVis.generate
            t := t ++ formatComments(o) rowClass "top-box-description" colspan 1
            classesSection.addElement(buildDefChain(anc) ++ n) withText(t)
            return false
          } else {
            var t := "<span class='headline'><code><b>{o.name}</b>."

            for(m.signature) do { part ->
                t := t ++ "<b>{part.name}</b>"
                if (part.params.size > 0) then {
                    t := t ++ "("
                    for(part.params) do { param ->
                        if (param.dtype != false) then {
                            t := t ++ param.value
                            t := t ++ ":" ++ getTypeLink(param.dtype.value)
                        } else {
                            t := t ++ param.value
                        }
                        if ((part.params.size > 1) && (param != part.params.at(part.params.size))) then {
                            t := t ++ ", "
                        }
                    }
                    t := t ++ ")"
                }
            }

            if (m.dtype != false) then {
                t := t ++ " -> "
                if (m.dtype.kind == "identifier") then {
                    t := t ++ getTypeLink(m.dtype.value)
                } elseif (m.dtype.kind == "generic") then {
                    t := t ++ getTypeLink(m.dtype.value.value) ++ "&lt;"
                    m.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                    t := t ++ "&gt;"
                }
            }

            t := t ++ "</code></span><hr />"
            t := t ++ formatComments(o) rowClass "top-box-description" colspan 1
            topDescSection.insert(t)
            return true
        }
    }

    method visitDefDec(o)up(anc) -> Boolean {
        if (isOnClassPage == true) then {
            if (!settings.publicOnly) then {
                def n = o.name.value


                var t := "<tr class='placeholder'><td><code>def</code></td>"
                t := t ++ "<td class='identifier-name'>{buildDefChain(anc) ++ n}"
                t := t ++ "</td><td><code>"

                if (o.dtype != false) then {
                    if (o.dtype.kind == "identifier") then {
                        t := t ++ getTypeLink(o.dtype.value)
                    } elseif (o.dtype.kind == "generic") then {
                        t := t ++ getTypeLink(o.dtype.value.value) ++ "&lt;"
                        o.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                        t := t ++ "&gt;"
                    }
                }
                t := t ++ "</code></td></tr>"
                t := t ++ formatComments(o) rowClass "description" colspan 3
                fieldsSection.addElement(buildDefChain(anc) ++ n) withText(t)

            } else {
                //in publicOnly mode, readable defs should show up as getter methods
                if (o.isReadable) then {
                    //FIXME: if isOnTypePage, then ???
                    def n = o.name.value
                    var t := "<tr class='placeholder'><td class='identifier-name'>{buildDefChain(anc) ++ n}"
                    t := t ++ "</td><td><code>"
                    if (o.dtype != false) then {
                        if (o.dtype.kind == "identifier") then {
                            t := t ++ getTypeLink(o.dtype.value)
                        } elseif (o.dtype.kind == "generic") then {
                            t := t ++ getTypeLink(o.dtype.value.value) ++ "&lt;"
                            o.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                            t := t ++ "&gt;"
                        }
                    }
                    t := t ++ "</code></td></tr>"
                    t := t ++ formatComments(o) rowClass "description" colspan 2
                    methodsSection.addElement(buildDefChain(anc) ++ n)withText(t)
                }
            }
            return anc.parent.isObject
        } else {
            if (!settings.publicOnly) then {
                def n = buildDefChain(anc) ++ o.name.value
                var t := "<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{n}"
                t := t ++ "</td><td><code>"
                if (o.dtype != false) then {
                    if (o.dtype.kind == "identifier") then {
                        t := t ++ getTypeLink(o.dtype.value)
                    } elseif (o.dtype.kind == "generic") then {
                        t := t ++ getTypeLink(o.dtype.value.value) ++ "&lt;"
                        o.dtype.args.do { each -> t := "{t}{each.value}" } separatedBy { t := t ++ ", " }
                        t := t ++ "&gt;"
                    }
                }
                t := t ++ "</code></td></tr>"
                t := t ++ formatComments(o) rowClass "description" colspan 3
                fieldsSection.addElement(n)withText(t)

            } else {
                //in publicOnly mode, readable defs should show up as getter methods
                if (o.isReadable) then {
                    var t := "<tr class='placeholder'><td class='identifier-name'>{buildDefChain(anc) ++ o.name.value}"
                    def n = o.name.value
                    t := t ++ "</td><td><code>"
                    if (o.dtype != false) then {
                        if (o.dtype.kind == "identifier") then {
                            t := t ++ getTypeLink(o.dtype.value)
                        } elseif (o.dtype.kind == "generic") then {
                            t := t ++ getTypeLink(o.dtype.value.value) ++ "&lt;"
                            o.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                            t := t ++ "&gt;"
                        }
                    }
                    t := t ++ "</code></td></tr>"
                    t := t ++ formatComments(o) rowClass "description" colspan 2
                    methodsSection.addElement(buildDefChain(anc) ++ n)withText(t)
                }
            }
            return anc.parent.isObject
        }
    }

    method visitVarDec(o)up(anc) -> Boolean {
        def n = buildDefChain(anc) ++ o.nameString
        if (isOnClassPage == true) then {
            if (!settings.publicOnly) then {
                var t := "<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{buildDefChain(anc) ++ o.name.value}"
                t := t ++ "</td><td><code>"
                if (o.dtype != false) then {
                    t := t ++ "{getTypeLink(o.dtype.value)}"
                }
                t := t ++ "</code></td></tr>"
                t := t ++ formatComments(o) rowClass "description" colspan 3
                fieldsSection.addElement(n)withText(t)
            } else {
                if (o.isReadable) then {
                    var t := "<tr class='placeholder'><td class='identifier-name'>{buildDefChain(anc) ++ o.name.value}"
                    t := t ++ "</td><td>"
                    if (o.dtype != false) then {
                        t := t ++ "{getTypeLink(o.dtype.value)}"
                    }
                    t := t ++ "</code></td></tr>"
                    t := t ++ formatComments(o) rowClass "description" colspan 2
                    methodsSection.addElement(n)withText(t)
                }
                if (o.isWritable) then {
                    var t := "<tr class='placeholder'><td><code><span class='method-name'>{buildDefChain(anc) ++ o.name.value}:=</span>"
                    if (o.dtype != false) then {
                        t := t ++ "(_:{getTypeLink(o.dtype.value)})"
                    }
                    t := t ++ "</code></td><td><code>Done</code></td></tr>"
                    t := t ++ "<tr class='description'><td colspan='2'>Updates {n}</td></tr>"
                    methodsSection.addElement(n++":=")withText(t)
                }
            }
            return false
        } else {
            if (!settings.publicOnly) then {
                var t := "<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{buildDefChain(anc) ++ o.name.value}"
                t := t ++ "</td><td><code>"
                if (o.dtype != false) then {
                    t := t ++ "{getTypeLink(o.dtype.value)}"
                }
                t := t ++ "</code></td></tr>"
                t := t ++ formatComments(o) rowClass "description" colspan 3
                fieldsSection.addElement(n)withText(t)
            } else {
                if (o.isReadable) then {
                    var t := "<tr class='placeholder'><td class='identifier-name'>{buildDefChain(anc) ++ o.name.value}"
                    t := t ++ "</td><td><code>"
                    if (o.dtype != false) then {
                        t := t ++ "{getTypeLink(o.dtype.value)}"
                    }
                    t := t ++ "</code></td></tr>"
                    t := t ++ formatComments(o) rowClass "description" colspan 2
                    methodsSection.addElement(n)withText(t)
                }
                if (o.isWritable) then {
                    var t := "<tr class='placeholder'><td><code><span class='method-name'>{n}:=</span>"
                    if (o.dtype != false) then {
                        t := t ++ "(_:{getTypeLink(o.dtype.value)})"
                    }
                    t := t ++ "</code></td><td><code>Done</code></td></tr>"
                    t := t ++ "<tr class='description'><td colspan='2'>Updates {n}</td></tr>"
                    methodsSection.addElement "{n}:=" withText(t)
                }
            }
            return false
        }
    }

    method visitInherits(o) -> Boolean {
        //if (isOnClassPage) then {

        //} else {
            return true
        //}
    }

}

method formatComments(astNode) rowClass (rowClassName) colspan (n) -> String {
    var t := ""
    if (false != astNode.comments) then {
        t := t ++ "<tr class='{rowClassName}'><td colspan='{n}'>"
        t := t ++ astNode.comments.value ++ "\n"
        t := t ++ "</td></tr>"
    }
    t
}

parseArguments

var file
var dbv
var gdv
var modulename
var counter

var allModules := io.listdir(settings.inputdir)
var parsedFiles := dictionary []
var inputWasFound := false

//LEX AND PARSE ALL INPUT FILES
counter := 1
for (allModules) do { filename ->
    if (filename.endsWith(".grace")) then {
        file := io.open("{settings.inputdir}/{filename}", "r")
        if (settings.verbosity > 0) then { print "On {filename} - lexing... ({sys.elapsedTime})" }
        var tokens := lexer.new.lexfile(file)
        if (settings.verbosity > 0) then { print "On {filename} - done lexing... ({sys.elapsedTime})" }
        if (settings.verbosity > 0) then { print "On {filename} - parsing... ({sys.elapsedTime})" }
        //var values := parser.parse(tokens)
        parsedFiles.at(counter)put(parser.parse(tokens))

        if (settings.verbosity > 0) then { print "On {filename} - done parsing... ({sys.elapsedTime})" }
        counter := counter + 1
        inputWasFound := true
        file.close
    }
}

if (!inputWasFound) then {
    io.error.write "gracedoc: Input error - no Grace files found in the input directory."
    io.error.write "          Either the directory doesn't exist, or it doesn't contain any files."
    io.error.write "          Directories should be named relative to the ./minigrace executable."
    sys.exit(1)
}

//BUILD DIRECTORY STRUCTURE
counter := 1
for (allModules) do { filename ->
    if (filename.endsWith(".grace")) then {
        if (settings.verbosity > 0) then { print "On {filename} - building directories... ({sys.elapsedTime})" }
        modulename := filename.substringFrom(1)to(filename.size - 6)
        def moduleObject = parsedFiles.at(counter)
        dbv := directoryBuilderForFile(filename) outTo (modulename) as "module"
        moduleObject.accept(dbv)
        dbv.generate
        if (settings.verbosity > 0) then { print "On {filename} - directories built... ({sys.elapsedTime})" }
        counter := counter + 1
    }
}

//GENERATE ACTUAL HTML PAGES
counter := 1
for (allModules) do { filename ->
    if (filename.endsWith(".grace")) then {
        if (settings.verbosity > 0) then { print "On {filename} - generating GraceDocs... ({sys.elapsedTime})" }
        modulename := filename.substringFrom(1)to(filename.size - 6)
        def moduleObject = parsedFiles.at (counter)
        gdv := graceDocVisitor.createFrom(filename) outTo (modulename) as "module"
        moduleObject.accept(gdv)
        gdv.generate
        gdv.buildindex
        gdv.buildcss
        gdv.buildjs
        gdv.build404
        if (settings.verbosity > 0) then { print "On {filename} - done! ({sys.elapsedTime})" }
        counter := counter + 1
    }
}
