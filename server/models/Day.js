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
        account_id: {
            allowNull: false,
            references: {
                // This is a reference to another model
                model: Account,
                // This is the column name of the referenced model
                key: 'account_id'
            }
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