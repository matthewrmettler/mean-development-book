/**
 * Created by Matt on 8/20/2016.
 */

/** Setup **/
var connect = require('connect');
var app = connect();
var port = 3000;

/** Routing **/
var logger = function(req, res, next) {
    console.log(req.method, req.url);

    next();
};

var helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world!');
};

var goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye world!');
};

/** Connect the routers **/
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

/** Run the server **/
app.listen(port);
console.log("Server running at localhost:" + port);