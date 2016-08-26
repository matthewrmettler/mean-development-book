/**
 * Created by Matt on 8/26/2016.
 */

var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users').post(users.create);
}