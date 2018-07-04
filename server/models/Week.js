module.exports = function (sequelize, DataTypes) {
    const Week = sequelize.define("Week", {
        measurement_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
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
        weight_change_percent: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        bodyfat_change_percent: {
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    });

    Week.associate = function (models) {
        Week.belongsTo(models.Account, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Week;
};