'use strict';
module.exports = (sequelize, DataTypes) => {
  const PokemonTrainer = sequelize.define('PokemonTrainer', {
    TrainerId: DataTypes.INTEGER,
    PokemonId: DataTypes.INTEGER
  }, {});
  PokemonTrainer.associate = function(models) {
    // associations can be defined here
  };
  return PokemonTrainer;
};