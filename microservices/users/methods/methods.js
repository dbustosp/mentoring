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

exports.add = function (args, callback) {
	var name = args.name;
	var birthday = args.birthday;
	var startDate = args.startDate;
	var position = args.position;
	var username = args.username;
	var team = args.team;
	var gender = args.gender;
	var password = args.password;
	var email = args.email;

	if (name === "" || name == undefined) {
		callback( null, {'success': false, message: "The system required at least the name of the user"});
	} else {
		modelUser.create({
			name: name, 
			birthday: birthday,
			startDate: startDate,
			position: position,
			username: username,
			team: team,
			gender: gender,
			//password: password,
			email: email
		}, 
		function(err, usr) {
			if (err) {
				callback(null, {'success': false, message: err});
			} else {
				callback(null, {'success': true, message: usr});
			}
		});
	}
}

exports.remove = function (args, done) {
	console.log("init -- remove")
	done(null)
}

exports.edit = function (args, done) {
	console.log("init -- edit")
	done(null)
}