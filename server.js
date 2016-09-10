var express = require('express');
var morgan = require('morgan');

var app = express();

//Midleware
app.use(morgan('dev'));

app.get('/', function (req, res) {
	var name = 'Batman';
	res.json('My name is ' + name);
})

app.get('/catname', function (req, res) {
	res.json('Batman');
}) 

app.listen(3000, function (err) {
	if (err) throw err;
	console.log("server is running on port 3000");
});