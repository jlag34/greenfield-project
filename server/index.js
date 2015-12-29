var express = require('express');
var mongoose = require('mongoose');
var app = express();

// mongoose.connect('mongodb://localhost/dibs');

//this line is used to set up the mongodb. only uncomment when using
//the db, otherwise server will not start. if using mongo make sure
//you have mongo setup on your computer and run mongo for the server
//to start


require('./config/middleware.js')(app, express);

app.listen(3000);