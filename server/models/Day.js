module.exports = function (sequelize, DataTypes) {
    const Day = sequelize.define("Day", {
        
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: true
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
            allowNull: false
        },
        bodyfat_percentage: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        deviation: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
    });

    Day.associate = function (models) {
        Day.belongsTo(models.Account, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Day;
};