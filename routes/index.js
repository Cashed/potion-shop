var express = require('express');
var router = express.Router();
var potions = require('../db/mongoDB');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/potions', function(req, res, next) {
  potions.find(function(error, potions) {
    if (error) {
      console.log(error);
      return;
    }
    res.send(potions);
  });
});

module.exports = router;
