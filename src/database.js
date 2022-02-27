var { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.comment = require('domains/comment/model')(sequelize, Sequelize);
db.user = require('domains/user/model')(sequelize, Sequelize);

db.comment.belongsTo(db.user, {foreignKey: 'user_id'})
db.user.hasMany(db.comment, {foreignKey: 'user_id', as: 'comments'})

module.exports = db;