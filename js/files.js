var downloadlink = document.getElementById('downloadlink');

function updateDownloadLink() {
    if (typeof URL == 'undefined')
        return;
    if (downloadlink.href)
        URL.revokeObjectURL(downloadlink.href);
    var blob = new Blob([getCode()], {type: "text/x-grace;charset=utf-8"});
    document.getElementById('downloadlink').href = URL.createObjectURL(blob);
    downloadlink.download = document.getElementById('modname').value + ".grace";
}

if (ace)
    editor.on("change", updateDownloadLink);
else
    document.getElementById('code_txt').addEventListener('change',
            updateDownloadLink);

document.getElementById('modname').addEventListener('change', function(ev) {
    downloadlink.download = this.value + ".grace";
});

function loadFile() {
    var userfile = document.getElementById('userfile');
    var reader = new FileReader();
    reader.readAsText(userfile.files[0]);
    reader.addEventListener("load", function() {
        if (ace)
            editor.setValue(reader.result, -1);
        else
            document.getElementById('code_txt').value = reader.result;
    });
    var name = userfile.files[0].name;
    if (name.substring(name.length - 6) == ".grace")
        name = name.substring(0, name.length - 6);
    document.getElementById('modname').value = name;
    updateDownloadLink();
}

updateDownloadLink();
