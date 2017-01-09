var http = require('http');
var express = require('express');
var app = express();


// Route for / - default page
app.get('/', function (req, res) 
{
	res.setHeader('Content-Type', 'text/html');

	formattedResponse = "<html><body><h1>What Just Happened?</h1><br>";
	formattedResponse += "<img src=\"https://apiaccessmgmt.galvin.ninja/images/header-based-auth-diagram.png\"/>";
	formattedResponse += "<br><h1>Headers Received Are Below</h1><br>";
	formattedResponse += "<pre>";
	formattedResponse += JSON.stringify(req.headers,null,4);
	formattedResponse += "</pre>";
	formattedResponse += "</body></html";

	res.send(formattedResponse);
})

httpPort = 8082;
http.createServer(app).listen(httpPort); 
console.log("Server started on port " + httpPort);

