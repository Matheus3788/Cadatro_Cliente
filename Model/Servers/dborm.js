//db-orm.js

const Sequelize = require('sequelize');

const Sequelize = new Sequelize('webi', 'root', 'root', {delect: 'mysql', host: 'localhost', port:3306})

module.exports = (sequelize)