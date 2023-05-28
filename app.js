const http = require('http');
const os = require('os');

console.log("Maina's server starting...");

var requestCount = 0;

var handler = function(request, response){
    console.log("Received request from" + request.connection.remoteAddress);
    requestCount++;
    if (requestCount > 5) {
        response.writeHead(500);
        response.end("Maina's server ain't working!! This is server number six");
        return;
    }
    response.writeHead(200);
    response.end("Maina's server ain't okay keep debuggng" + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
