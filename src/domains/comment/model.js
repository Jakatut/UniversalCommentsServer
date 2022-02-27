const User = require('domains/user/model');

module.exports = (sequelize, Sequelize) => {
	const Comment = sequelize.define('comment', {
		id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
			primaryKey: true,
		},
		content: {
			type: Sequelize.STRING(2000),
		},
		user_id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV1
		},
		url: {
			type: Sequelize.STRING(2048), // 2048 is the max url length, at least in chrome.
		},
		created_at: {
			type: Sequelize.DATE,
		},
		edited_at: {
			type: Sequelize.DATE,
		},
		parent_comment_id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV1
		},
	});

	return Comment;
};
