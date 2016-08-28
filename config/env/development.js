/**
 * Created by Matt on 8/21/2016.
 */

module.exports = {
    //Development config options
    db:'mongodb://localhost/mean-development-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'Application Isssssd',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};