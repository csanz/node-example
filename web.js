var express = require('express')
  , stylus        = require('stylus')
  , nib           = require('nib');

var app = express.createServer(express.logger());

//  Configure general expressjs
 
app.configure(function(){
 
 this
   .use(express.cookieParser())
   .use(express.bodyParser())
   .use(express.errorHandler({dumpException: true, showStatck: true}))
   .use(express.session({ secret: 'supersecretnijakey'}))
});

//  Configure template engine

app.configure(function(){
 this
   .set('views', __dirname + '/views')
   .set('view engine', 'jade')
   .use(stylus.middleware({
     src: __dirname + '/public',
     compile: compile
     }))
   .use(express.static(__dirname + '/public'))
});

//  Small compile helper

function compile(str, path){
  return stylus(str)
    .set('filename', path)
    .include(nib.path)
}

app.get('/', function(req, res) {
  res.render('home');
});

var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);