var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res) {
  var name = 'Arash';
  res.json("My name is " + name);
});

app.get('/catname', function(req, res) {
  res.json("batman");
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is Running on port 3000");

});
