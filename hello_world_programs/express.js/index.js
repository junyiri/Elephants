var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome World!');
});

app.get('/potato', function (req, res) {
  res.send('<img src = "http://whatscookingamerica.net/Vegetables/Russet_Potato.jpg">');
});

app.get('*', function (req, res){
  res.send('404 Error');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
