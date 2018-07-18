module.exports = function (sequelize, DataTypes) {
  const Week = sequelize.define("Week", {
  
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    feet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inches: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
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
    },
    bodyMass: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fatMass: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    bodyFat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    hip: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    },
    account_id:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });

  Week.associate = function (models) {
    Week.belongsTo(models.Account, {
      foreignKey:'account_id'   
          })
  };

  return Week;
};