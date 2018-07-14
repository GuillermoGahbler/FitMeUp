
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
        height: {
            type: DataTypes.INTEGER,  // height will be converted to inches before being added to the database
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Account.associate = function (models) {
        Account.hasMany(models.Day, {
            foreignKey: 'account_id',
            onDelete: "cascade"
            });
    };
  return Account;
};