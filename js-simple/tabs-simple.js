
minigrace.stderr_write = function(value) {
  var stderr = document.getElementById("stderr_txt");
  stderr.value += value + "\n";
  stderr.scrollTop = stderr.scrollHeight;
};

minigrace.stdin_read = function() {
  return prompt("Input: ");
}

minigrace.stdout_write = function(value) {
    var stdout = document.getElementById("stdout_txt");
    stdout.value += value;
    scrollstdout();
};

function go() {
  editor.getSession().clearAnnotations();

  var old_stderr = document.getElementById('stderr_txt').value;
  document.getElementById('stderr_txt').value = "";
  minigrace.modname = document.getElementById('modname').value;
  var compiled = minigrace.compilerun(getCode());
  if (!compiled && !document.getElementById('debugtoggle').checked)
      document.getElementById('stderr_txt').value = old_stderr;
  document.getElementById('js_txt').value = minigrace.generated_output;
  if (minigrace.compileError) {
      var lines = document.getElementById('stderr_txt').value.split("\n");
      var bits;
      for (var i=0; i<lines.length; i++) {
          if (lines[i].substring(0, 10) != 'minigrace:') {
              bits = lines[i].split(':');
              break;
          }
      }
      editor.moveCursorTo(bits[1] - 1, bits[2] - 1);
      editor.getSelection().clearSelection();
      bits.shift();
      editor.getSession().setAnnotations([{
          row: bits.shift() - 1,
          column: bits.shift() - 1,
          text: bits.join(":"),
          type: "error"
      }]);
  }
  scrollstdout();
}

function clearstdout() {
    document.getElementById("stdout_txt").value = "";
}

function scrollstdout() {
    if(document.getElementById("autoscroll").checked) {
        var stdout = document.getElementById("stdout_txt");
        stdout.scrollTop = stdout.scrollHeight;
    }
}

function selectvisibility() {
    minigrace.vis = document.getElementById("defaultVisibility").value;
}
window.addEventListener("load", function() {
    document.getElementById('stdout_txt').value = "";
    document.getElementById('stderr_txt').value = "";
    if (window.location.hash) {
        if (window.location.hash.substring(0, 8) == "#sample=") {
            var s = window.location.hash.substring(8);
            loadsample(s);
        }
    }
});


/***************************************/
/****     Start of Tabs Section     ****/
/***************************************/
// manages the tabs on the right hand side of the screen (Program output/Generated code/Canvas)
function outputTabManager(that, target) {
    if (!that.className.match("selected")) {
        var divs = document.getElementById("output").getElementsByTagName("div");
        for (var i=0;i<divs.length;i++) {
            if (divs[i].className) {
                if (divs[i].className.match("selected")) {
                    divs[i].className = that.className;
                }
            } else {
                divs[i].style.display = "none";
            }
        }
        that.className += " selected";
        document.getElementById(target).style.display = "inline";
        if (target == "stdout_tab")
            document.getElementById("stdout_options").style.display = "inline";
    }
}

function startup() {
  document.getElementById('code_txt_real').style.display = 'block';
  document.getElementById('code_txt').style.display = 'none';
  editor = ace.edit("code_txt_real");
  editor.$blockScrolling = Infinity;
  var GraceMode = require("ace/mode/grace").Mode;
  editor.getSession().setMode(new GraceMode());
  editor.setBehavioursEnabled(false);
  editor.setHighlightActiveLine(true);
  editor.setShowFoldWidgets(false);
  editor.setShowPrintMargin(false);
  editor.getSession().setUseSoftTabs(true);
  editor.getSession().setTabSize(4);
  editor.commands.bindKeys({"ctrl-l":null, "ctrl-shift-r":null, "ctrl-r":null, "ctrl-t":null})

  document.getElementById('code_txt_real').style.height = document.getElementById('stdout_txt').clientHeight + 'px';
  document.getElementById('code_txt_real').style.width = (document.getElementById('stdout_txt').clientWidth - 30) + 'px';

  // resize ace on window resize
  window.onresize = function(event) {
      document.getElementById('code_txt_real').style.height = document.getElementById('stdout_txt').clientHeight + 'px';
      document.getElementById('code_txt_real').style.width = (document.getElementById('stdout_txt').clientWidth - 30) + 'px';
  }

  // Get code from ace editor.
  getCode = function() {
    return editor.getValue();
  }
}
