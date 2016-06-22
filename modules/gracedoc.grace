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
    md -> String
    isEmpty -> Boolean
    insert -> Done
}

//Class for the template that the program uses to create the HTML page
class section.withTemplate(md')andCursorAt(idx) -> Section {
    var md:String is readable := md'
    var hasContent is readable := false
    var cursor:Number is confidential := idx
    var elts is public := dictionary []
    method addElement(n:String)withText(t:String) {
        hasContent := true
        elts.at(n)put(t)
    }
    method insert(t:String) {
        hasContent := true
        def begin = md.substringFrom(1)to(cursor)
        def end = md.substringFrom(cursor+1)to(md.size)
        md := "{begin}{t}{end}"
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


//Class for other sections without a template
class emptySection.withCursorAt(idx) -> Section {
    var md:String is readable := ""
    var hasContent is readable := false
    var cursor:Number is confidential := idx
    var elts is public := dictionary []
    method addElement(n:String)withText(t:String) {
        hasContent := true
        elts.at(n)put(t)
    }
    method insert(t:String) {
        hasContent := true
        def begin = md.substringFrom(1)to(cursor)
        def end = md.substringFrom(cursor+1)to(md.size)
        md := "{begin}{t}{end}"
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

/////////////////////////////////////////////////////////////////////////////////////

//Parameter class
class Parameter{
     var name:String is public := ""
     var args:String is public := ""

     method insertName(text:String){name := name ++ text}
     method insertArg(text:String){args := args ++ text}
}


//Type to hold the properties of methods or
// other parts of objects
class Property{
     var name:String is public := ""
     var params: Set<Parameter> is readable := set [] //Set of parameters
     var comments:String is public := ""

     method addParam(param:Parameter) {params.add(param)}
}

method visitMethodType(o) -> Boolean {
    if (isOnTypePage) then {

       for (o.signature) do { part ->
            temp.insertName(part.name ++ " `")
            if (part.params.size > 0) then {
                temp := t ++ "`("
                for (part.params) do { param ->
                    if (param.dtype != false) then {
                        t := t ++ "" ++ param.nameString
                        t := t ++ ":` "
                        if (param.dtype.kind == "identifier") then {
                            t := t ++ getTypeLink(param.dtype.value)
                        } elseif (param.dtype.kind == "generic") then {
                            t := t ++ getTypeLink(param.dtype.value.value)
                            param.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                        }
                    } else {
                        t := t ++ param.nameString ++ "  "
                    }
                    if ((part.params.size > 1) && (param != part.params.last)) then {
                        t := t ++ "`, "
                    }
                }
                t := t ++ "`)`"
            }
            //here...
            t := t ++ "  "
       }
       t := t ++ "`—>` "

       if (o.rtype != false) then {
            if (o.rtype.kind == "identifier") then {
                t := t ++ getTypeLink(o.rtype.value)
            } elseif (o.rtype.kind == "generic") then {
                t := t ++ getTypeLink(o.rtype.value.value) ++ "`"
                o.rtype.args.do { each -> t := "{t}{getTypeLink(each.value)}  " } separatedBy { t := t ++ ", " }
                t := t ++ "`"
            }
       } else {
            t := t ++ "`Done`"
       }
       //Two spaces for markdown newline added here!
       t := t ++ "  \n"
       t := t ++ (formatComments(o) rowClass "description" colspan 2)
       methodtypesSection.addElement(n)withText(t)
       return false

//Class for a markdown writer object
class markdownWriter
{
     var definition: String is readable := ""
     var description: String is readable := ""
     var propSet: Set<Property> is readable := set [] //Set of propeties
     var bin: String is readable := ""

     //Method to add text to definition
     method insertDef(text:String)
     {
          definition := definition ++ text
          print "\n\n Inserted to definition"
     }

     //Method to add text to description
     method insertDesc(text:String)
     {
          description := description ++ text
          print "\n\n Inserted to description"
     }

     //Adds a propety to the set contained in this obj
     method addProp(title:String)withDesc(desc:String)
     {
          //Create the property
          var newProp := Property

          //Set the values
          newProp.title := title;
          newProp.description := desc;

          //Add it to the set
          propSet.add(newProp);

          print "added prop"
     }

     //Add to the non-structured bin variable
     method add(string:String)
     {
          bin := bin ++ string
          print (bin)
     }


     //Write out all of the markdown to a string,
     //formatted correctly
     method buildMarkdown -> String
     {
          var temp := "### Definition \n"
          temp := temp ++ definition
          temp := temp ++ "\n\n### Description\n"
          temp := temp ++ description

          print (temp)
          return temp

     }

     //Dumps the current bin variable
     method dumpBin -> String { return bin }
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
            outfile := io.open("{settings.outputdir}/{outdir}/classes/{pageName}.md", "w")
        } elseif (isOnTypePage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/types/{pageName}.md", "w")
        } else {
            outfile := io.open("{settings.outputdir}/{outdir}/{pageName}.md", "w")
        }
        outfile.write("TEMPORARY")
        outfile.close

        if (!isOnClassPage && !isOnTypePage) then {
            // Rebuild the modules list with contents
            var out := "---\n"
            out := out ++ "title: \"{title}\"\n"
            out := out ++ "keywords: mydoc\n"
            out := out ++ "sidebar: grace-doc-sidebar\n"
            out := out ++ "toc: false"
            out := out ++ "permalink: /drawingCanvas/\n"
            out := out ++ "folder: grace-docs\n"
            out := out ++ "---\n"

            var modules := io.listdir(settings.outputdir)
            def modit = modules.iterator
            while {modit.hasNext} do {
                var mod := modit.next
                if ((mod.startsWith(".")==false) && (!mod.endsWith(".css")) && (!mod.endsWith(".js")) && (mod != "index.md") && (mod != "modules.md") && (mod != "404.md") && (mod != "inputs")) then {
                    out := out ++ "<li><span class='arrow-button-toggle' id='arrow-button-{mod}' onclick=\"toggleContents('{mod}');\">&#9654;</span><a href='{mod}/{mod}.md' target='mainFrame'>{mod}</a></li>"

                    out := out ++ "<div class='contents-list' id='contents-{mod}' style='display:none;'>"

                    out := out ++ "<h6>Types</h6><ul>"
                    var types := io.listdir("{settings.outputdir}/{mod}/types")
                    def typit = types.iterator
                    while {typit.hasNext} do {
                        var typ := typit.next
                        typ := typ.substringFrom(1)to(typ.size - 5)
                        if ((typ.startsWith(".")==false) && (typ != "contents.md")) then {
                            out := out ++ "<li><a href='{mod}/types/{typ}.md' target='mainFrame'>{typ}</a></li>"
                        }
                    }
                    out := out ++ "</ul>"

                    out := out ++ "<h6>Classes</h6><ul>"
                    var clss := io.listdir("{settings.outputdir}/{mod}/classes")
                    def clsit = clss.iterator
                    while {clsit.hasNext} do {
                        var cls := clsit.next
                        cls := cls.substringFrom(1)to(cls.size - 5)
                        if ((cls.startsWith(".")==false) && (cls != "contents.md")) then {
                            out := out ++ "<li><a href='{mod}/classes/{cls}.md' target='mainFrame'>{cls}</a></li>"
                        }
                    }
                    out := out ++ "</ul>"

                    out := out ++ "</div>"
                }
            }
            out := out ++ "</ul></div></body>"
            out := out ++ "</html>"
            var moduleslistfile := io.open("{settings.outputdir}/modules.md", "w")
            moduleslistfile.write(out)
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
    var writer := markdownWriter

    //debugging
    if (settings.verbosity > 1) then { print "On {title} - graceDocVisitor created... ({sys.elapsedTime})" }

    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }
    buildTemplate



    // --1*Backlink
    //This method creates and returns the internal page link -- now in markdown
    method getTypeLink(v:String) is confidential {
        def filename = "{v}.md"
        var out := "[`{v}`]("
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
            out := out ++ "{dots}404.md"
        }
        out := out ++ ")"
        return out
    }

    method getClassLink(c:String) is confidential {
        def filename = "{c}.md"
        var out := "[`{c}`]("
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
            out := out ++ "{dots}404.md"
        }
        out := out ++ ")"
        return out
    }

    method buildTemplate is confidential {
        var cursor := 0
        var out := "---\n"
        var classIndex := 0
        var typeIndex := 0

        //Create the permalink for linking
        //need to filter out "Class:" and "Type: "
        var permalink:String := "{title}"

        //Remove the class/type declaration
        permalink := permalink.replace("Class:")with("")
        permalink := permalink.replace("Type:")with("")

        //Remove all spaces from link name
        permalink := permalink.replace(" ")with("")

        //Create the output for the header
        out := out ++ "title: \"{title}\"\n"
        out := out ++ "keywords: mydoc\n"
        out := out ++ "sidebar: grace-doc-sidebar\n"
        out := out ++ "toc: false\n"
        out := out ++ "permalink: /{permalink}/\n"
        out := out ++ "folder: grace-docs\n"
        out := out ++ "---\n"


        ///////////////////////////////////////////////////////////////////

        //This line generates the header for the file. We dont need the commands below to
        //be initialized with a template since this program is generating markdown now, not HTML
        headerSection := section.withTemplate(out)andCursorAt(cursor)

        topDescSection := section.withTemplate("")andCursorAt(cursor)
        fieldsSection := section.withTemplate("")andCursorAt(cursor)
        methodtypesSection := section.withTemplate("")andCursorAt(cursor)
        typesSection := section.withTemplate("")andCursorAt(cursor)
        classesSection := section.withTemplate("")andCursorAt(cursor)
        methodsSection := section.withTemplate("")andCursorAt(cursor)
        footerSection := section.withTemplate("")andCursorAt(cursor)

        ///////////////////////////////////////////////////////////////////

    }

    method build404 {
        var out := "<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\n"
        out := out ++ "<!DOCTYPE html>\n<html>"
        out := out ++ "<head><title>404 - Page not found | GraceDocs</title></head>"
        out := out ++ "<body><div id='message-404'>404 - Page not found</div></body>"
        out := out ++ "</html>"
        var file404 := io.open("{settings.outputdir}/404.md", "w")
        file404.write(out)
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
        out := out ++ "<iframe id=\"frame-sidebar\" src=\"modules.md\" name=\"moduleFrame\"></iframe>"
        out := out ++ "<iframe id=\"frame-main\" src=\"\" name=\"mainFrame\"></iframe>"
        out := out ++ "</body>"
        out := out ++ "</html>"
        var fileindex := io.open("{settings.outputdir}/index.md", "w")
        fileindex.write(out)
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
         print "CSS Built..."
    }

    //Method that generates all of the output based on the different sections
    method generate is public {
        if (settings.verbosity > 1) then { print "On {title} - starting to assemble HTML ({sys.elapsedTime})" }

        var outfile
        var output := ""
        if (isOnClassPage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/classes/{pageName}.md", "w")
        } elseif (isOnTypePage) then {
            outfile := io.open("{settings.outputdir}/{outdir}/types/{pageName}.md", "w")
        } else {
            outfile := io.open("{settings.outputdir}/{outdir}/{pageName}.md", "w")
        }

        //////////////////////////////////
        // Replace this with our object
        //////////////////////////////////


        output := output ++ headerSection.md
        if (topDescSection.hasContent) then {
            output := output ++ topDescSection.md
        }
        if (fieldsSection.hasContent) then {
            fieldsSection.alphabetize
            output := output ++ fieldsSection.md
        }
        if (methodtypesSection.hasContent) then {
            methodtypesSection.alphabetize
            output := output ++ methodtypesSection.md
        }
        if (typesSection.hasContent) then {
            typesSection.alphabetize
            output := output ++ typesSection.md
        }
        if (classesSection.hasContent) then {
            classesSection.alphabetize
            output := output ++ classesSection.md
        }
        if (methodsSection.hasContent) then {
            methodsSection.alphabetize
            output := output ++ methodsSection.md
        }
        output := output ++ footerSection.md
        outfile.write(output)
        outfile.close
        if (settings.verbosity > 1) then { print "On {title} - file written ({sys.elapsedTime})" }
    }

    // TYPE LISTER
    //This is the type compiler that lists all of the variables and methods
    //that a type would have
    //NOTE: Called for every method as an individual function call
    method visitMethodType(o) -> Boolean {
        if (isOnTypePage) then {
            var temp := ""
            for (o.signature) do { part ->
                temp := temp ++ part.name ++ " `"
                if (part.params.size > 0) then {
                    temp := t ++ "`("
                    for (part.params) do { param ->
                        if (param.dtype != false) then {
                            t := t ++ "" ++ param.nameString
                            t := t ++ ":` "
                            if (param.dtype.kind == "identifier") then {
                                t := t ++ getTypeLink(param.dtype.value)
                            } elseif (param.dtype.kind == "generic") then {
                                t := t ++ getTypeLink(param.dtype.value.value)
                                param.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                            }
                        } else {
                            t := t ++ param.nameString ++ "  "
                        }
                        if ((part.params.size > 1) && (param != part.params.last)) then {
                            t := t ++ "`, "
                        }
                    }
                    t := t ++ "`)`"
                }
                //here...
                t := t ++ "  "
            }
            t := t ++ "`—>` "

            if (o.rtype != false) then {
                if (o.rtype.kind == "identifier") then {
                    t := t ++ getTypeLink(o.rtype.value)
                } elseif (o.rtype.kind == "generic") then {
                    t := t ++ getTypeLink(o.rtype.value.value) ++ "`"
                    o.rtype.args.do { each -> t := "{t}{getTypeLink(each.value)}  " } separatedBy { t := t ++ ", " }
                    t := t ++ "`"
                }
            } else {
                t := t ++ "`Done`"
            }
            //Two spaces for markdown newline added here!
            t := t ++ "  \n"
            t := t ++ (formatComments(o) rowClass "description" colspan 2)
            methodtypesSection.addElement(n)withText(t)
            return false
        } else {
            return true
        }
    }

    //TYPE VISITOR -- MAIN INFO ABOUT TYPE
    //Compiles and writes out the main information about a type
    method visitTypeDec(o) -> Boolean {
        if (isOnTypePage == false) then {
            def n = o.nameString
            writer.insertDef("`{getTypeLink(o.name.value)} ->`")
            if (false != o.typeParams) then {
                writer.insertDef(" `")
                for (o.typeParams.params) do { g ->
                    writer.add(g.nameString)
                    if (g != o.typeParams.params.last) then { writer.insertDef(", ")}
                }
            }

            def typeVis = graceDocVisitor.createFrom("{o.name.value}")outTo("{outdir}")as("type")
            o.accept(typeVis)
            typeVis.generate
            writer.insertDesc(formatComments(o) rowClass "description" colspan 1)
            typesSection.addElement(n)withText(writer.buildMarkdown)
            return false
        } else {
            writer.add("`{o.name.value} ->`")
            if (false != o.typeParams) then {
                for (o.typeParams.params) do { g->
                    writer.add(g.nameString)
                    if (g != o.typeParams.params.last) then {writer.add(", ")}
                }
            }
            writer.add("  ")
            var temp := ""
            var ops := list []
            var tps := list []
            var node := o.value

            if (node.kind == "op") then {
                while {node.kind == "op"} do {
                    ops.push(node.value)
                    if ((node.left.kind == "identifier") && (node.right.kind == "identifier")) then {
                        temp := "{getTypeLink(node.left.value)} `{ops.pop}` {getTypeLink(node.right.value)}"
                    } elseif (node.right.kind == "identifier") then {
                        tps.push(node.right.value)
                    } elseif (node.left.kind == "identifier") then {
                        temp := "{getTypeLink(node.left.value)} `{ops.pop}`"
                    } elseif (node.left.kind == "member") then {
                        temp := getTypeLink("{node.left.in.value}.{node.left.value}") ++ " `{ops.pop}`"
                    } elseif (node.right.kind == "member") then {
                        tps.push("{node.left.in.value}.{node.left.value}")
                    }
                    node := node.left
                }

                while {(tps.size > 0) && (ops.size > 0)} do {
                    def p = tps.pop
                    temp := "{temp} `{ops.pop}` {getTypeLink(p.value)}"
                }
                if (ops.size > 0) then {
                    temp := "{temp} `{ops.pop}`"
                }

                temp := temp ++ "`type`"
                writer.add(temp)
                writer.add("`\{...added methods below...\}`")
            } elseif (node.kind == "typeliteral") then {

                temp := temp ++ "`type`"
                writer.add("`\{...added methods below...\}`")
            } elseif (node.kind == "identifier") then {
                writer.add(" ")
                writer.add(getTypeLink(node.value))
                if (node.generics != false) then {
                    writer.add("`") //Add code formatting for this section
                    for (node.generics) do { g->
                        writer.add(g.value)
                        if (g != node.generics.last) then { writer.add(", ") }
                    }
                    writer.add("`")
                }
            } elseif (node.kind == "member") then {
                writer.add(getTypeLink("{node.in.value}.{node.value}"))
                if (node.generics != false) then {
                    writer.add("`") //Add code formatting for this section
                    for (node.generics) do { g->
                        writer.add(g.value)
                        if (g != node.generics.last) then {writer.add(", ")}
                    }
                    writer.add("`")
                }
            }
            writer.add("\n\n### Description\n")
            writer.add(formatComments(o) rowClass "top-box-description" colspan 1)
            writer.add("\n### Properties\n")
            topDescSection.insert(writer.dumpBin)
            return true
        }
    }

    //CLASS VISITOR -- MAIN INFO ABOUT CLASS?????
    //Compiles and writes out the main information about a type
    method visitMethod(o) -> Boolean {

        if (settings.publicOnly && o.isConfidential) then { return false }
        if (o.isClass) then {
            return doClassMethod(o)
        }
        var t := "### Definition \n"
        var n := ""
        for (o.signature) do { part ->
            t := t ++ part.name
            n := ""
            if (part != o.signature.last) then { n := n ++ "()" }
            if (part.params.size > 0) then {
                t := t ++ "( "
                for (part.params) do { param ->
                    if (param.dtype != false) then {
                        t := t ++ param.nameString

                        t := t ++ " "
                        if (param.dtype.kind == "identifier") then {
                            t := t ++ getTypeLink(param.dtype.value)
                        } elseif (param.dtype.kind == "generic") then {
                            t := t ++ getTypeLink(param.dtype.value.value)
                            param.dtype.args.do { each -> t := "{t}{getTypeLink(each.value)}" } separatedBy { t := t ++ ", " }
                        }
                        t := t ++ " "
                        //t := t ++ ":<span class='parameter-type'>" ++ getTypeLink(param.dtype.value) ++ "</span>"
                    } else {
                        t := t ++ param.nameString
                    }
                    if ((part.params.size > 1) && (param != part.params.last)) then {
                        t := t ++ ", "
                    }
                }
                t := t ++ ")"
            }
        }
        t := t ++ "  "
        if (o.dtype != false) then {
            t := t ++ getTypeLink(o.dtype.value)
        } else {
            t := t ++ getTypeLink("Done")
        }
        t := t ++ "\n "
        t := t ++ formatComments(o) rowClass "description" colspan 2
        methodsSection.addElement(n)withText(t)
        return false
    }


    // individual class methods ????
    method doClassMethod(m) -> Boolean {
        def o = m.body.last

        if (isOnClassPage == false) then {
            var t := "<tr class='placeholder'>"
            def n = m.nameString
            t := t ++ "<td><code><span class='class-name'>{getClassLink(n)}</span>"
            t := t ++ "."
            m.signature.do { part ->
                t := t ++ "<span class='method-name'>{part.name}</span>"
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
            classesSection.addElement(n) withText(t)
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

    method visitDefDec(o) -> Boolean {
        if (isOnClassPage == true) then {
            if (!settings.publicOnly) then {
                def n = o.name.value
                var t := "<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{o.name.value}"
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
                fieldsSection.addElement(n) withText(t)

            } else {
                //in publicOnly mode, readable defs should show up as getter methods
                if (o.isReadable) then {
                    //FIXME: if isOnTypePage, then ???
                    def n = o.name.value
                    var t := "<tr class='placeholder'><td class='identifier-name'>{o.name.value}"
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
                    methodsSection.addElement(n)withText(t)
                }
            }
            return false
        } else {
            if (!settings.publicOnly) then {
                def n = o.name.value
                var t := "<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{o.name.value}"
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
                    var t := "<tr class='placeholder'><td class='identifier-name'>{o.name.value}"
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
                    methodsSection.addElement(n)withText(t)
                }
            }
            return false
        }
    }

    method visitVarDec(o) -> Boolean {
        def n = o.nameString
        if (isOnClassPage == true) then {
            if (!settings.publicOnly) then {
                var t := "<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{o.name.value}"
                t := t ++ "</td><td><code>"
                if (o.dtype != false) then {
                    t := t ++ "{getTypeLink(o.dtype.value)}"
                }
                t := t ++ "</code></td></tr>"
                t := t ++ formatComments(o) rowClass "description" colspan 3
                fieldsSection.addElement(n)withText(t)
            } else {
                if (o.isReadable) then {
                    var t := "<tr class='placeholder'><td class='identifier-name'>{o.name.value}"
                    t := t ++ "</td><td>"
                    if (o.dtype != false) then {
                        t := t ++ "{getTypeLink(o.dtype.value)}"
                    }
                    t := t ++ "</code></td></tr>"
                    t := t ++ formatComments(o) rowClass "description" colspan 2
                    methodsSection.addElement(n)withText(t)
                }
                if (o.isWritable) then {
                    var t := "<tr class='placeholder'><td><code><span class='method-name'>{o.name.value}:=</span>"
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
                var t := "<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{o.name.value}"
                t := t ++ "</td><td><code>"
                if (o.dtype != false) then {
                    t := t ++ "{getTypeLink(o.dtype.value)}"
                }
                t := t ++ "</code></td></tr>"
                t := t ++ formatComments(o) rowClass "description" colspan 3
                fieldsSection.addElement(n)withText(t)
            } else {
                if (o.isReadable) then {
                    var t := "<tr class='placeholder'><td class='identifier-name'>{o.name.value}"
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
        t := t ++ astNode.comments.value ++ "\n"
        t := t ++ "\n"
    }
    return t
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
