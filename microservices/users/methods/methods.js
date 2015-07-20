// Here is gonna be all the functions to manage users
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/efx_employee')

exports.getAll = function (args , done) {
	modelUser.find({}, function(err, users) {
		if (err) callback(null, {'success': false, message: 'Something wrong happened!'})
		callback(null, {'success': true, message: users})
	});
}

exports.get = function (args , done) {
	console.log("init -- getUser")
	done (null)
}

exports.add = function (args, done) {
	console.log("init -- add")
	done(null)
}

exports.remove = function (args, done) {
	console.log("init -- remove")
	done(null)
}

exports.edit = function (args, done) {
	console.log("init -- edit")
	done(null)
}