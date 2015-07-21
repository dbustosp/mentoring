var assert = require('assert');
var seneca = require('seneca')()
	.error( assert.fail )


get_users()
get_user()

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