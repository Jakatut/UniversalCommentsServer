const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        created_at: {
            type: DataTypes.DATE
        }
    });
}