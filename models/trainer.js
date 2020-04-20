'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    name: DataTypes.STRING,
    GymId: DataTypes.INTEGER
  }, {});
  Trainer.associate = function(models) {
    // associations can be defined here
    Trainer.belongsTo(models.Gym)
    Trainer.belongsToMany(models.Pokemon, {
      through: "PokemonTrainers"
    })
  };
  return Trainer;
};