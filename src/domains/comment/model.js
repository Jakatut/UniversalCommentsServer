const User = require('domains/user/model');

module.exports = (sequelize, Sequelize) => {
	const Comment = sequelize.define(
		'comment',
		{
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV1,
				primaryKey: true,
			},
			content: {
				type: Sequelize.STRING(2000),
				required: true,
			},
			user_id: {
				type: Sequelize.UUID,
				defaultValue: null,
				required: true,
			},
			url: {
				type: Sequelize.STRING(2048), // 2048 is the max url length, at least in chrome.
				required: true,
			},
			parent_comment_id: {
				type: Sequelize.UUID,
				defaultValue: null,
				required: false,
				timestamps: true,
			},
		},
		{
			tableName: 'comments',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deletedAt',
			paranoid: true,
			timestamps: true,
		  },
	);

	return Comment;
};
