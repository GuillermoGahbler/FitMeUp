module.exports = function (sequelize, DataTypes) {
    const Day = sequelize.define("Day", {
        entry_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
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