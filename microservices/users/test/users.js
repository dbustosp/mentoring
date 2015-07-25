var assert = require('assert');
var seneca = require('seneca')()
	//.error( assert.fail )


NUM_USERS = 64

//get_users()
//get_user()
//create_user()
//remove_user()

function get_users() {
	seneca
		.client()
		.act(
			{action: 'getAll'},
			function(err, users) {
				if (err) return console.error(err);
				assert.equal( users.message.length, NUM_USERS);
			}
		)
}

function get_user() {
	seneca
		.client()
		.act(
			{action: 'get', username: 'nal2'},
			function(err, result) {
				if (err) return console.error(err);
				assert.equal( result.message.team, 'SPDG');
			}
		)
}

function create_user() {
	seneca
		.client()
		.act(
			{
				action: 'add', 
				name: 'Juan Carlos Faundez 16',
				birthday: '01/01/1990',
				startDate: '21/07/2015',
				position: 'Scrum Master Entry',
				username: 'jcf16',
				team: 'FRAUD',
				gender: 'Masculino',
				//password: '',
				email: 'jcfaundez16@equifax.com'
			},
			function (err, user_saved) {
				if (err) return console.error(err);
				this.act(
					{action:'get', username: user_saved.message.username},
					function(err, result) {
						if (err) return console.error(err);
						assert.equal(user_saved.message.username, result.message.username);
					} 
				)
			}
		)
}

function remove_user() {
	seneca
		.client()
		.act (
			{action: 'remove', username: 'jcf16'},
			function(err, result) {
				if (err) return console.error(err);

				this.act (
					{action: 'getAll'},
					function(err, users) {
						if (err) return console.error(err);
						assert.equal(NUM_USERS, users.message.length)
					}
				)

			}
		)
}