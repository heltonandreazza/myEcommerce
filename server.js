var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsEngine = require('ejs-mate');

var User = require('./models/user');

var app = express();

mongoose.connect('mongodb://root:root@ds029486.mlab.com:29486/ecommerce', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Nicee!!');
    }
});

//Midleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('ejs', ejsEngine);
app.set('view engine', 'ejs');

app.post('/create-user', function(req, res) {
    var user = new User();

    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save(function(error) {
        if (error) return next(error);
        res.json('Successfully created a new user.');
    });
});

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("server is running on port 3000");
});