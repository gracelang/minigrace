// GTK library limited emulation built for objectdraw library
function gracecode_gtk() {
    var o = Grace_allocObject();
    o.methods.GTK_WINDOW_TOPLEVEL = function() {return new GraceNum(0);};

    // used to tell if the canvas should be redrawn
    o.methods.do_redraw = false;

    // time interval between each redraw
    o.methods.timeInterval = 1000/30;

    o.methods["window"] = function (level) {
        var win = {
            "title" : "", // title needs to be update-able through ":="
            "title:=" : function (str) {
                if(typeof this.w != "undefined")
                    this.w.document.title = str;
                else
                    this["title"] = str;
            },
            "width" : "500",
            "height" : "250",

            "on()do" : function (action, func) {
                // window.on "destroy" do { gtk.main_quit }
                switch(action) {
                    case "destroy":
                        this.destroy = function() {func();};
                        break;
                    case "motion-notify-event":
                        if(typeof this.mousemove == "undefined") {
                            this.mousemove = function(event) {
                                func({x:event.clientX, y:event.clientY});
                                event.preventDefault();
                            };
                        }
                        break;

                }
            },

            "connect" : function (action, func) {
                // window.on "destroy" do { gtk.main_quit }
                switch(action) {
                    case "destroy":
                        this.destroy = function() {func();};
                        break;
                    case "motion-notify-event":
                        if(typeof this.mousemove == "undefined") {
                            this.mousemove = function(event) {
                                func({x:event.clientX, y:event.clientY});
                                event.preventDefault();
                            };
                        }
                        break;

                }
            },

            "set_default_size" : function (_width, _height) {
                this.width = _width;
                this.height = _height;
            },

            "add" : function (obj) {
                this.grid = obj;
            },

            "show_all" : function () {
                this.w = window.open("",this.title.toString(), "location=no,status=no," +
                                     "width=" + this.width + ",height=" + this.height);
                o.methods.w = this.w; // makes w a library object, needed for o.methods.main
                this.w.document.title = this.title;
                this.w.onunload = this.destroy;

                // This is used to style the page
                var sheet = this.w.document.createElement("style");
                sheet.innerHTML = "" +
                "body, table, tr, td {margin: 0px; padding: 0px;}\n" +
                "canvas {background: #ddd;}" +
                "table  {border-collapse: collapse;\n" +
                "       margin: 0px;\n" +
                "       padding: 0px;}\n\n" +

                "tr, td {margin: 0px;\n" +
                "       padding: 0px;\n" +
                "       text-align: center;}\n\n" +

                "div    {width: 100%;\n" +
                "       height: 100%;}\n\n" +

                ".h button {height: 30px;\n" +
                "       width: 100%;}\n\n" +

                ".v button {height: " + this.height + "px;}\n";
                this.w.document.body.appendChild(sheet);

                // adds the grid to the page
                // which includes the canvas and possably buttons
                if(typeof this.grid != "undefined") {
                    this.w.document.body.appendChild(this.grid);
                }

                // Resize the window to fit the size of the objects inside it.
                // Needed if there are buttons, but otherwise the correct size
                // of the window should be canvas' size.
                // Does not seem to work for all browsers
                this.w.innerHeight = this.grid.getBoundingClientRect().height;
                this.w.innerWidth = this.grid.getBoundingClientRect().width;
                o.methods.do_redraw = true;


                // add keypress events
                this.w.document.events = this.events;
                if(typeof this.events != "undefined") {
                    this.w.document.onkeypress = function(e) {
                        e = e || window.event;
                        var k = e.keyCode || e.which;
                        for(var i=0;i<this.events.length;i++) {
                            if(this.events[i]["keypress"] == k) {
                                //this.events[i]["function"]()
                                callmethod(this.events[i]["function"], "apply", [0]);
                            }
                        }
                    }
                }

                if(typeof this.mousemove != "undefined")
                    this.w.addEventListener("mousemove", this.mousemove, false);
            },

            "add_events" : function () {},

            "add_accel_group" : function (accelgroup) {
                this.events = accelgroup.methods.list;
            },
        };

        return wrapDOMObject(win);
    }

    // grid is used to hold the canvas and possibly buttons
    o.methods.grid = function () {
        var table = document.createElement("table");
        table.insertRow(0);
        table.rows[0].insertCell(0);

        table.attach = function (obj, x, y, w, h) {
            // add rows to bottom until the right row exists
            while(y >= table.rows.length) {
                table.insertRow(-1);
            }

            // add collums to current row until the right collum exists
            while(x >= table.rows[y].cells.length) {
                table.rows[y].insertCell(-1);
            }

            table.rows[y].cells[x].colSpan = w;
            table.rows[y].cells[x].rowSpan = h;
            table.rows[y].cells[x].appendChild(obj); // adds object to cell

            // this is used to make vertical buttons look the same as in gtk
            if(typeof obj.pack_start != "undefined") {
                if(obj.o == o.methods.GTK_ORIENTATION_VERTICAL()._value) {
                    obj.className = "v";
                }
                else if(obj.o == o.methods.GTK_ORIENTATION_HORIZONTAL()._value) {
                    obj.className = "h";
                }
            }
        };
        return wrapDOMObject(table);
    };


    // Creates HTML's version of an all purpose box (div tag)
    // and adds the needed functionality to it to emulated GTK
    o.methods.box = function (argcv, orientation, num) {
        var aBox = document.createElement("div");

        aBox.o = orientation._value; // horizontal or vertical
        aBox.n = num; // magic number that we don't use
        aBox.pack_start = function (component, x, y, z) {
            // x, y, and z are a mystery to me
            // component should be a dom object like a button
            this.appendChild(component);
        }
        aBox.add = function(component) {
            this.appendChild(component);
        }

        return wrapDOMObject(aBox);
    };

    // this creates a canvas object consistent with what objectdraw expects
    o.methods.drawing_area = function () {
        var canvas = document.createElement("canvas");

        canvas.set_size_request = function (_width, _height) {
            this.width = _width;
            this.height = _height;
        };

        // seems to enable events in gtk that are default in javascript
        canvas.add_events = function () {};

        // later defined, used to draw the objects in the objectdraw list
        canvas.saved_draw_function = function () {};

        // this is what does the majority of the drawing work
        canvas.createContext = function () {
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.path_x = 0;
            ctx.path_y = 0;
            ctx.lineWidth = 2;
            ctx.img = null;

            var wrappedCtx = {};
            wrappedCtx.ctx = ctx;

            //set_source_rgb(r:Number,g:Number,b:Number) -> Done
            wrappedCtx.set_source_rgb = function (r, g, b) {
                this.ctx.fillStyle="rgb(" + Math.floor(Number(r)*255) + ", " +
                Math.floor(Number(g)*255) + ", " +
                Math.floor(Number(b)*255) + ")";
                this.ctx.strokeStyle="rgb(" + Math.floor(Number(r)*255) + ", " +
                Math.floor(Number(g)*255) + ", " +
                Math.floor(Number(b)*255) + ")";
            }

            //rectangle(x:Number,y:Number,w:Number,h:Number) -> Done
            wrappedCtx.rectangle = function (x, y, w, h) {
                this.ctx.rect(x, y, w, h);
            }

            //move_to(x:Number,y:Number) -> Done
            //used to set the position of text and the start point of lines
            wrappedCtx.move_to = function (x, y) {
                this.ctx.moveTo(x, y);
                this.path_x = x;
                this.path_y = y;
            }

            //line_to(x:Number,y:Number)->Done
            wrappedCtx.line_to = function (x, y) {
                this.ctx.lineTo(x, y);
            }

            //fill -> Done
            wrappedCtx.fill = function () {
                this.ctx.fill();
                this.ctx.beginPath();
            }

            //stroke -> Done
            wrappedCtx.stroke = function () {
                this.ctx.stroke();
                this.ctx.beginPath();
            }

            //save -> Done
            wrappedCtx.save = function () {
                this.ctx.save();
            }

            //restore -> Done
            wrappedCtx.restore = function () {
                this.ctx.restore();
            }

            //translate(dx:Number,dy:Number) -> Done
            wrappedCtx.translate = function(x, y) {
                this.ctx.translate(x, y);
            }

            //scale(w:Number,h:Number) -> Done
            wrappedCtx.scale = function(w, h) {
                this.ctx.scale(w, h);
            }

            //arc(xc:Number, yc:Number, radius:Number, angle1:Number, angle2:Number) -> Done
            wrappedCtx.arc = function(xc, yx, radius, angle1, angle2) {
                this.ctx.arc(xc, yx, radius, angle1, angle2);
            }

            wrappedCtx.arc_negative = function(xc, yx, radius, angle1, angle2) {
                this.ctx.arc(xc, yx, radius, angle1, angle2, true);
            }

            //font_size:=(size:Number) -> Done
            wrappedCtx["font_size:="] = function (size) {
                this.ctx.font = size + "px Arial";
            }

            //show_text(contents:String)->Done
            wrappedCtx.show_text = function(str) {
                this.ctx.fillText(str, this.path_x, this.path_y);
            }

            // used for clearing parts of the screen, only call
            wrappedCtx.clearRect = function (x, y, w, h) {
                this.ctx.clearRect(x, y, w, h);
                //this.ctx.clearRect(0, 0, w, h);
            }

            // surface is actually an image
            wrappedCtx.set_source_surface = function (surface, x, y) {
                this.ctx.img = surface;
            }

            // called when drawing images
            wrappedCtx.paint = function () {
                if(this.ctx.img != null)
                    this.ctx.drawImage(this.ctx.img,0,0);
                else
                    alert("image null!");
            }

            return wrappedCtx;
        }


        // this makes a lot of the canvas's events accessable
        // Ex: drawingArea.on "motion-notify-event" do {evt ->
        canvas["on()do"] = function (action, func) {
            // Checks for functions being undefined is from an odd error
            // that sometimes caused the events to double up.
            // getBoundingClientRect is needed for if the canvas isn't positioned
            // exactly in the top left corner.
            switch(action) {
                case "motion-notify-event":
                    if(typeof this.mousemove == "undefined") {
                        this.mousemove = function(event) {
                            var rect = this.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                            event.preventDefault();
                        };
                        this.addEventListener("mousemove", this.mousemove, false);
                    }
                    break;

                case "button-press-event":
                    if(typeof this.mousedown == "undefined") {
                        this.mousedown = function(event) {
                            var rect = canvas.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                            event.preventDefault();
                        };
                        this.addEventListener("mousedown", canvas.mousedown, false);
                    }
                    break;

                case "button-release-event":
                    if(typeof this.mouseup == "undefined") {
                        this.mouseup = function(event) {
                            var rect = canvas.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                        };
                        this.addEventListener("mouseup", this.mouseup, false);
                    }
                    break;

                /*case "clicked":
                     if(typeof this.clicker == "undefined") {
                     this.clicker = function(event) {
                     var rect = canvas.getBoundingClientRect();
                     func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                     };
                     this.addEventListener("click", this.clicker, false);
                     }
                     break;*/

                case "enter-notify-event":
                    if(typeof this.mouseover == "undefined") {
                        this.mouseover = function(event) {
                            var rect = this.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                        };
                        this.addEventListener("mouseover", this.mouseover, false);
                    }
                    break;

                case "leave-notify-event":
                    if(typeof this.mouseout == "undefined") {
                        this.mouseout = function(event) {
                            var rect = this.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                        };
                        this.addEventListener("mouseout", this.mouseout, false);
                    }
                    break;

                case "draw":
                    this.saved_draw_function = function (ctx) {func(ctx)};
                    break;
            };
        };


        // mark the canvas ready for redraw
        canvas["queue_draw"] = function () {
            o.methods.do_redraw = true;
        };

        canvas["app_paintable:="] = function() {};
        o.methods.c = canvas;
        return wrapDOMObject(canvas);
    };

    o.methods.GTK_ORIENTATION_HORIZONTAL = function () {return new GraceNum(1);};
    o.methods.GTK_ORIENTATION_VERTICAL = function () {return new GraceNum(2);};

    o.methods.button = function () {
        btn = document.createElement("button");

        btn["label:="] = function (str) {
            var label = document.createTextNode(str);
            this.appendChild(label);
        };

        btn["on()do"] = function (action, func) {
            // this probably doesn't need to be a switch statement
            // it is in case there are other calls then click that
            // need to be implemented later
            switch(action) {
                case "clicked":
                    this.click = function() {
                        func();
                    };
                    this.addEventListener("click", this.click, false);
                    break;
            };
        };

        return wrapDOMObject(btn);
    };


    o.methods.entry = function () {
        entry = document.createElement("input");

        entry["text:="] = function (str) {
            this.value = str;
        };

        entry.text = function() {return this.value;}

        entry.connect = function (action, func) {
            // this probably doesn't need to be a switch statement
            // it is in case there are other calls then click that
            // need to be implemented later
            switch(action) {
                case "activate":
                    this.activate = function(e) {
                        e = e || window.event;
                        var k = e.keyCode || e.which;
                        if(k == 13) { // check for return keypress
                            func();
                        }
                    };
                    this.addEventListener("keydown", this.activate, false);
                    break;
            };
        };

        return wrapDOMObject(entry);
    };

    o.methods.running = true;
    o.methods.main = function() {
        if(o.methods.running)
            setTimeout(o.methods.main, o.methods.timeInterval);
        if(o.methods.do_redraw) {
            o.methods.do_redraw = false;
            // There's an odd error with images that
            // causes the top and left sides not to clear.
            // So to work around that problem (probably caused by
            // playing with the transformations) we just clear a bit
            // more than the actual canvas's borders
            if(o.methods.c && typeof o.methods.c.saved_draw_function != "undefined") {
                var ctx = o.methods.c.createContext();
                ctx.clearRect(-10, -10, o.methods.c.width+10, o.methods.c.height+10);
                o.methods.c.saved_draw_function(ctx);
            }
        }


    };

    o.methods.main_quit = function () {
        o.methods.running = false;
        // canvas data save
        //var cImage = o.methods.w.document.getElementsByTagName("canvas")[0].toDataURL("image/png");
        //document.getElementbyId("stdout_txt").value += cImage;
        // to display as image, simply take cImage and use it as the src of an <img/>
        // end canvas data save
        o.methods.w.close();


    };

    // adding stuff after this point to make gtk examples work
    o.methods.GTK_MAJOR_VERSION = function() {return new GraceNum(3);};
    o.methods.accel_group = function() {
        var a = Grace_allocObject();
        a.methods.list = [];
        a.methods.accel_connect = function(argcv, key, func) {
            this.methods.list.push({
                                   "keypress": key._value,
                                   "function": func
                                   });
        }
        return a;
    };

    return o;
}


