module.exports = function (sequelize, DataTypes) {
    const Account = sequelize.define("Account", {
        account_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: true,
            primaryKey: true
        },
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
        google_login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,  // height will be converted to inches before being added to the database
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
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