var dbUrl = 'potions';
var mongojs = require('mongojs');
var db = mongojs(dbUrl).collection('potion');

module.exports = db;
