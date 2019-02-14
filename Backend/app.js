"use-strict"

var express = require('express');
var router = express.Router(); 
var bodyParser = require('body-parser');
var routes = require('./app/routes');


var app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 8081

app.use('/', routes.api(app));

var server = app.listen(port, function() {

    console.log('Server running at port ', port);

});