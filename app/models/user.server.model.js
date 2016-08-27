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
    email: {
        type: String,
        index: true,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 6;
            },
            'Password should be at least 6 characters.'
        ]
    },
    created: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    },
    website: {
        type: String,
        get: function(url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://')
                    !== 0) {
                    url = 'http://' + url;
                }
                return url;
            }
        }
    }
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
    next();
});

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
