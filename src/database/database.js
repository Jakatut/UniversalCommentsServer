require('dotenv').config();
var { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.comment = require('domains/comment/model')(sequelize, Sequelize);
db.user = require('domains/user/model')(sequelize, Sequelize);
module.exports = db;