var express = require('express');
var app = express();

var exphbs  = require('express-handlebars');
var colors = ["Red", "Blue", "Green", "Purple", "Pink", "Yellow", "Orange"];

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/home', function (req, res) {
	var randomColor = colors[Math.floor(Math.random()*colors.length)];
	res.render('home', { inspirational: randomColor });
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
