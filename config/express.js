/**
 * Created by Matt on 8/21/2016.
 */

/** Import node modules **/
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

/** Mongoose and mongodb setup **/

module.exports = function() {
    var app = express();

    /** Middleware **/
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'development') {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    /** Sessions **/
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    /** Templates **/
    app.set('views', './app/views');
    app.set('view engine', 'ejs');


    /** Routing **/
    require('../app/routes/index.server.routes')(app);
    require('../app/routes/users.server.routes')(app);
    app.use(express.static('./public'));

    return app;
}