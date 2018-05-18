var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./api/routes');
var cors = require('cors');
var logger = require('./api/middleware/requestLogger').myLogger;

var app = express();
var port = process.env.PORT || 3000;

// setting middleware
app.use(cors());
app.use(bodyparser.json()); // parse JSON request body
app.use(bodyparser.raw()); // parse raw request body
app.use(bodyparser.urlencoded({ extended: false })); // parse x-www-form-urlencoded request body
app.use(logger);
app.use('/api', routes);

// starting the server
app.listen(port, () => {
    console.log("Food API listening on port " + port);
});