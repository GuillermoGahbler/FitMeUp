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
      type: DataTypes.DECIMAL,
      allowNull: true
    },

    neck: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    waist: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bodyMass: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fatMass: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bodyFat: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hip: {
      type: DataTypes.DECIMAL,
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