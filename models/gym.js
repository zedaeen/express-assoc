'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gym = sequelize.define('Gym', {
    name: DataTypes.STRING
  }, {});
  Gym.associate = function(models) {
    // associations can be defined here
    Gym.hasMany(models.Trainer)
  };
  return Gym;
};

// GymId