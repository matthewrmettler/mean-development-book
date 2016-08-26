/**
 * Created by Matt on 8/26/2016.
 */

var User = require('mongoose').model('User');

/** Create a new User object. **/
exports.create = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
       if (err) {
           return next(err);
       } else {
           res.json(user);
       }
    });
};

/** Returns a list of all the users **/
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

/** Return a JSON representation of a User object **/
exports.read = function(req, res, next) {
    res.json(req.user);
};

/**  Middleware for manipulating documents. **/
exports.userByID = function(req, res, next, id) {
    User.findOne({
       _id: id
    }, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};