module.exports = function (sequelize, DataTypes) {
    const Account = sequelize.define("Account", {
         
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        google_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        height: {
            type: DataTypes.INTEGER,  // height will be converted to inches before being added to the database
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bodyFat : {
            type: DataTypes.FLOAT,
            allowNull : true
        }
    });
    Account.associate = function (models) {
        Account.hasMany(models.Week, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        })

        Account.hasMany(models.Day, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        })
    };
    return Account;
};