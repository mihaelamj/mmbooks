var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongoDB, and if it does not exist it will create it
var db = mongoose.connect('mongodb://localhost/bookAPI');

//fetch model
var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 8000;

//use body parser urlencoded must be before json, or the app will hang
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//injecting a Book model into bookRouter constructor
var bookRouter = require('./routes/bookRoutes')(Book);
app.use('/api/books', bookRouter); 

app.get('/', function(req, res) {
    res.send('Welcome to my API v.1');
});

app.listen(port, function() {
    console.log('Gulp is running app.js on port:' + port);
})