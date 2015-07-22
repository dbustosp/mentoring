var assert = require('assert');
var seneca = require('seneca')()
	.error( assert.fail )


//get_users()
//get_user()
create_user()

// Testing get users
function get_users() {
	seneca
		.client()
		.act(
			{action: 'getAll'},
			function( err, result) {
				assert.equal( result.message.length, 64);
			}
		)
}

// Testing specific user
function get_user() {
	seneca
		.client()
		.act(
			{action: 'get', username: 'nal2'},
			function( err, result) {
				assert.equal( result.message.team, 'SPDG');
			}
		)
}
	
// Testing create user
function create_user() {
	seneca
		.client()
		.act(
			{
				action: 'add', 
				name: 'Juan Carlos Faundez',
				birthday: '01/01/1990',
				startDate: '21/07/2015',
				position: 'Scrum Master Entry',
				username: 'jcf10',
				team: 'FRAUD',
				gender: 'Masculino',
				//password: '',
				email: 'jcfaundez10@equifax.com'
			},
			function (err, user_saved) {
				this.act(
					{action:'get', username: user_saved.message.username},
					function(err, result) {
						assert.equal(user_saved.message.username, result.message.username);
					} 
				)
			}
		)
}