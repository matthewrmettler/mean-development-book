/**
 * Created by Matt on 8/21/2016.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/** Make sure mongoose is imported first, so other modules can use the schemas **/
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var port = 3000;
var db = mongoose();
var app = express();

app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:' + port + "/");