/**
 * Created by Matt on 8/26/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Schemas
 */

/** User **/
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

mongoose.model('User', UserSchema);
