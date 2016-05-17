var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');

var app = express();

app.configure(function () {
  app.set('port', 80);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'assets')));

});

var options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send()
});
