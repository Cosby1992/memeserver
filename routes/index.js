var express = require('express');
var router = express.Router();

var fs = require('fs');
var myDir = './public/meme/';
var files = fs.readdirSync(myDir);


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', memepaths: files });

});

module.exports = router;
