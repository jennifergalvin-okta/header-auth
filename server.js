var http = require('http');
var express = require('express');
var app = express();


// Route for / - default page
app.get('/', function (req, res) 
{
	res.setHeader('content-type', 'application/json');
	res.send(JSON.stringify(req.headers,null,4));
})

httpPort = 8082;
http.createServer(app).listen(httpPort); 
console.log("Server started on port " + httpPort);

