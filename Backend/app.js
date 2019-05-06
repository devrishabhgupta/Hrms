"use-strict"

var express = require('express');
var router = express.Router(); 
var bodyParser = require('body-parser');
var routes = require('./app/routes');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 8081;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/', routes.api(app));

var server = app.listen(port, function() {

    console.log('Server running at port ', port);

});