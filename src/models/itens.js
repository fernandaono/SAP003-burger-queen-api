'use strict';

module.exports = (sequelize, DataTypes) => {
  const itens = sequelize.define('itens', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2)
  }, {});
  /*itens.associate = function(models) {
    itens.hasMany(models.pedidos_itens)
  };*/
  return itens;
};
