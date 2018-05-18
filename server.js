var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./api/routes')
var cors = require('cors');

var app = express()
var port = process.env.PORT || 3000;

app.use(cors());
app.use('/api', routes);

app.listen(port, () => {
    console.log("Food API listening on port " + port + " :)");
});