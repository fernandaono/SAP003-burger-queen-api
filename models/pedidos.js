'use strict'

module.exports = (sequelize, DataTypes) => {
    const pedidos = sequelize.define('pedidos', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        data_criacao: DataTypes.DATE,
        mesa: DataTypes.INTEGER,
        nome: DataTypes.STRING
    }, {});
    
    pedidos.associate = function(models) {
        pedidos.hasMany(models.pedidos_itens, {foreignKey: 'pedido_id'})
    }

    return pedidos;
}