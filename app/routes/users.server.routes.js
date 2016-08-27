/**
 * Created by Matt on 8/26/2016.
 */

var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    //Standard POST and GET for /users
    app.route('/users')
        .post(users.create)
        .get(users.list);

    //Route to get user by ID
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    //Call userByID() before the userID parameter is used (such as above)
    app.param('userId', users.userByID);
};