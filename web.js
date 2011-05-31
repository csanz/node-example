var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world from heroku yo!');
})

app.listen(3000);