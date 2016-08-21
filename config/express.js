/**
 * Created by Matt on 8/21/2016.
 */

var express = require('express');

module.exports = function() {
    var app = express();
    require('../app/routes/index.server.routes')(app);
    return app;
}