var seneca = require('seneca')()
var express = require('express');

var methods = require('./methods/methods')

seneca
	.add(
		{role:'math', cmd:'product'}, 
		function(args,callback) {
      		var product = args.left * args.right
        	callback(null,{answer:product})
		})
	.listen()




// get all users: {action: getAll}
seneca
  .add ({action: 'getAll'}, methods.getAll)


// get specific user: {action: <name-action>, user: <id-user>}








//seneca.use('transport')

//var app = express();
//app.use( seneca.export('web') )
//app.listen(10171)

//var connect = require('connect')
//var app = connect()
//  .use( connect.json() )
//  .use( seneca.service() )
//  .listen(10171)
