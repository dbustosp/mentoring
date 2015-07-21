// Here is gonna be all the functions to manage users
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/efx_employee');
var modelUser = require('../model/user');

exports.getAll = function (args , callback) {
	modelUser.find({}, function(err, users) {
		if (err) callback(null, {'success': false, message: 'Something wrong happened!'})
		callback(null, {'success': true, message: users})
	});
}

exports.get = function (args , callback) {
	var username = args.username;
	console.log("username: " + username);

	modelUser.findOne({username: username}, function(err, usr) {
		if (err) {
			callback(null, {'success': false, message: "Ups! Something is wrong."});
		} else {
			if (!usr) {
				callback(null, {'success': false, message: "User did not find."});
			} else {
				user = {
					username: usr.username,
					name: usr.name, 
					team: usr.team,
				};
				callback(null, {'success': true, message: user});
			}
		}
	});
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