module.exports = function (sequelize, DataTypes) {
    const Day = sequelize.define("Day", {
        
        date: {
            type: DataTypes.STRING,
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
        }
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