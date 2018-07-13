
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
      gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    feet: { 
      type : DataTypes.INTEGER,
      allowNull: true
    },
    inches: {
      type : DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type : DataTypes.INTEGER,
      allowNull: true
    } ,
    bodyFat: {
      type : DataTypes.INTEGER,
      allowNull: true
    },
    hip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    neck: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    waist: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      foreignKey: 'account_id',
      onDelete: "cascade"
    })
  };
  return Account;
};