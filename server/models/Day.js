module.exports = function (sequelize, DataTypes) {
    const Day = sequelize.define("Day", {
        
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // DEFAULT: 0
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        carbs: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fat: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        body_fat_percentage: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        deviation: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        account_id: {
          type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Day.associate = function (models) {
        Day.belongsTo(models.Account, {
            foreignKey: 'account_id' })
    };

    return Day;
};