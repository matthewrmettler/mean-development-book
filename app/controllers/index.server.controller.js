/**
 * Created by Matt on 8/21/2016.
 */

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log("lastVisit: " + req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
      title: 'Hello world!'
    });
};