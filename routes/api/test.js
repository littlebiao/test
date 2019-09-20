var express = require('express');
var router = express.Router();
var crypto = require('crypto')
// var pool = require('../../dataBaseConfig')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query)


var hash = crypto.createHmac('biao',['geng', 'biao']).update('').digest('hex')
// console.log(hash)
	// pool.getConnection(function(err, connection) {
	// 	connection.query('SELECT * FROM about', function (error, results, fields) {
	// 	  	if (error) throw error;
	// 	  	connection.end()
	// 	  	res.send({ data: results || [] })
	// 	});
	// })
	res.send({ data: { test: 'biao'  } })

});


module.exports = router;