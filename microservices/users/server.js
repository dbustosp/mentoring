var seneca = require('seneca')()
var express = require('express')

var methods = require('./methods/methods');

seneca
	.add(
		{role:'math', cmd:'product'},
		function(args, callback) {
			var product = args.left * args.right
			callback(null, {answer:product})
		})
	.listen()

seneca
	.add ({action: 'getAll'}, methods.getAll)
	.add ({action: 'get'}, methods.get)
	.add ({action: 'add'}, methods.add)