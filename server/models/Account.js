
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
<<<<<<< HEAD
        // Account.hasMany(models.Week, {
        //     foreignKey: {
        //         allowNull: false
        //     },
        //     onDelete: "cascade"
        // })

=======
>>>>>>> 771661e1228bb16c7e64a6b0026e5b46ddfdbe38
        Account.hasMany(models.Day, {
            foreignKey: 'account_id',
            onDelete: "cascade"
            });
    };
  return Account;
};