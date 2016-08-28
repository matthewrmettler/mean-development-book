/**
 * Created by Matt on 8/26/2016.
 */

var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

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

    //Signing up and logging in
    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: 'signin',
            failureFlash: true
        }));

    app.get('/signout', users.signout);
};