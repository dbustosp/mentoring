var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/efx_employee');
var modelUser = require('../model/user');

exports.getAll = function(args , callback) {
	modelUser.find({}, function(err, users) {
		if (err) {
			callback(new Error(err));
		} else {
			callback(null, {message: users})
		}
	});
}

exports.get = function(args , callback) {
	var username = args.username;
	modelUser.findOne({username: username}, function(err, usr) {
		if (err) {
			callback(new Error(err));
		} else {
			if (!usr) {
				callback(new Error(err));
			} else {
				user = {
					username: usr.username,
					name: usr.name, 
					team: usr.team,
					birthday: usr.birthdaym,
					gender: usr.gender,
					email: usr.email,
					startDate: usr.startDate,
					position: usr.position,
				};
				callback(null, {message: user});
			}
		}
	});
}

exports.add = function(args, callback) {
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
		callback(new Error("Parameters wrong!"));
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
				callback(new Error(err));
			} else {
				callback(null, {message: usr});
			}
		});
	}
}

exports.remove = function(args, callback) {
	var username = args.username;

	console.log("username: " + username);

	if (username === "" || username === undefined) {
		callback(new Error("Please provide an username!"));
	} else {
		modelUser.findOneAndRemove({username: username}, function(err) {
			if (err) {
				callback(new Error(err));
			} else {
				callback(null, {message: "User removed successfully!"});
			}
		});
	}
}


