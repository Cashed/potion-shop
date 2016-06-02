var dbUrl = process.env.MONGODB_URI || 'potions';
var mongojs = require('mongojs');
var db = mongojs(dbUrl).collection('potions');

module.exports = db;
