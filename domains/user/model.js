var Comment = require('../comment/model');

module.exports = (sequelize, _Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.UUIDV4
        },
        created_at: {
            type: DataTypes.DATE
        }
    });

    User.hasMany(Comment, { through: "UserComments" });
}