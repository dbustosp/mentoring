var seneca = require('seneca')()

//seneca
//	.client()
//	.act(
//		{role:'math', cmd:'product', left:3, right:4},
//		function(err, result) {
//			if (err) return console.error(err)
//			console.log(result)
//		})

seneca
	.client()
	.act(
		{action: 'getAll'},
		function(err, result) {
			if (err) return console.error(err)
			console.log(result)
		})