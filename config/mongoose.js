/**
 * Created by Matt on 8/26/2016.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    /** Import schemas **/
    require('../app/models/user.server.model');

    return db;
}