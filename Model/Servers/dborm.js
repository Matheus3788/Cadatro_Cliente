//db-orm.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('webi', 'root', 'alunofatec', {delect: 'mysql', host: 'localhost', port:3306})

module.exports = (sequelize)