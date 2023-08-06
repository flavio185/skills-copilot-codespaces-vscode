// Create web server and return comment data
// Usage: node comment.js

// Load modules
var http = require('http');
var fs = require('fs');

// Create web server
var server = http.createServer(function(request, response){
    // Read HTML file
    fs.readFile('HTMLPage.html', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
});

// Start web server
server.listen(52273, function(){
    console.log('Server Running at http://