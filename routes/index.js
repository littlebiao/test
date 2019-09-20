var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log(req.body.age, typeof req.body)
  // res.render('index', { title: 'Express' });
  const query = req.query;
  const { echostr } = query
  console.log(query)
  console.log(echostr)
res.send(echostr)  

});

module.exports = router;
