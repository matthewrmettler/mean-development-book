/**
 * Created by Matt on 8/26/2016.
 */

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

/** User **/
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: [/.+\@.+\..+/, "Please use a valid e-mail address."]
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Username is required'
    },
    password: {
        type: String,
        validate: [
            function(password) {
                return password && password.length >= 6;
            },
            'Password should be at least 6 characters.'
        ]
    },
    created: {
        type: Date,
        default: Date.now()
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {}
});

/** Virtual attributes **/
UserSchema.virtual('fullName').get(function() {
        return this.firstName + " " + this.lastName;
    }).set(function(fullName) {
        var splitName = fullName.split(' ');
        this.firstName = splitName[0] || "";
        this.lastName = splitName[1] || "";
});

/** Static model methods **/
UserSchema.statics.findOneByUsername = function(username, callback) {
        this.findOne({ username: new RegExp(username, 'i') }, callback);
};

/** Middlware **/
UserSchema.pre('save', function(next) {
    this.wasNew = this.isNew;

    if (this.password) {
        this.salt = crypto.randomBytes(16).toString('base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');
    _this.findOne({
        username: possibleUsername
    }, function(err, user) {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername(username, (suffix || 0) +
                    1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.post('save', function(next) {
    if(this.wasNew) {
        console.log('A new user was created.');
    } else {
        console.log('A user updated its details.');
    }
});

/** Config the schema and create the model **/
UserSchema.set('toJSON', { getters: true, virtuals: true});
mongoose.model('User', UserSchema);
