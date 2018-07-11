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
        account_id:{
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