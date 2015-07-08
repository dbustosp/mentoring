var seneca = require('seneca')()
var express = require('express');


/*seneca.add( {role:'math', cmd:'sum'}, function(args,callback) {
      var sum = args.left + args.right
        callback(null,{answer:sum})
})

seneca.act( {role:'math', cmd:'sum', left:1, right:2}, function(err,result) {
      if( err ) return console.error( err )
            console.log(result)
})*/

seneca.add({role:'math', cmd:'product'}, function(args,callback) {
      var product = args.left * args.right
        callback(null,{answer:product})
})

seneca.use('transport')

var app = express();
app.use( seneca.export('web') )
app.listen(10171)

//var connect = require('connect')
//var app = connect()
//  .use( connect.json() )
//  .use( seneca.service() )
//  .listen(10171)
