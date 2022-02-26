const { DataTypes } = require('sequelize');
var User = require('domains/user/model');

module.exports = (sequelize) => {
	var Comment = sequelize.define('comment', {
		id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
		},
		content: {
			type: DataTypes.STRING(2000),
		},
		user_id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1
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
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1
		},
	});
};
