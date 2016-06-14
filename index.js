var express = require('express');
var app = express();



var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

$(document).ready(function() {
    console.log("index.js loaded");
});

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/home', function (req, res) {
  res.render('home');
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/inspiration', function (req, res) {
  res.render('inspiration');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
