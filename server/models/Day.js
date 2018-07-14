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
<<<<<<< HEAD
            allowNull: false
        },
        bodyfat_percentage: {
            type: DataTypes.DECIMAL,
            allowNull: false
=======
            allowNull: true
        },
        body_fat_percentage: {
            type: DataTypes.DECIMAL,
            allowNull: true
>>>>>>> 771661e1228bb16c7e64a6b0026e5b46ddfdbe38
        },
        deviation: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
<<<<<<< HEAD
=======
        account_id: {
          type: DataTypes.INTEGER,
            allowNull: false
        }
>>>>>>> 771661e1228bb16c7e64a6b0026e5b46ddfdbe38
    });

    Day.associate = function (models) {
        Day.belongsTo(models.Account, {
            foreignKey: 'account_id' })
    };

    return Day;
};