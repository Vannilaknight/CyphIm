var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'CyphIM' });
});

router.post('/', function(req, res, next) {
	//TODO: Authenticate Users
	res.redirect('/dashboard');
});

module.exports = router;