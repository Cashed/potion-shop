var dbUrl = process.env.MONGODB_URI || 'potions';
var mongojs = require('mongojs');
var db = mongojs(dbUrl).collection('potion');

module.exports = db;
