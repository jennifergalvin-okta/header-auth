var http = require('http');
var express = require('express');
var app = express();
const hbs                 = require('hbs');
const path                = require('path');

  

// view engine
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' });

hbs.registerHelper('ifArray', function(item, options) {
    if(Array.isArray(item)) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

hbs.registerHelper('select', function(selected, options) {
    return options.fn(this).replace(
      new RegExp(' value=\"' + selected + '\"'),
      '$& selected="selected"');
});

// environment
app.set('views', path.join(__dirname, 'views'));


// Route for / - default page
app.get('/', function (req, res) 
{
  username = req.headers.http_remote_user;
  headers = "<pre>";
  headers += JSON.stringify(req.headers,null,4);
  headers += "/<pre>";
  return res.render('layout', {
    username:  username,
    headers: headers
  });
})

httpPort = 8082;
http.createServer(app).listen(httpPort); 
console.log("Server started on port " + httpPort);

