/**
 * Created by Matt on 8/21/2016.
 */

exports.render = function(req, res) {
    res.render('index', {
      title: 'Hello world!'
    });
};