// This is only here so that objectdraw isn't trying to call something that isn't
// there. The values are the same in the actual GDK library, but aren't actually
// used by this emulation of the GTK library.
function gracecode_gdk() {
    var o = Grace_allocObject();
    o.methods.GDK_BUTTON_PRESS_MASK =   function() {return new GraceNum(1 << 8);};
    o.methods.GDK_BUTTON_RELEASE_MASK = function() {return new GraceNum(1 << 9);};
    o.methods.GDK_POINTER_MOTION_MASK = function() {return new GraceNum(1 << 2);};
    o.methods.GDK_ENTER_NOTIFY_MASK =   function() {return new GraceNum(1 << 12);};
    o.methods.GDK_LEAVE_NOTIFY_MASK =   function() {return new GraceNum(1 << 13);};

    o.methods.GDK_BUTTON1_MOTION_MASK = function() {return new GraceNum(1 << 10);};
    o.methods.GDK_KEY_Escape = function() {return new GraceNum(27);};
    return o;
}

// Used only to grab images
function gracecode_cairo() {
    var o = Grace_allocObject();
    o.methods.image_surface_create_from_png  = function (argcv) {
        if(argcv > 0) {
            var surface = new Image();
            surface.src = arguments[1]._value;
            return wrapDOMObject(surface);
        }
    };
    return o;
}// GTK library limited emulation built for objectdraw library
function gracecode_gtk() {
    var o = Grace_allocObject();
    o.methods.GTK_WINDOW_TOPLEVEL = function() {return new GraceNum(0);};

    // used to tell if the canvas should be redrawn
    o.methods.do_redraw = false;

    // time interval between each redraw
    o.methods.timeInterval = 1000/30;

    o.methods["window"] = function (level) {
        var win = {
            "title" : "", // title needs to be update-able through ":="
            "title:=" : function (str) {
                if(typeof this.w != "undefined")
                    this.w.document.title = str;
                else
                    this["title"] = str;
            },
            "width" : "500",
            "height" : "250",

            "on()do" : function (action, func) {
                // window.on "destroy" do { gtk.main_quit }
                switch(action) {
                    case "destroy":
                        this.destroy = function() {func();};
                        break;
                    case "motion-notify-event":
                        if(typeof this.mousemove == "undefined") {
                            this.mousemove = function(event) {
                                func({x:event.clientX, y:event.clientY});
                                event.preventDefault();
                            };
                        }
                        break;

                }
            },

            "connect" : function (action, func) {
                // window.on "destroy" do { gtk.main_quit }
                switch(action) {
                    case "destroy":
                        this.destroy = function() {func();};
                        break;
                    case "motion-notify-event":
                        if(typeof this.mousemove == "undefined") {
                            this.mousemove = function(event) {
                                func({x:event.clientX, y:event.clientY});
                                event.preventDefault();
                            };
                        }
                        break;

                }
            },

            "set_default_size" : function (_width, _height) {
                this.width = _width;
                this.height = _height;
            },

            "add" : function (obj) {
                this.grid = obj;
            },

            "show_all" : function () {
                this.w = window.open("",this.title.toString(), "location=no,status=no," +
                                     "width=" + this.width + ",height=" + this.height);
                o.methods.w = this.w; // makes w a library object, needed for o.methods.main
                this.w.document.title = this.title;
                this.w.onunload = this.destroy;

                // This is used to style the page
                var sheet = this.w.document.createElement("style");
                sheet.innerHTML = "" +
                "body, table, tr, td {margin: 0px; padding: 0px;}\n" +
                "canvas {background: #ddd;}" +
                "table  {border-collapse: collapse;\n" +
                "       margin: 0px;\n" +
                "       padding: 0px;}\n\n" +

                "tr, td {margin: 0px;\n" +
                "       padding: 0px;\n" +
                "       text-align: center;}\n\n" +

                "div    {width: 100%;\n" +
                "       height: 100%;}\n\n" +

                ".h button {height: 30px;\n" +
                "       width: 100%;}\n\n" +

                ".v button {height: " + this.height + "px;}\n";
                this.w.document.body.appendChild(sheet);

                // adds the grid to the page
                // which includes the canvas and possably buttons
                if(typeof this.grid != "undefined") {
                    this.w.document.body.appendChild(this.grid);
                }

                // Resize the window to fit the size of the objects inside it.
                // Needed if there are buttons, but otherwise the correct size
                // of the window should be canvas' size.
                // Does not seem to work for all browsers
                this.w.innerHeight = this.grid.getBoundingClientRect().height;
                this.w.innerWidth = this.grid.getBoundingClientRect().width;
                o.methods.do_redraw = true;


                // add keypress events
                this.w.document.events = this.events;
                if(typeof this.events != "undefined") {
                    this.w.document.onkeypress = function(e) {
                        e = e || window.event;
                        var k = e.keyCode || e.which;
                        for(var i=0;i<this.events.length;i++) {
                            if(this.events[i]["keypress"] == k) {
                                //this.events[i]["function"]()
                                callmethod(this.events[i]["function"], "apply", [0]);
                            }
                        }
                    }
                }

                if(typeof this.mousemove != "undefined")
                    this.w.addEventListener("mousemove", this.mousemove, false);
            },

            "add_events" : function () {},

            "add_accel_group" : function (accelgroup) {
                this.events = accelgroup.methods.list;
            },
        };

        return wrapDOMObject(win);
    }

    // grid is used to hold the canvas and possibly buttons
    o.methods.grid = function () {
        var table = document.createElement("table");
        table.insertRow(0);
        table.rows[0].insertCell(0);

        table.attach = function (obj, x, y, w, h) {
            // add rows to bottom until the right row exists
            while(y >= table.rows.length) {
                table.insertRow(-1);
            }

            // add collums to current row until the right collum exists
            while(x >= table.rows[y].cells.length) {
                table.rows[y].insertCell(-1);
            }

            table.rows[y].cells[x].colSpan = w;
            table.rows[y].cells[x].rowSpan = h;
            table.rows[y].cells[x].appendChild(obj); // adds object to cell

            // this is used to make vertical buttons look the same as in gtk
            if(typeof obj.pack_start != "undefined") {
                if(obj.o == o.methods.GTK_ORIENTATION_VERTICAL()._value) {
                    obj.className = "v";
                }
                else if(obj.o == o.methods.GTK_ORIENTATION_HORIZONTAL()._value) {
                    obj.className = "h";
                }
            }
        };
        return wrapDOMObject(table);
    };


    // Creates HTML's version of an all purpose box (div tag)
    // and adds the needed functionality to it to emulated GTK
    o.methods.box = function (argcv, orientation, num) {
        var aBox = document.createElement("div");

        aBox.o = orientation._value; // horizontal or vertical
        aBox.n = num; // magic number that we don't use
        aBox.pack_start = function (component, x, y, z) {
            // x, y, and z are a mystery to me
            // component should be a dom object like a button
            this.appendChild(component);
        }
        aBox.add = function(component) {
            this.appendChild(component);
        }

        return wrapDOMObject(aBox);
    };

    // this creates a canvas object consistent with what objectdraw expects
    o.methods.drawing_area = function () {
        var canvas = document.createElement("canvas");

        canvas.set_size_request = function (_width, _height) {
            this.width = _width;
            this.height = _height;
        };

        // seems to enable events in gtk that are default in javascript
        canvas.add_events = function () {};

        // later defined, used to draw the objects in the objectdraw list
        canvas.saved_draw_function = function () {};

        // this is what does the majority of the drawing work
        canvas.createContext = function () {
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.path_x = 0;
            ctx.path_y = 0;
            ctx.lineWidth = 2;
            ctx.img = null;

            var wrappedCtx = {};
            wrappedCtx.ctx = ctx;

            //set_source_rgb(r:Number,g:Number,b:Number) -> Done
            wrappedCtx.set_source_rgb = function (r, g, b) {
                this.ctx.fillStyle="rgb(" + Math.floor(Number(r)*255) + ", " +
                Math.floor(Number(g)*255) + ", " +
                Math.floor(Number(b)*255) + ")";
                this.ctx.strokeStyle="rgb(" + Math.floor(Number(r)*255) + ", " +
                Math.floor(Number(g)*255) + ", " +
                Math.floor(Number(b)*255) + ")";
            }

            //rectangle(x:Number,y:Number,w:Number,h:Number) -> Done
            wrappedCtx.rectangle = function (x, y, w, h) {
                this.ctx.rect(x, y, w, h);
            }

            //move_to(x:Number,y:Number) -> Done
            //used to set the position of text and the start point of lines
            wrappedCtx.move_to = function (x, y) {
                this.ctx.moveTo(x, y);
                this.path_x = x;
                this.path_y = y;
            }

            //line_to(x:Number,y:Number)->Done
            wrappedCtx.line_to = function (x, y) {
                this.ctx.lineTo(x, y);
            }

            //fill -> Done
            wrappedCtx.fill = function () {
                this.ctx.fill();
                this.ctx.beginPath();
            }

            //stroke -> Done
            wrappedCtx.stroke = function () {
                this.ctx.stroke();
                this.ctx.beginPath();
            }

            //save -> Done
            wrappedCtx.save = function () {
                this.ctx.save();
            }

            //restore -> Done
            wrappedCtx.restore = function () {
                this.ctx.restore();
            }

            //translate(dx:Number,dy:Number) -> Done
            wrappedCtx.translate = function(x, y) {
                this.ctx.translate(x, y);
            }

            //scale(w:Number,h:Number) -> Done
            wrappedCtx.scale = function(w, h) {
                this.ctx.scale(w, h);
            }

            //arc(xc:Number, yc:Number, radius:Number, angle1:Number, angle2:Number) -> Done
            wrappedCtx.arc = function(xc, yx, radius, angle1, angle2) {
                this.ctx.arc(xc, yx, radius, angle1, angle2);
            }

            wrappedCtx.arc_negative = function(xc, yx, radius, angle1, angle2) {
                this.ctx.arc(xc, yx, radius, angle1, angle2, true);
            }

            //font_size:=(size:Number) -> Done
            wrappedCtx["font_size:="] = function (size) {
                this.ctx.font = size + "px Arial";
            }

            //show_text(contents:String)->Done
            wrappedCtx.show_text = function(str) {
                this.ctx.fillText(str, this.path_x, this.path_y);
            }

            // used for clearing parts of the screen, only call
            wrappedCtx.clearRect = function (x, y, w, h) {
                this.ctx.clearRect(x, y, w, h);
                //this.ctx.clearRect(0, 0, w, h);
            }

            // surface is actually an image
            wrappedCtx.set_source_surface = function (surface, x, y) {
                this.ctx.img = surface;
            }

            // called when drawing images
            wrappedCtx.paint = function () {
                if(this.ctx.img != null)
                    this.ctx.drawImage(this.ctx.img,0,0);
                else
                    alert("image null!");
            }

            return wrappedCtx;
        }


        // this makes a lot of the canvas's events accessable
        // Ex: drawingArea.on "motion-notify-event" do {evt ->
        canvas["on()do"] = function (action, func) {
            // Checks for functions being undefined is from an odd error
            // that sometimes caused the events to double up.
            // getBoundingClientRect is needed for if the canvas isn't positioned
            // exactly in the top left corner.
            switch(action) {
                case "motion-notify-event":
                    if(typeof this.mousemove == "undefined") {
                        this.mousemove = function(event) {
                            var rect = this.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                            event.preventDefault();
                        };
                        this.addEventListener("mousemove", this.mousemove, false);
                    }
                    break;

                case "button-press-event":
                    if(typeof this.mousedown == "undefined") {
                        this.mousedown = function(event) {
                            var rect = canvas.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                            event.preventDefault();
                        };
                        this.addEventListener("mousedown", canvas.mousedown, false);
                    }
                    break;

                case "button-release-event":
                    if(typeof this.mouseup == "undefined") {
                        this.mouseup = function(event) {
                            var rect = canvas.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                        };
                        this.addEventListener("mouseup", this.mouseup, false);
                    }
                    break;

                /*case "clicked":
                     if(typeof this.clicker == "undefined") {
                     this.clicker = function(event) {
                     var rect = canvas.getBoundingClientRect();
                     func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                     };
                     this.addEventListener("click", this.clicker, false);
                     }
                     break;*/

                case "enter-notify-event":
                    if(typeof this.mouseover == "undefined") {
                        this.mouseover = function(event) {
                            var rect = this.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                        };
                        this.addEventListener("mouseover", this.mouseover, false);
                    }
                    break;

                case "leave-notify-event":
                    if(typeof this.mouseout == "undefined") {
                        this.mouseout = function(event) {
                            var rect = this.getBoundingClientRect();
                            func({x:event.clientX-rect.left, y:event.clientY-rect.top});
                        };
                        this.addEventListener("mouseout", this.mouseout, false);
                    }
                    break;

                case "draw":
                    this.saved_draw_function = function (ctx) {func(ctx)};
                    break;
            };
        };


        // mark the canvas ready for redraw
        canvas["queue_draw"] = function () {
            o.methods.do_redraw = true;
        };

        canvas["app_paintable:="] = function() {};
        o.methods.c = canvas;
        return wrapDOMObject(canvas);
    };

    o.methods.GTK_ORIENTATION_HORIZONTAL = function () {return new GraceNum(1);};
    o.methods.GTK_ORIENTATION_VERTICAL = function () {return new GraceNum(2);};

    o.methods.button = function () {
        btn = document.createElement("button");

        btn["label:="] = function (str) {
            var label = document.createTextNode(str);
            this.appendChild(label);
        };

        btn["on()do"] = function (action, func) {
            // this probably doesn't need to be a switch statement
            // it is in case there are other calls then click that
            // need to be implemented later
            switch(action) {
                case "clicked":
                    this.click = function() {
                        func();
                    };
                    this.addEventListener("click", this.click, false);
                    break;
            };
        };

        return wrapDOMObject(btn);
    };


    o.methods.entry = function () {
        entry = document.createElement("input");

        entry["text:="] = function (str) {
            this.value = str;
        };

        entry.text = function() {return this.value;}

        entry.connect = function (action, func) {
            // this probably doesn't need to be a switch statement
            // it is in case there are other calls then click that
            // need to be implemented later
            switch(action) {
                case "activate":
                    this.activate = function(e) {
                        e = e || window.event;
                        var k = e.keyCode || e.which;
                        if(k == 13) { // check for return keypress
                            func();
                        }
                    };
                    this.addEventListener("keydown", this.activate, false);
                    break;
            };
        };

        return wrapDOMObject(entry);
    };

    o.methods.running = true;
    o.methods.main = function() {
        if(o.methods.running)
            setTimeout(o.methods.main, o.methods.timeInterval);
        if(o.methods.do_redraw) {
            o.methods.do_redraw = false;
            // There's an odd error with images that
            // causes the top and left sides not to clear.
            // So to work around that problem (probably caused by
            // playing with the transformations) we just clear a bit
            // more than the actual canvas's borders
            if(o.methods.c && typeof o.methods.c.saved_draw_function != "undefined") {
                var ctx = o.methods.c.createContext();
                ctx.clearRect(-10, -10, o.methods.c.width+10, o.methods.c.height+10);
                o.methods.c.saved_draw_function(ctx);
            }
        }


    };

    o.methods.main_quit = function () {
        o.methods.running = false;
        // canvas data save
        //var cImage = o.methods.w.document.getElementsByTagName("canvas")[0].toDataURL("image/png");
        //document.getElementbyId("stdout_txt").value += cImage;
        // to display as image, simply take cImage and use it as the src of an <img/>
        // end canvas data save
        o.methods.w.close();


    };

    // adding stuff after this point to make gtk examples work
    o.methods.GTK_MAJOR_VERSION = function() {return new GraceNum(3);};
    o.methods.accel_group = function() {
        var a = Grace_allocObject();
        a.methods.list = [];
        a.methods.accel_connect = function(argcv, key, func) {
            this.methods.list.push({
                                   "keypress": key._value,
                                   "function": func
                                   });
        }
        return a;
    };

    return o;
}


