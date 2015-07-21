var assert = require('assert');
var seneca = require('seneca')()
	.error( assert.fail )


get_users()

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