const { DataTypes } = require('sequelize/types');
const { sequelize, Sequelize } = require('../../database');
var User = require('../user/model');

module.exports = (sequelize, Sequelize) => {
	var Comment = sequelize.define('comment', {
		id: {
			type: DataTypes.UUIDV4,
		},
		content: {
			type: DataTypes.STRING(2000),
		},
		user_id: {
			type: DataTypes.UUIDV4,
		},
		url: {
			type: DataTypes.STRING(2048), // 2048 is the max url length, at least in chrome.
		},
		created_at: {
			type: DataTypes.DATE,
		},
		edited_at: {
			type: DataTypes.DATE,
		},
		parent_comment_id: {
			type: DataTypes.UUIDV4,
		},
	});
    Comment.belongsTo(User, { through: 'UserComments' })
};