// This is only here so that objectdraw isn't trying to call something that isn't
// there. The values are the same in the actual GDK library, but aren't actually
// used by this emulation of the GTK library.
function gracecode_gdk() {
    var o = Grace_allocObject();
    o.methods.GDK_BUTTON_PRESS_MASK =   function() {return new GraceNum(1 << 8);};
    o.methods.GDK_BUTTON_RELEASE_MASK = function() {return new GraceNum(1 << 9);};
    o.methods.GDK_POINTER_MOTION_MASK = function() {return new GraceNum(1 << 2);};
    o.methods.GDK_ENTER_NOTIFY_MASK =   function() {return new GraceNum(1 << 12);};
    o.methods.GDK_LEAVE_NOTIFY_MASK =   function() {return new GraceNum(1 << 13);};

    o.methods.GDK_BUTTON1_MOTION_MASK = function() {return new GraceNum(1 << 10);};
    o.methods.GDK_KEY_Escape = function() {return new GraceNum(27);};
    return o;
}

// Used only to grab images
function gracecode_cairo() {
    var o = Grace_allocObject();
    o.methods.image_surface_create_from_png  = function (argcv) {
        if(argcv > 0) {
            var surface = new Image();
            surface.src = arguments[1]._value;
            return wrapDOMObject(surface);
        }
    };
    return o;
}
