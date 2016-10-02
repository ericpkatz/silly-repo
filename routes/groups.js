var router = require('express').Router();
var models = require('../db').models;
var Group = models.Group;

module.exports = router;

router.get('/', function(req, res, next){
  Group.findAll()
    .then(function(groups){
      res.send(groups);
    })
    .catch(next);
});
