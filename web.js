var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World From HEROKU BITCH! for more go here: http://devcenter.heroku.com/articles/node-js');
});

var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);