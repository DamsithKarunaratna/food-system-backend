'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./api/routes');
var jwt = require('jsonwebtoken');
const cors = require('cors');
const logger = require('./api/middleware/requestLogger').myLogger;

const app = express();
app.set('port', process.env.PORT || 3001);

// setting middleware
app.use(cors());
app.use(bodyparser.json()); // parse JSON request body
app.use(bodyparser.raw()); // parse raw request body
app.use(bodyparser.urlencoded({ extended: false })); // parse x-www-form-urlencoded request body
app.use(logger);
app.use('/api', routes);

// starting the server

// app.listen(port, () => {
//     console.log( '\x1b[31mA\x1b[32mP\x1b[33mP\x1b[34m S\x1b[35mT\x1b[31mA\x1b[32mR\x1b[35mT\x1b[33mE\x1b[32mD\x1b[0m');
//     console.log("Food API listening on port " + port);
// });

app.listen(app.get('port'), () => {
    console.log( '\x1b[31mA\x1b[32mP\x1b[33mP\x1b[34m S\x1b[35mT\x1b[31mA\x1b[32mR\x1b[35mT\x1b[33mE\x1b[32mD\x1b[0m');
    console.log('Food API listening on port ' + app.get('port'));
});