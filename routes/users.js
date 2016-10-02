var router = require('express').Router();
var models = require('../db').models;
var User = models.User;

module.exports = router;

router.get('/', function(req, res, next){
  User.findAll()
    .then(function(users){
      res.send(users);
    })
    .catch(next);
});
