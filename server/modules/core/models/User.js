var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	email: {
		type:String,
		unique: true,
		lowercase: true,
		trim: true
	},

	password: String,

	profile: {
		firstName: {
			type: String,
			trim: true
		},
		lastName: {
			type: String,
			trim: true
		},
		displayName: {
			type: String,
			trim: true
		},
		gender: {
			type: String,
			enum: ['Male', 'Female']
		},
		location: {
			type: String,
			default: ''
		},
		phone: {
			type: String,
			default: ''
		}
	},

	preferences: {
		timezone: {
			type: String,
			default: ''
		},
		unit_of_measure: {
			type: String,
			enum:['metric','imperial','imperial_decimal']
		}
	},

	created: {
		type: Date,
		default: Date.now
	},

	updated : {
		type: Date,
		default: Date.now
	},

	/*
	Note: Properties resetPasswordToken and resetPassword are not part of the above document,
	because they are set only after password reset is submitted.
	And since we haven't specified default values, those properties will not be set when creating a new user.
	*/

	resetPasswordToken: String,
	resetPasswordExpires: Date

});

/**
* Password hash middleware.
*/

userSchema.pre('save', function(next) {
	var user = this;
	var SALT_FACTOR = 10;

	if (!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

/**
* Helper method for validating user's password.
*/
userSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};


module.exports = mongoose.model('User', userSchema);
