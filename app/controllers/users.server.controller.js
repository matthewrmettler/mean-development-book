/**
 * Created by Matt on 8/26/2016.
 */

var User = require('mongoose').model('User');

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