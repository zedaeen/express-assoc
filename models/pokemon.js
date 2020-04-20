'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
    Pokemon.belongsToMany(models.Trainer, {
      through: 'PokemonTrainers'
    })
  };
  return Pokemon;
};