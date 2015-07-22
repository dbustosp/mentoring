var mongoose = require('mongoose');
var validate = require('mongoose-validator').validate;

var userSchema = new mongoose.Schema({
	name: {type: String, unique: true, required: true},
	birthday: {type: String, unique: false, required: false},
	startDate: {type: String, unique: false, required: false},
	position: {type: String, unique: false, required: false},
	username: {type: String, unique: false, required: false},
	team: {type: String, unique: false, required: false},
	gender: {type: String, unique: false, required: false},
	//password: {type: String, unique: false, required: false},
	email: {
		type: String, 
		unique: true,
		required: false,
	}
});

module.exports = mongoose.model('User', userSchema);