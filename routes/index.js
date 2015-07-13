var express = require('express');
var router = express.Router();
var schemas = require("../app/schemas.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  schemas.User.find({}, function(err, users){
    res.render('index', { title: 'Underfoot Chores', users: JSON.stringify(users) });
  });
});

module.exports = router;
