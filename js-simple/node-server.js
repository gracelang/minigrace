var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
  var root = ".";
  var filePath;
  if (request.method !== 'GET') {
    response.writeHead(404);
    response.end()
    console.log("404. not get request");
    return;
  } else {
    var filePath = request.url;
    console.log("GET " + root + filePath);
  }
  var s = fs.createReadStream(root + filePath);
  s.on('error', function () {
    console.log(filePath + " #404");
    response.writeHead(404);
    response.end();
  });
  s.once('fd', function () {
    console.log(filePath + " #200");
    request.writeHead(200);
    response.end();
  });
  s.on('data', function(chunk) {
    //console.log('got %d bytes of data from ' + filePath, chunk.length);
  });
  
  s.pipe(response);
}).listen(8125);
  
console.log('Server running at http://127.0.0.1:8125/');

