/**
 * Created by Matt on 8/21/2016.
 */

module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}